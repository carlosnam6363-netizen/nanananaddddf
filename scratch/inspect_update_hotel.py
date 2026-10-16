import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('updateCaminoHotel')
while idx != -1:
    sys.stdout.buffer.write(f'--- FOUND updateCaminoHotel at {idx} ---\n'.encode('utf-8'))
    sys.stdout.buffer.write(text[idx:idx+500].encode('utf-8'))
    sys.stdout.buffer.write(b'\n')
    idx = text.find('updateCaminoHotel', idx + 1)
