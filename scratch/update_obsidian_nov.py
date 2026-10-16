import sys

with open(r'C:\Users\user\Documents\Obsidian Vault\링크를 만들거나.md', 'r', encoding='utf-8') as f:
    text = f.read()

phase12_addition = '''- [x] **[일정별 11월 정상 운영 숙소 리스트] 종합 관제 테이블 및 영성길 실전 팁 탑재**:
  - **11월 정상 운영 확정 숙소 18개 핵심 거점 전수 반영**:
    * **01일차 (11/11 수)**: 포르투 도착 | `Stay Hotel Porto Centro Trindade` (트린다데역 평지 도보 5분, 24시간 리셉션)
    * **02일차 (11/12 목)**: 포르투 휴식 | `Stay Hotel Porto Centro Trindade (연박)` (대성당 및 상벤투 도보 10~15분 산책 코스)
    * **03일차 (11/13 금)**: 마토지뉴스 ➔ 빌라 두 콘드 / 포보아 | `Albergue de Peregrinos de Vila do Conde (Santa Clara) 또는 Sardines & Friends Hostel` (산타 클라라 공립 정상 운영. 포보아 사설 호스텔 11/30까지 영업)
    * **04일차 (11/14 토)**: 포보아 ➔ 바르셀루스 | `Albergue de Peregrinos Cidade de Barcelos (공립)` (연중무휴 공립, 중심부 위치, 주방/난방 완비)
    * **05일차 (11/15 일)**: 바르셀루스 ➔ 발루게스 | `Albergue Quinta da Balugães 또는 Casa da Fernanda (비토리누)` (킨타 알베르게 11월 운영, 카사 다 페르난다 확인 가능)
    * **06일차 (11/16 월)**: 발루게스 ➔ 폰테 드 리마 | `Albergue de Peregrinos de Ponte de Lima (공립)` (강변 60베드 대형 공립, 연중무휴)
    * **07일차 (11/17 화)**: 폰테 드 리마 ➔ 루비앙이스 | `Albergue de Peregrinos de Rubiães (공립)` (라브루자 고개 직후 위치, 사설 Ninho 조기 마감 대비 공립 필수)
    * **08일차 (11/18 수)**: 루비앙이스 ➔ 발렌사 ➔ 투이 | `Albergue de Peregrinos de Tui (갈리시아 주립 공립)` (투이 대성당 옆 Xunta 주립, 365일 상시 오픈)
    * **09일차 (11/19 목)**: 투이 ➔ 오 포리뇨 | `Albergue de Peregrinos de O Porriño (갈리시아 주립)` (강변 현대식 주립, 대형 마트 인접)
    * **10일차 (11/20 금)**: 오 포리뇨 ➔ 레돈델라 | `Albergue Casa da Torre (갈리시아 주립 공립)` (16세기 석조 저택 공립, 상시 오픈)
    * **11일차 (11/21 토)**: 레돈델라 ➔ 폰테베드라 | `Albergue Virgen Peregrina (주립) 또는 Bulezen Urban Hostel (사설)` (공립 상시 운영, 사설 Bulezen 캡슐형/개별난방 예약 가능)
    * **12일차 (11/22 일)**: 폰테베드라 ➔ 아르멘테이라 | `Albergue de Peregrinos San Ero de Armenteira (공립)` (수도원 옆 공립 연중무휴, 소형 사설 휴업 대비 San Ero 추천)
    * **13일차 (11/23 월)**: 아르멘테이라 ➔ 빌라노바 드 아로우사 | `Albergue A Salazón (사설) 또는 체육관 공립` (A Corticela 10/31 동절기 마감 반영, A Salazón 및 체육관 공립 연중무휴)
    * **14일차 (11/24 화)**: 빌라노바 ➔ 파드론 | `Albergue de Peregrinos de Padrón (공립)` (카르멘 성당 인근 공립 연중무휴)
    * **15일차 (11/25 수)**: 파드론 ➔ 오 밀라도이로 | `Albergue Milladoiro (사설)` (크리스마스 전까지 연중 정상 운영, 산티아고 7.5km 전방)
    * **16일차 (11/26 목)**: 오 밀라도이로 ➔ 산티아고 도착 | `Albergue Seminario Menor 또는 구시가지 호텔` (수도원 알베르게 정상 운영, 1인실/다인실)
    * **17~19일차 (11/27~29)**: 산티아고 투어 & 휴식 | `호텔/호스텔 연박` (비수기 특가 상시 정상 영업)
    * **20~21일차 (11/30~12/1)**: 마드리드 이동 & 시내 관광 | `마드리드 차마르틴/솔 광장 인근 호텔` (도심 호텔 정상 운영)
  - **11월 영성길(Variante Espiritual) 특별 주의사항 및 실전 팁 상/하단 이중 배치**:
    * **빌라노바 드 아로우사 숙소 변경점**: 한국인 유명 숙소인 'Albergue A Corticela'는 10월 31일 영업 종료(동절기 휴업)에 들어가므로, 11월에는 선착장 도보 2분 거리인 `[Albergue A Salazón]` 또는 다목적 체육관 1층 `[공립 알베르게]` 이용 필수.
    * **14일 차(11/24) 보트(Traslatio) 사전 확인**: 11월 비수기 탑승 최소 인원 및 물때(조수 간만의 차)에 따른 시간 변동에 대비하여, 12일 차(11/22) 아르멘테이라 도착 저녁에 보트 운영사(A Barca do Peregrino / Amare Turismo Náutico 등) WhatsApp으로 "11/24 출항 여부 및 시간" 사전 확인 필수.

'''

target = '### [Phase 11]'
idx = text.find(target)
if idx != -1:
    # insert before phase 11
    # find where Phase 12 starts
    p12_idx = text.find('### [Phase 12]')
    end_of_p12 = text.find('---', p12_idx + 20)
    text = text[:end_of_p12] + '\n' + phase12_addition + text[end_of_p12:]
    with open(r'C:\Users\user\Documents\Obsidian Vault\링크를 만들거나.md', 'wb') as f:
        f.write(text.encode('utf-8'))
    print('Obsidian note updated with November lodging details!')
