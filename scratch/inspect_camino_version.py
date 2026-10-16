import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'caminoDataVersion', text)]
for m in matches:
    sys.stdout.buffer.write(text[max(0, m-100):min(len(text), m+200)].encode('utf-8'))
    sys.stdout.buffer.write(b'\n---\n')
