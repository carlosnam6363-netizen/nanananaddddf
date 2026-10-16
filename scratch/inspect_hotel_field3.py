import re, sys
with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

for m in [154804, 155836, 163530, 163661]:
    sys.stdout.buffer.write(f'--- MATCH {m} ---\n'.encode('utf-8'))
    sys.stdout.buffer.write(text[m-100:m+200].encode('utf-8'))
    sys.stdout.buffer.write(b'\n')
