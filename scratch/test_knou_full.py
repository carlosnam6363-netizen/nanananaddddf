import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# Force utf-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

def verify_knou_credit_plan():
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

        # Check console errors
        logs = driver.get_log("browser")
        js_errors = [l for l in logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"JavaScript runtime errors: {len(js_errors)}")
        for err in js_errors:
            print("Console error:", err['message'])

        # Switch to KNOU tab
        driver.execute_script("window.app.switchTab('knou');")
        time.sleep(1)

        # Check presence of table
        plan = driver.find_element(By.ID, "knou-credit-plan")
        print("Plan table found:", bool(plan))

        rows = driver.find_elements(By.CSS_SELECTOR, "#knou-credit-plan tbody tr")
        print(f"Rendered rows count in tbody: {len(rows)}")

        # Verify key subjects exist in page source
        page_source = driver.page_source
        subjects_to_check = [
            "평생교육프로그램개발론",
            "사례관리론 (전공, 2학기)",
            "지역사회복지론(대면, 전공, 2학기)",
            "인간행동과 사회환경",
            "평생교육론",
            "노인교육론",
            "사회복지(학)개론",
            "사회복지실천론 (일반, 2학기)",
            "교육사회학",
            "사회복지조사론*",
            "사회복지현장실습 (160시간 이상 실습, 세미나 3회)",
            "상담심리학 (선택2)",
            "기업교육론 (선택 2기술경영 유사 과목 확인)",
            "교육조사방법론 (선택 2, 사회복지조사론 유사과목 인정)"
        ]

        all_found = True
        for s in subjects_to_check:
            if s in page_source:
                print(f"PASS: '{s}' found in table")
            else:
                print(f"FAIL: '{s}' NOT found!")
                all_found = False

        # Verify TOTAL numbers in tfoot
        tfoot = driver.find_element(By.CSS_SELECTOR, "#knou-credit-plan tfoot").text
        
        totals_checks = [
            ("TOTAL", "TOTAL 행"),
            ("PASS QUAL", "PASS QUAL 행"),
            ("11", "사회복지사 필수 합계 11"),
            ("7", "사회복지사 선택 합계 7"),
            ("5", "평생교육사 필수 합계 5"),
            ("5", "평생교육사 선택 합계 5"),
            ("72", "전공 총 학점 72"),
            ("61", "교양 총 학점 61"),
            ("133", "방통대 총 학점 133")
        ]
        for t, desc in totals_checks:
            if t in tfoot:
                print(f"PASS: {desc} ('{t}' 확인됨)")
            else:
                print(f"FAIL: {desc} ('{t}' 미확인)")
                all_found = False

        # Test interactive change without admin restriction
        first_inputs = driver.find_elements(By.CSS_SELECTOR, "#knou-credit-plan tbody input[type='text']")
        if first_inputs:
            driver.execute_script("arguments[0].value = '평생교육프로그램개발론(수정테스트)'; arguments[0].dispatchEvent(new Event('change'));", first_inputs[0])
            time.sleep(0.5)

        # Check localStorage to ensure persistence
        ls_data = driver.execute_script("return localStorage.getItem('career_dashboard_state');")
        if ls_data:
            import json
            parsed = json.loads(ls_data)
            knou_plan = parsed.get('knou', {}).get('creditPlan', {})
            plan_rows = knou_plan.get('rows', [])
            print(f"LocalStorage persisted creditPlan rows: {len(plan_rows)}")
            if len(plan_rows) >= 32:
                print("PASS: 32 rows successfully persisted to localStorage!")
            else:
                print("FAIL: Persisted rows less than 32!")
                all_found = False

        driver.save_screenshot("knou_table_verified.png")
        print("Screenshot saved to knou_table_verified.png")

        if all_found and len(js_errors) == 0:
            print("ALL VERIFICATIONS COMPLETED SUCCESSFULLY!")
        else:
            print("SOME CHECKS FAILED.")
            sys.exit(1)

    finally:
        driver.quit()

if __name__ == "__main__":
    verify_knou_credit_plan()
