import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 167612
sys.stdout.buffer.write(text[max(0, idx-600):min(len(text), idx+1000)].encode('utf-8'))
