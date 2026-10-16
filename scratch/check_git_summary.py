import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

res = subprocess.run(["git", "diff", "--name-status", "8dbebda..origin/main"], capture_output=True, text=True, encoding="utf-8")
print(res.stdout)

# Check commit messages
res2 = subprocess.run(["git", "log", "--oneline", "8dbebda..origin/main"], capture_output=True, text=True, encoding="utf-8")
print(res2.stdout)
