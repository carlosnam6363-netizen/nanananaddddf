import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('window.app.updateCaminoHotel(')
while idx != -1:
    print('Found at', idx)
    sys.stdout.buffer.write(text[idx-50:idx+150].encode('utf-8'))
    sys.stdout.buffer.write(b'\n---\n')
    idx = text.find('window.app.updateCaminoHotel(', idx + 1)
