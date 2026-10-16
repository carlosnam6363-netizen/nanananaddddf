import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect all places where routesInfo is mentioned in app.js
idx = text.find('routesInfo')
while idx != -1:
    print('Found routesInfo at', idx)
    sys.stdout.buffer.write(text[idx-50:idx+150].encode('utf-8'))
    sys.stdout.buffer.write(b'\n---\n')
    idx = text.find('routesInfo', idx + 1)
