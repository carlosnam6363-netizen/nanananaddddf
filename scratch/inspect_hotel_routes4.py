import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for updateCaminoHotel
idx = text.find('function updateCaminoHotel')
sys.stdout.buffer.write(text[idx:idx+800].encode('utf-8'))
