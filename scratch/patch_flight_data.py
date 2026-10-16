import re
import json

def patch_data():
    with open('js/data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update caminoDataVersion to 6
    content = content.replace('caminoDataVersion: 5,', 'caminoDataVersion: 6,')

    # 2. Add flightInfo to INITIAL_CAMINO_DATA
    flight_info_str = '''  // ✈️ 2026.11.10(화) 출국 항공권 확정 예약 정보 (트립닷컴 결제 완료)
  flightInfo: {
    bookingPlatform: "트립닷컴 (Trip.com)",
    bookingStatus: "결제 완료 (신한카드)",
    bookingDate: "2026-10-02 15:43",
    totalPaidKrw: 477357,
    routeType: "편도 항공편 (서울/인천 ➔ 포르투, 경유 2회)",
    totalDuration: "약 26시간 35분 소요",
    departure: {
      time: "2026-11-10 (화) 18:25",
      airport: "서울/인천 (ICN) 제1터미널"
    },
    arrival: {
      time: "2026-11-11 (수) 12:00",
      airport: "포르투 (OPO) 프랑시스쿠 사 카르네이루 공항"
    },
    fareBreakdown: {
      adultFare: 188100,
      taxAndFees: 206800,
      ticketingFee: 10000,
      cabinBaggage: 78400,
      discount: -5943,
      totalKrw: 477357
    },
    segments: [
      {
        segNum: 1,
        airline: "중국동방항공 (China Eastern)",
        flightNo: "MU8604",
        operatedBy: "상하이항공 FM828 운항",
        aircraft: "Boeing 737-800",
        depTime: "11/10 (화) 18:25",
        depAirport: "서울/인천 (ICN) 제1터미널",
        arrTime: "11/10 (화) 19:50",
        arrAirport: "상하이 푸동 (PVG) 제1터미널",
        duration: "2시간 25분",
        service: "기내 스낵 제공"
      },
      {
        isLayover: true,
        city: "상하이 푸동 (PVG) T1",
        duration: "6시간 야간 환승 (19:50 ~ 01:50)",
        notice: "수하물 자동 연결 (경유지 수하물 수취 불필요), 환승 라운지/휴식 구역 대기"
      },
      {
        segNum: 2,
        airline: "중국동방항공 (China Eastern)",
        flightNo: "MU201",
        aircraft: "Boeing 787 드림라이너 (장거리 대형기)",
        depTime: "11/11 (수) 01:50",
        depAirport: "상하이 푸동 (PVG) 제1터미널",
        arrTime: "11/11 (수) 06:30",
        arrAirport: "런던 개트윅 (LGW) 북측 터미널 (North)",
        duration: "12시간 40분",
        service: "기내식 2회 제공 (기내 수면 및 시차적응)"
      },
      {
        isLayover: true,
        city: "런던 개트윅 (LGW) N터미널",
        duration: "3시간 환승 (06:30 ~ 09:30)",
        notice: "보안검색 후 탑승구 이동 (수하물 재수속 여부 현장 확인)"
      },
      {
        segNum: 3,
        airline: "이지젯 (easyJet)",
        flightNo: "U28525",
        aircraft: "Airbus A319",
        depTime: "11/11 (수) 09:30",
        depAirport: "런던 개트윅 (LGW) 북측 터미널 (North)",
        arrTime: "11/11 (수) 12:00",
        arrAirport: "포르투 (OPO) 프랑시스쿠 사 카르네이루 공항 도착!",
        duration: "2시간 30분",
        service: "휴대 수하물 기내 반입 포함"
      }
    ]
  },
'''

    # Place flightInfo right after title/ddayTarget/status
    target = 'status: "준비 완료 (11/10 출국 ➔ 11/11 입국·호텔 체크인 ➔ 12/01 귀국)",\n  durationInfo: "총 22일간 (11/10 인천 출국 ➔ 11/11 포르투 입국·호텔 체크인 & 준비 ➔ 11/12~11/29 순례길 도보 ➔ 11/30 산티아고 완보 ➔ 12/01 귀국 비행기 탑승)",'
    replacement = '''status: "출국 항공권 결제 완료 (11/10 18:25 인천발 ➔ 11/11 12:00 포르투 착 ➔ 12/01 귀국)",
  durationInfo: "총 22일간 (11/10 18:25 인천 ICN 출발 ➔ 상하이/런던 경유 ➔ 11/11 낮 12:00 포르투 OPO 도착 & 호텔 체크인 & 순례 준비 ➔ 11/12~11/29 순례길 도보 ➔ 11/30 산티아고 완보 ➔ 12/01 귀국)",
''' + flight_info_str

    if target in content:
        content = content.replace(target, replacement)
    else:
        print("Warning: target durationInfo not matched exactly")

    # Update packingList flight item
    old_flight_pack = '{ text: "왕복 항공권 (11/10 인천 ➔ 포르투 / 12/01 산티아고 ➔ 인천)", category: "항공·숙박비", cost: 1350000, currency: "KRW", done: true, tip: "11/10 출국 ➔ 11/11 입국, 12/01 귀국 항공편 예약 완료" },'
    new_flight_pack = '''{ id: "pack-flight-inbound", item: "출국 항공권 (인천➔상하이➔런던➔포르투 편도 결제완료)", text: "출국 항공권 (인천➔상하이➔런던➔포르투 편도 결제완료)", category: "항공·숙박비", cost: "₩477,357", costKrw: 477357, currency: "KRW", done: true, tip: "트립닷컴 신한카드 결제완료(477,357원). 11/10 18:25 인천발(MU8604) ➔ 상하이(MU201) ➔ 11/11 12:00 포르투 도착(U28525)" },
    { id: "pack-flight-return", item: "귀국 항공권 (12/01 산티아고/포르투 ➔ 인천 편도 예정)", text: "귀국 항공권 (12/01 산티아고/포르투 ➔ 인천 편도 예정)", category: "항공·숙박비", cost: "₩750,000", costKrw: 750000, currency: "KRW", done: false, tip: "12/01 귀국 비행기 예상 편도 운임 (출국 47.7만 + 귀국 약 75만 = 총 항공비 약 122.7만 원)" },'''

    content = content.replace(old_flight_pack, new_flight_pack)

    # Update Itinerary Day 1 & Day 2
    old_day1 = '{ day: 1, date: "2026-11-10 (화)", title: "인천 국제공항 출국 ➔ 유럽 경유 포르투행 비행기 탑승", distance: "항공 이동", highlight: "순례길 대장정의 시작, 기내 휴식 및 마인드셋 정돈", hotelName: "기내 숙박 (In Flight)", description: "인천공항 제1/2여객터미널 출국, 설레는 순례길 여정 시작" },'
    new_day1 = '{ day: 1, date: "2026-11-10 (화)", title: "인천공항(ICN) 18:25 출국 ➔ 상하이 푸동 환승 (중국동방항공 MU8604)", distance: "항공 이동 (ICN➔PVG 2h 25m)", highlight: "18:25 인천 T1 출발 ➔ 19:50 상하이 PVG 도착 (야간 환승 6h)", hotelName: "중국동방항공 기내박 (B787 MU201)", description: "트립닷컴 결제 완료(477,357원). 인천공항 T1에서 18:25 출발(중국동방항공 MU8604 / 상하이항공 FM828 운항, B737-800). 19:50 상하이 푸동 T1 도착 후 6시간 환승 대기(수하물 자동 연결). 11/11 01:50 런던행 탑승." },'

    old_day2 = '{ day: 2, date: "2026-11-11 (수)", title: "포르투(Porto) 공항 도착 ➔ 호텔 체크인 & 순례길 최종 준비", distance: "시내 도보 4 km", highlight: "호텔 체크인 휴식, 포르투 대성당 크레덴셜 수령, 장보기", hotelName: "Porto Wine Hostel (또는 시내 호텔)", description: "포르투 공항 입국 ➔ 메트로 이동 후 호텔 체크인. 대성당에서 순례자 여권 수령, 유심 확인, 마트에서 비상 행동식 준비" },'
    new_day2 = '{ day: 2, date: "2026-11-11 (수)", title: "런던 환승 ➔ 12:00 포르투 공항(OPO) 도착 ➔ 호텔 체크인 & 순례 준비", distance: "항공 2회 (PVG➔LGW 12.6h, LGW➔OPO 2.5h) + 시내 도보 4 km", highlight: "낮 12:00 포르투 공항 정시 도착! 호텔 체크인, 대성당 크레덴셜 수령", hotelName: "Porto Wine Hostel (또는 시내 호텔)", description: "01:50 상하이 푸동 출발 ➔ 06:30 런던 개트윅 북측터미널(LGW N) 도착(MU201, B787 드림라이너, 기내식 2회). 3시간 환승 후 09:30 이지젯 U28525 탑승 ➔ 낮 12:00 포르투 공항(OPO) 무사 도착! 메트로 타고 시내 호텔 체크인, 포르투 대성당(Sé do Porto)에서 순례자 여권(크레덴셜) 발급 및 장보기." },'

    content = content.replace(old_day1, new_day1)
    content = content.replace(old_day2, new_day2)

    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("js/data.js patched successfully.")

patch_data()
