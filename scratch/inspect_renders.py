import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find functions that render camino schedule or itinerary
matches = re.findall(r'function\s+([a-zA-Z0-9_]*camino[a-zA-Z0-9_]*|[a-zA-Z0-9_]*itinerary[a-zA-Z0-9_]*)\s*\(', text, re.IGNORECASE)
print('Camino functions:', set(matches))

# Let's check where itinerary item renders hotel
for m in re.finditer(r'item\.hotel|day\.hotel|stage\.hotel', text):
    sys.stdout.buffer.write(f'{m.start()}: {text[max(0, m.start()-50):min(len(text), m.end()+150)]}\n'.encode('utf-8'))
