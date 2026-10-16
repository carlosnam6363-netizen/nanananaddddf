import json, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see lines 190 to 220
lines = text.splitlines()
for i in range(190, 240):
    sys.stdout.buffer.write(f'{i+1}: {lines[i]}\n'.encode('utf-8'))
