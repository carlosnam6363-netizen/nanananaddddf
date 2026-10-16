import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('updateCaminoHotel(')
print('Found updateCaminoHotel at:', idx)
sys.stdout.buffer.write(text[idx:idx+600].encode('utf-8'))
