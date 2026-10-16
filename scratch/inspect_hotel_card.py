import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see what is around index 167682
idx = 167682
sys.stdout.buffer.write(text[max(0, idx-1000):min(len(text), idx+500)].encode('utf-8'))
