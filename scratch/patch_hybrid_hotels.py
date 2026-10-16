import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's map each day in hybrid itinerary to the confirmed hotel
updates = [
    # Day 3
    ('빌라 두 콘드 / 포보아', 'Albergue de Peregrinos de Vila do Conde (Santa Clara) 또는 Sardines & Friends Hostel'),
    # Day 4
    ('바르셀루스 (Barcelos)', 'Albergue de Peregrinos Cidade de Barcelos (공립)'),
    # Day 5
    ('발루게스 (Balugães)', 'Albergue Quinta da Balugães 또는 Casa da Fernanda (비토리누)'),
    # Day 6
    ('폰테 드 리마', 'Albergue de Peregrinos de Ponte de Lima (공립)'),
    # Day 7
    ('루비앙이스 (Rubiães)', 'Albergue de Peregrinos de Rubiães (공립)'),
    # Day 8
    ('발렌사 ➔ 투이 (Tui)', 'Albergue de Peregrinos de Tui (갈리시아 주립 공립)'),
    # Day 9
    ('오 포리뇨 (O Porriño)', 'Albergue de Peregrinos de O Porriño (갈리시아 주립)'),
    # Day 10
    ('레돈델라 (Redondela)', 'Albergue Casa da Torre (갈리시아 주립 공립)'),
    # Day 11
    ('폰테베드라 (Pontevedra)', 'Albergue Virgen Peregrina (주립) 또는 Bulezen Urban Hostel (사설)'),
    # Day 12
    ('아르멘테이라', 'Albergue de Peregrinos San Ero de Armenteira (공립)'),
    # Day 13
    ('빌라노바 드 아로우사', 'Albergue A Salazón (사설) 또는 체육관 공립'),
    # Day 14
    ('파드론 (Padrón)', 'Albergue de Peregrinos de Padrón (공립)'),
    # Day 15
    ('테오 / 오 밀라도이로', 'Albergue Milladoiro (사설)'),
    # Day 16
    ('산티아고 데 콤포스텔라', 'Albergue Seminario Menor 또는 구시가지 호텔'),
    # Day 17
    ('피스테라 & 무시아', '호텔/호스텔 연박'),
    # Day 18
    ('산티아고', '호텔/호스텔 연박'),
    # Day 20
    ('마드리드 (Chamartín)', '마드리드 차마르틴/솔 광장 인근 호텔')
]

# Let's inspect hybrid itinerary in text
idx = text.find('routesInfo:')
hybrid_idx = text.find('"hybrid":', idx)
it_idx = text.find('"itinerary":', hybrid_idx)
coastal_idx = text.find('"coastal":', it_idx)

snippet = text[it_idx:coastal_idx]

# Replace in snippet
replacements = [
    ('"hotel": "Albergue de Santa Clara / 포보아 숙소"', '"hotel": "Albergue de Peregrinos de Vila do Conde (Santa Clara) 또는 Sardines & Friends Hostel"'),
    ('"hotel": "Albergue Cidade de Barcelos"', '"hotel": "Albergue de Peregrinos Cidade de Barcelos (공립)"'),
    ('"hotel": "Casa da Fernanda / Albergue Balugães"', '"hotel": "Albergue Quinta da Balugães 또는 Casa da Fernanda (비토리누)"'),
    ('"hotel": "Albergue de Rubiães"', '"hotel": "Albergue de Peregrinos de Rubiães (공립)"'),
    ('"hotel": "Albergue Santo Domingo / Ideas Peregrinas"', '"hotel": "Albergue de Peregrinos de Tui (갈리시아 주립 공립)"'),
    ('"hotel": "Albergue de Peregrinos de O Porriño (공립)"', '"hotel": "Albergue de Peregrinos de O Porriño (갈리시아 주립)"'),
    ('"hotel": "Albergue Casa da Torre (공립)"', '"hotel": "Albergue Casa da Torre (갈리시아 주립 공립)"'),
    ('"hotel": "Bulezen Urban Hostel / Virxe da Peregrina"', '"hotel": "Albergue Virgen Peregrina (주립) 또는 Bulezen Urban Hostel (사설)"'),
    ('"hotel": "Albergue de Armenteira (수도원 인근)"', '"hotel": "Albergue de Peregrinos San Ero de Armenteira (공립)"'),
    ('"hotel": "Albergue de Peregrinos de Vilanova de Arousa"', '"hotel": "Albergue A Salazón (사설) 또는 체육관 공립"'),
    ('"hotel": "Albergue de Padrón (공립) / Albergue Rossol"', '"hotel": "Albergue de Peregrinos de Padrón (공립)"'),
    ('"hotel": "Albergue Milladoiro / Teo 숙소"', '"hotel": "Albergue Milladoiro (사설)"'),
    ('"hotel": "산티아고 중심가 숙소 (1박)"', '"hotel": "Albergue Seminario Menor 또는 구시가지 호텔"'),
    ('"hotel": "산티아고 중심가 숙소 (2박)"', '"hotel": "호텔/호스텔 연박"'),
    ('"hotel": "산티아고 중심가 숙소 (3박)"', '"hotel": "호텔/호스텔 연박"'),
    ('"hotel": "산티아고 중심가 숙소 (4박)"', '"hotel": "호텔/호스텔 연박"'),
    ('"hotel": "마드리드 중심가 호텔 (1박)"', '"hotel": "마드리드 차마르틴/솔 광장 인근 호텔"'),
    ('"hotel": "마드리드 중심가 호텔 (2박)"', '"hotel": "마드리드 차마르틴/솔 광장 인근 호텔"')
]

for old_h, new_h in replacements:
    if old_h in snippet:
        snippet = snippet.replace(old_h, new_h)
        print('Replaced in hybrid:', old_h[:30])
    else:
        print('Not found in hybrid:', old_h[:30])

text = text[:it_idx] + snippet + text[coastal_idx:]

with open('js/data.js', 'wb') as f:
    f.write(text.encode('utf-8'))

print('Hybrid itinerary hotel fields updated successfully!')
