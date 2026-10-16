import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect where it.hotel is placed
idx = text.find('window.app.updateCaminoHotel(, this.value)')
sys.stdout.buffer.write(text[idx-200:idx+400].encode('utf-8'))
