import re
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let us find lines where 'itinerary' or routes are defined
for i, line in enumerate(text.splitlines()):
    if 'itinerary' in line.lower() and ('[' in line or ':' in line):
        print(f'{i+1}: {line.strip()[:100]}')
