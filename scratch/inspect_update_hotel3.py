import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('updateCaminoHotel(idx, val)')
sys.stdout.buffer.write(text[idx-50:idx+600].encode('utf-8'))
