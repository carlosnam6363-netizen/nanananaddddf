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

        # 1. Console errors on load
        logs = driver.get_log("browser")
        js_errors = [l for l in logs if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 1] Console errors on load: {len(js_errors)}")
        for err in js_errors:
            print("  Error:", err['message'])
        assert len(js_errors) == 0, f"Found {len(js_errors)} JavaScript errors!"

        # 2. Switch to Camino Tab
        driver.execute_script("window.app.switchTab('camino');")
        time.sleep(1)

        body_html = driver.page_source
        
        # Verify November Accommodations Table
        assert '일정별 11월 정상 운영 숙소 리스트' in body_html, "November Accommodations table title not found!"
        assert 'Albergue de Peregrinos Cidade de Barcelos' in body_html, "Barcelos albergue not found!"
        assert 'Albergue Quinta da Balugães' in body_html or 'Balugães' in body_html, "Balugaes albergue not found!"
        assert 'Albergue de Peregrinos de Rubiães' in body_html, "Rubiaes albergue not found!"
        assert 'Albergue de Peregrinos de Tui' in body_html, "Tui albergue not found!"
        assert 'Albergue Virgen Peregrina' in body_html, "Virgen Peregrina albergue not found!"
        assert 'Albergue de Peregrinos San Ero de Armenteira' in body_html, "San Ero albergue not found!"
        assert 'Albergue A Salazón' in body_html or 'A Salazón' in body_html, "A Salazon albergue not found!"
        assert 'Albergue Milladoiro' in body_html, "Milladoiro albergue not found!"
        assert 'Albergue Seminario Menor' in body_html, "Seminario Menor albergue not found!"
        print("[TEST 2] November Accommodations Table correctly rendered with confirmed stays!")

        # Verify Spiritual Tips
        assert '11월 영성길(Variante Espiritual) 특별 주의사항' in body_html, "Spiritual Tips title not found!"
        assert 'Albergue A Corticela' in body_html, "Corticela mention not found!"
        assert '10월 31일 영업을 종료' in body_html, "Winter closure notice not found!"
        assert '보트(Traslatio) 사전 확인' in body_html, "Traslatio notice not found!"
        assert 'A Barca do Peregrino' in body_html, "Boat company notice not found!"
        print("[TEST 3] Spiritual Route November Tips correctly rendered!")

        # 4. Check console errors after tab switch
        logs_after = driver.get_log("browser")
        js_errors_after = [l for l in logs_after if l['level'] == 'SEVERE' and 'manifest.json' not in l['message']]
        print(f"[TEST 4] Console errors after interaction: {len(js_errors_after)}")
        assert len(js_errors_after) == 0

        print("\n==========================================")
        print("🎉 ALL NOVEMBER LODGING TESTS PASSED 100%!")
        print("==========================================")

    finally:
        driver.quit()

if __name__ == '__main__':
    run_tests()
