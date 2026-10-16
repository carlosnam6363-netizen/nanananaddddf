import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

sys.stdout.reconfigure(encoding='utf-8')

def test_knou_grades_and_crud():
    chrome_options = Options()
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1400,1100")

    driver = webdriver.Chrome(options=chrome_options)
    try:
        html_path = os.path.abspath("index.html")
        driver.get(f"file:///{html_path}")
        time.sleep(2)

        # 1. Check console errors on startup
        logs = driver.get_log("browser")
        js_errors = [l for l in logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 1] Console errors on load: {len(js_errors)}")
        for err in js_errors:
            print("  Error:", err['message'])
        assert len(js_errors) == 0, f"Found {len(js_errors)} JavaScript errors!"

        # 2. Switch to KNOU tab
        driver.execute_script("window.app.switchTab('knou');")
        time.sleep(1)

        # Verify plan table element exists
        plan_el = driver.find_element(By.ID, "knou-credit-plan")
        assert plan_el is not None, "knou-credit-plan element not found!"
        print("[TEST 2] KNOU tab switched and credit plan table loaded.")

        # 3. Check Initial GPA and KPI cards
        gpa_text = driver.execute_script("""
            const plan = window.app ? window.app.computeKnouCreditTotals : null;
            // Let's get the rendered GPA text from DOM
            const cards = document.querySelectorAll('#knou-credit-plan .grid > div');
            return document.querySelector('#knou-credit-plan')?.innerText || '';
        """)
        assert "취득 누적 평점 (GPA)" in gpa_text, "GPA KPI card not found in DOM!"
        assert "4.25" in gpa_text or "4.2" in gpa_text, "Initial GPA ~4.25 not found!"
        print("[TEST 3] GPA KPI card rendered correctly with ~4.25 / 4.5.")

        # 4. Check Grade select elements exist in table
        grade_selects = driver.find_elements(By.CSS_SELECTOR, "#knou-credit-plan table select")
        print(f"[TEST 4] Found {len(grade_selects)} grade select dropdowns in table.")
        assert len(grade_selects) >= 32, f"Expected at least 32 grade selects, found {len(grade_selects)}"

        # 5. Test updating a grade
        # Auto-accept confirms
        driver.execute_script("window.confirm = () => true;")
        
        # Update grade of cp-08 (평생교육론) to A+
        driver.execute_script("window.app.updateKnouPlanGrade('cp-08', 'A+');")
        time.sleep(1)
        
        # Verify row cp-08 is now done and GPA updated
        row_08_status = driver.execute_script("""
            const st = window.app.getState();
            const row = (st.knou?.creditPlan?.rows || []).find(r => r.id === 'cp-08');
            return row ? { grade: row.grade, status: row.status } : null;
        """)
        print(f"[TEST 5] Updated cp-08: {row_08_status}")
        assert row_08_status is not None, "cp-08 not found in state!"
        assert row_08_status['grade'] == 'A+', "cp-08 grade was not updated to A+!"
        assert row_08_status['status'] == 'done', "cp-08 status should auto-become done on passing grade!"

        # 6. Test Adding Course via Modal
        driver.execute_script("window.app.promptAddKnouCourse('26년 1학기');")
        time.sleep(0.5)

        modal = driver.find_element(By.ID, "modal-add-knou-course")
        assert "hidden" not in modal.get_attribute("class"), "Add course modal is not visible!"
        print("[TEST 6-1] Add Course Modal opened.")

        # Fill modal fields
        driver.find_element(By.ID, "add-course-name").send_keys("청소년복지론(신규추가)")
        driver.execute_script("""
            document.getElementById('add-course-sw').value = 'opt';
            document.getElementById('add-course-major').value = '3';
            document.getElementById('add-course-grade').value = 'A0';
        """)
        driver.execute_script("document.getElementById('form-add-knou-course').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));")
        time.sleep(1)

        # Verify added course in state and DOM
        added_course = driver.execute_script("""
            const st = window.app.getState();
            return (st.knou?.creditPlan?.rows || []).find(r => r.name.includes('청소년복지론'));
        """)
        print(f"[TEST 6-2] Added course verified in state: {added_course['name']}, major={added_course['major']}, grade={added_course['grade']}")
        assert added_course is not None, "Added course not found in state!"
        assert added_course['grade'] == 'A0', "Added course grade not A0!"

        # 7. Test Adding Course via inline button
        initial_row_count = driver.execute_script("""
            const st = window.app.getState();
            return (st.knou?.creditPlan?.rows || []).length;
        """)
        driver.execute_script("window.app.addKnouPlanRow('27년 1학기');")
        time.sleep(1)
        new_row_count = driver.execute_script("""
            const st = window.app.getState();
            return (st.knou?.creditPlan?.rows || []).length;
        """)
        print(f"[TEST 7] Inline add row: {initial_row_count} -> {new_row_count}")
        assert new_row_count == initial_row_count + 1, "Inline row addition failed!"

        # 8. Test Deleting Course
        course_id_to_delete = added_course['id']
        driver.execute_script(f"window.app.deleteKnouPlanRow('{course_id_to_delete}');")
        time.sleep(1)

        deleted_check = driver.execute_script("""
            const cid = '""" + course_id_to_delete + """';
            const st = window.app.getState();
            return (st.knou?.creditPlan?.rows || []).find(r => r.id === cid);
        """)
        print(f"[TEST 8] Deleted course check (should be None): {deleted_check}")
        assert deleted_check is None, "Course was not deleted!"

        # 9. Test Reset to Seed 32 Courses
        driver.execute_script("window.confirm = () => true; window.app.resetKnouPlan();")
        time.sleep(1)
        reset_rows = driver.execute_script("""
            const st = window.app.getState();
            return (st.knou?.creditPlan?.rows || []).length;
        """)
        print(f"[TEST 9] Reset to 32 seed courses: length={reset_rows}")
        assert reset_rows == 32, f"Reset did not restore 32 courses, found {reset_rows}"

        # 10. Check no console errors throughout the entire test
        final_logs = driver.get_log("browser")
        final_errors = [l for l in final_logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 10] Final console error count: {len(final_errors)}")
        assert len(final_errors) == 0, f"Found {len(final_errors)} final errors!"

        print("\n==========================================")
        print("🎉 ALL 10 TESTS PASSED SUCCESSFULLY! 100% OK")
        print("==========================================")

    finally:
        driver.quit()

if __name__ == '__main__':
    test_knou_grades_and_crud()
