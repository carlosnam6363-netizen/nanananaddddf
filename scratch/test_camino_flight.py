import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def verify_camino_flight():
    chrome_options = Options()
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1280,1024")
    
    driver = webdriver.Chrome(options=chrome_options)
    try:
        html_path = os.path.abspath("index.html")
        driver.get(f"file:///{html_path}")
        time.sleep(2)
        
        # Check console logs for JS errors (ignoring file:/// manifest CORS)
        logs = driver.get_log("browser")
        js_errors = [l for l in logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"JavaScript runtime errors: {len(js_errors)}")
        for err in js_errors:
            print("Console error:", err['message'])

        # Switch to Camino tab
        driver.execute_script("window.app.switchTab('camino');")
        time.sleep(1)

        page_source = driver.page_source

        # Assertions
        checks = [
            ("트립닷컴", "트립닷컴 결제 플랫폼"),
            ("477,357", "총 결제 금액 477,357원"),
            ("MU8604", "1구간 항공편 MU8604"),
            ("MU201", "2구간 항공편 MU201"),
            ("U28525", "3구간 항공편 U28525"),
            ("이지젯", "이지젯 항공사"),
            ("18:25", "11/10 출발 시간 18:25"),
            ("12:00", "11/11 도착 시간 낮 12:00"),
            ("푸동", "상하이 푸동 환승"),
            ("개트윅", "런던 개트윅 환승")
        ]

        all_passed = True
        for token, desc in checks:
            if token in page_source:
                print(f"PASS: {desc}")
            else:
                print(f"FAIL: {desc}")
                all_passed = False

        driver.save_screenshot("camino_flight_verified.png")
        print("Screenshot saved to camino_flight_verified.png")

        if all_passed and len(js_errors) == 0:
            print("ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
        else:
            print("SOME CHECKS FAILED.")
            sys.exit(1)
            
    finally:
        driver.quit()

if __name__ == "__main__":
    verify_camino_flight()
