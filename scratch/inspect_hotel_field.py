import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how currentRoute is retrieved in renderCaminoTab
idx = text.find('function renderCaminoTab()')
sys.stdout.buffer.write(text[idx:idx+1500].encode('utf-8'))
