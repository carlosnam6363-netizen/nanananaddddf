import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how activeRoute affects routesInfo and itinerary
idx = text.find('function setCaminoActiveRoute')
if idx != -1:
    sys.stdout.buffer.write(text[idx:idx+500].encode('utf-8'))
