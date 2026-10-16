import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search where hotel is rendered in overview or other tabs
for m in re.finditer(r'우마 포베이루스|스테이 호텔|stay hotel', text, re.IGNORECASE):
    sys.stdout.buffer.write(f'{m.start()}: {text[max(0, m.start()-50):min(len(text), m.end()+50)]}\n'.encode('utf-8'))
