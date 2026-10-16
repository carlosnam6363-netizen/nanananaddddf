import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect line 126605
idx = text.find('function updateCaminoHotel(idx, val)')
sys.stdout.buffer.write(text[idx:idx+600].encode('utf-8'))
