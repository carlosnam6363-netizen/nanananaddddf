import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

sys.stdout.reconfigure(encoding='utf-8')

def run_tests():
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

        # 1. Check Console errors on load
        logs = driver.get_log("browser")
        js_errors = [l for l in logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 1] Console errors on load: {len(js_errors)}")
        for err in js_errors:
            print("  Error:", err['message'])
        assert len(js_errors) == 0, f"Found {len(js_errors)} JavaScript errors!"

        # 2. Switch to KNOU tab
        driver.execute_script("window.app.switchTab('knou');")
        time.sleep(1)

        plan_el = driver.find_element(By.ID, "knou-credit-plan")
        assert plan_el is not None, "knou-credit-plan element not found!"
        print("[TEST 2] KNOU tab loaded successfully.")

        # Accept all confirm dialogs
        driver.execute_script("window.confirm = () => true;")

        # 3. Test Unified Course Manager Modal (Open 'add' tab)
        driver.execute_script("window.app.openKnouCourseManagerModal('add', '26년 1학기');")
        time.sleep(0.5)

        modal = driver.find_element(By.ID, "modal-knou-course-manager")
        assert "hidden" not in modal.get_attribute("class"), "Unified modal not visible!"
        print("[TEST 3-1] Unified Course Manager modal opened in 'add' tab.")

        # Fill and submit form
        driver.find_element(By.ID, "knou-add-name").send_keys("가족복지론(통합추가테스트)")
        driver.execute_script("""
            document.getElementById('knou-add-major').value = '3';
            document.getElementById('knou-add-grade').value = 'A+';
            document.getElementById('knou-add-status').value = 'done';
            document.getElementById('form-knou-manager-add').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        """)
        time.sleep(1)

        # Verify modal switched to delete tab and course is listed
        modal_text = modal.text
        assert "가족복지론(통합추가테스트)" in modal_text, "Added course not found in manager modal!"
        print("[TEST 3-2] Added course successfully reflected in unified manager modal.")

        # 4. Test Deleting Course from Manager Modal
        st_rows = driver.execute_script("return window.app.getState().knou.creditPlan.rows;")
        added_row = next((r for r in st_rows if "가족복지론(통합추가테스트)" in r.get('name', '')), None)
        assert added_row is not None, "Added course not found in state!"
        
        # Delete the added row from inside the modal
        driver.execute_script(f"window.confirm = () => true; window.app.deleteKnouCourseFromManager('{added_row['id']}');")
        time.sleep(1)

        st_rows_after = driver.execute_script("return window.app.getState().knou.creditPlan.rows;")
        assert not any(r['id'] == added_row['id'] for r in st_rows_after), "Course was not deleted from manager!"
        print("[TEST 4] Course deleted successfully via Unified Manager Modal.")

        # Close modal
        driver.execute_script("window.app.closeKnouCourseManagerModal();")
        time.sleep(0.5)

        # 5. Test Deleting an existing course (e.g. cp-29) directly on the table
        row_count_before = len(st_rows_after)
        print(f"Row count before deleting cp-29: {row_count_before}")
        driver.execute_script("window.confirm = () => true; window.app.deleteKnouPlanRow('cp-29');")
        time.sleep(1)

        row_count_after = driver.execute_script("return window.app.getState().knou.creditPlan.rows.length;")
        print(f"Row count after deleting cp-29: {row_count_after}")
        assert row_count_after == row_count_before - 1, f"Expected {row_count_before - 1}, got {row_count_after}"
        print("[TEST 5] Row cp-29 deleted directly from table.")

        # 6. Test User edits: Update cp-08 grade to A+ and add a custom note
        driver.execute_script("""
            window.app.updateKnouPlanGrade('cp-08', 'A+');
            window.app.updateKnouPlanCell('cp-08', 'note', '사용자 직접 작성한 메모 12345');
        """)
        time.sleep(1)

        # 7. 🔥 CORE TEST: PAGE REFRESH PERSISTENCE (대시보드 수정/새로고침 후에도 내용 불변 검증)
        print("[TEST 7] Refreshing page to verify data persistence across reload...")
        driver.refresh()
        time.sleep(2)

        # Switch back to KNOU tab
        driver.execute_script("window.app.switchTab('knou');")
        time.sleep(1)

        reloaded_plan = driver.execute_script("return window.app.getState().knou.creditPlan.rows;")
        reloaded_count = len(reloaded_plan)
        print(f"Row count after reload: {reloaded_count}")
        assert reloaded_count == row_count_after, f"PERSISTENCE FAILURE: Expected {row_count_after} rows after refresh, but got {reloaded_count}!"

        # Check cp-29 is STILL deleted
        assert not any(r.get('id') == 'cp-29' for r in reloaded_plan), "PERSISTENCE FAILURE: Deleted course cp-29 came back after refresh!"
        print("  - Deleted course cp-29 remained deleted after page reload! (SAFE)")

        # Check cp-08 grade and note are STILL preserved
        cp08_reloaded = next((r for r in reloaded_plan if r.get('id') == 'cp-08'), None)
        assert cp08_reloaded is not None, "cp-08 not found after reload!"
        assert cp08_reloaded.get('grade') == 'A+', f"PERSISTENCE FAILURE: Grade reverted! Got {cp08_reloaded.get('grade')}"
        assert cp08_reloaded.get('note') == '사용자 직접 작성한 메모 12345', f"PERSISTENCE FAILURE: Note reverted! Got {cp08_reloaded.get('note')}"
        print("  - User grade 'A+' and custom note remained intact after page reload! (SAFE)")

        # 8. Check Safety Auto-backup in LocalStorage
        has_backup = driver.execute_script("return !!localStorage.getItem('career_dashboard_auto_backup');")
        print(f"[TEST 8] Safety auto-backup exists in LocalStorage: {has_backup}")
        assert has_backup, "Safety auto-backup was not created!"

        # 9. Test Reset to Seed 32 Courses
        driver.execute_script("window.confirm = () => true; window.app.resetKnouPlan();")
        time.sleep(1)
        reset_count = driver.execute_script("return window.app.getState().knou.creditPlan.rows.length;")
        print(f"[TEST 9] Reset to 32 seed courses: {reset_count}")
        assert reset_count == 32, f"Expected 32 seed courses, got {reset_count}"

        # 10. Check Console errors at end
        final_logs = driver.get_log("browser")
        final_errors = [l for l in final_logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 10] Final console error count: {len(final_errors)}")
        assert len(final_errors) == 0, f"Found {len(final_errors)} final errors!"

        print("\n==========================================")
        print("🎉 ALL 10 TESTS PASSED! DATA PERSISTENCE & MERGED MANAGER 100% VERIFIED")
        print("==========================================")

    finally:
        driver.quit()

if __name__ == '__main__':
    run_tests()
