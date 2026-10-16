import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect hybrid itinerary lines
idx = text.find('routesInfo:')
hybrid_idx = text.find('"hybrid":', idx)
it_idx = text.find('"itinerary":', hybrid_idx)
coastal_idx = text.find('"coastal":', it_idx)
snippet = text[it_idx:coastal_idx]

# Let's print each object in hybrid itinerary
days = snippet.split('{\n                "day":')
print('Split days count:', len(days))
for i, d in enumerate(days[1:], 1):
    sys.stdout.buffer.write(f'--- DAY {i} ---\n'.encode('utf-8'))
    sys.stdout.buffer.write(d[:300].encode('utf-8'))
    sys.stdout.buffer.write(b'\n')
