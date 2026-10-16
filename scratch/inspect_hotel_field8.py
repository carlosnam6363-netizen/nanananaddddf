import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('let upgradedCamino')
sys.stdout.buffer.write(text[idx:idx+1500].encode('utf-8'))
