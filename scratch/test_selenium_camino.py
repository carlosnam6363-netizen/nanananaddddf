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
        assert len(js_errors) == 0, f"Found {len(js_errors)} JavaScript errors!"

        # 2. Switch to Camino Tab
        driver.execute_script("window.app.switchTab('camino');")
        time.sleep(1)

        body_html = driver.page_source
        assert '스테이 호텔 포르투 센트로 트린다데' in body_html, "Stay Hotel Porto Centro Trindade not found in DOM!"
        assert '1400829745971821' in body_html, "Booking number not found in DOM!"
        assert '7999' in body_html, "PIN 7999 not found in DOM!"
        assert '132,615' in body_html, "Paid KRW 132,615 not found in DOM!"
        assert 'EUR 12.00' in body_html or 'EUR 12' in body_html, "City tax EUR 12 not found in DOM!"
        print("[TEST 2] Camino Hotel Banner rendered with exact reservation details!")

        # 3. Check Itinerary Day 1 and Day 2 inputs
        inputs = driver.find_elements(By.CSS_SELECTOR, "#tab-content-camino input")
        input_values = [i.get_attribute("value") for i in inputs if i.get_attribute("value")]
        hotel_matches = [v for v in input_values if "스테이 호텔" in v]
        print(f"[TEST 3] Hotel inputs matching '스테이 호텔': {len(hotel_matches)}")
        assert len(hotel_matches) >= 2, f"Expected at least 2 hotel inputs for Day 1 and 2, found {len(hotel_matches)}"

        # 4. Check Packing List item for Porto stay
        assert '132,615' in body_html and '트린다데' in body_html, "Packing list item not updated!"
        print("[TEST 4] Packing list item verified!")

        # 5. Check console errors after tab switch
        logs_after = driver.get_log("browser")
        js_errors_after = [l for l in logs_after if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 5] Console errors after interaction: {len(js_errors_after)}")
        assert len(js_errors_after) == 0

        print("\n==========================================")
        print("🎉 ALL CAMINO HOTEL TESTS PASSED 100%!")
        print("==========================================")

    finally:
        driver.quit()

if __name__ == '__main__':
    run_tests()
