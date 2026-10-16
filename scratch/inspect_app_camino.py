import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let us check occurrences of INITIAL_CAMINO_DATA or camino in app.js
for m in re.finditer(r'caminoDataVersion|INITIAL_CAMINO_DATA|pack-stay-porto|stay hotel', text, re.IGNORECASE):
    sys.stdout.buffer.write(f'{m.start()}: {text[max(0, m.start()-50):min(len(text), m.end()+50)]}\n'.encode('utf-8'))
