import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let us check INITIAL_CAMINO_DATA keys
# Find where INITIAL_CAMINO_DATA begins and ends
start = text.find('const INITIAL_CAMINO_DATA = {')
end = text.find('global.INITIAL_CAMINO_DATA = INITIAL_CAMINO_DATA;')
print('start:', start, 'end:', end)

# Let us parse or find all subkeys of INITIAL_CAMINO_DATA
lines = text[start:end].splitlines()
keys = []
for line in lines:
    m = re.match(r'^  ([a-zA-Z0-9_]+)\s*:', line)
    if m:
        keys.append(m.group(1))
print('Top level keys in INITIAL_CAMINO_DATA:', keys)
