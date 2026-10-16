import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
coastal_idx = text.find('"coastal":', idx)
central_idx = text.find('"central":', coastal_idx)
exchange_idx = text.find('exchangeBudget:', central_idx)

for name, s, e in [('coastal', coastal_idx, central_idx), ('central', central_idx, exchange_idx)]:
    chunk = text[s:e]
    sys.stdout.buffer.write(f'=== {name} ===\n'.encode('utf-8'))
    for key in ['name', 'shortName', 'distance', 'walkingDays', 'char', 'highlight']:
        m = re.search(r'"' + key + r'"\s*:\s*"([^"]+)"', chunk)
        if m:
            sys.stdout.buffer.write(f'  {key}: {m.group(1)}\n'.encode('utf-8'))
