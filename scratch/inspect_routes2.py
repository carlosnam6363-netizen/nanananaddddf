import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line_no in [204, 495, 786, 1123]:
    sys.stdout.buffer.write(f'==============================\nContext around line {line_no}\n'.encode('utf-8'))
    start = max(0, line_no - 15)
    end = min(len(lines), line_no + 35)
    for j in range(start, end):
        sys.stdout.buffer.write(f'{j+1}: {lines[j]}'.encode('utf-8'))
