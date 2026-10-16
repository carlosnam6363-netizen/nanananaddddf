import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def main():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--window-size=1600,1000')

    driver = webdriver.Chrome(options=options)
    try:
        cur_dir = os.path.abspath(os.path.dirname(__file__))
        repo_dir = os.path.abspath(os.path.join(cur_dir, ".."))
        index_url = f"file:///{os.path.join(repo_dir, 'index.html').replace(os.sep, '/')}"
        print(f"Loading URL: {index_url}")
        driver.get(index_url)
        time.sleep(2)

        # 1. Switch to Camino Tab
        driver.execute_script("window.app.switchTab('camino')")
        time.sleep(1)

        # 2. Test Coastal Route
        print("\n--- Testing Coastal Route ---")
        driver.execute_script("window.app.setCaminoActiveRoute('coastal')")
        time.sleep(1)

        page_text = driver.find_element(By.ID, "tab-content-camino").text
        assert "Camino da Costa" in page_text or "완전 해안길" in page_text, "Coastal title missing"
        assert "에스포센드" in page_text, "Coastal stop Esposende missing"
        assert "비아나 두 카스텔루" in page_text, "Coastal stop Viana missing"
        assert "아 과르다" in page_text, "Coastal stop A Guarda missing"
        assert "바이오나" in page_text, "Coastal stop Baiona missing"
        assert "비고" in page_text, "Coastal stop Vigo missing"
        assert "Tasquinha da Linda" in page_text, "Coastal recommended local restaurant missing"
        assert "Sea Soul Albergue" in page_text, "Coastal albergue missing"
        print("Coastal Route Assertions PASSED!")

        # 3. Test Central Route
        print("\n--- Testing Central Route ---")
        driver.execute_script("window.app.setCaminoActiveRoute('central')")
        time.sleep(1)

        page_text = driver.find_element(By.ID, "tab-content-camino").text
        assert "Camino Central" in page_text or "정통 중앙길" in page_text, "Central title missing"
        assert "라테스" in page_text or "Rates" in page_text, "Central stop Rates missing"
        assert "바르셀루스" in page_text or "Barcelos" in page_text, "Central stop Barcelos missing"
        assert "발루게스" in page_text or "Balugães" in page_text, "Central stop Balugaes missing"
        assert "루비앙이스" in page_text or "Rubiães" in page_text, "Central stop Rubiaes missing"
        assert "Restaurante Bagoeira" in page_text, "Central recommended restaurant Bagoeira missing"
        assert "Casa da Fernanda" in page_text, "Central legendary albergue Casa da Fernanda missing"
        print("Central Route Assertions PASSED!")

        # 4. Test Hybrid Route
        print("\n--- Testing Hybrid Route ---")
        driver.execute_script("window.app.setCaminoActiveRoute('hybrid')")
        time.sleep(1)

        page_text = driver.find_element(By.ID, "tab-content-camino").text
        assert "해안➔중앙 합류" in page_text or "황금 밸런스" in page_text, "Hybrid title missing"
        assert "포보아 ➔ 바르셀루스" in page_text or "환승 연결로" in page_text, "Hybrid transfer missing"
        print("Hybrid Route Assertions PASSED!")

        # 5. Check Notion copy markdown content
        driver.execute_script("window.app.copyCourseToClipboard('coastal')")
        print("Copy to clipboard function executed without exception!")

        print("\nALL E2E CAMINO ROUTE TESTS PASSED 100%!")

    finally:
        driver.quit()

if __name__ == "__main__":
    main()
