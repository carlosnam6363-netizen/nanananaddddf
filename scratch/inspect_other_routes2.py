import json, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for line_no in [1123]:
    for i in range(line_no - 5, line_no + 30):
        sys.stdout.buffer.write(f'{i+1}: {lines[i]}\n'.encode('utf-8'))
