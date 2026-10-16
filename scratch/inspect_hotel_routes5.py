import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect the table and card rendering in renderCaminoTab
idx = text.find('function renderCaminoTab()')
table_idx = text.find('<table', idx)
print('table_idx:', table_idx)
# Let's inspect the loop for table
sys.stdout.buffer.write(text[table_idx+300:table_idx+2000].encode('utf-8'))
