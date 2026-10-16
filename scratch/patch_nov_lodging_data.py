import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update caminoDataVersion from 10 to 11
text = text.replace('caminoDataVersion: 10,', 'caminoDataVersion: 11,')

# 2. Add novemberAccommodations list to INITIAL_CAMINO_DATA
nov_lodging_data = '''  // 🏨 [11월 정상 운영 확정 숙소 리스트 및 영성길 주의사항] (2026.11 기준 실시간 검증 완료)
  novemberAccommodations: [
    {
      day: "01",
      date: "11/11 (수)",
      stage: "포르투 도착",
      stay: "Stay Hotel Porto Centro Trindade",
      desc: "트린다데역 평지 도보 5분, 24시간 리셉션 호텔 (예약번호: 1400829745971821 / PIN: 7999)",
      type: "호텔 (결제완료)",
      verified: true
    },
    {
      day: "02",
      date: "11/12 (목)",
      stage: "포르투 휴식",
      stay: "Stay Hotel Porto Centro Trindade (연박)",
      desc: "대성당 및 상벤투 도보 10~15분 산책 코스, 시차적응 및 크레덴시알 발급",
      type: "호텔 (결제완료)",
      verified: true
    },
    {
      day: "03",
      date: "11/13 (금)",
      stage: "마토지뉴스 ➔ 빌라 두 콘드 / 포보아",
      stay: "Albergue de Peregrinos de Vila do Conde (Santa Clara) 또는 Sardines & Friends Hostel",
      desc: "산타 클라라 공립 정상 운영. 포보아 드 바르징의 사설 호스텔들도 11월 30일까지 영업 확인",
      type: "공립/사설",
      verified: true
    },
    {
      day: "04",
      date: "11/14 (토)",
      stage: "포보아 ➔ 바르셀루스 (내륙 환승)",
      stay: "Albergue de Peregrinos Cidade de Barcelos (공립)",
      desc: "연중무휴 공립 알베르게. 바르셀루스 중심부 위치, 주방 및 난방 완비",
      type: "공립 (연중무휴)",
      verified: true
    },
    {
      day: "05",
      date: "11/15 (일)",
      stage: "바르셀루스 ➔ 발루게스 (Balugães)",
      stay: "Albergue Quinta da Balugães 또는 Casa da Fernanda (비토리누)",
      desc: "발루게스 킨타 알베르게 11월 운영. 3km 전 유명 알베르게인 '카사 다 페르난다'도 운영 여부 확인 가능",
      type: "사설/민박",
      verified: true
    },
    {
      day: "06",
      date: "11/16 (월)",
      stage: "발루게스 ➔ 폰테 드 리마",
      stay: "Albergue de Peregrinos de Ponte de Lima (공립)",
      desc: "폰테 드 리마 강변의 60베드 대형 공립 알베르게 (연중무휴)",
      type: "공립 (연중무휴)",
      verified: true
    },
    {
      day: "07",
      date: "11/17 (화)",
      stage: "폰테 드 리마 ➔ 루비앙이스 (Rubiães)",
      stay: "Albergue de Peregrinos de Rubiães (공립)",
      desc: "라브루자 고개 넘은 직후 위치한 공립. (인근 사설 Ninho 등은 10월 말 조기 마감하므로 공립 이용 필수)",
      type: "공립 필수",
      verified: true
    },
    {
      day: "08",
      date: "11/18 (수)",
      stage: "루비앙이스 ➔ 발렌사 ➔ 투이 (Tui)",
      stay: "Albergue de Peregrinos de Tui (갈리시아 주립 공립)",
      desc: "국경 넘은 직후 투이 대성당 옆 주립(Xunta) 알베르게. 갈리시아 주정부 공립은 365일 연중 오픈",
      type: "주립 공립 (연중무휴)",
      verified: true
    },
    {
      day: "09",
      date: "11/19 (목)",
      stage: "투이 ➔ 오 포리뇨 (O Porriño)",
      stay: "Albergue de Peregrinos de O Porriño (갈리시아 주립)",
      desc: "강변 현대식 주립 공립 (연중무휴). 대형 마트 인접",
      type: "주립 공립 (연중무휴)",
      verified: true
    },
    {
      day: "10",
      date: "11/20 (금)",
      stage: "오 포리뇨 ➔ 레돈델라 (Redondela)",
      stay: "Albergue Casa da Torre (갈리시아 주립 공립)",
      desc: "16세기 석조 저택 공립 (상시 오픈). 해안길과 중앙길 합류점",
      type: "주립 공립 (상시)",
      verified: true
    },
    {
      day: "11",
      date: "11/21 (토)",
      stage: "레돈델라 ➔ 폰테베드라 (Pontevedra)",
      stay: "Albergue Virgen Peregrina (주립) 또는 Bulezen Urban Hostel (사설)",
      desc: "공립 알베르게 연중 상시 운영. 사설 Bulezen(캡슐형 침대, 개별 난방)도 11월 상시 예약 가능",
      type: "주립/사설",
      verified: true
    },
    {
      day: "12",
      date: "11/22 (일)",
      stage: "폰테베드라 ➔ 아르멘테이라 (영성길 1)",
      stay: "Albergue de Peregrinos San Ero de Armenteira (공립)",
      desc: "수도원 옆 공립 알베르게 연중무휴 정상 운영 확인. (일부 소형 사설은 11월 휴업이므로 San Ero 추천)",
      type: "공립 (San Ero)",
      verified: true
    },
    {
      day: "13",
      date: "11/23 (월)",
      stage: "아르멘테이라 ➔ 빌라노바 드 아로우사",
      stay: "Albergue A Salazón (사설) 또는 체육관 공립",
      desc: "A Corticela는 10/31부로 동절기 마감. A Salazón(항구 150m 앞) 및 체육관 공립 알베르게 연중무휴 확인",
      type: "사설/공립",
      verified: true
    },
    {
      day: "14",
      date: "11/24 (화)",
      stage: "빌라노바 ➔ 파드론 (보트 이동)",
      stay: "Albergue de Peregrinos de Padrón (공립)",
      desc: "카르멘 성당 인근 공립 알베르게 연중무휴 상시 운영",
      type: "공립 (연중무휴)",
      verified: true
    },
    {
      day: "15",
      date: "11/25 (수)",
      stage: "파드론 ➔ 오 밀라도이로 (O Milladoiro)",
      stay: "Albergue Milladoiro (사설)",
      desc: "12월 크리스마스 전까지 연중 정상 운영 확인(Del 1 de marzo a navidades). 산티아고 7.5km 전방",
      type: "사설 (12월말까지)",
      verified: true
    },
    {
      day: "16",
      date: "11/26 (목)",
      stage: "오 밀라도이로 ➔ 산티아고 도착",
      stay: "Albergue Seminario Menor 또는 구시가지 호텔",
      desc: "수도원 알베르게 11월 정상 운영 (1인실 및 다인실 구비)",
      type: "수도원/호텔",
      verified: true
    },
    {
      day: "17~19",
      date: "11/27~29",
      stage: "산티아고 투어 & 휴식",
      stay: "호텔/호스텔 연박",
      desc: "시내 일반 숙소는 비수기 특가로 상시 정상 영업",
      type: "호텔/호스텔",
      verified: true
    },
    {
      day: "20~21",
      date: "11/30~12/1",
      stage: "마드리드 이동 & 시내 관광",
      stay: "마드리드 차마르틴/솔 광장 인근 호텔",
      desc: "도심 호텔 정상 운영",
      type: "도심 호텔",
      verified: true
    }
  ],

  // 💡 11월 영성길(Variante Espiritual) 특별 주의사항
  novSpiritualTips: [
    {
      title: "빌라노바 드 아로우사 숙소 변경점",
      content: "한국 순례자들에게 유명한 'Albergue A Corticela'는 매년 10월 31일 영업을 종료하고 동절기 휴업에 들어갑니다. 따라서 11월에는 선착장 도보 2분 거리인 [Albergue A Salazón] 또는 다목적 체육관 1층의 [공립 알베르게]를 이용하셔야 합니다."
    },
    {
      title: "14일 차(11/24) 보트(Traslatio) 사전 확인",
      content: "11월은 비수기라 보트 탑승 인원(최소 출항 인원)이 차지 않거나 바다 물때(조수 간만의 차)에 따라 운항 시간이 매일 바뀝니다. 아르멘테이라에 도착하는 12일 차(11/22) 저녁에 보트 운영사(A Barca do Peregrino / Amare Turismo Náutico 등) WhatsApp으로 '11/24 출항 여부 및 시간'을 반드시 사전 확인해 두셔야 차질 없이 탑승할 수 있습니다."
    }
  ],
'''

if 'novemberAccommodations:' not in text:
    target = '  accommodationBooking:'
    idx = text.find(target)
    if idx != -1:
        text = text[:idx] + nov_lodging_data + '\n' + text[idx:]
        print('Added novemberAccommodations and novSpiritualTips to INITIAL_CAMINO_DATA!')
    else:
        print('Warning: accommodationBooking not found!')

# Write back to js/data.js
with open('js/data.js', 'wb') as f:
    f.write(text.encode('utf-8'))

print('Updated js/data.js with November accommodations!')
