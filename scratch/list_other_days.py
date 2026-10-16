import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
coastal_idx = text.find('"coastal":', idx)
central_idx = text.find('"central":', coastal_idx)
exchange_idx = text.find('exchangeBudget:', central_idx)

print('hybrid:', idx, 'to', coastal_idx)
print('coastal:', coastal_idx, 'to', central_idx)
print('central:', central_idx, 'to', exchange_idx)

# Let's inspect days in coastal and central
for name, start, end in [('coastal', coastal_idx, central_idx), ('central', central_idx, exchange_idx)]:
    chunk = text[start:end]
    day_matches = list(re.finditer(r'"day":\s*(\d+)', chunk))
    print(f'\n--- {name} ({len(day_matches)} days) ---')
    for dm in day_matches:
        c = chunk[dm.start()-20:dm.start()+250]
        d = re.search(r'"day":\s*(\d+)', c)
        dt = re.search(r'"date":\s*"([^"]+)"', c)
        dst = re.search(r'"destination":\s*"([^"]+)"', c)
        h = re.search(r'"hotel":\s*"([^"]+)"', c)
        sys.stdout.buffer.write(f'Day {d.group(1) if d else "?"} ({dt.group(1) if dt else "?"}) -> {dst.group(1) if dst else "?"} | {h.group(1) if h else "?"}\n'.encode('utf-8'))
