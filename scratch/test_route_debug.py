import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

sys.stdout.reconfigure(encoding='utf-8')

def test_route_switching():
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

        # 1. Switch to Camino Tab
        driver.execute_script("window.app.switchTab('camino');")
        time.sleep(1)

        # Let's inspect initial route state
        active_route_1 = driver.execute_script("return window.app.getState().camino.activeRoute;")
        print(f"Initial activeRoute: {active_route_1}")

        # Check Day 3, 4 destinations in the table
        rows_hybrid = driver.find_elements(By.CSS_SELECTOR, "#tab-content-camino table tbody tr")
        print(f"Rows count: {len(rows_hybrid)}")
        for r in rows_hybrid[2:6]:
            print("  Hybrid row:", r.text.replace("\n", " | "))

        # 2. Click Coastal Route button
        print("\n--- Clicking Coastal Route ---")
        driver.execute_script("window.app.setCaminoActiveRoute('coastal');")
        time.sleep(1)
        active_route_2 = driver.execute_script("return window.app.getState().camino.activeRoute;")
        print(f"New activeRoute: {active_route_2}")

        rows_coastal = driver.find_elements(By.CSS_SELECTOR, "#tab-content-camino table tbody tr")
        for r in rows_coastal[2:6]:
            print("  Coastal row:", r.text.replace("\n", " | "))

        # 3. Click Central Route button
        print("\n--- Clicking Central Route ---")
        driver.execute_script("window.app.setCaminoActiveRoute('central');")
        time.sleep(1)
        active_route_3 = driver.execute_script("return window.app.getState().camino.activeRoute;")
        print(f"New activeRoute: {active_route_3}")

        rows_central = driver.find_elements(By.CSS_SELECTOR, "#tab-content-camino table tbody tr")
        for r in rows_central[2:6]:
            print("  Central row:", r.text.replace("\n", " | "))

        # Check November Accommodations Table
        nov_table = driver.find_elements(By.XPATH, "//*[contains(text(), '11월 정상 운영 숙소 리스트')]/ancestor::div[contains(@class, 'glass-panel')]//table//tbody//tr")
        print(f"\nNovember accommodations table rows count: {len(nov_table)}")

    finally:
        driver.quit()

if __name__ == '__main__':
    test_route_switching()
