import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless=new')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(options=chrome_options)
try:
    driver.get('file:///' + os.path.abspath('index.html'))
    driver.execute_script("window.app.switchTab('knou');")
    plan_found = driver.execute_script("return !!document.getElementById('knou-credit-plan');")
    rows_count = driver.execute_script("return document.querySelectorAll('#knou-credit-plan tbody tr').length;")
    print(f"Plan found: {plan_found}")
    print(f"Rows count: {rows_count}")
    
    # Check localStorage knou object
    knou_ls = driver.execute_script("return localStorage.getItem('career_dashboard_state');")
    print(f"LocalStorage exists: {bool(knou_ls)}")
    if knou_ls:
        import json
        parsed = json.loads(knou_ls)
        print("knou in LS:", 'knou' in parsed)
        if 'knou' in parsed:
            print("creditPlan in knou:", 'creditPlan' in parsed['knou'])
            if 'creditPlan' in parsed['knou']:
                print("rows in creditPlan:", len(parsed['knou']['creditPlan'].get('rows', [])))
finally:
    driver.quit()
