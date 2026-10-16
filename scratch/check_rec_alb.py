import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('routesInfo:')
coastal_idx = text.find('"coastal":', idx)
central_idx = text.find('"central":', coastal_idx)
exchange_idx = text.find('exchangeBudget:', central_idx)

print('hybrid has recommendedAlbergues:', 'recommendedAlbergues' in text[idx:coastal_idx])
print('coastal has recommendedAlbergues:', 'recommendedAlbergues' in text[coastal_idx:central_idx])
print('central has recommendedAlbergues:', 'recommendedAlbergues' in text[central_idx:exchange_idx])
