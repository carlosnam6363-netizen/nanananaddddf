import re
import sys

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update caminoDataVersion from 9 to 10
text = text.replace('caminoDataVersion: 9,', 'caminoDataVersion: 10,')

# 2. Add accommodationBooking object to INITIAL_CAMINO_DATA (right after returnFlightInfo)
hotel_booking_obj = '''  // 🏨 포르투 시내 2박 확정 숙소 정보 (11/11 수 체크인 ~ 11/13 금 체크아웃)
  accommodationBooking: {
    bookingPlatform: "트립닷컴 (Trip.com)",
    bookingStatus: "결제 완료 (온라인 사전 결제)",
    bookingNumber: "1400829745971821",
    pinNumber: "7999",
    hotelNameKo: "스테이 호텔 포르투 센트로 트린다데",
    hotelNameEn: "Stay Hotel Porto Centro Trindade",
    ratingStars: 3,
    address: "R. de Gonçalo Cristóvão 111, 4000-408 포르투, 포르투 현, 포르투갈",
    phone: "+351-220028060",
    email: "stayhotelporto.3382sn6klwm30rt@htlpartner.trip.com",
    roomType: "객실 1개 × 2박 (전체 2박 연박)",
    checkIn: "2026-11-11 (수) 16:00 이후",
    checkOut: "2026-11-13 (금) 12:00 이전",
    nights: 2,
    cancellationPolicy: "무료 취소 - 2026년 11월 8일 23:59 전 (호텔 현지 시간)",
    costBreakdown: {
      roomFare: 172656,
      taxAndService: 7738,
      specialDiscount: -25636,
      flightMemberDiscount: -18041,
      percent3Discount: -4102,
      tripCoinsUsed: -990,
      totalPaidKrw: 132615,
      cityTaxEur: 12.00,
      cityTaxNotice: "EUR 12.00 현장 결제 필요 (1인 1박 3유로 × 2인 2박 또는 시세 기준 호텔 결제)"
    },
    rewards: "60 트립코인 적립 (약 802원)",
    features: [
      "포르투 트린다데(Trindade) 메트로 환승역 도보 3분 초역세권",
      "공항(OPO)에서 메트로 E라인 탑승 시 환승 없이 직통 도착",
      "포르투 대성당, 볼량 시장, 상벤투역 등 도심 명소 및 크레덴시알 발급 최적 위치",
      "2박 연박으로 시차 적응, 장비 최종 점검, 컨디션 조절 완벽 대비"
    ]
  },
'''

if 'accommodationBooking:' not in text:
    target = '  // ✈️ 2. 귀국 항공편 확정 예약 정보'
    idx = text.find(target)
    if idx != -1:
        # Find the end of returnFlightInfo object
        # search for routesInfo
        routes_idx = text.find('routesInfo:', idx)
        # insert right before routesInfo
        text = text[:routes_idx] + hotel_booking_obj + '\n  ' + text[routes_idx:]
        print('Added accommodationBooking before routesInfo')

# 3. Update packingList
old_pack_stay = '{ id: "pack-stay-porto", item: "포르투 첫날 호텔 1박 (11/11 체크인 & 시차적응)", text: "포르투 첫날 호텔 1박 (11/11 체크인 & 시차적응)", category: "항공·숙박비", cost: "₩90,000", costKrw: 90000, currency: "KRW", done: false, note: "포르투 시내 중심 호텔 (순례길 전야 컨디션 조절)" },'
new_pack_stay = '{ id: "pack-stay-porto", item: "포르투 호텔 2박 (11/11~13 스테이 호텔 포르투 센트로 트린다데 결제완료)", text: "포르투 호텔 2박 (11/11~13 스테이 호텔 포르투 센트로 트린다데 결제완료)", category: "항공·숙박비", cost: "₩132,615", costKrw: 132615, currency: "KRW", done: true, note: "트립닷컴 결제완료(₩132,615 / 현장 도시세 €12 별도). 예약번호 1400829745971821, PIN 7999. 트린다데역 인근 2박 연박" },'

if old_pack_stay in text:
    text = text.replace(old_pack_stay, new_pack_stay)
    print('Updated pack-stay-porto in packingList')
else:
    print('Warning: old_pack_stay not matched exactly')

# 4. Update the 4 itineraries:
# Day 1: 11/11
# Day 2: 11/12

# In hybrid itinerary:
old_hybrid_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 우마 포베이루스 체크인, 휴식",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "11/10 18:25 인천발(MU8604) ➔ 11/11 12:00 포르투 공항(OPO) 도착. 우마 포베이루스 체크인 및 휴식"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "크레덴시알 발급, 도루강 야경, 최종 패킹",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "포르투 대성당 크레덴시알(순례자 여권) 수령, 동루이스 1세 다리 석양, 최종 짐 패킹"
            },'''

new_hybrid_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 스테이 호텔 트린다데 체크인(16:00), 여장 풀기",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "11/10 18:25 인천발(MU8604) ➔ 11/11 12:00 포르투 공항(OPO) 도착. 메트로 E라인으로 트린다데 이동, 호텔 체크인(16:00~) 및 휴식 (예약: 1400829745971821 / PIN: 7999)"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "크레덴시알 발급, 도루강 야경, 최종 패킹 (2박 연박)",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "포르투 대성당 크레덴시알(순례자 여권) 발급, 볼량 시장·상벤투역 탐방, 동루이스 1세 다리 석양, 순례 전야 최종 짐 패킹 (트린다데 2박 연박)"
            },'''

if old_hybrid_day1 in text:
    text = text.replace(old_hybrid_day1, new_hybrid_day1)
    print('Updated hybrid Day 1 & 2')
else:
    print('Warning: old_hybrid_day1 not matched exactly')

