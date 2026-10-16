import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 167671
start = text.rfind('.map(', 0, idx)
sys.stdout.buffer.write(text[start-100:start+50].encode('utf-8'))
