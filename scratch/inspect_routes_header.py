import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
coastal_idx = text.find('"coastal":', idx)
central_idx = text.find('"central":', coastal_idx)

sys.stdout.buffer.write(b'=== HYBRID ===\n')
sys.stdout.buffer.write(text[idx:idx+350].encode('utf-8'))
sys.stdout.buffer.write(b'\n=== COASTAL ===\n')
sys.stdout.buffer.write(text[coastal_idx:coastal_idx+350].encode('utf-8'))
sys.stdout.buffer.write(b'\n=== CENTRAL ===\n')
sys.stdout.buffer.write(text[central_idx:central_idx+350].encode('utf-8'))
