import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
hybrid_idx = text.find('"hybrid":', idx)
it_idx = text.find('"itinerary":', hybrid_idx)
coastal_idx = text.find('"coastal":', it_idx)
snippet = text[it_idx:coastal_idx]

day_matches = list(re.finditer(r'"day":\s*(\d+)', snippet))
print('Total days in hybrid:', len(day_matches))
for dm in day_matches:
    start = max(0, dm.start() - 20)
    end = min(len(snippet), dm.start() + 400)
    chunk = snippet[start:end]
    d_m = re.search(r'"day":\s*(\d+)', chunk)
    date_m = re.search(r'"date":\s*"([^"]+)"', chunk)
    orig_m = re.search(r'"origin":\s*"([^"]+)"', chunk)
    dest_m = re.search(r'"destination":\s*"([^"]+)"', chunk)
    hotel_m = re.search(r'"hotel":\s*"([^"]+)"', chunk)
    d = d_m.group(1) if d_m else '?'
    dt = date_m.group(1) if date_m else '?'
    o = orig_m.group(1) if orig_m else '?'
    dst = dest_m.group(1) if dest_m else '?'
    h = hotel_m.group(1) if hotel_m else '?'
    sys.stdout.buffer.write(f'Day {d} ({dt}): {o} -> {dst} | Hotel: {h}\n'.encode('utf-8'))
