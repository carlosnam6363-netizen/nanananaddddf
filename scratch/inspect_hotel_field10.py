import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search where hotel is in data.js
for m in re.finditer(r'우마 포베이루스|uma', text, re.IGNORECASE):
    sys.stdout.buffer.write(f'{m.start()}: {text[max(0, m.start()-50):min(len(text), m.end()+80)]}\n'.encode('utf-8'))
