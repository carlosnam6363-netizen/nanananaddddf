import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const INITIAL_CAMINO_DATA = {')
end = text.find('const INITIAL_SNS_DATA = {')
camino_text = text[start:end]

for line in camino_text.splitlines():
    if 'pack-stay' in line or 'pack-flight' in line:
        sys.stdout.buffer.write(f'{line}\n'.encode('utf-8'))
