import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Check line count of js/data.js in origin/main
res = subprocess.run(["git", "show", "origin/main:js/data.js"], capture_output=True, text=True, encoding="utf-8", errors="ignore")
content = res.stdout
print("Line count of js/data.js in origin/main:", len(content.splitlines()))

# Check line count of js/app.js in origin/main
res2 = subprocess.run(["git", "show", "origin/main:js/app.js"], capture_output=True, text=True, encoding="utf-8", errors="ignore")
content2 = res2.stdout
print("Line count of js/app.js in origin/main:", len(content2.splitlines()))

# Check if INITIAL_KNOU_CREDIT_PLAN exists in origin/main
print("INITIAL_KNOU_CREDIT_PLAN in origin/main data.js:", "INITIAL_KNOU_CREDIT_PLAN" in content)
print("INITIAL_KNOU_DATA in origin/main data.js:", "INITIAL_KNOU_DATA" in content)
print("Camino title in origin/main data.js:")
for line in content.splitlines()[:50]:
    if "title:" in line or "caminoDataVersion" in line:
        print("  ", line)
