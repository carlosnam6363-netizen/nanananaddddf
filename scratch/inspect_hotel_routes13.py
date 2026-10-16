import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function updateCaminoHotel(idx, val)')
sys.stdout.buffer.write(text[idx:idx+400].encode('utf-8'))
