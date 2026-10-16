import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how updateCaminoHotel is called in the table vs the card:
matches = [m.start() for m in re.finditer(r'updateCaminoHotel', text)]
for m in matches:
    sys.stdout.buffer.write(f'{m}: {text[m-30:m+70]}\n'.encode('utf-8'))