# In coastal itinerary:
old_coastal_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 우마 포베이루스 체크인, 휴식",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "11/10 18:25 인천발 ➔ 11/11 12:00 포르투 공항 도착, 숙소 체크인 후 휴식"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "크레덴시알 발급, 포르투 도심 관광 및 패킹 점검",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "포르투 대성당 크레덴시알 발급, 볼량 시장 및 도심 산책, 패킹 최종 점검"
            },'''

new_coastal_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 스테이 호텔 트린다데 체크인(16:00), 휴식",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "11/10 18:25 인천발 ➔ 11/11 12:00 포르투 공항 도착, 메트로 이동 후 스테이 호텔 트린다데 체크인(16:00~) 및 휴식 (예약: 1400829745971821)"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "크레덴시알 발급, 포르투 도심 관광 및 패킹 점검 (2박 연박)",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "포르투 대성당 크레덴시알 발급, 볼량 시장 및 도심 산책, 2박 연박으로 최상의 컨디션 관리 및 패킹 최종 점검"
            },'''

if old_coastal_day1 in text:
    text = text.replace(old_coastal_day1, new_coastal_day1)
    print('Updated coastal Day 1 & 2')
else:
    print('Warning: old_coastal_day1 not matched exactly')

# In central itinerary:
old_central_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 우마 포베이루스 체크인, 휴식",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "11/10 18:25 인천발 ➔ 11/11 12:00 포르투 공항 도착, 숙소 체크인 및 휴식"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "대성당 크레덴시알 발급, 포르투 도심 관광",
                "hotel": "우마 포베이루스 (Porto)",
                "desc": "포르투 대성당 크레덴시알 수령, 볼량 시장 및 클레리고스 탑 도심 관광"
            },'''

new_central_day1 = '''            {
                "day": 1,
                "date": "11/11",
                "dayOfWeek": "수",
                "type": "입국",
                "origin": "인천 (ICN)",
                "destination": "포르투 (OPO)",
                "distance": "항공 이동",
                "highlight": "포르투 도착, 스테이 호텔 트린다데 체크인(16:00), 휴식",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "11/10 18:25 인천발 ➔ 11/11 12:00 포르투 공항 도착, 메트로 직통 트린다데 이동 후 호텔 체크인 및 휴식 (예약: 1400829745971821)"
            },
            {
                "day": 2,
                "date": "11/12",
                "dayOfWeek": "목",
                "type": "시차 적응",
                "origin": "포르투",
                "destination": "포르투",
                "distance": "시내 도보",
                "highlight": "대성당 크레덴시알 발급, 포르투 도심 관광 (2박 연박)",
                "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
                "desc": "포르투 대성당 크레덴시알 수령, 볼량 시장 및 클레리고스 탑 도심 관광, 2박 연박으로 내륙 중앙길 출발 전 완벽 휴식"
            },'''

if old_central_day1 in text:
    text = text.replace(old_central_day1, new_central_day1)
    print('Updated central Day 1 & 2')
else:
    print('Warning: old_central_day1 not matched exactly')

# In top-level itinerary:
old_toplevel_day1 = '''    {
        "day": 1,
        "date": "11/11",
        "dayOfWeek": "수",
        "type": "입국",
        "origin": "인천 (ICN)",
        "destination": "포르투 (OPO)",
        "distance": "항공 이동",
        "highlight": "포르투 도착, 우마 포베이루스 체크인, 휴식",
        "hotel": "우마 포베이루스 (Porto)",
        "desc": "11/10 18:25 인천발(MU8604) ➔ 11/11 12:00 포르투 공항(OPO) 도착. 우마 포베이루스 체크인 및 휴식"
    },
    {
        "day": 2,
        "date": "11/12",
        "dayOfWeek": "목",
        "type": "시차 적응",
        "origin": "포르투",
        "destination": "포르투",
        "distance": "시내 도보",
        "highlight": "크레덴시알 발급, 도루강 야경, 최종 패킹",
        "hotel": "우마 포베이루스 (Porto)",
        "desc": "포르투 대성당 크레덴시알(순례자 여권) 수령, 동루이스 1세 다리 석양, 최종 짐 패킹"
    },'''

new_toplevel_day1 = '''    {
        "day": 1,
        "date": "11/11",
        "dayOfWeek": "수",
        "type": "입국",
        "origin": "인천 (ICN)",
        "destination": "포르투 (OPO)",
        "distance": "항공 이동",
        "highlight": "포르투 도착, 스테이 호텔 트린다데 체크인(16:00), 여장 풀기",
        "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
        "desc": "11/10 18:25 인천발(MU8604) ➔ 11/11 12:00 포르투 공항(OPO) 도착. 메트로 E라인으로 트린다데 이동, 호텔 체크인(16:00~) 및 휴식 (예약: 1400829745971821 / PIN: 7999)"
    },
    {
        "day": 2,
        "date": "11/12",
        "dayOfWeek": "목",
        "type": "시차 적응",
        "origin": "포르투",
        "destination": "포르투",
        "distance": "시내 도보",
        "highlight": "크레덴시알 발급, 도루강 야경, 최종 패킹 (2박 연박)",
        "hotel": "스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)",
        "desc": "포르투 대성당 크레덴시알(순례자 여권) 발급, 볼량 시장·상벤투역 탐방, 동루이스 1세 다리 석양, 순례 전야 최종 짐 패킹 (트린다데 2박 연박)"
    },'''

if old_toplevel_day1 in text:
    text = text.replace(old_toplevel_day1, new_toplevel_day1)
    print('Updated top-level Day 1 & 2')
else:
    print('Warning: old_toplevel_day1 not matched exactly')

# Write back to js/data.js
with open('js/data.js', 'wb') as f:
    f.write(text.encode('utf-8'))

print('js/data.js update complete!')
