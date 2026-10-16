import sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'pack-stay' in line or '포르투' in line and '호텔' in line and 'pack' in line:
        sys.stdout.buffer.write(f'{i+1}: {line}'.encode('utf-8'))
