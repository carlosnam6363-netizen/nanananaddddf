import subprocess

res = subprocess.run(["git", "diff", "8dbebda..origin/main", "--", "js/app.js"], capture_output=True, text=True, encoding="utf-8", errors="ignore")
lines = res.stdout.splitlines()
print(f"Total diff lines for js/app.js: {len(lines)}")
# Print first 50 lines
for l in lines[:50]:
    print(l)
