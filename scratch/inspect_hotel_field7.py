import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect how itinerary is initialized and how routes are stored
idx = text.find('const upgradedCamino')
sys.stdout.buffer.write(text[idx:idx+1500].encode('utf-8'))
