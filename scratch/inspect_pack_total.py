import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('packingList:')
end = text.find('itinerary:', start)
for line in text[start:end].splitlines():
    if '항공' in line or '숙박' in line:
        sys.stdout.buffer.write(f'{line}\n'.encode('utf-8'))
