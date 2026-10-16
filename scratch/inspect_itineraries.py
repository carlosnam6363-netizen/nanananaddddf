import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = [m.start() for m in re.finditer(r'("itinerary"|itinerary)\s*:', text)]
print('Itinerary matches:', matches)

for m in matches:
    lines = text[m:m+2500].splitlines()
    sys.stdout.buffer.write(f'\n=== MATCH AT {m} ===\n'.encode('utf-8'))
    # Print Day 1, Day 2, Day 3
    for l in lines[:35]:
        sys.stdout.buffer.write(f'{l}\n'.encode('utf-8'))
