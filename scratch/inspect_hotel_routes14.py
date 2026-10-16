import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see how state.camino.routesInfo is initialized or stored
idx = text.find('state.camino.routesInfo')
while idx != -1:
    print('Found state.camino.routesInfo at', idx)
    sys.stdout.buffer.write(text[idx-50:idx+150].encode('utf-8'))
    sys.stdout.buffer.write(b'\n---\n')
    idx = text.find('state.camino.routesInfo', idx + 1)
