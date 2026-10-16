import re
import json

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract INITIAL_KNOU_CREDIT_PLAN
m = re.search(r'const INITIAL_KNOU_CREDIT_PLAN = (\{.*?\n\};)', content, re.DOTALL)
if m:
    plan_text = m.group(1).rstrip(';')
    try:
        plan = json.loads(plan_text)
        print("Plan version:", plan.get("planVersion"))
        print("Semesters:", plan.get("semesters"))
        print("Total rows:", len(plan.get("rows", [])))
        for idx, r in enumerate(plan.get("rows", [])):
            print(f"{idx+1}. [{r.get('semester')}] {r.get('name')} | swReq:{r.get('swReq')} swOpt:{r.get('swOpt')} | leReq:{r.get('leReq')} leOpt:{r.get('leOpt')} | M:{r.get('major')} G:{r.get('general')} | status:{r.get('status')} | note:{r.get('note')}")
    except Exception as e:
        print("JSON parse error:", e)
else:
    print("INITIAL_KNOU_CREDIT_PLAN not found")
