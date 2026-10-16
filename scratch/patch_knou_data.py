import re

def patch_data_and_app():
    # 1. Read js/data.js
    with open('js/data.js', 'r', encoding='utf-8') as f:
        data_content = f.read()

    # Find INITIAL_KNOU_CREDIT_PLAN block
    plan_marker = "// =========================================================================\n// 방송대 학점관리: 사회복지사·평생교육사·방통대 학점 이수 계획표 (편집 가능)\n// ========================================================================="
    
    # We will define INITIAL_KNOU_CREDIT_PLAN right before INITIAL_KNOU_DATA
    # First, let's extract INITIAL_KNOU_CREDIT_PLAN text
    m = re.search(r'(// =+[\r\n]+// 방송대 학점관리: 사회복지사·평생교육사·방통대 학점 이수 계획표.*?\nconst INITIAL_KNOU_CREDIT_PLAN = \{.*?\n\};)', data_content, re.DOTALL)
    if not m:
        print("Could not find INITIAL_KNOU_CREDIT_PLAN block in data.js")
        return

    plan_block = m.group(1)
    # Remove it from its current position
    data_content = data_content.replace(plan_block, '')

    # Insert it right before INITIAL_KNOU_DATA
    knou_data_marker = "// 14. 국립 한국방송통신대학교 (KNOU) 사회복지학과 학점 및 수강 관리 데이터"
    if knou_data_marker not in data_content:
        print("Could not find knou_data_marker in data.js")
        return

    # Update planVersion: 2 in plan_block
    plan_block = plan_block.replace('"planVersion": 1,', '"planVersion": 2,')

    data_content = data_content.replace(knou_data_marker, plan_block + "\n\n" + knou_data_marker)

    # In INITIAL_KNOU_DATA, bump knouDataVersion to 3 and attach creditPlan: INITIAL_KNOU_CREDIT_PLAN
    old_knou_start = '''const INITIAL_KNOU_DATA = {
  knouDataVersion: 2,'''
    new_knou_start = '''const INITIAL_KNOU_DATA = {
  knouDataVersion: 3,
  creditPlan: INITIAL_KNOU_CREDIT_PLAN,'''

    data_content = data_content.replace(old_knou_start, new_knou_start)

    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(data_content)
    print("js/data.js updated successfully.")

patch_data_and_app()
