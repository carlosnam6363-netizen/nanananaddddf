import sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect where currentRoute is updated or if routesInfo is updated
for m in [159272, 167671]:
    idx = text.rfind('map((', 0, m)
    sys.stdout.buffer.write(text[idx:idx+100].encode('utf-8'))
    sys.stdout.buffer.write(b'\n')
