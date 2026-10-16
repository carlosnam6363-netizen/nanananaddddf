import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
coastal_idx = text.find('"coastal":', idx)
central_idx = text.find('"central":', coastal_idx)
exchange_idx = text.find('exchangeBudget:', central_idx)

routes = [
    ('hybrid', idx, coastal_idx),
    ('coastal', coastal_idx, central_idx),
    ('central', central_idx, exchange_idx)
]

for name, s, e in routes:
    chunk = text[s:e]
    it_idx = chunk.find('"itinerary":')
    it_chunk = chunk[it_idx:]
    dests = re.findall(r'"destination":\s*"([^"]+)"', it_chunk)
    types = re.findall(r'"type":\s*"([^"]+)"', it_chunk)
    sys.stdout.buffer.write(f'\n=== ROUTE {name} (total {len(dests)} stages) ===\n'.encode('utf-8'))
    for i, (dst, t) in enumerate(zip(dests, types), 1):
        sys.stdout.buffer.write(f'  Day {i:02d} [{t}]: {dst}\n'.encode('utf-8'))
