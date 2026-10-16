import re, sys
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const INITIAL_CAMINO_DATA = {')
end = text.find('const INITIAL_SNS_DATA = {')
print('Camino slice length:', end - start)

# Let us check keys within INITIAL_CAMINO_DATA
lines = text[start:end].splitlines()
keys = []
for line in lines:
    m = re.match(r'^  ([a-zA-Z0-9_]+)\s*:', line)
    if m:
        keys.append(m.group(1))
print('Keys in INITIAL_CAMINO_DATA:', keys)
