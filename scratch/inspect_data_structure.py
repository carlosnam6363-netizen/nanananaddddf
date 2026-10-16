import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find const declarations
consts = re.findall(r'const\s+([a-zA-Z0-9_]+)\s*=', text)
print('consts:', consts)
