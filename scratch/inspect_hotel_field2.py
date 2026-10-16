import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how currentRoute.itinerary is referenced in renderCaminoTab
matches = [m.start() for m in re.finditer(r'currentRoute\.itinerary', text)]
for m in matches:
    print('Match at:', m)
