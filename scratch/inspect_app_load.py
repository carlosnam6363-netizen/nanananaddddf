import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('upgradedCamino')
print('Index:', idx)
if idx != -1:
    sys.stdout.buffer.write(text[idx-200:idx+800].encode('utf-8'))
