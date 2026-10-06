/**
 * Personal Career & Schedule Dashboard
 * Static Seed Datasets (Camino, SNS, Portfolio, Inbody, Exam, Energy Flashcards)
 *
 * 이 파일은 대시보드의 초기 시드 데이터(Seed Data)를 전담 관리합니다.
 * 추후 일정, 암기카드 문제, 기출문제, 인바디 내역 등의 데이터 추가 및 수정은
 * 본 파일(js/data.js)에서 안전하고 편리하게 진행하실 수 있습니다.
 */
(function(global) {
  'use strict';

const INITIAL_DISCHARGE_DATE = "2026-12-19";

// 산티아고 순례길 일정 & 준비물 데이터 (2026-11-07 ~ 11-09)
// 산티아고 순례길 일정 & 준비물 데이터 (까미노 드 포르투 3주 여정: 2026-11-09 ~ 11-29)
const INITIAL_CAMINO_DATA = {
  caminoDataVersion: 9,
  title: "산티아고 순례길 3개 코스 비교 관제 & 피니스테레·마드리드 귀국 (23일 대여정)",
  startDate: "2026-11-10",
  endDate: "2026-12-03",
  ddayTarget: "2026-11-10",
  activeRoute: "hybrid", // 'coastal' (해안길) | 'central' (중앙길)
  route: "포르투(Porto) ➔ 해안길 ➔ 발렌사/투이 ➔ 산티아고 대성당 ➔ 피니스테레 ➔ 마드리드(Madrid)",
  totalDistance: "약 240~280 km (도보 18일 + 포르투/피니스테레/마드리드 체류)",
  status: "3개 코스 독립 뷰 탑재 (1.해안➔중앙 합류 [추천], 2.완전 해안길, 3.정통 중앙길) & 왕복 항공권 결제 완료!",
  durationInfo: "총 24일간 (11/10 18:25 인천 ICN 출발 ➔ 상하이/런던 경유 ➔ 11/11 12:00 포르투 OPO 도착 & 순례 준비 ➔ 11/12~11/29 순례길 도보 & 피니스테레 완보 ➔ 11/30 산티아고 복귀 ➔ 12/01 마드리드 이동 & 힐링 투어 ➔ 12/02 11:05 마드리드 MAD 출발 ➔ 청두 3시간 환승 ➔ 12/03 13:30 인천 ICN 귀국 완료)",
  
  // ✈️ 왕복 항공권 결제 총괄 요약
  roundtripSummary: {
    totalFlightsPaidKrw: 884184, // 477,357 + 406,827
    totalKrw: 884184,
    outboundPaidKrw: 477357,
    returnPaidKrw: 406827,
    confirmed: true,
    status: "3개 코스 독립 뷰 탑재 (1.해안➔중앙 합류 [추천], 2.완전 해안길, 3.정통 중앙길) & 왕복 항공권 결제 완료!",
    savingsVersusBudgetKrw: 343173 // 기존 예산(122.7만 원) 대비 34.3만 원 대폭 절감!
  },

  // ✈️ 1. 출국 항공편 확정 예약 정보 (2026.11.10 화)
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
        arrAirport: "런던 개트윅 (LGW) 북측 터미널(North)",
        duration: "12시간 40분",
        service: "기내식 2회 제공 (기내 수면 및 시차적응)"
      },
      {
        isLayover: true,
        city: "런던 개트윅 (LGW) N터미널",
        duration: "3시간 환승 (06:30 ~ 09:30)",
        notice: "보안검색 후 탑승구 이동 (수하물 직송 여부 현장 확인)"
      },
      {
        segNum: 3,
        airline: "이지젯 (easyJet)",
        flightNo: "U28537",
        aircraft: "Airbus A320",
        depTime: "11/11 (수) 09:30",
        depAirport: "런던 개트윅 (LGW) 북측 터미널(North)",
        arrTime: "11/11 (수) 12:00",
        arrAirport: "포르투 (OPO) 프랑시스쿠 사 카르네이루 공항",
        duration: "2시간 30분",
        service: "유럽 역내선 (위탁수하물 15kg 포함)"
      }
    ],
    highlights: [
      "인천 ➔ 상하이 ➔ 런던 ➔ 포르투 최적 연결 (총 26시간 35분)",
      "포르투 낮 12:00 도착으로 입국 당일 포르투 시내 탐방 및 여유로운 적응 가능",
      "유럽 역내선 구간 위탁수하물 15kg(78,400원) 사전 결제 완료",
      "총 477,357원으로 유럽 노선 극가성비 확보"
    ]
  },

  // ✈️ 2. 귀국 항공편 확정 예약 정보 (2026.12.02 수 ~ 12.03 목, 트립닷컴 결제 완료)
  returnFlightInfo: {
    bookingPlatform: "트립닷컴 (Trip.com)",
    bookingStatus: "결제 완료 (신한카드 405,675원 + 트립코인 1,152원)",
    bookingDate: "2026-10-04 02:12",
    totalPaidKrw: 406827,
    confirmed: true,
    flightNo: "3U3804 / 3U3973",
    totalCostKrw: 406827,
    routeType: "편도 항공편 (마드리드 ➔ 청두 ➔ 서울/인천, 경유 1회)",
    totalDuration: "약 18시간 25분 소요",
    departure: {
      time: "2026-12-02 (수) 11:05",
      airport: "마드리드 (MAD) 아돌포 수아레스 바라하스 공항 T1"
    },
    arrival: {
      time: "2026-12-03 (목) 13:30",
      airport: "서울/인천 (ICN) 제1터미널"
    },
    fareBreakdown: {
      adultFare: 408000,
      airfare: 29100,
      fuelSurcharge: 311800,
      taxAndFees: 57100,
      ticketingFee: 10000,
      coinsDiscount: -1173,
      totalKrw: 406827
    },
    segments: [
      {
        segNum: 1,
        airline: "사천항공 (Sichuan Airlines)",
        flightNo: "3U3804",
        aircraft: "Airbus A330-300 (광동체 대형기, 2-4-2 배열)",
        depTime: "12/02 (수) 11:05",
        depAirport: "마드리드 (MAD) 아돌포 수아레스 바라하스 T1",
        arrTime: "12/03 (목) 06:00",
        arrAirport: "청두 톈푸 (TFU) 제1터미널",
        duration: "11시간 55분",
        service: "기내식 제공 (기내 수면)"
      },
      {
        isLayover: true,
        city: "청두 톈푸 (TFU) T1",
        duration: "3시간 환승 (06:00 ~ 09:00)",
        notice: "★ 수하물 자동 연결 (위탁수하물 수취 및 재수속 불필요 - 인천에서 바로 수취)"
      },
      {
        segNum: 2,
        airline: "사천항공 (Sichuan Airlines)",
        flightNo: "3U3973",
        aircraft: "Airbus A321 (중형기, 3-3 배열)",
        depTime: "12/03 (목) 09:00",
        depAirport: "청두 톈푸 (TFU) 제1터미널",
        arrTime: "12/03 (목) 13:30",
        arrAirport: "서울/인천 (ICN) 제1터미널",
        duration: "3시간 30분",
        service: "기내식 제공"
      }
    ],
    highlights: [
      "마드리드 ➔ 청두 ➔ 인천 총 18시간 25분의 황금 스케줄 귀국편",
      "청두 톈푸 공항 3시간 쾌적한 환승 + 위탁수하물 자동 연결(재수속 불필요)",
      "A330-300 대형 기종으로 장거리 12시간 편안한 비행 및 기내식 제공",
      "트립닷컴 특가(406,827원) 확정으로 기존 귀국 예산 75만 원 대비 34.3만 원 추가 절약!"
    ]
  },

  // 🥾 코스 2개 분기 (해안길 vs 중앙길) 및 알베르게 리스트
  routesInfo: {
    "hybrid": {
        "id": "hybrid",
        "name": "[옵션 1] 해안길 출발 ➔ 바르셀루스 중앙길 합류 (가장 추천하는 황금 밸런스)",
        "shortName": "해안➔중앙 합류 (추천)",
        "badge": "⭐ 가장 추천하는 황금 밸런스",
        "themeColor": "amber",
        "distance": "약 240 km",
        "walkingDays": "14일 도보 + 영성길 보트",
        "totalDays": "총 23일간 (11/11 입국 ~ 12/03 귀국)",
        "char": "초반 1~2일 탁 트인 대서양 데크길 + 포보아 드 바르징에서 내륙 전환 + 바르셀루스·폰테 드 리마·라브루자 고개 + 영성길(보트 순례 Traslatio) 완벽 결합",
        "highlight": "포르투 ➔ 마토지뉴스(메트로) ➔ 빌라 두 콘드(해안 데크길) ➔ 바르셀루스(내륙 전환) ➔ 발루게스 ➔ 폰테 드 리마 ➔ 라브루자 고개 ➔ 발렌사/투이 ➔ 폰테베드라 ➔ 영성길(보트) ➔ 파드론 ➔ 산티아고 대성당 ➔ 피스테라/무시아 ➔ 마드리드 ➔ 인천",
        "notice": "대서양의 시원한 바다와 포르투갈 내륙의 유서 깊은 중세 마을, 장엄한 라브루자 고개, 성 야고보의 전설이 깃든 영성길 보트(Traslatio)까지 가장 완벽한 밸런스를 자랑합니다.",
        "itinerary": [
            {
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
            },
            {
                "day": 3,
                "date": "11/13",
                "dayOfWeek": "금",
                "type": "해안길",
                "origin": "마토지뉴스 (메트로 이동)",
                "destination": "빌라 두 콘드 / 포보아",
                "distance": "14km",
                "highlight": "바닷바람 맞으며 걷는 나무 데크 해안길 시작",
                "hotel": "Albergue de Santa Clara / 포보아 숙소",
                "desc": "메트로로 마토지뉴스 이동 후 대서양 해안 목재 데크길을 따라 걷는 상쾌한 첫 도보"
            },
            {
                "day": 4,
                "date": "11/14",
                "dayOfWeek": "토",
                "type": "환승 연결로",
                "origin": "포보아 드 바르징",
                "destination": "바르셀루스 (Barcelos)",
                "distance": "15km",
                "highlight": "해안에서 내륙으로 전환, 포르투갈 닭 전설의 고향",
                "hotel": "Albergue Cidade de Barcelos",
                "desc": "대서양 해안길에서 내륙 중앙길로 전환하는 연결로. 포르투갈의 상징인 수탉 전설의 유서 깊은 중세 도시 도착"
            },
            {
                "day": 5,
                "date": "11/15",
                "dayOfWeek": "일",
                "type": "중앙길",
                "origin": "바르셀루스",
                "destination": "발루게스 (Balugães)",
                "distance": "15km",
                "highlight": "호젓한 시골 전원 풍경과 포도밭 숲길",
                "hotel": "Casa da Fernanda / Albergue Balugães",
                "desc": "한적한 시골 오솔길과 비뇨 베르데(그린 와인) 포도밭 사이를 통과하는 평화로운 전원 순례길"
            },
            {
                "day": 6,
                "date": "11/16",
                "dayOfWeek": "월",
                "type": "중앙길",
                "origin": "발루게스",
                "destination": "폰테 드 리마",
                "distance": "17km",
                "highlight": "가장 오래된 중세 다리 마을 입성, 그린 와인",
                "hotel": "Albergue de Peregrinos de Ponte de Lima",
                "desc": "포르투갈에서 가장 오래된 역사적인 중세 석조 다리와 리마 강변 정취, 특산 그린 와인 만찬"
            },
            {
                "day": 7,
                "date": "11/17",
                "dayOfWeek": "화",
                "type": "중앙길",
                "origin": "폰테 드 리마",
                "destination": "루비앙이스 (Rubiães)",
                "distance": "18km",
                "highlight": "포르투갈 길의 상징 '라브루자(Labruja) 고개' 완주",
                "hotel": "Albergue de Rubiães",
                "desc": "포르투갈 길 최대의 난코스이자 벅찬 파노라마를 선사하는 라브루자 고개(해발 400m) 정복"
            },
            {
                "day": 8,
                "date": "11/18",
                "dayOfWeek": "수",
                "type": "국경 통과",
                "origin": "루비앙이스",
                "destination": "발렌사 ➔ 투이 (Tui)",
                "distance": "15km",
                "highlight": "국경 철교 도보 월경(포르투갈 ➔ 스페인, 시차 +1h)",
                "hotel": "Albergue Santo Domingo / Ideas Peregrinas",
                "desc": "발렌사 고성을 지나 미뇨강 국제 철교를 걸어서 건너 스페인 갈리시아 투이로 입국 (시차 1시간 빨라짐)"
            },
            {
                "day": 9,
                "date": "11/19",
                "dayOfWeek": "목",
                "type": "중앙길",
                "origin": "투이",
                "destination": "오 포리뇨 (O Porriño)",
                "distance": "16km",
                "highlight": "갈리시아 주정부 10유로 공립 알베르게 첫 이용",
                "hotel": "Albergue de Peregrinos de O Porriño (공립)",
                "desc": "투이 대성당 조망 후 루로 강변 자연 산책로를 따라 오 포리뇨 진입, 갈리시아 공립 알베르게 숙박"
            },
            {
                "day": 10,
                "date": "11/20",
                "dayOfWeek": "금",
                "type": "중앙길",
                "origin": "오 포리뇨",
                "destination": "레돈델라 (Redondela)",
                "distance": "15km",
                "highlight": "리아스 해안 만 조망, 해안길 합류 지점",
                "hotel": "Albergue Casa da Torre (공립)",
                "desc": "해안길과 중앙길이 하나로 만나는 역사적인 분기점. 리아스 해안의 멋진 바다와 철교 감상"
            },
            {
                "day": 11,
                "date": "11/21",
                "dayOfWeek": "토",
                "type": "중앙길",
                "origin": "레돈델라",
                "destination": "폰테베드라 (Pontevedra)",
                "distance": "18km",
                "highlight": "가리비 모양 성당(Peregrina), 중세 구시가지",
                "hotel": "Bulezen Urban Hostel / Virxe da Peregrina",
                "desc": "폰테삼파이오 고대 석교를 건너 보행자의 천국 폰테베드라 구시가지와 가리비 순례자 성당 탐방"
            },
            {
                "day": 12,
                "date": "11/22",
                "dayOfWeek": "일",
                "type": "영성길 1",
                "origin": "폰테베드라",
                "destination": "아르멘테이라",
                "distance": "17km",
                "highlight": "영성길 진입, 콤바드로 곡물창고 마을 통과",
                "hotel": "Albergue de Armenteira (수도원 인근)",
                "desc": "★ 영성길(Variante Espiritual) 진입! 갈리시아 전통 곡물창고(오레오)가 늘어선 해변 콤바드로 경유 후 수도원 마을 도착"
            },
            {
                "day": 13,
                "date": "11/23",
                "dayOfWeek": "월",
                "type": "영성길 2",
                "origin": "아르멘테이라",
                "destination": "빌라노바 드 아로우사",
                "distance": "23km",
                "highlight": "완만한 내리막 '돌과 물의 길' 트레킹",
                "hotel": "Albergue de Peregrinos de Vilanova de Arousa",
                "desc": "물레방아와 폭포가 어우러진 갈리시아 최고의 숲길 '돌과 물의 길(Ruta da Pedra e da Auga)' 힐링 트레킹"
            },
            {
                "day": 14,
                "date": "11/24",
                "dayOfWeek": "화",
                "type": "영성길 3",
                "origin": "빌라노바 드 아로우사",
                "destination": "파드론 (Padrón)",
                "distance": "보트 + 3km",
                "highlight": "보트 순례길(Traslatio) 탑승, 파드론 고추 요리",
                "hotel": "Albergue de Padrón (공립) / Albergue Rossol",
                "desc": "★ 성 야고보의 유해 운구 보트 순례(Traslatio) 탑승! 강변 십자가들을 지나 파드론 기착, 명물 꽈리고추 튀김 만찬"
            },
            {
                "day": 15,
                "date": "11/25",
                "dayOfWeek": "수",
                "type": "중앙길",
                "origin": "파드론",
                "destination": "테오 / 오 밀라도이로",
                "distance": "15km",
                "highlight": "완주 전야, 고요한 참나무 숲길",
                "hotel": "Albergue Milladoiro / Teo 숙소",
                "desc": "대성당을 하루 앞둔 설레는 순례길. 고요한 갈리시아 참나무 숲길을 걸으며 마음 정리"
            },
            {
                "day": 16,
                "date": "11/26",
                "dayOfWeek": "목",
                "type": "완주 입성",
                "origin": "오 밀라도이로",
                "destination": "산티아고 데 콤포스텔라",
                "distance": "10km",
                "highlight": "산티아고 대성당 입성, 완주증 발급, 정오 미사",
                "hotel": "산티아고 중심가 숙소 (1박)",
                "desc": "★ 마침내 오브라도이로 광장 대성당 입성! 성 야고보 포옹, 콤포스텔라 완보증 수령, 12시 순례자 향로 미사 참례"
            },
            {
                "day": 17,
                "date": "11/27",
                "dayOfWeek": "금",
                "type": "투어",
                "origin": "산티아고",
                "destination": "피스테라 & 무시아",
                "distance": "버스 투어",
                "highlight": "세상의 끝(0.00km) 등대 및 대서양 바다 투어",
                "hotel": "산티아고 중심가 숙소 (2박)",
                "desc": "고대인들이 믿었던 세상의 끝 피스테라 0.00km 비석과 무시아 성모 바위 절벽 일일 투어"
            },
            {
                "day": 18,
                "date": "11/28",
                "dayOfWeek": "토",
                "type": "휴식",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "시내 도보",
                "highlight": "아바스토스 시장 해산물 식사 및 기념품 쇼핑",
                "hotel": "산티아고 중심가 숙소 (3박)",
                "desc": "산티아고 아바스토스 재래시장에서 신선한 갈리시아 뽈뽀와 해산물 만찬, 가족/지인 기념품 쇼핑"
            },
            {
                "day": 19,
                "date": "11/29",
                "dayOfWeek": "일",
                "type": "예비일",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "자유",
                "highlight": "일정 지연 대비 버퍼일 (차질 없을 시 휴식)",
                "hotel": "산티아고 중심가 숙소 (4박)",
                "desc": "도보 일정 지연을 대비한 완벽한 버퍼 데이. 정상 완주 시 산티아고 구시가지 카페 힐링"
            },
            {
                "day": 20,
                "date": "11/30",
                "dayOfWeek": "월",
                "type": "광역 이동",
                "origin": "산티아고",
                "destination": "마드리드 (Chamartín)",
                "distance": "렌페 (3.5h)",
                "highlight": "고속열차로 마드리드 이동 후 체크인, 야경 투어",
                "hotel": "마드리드 중심가 호텔 (1박)",
                "desc": "산티아고 역에서 Renfe 초고속열차 탑승(약 3시간 20분) ➔ 마드리드 차마르틴 역 도착, 호텔 체크인 & 솔 광장 야경"
            },
            {
                "day": 21,
                "date": "12/01",
                "dayOfWeek": "화",
                "type": "도시 관광",
                "origin": "마드리드",
                "destination": "마드리드",
                "distance": "메트로/도보",
                "highlight": "프라도 미술관, 솔 광장, 츄러스 맛집 전일 관광",
                "hotel": "마드리드 중심가 호텔 (2박)",
                "desc": "세계 3대 미술관 프라도 미술관 관람, 산 히네스 원조 츄러스, 마요르 광장 및 왕궁 전일 관광"
            },
            {
                "day": 22,
                "date": "12/02",
                "dayOfWeek": "수",
                "type": "출국",
                "origin": "마드리드 (MAD)",
                "destination": "청두 (TFU) 경유",
                "distance": "항공편",
                "highlight": "08:00 공항 도착 ➔ 11:05 출국 (쓰촨 3U3804)",
                "hotel": "기내 숙박 (Airbus A330)",
                "desc": "아돌포 수아레스 바라하스 T1 이동. 11:05 쓰촨항공 3U3804(A330 대형기) 탑승 귀국길 비행"
            },
            {
                "day": 23,
                "date": "12/03",
                "dayOfWeek": "목",
                "type": "귀국",
                "origin": "청두 (TFU)",
                "destination": "인천 (ICN)",
                "distance": "항공편",
                "highlight": "청두 3h 환승 ➔ 13:30 인천 도착 (3U3973)",
                "hotel": "스위트 홈 (귀가)",
                "desc": "청두 톈푸 T1 3시간 환승 (수하물 자동 연결) ➔ 13:30 인천공항 T1 도착! 대단원의 순례길 완주"
            }
        ]
    },
    "coastal": {
        "id": "coastal",
        "name": "[옵션 2] 순수 해안길 완주 코스 (Camino da Costa)",
        "shortName": "완전 해안길 (Costa)",
        "badge": "🌊 탁 트인 대서양 & 평지 코스",
        "themeColor": "sky",
        "distance": "약 260 km",
        "walkingDays": "14일 도보 + 영성길 보트",
        "totalDays": "총 23일간 (11/11 입국 ~ 12/03 귀국)",
        "char": "바르셀루스로 꺾지 않고 계속 바다를 따라 북상하여 비아나 두 카스텔루, 카미냐를 거쳐 보트로 스페인(아 과르다)으로 넘어간 뒤 비고를 지나 폰테베드라로 합류하는 순수 해안길",
        "highlight": "포르투 ➔ 빌라 두 콘드 ➔ 에스포센드 ➔ 비아나 두 카스텔루 ➔ 카미냐 ➔ (보트 국경) ➔ 아 과르다 ➔ 오이아 수도원 ➔ 바이오나 ➔ 비고 ➔ 폰테베드라 ➔ 영성길(보트) ➔ 파드론 ➔ 산티아고",
        "notice": "경사가 거의 없고 평지 위주라 무릎 부담이 적음 / 11월 바닷바람과 비바람에 노출도가 큼 / 카미냐-아 과르다 페리 운항 여부 확인 필수.",
        "itinerary": [
            {
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
            },
            {
                "day": 3,
                "date": "11/13",
                "dayOfWeek": "금",
                "type": "해안길",
                "origin": "마토지뉴스",
                "destination": "빌라 두 콘드",
                "distance": "14km",
                "highlight": "대서양 해안 데크길 걷기 시작",
                "hotel": "Albergue de Santa Clara",
                "desc": "시원한 대서양 해안선을 따라 펼쳐진 목재 보드워크를 걷는 순례 첫걸음"
            },
            {
                "day": 4,
                "date": "11/14",
                "dayOfWeek": "토",
                "type": "해안길",
                "origin": "빌라 두 콘드",
                "destination": "에스포센드 (Esposende)",
                "distance": "16km",
                "highlight": "넓은 해변과 사구(모래언덕) 생태 보호구역",
                "hotel": "Sea Soul Albergue",
                "desc": "포보아 드 바르징 어촌과 모래언덕 해안 생태 보호구역을 지나는 평온한 길"
            },
            {
                "day": 5,
                "date": "11/15",
                "dayOfWeek": "일",
                "type": "해안길",
                "origin": "에스포센드",
                "destination": "비아나 두 카스텔루",
                "distance": "20km",
                "highlight": "에펠이 설계한 철교, 산타 루시아 성당 조망",
                "hotel": "Albergue de Santa Luzia",
                "desc": "구스타프 에펠 설계 철교를 건너 웅장한 비아나 두 카스텔루 진입"
            },
            {
                "day": 6,
                "date": "11/16",
                "dayOfWeek": "월",
                "type": "해안길",
                "origin": "비아나 두 카스텔루",
                "destination": "빌라 프라이아 드 안코라",
                "distance": "18km",
                "highlight": "깎아지른 절벽과 고즈넉한 어촌 마을 걷기",
                "hotel": "Albergue D'Âncora",
                "desc": "대서양 해안 절벽과 모래사장을 따라 걷는 아늑하고 고요한 어촌 코스"
            },
            {
                "day": 7,
                "date": "11/17",
                "dayOfWeek": "화",
                "type": "해안/국경",
                "origin": "빌라 프라이아",
                "destination": "카미냐 ➔ 아 과르다 (A Guarda)",
                "distance": "15km + 보트",
                "highlight": "미뇨강 보트로 국경 통과(스페인 입국, 시차 +1h)",
                "hotel": "Albergue O Peirao (A Guarda)",
                "desc": "포르투갈 국경 도시 카미냐에서 페리/보트로 미뇨강을 건너 스페인 아 과르다 입국"
            },
            {
                "day": 8,
                "date": "11/18",
                "dayOfWeek": "수",
                "type": "해안길",
                "origin": "아 과르다",
                "destination": "오이아 (Oia)",
                "distance": "16km",
                "highlight": "파도가 부서지는 바닷가 바로 앞 중세 수도원",
                "hotel": "Albergue da Estrela (바다 수도원 뷰)",
                "desc": "부서지는 대서양 파도 바로 옆 절벽 위에 세워진 산타 마리아 데 오이아 수도원 조망"
            },
            {
                "day": 9,
                "date": "11/19",
                "dayOfWeek": "목",
                "type": "해안길",
                "origin": "오이아",
                "destination": "바이오나 (Baiona)",
                "distance": "18km",
                "highlight": "신대륙 발견선 핀타호가 귀환한 유서 깊은 항구",
                "hotel": "Albergue Baiona",
                "desc": "몬테레알 성채 요새와 콜럼버스의 핀타호가 귀환했던 역사적인 아름다운 항구 바이오나"
            },
            {
                "day": 10,
                "date": "11/20",
                "dayOfWeek": "금",
                "type": "해안길",
                "origin": "바이오나",
                "destination": "비고 (Vigo)",
                "distance": "22km",
                "highlight": "갈리시아 최대 산업/항구 도시 비고 진입",
                "hotel": "Albergue Berbés (공립)",
                "desc": "리아 데 비고 만의 멋진 바다 뷰를 감상하며 갈리시아 최대 항구 도시 비고 진입"
            },
            {
                "day": 11,
                "date": "11/21",
                "dayOfWeek": "토",
                "type": "합류길",
                "origin": "비고",
                "destination": "레돈델라 ➔ 폰테베드라",
                "distance": "24km",
                "highlight": "중앙길과 합류 후 폰테베드라 도착 (필요시 버스 점프)",
                "hotel": "Bulezen Urban Hostel",
                "desc": "레돈델라에서 중앙길과 만나 폰테베드라 구시가지까지 도보 (컨디션 따라 버스 점프 가능)"
            },
            {
                "day": 12,
                "date": "11/22",
                "dayOfWeek": "일",
                "type": "영성길 1",
                "origin": "폰테베드라",
                "destination": "아르멘테이라",
                "distance": "17km",
                "highlight": "영성길 진입, 콤바드로 마을",
                "hotel": "Albergue de Armenteira",
                "desc": "★ 영성길 분기점 진입, 아름다운 해변 곡물창고 마을 콤바드로 경유 후 아르멘테이라 수도원 도착"
            },
            {
                "day": 13,
                "date": "11/23",
                "dayOfWeek": "월",
                "type": "영성길 2",
                "origin": "아르멘테이라",
                "destination": "빌라노바 드 아로우사",
                "distance": "23km",
                "highlight": "'돌과 물의 길' 숲길 내리막",
                "hotel": "Albergue de Vilanova de Arousa",
                "desc": "피톤치드 가득한 '돌과 물의 길' 계곡 산책로를 따라 빌라노바 드 아로우사 항구까지 트레킹"
            },
            {
                "day": 14,
                "date": "11/24",
                "dayOfWeek": "화",
                "type": "영성길 3",
                "origin": "빌라노바 드 아로우사",
                "destination": "파드론 (Padrón)",
                "distance": "보트 + 3km",
                "highlight": "보트 순례길(Traslatio) 탑승",
                "hotel": "Albergue de Padrón (공립)",
                "desc": "★ 세계 유일의 보트 순례길 Traslatio 탑승 ➔ 파드론 기착, 성 야고보 유해 기착 바위 참배"
            },
            {
                "day": 15,
                "date": "11/25",
                "dayOfWeek": "수",
                "type": "중앙길",
                "origin": "파드론",
                "destination": "오 밀라도이로",
                "distance": "15km",
                "highlight": "완주 전야 휴식",
                "hotel": "Albergue Milladoiro",
                "desc": "산티아고 완주를 앞두고 평온한 숲길을 걸으며 순례 전야의 묵상"
            },
            {
                "day": 16,
                "date": "11/26",
                "dayOfWeek": "목",
                "type": "완주 입성",
                "origin": "오 밀라도이로",
                "destination": "산티아고 데 콤포스텔라",
                "distance": "10km",
                "highlight": "산티아고 완주 입성, 12시 미사",
                "hotel": "산티아고 중심가 숙소 (1박)",
                "desc": "오브라도이로 광장 대성당 도착! 콤포스텔라 완보증 수령 및 정오 순례자 대향로 미사"
            },
            {
                "day": 17,
                "date": "11/27",
                "dayOfWeek": "금",
                "type": "투어",
                "origin": "산티아고",
                "destination": "피스테라 & 무시아",
                "distance": "버스 투어",
                "highlight": "세상의 끝 투어",
                "hotel": "산티아고 중심가 숙소 (2박)",
                "desc": "피스테라 0.00km 등대 일몰 및 무시아 성지 당일 버스 투어"
            },
            {
                "day": 18,
                "date": "11/28",
                "dayOfWeek": "토",
                "type": "휴식",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "시내 도보",
                "highlight": "아바스토스 시장 미식 및 기념품 쇼핑",
                "hotel": "산티아고 중심가 숙소 (3박)",
                "desc": "산티아고 아바스토스 시장에서 즐기는 뽈뽀 요리와 와인, 여유로운 시내 관광"
            },
            {
                "day": 19,
                "date": "11/29",
                "dayOfWeek": "일",
                "type": "예비일",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "자유",
                "highlight": "버퍼 데이",
                "hotel": "산티아고 중심가 숙소 (4박)",
                "desc": "일정 지연 및 우천 대비 버퍼 데이"
            },
            {
                "day": 20,
                "date": "11/30",
                "dayOfWeek": "월",
                "type": "광역 이동",
                "origin": "산티아고",
                "destination": "마드리드",
                "distance": "렌페 (3.5h)",
                "highlight": "고속철도로 마드리드 이동 후 체크인",
                "hotel": "마드리드 중심가 호텔 (1박)",
                "desc": "Renfe 초고속열차로 마드리드 이동 후 중심가 호텔 체크인 및 야경 투어"
            },
            {
                "day": 21,
                "date": "12/01",
                "dayOfWeek": "화",
                "type": "도시 관광",
                "origin": "마드리드",
                "destination": "마드리드",
                "distance": "메트로/도보",
                "highlight": "프라도 미술관, 솔/마요르 광장 관광",
                "hotel": "마드리드 중심가 호텔 (2박)",
                "desc": "프라도 미술관, 마요르 광장, 솔 광장 츄러스 전일 힐링 투어"
            },
            {
                "day": 22,
                "date": "12/02",
                "dayOfWeek": "수",
                "type": "출국",
                "origin": "마드리드 (MAD)",
                "destination": "청두 (TFU) 경유",
                "distance": "항공편",
                "highlight": "08:00 공항 도착 ➔ 11:05 출국 (쓰촨 3U3804)",
                "hotel": "기내 숙박 (Airbus A330)",
                "desc": "마드리드 MAD T1 ➔ 11:05 쓰촨항공 3U3804 탑승 귀국길 비행"
            },
            {
                "day": 23,
                "date": "12/03",
                "dayOfWeek": "목",
                "type": "귀국",
                "origin": "청두 (TFU)",
                "destination": "인천 (ICN)",
                "distance": "항공편",
                "highlight": "청두 3h 환승 ➔ 13:30 인천 도착 (3U3973)",
                "hotel": "스위트 홈 (귀가)",
                "desc": "청두 환승 후 13:30 인천공항 T1 도착"
            }
        ]
    },
    "central": {
        "id": "central",
        "name": "[옵션 3] 정통 중앙길 완주 코스 (Camino Central)",
        "shortName": "정통 중앙길 (Central)",
        "badge": "🌲 역사와 전통의 숲길 코스",
        "themeColor": "emerald",
        "distance": "약 240 km",
        "walkingDays": "14일 도보 + 영성길 보트",
        "totalDays": "총 23일간 (11/11 입국 ~ 12/03 귀국)",
        "char": "포르투 대성당 정문에서부터 시작해 바다를 거치지 않고 내륙 숲길과 시골길, 로마 시대 유적만을 온전히 밟아가는 가장 전통적인 루트",
        "highlight": "포르투 ➔ 라테스 ➔ 바르셀루스 ➔ 발루게스 ➔ 폰테 드 리마 ➔ 라브루자 고개 ➔ 발렌사/투이 ➔ 오 포리뇨 ➔ 레돈델라 ➔ 폰테베드라 ➔ 영성길(보트) ➔ 파드론 ➔ 산티아고",
        "notice": "포르투 교외 공단·차도 구간이 다소 지루함 (1일차 메트로로 교외 Vilar do Pinheiro 스킵 권장) / 바람이 적고 아늑한 숲길 중심 / 가장 순례자다운 고전적 정취.",
        "itinerary": [
            {
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
            },
            {
                "day": 3,
                "date": "11/13",
                "dayOfWeek": "금",
                "type": "중앙길",
                "origin": "포르투 (또는 Vilar do Pinheiro)",
                "destination": "사오 페드로 드 라테스 (Rates)",
                "distance": "16km",
                "highlight": "메트로로 공단 우회 후 고요한 시골 숲길 진입",
                "hotel": "Albergue de Peregrinos de Rates",
                "desc": "메트로로 포르투 교외 공단을 건너뛰고 라테스 방향의 고요한 숲길 진입"
            },
            {
                "day": 4,
                "date": "11/14",
                "dayOfWeek": "토",
                "type": "중앙길",
                "origin": "라테스 (Rates)",
                "destination": "바르셀루스 (Barcelos)",
                "distance": "16km",
                "highlight": "중세 로마네스크 성당과 닭의 도시 도착",
                "hotel": "Albergue Cidade de Barcelos",
                "desc": "유서 깊은 로마네스크 성당을 지나 포르투갈 수탉 전설의 발상지 바르셀루스 도착"
            },
            {
                "day": 5,
                "date": "11/15",
                "dayOfWeek": "일",
                "type": "중앙길",
                "origin": "바르셀루스",
                "destination": "발루게스 (Balugães)",
                "distance": "15km",
                "highlight": "한적한 포도밭 마을 통과",
                "hotel": "Casa da Fernanda / Albergue Balugães",
                "desc": "평화로운 전원 농장과 포도밭 오솔길을 따라 걷는 아늑한 숲길"
            },
            {
                "day": 6,
                "date": "11/16",
                "dayOfWeek": "월",
                "type": "중앙길",
                "origin": "발루게스",
                "destination": "폰테 드 리마",
                "distance": "17km",
                "highlight": "중세 고린다리와 비뇨 베르데 만찬",
                "hotel": "Albergue de Peregrinos de Ponte de Lima",
                "desc": "포르투갈에서 가장 오래된 마을 폰테 드 리마 입성 및 강변 만찬"
            },
            {
                "day": 7,
                "date": "11/17",
                "dayOfWeek": "화",
                "type": "중앙길",
                "origin": "폰테 드 리마",
                "destination": "루비앙이스 (Rubiães)",
                "distance": "18km",
                "highlight": "라브루자 고개 넘기 (중앙길 최대 경사 구간)",
                "hotel": "Albergue de Rubiães",
                "desc": "중앙길의 백미 라브루자 고개를 넘어 루비앙이스 알베르게 도착"
            },
            {
                "day": 8,
                "date": "11/18",
                "dayOfWeek": "수",
                "type": "국경 통과",
                "origin": "루비앙이스",
                "destination": "발렌사 ➔ 투이 (Tui)",
                "distance": "15km",
                "highlight": "국제 철교 건너 스페인 국경 통과 (+1시간)",
                "hotel": "Albergue Santo Domingo / Ideas Peregrinas",
                "desc": "발렌사 요새를 거쳐 국제 철교를 건너 스페인 갈리시아 투이 입국"
            },
            {
                "day": 9,
                "date": "11/19",
                "dayOfWeek": "목",
                "type": "중앙길",
                "origin": "투이",
                "destination": "오 포리뇨",
                "distance": "16km",
                "highlight": "갈리시아 공립 알베르게 이용",
                "hotel": "Albergue de Peregrinos de O Porriño (공립)",
                "desc": "투이 대성당 탐방 후 갈리시아 공립 알베르게 첫 투숙"
            },
            {
                "day": 10,
                "date": "11/20",
                "dayOfWeek": "금",
                "type": "중앙길",
                "origin": "오 포리뇨",
                "destination": "레돈델라",
                "distance": "15km",
                "highlight": "해안길 합류 지점 통과",
                "hotel": "Albergue Casa da Torre (공립)",
                "desc": "해안길과 합류하는 레돈델라 마을 도착"
            },
            {
                "day": 11,
                "date": "11/21",
                "dayOfWeek": "토",
                "type": "중앙길",
                "origin": "레돈델라",
                "destination": "폰테베드라",
                "distance": "18km",
                "highlight": "구시가지 및 순례자 성당 탐방",
                "hotel": "Bulezen Urban Hostel",
                "desc": "폰테삼파이오 다리를 건너 폰테베드라 구시가지 도착"
            },
            {
                "day": 12,
                "date": "11/22",
                "dayOfWeek": "일",
                "type": "영성길 1",
                "origin": "폰테베드라",
                "destination": "아르멘테이라",
                "distance": "17km",
                "highlight": "영성길 진입, 콤바드로 마을 구경",
                "hotel": "Albergue de Armenteira",
                "desc": "★ 영성길 분기점 진입, 콤바드로 전통 마을 거쳐 아르멘테이라 수도원 도착"
            },
            {
                "day": 13,
                "date": "11/23",
                "dayOfWeek": "월",
                "type": "영성길 2",
                "origin": "아르멘테이라",
                "destination": "빌라노바 드 아로우사",
                "distance": "23km",
                "highlight": "완만한 내리막 계곡길 트레킹",
                "hotel": "Albergue de Vilanova de Arousa",
                "desc": "'돌과 물의 길' 숲길을 따라 아로우사 해안 항구 마을로 트레킹"
            },
            {
                "day": 14,
                "date": "11/24",
                "dayOfWeek": "화",
                "type": "영성길 3",
                "origin": "빌라노바 드 아로우사",
                "destination": "파드론 (Padrón)",
                "distance": "보트 + 3km",
                "highlight": "보트 순례길(Traslatio) 탑승",
                "hotel": "Albergue de Padrón (공립)",
                "desc": "★ 보트 순례길(Traslatio) 탑승 ➔ 파드론 기착, 성 야고보 유해 기착지 탐방"
            },
            {
                "day": 15,
                "date": "11/25",
                "dayOfWeek": "수",
                "type": "중앙길",
                "origin": "파드론",
                "destination": "오 밀라도이로",
                "distance": "15km",
                "highlight": "산티아고 전 마지막 밤",
                "hotel": "Albergue Milladoiro",
                "desc": "산티아고 완주 전야, 고요한 오 밀라도이로에서 마지막 밤"
            },
            {
                "day": 16,
                "date": "11/26",
                "dayOfWeek": "목",
                "type": "완주 입성",
                "origin": "오 밀라도이로",
                "destination": "산티아고 데 콤포스텔라",
                "distance": "10km",
                "highlight": "산티아고 완주 입성, 정오 미사 참례",
                "hotel": "산티아고 중심가 숙소 (1박)",
                "desc": "★ 산티아고 대성당 오브라도이로 광장 완주 입성, 완보증 수령, 12시 미사"
            },
            {
                "day": 17,
                "date": "11/27",
                "dayOfWeek": "금",
                "type": "투어",
                "origin": "산티아고",
                "destination": "피스테라 & 무시아",
                "distance": "버스 투어",
                "highlight": "세상의 끝 당일치기 투어",
                "hotel": "산티아고 중심가 숙소 (2박)",
                "desc": "피스테라 0.00km 곶 등대 및 무시아 해안 절벽 버스 투어"
            },
            {
                "day": 18,
                "date": "11/28",
                "dayOfWeek": "토",
                "type": "휴식",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "시내 도보",
                "highlight": "아바스토스 시장 해산물 식사 및 여유",
                "hotel": "산티아고 중심가 숙소 (3박)",
                "desc": "아바스토스 시장 해산물 식사 및 기념품 쇼핑"
            },
            {
                "day": 19,
                "date": "11/29",
                "dayOfWeek": "일",
                "type": "예비일",
                "origin": "산티아고",
                "destination": "산티아고",
                "distance": "자유",
                "highlight": "일정 지연 대비 버퍼일",
                "hotel": "산티아고 중심가 숙소 (4박)",
                "desc": "일정 지연 대비 버퍼일"
            },
            {
                "day": 20,
                "date": "11/30",
                "dayOfWeek": "월",
                "type": "광역 이동",
                "origin": "산티아고",
                "destination": "마드리드",
                "distance": "렌페 (3.5h)",
                "highlight": "고속철도 이동 후 마드리드 체크인",
                "hotel": "마드리드 중심가 호텔 (1박)",
                "desc": "초고속열차 Renfe 탑승 ➔ 마드리드 차마르틴 역 도착, 체크인 및 야경 투어"
            },
            {
                "day": 21,
                "date": "12/01",
                "dayOfWeek": "화",
                "type": "도시 관광",
                "origin": "마드리드",
                "destination": "마드리드",
                "distance": "메트로/도보",
                "highlight": "프라도 미술관 및 마요르 광장 전일 관광",
                "hotel": "마드리드 중심가 호텔 (2박)",
                "desc": "프라도 미술관, 솔 광장, 마요르 광장 전일 관광"
            },
            {
                "day": 22,
                "date": "12/02",
                "dayOfWeek": "수",
                "type": "출국",
                "origin": "마드리드 (MAD)",
                "destination": "청두 (TFU) 경유",
                "distance": "항공편",
                "highlight": "08:00 공항 도착 ➔ 11:05 출국 (쓰촨 3U3804)",
                "hotel": "기내 숙박 (Airbus A330)",
                "desc": "마드리드 MAD T1 ➔ 11:05 출국 (3U3804)"
            },
            {
                "day": 23,
                "date": "12/03",
                "dayOfWeek": "목",
                "type": "귀국",
                "origin": "청두 (TFU)",
                "destination": "인천 (ICN)",
                "distance": "항공편",
                "highlight": "청두 3h 환승 ➔ 13:30 인천 도착 (3U3973)",
                "hotel": "스위트 홈 (귀가)",
                "desc": "청두 3h 환승 ➔ 13:30 인천 T1 도착"
            }
        ]
    }
},

  // 💶 환전 및 현지 생활비 예산
  exchangeBudget: {
    totalEur: 1250,
    totalKrw: 1875000, // 환율 1,500원 기준
    exchangeRate: 1500,
    categories: [
      { name: "순례길 & 마드리드 숙박비 (22박)", eur: 520, krw: 780000, desc: "포르투 호텔 1박(€60) + 알베르게 18박(평균 €15~20) + 산티아고 호텔 2박(€80) + 마드리드 호텔 1박(€60)" },
      { name: "식비 및 간식 (24일간)", eur: 530, krw: 795000, desc: "순례자 메뉴(Menú del Peregrino €12~14) + 마드리드 타파스 만찬 + 아침 카페/토스트(€4) + 마트 간식" },
      { name: "교통·렌페고속열차·페리·입장료", eur: 100, krw: 150000, desc: "산티아고➔마드리드 렌페 열차, 포르투 메트로, 카미냐-아구아르다 페리(€2), 대성당·프라도 미술관" },
      { name: "비상 여유금 (동키서비스 등)", eur: 100, krw: 150000, desc: "컨디션 난조 시 동키서비스(1회 €6~8) 및 긴급 약국/교통 여유자금" }
    ],
    tips: [
      "현금은 50유로 이하 소액권(10유로, 20유로) 위주로 환전하는 것이 공립 알베르게 및 작은 바(Bar) 결제에 편리합니다.",
      "대부분의 사립 알베르게와 식당에서는 트래블월렛/트래블로그 카드 결제가 원활합니다.",
      "ATM 인출 수수료가 무료인 대형 은행(Santander 등) ATM 위치를 사전에 확인하세요."
    ]
  },

  // 📋 순례자 실전 패킹 리스트 & 비용 관리 (첨부 영수증 실구매 내역 100% 반영)
  packingList: [
    // [0. 항공권 & 숙박비 - 고정 지출]
    { id: "pack-flight-inbound", item: "출국 항공권 (인천➔상하이➔런던➔포르투 편도 결제완료)", text: "출국 항공권 (인천➔상하이➔런던➔포르투 편도 결제완료)", category: "항공·숙박비", cost: "₩477,357", costKrw: 477357, currency: "KRW", done: true, note: "트립닷컴 결제완료(₩477,357). 11/10 18:25 인천발(MU8604) ➔ 11/11 12:00 포르투 착" },
    { id: "pack-flight-return", item: "귀국 항공권 (12/02 마드리드➔청두➔인천 편도 결제완료)", text: "귀국 항공권 (12/02 마드리드➔청두➔인천 편도 결제완료)", category: "항공·숙박비", cost: "₩406,827", costKrw: 406827, currency: "KRW", done: true, note: "트립닷컴 결제완료(₩406,827). 12/02 11:05 마드리드 MAD(3U3804, A330) ➔ 청두 3h 환승(수하물 자동연결) ➔ 12/03 13:30 인천 착" },
    { id: "pack-stay-porto", item: "포르투 첫날 호텔 1박 (11/11 체크인 & 시차적응)", text: "포르투 첫날 호텔 1박 (11/11 체크인 & 시차적응)", category: "항공·숙박비", cost: "₩90,000", costKrw: 90000, currency: "KRW", done: false, note: "포르투 시내 중심 호텔 (순례길 전야 컨디션 조절)" },
    { id: "pack-stay-albergue", item: "순례길 공립/사립 알베르게 18박 숙박비 (평균 15~20유로)", text: "순례길 공립/사립 알베르게 18박 숙박비 (평균 15~20유로)", category: "항공·숙박비", cost: "₩480,000", costKrw: 480000, currency: "KRW", done: false, note: "18박 x 약 27,000원(€18), 현지 체크인 시 지불" },
    { id: "pack-stay-santiago", item: "산티아고 완보 숙소 2박 (11/29~12/01)", text: "산티아고 완보 숙소 2박 (11/29~12/01)", category: "항공·숙박비", cost: "₩120,000", costKrw: 120000, currency: "KRW", done: false, note: "산티아고 대성당 광장 인근 호스텔/호텔 2박" },
    { id: "pack-stay-madrid", item: "마드리드 호텔 1박 (12/01 체크인 & 피날레 관광)", text: "마드리드 호텔 1박 (12/01 체크인 & 피날레 관광)", category: "항공·숙박비", cost: "₩90,000", costKrw: 90000, currency: "KRW", done: false, note: "마드리드 솔 광장/차마르틴역 인근 호텔 (12/02 공항 이동 편리)" },

    // [1. 현지 생활비 & 환전 경비]
    { id: "pack-living-food", item: "현지 식비 및 마트 장보기 (24일간 환전 예산)", text: "현지 식비 및 마트 장보기 (24일간 환전 예산)", category: "현지경비", cost: "₩795,000", costKrw: 795000, currency: "KRW", done: false, note: "순례자 메뉴(€12~14), 아침 커피/토스트(€4), 마드리드 타파스 만찬, 마트 간식" },
    { id: "pack-living-transport", item: "현지 교통비·렌페고속열차·페리·비상동키", text: "현지 교통비·렌페고속열차·페리·비상동키", category: "현지경비", cost: "₩150,000", costKrw: 150000, currency: "KRW", done: false, note: "산티아고➔마드리드 렌페 열차, 포르투 메트로, 카미냐-아구아르다 페리, 비상 동키" },
    { id: "pack-living-esim", item: "현지 유심 / eSIM 데이터 무제한", text: "현지 유심 / eSIM 데이터 무제한", category: "현지경비", cost: "₩35,000", costKrw: 35000, currency: "KRW", done: true, note: "유럽 통합 30일 데이터 무제한 eSIM" },
    { id: "pack-travel-insurance", item: "해외 여행자 보험 (상해·의료비·휴대품 도난 보상)", text: "해외 여행자 보험 (상해·의료비·휴대품 도난 보상)", category: "필수품 (보험)", cost: "₩45,000", costKrw: 45000, currency: "KRW", done: true, note: "24일 대여정 도보 중 상해·질병 응급치료 및 휴대품 도난 보장" },

    // [2. 배낭 및 필수 장비 - 첨부1 반영]
    { id: "pack-backpack-decathlon", item: "데카트론 퀘차 MH100 아웃도어 등산 백팩 35L", text: "데카트론 퀘차 MH100 아웃도어 등산 백팩 35L", category: "배낭·가방", cost: "₩53,910", costKrw: 53910, currency: "KRW", done: true, note: "데카트론 퀘차 MH100 35L (53,910원 결제 완료, 배송완료). 35L 최적 용량과 체중 분산 허리 벨트로 무릎 보호 및 순례길 최적화 백팩." },
    { id: "pack-sunglasses-decathlon", item: "데카트론 퀘차 MH100 성인 등산 선글라스", text: "데카트론 퀘차 MH100 성인 등산 선글라스", category: "필수품 (장비)", cost: "₩9,900", costKrw: 9900, currency: "KRW", done: true, note: "데카트론 퀘차 MH100 성인 등산 선글라스 (9,900원 결제 완료, 배송완료). 대서양 해안길의 강렬한 자외선 차단 및 눈 피로 방지 필수." },
    { id: "pack-waistbag", item: "힙색 / 크로스백 (여권·지갑·휴대폰 소지용)", text: "힙색 / 크로스백 (여권·지갑·휴대폰 소지용)", category: "배낭·가방", cost: "₩35,000", costKrw: 35000, currency: "KRW", done: true, note: "알베르게나 식당에서도 몸에 항상 소지할 수 있는 가방" },
    { id: "pack-passport", item: "여권 & 순례자 여권(크레덴셜) & 사본", text: "여권 & 순례자 여권(크레덴셜) & 사본", category: "필수품", cost: "₩5,000", costKrw: 5000, currency: "KRW", done: true, note: "알베르게 체크인 및 완보 인증서(콤포스텔라) 발급 필수품" },
    { id: "pack-toiletries", item: "간단한 세면도구 (올인원 비누, 미니 치약·칫솔)", text: "간단한 세면도구 (올인원 비누, 미니 치약·칫솔)", category: "필수품", cost: "₩15,000", costKrw: 15000, currency: "KRW", done: false, note: "현지 약국이나 마트에서도 쉽게 추가 구매 가능" },
    { id: "pack-firstaid", item: "비상 의약품 (소염진통제, 지사제, 소독약, 콤피드 물집 패치)", text: "비상 의약품 (소염진통제, 지사제, 소독약, 콤피드 물집 패치)", category: "필수품", cost: "₩30,000", costKrw: 30000, currency: "KRW", done: false, note: "물집 발생 시 바늘 실 대신 콤피드 패치 즉시 부착 추천" },
    { id: "pack-towel", item: "손수건 / 스포츠 타월 (땀 닦기, 목 햇빛 차단, 다용도)", text: "손수건 / 스포츠 타월 (땀 닦기, 목 햇빛 차단, 다용도)", category: "필수품", cost: "₩8,000", costKrw: 8000, currency: "KRW", done: true, note: "배낭 외부에 걸어두면 빠른 속건 가능" },

    // [3. 의류 및 우천/방한 - 첨부2 반영]
    { id: "pack-poncho-sanro", item: "산로 [UNISEX] 판초 우의 레인코트 FREE", text: "산로 [UNISEX] 판초 우의 레인코트 FREE", category: "의류 (우천)", cost: "₩17,140", costKrw: 17140, currency: "KRW", done: true, note: "산로 [UNISEX] 판초 우의 레인코트 (17,140원 결제 완료, 10/07 도착 예정 배송중). 배낭을 멘 채로 덮어쓸 수 있는 판초형 우의로 갈리시아 우천 완벽 대비." },
    { id: "pack-down-jacket-ntbc", item: "엔티비씨 2Way 후드 경량 패딩 점퍼 (스카이블루·XL)", text: "엔티비씨 2Way 후드 경량 패딩 점퍼 (스카이블루·XL)", category: "의류 (보온)", cost: "₩29,900", costKrw: 29900, currency: "KRW", done: true, note: "엔티비씨 2Way 후드 경량 패딩 점퍼 스카이블루 XL (29,900원 결제 완료, 출고준비중). 11월 스페인 갈리시아 아침/저녁 기온 급강하 및 기내 보온용." },
    { id: "pack-hiking-pants-sanro", item: "산로 [UNISEX] 와이드 스트링 하이킹팬츠 XL", text: "산로 [UNISEX] 와이드 스트링 하이킹팬츠 XL", category: "의류", cost: "₩36,700", costKrw: 36700, currency: "KRW", done: true, note: "산로 [UNISEX] 와이드 스트링 하이킹팬츠 XL (36,700원 결제 완료, 10/07 도착 예정 배송중). 편안한 와이드핏과 밑단 스트링 조절로 장시간 쾌적한 트레킹." },
    { id: "pack-tshirts", item: "기능성 속건 반팔 티 (2~3벌)", text: "기능성 속건 반팔 티 (2~3벌)", category: "의류", cost: "₩60,000", costKrw: 60000, currency: "KRW", done: true, note: "매일 저녁 손빨래 후 아침에 바로 마르는 속건성 소재" },
    { id: "pack-windbreaker", item: "기능성 바람막이 (방풍/발수 기능성)", text: "기능성 바람막이 (방풍/발수 기능성)", category: "의류", cost: "₩120,000", costKrw: 120000, currency: "KRW", done: true, note: "아침 바닷바람과 비포장 산길의 변덕스러운 날씨 대비" },
    { id: "pack-hat", item: "눈에 띄는 색상의 모자 (햇빛 차단 & 도로 시인성)", text: "눈에 띄는 색상의 모자 (햇빛 차단 & 도로 시인성)", category: "의류", cost: "₩25,000", costKrw: 25000, currency: "KRW", done: true, note: "시야 확보 및 안전을 위해 밝은 색상 모자 권장" },
    { id: "pack-sandals", item: "기능성 트레킹 샌들 (도보 및 숙소 공용)", text: "기능성 트레킹 샌들 (도보 및 숙소 공용)", category: "신발", cost: "₩110,000", costKrw: 110000, currency: "KRW", done: true, note: "무게를 대폭 줄이고 발 통기성 극대화, 별도 슬리퍼 불필요" },
    { id: "pack-joint-guard", item: "발목/무릎 보호대 (내리막 자갈길 관절 보호)", text: "발목/무릎 보호대 (내리막 자갈길 관절 보호)", category: "장비", cost: "₩35,000", costKrw: 35000, currency: "KRW", done: false, note: "연속 20km 도보 시 관절 충격을 흡수해 부상 방지" },
    { id: "pack-trekking-poles", item: "트레킹 스틱 1쌍 (하중 분산 및 추진력 확보)", text: "트레킹 스틱 1쌍 (하중 분산 및 추진력 확보)", category: "장비", cost: "₩65,000", costKrw: 65000, currency: "KRW", done: false, note: "무릎 하중을 25% 이상 줄여주어 장기 도보 시 필수 권장" }
  ],

  // 24일 전체 여정
  itinerary: [
    {
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
    },
    {
        "day": 3,
        "date": "11/13",
        "dayOfWeek": "금",
        "type": "해안길",
        "origin": "마토지뉴스 (메트로 이동)",
        "destination": "빌라 두 콘드 / 포보아",
        "distance": "14km",
        "highlight": "바닷바람 맞으며 걷는 나무 데크 해안길 시작",
        "hotel": "Albergue de Santa Clara / 포보아 숙소",
        "desc": "메트로로 마토지뉴스 이동 후 대서양 해안 목재 데크길을 따라 걷는 상쾌한 첫 도보"
    },
    {
        "day": 4,
        "date": "11/14",
        "dayOfWeek": "토",
        "type": "환승 연결로",
        "origin": "포보아 드 바르징",
        "destination": "바르셀루스 (Barcelos)",
        "distance": "15km",
        "highlight": "해안에서 내륙으로 전환, 포르투갈 닭 전설의 고향",
        "hotel": "Albergue Cidade de Barcelos",
        "desc": "대서양 해안길에서 내륙 중앙길로 전환하는 연결로. 포르투갈의 상징인 수탉 전설의 유서 깊은 중세 도시 도착"
    },
    {
        "day": 5,
        "date": "11/15",
        "dayOfWeek": "일",
        "type": "중앙길",
        "origin": "바르셀루스",
        "destination": "발루게스 (Balugães)",
        "distance": "15km",
        "highlight": "호젓한 시골 전원 풍경과 포도밭 숲길",
        "hotel": "Casa da Fernanda / Albergue Balugães",
        "desc": "한적한 시골 오솔길과 비뇨 베르데(그린 와인) 포도밭 사이를 통과하는 평화로운 전원 순례길"
    },
    {
        "day": 6,
        "date": "11/16",
        "dayOfWeek": "월",
        "type": "중앙길",
        "origin": "발루게스",
        "destination": "폰테 드 리마",
        "distance": "17km",
        "highlight": "가장 오래된 중세 다리 마을 입성, 그린 와인",
        "hotel": "Albergue de Peregrinos de Ponte de Lima",
        "desc": "포르투갈에서 가장 오래된 역사적인 중세 석조 다리와 리마 강변 정취, 특산 그린 와인 만찬"
    },
    {
        "day": 7,
        "date": "11/17",
        "dayOfWeek": "화",
        "type": "중앙길",
        "origin": "폰테 드 리마",
        "destination": "루비앙이스 (Rubiães)",
        "distance": "18km",
        "highlight": "포르투갈 길의 상징 '라브루자(Labruja) 고개' 완주",
        "hotel": "Albergue de Rubiães",
        "desc": "포르투갈 길 최대의 난코스이자 벅찬 파노라마를 선사하는 라브루자 고개(해발 400m) 정복"
    },
    {
        "day": 8,
        "date": "11/18",
        "dayOfWeek": "수",
        "type": "국경 통과",
        "origin": "루비앙이스",
        "destination": "발렌사 ➔ 투이 (Tui)",
        "distance": "15km",
        "highlight": "국경 철교 도보 월경(포르투갈 ➔ 스페인, 시차 +1h)",
        "hotel": "Albergue Santo Domingo / Ideas Peregrinas",
        "desc": "발렌사 고성을 지나 미뇨강 국제 철교를 걸어서 건너 스페인 갈리시아 투이로 입국 (시차 1시간 빨라짐)"
    },
    {
        "day": 9,
        "date": "11/19",
        "dayOfWeek": "목",
        "type": "중앙길",
        "origin": "투이",
        "destination": "오 포리뇨 (O Porriño)",
        "distance": "16km",
        "highlight": "갈리시아 주정부 10유로 공립 알베르게 첫 이용",
        "hotel": "Albergue de Peregrinos de O Porriño (공립)",
        "desc": "투이 대성당 조망 후 루로 강변 자연 산책로를 따라 오 포리뇨 진입, 갈리시아 공립 알베르게 숙박"
    },
    {
        "day": 10,
        "date": "11/20",
        "dayOfWeek": "금",
        "type": "중앙길",
        "origin": "오 포리뇨",
        "destination": "레돈델라 (Redondela)",
        "distance": "15km",
        "highlight": "리아스 해안 만 조망, 해안길 합류 지점",
        "hotel": "Albergue Casa da Torre (공립)",
        "desc": "해안길과 중앙길이 하나로 만나는 역사적인 분기점. 리아스 해안의 멋진 바다와 철교 감상"
    },
    {
        "day": 11,
        "date": "11/21",
        "dayOfWeek": "토",
        "type": "중앙길",
        "origin": "레돈델라",
        "destination": "폰테베드라 (Pontevedra)",
        "distance": "18km",
        "highlight": "가리비 모양 성당(Peregrina), 중세 구시가지",
        "hotel": "Bulezen Urban Hostel / Virxe da Peregrina",
        "desc": "폰테삼파이오 고대 석교를 건너 보행자의 천국 폰테베드라 구시가지와 가리비 순례자 성당 탐방"
    },
    {
        "day": 12,
        "date": "11/22",
        "dayOfWeek": "일",
        "type": "영성길 1",
        "origin": "폰테베드라",
        "destination": "아르멘테이라",
        "distance": "17km",
        "highlight": "영성길 진입, 콤바드로 곡물창고 마을 통과",
        "hotel": "Albergue de Armenteira (수도원 인근)",
        "desc": "★ 영성길(Variante Espiritual) 진입! 갈리시아 전통 곡물창고(오레오)가 늘어선 해변 콤바드로 경유 후 수도원 마을 도착"
    },
    {
        "day": 13,
        "date": "11/23",
        "dayOfWeek": "월",
        "type": "영성길 2",
        "origin": "아르멘테이라",
        "destination": "빌라노바 드 아로우사",
        "distance": "23km",
        "highlight": "완만한 내리막 '돌과 물의 길' 트레킹",
        "hotel": "Albergue de Peregrinos de Vilanova de Arousa",
        "desc": "물레방아와 폭포가 어우러진 갈리시아 최고의 숲길 '돌과 물의 길(Ruta da Pedra e da Auga)' 힐링 트레킹"
    },
    {
        "day": 14,
        "date": "11/24",
        "dayOfWeek": "화",
        "type": "영성길 3",
        "origin": "빌라노바 드 아로우사",
        "destination": "파드론 (Padrón)",
        "distance": "보트 + 3km",
        "highlight": "보트 순례길(Traslatio) 탑승, 파드론 고추 요리",
        "hotel": "Albergue de Padrón (공립) / Albergue Rossol",
        "desc": "★ 성 야고보의 유해 운구 보트 순례(Traslatio) 탑승! 강변 십자가들을 지나 파드론 기착, 명물 꽈리고추 튀김 만찬"
    },
    {
        "day": 15,
        "date": "11/25",
        "dayOfWeek": "수",
        "type": "중앙길",
        "origin": "파드론",
        "destination": "테오 / 오 밀라도이로",
        "distance": "15km",
        "highlight": "완주 전야, 고요한 참나무 숲길",
        "hotel": "Albergue Milladoiro / Teo 숙소",
        "desc": "대성당을 하루 앞둔 설레는 순례길. 고요한 갈리시아 참나무 숲길을 걸으며 마음 정리"
    },
    {
        "day": 16,
        "date": "11/26",
        "dayOfWeek": "목",
        "type": "완주 입성",
        "origin": "오 밀라도이로",
        "destination": "산티아고 데 콤포스텔라",
        "distance": "10km",
        "highlight": "산티아고 대성당 입성, 완주증 발급, 정오 미사",
        "hotel": "산티아고 중심가 숙소 (1박)",
        "desc": "★ 마침내 오브라도이로 광장 대성당 입성! 성 야고보 포옹, 콤포스텔라 완보증 수령, 12시 순례자 향로 미사 참례"
    },
    {
        "day": 17,
        "date": "11/27",
        "dayOfWeek": "금",
        "type": "투어",
        "origin": "산티아고",
        "destination": "피스테라 & 무시아",
        "distance": "버스 투어",
        "highlight": "세상의 끝(0.00km) 등대 및 대서양 바다 투어",
        "hotel": "산티아고 중심가 숙소 (2박)",
        "desc": "고대인들이 믿었던 세상의 끝 피스테라 0.00km 비석과 무시아 성모 바위 절벽 일일 투어"
    },
    {
        "day": 18,
        "date": "11/28",
        "dayOfWeek": "토",
        "type": "휴식",
        "origin": "산티아고",
        "destination": "산티아고",
        "distance": "시내 도보",
        "highlight": "아바스토스 시장 해산물 식사 및 기념품 쇼핑",
        "hotel": "산티아고 중심가 숙소 (3박)",
        "desc": "산티아고 아바스토스 재래시장에서 신선한 갈리시아 뽈뽀와 해산물 만찬, 가족/지인 기념품 쇼핑"
    },
    {
        "day": 19,
        "date": "11/29",
        "dayOfWeek": "일",
        "type": "예비일",
        "origin": "산티아고",
        "destination": "산티아고",
        "distance": "자유",
        "highlight": "일정 지연 대비 버퍼일 (차질 없을 시 휴식)",
        "hotel": "산티아고 중심가 숙소 (4박)",
        "desc": "도보 일정 지연을 대비한 완벽한 버퍼 데이. 정상 완주 시 산티아고 구시가지 카페 힐링"
    },
    {
        "day": 20,
        "date": "11/30",
        "dayOfWeek": "월",
        "type": "광역 이동",
        "origin": "산티아고",
        "destination": "마드리드 (Chamartín)",
        "distance": "렌페 (3.5h)",
        "highlight": "고속열차로 마드리드 이동 후 체크인, 야경 투어",
        "hotel": "마드리드 중심가 호텔 (1박)",
        "desc": "산티아고 역에서 Renfe 초고속열차 탑승(약 3시간 20분) ➔ 마드리드 차마르틴 역 도착, 호텔 체크인 & 솔 광장 야경"
    },
    {
        "day": 21,
        "date": "12/01",
        "dayOfWeek": "화",
        "type": "도시 관광",
        "origin": "마드리드",
        "destination": "마드리드",
        "distance": "메트로/도보",
        "highlight": "프라도 미술관, 솔 광장, 츄러스 맛집 전일 관광",
        "hotel": "마드리드 중심가 호텔 (2박)",
        "desc": "세계 3대 미술관 프라도 미술관 관람, 산 히네스 원조 츄러스, 마요르 광장 및 왕궁 전일 관광"
    },
    {
        "day": 22,
        "date": "12/02",
        "dayOfWeek": "수",
        "type": "출국",
        "origin": "마드리드 (MAD)",
        "destination": "청두 (TFU) 경유",
        "distance": "항공편",
        "highlight": "08:00 공항 도착 ➔ 11:05 출국 (쓰촨 3U3804)",
        "hotel": "기내 숙박 (Airbus A330)",
        "desc": "아돌포 수아레스 바라하스 T1 이동. 11:05 쓰촨항공 3U3804(A330 대형기) 탑승 귀국길 비행"
    },
    {
        "day": 23,
        "date": "12/03",
        "dayOfWeek": "목",
        "type": "귀국",
        "origin": "청두 (TFU)",
        "destination": "인천 (ICN)",
        "distance": "항공편",
        "highlight": "청두 3h 환승 ➔ 13:30 인천 도착 (3U3973)",
        "hotel": "스위트 홈 (귀가)",
        "desc": "청두 톈푸 T1 3시간 환승 (수하물 자동 연결) ➔ 13:30 인천공항 T1 도착! 대단원의 순례길 완주"
    }
]
};


const INITIAL_SNS_DATA = {
  snsDataVersion: 3,
  channels: [
    {
      id: "linkedin",
      name: "LinkedIn (링크드인)",
      handle: "김남현 (Namhyeon Kim)",
      url: "https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-4a62b5340/",
      icon: "fa-brands fa-linkedin",
      themeColor: "blue",
      badgeClass: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      btnClass: "bg-blue-600 hover:bg-blue-700 text-white",
      category: "삼성전자 · 커리어 & 전문가 네트워킹",
      followers: 100,
      targetFollowers: 500,
      postsCount: 15,
      weeklyGoal: "주 1회 커리어·안전/에너지·청년정책 인사이트 발행",
      engagementRate: "5.4%",
      monthlyViews: 1200,
      positioning: "삼성전자(인사·보안·안전 TF / MZ자문단) · 산업공학 & 사회복지 · 화성시 청년정책협의체 분과장",
      hashtags: "#삼성전자 #안전문화 #에너지관리기사 #위험물기능장 #산업안전기사 #청년정책",
      memo: "링크드인은 외부 자동 조회가 차단되어 상단 [지표 직접 수정] 버튼으로 실제 1촌/팔로워 수를 바로 입력·관리할 수 있습니다."
    },
    {
      id: "instagram",
      name: "Instagram (인스타그램)",
      handle: "@namhyeon_kim_",
      url: "https://www.instagram.com/namhyeon_kim_/",
      icon: "fa-brands fa-instagram",
      themeColor: "pink",
      badgeClass: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      btnClass: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white",
      category: "라이프스타일 · 팔로잉 301명",
      followers: 300,
      following: 301,
      targetFollowers: 500,
      postsCount: 180,
      weeklyGoal: "주 2회 피드/릴스 (밴드 합주, 산티아고 순례길, 일상 기록)",
      engagementRate: "6.8%",
      monthlyViews: 2800,
      positioning: "실제 프로필 연동 완료 (팔로워 300명 · 팔로잉 301명 · 게시물 180개) | 음악(보컬·신디사이저) & 순례길 아카이빙",
      hashtags: "#밴드합주 #보컬 #신디사이저 #산티아고순례길 #일상기록 #자기계발 #음악스타그램",
      memo: "실제 인스타그램 라이브 지표(팔로워 300명, 팔로잉 301명, 게시물 180개) 검증 반영 완료"
    },
    {
      id: "brunch",
      name: "Brunch Story (아론의 브런치)",
      handle: "@musimtook (작가명: 아론)",
      url: "https://brunch.co.kr/@musimtook",
      icon: "fa-solid fa-feather-pointed",
      themeColor: "emerald",
      badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      btnClass: "bg-emerald-600 hover:bg-emerald-700 text-white",
      category: "아론 작가 멤버십 · 작품 18 · 독서노트 76",
      followers: 225,
      targetFollowers: 500,
      postsCount: 744,
      magazineCount: 18,
      readingNotesCount: 76,
      weeklyGoal: "글쓰듯 말하고 싶습니다. 당신의 마음에 닿기를 바라며 연재",
      engagementRate: "9.2%",
      monthlyViews: 4500,
      positioning: "실제 브런치 라이브 연동 완료 (구독자 225명 · 발행 글 744편 · 브런치북 18개 · 독서노트 76편)",
      hashtags: "#아론의브런치 #브런치작가멤버십 #에세이스트 #독서노트 #산티아고순례길",
      memo: "삼성전자 학생·회사원·에세이스트 '아론' | 국회국방위원장상 & 화성시 산문 장려상 수상 작가 아카이브"
    }
  ],
  posts: [
    {
      id: "sns-post-1",
      platform: "brunch",
      title: "[아론의 브런치] 744편의 에세이와 76편의 독서노트 연재 아카이브",
      status: "published",
      date: "2026-09-28",
      url: "https://brunch.co.kr/@musimtook",
      views: 1450,
      likes: 68,
      notes: "구독자 225명 · 작품 18개 · 독서노트 76편 · 아론 작가 멤버십 활발 운영 중"
    },
    {
      id: "sns-post-2",
      platform: "instagram",
      title: "[@namhyeon_kim_] 180번째 피드 기록 & 11월 산티아고 순례길 출발 릴스 기획",
      status: "writing",
      date: "2026-11-07",
      url: "https://www.instagram.com/namhyeon_kim_/",
      views: 310,
      likes: 45,
      notes: "팔로워 300명 / 팔로잉 301명 네트워크 기반 보컬·신디사이저 합주 영상 및 순례길 하이라이트 공유"
    },
    {
      id: "sns-post-3",
      platform: "linkedin",
      title: "화기애애 기후탐사대 성과 발표회 & 에너지관리기사 실기 도전 회고",
      status: "idea",
      date: "2026-10-31",
      url: "https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-4a62b5340/",
      views: 0,
      likes: 0,
      notes: "삼성전자 안전/인사/보안 TF 경험 및 5대 기술자격 취득 노하우와 연계한 전문가 브랜딩"
    }
  ],
  strategyMemo: "3대 채널 원소스 멀티유즈(OSMU) 운영 전략:\n1) 브런치스토리 (@musimtook · 구독자 225명 / 글 744편 / 독서노트 76편): 실패의 기록과 나만의 사색 에세이 연재\n2) 인스타그램 (@namhyeon_kim_ · 팔로워 300명 / 게시물 180개): 밴드 합주(보컬·신디사이저), 11월 산티아고 순례길 사진 & 숏폼 릴스\n3) 링크드인 (김남현): 삼성전자 TF 경험, 안전·에너지 기술자격, 화성시 청년정책협의체 분과장 인사이트 공유"
};

const INITIAL_PORTFOLIO_DATA = {
  portfolioDataVersion: 2,
  awards: [
    {
      id: "award-2026-1",
      year: "2026",
      period: "2026.08",
      title: "제2회 화성시 양성평등 공모전 산문 부문 장려상 수상",
      issuer: "화성시여성가족청소년재단이사장 표창",
      category: "대외·공공·문학",
      badge: "재단이사장 표창",
      highlight: true,
      description: "양성평등 문화 확산 및 일상 속 성찰을 담은 산문 부문 우수작 선정"
    },
    {
      id: "award-2026-2",
      year: "2026",
      period: "2026.03",
      title: "제5기 화성시 청년정책협의체 위원 선정 (동탄 교육·참여·권리 분과장 역임)",
      issuer: "화성시장 위촉",
      category: "대외·공공·문학",
      badge: "화성시장 위촉 · 분과장",
      highlight: true,
      description: "화성시 동탄권역 청년 교육·참여·권리 증진 정책 발굴 및 3분과장 리더십 수행"
    },
    {
      id: "award-2025-1",
      year: "2025",
      period: "2025.12",
      title: "장애인과 함께하는 문해(문예) 글짓기 대회 대상 수상 (국회 국방위원장상)",
      issuer: "국회 국방위원장 표창",
      category: "대외·공공·문학",
      badge: "대상 · 국회 국방위원장상",
      highlight: true,
      description: "전국 규모 문예 글짓기 대회 최고 영예 대상(국회 국방위원장 표창) 수상"
    },
    {
      id: "award-2024-1",
      year: "2024",
      period: "2024.01",
      title: "방송통신대학교 총장 표창 우수상 수상",
      issuer: "방송통신대학교총장 표창",
      category: "대외·공공·문학",
      badge: "총장 표창 · 우수상",
      highlight: true,
      description: "산업공학과 재학 중 탁월한 학업 성취 및 대학교 대외 기여 공로 표창"
    },
    {
      id: "award-2023-2",
      year: "2023",
      period: "2023.07",
      title: "세이프 인플루언서(Safe Influencer) 우수 활동자 즉시상",
      issuer: "안전그룹장 표창",
      category: "안전·환경",
      badge: "안전그룹장 표창",
      highlight: false,
      description: "삼성전자 사내 안전문화 확산 및 현장 자율 안전 캠페인 우수 활동"
    },
    {
      id: "award-2023-1",
      year: "2023",
      period: "2023.02",
      title: "2023 FOUNDRY DIFFUSION 기술팀 DS경진대회 최다 아이디어부문 우수",
      issuer: "DIFFUSION기술팀장 표창",
      category: "기술·생산성·혁신",
      badge: "최다 아이디어 우수",
      highlight: true,
      description: "파운드리 디퓨전 기술팀 DS경진대회 기술 혁신 아이디어 최다 발굴 및 채택"
    },
    {
      id: "award-2022-3",
      year: "2022",
      period: "2022.12",
      title: "세이프 인플루언서 최우수 활동자 즉시상",
      issuer: "안전그룹장 표창",
      category: "안전·환경",
      badge: "최우수 활동자 표창",
      highlight: true,
      description: "2022년 사내 안전문화 개편 TF 세이프 인플루언서 최우수 기여자 선정"
    },
    {
      id: "award-2022-2",
      year: "2022",
      period: "2022.03 ~ 05",
      title: "모두의 인사 TF 승격분과 본과정 경진대회 우수 표창",
      issuer: "인사기획그룹 표창",
      category: "인사·교육·조직문화",
      badge: "인사기획그룹 우수 표창",
      highlight: true,
      description: "삼성전자 인사제도 개편 TF 승격분과 본과정 경진대회 기획안 우수 표창"
    },
    {
      id: "award-2022-1",
      year: "2022",
      period: "2022.02",
      title: "2월 업무 불합리 발굴 우수상",
      issuer: "DIFFUSION기술팀장 표창",
      category: "기술·생산성·혁신",
      badge: "기술팀장 표창",
      highlight: false,
      description: "현장 공정 및 업무 프로세스 불합리 요소 선제적 발굴·개선"
    },
    {
      id: "award-2021-5",
      year: "2021",
      period: "2021.10",
      title: "위험발굴 우수발굴 즉시상",
      issuer: "기술환경안전팀장 표창",
      category: "안전·환경",
      badge: "기술환경안전팀장 표창",
      highlight: false,
      description: "사업장 잠재 위험요인 발굴 및 중대재해 예방 활동 우수 기여"
    },
    {
      id: "award-2021-4",
      year: "2021",
      period: "2021.10",
      title: "기본지키기 서포터즈 6기 우수 활동자 수상",
      issuer: "안전그룹장 표창",
      category: "안전·환경",
      badge: "안전그룹장 표창",
      highlight: false,
      description: "현장 안전 기본수칙 준수 문화 정착 서포터즈 6기 핵심 활동"
    },
    {
      id: "award-2021-3",
      year: "2021",
      period: "2021.09",
      title: "21년 하반기 혁신적으로 일하기 공모전 우수상",
      issuer: "D기술팀장 표창",
      category: "기술·생산성·혁신",
      badge: "공모전 우수상",
      highlight: false,
      description: "스마트 워크 및 엔지니어링 업무 효율화 혁신 아이디어 우수상"
    },
    {
      id: "award-2021-2",
      year: "2021",
      period: "2021.07",
      title: "D기술팀 우수사원 즉시상",
      issuer: "D기술팀장 표창",
      category: "인사·교육·조직문화",
      badge: "우수사원 표창",
      highlight: true,
      description: "기술팀 내 모범적 직무 수행 및 조직 시너지 창출 우수사원 표창"
    },
    {
      id: "award-2021-1",
      year: "2021",
      period: "2021.02",
      title: "제조기술센터 설비엔지니어 공정회 우수 기안 시상",
      issuer: "제조센터장 표창",
      category: "기술·생산성·혁신",
      badge: "제조센터장 표창",
      highlight: true,
      description: "설비엔지니어 공정 개선 기안 우수작 선정 및 센터장 표창"
    },
    {
      id: "award-2020-6",
      year: "2020",
      period: "2020.10",
      title: "인재개발그룹 즉시상",
      issuer: "인재개발그룹장 표창",
      category: "인사·교육·조직문화",
      badge: "인재개발그룹장 표창",
      highlight: false,
      description: "사내 직무 교육 및 후배 엔지니어 역량 개발 기여 표창"
    },
    {
      id: "award-2020-5",
      year: "2020",
      period: "2020.07",
      title: "D기술팀 생산성 향상 공모전 즉시상 시상",
      issuer: "D기술팀장 표창",
      category: "기술·생산성·혁신",
      badge: "D기술팀장 표창",
      highlight: false,
      description: "설비 가동률 및 공정 생산성 향상 아이디어 공모전 입상"
    },
    {
      id: "award-2020-4",
      year: "2020",
      period: "2020.06",
      title: "제조 시너지 P/J 협업 IDEA & 우수성과 공모전 (시너지 협업 IDEA 부문 최다발굴 시상)",
      issuer: "제조 시너지 PROJECT장 표창",
      category: "기술·생산성·혁신",
      badge: "최다발굴 표창",
      highlight: true,
      description: "부서 간 제조 시너지 창출 협업 아이디어 최다 발굴 기록 달성"
    },
    {
      id: "award-2020-3",
      year: "2020",
      period: "2020.06 ~ 2021.01",
      title: "기본지키기 서포터즈 1기 ~ 4기 연속 4회 시상",
      issuer: "안전그룹장 표창",
      category: "안전·환경",
      badge: "4기 연속 표창",
      highlight: true,
      description: "1기부터 4기까지 전 기수 연속 우수 서포터즈 4회 연속 표창 달성"
    },
    {
      id: "award-2020-2",
      year: "2020",
      period: "2020.04",
      title: "환경안전공모전 (아이디어 부문) 은상",
      issuer: "환경안전팀장 표창",
      category: "안전·환경",
      badge: "공모전 은상",
      highlight: false,
      description: "사내 환경안전 개선 아이디어 공모전 은상 수상"
    },
    {
      id: "award-2020-1",
      year: "2020",
      period: "2020.02 ~ 2021.01",
      title: "D기술팀 DigNoel 상 4회 시상 추천 및 본인 시상",
      issuer: "D기술팀장 표창",
      category: "인사·교육·조직문화",
      badge: "4회 연속 수상",
      highlight: false,
      description: "동료 칭찬·격려 및 협업 문화 확산 DigNoel 상 4회 연속 추천·수상"
    },
    {
      id: "award-2018-1",
      year: "2018",
      period: "2018.07",
      title: "D기술팀 (Hidden Worker) 부문 즉시상 시상",
      issuer: "D기술팀장 표창",
      category: "인사·교육·조직문화",
      badge: "Hidden Worker상",
      highlight: false,
      description: "보이지 않는 곳에서 묵묵히 현장 난제를 해결한 히든워커 표창"
    },
    {
      id: "award-2016-1",
      year: "2016",
      period: "2016.01",
      title: "D기술팀 환경안전 부문 즉시상 시상",
      issuer: "D기술팀장 표창",
      category: "안전·환경",
      badge: "D기술팀장 표창",
      highlight: false,
      description: "현장 환경안전 리스크 예방 및 안전 수칙 준수 솔선수범 표창"
    },
    {
      id: "award-2014-1",
      year: "2014",
      period: "2014.11",
      title: "슈퍼루키 프로젝트 성과 발표회 우수 시상",
      issuer: "제조센터장 표창",
      category: "기술·생산성·혁신",
      badge: "제조센터장 표창",
      highlight: true,
      description: "신입 엔지니어 슈퍼루키 프로젝트 혁신 과제 발표 우수상(제조센터장 표창)"
    }
  ],
  careers: [
    {
      id: "career-brunch",
      year: "상시",
      startYear: "상시",
      period: "연재 중",
      title: "브런치스토리 플랫폼 작가명 '아론(@musimtook)' 연재 및 멤버십 운영",
      role: "브런치 정식 작가 (아론)",
      category: "작가·대외·학술",
      status: "ongoing",
      impact: "에세이 및 칼럼 741편 발행 · 매거진/작품 18집 · 독서노트 75편 · 구독자 223명 보유 ('아론 작가 멤버십' 운영)",
      description: "에세이 및 칼럼 741편 발행 · 매거진/작품 18집 · 독서노트 75편 · 구독자 223명 보유 ('아론 작가 멤버십' 운영)"
    },
    {
      id: "career-2023-7",
      year: "2023",
      startYear: "2023",
      period: "2023.11",
      title: "SSIT 삼성전자 사내대학(공과대학) 전임교수 추천",
      role: "삼성전자 SSIT 전임교수 후보 추천",
      category: "전문선임·교육·교수",
      status: "completed",
      impact: "반도체 설비·안전·직무 전문성 및 강의 역량을 인정받아 삼성전자 사내대학(SSIT) 전임교수 추천",
      description: "반도체 설비·안전·직무 전문성 및 강의 역량을 인정받아 삼성전자 사내대학(SSIT) 전임교수 추천"
    },
    {
      id: "career-2023-6",
      year: "2023",
      startYear: "2023",
      period: "2023 연중",
      title: "사내 위험물 기능장 대비반 직접 운영 ➔ 팀 내 기능장 7명 배출",
      role: "위험물 기능장 대비반 강사·멘토",
      category: "전문선임·교육·교수",
      status: "completed",
      impact: "본인의 위험물기능장 취득 노하우를 바탕으로 사내 대비반을 직접 운영하여 팀 내 국가기술자격 최상위 등급인 '기능장' 7명 합격 배출",
      description: "본인의 위험물기능장 취득 노하우를 바탕으로 사내 대비반을 직접 운영하여 팀 내 국가기술자격 최상위 등급인 '기능장' 7명 합격 배출"
    },
    {
      id: "career-2023-5",
      year: "2023",
      startYear: "2023",
      period: "2023.07 ~ 현재",
      title: "기흥/화성 파운드리사업부 위험물 관리자 선임",
      role: "삼성전자 파운드리사업부 위험물 안전관리자",
      category: "전문선임·교육·교수",
      status: "ongoing",
      impact: "기흥·화성 캠퍼스 파운드리사업부 위험물 취급·안전관리 법정/전문 관리자 선임 수행",
      description: "기흥·화성 캠퍼스 파운드리사업부 위험물 취급·안전관리 법정/전문 관리자 선임 수행"
    },
    {
      id: "career-2023-4",
      year: "2023",
      startYear: "2023",
      period: "2023.09",
      title: "세이프 인플루언서(Safe Influencer) TF 3기 활동 및 9월 우수 활동자 수상",
      role: "삼성전자 안전문화 TF 3기 위원",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "1기~3기 연속 사내 안전문화 혁신 TF 참여 및 9월 우수 활동자 선정",
      description: "1기~3기 연속 사내 안전문화 혁신 TF 참여 및 9월 우수 활동자 선정"
    },
    {
      id: "career-2023-3",
      year: "2023",
      startYear: "2023",
      period: "2023.07",
      title: "방송통신대학교 [생산운영관리] 정규 교과목 방송 학생출연자 참여",
      role: "한국방송통신대학교 산업공학과 대표 학생출연자",
      category: "작가·대외·학술",
      status: "completed",
      impact: "산업공학과 전공 정규 강의 [생산운영관리] 과목 제작 참여 및 방송 출연",
      description: "산업공학과 전공 정규 강의 [생산운영관리] 과목 제작 참여 및 방송 출연"
    },
    {
      id: "career-2023-2",
      year: "2023",
      startYear: "2023",
      period: "2023.05",
      title: "세이프 인플루언서 TF 2기 활동 및 우수활동자 시상",
      role: "삼성전자 안전문화 TF 2기 위원",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "현장 밀착형 안전 캠페인 기획 및 안전문화 전파 우수활동자 수상",
      description: "현장 밀착형 안전 캠페인 기획 및 안전문화 전파 우수활동자 수상"
    },
    {
      id: "career-2023-1",
      year: "2023",
      startYear: "2023",
      period: "2023 연중",
      title: "THE NANUM 100 CLUB 선정 (사내외 사회공헌 100시간 달성)",
      role: "삼성전자 나눔클럽 아너스 멤버",
      category: "사회공헌·봉사",
      status: "completed",
      impact: "연간 누적 봉사활동 100시간 이상 달성 임직원에게 수여되는 THE NANUM 100 CLUB 재선정",
      description: "연간 누적 봉사활동 100시간 이상 달성 임직원에게 수여되는 THE NANUM 100 CLUB 재선정"
    },
    {
      id: "career-2022-6",
      year: "2022",
      startYear: "2022",
      period: "2022.06 ~ 2023.06",
      title: "삼성전자 경영진 제언 사내 MZ 자문단 위원 활동",
      role: "사내 MZ 자문위원 (1년 역임)",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "경영진 직속 제언 기구인 MZ 자문단 위원으로 활동하며 조직문화 및 일하는 방식 혁신 제안",
      description: "경영진 직속 제언 기구인 MZ 자문단 위원으로 활동하며 조직문화 및 일하는 방식 혁신 제안"
    },
    {
      id: "career-2022-5",
      year: "2022",
      startYear: "2022",
      period: "2022.12",
      title: "THE NANUM 50 CLUB 선정 (옷캔, 플로깅 등 사내 봉사 50시간 수행)",
      role: "삼성전자 사회공헌 우수 봉사자",
      category: "사회공헌·봉사",
      status: "completed",
      impact: "해외 의류 기부(옷캔), 환경 정화 플로깅 등 연간 봉사활동 50시간 이상 완수",
      description: "해외 의류 기부(옷캔), 환경 정화 플로깅 등 연간 봉사활동 50시간 이상 완수"
    },
    {
      id: "career-2022-4",
      year: "2022",
      startYear: "2022",
      period: "2022.09 ~ 11",
      title: "세이프 인플루언서(Safe Influencer) TF 1기 활동",
      role: "삼성전자 안전문화 개편 TF 1기",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "사내 안전문화 개편 원년 멤버로 참여하여 최우수 활동자 표창 수상",
      description: "사내 안전문화 개편 원년 멤버로 참여하여 최우수 활동자 표창 수상"
    },
    {
      id: "career-2022-3",
      year: "2022",
      startYear: "2022",
      period: "2022.08",
      title: "위드시큐리티(With Security) TF 사내 IT분과 참여",
      role: "보안 개편 TF IT분과 실무위원",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "삼성전자 사내 정보보안 의식 제고 및 IT 보안 프로세스 개선 TF 활동",
      description: "삼성전자 사내 정보보안 의식 제고 및 IT 보안 프로세스 개선 TF 활동"
    },
    {
      id: "career-2022-2",
      year: "2022",
      startYear: "2022",
      period: "2022.03 ~ 05",
      title: "인사제도 개편 관련 '모두의 인사 TF' 승격분과 참여",
      role: "모두의 인사 TF 승격분과 위원",
      category: "사내 핵심 TF",
      status: "completed",
      impact: "삼성전자 미래 인사·승격 제도 개편 TF에 참여하여 본과정 경진대회 표창 수상",
      description: "삼성전자 미래 인사·승격 제도 개편 TF에 참여하여 본과정 경진대회 표창 수상"
    },
    {
      id: "career-2022-1",
      year: "2022",
      startYear: "2022",
      period: "2022 연중",
      title: "삼성전자 사내 지도후배 양성 멘토링",
      role: "기술팀 지도선배 멘토",
      category: "전문선임·교육·교수",
      status: "completed",
      impact: "신입 및 후배 엔지니어 직무 역량 강화와 조직 적응을 돕는 전담 멘토링 수행",
      description: "신입 및 후배 엔지니어 직무 역량 강화와 조직 적응을 돕는 전담 멘토링 수행"
    },
    {
      id: "career-2021-1",
      year: "2021",
      startYear: "2021",
      period: "2021.12",
      title: "THE NANUM 100 CLUB 선정 (점자 도서·해외 의류·편의시설 지도 제작 100시간+)",
      role: "삼성전자 우수 봉사자 (100시간+)",
      category: "사회공헌·봉사",
      status: "completed",
      impact: "시각장애인 점자 도서 제작, 해외 의류 지원, 장애인 편의시설 점검 지도 제작 등 연간 100시간 이상 봉사 참여",
      description: "시각장애인 점자 도서 제작, 해외 의류 지원, 장애인 편의시설 점검 지도 제작 등 연간 100시간 이상 봉사 참여"
    }
  ]
};

const INITIAL_EXAM_SCHEDULES = [
  {
    id: "exam-1",
    title: "에너지관리기사 실기 시험",
    category: "자격증",
    startDate: "2026-11-07T09:00",
    endDate: "2026-11-07T12:00",
    ddayTarget: "2026-11-07T09:00",
    location: "지정 수험장 (큐넷 안내)",
    description: "2026년 정기 기사 실기시험. 목표: 필답형 고득점 합격!",
    priority: "urgent", // urgent, high, normal
    isCompleted: false,
    checklist: [
      { text: "계산 공식 치트시트 암기 완료", done: false },
      { text: "최근 7개년 기출문제 3회독", done: false },
      { text: "공학용 계산기(규정 모델) 점검", done: false },
      { text: "신분증 및 수험표 준비", done: false }
    ]
  },
  {
    id: "exam-2",
    title: "중간 과제물 제출 기간",
    category: "학사과제",
    startDate: "2026-10-03T00:00",
    endDate: "2026-10-12T23:59",
    ddayTarget: "2026-10-12T23:59",
    location: "학사정보시스템 과제제출방",
    description: "과목별 중간과제물 작성 및 마감 전 최종 제출",
    priority: "high",
    isCompleted: false,
    checklist: [
      { text: "과제 주제별 레포트 초안 작성", done: false },
      { text: "참고문헌 및 인용 표기 검토", done: false },
      { text: "표절률(카피킬러) 검사 및 파일 제출", done: false }
    ]
  },
  {
    id: "exam-3",
    title: "평생교육사 중복 과목 신청",
    category: "학사신청",
    startDate: "2026-10-05T09:00",
    endDate: "2026-10-16T18:00",
    ddayTarget: "2026-10-16T18:00",
    location: "평생교육진흥원 / 학과 사무실",
    description: "평생교육사 자격증 관련 중복 인정 과목 신청 및 확인",
    priority: "normal",
    isCompleted: false,
    checklist: [
      { text: "기이수 과목 성적증명서 확인", done: false },
      { text: "중복 인정 신청서 제출", done: false }
    ]
  },
  {
    id: "exam-4",
    title: "계절 수업 신청 일정 확인",
    category: "학사신청",
    startDate: "2026-10-16T09:00",
    endDate: "2026-10-17T18:00",
    ddayTarget: "2026-10-16T09:00",
    location: "학사공지 / 수강신청 시스템",
    description: "동계 계절학기 개설 과목 확인 및 수강신청 일정 점검",
    priority: "normal",
    isCompleted: false,
    checklist: [
      { text: "계절학기 개설 과목 리스트 확인", done: false },
      { text: "수강 계획 수립 및 장바구니 담기", done: false }
    ]
  },
  {
    id: "exam-5",
    title: "화기애애 기후탐사대 성과 발표회",
    category: "활동/발표",
    startDate: "2026-10-31T14:00",
    endDate: "2026-10-31T18:00",
    ddayTarget: "2026-10-31T14:00",
    location: "성과발표회장 / 온오프라인 하이브리드",
    description: "기후탐사대 프로젝트 최종 탐사 결과 및 액션플랜 성과 발표",
    priority: "high",
    isCompleted: false,
    checklist: [
      { text: "발표 PPT 슬라이드 완성 및 리허설", done: false },
      { text: "탐사 데이터 및 시각화 인포그래픽 점검", done: false },
      { text: "팀원별 발표 파트 배분 및 Q&A 대비", done: false }
    ]
  },
  {
    id: "exam-6",
    title: "기말고사 시험 신청일",
    category: "학사신청",
    startDate: "2026-11-10T09:00",
    endDate: "2026-11-10T18:00",
    ddayTarget: "2026-11-10T09:00",
    location: "학사정보시스템",
    description: "기말고사 시험 일시 및 고사장 선택 신청 (선착순 고사장 주의)",
    priority: "high",
    isCompleted: false,
    checklist: [
      { text: "시험 가능 시간대 및 고사장 미리 파악", done: false },
      { text: "오전 9시 정각 접속하여 신청 완료", done: false }
    ]
  },
  {
    id: "exam-7",
    title: "기말과제물 제출 기간",
    category: "학사과제",
    startDate: "2026-11-20T00:00",
    endDate: "2026-11-30T23:59",
    ddayTarget: "2026-11-30T23:59",
    location: "학사정보시스템 과제제출방",
    description: "학기말 최종 평가 대체 과제물 작성 및 마감 전 제출",
    priority: "urgent",
    isCompleted: false,
    checklist: [
      { text: "과제 주제 가이드라인 최종 확인", done: false },
      { text: "최종 보고서 작성 및 파일 검토", done: false },
      { text: "제출 후 접수증 확인", done: false }
    ]
  },
  {
    id: "exam-8",
    title: "기말고사 시험기간",
    category: "학사시험",
    startDate: "2026-12-04T09:00",
    endDate: "2026-12-13T18:00",
    ddayTarget: "2026-12-04T09:00",
    location: "지정 오프라인/온라인 고사장",
    description: "2학기 최종 기말고사 시험 응시. 유종의 미 거두기!",
    priority: "urgent",
    isCompleted: false,
    checklist: [
      { text: "과목별 핵심 요약노트 복습", done: false },
      { text: "과년도 기출 및 워크북 문제 풀이", done: false },
      { text: "시험 당일 고사장 확인 및 응시", done: false }
    ]
  }
];

// 2. 문화생활 & 밴드 합주 일정
// 2. 문화생활 & 밴드 합주 일정
const INITIAL_BAND_SCHEDULES = [
  {
    id: "band-1",
    type: "rehearsal",
    myRole: "보컬 & 신디사이저", // rehearsal (합주) or performance (공연 관람)
    title: "정기 밴드 합주 (10월 2차 - 호랑이 합주실)",
    date: "2026-10-10T16:00",
    location: "홍대 호랑이 합주실",
    status: "scheduled",
    setlist: [
      { song: "제제로감 (廻廻奇譚 / Eve)", key: "C# Minor / E Major", tempo: "185 BPM", notes: "★ 오늘 합주 메인 집중 곡 - 보컬 호흡·음역대 컨트롤 & 신디사이저 아르페지오/신스패드 리프 질주감 싱크" },
      { song: "한 페이지가 될 수 있게 (DAY6)", key: "D Major", tempo: "165 BPM", notes: "신디사이저 스트링 보이싱 및 보컬 샤우팅 브릿지 싱크" },
      { song: "스물다섯, 스물하나 (자우림)", key: "G Major", tempo: "92 BPM", notes: "피아노/신디 감성적 터치 & 보컬 서정적 다이내믹스 조절" },
      { song: "Hype Boy (Band Ver.)", key: "E Major", tempo: "120 BPM", notes: "신디사이저 펑키한 멜로디 톤 메이킹 & 보컬 하모니 점검" }
    ],
    memos: "홍대 호랑이 합주실 15분 전 도착하여 신디사이저 음색(패치) 세팅 및 보컬 마이크 음량 테스트 완료하기. 메인 합주곡 '제제로감' (보컬 & 신디사이저 동시 연주) 템포 185 BPM 메트로놈 체크 및 영상 촬영 준비."
  },
  {
    id: "band-2",
    type: "performance",
    title: "가을 인디 락 페스티벌 관람",
    date: "2026-10-24T15:00",
    location: "난지 한강공원 특설무대",
    status: "scheduled",
    setlist: [],
    memos: "모바일 티켓 신분증 지참, 돗자리 및 보조배터리 챙기기. 헤드라이너 무대 사수!"
  },
  {
    id: "band-3",
    type: "rehearsal",
    title: "연말 정기공연 대비 합주 (11월 2차)",
    date: "2026-11-14T15:00",
    location: "합정 스테이지 합주실 1호점",
    status: "scheduled",
    setlist: [
      { song: "Don't Look Back In Anger (Oasis)", key: "C Major", tempo: "84 BPM", notes: "엔딩 합창 코러스 파트 화음 점검" },
      { song: "신곡 합주 1차 스케치", key: "A Minor", tempo: "130 BPM", notes: "인스트루멘탈 구간 아이디어 회의" }
    ],
    memos: "에너지관리기사 시험 끝난 직후 첫 합주! 홀가분하게 즐기기."
  }
];

// 3-B. 에너지관리기사 실기 D-40 일자별 학습 플래너 (2026-09-28 ~ 2026-11-07)
// =========================================================================
// Energy Practical Real Files Manifest & 41-Day Master Curriculum Data
// (Based on C:\Users\user\Desktop\에너지관리기사\에너지관리기사 실기\실기)
// =========================================================================
const ENERGY_FOLDER_MANIFEST = [
  {
    "name": "식만 정리",
    "files": 21,
    "type": "formula",
    "desc": "핵심 공식 요약 및 증명 (열정산/연소/전열/통풍/펌프)"
  },
  {
    "name": "연습문제 (기출이 대부분인)",
    "files": 256,
    "type": "practice",
    "desc": "단원별 핵심 연습문제 및 기출 변형 훈련 (전 단원 망라)"
  },
  {
    "name": "10년",
    "files": 21,
    "type": "exam",
    "desc": "2010년 과년도 기출문제 (기초 열역학/연소/열정산)"
  },
  {
    "name": "11년",
    "files": 19,
    "type": "exam",
    "desc": "2011년 과년도 기출문제 (상당증발량/BHP/통풍력)"
  },
  {
    "name": "12년",
    "files": 20,
    "type": "exam",
    "desc": "2012년 과년도 기출문제 (보일러 효율/배기가스 손실)"
  },
  {
    "name": "13년",
    "files": 19,
    "type": "exam",
    "desc": "2013년 과년도 기출문제 (열교환기 LMTD/전열면적)"
  },
  {
    "name": "14년",
    "files": 22,
    "type": "exam",
    "desc": "2014년 과년도 기출문제 (배관 마찰손실/펌프 축동력)"
  },
  {
    "name": "15년",
    "files": 18,
    "type": "exam",
    "desc": "2015년 과년도 기출문제 (보일러 자동제어/급수처리)"
  },
  {
    "name": "16년",
    "files": 17,
    "type": "exam",
    "desc": "2016년 과년도 기출문제 (절탄기/공기예열기/과열기)"
  },
  {
    "name": "17년",
    "files": 18,
    "type": "exam",
    "desc": "2017년 과년도 기출문제 (보온재 두께/표면 방열량)"
  },
  {
    "name": "18년",
    "files": 19,
    "type": "exam",
    "desc": "2018년 과년도 기출문제 (수처리 약품/블로우다운율)"
  },
  {
    "name": "19년",
    "files": 20,
    "type": "exam",
    "desc": "2019년 과년도 기출문제 (에너지합리화법/안전밸브 용량)"
  },
  {
    "name": "20년",
    "files": 28,
    "type": "exam",
    "desc": "2020년 실기 기출문제 (필답형 전면 개편 1~3회)"
  },
  {
    "name": "21년",
    "files": 28,
    "type": "exam",
    "desc": "2021년 실기 기출문제 (복합 계산형 최신 유형)"
  },
  {
    "name": "22년",
    "files": 31,
    "type": "exam",
    "desc": "2022년 실기 기출문제 (빈출 서술형 및 실무 단답)"
  },
  {
    "name": "23년",
    "files": 45,
    "type": "exam",
    "desc": "2023년 실기 기출문제 (출판사 A 최신 기출 전회차)"
  },
  {
    "name": "23년 (출판사 변경)",
    "files": 26,
    "type": "exam",
    "desc": "2023년 실기 기출문제 (출판사 B 교차 검증 해설)"
  },
  {
    "name": "24년",
    "files": 55,
    "type": "exam",
    "desc": "2024년 실기 기출문제 (출판사 A 최신 기출 55장)"
  },
  {
    "name": "24년 (출판사 변경)",
    "files": 29,
    "type": "exam",
    "desc": "2024년 실기 기출문제 (출판사 B 교차 검증 해설)"
  },
  {
    "name": "25년 (출판사 변경)",
    "files": 29,
    "type": "exam",
    "desc": "2025년 최신 실기 기출문제 (출판사 B 최신판 29장)"
  }
];

const INITIAL_ENERGY_STUDY_PLAN = [
    {
        "id":  "ep-1",
        "dayNum":  1,
        "date":  "2026-09-29",
        "dday":  "D-39",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "12년",
        "volume":  "2012년 1~3회 (20장)",
        "topic":  "[1사이클 2012년] 2012년 기출풀이 \u0026 보일러 효율·공기비 계산",
        "task":  "2012년 과년도 기출 1~3회 정밀 풀이. 보일러 열효율(정압시험법/입출열법), 공기비(m), 실제공기량 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-2",
        "dayNum":  2,
        "date":  "2026-09-30",
        "dday":  "D-38",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "13년",
        "volume":  "2013년 1~3회 (19장)",
        "topic":  "[1사이클 2013년] 2013년 기출풀이 \u0026 열교환기 LMTD·전열면적 계산",
        "task":  "2013년 과년도 기출 1~3회 정밀 풀이. 향류/병류 대수평균온도차(LMTD), 열통과율(K), 전열면적(A) 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-3",
        "dayNum":  3,
        "date":  "2026-10-01",
        "dday":  "D-37",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "14년",
        "volume":  "2014년 1~3회 (22장)",
        "topic":  "[1사이클 2014년] 2014년 기출풀이 \u0026 관마찰 손실수두·펌프 동력 계산",
        "task":  "2014년 과년도 기출 1~3회 정밀 풀이. 달시-바이스바하 관마찰 손실, 펌프 수동력/축동력/모터동력 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-4",
        "dayNum":  4,
        "date":  "2026-10-02",
        "dday":  "D-36",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2012~2014년 (3개년)",
        "topic":  "[1사이클 오답노트 1] 12~14년 3개년 오답노트 정리 \u0026 열효율·LMTD·펌프동력 마스터",
        "task":  "2012~2014년 3개년 기출 오답노트 정리. 보일러 효율, 대수평균온도차, 펌프 축동력 공식 3종 세트 백지 유도 및 완전 정복.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-5",
        "dayNum":  5,
        "date":  "2026-10-03",
        "dday":  "D-35",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "15년",
        "volume":  "2015년 1~3회 (18장)",
        "topic":  "[1사이클 2015년] 2015년 기출풀이 \u0026 보일러 자동제어·수처리 블로우다운율",
        "task":  "2015년 과년도 기출 1~3회 정밀 풀이. 피드백/피드포워드/2요소/3요소 급수제어, 블로우다운율 및 급수 보존법 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-6",
        "dayNum":  6,
        "date":  "2026-10-04",
        "dday":  "D-34",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "16년",
        "volume":  "2016년 1~3회 (17장)",
        "topic":  "[1사이클 2016년] 2016년 기출풀이 \u0026 절탄기·공기예열기 열회수율 계산",
        "task":  "2016년 과년도 기출 1~3회 정밀 풀이. 절탄기 급수 상승온도, 공기예열기 공기 예열온도 및 보일러 효율 향상폭 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-7",
        "dayNum":  7,
        "date":  "2026-10-05",
        "dday":  "D-33",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "17년",
        "volume":  "2017년 1~3회 (18장)",
        "topic":  "[1사이클 2017년] 2017년 기출풀이 \u0026 보온재 경제적 두께·표면 방열손실",
        "task":  "2017년 과년도 기출 1~3회 정밀 풀이. 원통 배관 보온재 외경 전열저항, 평판 표면 방열 손실열량, 경제적 보온 두께 계산.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-8",
        "dayNum":  8,
        "date":  "2026-10-06",
        "dday":  "D-32",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2015~2017년 (3개년)",
        "topic":  "[1사이클 오답노트 2] 15~17년 3개년 오답노트 정리 \u0026 자동제어·보온단열·열회수 마스터",
        "task":  "2015~2017년 3개년 기출 오답노트 정리. 3요소 급수제어 블록선도, 원통 보온재 열전도 저항식, 절탄기 연료절감율 공식 완전 정복.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-9",
        "dayNum":  9,
        "date":  "2026-10-07",
        "dday":  "D-31",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "18년",
        "volume":  "2018년 1~3회 (19장)",
        "topic":  "[1사이클 2018년] 2018년 기출풀이 \u0026 급수 수처리 화학 반응식·탈산소제 계산",
        "task":  "2018년 과년도 기출 1~3회 정밀 풀이. 하이드라진(N2H4) 및 아황산나트륨(Na2SO3) 산소 제거 반응식, 인산나트륨 연화 반응 계산.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-10",
        "dayNum":  10,
        "date":  "2026-10-08",
        "dday":  "D-30",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "19년",
        "volume":  "2019년 1~3회 (20장)",
        "topic":  "[1사이클 2019년] 2019년 기출풀이 \u0026 안전밸브 분출용량·증기 어큐뮬레이터",
        "task":  "2019년 과년도 기출 1~3회 정밀 풀이. 보일러 최고사용압력별 안전밸브 분출용량, 양정, 분출면적 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-11",
        "dayNum":  11,
        "date":  "2026-10-09",
        "dday":  "D-29",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "20년",
        "volume":  "2020년 1~3회 (28장)",
        "topic":  "[1사이클 2020년] 2020년 기출풀이 \u0026 필답형 전면개편 복합 열정산",
        "task":  "2020년 실기 기출 1~3회 정밀 풀이 (필답형 단독 전면 개편 회차). 배기가스 현열/잠열 분리 열정산 계산 집중.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-12",
        "dayNum":  12,
        "date":  "2026-10-10",
        "dday":  "D-28",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2018~2020년 (3개년)",
        "topic":  "[1사이클 오답노트 3] 18~20년 3개년 오답노트 정리 \u0026 복합 열정산·안전밸브 마스터",
        "task":  "2018~2020년 3개년 기출 오답노트 정리. 개편 1~3회 복합 열정산표 및 안전밸브, 수처리 반응식 완전 총정리.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-13",
        "dayNum":  13,
        "date":  "2026-10-11",
        "dday":  "D-27",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "21년",
        "volume":  "2021년 1~3회 (28장)",
        "topic":  "[1사이클 2021년] 2021년 기출풀이 \u0026 신출 복합 계산형·상당증발량",
        "task":  "2021년 실기 기출 1~3회 정밀 풀이. 복합 계산형(연소+열정산+통풍) 신유형 문제 집중 분석 및 풀이.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-14",
        "dayNum":  14,
        "date":  "2026-10-12",
        "dday":  "D-26",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "22년",
        "volume":  "2022년 1~3회 (31장)",
        "topic":  "[1사이클 2022년] 2022년 기출풀이 \u0026 빈출 서술형 키워드·실무 전열 계산",
        "task":  "2022년 실기 기출 1~3회 정밀 풀이. 복합 전열(대류+복사 병렬 전달) 및 배관 신축이음 보정 계산.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-15",
        "dayNum":  15,
        "date":  "2026-10-13",
        "dday":  "D-25",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "23년",
        "volume":  "2023년 1~3회 (45+26장)",
        "topic":  "[1사이클 2023년] 2023년 기출풀이 \u0026 최신 출판사 교차검증·통풍력 계산",
        "task":  "2023년 실기 기출 1~3회 정밀 풀이. 출판사 A/B 교차검증 해설 분석 및 굴뚝 이론통풍력·압력강하 집중 풀이.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-16",
        "dayNum":  16,
        "date":  "2026-10-14",
        "dday":  "D-24",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2021~2023년 (3개년)",
        "topic":  "[1사이클 오답노트 4] 21~23년 3개년 오답노트 정리 \u0026 최신 복합기출·통풍상사 마스터",
        "task":  "2021~2023년 3개년 기출 오답노트 정리. 최신 3개년 신출 복합 계산문제 및 송풍기 상사법칙 공식 집중 마스터.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-17",
        "dayNum":  17,
        "date":  "2026-10-15",
        "dday":  "D-23",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "24년",
        "volume":  "2024년 최신 기출 1~3회 (55장)",
        "topic":  "[1사이클 2024년] 2024년 기출풀이 \u0026 최신 출제경향 분석·복합 열정산 완벽 풀이",
        "task":  "2024년 최신 기출 1~3회 전회차(55장) 정밀 풀이. 최신 출제경향 파악 및 복합 신유형 계산문제 완벽 분석.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-18",
        "dayNum":  18,
        "date":  "2026-10-16",
        "dday":  "D-22",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "25년 (출판사 변경)",
        "volume":  "2025년 최신판 전회차 (29장)",
        "topic":  "[1사이클 2025년] 2025년 최신 기출풀이 \u0026 신경향 킬러 계산문제 정밀 격파",
        "task":  "2025년 최신 기출 전회차(출판사 B 최신판 29장) 풀이. 최신 법령 개정 사항 및 신출 킬러 계산문제 정밀 풀이.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-19",
        "dayNum":  19,
        "date":  "2026-10-17",
        "dday":  "D-21",
        "phase":  1,
        "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2024~2025년 (최신 2개년) \u0026 14개년 총정리",
        "topic":  "[1사이클 오답노트 5] 24~25년 최신 2개년 오답노트 \u0026 14개년 계산 공식 총정리 마스터",
        "task":  "2024~2025년 최신 2개년 오답노트 완벽 정리. 14개년(12~25년) 전 범위 핵심 계산 공식 총정리 바이블 완성.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-20",
        "dayNum":  20,
        "date":  "2026-10-18",
        "dday":  "D-20",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "12년",
        "volume":  "2012년 1~3회 (20장)",
        "topic":  "[2사이클 12년] 2012년 계산문제 스피드런 - 보일러 효율·공기비 15분 타임어택",
        "task":  "[2회독 스피드런] 2012년 계산문제만 골라 풀기. 보일러 효율 및 공기비 공식 유도 시간 단축(목표 15분 내 완벽 풀이).",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-21",
        "dayNum":  21,
        "date":  "2026-10-19",
        "dday":  "D-19",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "13년",
        "volume":  "2013년 1~3회 (19장)",
        "topic":  "[2사이클 13년] 2013년 계산문제 스피드런 - LMTD·전열면적 역산 마스터",
        "task":  "[2회독 스피드런] 2013년 열교환기 계산문제 집중 스피드런. 열통과율 및 필요 전열면적 역산 공식 마스터.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-22",
        "dayNum":  22,
        "date":  "2026-10-20",
        "dday":  "D-18",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "14년",
        "volume":  "2014년 1~3회 (22장)",
        "topic":  "[2사이클 14년] 2014년 계산문제 스피드런 - 배관 마찰손실수두 \u0026 펌프동력",
        "task":  "[2회독 스피드런] 2014년 배관 및 펌프 계산문제 집중 타임어택. 유속-마찰손실-소요동력 원스톱 풀이.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-23",
        "dayNum":  23,
        "date":  "2026-10-21",
        "dday":  "D-17",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2012~2014년 (3개년)",
        "topic":  "[2사이클 오답클리닉 1] 12~14년 3개년 취약 계산문제 핀포인트 오답 클리닉",
        "task":  "12~14년 기출 중 1회독 오답 문제 및 킬러 계산문제만 집중 재풀이. 공식 유도 과정 백지 작성.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-24",
        "dayNum":  24,
        "date":  "2026-10-22",
        "dday":  "D-16",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "15년",
        "volume":  "2015~2016년 (35장)",
        "topic":  "[2사이클 15~16년] 15~16년 계산문제 스피드런 - 수처리 블로우다운율·폐열회수율 고속 계산",
        "task":  "[2회독 스피드런] 15~16년 기출 계산문제 집중 풀이. 블로우다운 열회수율 및 절탄기 연료절감 계산 마스터.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-25",
        "dayNum":  25,
        "date":  "2026-10-23",
        "dday":  "D-15",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "17년",
        "volume":  "2017~2018년 (37장)",
        "topic":  "[2사이클 17~18년] 17~18년 계산문제 스피드런 - 보온재 두께 \u0026 수처리 약품 농도 계산",
        "task":  "[2회독 스피드런] 17~18년 기출 계산문제 집중 타임어택. 다층 보온재 열저항 계산 및 탈산소제 투입량 계산.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-26",
        "dayNum":  26,
        "date":  "2026-10-24",
        "dday":  "D-14",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "19년",
        "volume":  "2019~2020년 (48장)",
        "topic":  "[2사이클 19~20년] 19~20년 계산문제 스피드런 - 안전밸브 양정 \u0026 복합 열정산표 신속 작성",
        "task":  "[2회독 스피드런] 19~20년 기출 계산문제 집중 풀이. 안전밸브 호칭경 및 개편 필답형 복합 열정산표 20분 컷 작성.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-27",
        "dayNum":  27,
        "date":  "2026-10-25",
        "dday":  "D-13",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2015~2020년 (6개년)",
        "topic":  "[2사이클 오답클리닉 2] 15~20년 중반부 킬러 계산 오답 클리닉 \u0026 열정산 실수 제로화",
        "task":  "15~20년 6개년 기출 계산 오답 핀포인트 클리닉. 복합 열정산표 및 다층 보온 전열 계산 실수 제로화 달성.",
        "isReview":  true,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-28",
        "dayNum":  28,
        "date":  "2026-10-26",
        "dday":  "D-12",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "21년",
        "volume":  "2021년 1~3회 (28장)",
        "topic":  "[2사이클 21년] 2021년 계산문제 스피드런 - 상당증발량 \u0026 연소 이론공기량 복합 계산",
        "task":  "[2회독 스피드런] 2021년 복합 계산 신유형 타임어택. 연료 성분분석치로부터 공기비, 이론배기가스량, 증발량 연속 풀이.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-29",
        "dayNum":  29,
        "date":  "2026-10-27",
        "dday":  "D-11",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "22년",
        "volume":  "2022년 1~3회 (31장)",
        "topic":  "[2사이클 22년] 2022년 계산문제 스피드런 - 복합전열·배관 열팽창 신축량 계산",
        "task":  "[2회독 스피드런] 2022년 기출 계산문제 집중 타임어택. 대류+복사 병렬 전열계산 및 배관 신축이음 선정.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-30",
        "dayNum":  30,
        "date":  "2026-10-28",
        "dday":  "D-10",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "23년",
        "volume":  "2023년 1~3회 (45+26장)",
        "topic":  "[2사이클 23년] 2023년 계산문제 스피드런 - 송풍기 상사법칙 및 통풍력 고난도 계산",
        "task":  "[2회독 스피드런] 2023년 기출 계산문제 집중 타임어택. 가변속 송풍기 인버터 절감전력 및 굴뚝 압력손실 계산.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-31",
        "dayNum":  31,
        "date":  "2026-10-29",
        "dday":  "D-9",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "24년",
        "volume":  "2024년 최신 기출 1~3회 (55장)",
        "topic":  "[2사이클 24년] 2024년 계산문제 스피드런 - 최신 복합 열정산표 20분 내 무오차 완성",
        "task":  "[2회독 스피드런] 2024년 최신 기출 전회차 복합 계산문제 타임어택. 20분 내 100% 무오차 작성 완성.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-32",
        "dayNum":  32,
        "date":  "2026-10-30",
        "dday":  "D-8",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "25년 (출판사 변경)",
        "volume":  "2025년 최신판 전회차 (29장)",
        "topic":  "[2사이클 25년] 2025년 계산문제 스피드런 - 최신 킬러 계산문제 변형 유형 완벽 공략",
        "task":  "[2회독 스피드런] 2025년 최신 기출 전회차 계산 킬러 타임어택. 신경향 변형 문제까지 완벽 대비.",
        "isReview":  false,
        "isFinalWeek":  false,
        "done":  false
    },
    {
        "id":  "ep-33",
        "dayNum":  33,
        "date":  "2026-10-31",
        "dday":  "D-7",
        "phase":  2,
        "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "2021~2025년 (최신 5개년)",
        "topic":  "[2사이클 오답클리닉 3] 21~25년 최신 5개년 신출 계산 오답 총괄 클리닉 \u0026 합격선(60점) 돌파 점검",
        "task":  "21~25년 최신 5개년 신출 계산문제 전원 재검증. 2사이클 누적 오답 100% 해소 및 합격선(60점) 완벽 돌파 확인.",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-34",
        "dayNum":  34,
        "date":  "2026-11-01",
        "dday":  "D-6",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "21년",
        "volume":  "2021~2022년 실전 모의 (59장)",
        "topic":  "[3사이클 D-6 실전 모의고사 1회] 2021~2022년 기출 기반 실전 100분 모의고사 \u0026 계산문제 전수 검산",
        "task":  "[실전 모의 1회] 2021~2022년 기출 중 14문제를 선별하여 실전 시험 시간(100분) 타이머 설정 후 풀이. 계산문제 전수 검산.",
        "isReview":  false,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-35",
        "dayNum":  35,
        "date":  "2026-11-02",
        "dday":  "D-5",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "23년",
        "volume":  "2023~2024년 실전 모의 (74장)",
        "topic":  "[3사이클 D-5 실전 모의고사 2회] 2023~2024년 기출 기반 실전 100분 모의고사 \u0026 서술형 키워드 최종 점검",
        "task":  "[실전 모의 2회] 2023~2024년 최신 기출 14문제 실전 모의고사. 최신 출제 트렌드 키워드 적중 훈련.",
        "isReview":  false,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-36",
        "dayNum":  36,
        "date":  "2026-11-03",
        "dday":  "D-4",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "공식정리",
        "volume":  "연소·보일러 효율·열정산 12대 공식",
        "topic":  "[3사이클 D-4 킬러 계산 25선 파트 1] 연소공학·보일러 효율·열정산 12대 핵심 공식 백지 암기 테스트",
        "task":  "연소공학 및 보일러 열정산 파트 12대 킬러 계산 공식 A4 백지 인출 테스트. 공식, 기호 정의, 단위 완벽 암기.",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-37",
        "dayNum":  37,
        "date":  "2026-11-04",
        "dday":  "D-3",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "공식정리",
        "volume":  "전열·열교환기·통풍·펌프 13대 공식",
        "topic":  "[3사이클 D-3 킬러 계산 25선 파트 2] 전열·열교환기·통풍·펌프동력 13대 핵심 공식 백지 암기 테스트",
        "task":  "전열공학, 열교환기, 통풍력, 펌프동력 파트 13대 킬러 계산 공식 백지 인출 테스트. 계산문제 완벽 마스터 선언!",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-38",
        "dayNum":  38,
        "date":  "2026-11-05",
        "dday":  "D-2",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "1~2사이클 누적 오답노트 전권",
        "topic":  "[3사이클 D-2 오답노트 최종 회독] 1~2사이클에서 누적된 나만의 오답노트 전 항목 1회독 정독",
        "task":  "1~2사이클 동안 누적된 나만의 오답노트 전 항목(계산+서술형) 총정독. 실수 포인트 100% 머릿속 각인.",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-39",
        "dayNum":  39,
        "date":  "2026-11-06",
        "dday":  "D-1",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "시험장 지참 파이널 요약집",
        "topic":  "[3사이클 D-1 전 범위 마인드컨트롤] 공학용 계산기 리셋 및 사용법 점검, 신분증·수험표 준비, 14개년 빈출 공식 최종 눈도장",
        "task":  "시험 전날 완벽 준비: 공학용 계산기 기종 리셋 확인, 수험표·신분증·필기구 챙기기. 25대 킬러 공식 눈도장 및 가벼운 휴식.",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    },
    {
        "id":  "ep-40",
        "dayNum":  40,
        "date":  "2026-11-07",
        "dday":  "D-Day",
        "phase":  3,
        "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
        "folder":  "오답노트 \u0026 요약",
        "volume":  "실기 시험 당일 실전",
        "topic":  "[★ D-Day 시험 당일] 에너지관리기사 실기 시험 (09:00)! 계산문제 전원 정답 \u0026 영광의 최종 합격!",
        "task":  "[★ 2026년 제3회 에너지관리기사 실기 시험 본시험] 08:30 입실 완료, 09:00 시험 개시. 14개년 기출 3사이클 완벽 마스터의 결실!",
        "isReview":  true,
        "isFinalWeek":  true,
        "done":  false
    }
];

const ENERGY_DAILY_BRIEFINGS = {
    "2026-09-29":  {
                       "dayNum":  1,
                       "date":  "2026-09-29",
                       "dday":  "D-39",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "12년",
                       "volume":  "2012년 1~3회 (20장)",
                       "topic":  "[1사이클 2012년] 2012년 기출풀이 \u0026 보일러 효율·공기비 계산",
                       "goal":  "2012년 과년도 기출 1~3회 정밀 풀이. 보일러 열효율(정압시험법/입출열법), 공기비(m), 실제공기량 계산 집중.",
                       "keyFormula":  "\\eta = \\frac{G_a (h_2 - h_1)}{G_f \\cdot H_l} \\times 100 \\; [\\%], \\quad m = \\frac{21}{21 - O_2}",
                       "keyConcepts":  [
                                           "1. 보일러 효율 공식 분모는 연료 투입 열량(Gf · Hl), 분자는 발생 증기 흡열량(Ga(h2 - h1))",
                                           "2. 배기가스 산소 농도(O2)를 통한 공기비 산출식 m = 21 / (21 - O2)의 유도 및 단위 확인",
                                           "3. 저위발열량(Hl) 기준 효율 산출과 고위발열량(Hh) 기준 환산 차이점 숙지"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 증기 엔탈피 h2와 급수 엔탈피 h1의 단위(kcal/kg vs kJ/kg)를 연료 발열량 단위와 반드시 통일할 것!",
                       "quiz":  {
                                    "q":  "연료 소비량 400 kg/h, 저위발열량 10,000 kcal/kg, 실제증발량 4,500 kg/h, 발생증기 엔탈피 650 kcal/kg, 급수 엔탈피 50 kcal/kg일 때 보일러 효율은?",
                                    "a":  "67.5%",
                                    "sol":  "η = (4500 × (650 - 50)) / (400 × 10000) × 100 = (4500 × 600) / 4,000,000 × 100 = 67.5%"
                                }
                   },
    "2026-09-30":  {
                       "dayNum":  2,
                       "date":  "2026-09-30",
                       "dday":  "D-38",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "13년",
                       "volume":  "2013년 1~3회 (19장)",
                       "topic":  "[1사이클 2013년] 2013년 기출풀이 \u0026 열교환기 LMTD·전열면적 계산",
                       "goal":  "2013년 과년도 기출 1~3회 정밀 풀이. 향류/병류 대수평균온도차(LMTD), 열통과율(K), 전열면적(A) 계산 집중.",
                       "keyFormula":  "\\Delta T_m = \\frac{\\Delta t_1 - \\Delta t_2}{\\ln(\\Delta t_1 / \\Delta t_2)}, \\quad Q = K \\cdot A \\cdot \\Delta T_m \\implies A = \\frac{Q}{K \\cdot \\Delta T_m}",
                       "keyConcepts":  [
                                           "1. 향류형 열교환기는 병류형보다 대수평균온도차(LMTD)가 커서 전열면적을 최소화할 수 있음",
                                           "2. Δt1, Δt2는 유입/유출 양단의 온도차이며 큰 쪽에서 작은 쪽을 뺄 때 자연로그 분모분자 순서 일치",
                                           "3. 열통과율 K의 역수는 열전도저항, 대류열전달저항의 총합과 같음"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: Δt1과 Δt2가 같을 때는 분모 ln(1)=0이 되므로 산술평균(Δt1)을 적용해야 함!",
                       "quiz":  {
                                    "q":  "향류 열교환기에서 온수 입출구 80℃➔50℃, 냉수 입출구 20℃➔40℃일 때 대수평균온도차(LMTD)는?",
                                    "a":  "34.76℃",
                                    "sol":  "Δt1 = 80 - 40 = 40℃, Δt2 = 50 - 20 = 30℃. ΔTm = (40 - 30) / ln(40 / 30) = 10 / 0.2877 = 34.76℃"
                                }
                   },
    "2026-10-01":  {
                       "dayNum":  3,
                       "date":  "2026-10-01",
                       "dday":  "D-37",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "14년",
                       "volume":  "2014년 1~3회 (22장)",
                       "topic":  "[1사이클 2014년] 2014년 기출풀이 \u0026 관마찰 손실수두·펌프 동력 계산",
                       "goal":  "2014년 과년도 기출 1~3회 정밀 풀이. 달시-바이스바하 관마찰 손실, 펌프 수동력/축동력/모터동력 계산 집중.",
                       "keyFormula":  "h_L = f \\frac{L}{D} \\frac{v^2}{2g}, \\quad P_m = \\frac{\\gamma \\cdot Q \\cdot H}{102 \\cdot \\eta_p \\cdot \\eta_m} \\; [kW]",
                       "keyConcepts":  [
                                           "1. 달시-바이스바하 식에서 관경(D)이 2배가 되면 마찰손실수두는 유속 일정 시 1/2배, 유량 일정 시 1/32배로 격감",
                                           "2. 펌프 소요동력 분모의 102는 kgf·m/s를 kW로 환산하는 계수 (1 kW = 102 kgf·m/s)",
                                           "3. 축동력은 수동력/펌프효율, 모터동력은 축동력에 여유율(α)을 곱하고 모터효율로 나눔"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 유량 Q의 단위가 m³/min으로 주어지면 반드시 초당 유량(m³/s)으로 변환 후 계산할 것!",
                       "quiz":  {
                                    "q":  "양정 40m, 송출유량 1.2 m³/min, 펌프 효율 80%, 전동기 효율 90%, 여유율 1.15일 때 모터 소요 동력(kW)은?",
                                    "a":  "12.52 kW",
                                    "sol":  "Q = 1.2 / 60 = 0.02 m³/s. Pm = (1000 × 0.02 × 40) / (102 × 0.80 × 0.90) × 1.15 = 800 / 73.44 × 1.15 = 12.52 kW"
                                }
                   },
    "2026-10-02":  {
                       "dayNum":  4,
                       "date":  "2026-10-02",
                       "dday":  "D-36",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2012~2014년 (3개년)",
                       "topic":  "[1사이클 오답노트 1] 12~14년 3개년 오답노트 정리 \u0026 열효율·LMTD·펌프동력 마스터",
                       "goal":  "2012~2014년 3개년 기출 오답노트 정리. 보일러 효율, 대수평균온도차, 펌프 축동력 공식 3종 세트 백지 유도 및 완전 정복.",
                       "keyFormula":  "W_e = \\frac{G_a(h_2 - h_1)}{539} \\; [kg/h], \\quad BHP = \\frac{W_e}{15.65} \\; [HP]",
                       "keyConcepts":  [
                                           "1. 상당증발량(We)은 100℃ 포화수를 100℃ 포화증기로 증발시키는 표준 환산 증발량 (기준 잠열 539 kcal/kg)",
                                           "2. 보일러 1마력(1 BHP)은 100℃ 물 15.65 kg/h를 전량 증발시키는 열량 (15.65 × 539 = 8,435.35 kcal/h)",
                                           "3. 3개년 동안 빈출된 보일러 열정산 4대 손실(배기가스, 불완전연소, 방열, 회중 미연소) 정의 암기"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: kJ 단위 시험 문제에서는 증발잠열 539 kcal/kg 대신 2,257 kJ/kg를 분모로 적용해야 함!",
                       "quiz":  {
                                    "q":  "실제증발량 6,000 kg/h, 발생증기 엔탈피 660 kcal/kg, 급수 엔탈피 40 kcal/kg일 때 상당증발량과 보일러마력(BHP)은?",
                                    "a":  "상당증발량: 6,901.67 kg/h, BHP: 441.00 HP",
                                    "sol":  "We = (6000 × (660 - 40)) / 539 = 3,720,000 / 539 = 6901.67 kg/h. BHP = 6901.67 / 15.65 = 441.00 HP"
                                }
                   },
    "2026-10-03":  {
                       "dayNum":  5,
                       "date":  "2026-10-03",
                       "dday":  "D-35",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "15년",
                       "volume":  "2015년 1~3회 (18장)",
                       "topic":  "[1사이클 2015년] 2015년 기출풀이 \u0026 보일러 자동제어·수처리 블로우다운율",
                       "goal":  "2015년 과년도 기출 1~3회 정밀 풀이. 피드백/피드포워드/2요소/3요소 급수제어, 블로우다운율 및 급수 보존법 집중.",
                       "keyFormula":  "B = \\frac{S_f}{S_b - S_f} \\times 100 \\; [\\%], \\quad Q_b = Q_e \\times \\frac{S_f}{S_b - S_f} \\; [kg/h]",
                       "keyConcepts":  [
                                           "1. 보일러 3요소 수위제어의 입력 3대 신호: 증기유량, 급수유량, 드럼 수위 (부하 급변 시 가단수위 현상 방지)",
                                           "2. 연속 블로우다운율 B는 급수 염분 농도(Sf)와 보일러수 허용 염분 농도(Sb)의 비로 계산",
                                           "3. 만수보존법(휴지기간 1개월 미만, 하이드라진 투입)과 건조보존법(1개월 이상 장기 휴지, 실리카겔 밀폐) 구분"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 블로우다운율 공식 분모가 (Sb)가 아니라 (Sb - Sf)임을 절대 혼동하지 말 것!",
                       "quiz":  {
                                    "q":  "실제증발량 10 ton/h인 보일러에서 급수의 용존고형분 30 ppm, 관수 허용 농도 1,500 ppm일 때 필요 블로우다운율(%)과 배출량(kg/h)은?",
                                    "a":  "블로우다운율: 2.04%, 배출량: 204.08 kg/h",
                                    "sol":  "B = 30 / (1500 - 30) × 100 = 30 / 1470 × 100 = 2.04%. Qb = 10000 × (30 / 1470) = 204.08 kg/h"
                                }
                   },
    "2026-10-04":  {
                       "dayNum":  6,
                       "date":  "2026-10-04",
                       "dday":  "D-34",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "16년",
                       "volume":  "2016년 1~3회 (17장)",
                       "topic":  "[1사이클 2016년] 2016년 기출풀이 \u0026 절탄기·공기예열기 열회수율 계산",
                       "goal":  "2016년 과년도 기출 1~3회 정밀 풀이. 절탄기 급수 상승온도, 공기예열기 공기 예열온도 및 보일러 효율 향상폭 계산 집중.",
                       "keyFormula":  "\\text{연료 절감율 } S = \\frac{t_2 - t_1}{H_l / c_p + (t_2 - t_1)} \\times 100 \\; [\\%]",
                       "keyConcepts":  [
                                           "1. 절탄기는 배기가스 열로 급수를 예열하며, 급수온도 6℃ 상승 시 보일러 효율 약 1% 향상(연료 1% 절감)",
                                           "2. 공기예열기는 연소용 공기를 예열하며, 공기온도 20℃ 상승 시 보일러 효율 약 1% 향상",
                                           "3. 저온부식(황산 이슬점 부식) 방지 대책: 배기가스 온도 유지, 저유황 연료 사용, 내식성 재료 적용"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 절탄기 통과 시 급수 끓음(베이퍼록) 방지를 위해 출구 온도는 포화온도보다 20~30℃ 낮게 설계!",
                       "quiz":  {
                                    "q":  "급수 온도를 50℃에서 110℃로 승온시키는 절탄기를 설치했다. 급수 흡열량이 120 kcal/kg, 연료 총투입열량이 2,000 kcal/kg일 때 연료 절감율은?",
                                    "a":  "5.66%",
                                    "sol":  "S = 120 / (2000 + 120) × 100 = 120 / 2120 × 100 = 5.66%"
                                }
                   },
    "2026-10-05":  {
                       "dayNum":  7,
                       "date":  "2026-10-05",
                       "dday":  "D-33",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "17년",
                       "volume":  "2017년 1~3회 (18장)",
                       "topic":  "[1사이클 2017년] 2017년 기출풀이 \u0026 보온재 경제적 두께·표면 방열손실",
                       "goal":  "2017년 과년도 기출 1~3회 정밀 풀이. 원통 배관 보온재 외경 전열저항, 평판 표면 방열 손실열량, 경제적 보온 두께 계산.",
                       "keyFormula":  "q_L = \\frac{2\\pi (T_i - T_o)}{\\frac{1}{k}\\ln(r_2 / r_1)} \\; [W/m], \\quad r_{cr} = \\frac{k}{h_o} \\; [m]",
                       "keyConcepts":  [
                                           "1. 임계 보온 반경 r_cr = k / ho : 배관 외경이 임계 반경보다 작으면 보온재 추가 시 오히려 방열량 증가",
                                           "2. 경제적 보온 두께: (보온 시공비의 연간 상각비 + 연간 잔여 열손실 비용)의 합이 최소가 되는 두께",
                                           "3. 다층 보온재 시공 시 내열성이 높고 열전도율이 작은 고온용 단열재를 안쪽에, 경제적인 보온재를 바깥쪽에 배치"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 원통 배관 열전도 계산 시 두께 차이(r2 - r1)가 아닌 자연로그 비 ln(r2/r1)를 분모에 적용할 것!",
                       "quiz":  {
                                    "q":  "외경 60mm(반경 30mm) 파이프에 열전도율 0.04 W/m·K 보온재를 30mm 두께로 시공했다. 배관 표면 180℃, 보온재 외피 40℃일 때 1m당 방열량(W/m)은?",
                                    "a":  "50.81 W/m",
                                    "sol":  "r1 = 0.03 m, r2 = 0.06 m. qL = (2π × 0.04 × (180 - 40)) / ln(0.06 / 0.03) = (0.2513 × 140) / 0.6931 = 50.81 W/m"
                                }
                   },
    "2026-10-06":  {
                       "dayNum":  8,
                       "date":  "2026-10-06",
                       "dday":  "D-32",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2015~2017년 (3개년)",
                       "topic":  "[1사이클 오답노트 2] 15~17년 3개년 오답노트 정리 \u0026 자동제어·보온단열·열회수 마스터",
                       "goal":  "2015~2017년 3개년 기출 오답노트 정리. 3요소 급수제어 블록선도, 원통 보온재 열전도 저항식, 절탄기 연료절감율 공식 완전 정복.",
                       "keyFormula":  "q = \\frac{T_1 - T_4}{\\frac{1}{2\\pi r_1 h_i} + \\frac{\\ln(r_2/r_1)}{2\\pi k_1} + \\frac{\\ln(r_3/r_2)}{2\\pi k_2} + \\frac{1}{2\\pi r_3 h_o}}",
                       "keyConcepts":  [
                                           "1. 2015~2017년 핵심 빈출 3대 공식(블로우다운율, 연료절감율, 복합 단열관 열손실) 공식 총정리",
                                           "2. 급수 탈기법: 물리적 탈기(가열탈기기 105℃) + 화학적 탈기(하이드라진/아황산나트륨)의 2단계 조합",
                                           "3. 보온재의 구비조건 5가지: 열전도율 작을 것, 내열성·기계적 강도 우수, 흡습·흡수성 적을 것, 비중 작을 것"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 다층 보온 계산 시 각 층의 열전도율 k1, k2와 반경 r1, r2, r3의 대응 매칭에 각별히 유의!",
                       "quiz":  {
                                    "q":  "열전도율 0.05 W/m·K인 보온재의 외기 대류열전달계수가 10 W/m²·K일 때 임계 보온 반경은 몇 mm인가?",
                                    "a":  "5 mm",
                                    "sol":  "rcr = k / ho = 0.05 / 10 = 0.005 m = 5 mm"
                                }
                   },
    "2026-10-07":  {
                       "dayNum":  9,
                       "date":  "2026-10-07",
                       "dday":  "D-31",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "18년",
                       "volume":  "2018년 1~3회 (19장)",
                       "topic":  "[1사이클 2018년] 2018년 기출풀이 \u0026 급수 수처리 화학 반응식·탈산소제 계산",
                       "goal":  "2018년 과년도 기출 1~3회 정밀 풀이. 하이드라진(N2H4) 및 아황산나트륨(Na2SO3) 산소 제거 반응식, 인산나트륨 연화 반응 계산.",
                       "keyFormula":  "\\text{N}_2\\text{H}_4 + \\text{O}_2 \\rightarrow \\text{N}_2 + 2\\text{H}_2\\text{O}, \\quad 2\\text{Na}_2\\text{SO}_3 + \\text{O}_2 \\rightarrow 2\\text{Na}_2\\text{SO}_4",
                       "keyConcepts":  [
                                           "1. 하이드라진(분자량 32)은 산소(분자량 32)와 1:1 질량비로 완전 반응하여 잔류 고형물 없이 청정 탈소",
                                           "2. 아황산나트륨은 산소 1kg당 7.88kg이 이론적으로 필요하며 관수 내 용존고형분(TDS)을 증가시키는 단점",
                                           "3. 캐리오버(비수)의 4대 원인: 고수위 운전, 관수 농축, 부하 급증, 증기 밸브 급개방"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 하이드라진은 이론비 1:1이지만 실제는 잔류 농도 유지를 위해 1.2~1.5배 과잉 주입함!",
                       "quiz":  {
                                    "q":  "용존산소 4 ppm을 함유한 급수 50 ton/h를 하이드라진(N2H4)으로 전량 탈산소할 때 1시간당 이론 하이드라진 필요량(g/h)은?",
                                    "a":  "200 g/h",
                                    "sol":  "총 용존산소량 = 50,000 kg × 4 × 10⁻⁶ = 0.2 kg = 200 g. N2H4 : O2 = 32 : 32 = 1 : 1 이므로 200 g/h 필요"
                                }
                   },
    "2026-10-08":  {
                       "dayNum":  10,
                       "date":  "2026-10-08",
                       "dday":  "D-30",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "19년",
                       "volume":  "2019년 1~3회 (20장)",
                       "topic":  "[1사이클 2019년] 2019년 기출풀이 \u0026 안전밸브 분출용량·증기 어큐뮬레이터",
                       "goal":  "2019년 과년도 기출 1~3회 정밀 풀이. 보일러 최고사용압력별 안전밸브 분출용량, 양정, 분출면적 계산 집중.",
                       "keyFormula":  "W_s = 0.05 \\cdot K \\cdot C \\cdot A \\cdot P \\; [kg/h], \\quad A = \\pi \\cdot d \\cdot l \\; [mm^2]",
                       "keyConcepts":  [
                                           "1. 안전밸브의 분출면적은 밸브 시트 직경(d)과 밸브 양정(l)의 원통 측면적(π·d·l)으로 결정",
                                           "2. 증기 어큐뮬레이터(축열기)는 부하 변동 시 잉여 증기를 고압 온수로 축열하고, 피크 부하 시 감압 플래시 증발",
                                           "3. 보일러 과열기 출구 안전밸브는 동체 안전밸브보다 먼저 작동하도록 설정 (과열기 소손 방지)"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 전량 리프트식 안전밸브는 밸브 구경 유로 면적(π/4·d²)을 유효 분출면적으로 적용!",
                       "quiz":  {
                                    "q":  "시트 직경 50mm, 양정 3mm인 양정식 안전밸브의 분출면적(mm²)은?",
                                    "a":  "471.24 mm²",
                                    "sol":  "A = π × d × l = π × 50 × 3 = 150π = 471.24 mm²"
                                }
                   },
    "2026-10-09":  {
                       "dayNum":  11,
                       "date":  "2026-10-09",
                       "dday":  "D-29",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "20년",
                       "volume":  "2020년 1~3회 (28장)",
                       "topic":  "[1사이클 2020년] 2020년 기출풀이 \u0026 필답형 전면개편 복합 열정산",
                       "goal":  "2020년 실기 기출 1~3회 정밀 풀이 (필답형 단독 전면 개편 회차). 배기가스 현열/잠열 분리 열정산 계산 집중.",
                       "keyFormula":  "Q_{in} = G_f H_l + Q_a + Q_f = Q_{out} = Q_e + Q_g + Q_u + Q_r",
                       "keyConcepts":  [
                                           "1. 2020년 실기시험부터 작업형이 폐지되고 필답형 100점 만점으로 전면 개편되어 복합 계산 비중 폭증",
                                           "2. 배기가스 건조 현열 손실 qg = Gwd · Cpg · (Tg - Ta), 수분 잠열 손실 qw = (9H + W) · (r + Cpw(Tg - 100))",
                                           "3. 열정산표 작성 시 입열 합계(100%)와 출열 각 항목의 백분율 합이 반드시 일치해야 함"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 저위발열량 기준 열정산에서는 수분 잠열(600 kcal/kg)이 이미 제외되어 있으므로 중복 차감 금지!",
                       "quiz":  {
                                    "q":  "연료 1kg당 건조배기가스량 12 Nm³, 평균비열 0.31 kcal/Nm³·℃, 배기가스온도 220℃, 외기온도 20℃, 저위발열량 10,000 kcal/kg일 때 배기가스 현열 손실율(%)은?",
                                    "a":  "7.44%",
                                    "sol":  "Qg = 12 × 0.31 × (220 - 20) = 12 × 0.31 × 200 = 744 kcal/kg. qg = (744 / 10000) × 100 = 7.44%"
                                }
                   },
    "2026-10-10":  {
                       "dayNum":  12,
                       "date":  "2026-10-10",
                       "dday":  "D-28",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2018~2020년 (3개년)",
                       "topic":  "[1사이클 오답노트 3] 18~20년 3개년 오답노트 정리 \u0026 복합 열정산·안전밸브 마스터",
                       "goal":  "2018~2020년 3개년 기출 오답노트 정리. 개편 1~3회 복합 열정산표 및 안전밸브, 수처리 반응식 완전 총정리.",
                       "keyFormula":  "H_l = 8100C + 34000\\left(H - \\frac{O}{8}\\right) + 2500S - 600(9H + W) \\; [kcal/kg]",
                       "keyConcepts":  [
                                           "1. 듀롱(Dulong) 공식에 의한 고체/액체 연료 고위 및 저위 발열량 산출 공식 완벽 암기",
                                           "2. 개편 이후 필답형 전용 킬러 문제: 열정산표 빈칸 채우기 5대 항목 산출 프로세스 정립",
                                           "3. 안전밸브 호칭경 선정 식과 증기 어큐뮬레이터 유효 저장열량 산출 공식 오답 정리"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 듀롱식의 (H - O/8)에서 O/8은 유효수소량 계산을 위해 산소와 결합한 기결합 수소 차감치!",
                       "quiz":  {
                                    "q":  "탄소 85%, 수소 12%, 황 1%, 수분 2%인 중유의 저위발열량(kcal/kg)은 듀롱식으로 얼마인가?",
                                    "a":  "10,330 kcal/kg",
                                    "sol":  "Hh = 8100(0.85) + 34000(0.12) + 2500(0.01) = 6885 + 4080 + 25 = 10,990 kcal/kg. Hl = 10990 - 600(9 × 0.12 + 0.02) = 10990 - 660 = 10,330 kcal/kg"
                                }
                   },
    "2026-10-11":  {
                       "dayNum":  13,
                       "date":  "2026-10-11",
                       "dday":  "D-27",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "21년",
                       "volume":  "2021년 1~3회 (28장)",
                       "topic":  "[1사이클 2021년] 2021년 기출풀이 \u0026 신출 복합 계산형·상당증발량",
                       "goal":  "2021년 실기 기출 1~3회 정밀 풀이. 복합 계산형(연소+열정산+통풍) 신유형 문제 집중 분석 및 풀이.",
                       "keyFormula":  "A_0 = \\frac{1}{0.21} \\left[ \\frac{8}{3}C + 8\\left(H - \\frac{O}{8}\\right) + S \\right] \\times \\frac{22.4}{32} \\approx 8.89C + 26.67\\left(H - \\frac{O}{8}\\right) + 3.33S",
                       "keyConcepts":  [
                                           "1. 고체/액체 연료 이론공기량 공식 산출 계수 유도(C 1kg 연소 시 산소 8/3 kg, H 1kg 연소 시 산소 8 kg 소요)",
                                           "2. 기체연료의 이론산소량 산출: O_0 = CO/2 + H2/2 + 2CH4 + 3.5C2H6 + ...",
                                           "3. 상당증발량과 전열면적(A)을 통한 증발율(We/A) 및 전열부하 산출 연계 계산"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 이론산소량(Oo)을 이론공기량(Ao)으로 환산할 때 반드시 공기 중 산소 체적비 0.21로 나눌 것!",
                       "quiz":  {
                                    "q":  "탄소 84%, 수소 14%, 황 2%인 액체연료 1kg의 이론공기량(Nm³/kg)은?",
                                    "a":  "11.27 Nm³/kg",
                                    "sol":  "A0 = 8.89(0.84) + 26.67(0.14) + 3.33(0.02) = 7.468 + 3.734 + 0.067 = 11.27 Nm³/kg"
                                }
                   },
    "2026-10-12":  {
                       "dayNum":  14,
                       "date":  "2026-10-12",
                       "dday":  "D-26",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "22년",
                       "volume":  "2022년 1~3회 (31장)",
                       "topic":  "[1사이클 2022년] 2022년 기출풀이 \u0026 빈출 서술형 키워드·실무 전열 계산",
                       "goal":  "2022년 실기 기출 1~3회 정밀 풀이. 복합 전열(대류+복사 병렬 전달) 및 배관 신축이음 보정 계산.",
                       "keyFormula":  "\\Delta L = L_0 \\cdot \\alpha \\cdot (T_2 - T_1) \\; [mm], \\quad q_r = \\epsilon \\sigma (T_1^4 - T_2^4) \\; [W/m^2]",
                       "keyConcepts":  [
                                           "1. 증기 배관의 열팽창 신축량(ΔL) 계산 공식과 신축이음 4대 형식(루프형, 벨로즈형, 슬리브형, 스위블형)",
                                           "2. 슈테판-볼츠만 복사열전달 법칙: 절대온도의 4승차에 비례 (σ = 5.67 × 10⁻⁸ W/m²·K⁴)",
                                           "3. 2022년 빈출 단답: 노통보일러 아담슨 조인트 목적(외압 강도 보강, 신축 흡수) 및 코르게이션 파형노통 장점"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 복사열전달 계산 시 섭씨온도(℃)를 반드시 절대온도(K = ℃ + 273)로 변환 후 4승할 것!",
                       "quiz":  {
                                    "q":  "길이 120m의 강관 증기배관(선팽창계수 1.2 × 10⁻⁵ /℃)에 180℃ 증기를 통기할 때(초기온도 20℃) 총 팽창량(mm)은?",
                                    "a":  "230.4 mm",
                                    "sol":  "ΔL = 120,000 mm × 1.2 × 10⁻⁵ × (180 - 20) = 1.44 × 160 = 230.4 mm"
                                }
                   },
    "2026-10-13":  {
                       "dayNum":  15,
                       "date":  "2026-10-13",
                       "dday":  "D-25",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "23년",
                       "volume":  "2023년 1~3회 (45+26장)",
                       "topic":  "[1사이클 2023년] 2023년 기출풀이 \u0026 최신 출판사 교차검증·통풍력 계산",
                       "goal":  "2023년 실기 기출 1~3회 정밀 풀이. 출판사 A/B 교차검증 해설 분석 및 굴뚝 이론통풍력·압력강하 집중 풀이.",
                       "keyFormula":  "Z = 353 \\cdot H \\left( \\frac{1}{T_a} - \\frac{1}{T_g} \\right) \\; [mmH_2O], \\quad \\frac{P_1}{P_2} = \\left(\\frac{N_1}{N_2}\\right)^3",
                       "keyConcepts":  [
                                           "1. 굴뚝 이론통풍력 Z는 굴뚝 높이(H)와 외기온도(Ta)/배기가스온도(Tg) 역수 차이에 정비례",
                                           "2. 송풍기 상사법칙 3대 공식: 유량비 ∝ N, 풍압비 ∝ N², 축동력비 ∝ N³ (밀도 일정 조건)",
                                           "3. 압입통풍(FDF, 정압)과 흡입통풍(IDF, 부압)의 장단점 및 평형통풍 시스템 구성"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 이론통풍력 공식의 Ta와 Tg는 절대온도(K)이므로 273을 더해야 함!",
                       "quiz":  {
                                    "q":  "높이 45m인 굴뚝에서 외기온도 20℃, 배기가스 평균온도 240℃일 때 이론통풍력(mmH2O)은?",
                                    "a":  "23.23 mmH2O",
                                    "sol":  "Ta = 293 K, Tg = 513 K. Z = 353 × 45 × (1/293 - 1/513) = 15885 × (0.003413 - 0.001949) = 23.23 mmH2O"
                                }
                   },
    "2026-10-14":  {
                       "dayNum":  16,
                       "date":  "2026-10-14",
                       "dday":  "D-24",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2021~2023년 (3개년)",
                       "topic":  "[1사이클 오답노트 4] 21~23년 3개년 오답노트 정리 \u0026 최신 복합기출·통풍상사 마스터",
                       "goal":  "2021~2023년 3개년 기출 오답노트 정리. 최신 3개년 신출 복합 계산문제 및 송풍기 상사법칙 공식 집중 마스터.",
                       "keyFormula":  "\\frac{Q_1}{Q_2} = \\frac{N_1}{N_2}, \\quad \\frac{H_1}{H_2} = \\left(\\frac{N_1}{N_2}\\right)^2, \\quad \\frac{P_1}{P_2} = \\left(\\frac{N_1}{N_2}\\right)^3",
                       "keyConcepts":  [
                                           "1. 2021~2023년 최신 3개년 기출의 가장 큰 특징: 단일 공식 대입형 배제, 2~3단계 복합 연계 계산형 대거 출제",
                                           "2. 송풍기 회전수 20% 증가 시 동력은 1.2³ = 1.728배(72.8% 증가)로 급증하는 특성 숙지",
                                           "3. 최신 서술형 빈출: 열병합발전시스템(CHP) 종합 에너지이용효율 및 에너지절감 효과 산출식"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 송풍기 임펠러 직경(D) 변경 시 상사법칙은 유량 ∝ D³, 풍압 ∝ D², 동력 ∝ D⁵!",
                       "quiz":  {
                                    "q":  "어떤 송풍기의 회전수를 1,200 rpm에서 1,500 rpm으로 승속시킬 때, 기존 소요동력이 15 kW였다면 변경 후 소요동력(kW)은?",
                                    "a":  "29.30 kW",
                                    "sol":  "P2 / P1 = (1500 / 1200)³ = (1.25)³ = 1.9531. P2 = 15 × 1.9531 = 29.30 kW"
                                }
                   },
    "2026-10-15":  {
                       "dayNum":  17,
                       "date":  "2026-10-15",
                       "dday":  "D-23",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "24년",
                       "volume":  "2024년 최신 기출 1~3회 (55장)",
                       "topic":  "[1사이클 2024년] 2024년 기출풀이 \u0026 최신 출제경향 분석·복합 열정산 완벽 풀이",
                       "goal":  "2024년 최신 기출 1~3회 전회차(55장) 정밀 풀이. 최신 출제경향 파악 및 복합 신유형 계산문제 완벽 분석.",
                       "keyFormula":  "\\eta_{sys} = \\frac{W_e + Q_{useful}}{Q_{fuel}} \\times 100 \\; [\\%], \\quad PESR = 1 - \\frac{1}{\\frac{\\eta_e}{\\eta_{e,ref}} + \\frac{\\eta_{th}}{\\eta_{th,ref}}}",
                       "keyConcepts":  [
                                           "1. 2024년 기출의 최신 경향: 신재생에너지 융복합, 폐열회수 히트펌프, 에너지절약전문기업(ESCO) 투자회수기간",
                                           "2. 열병합발전 시스템(CHP)의 1차 에너지 절감율(PESR) 공식 및 전력/열 생산비 계산",
                                           "3. 복합 증기터빈 추기복수 사이클 열효율 및 복수기 손실열량 정밀 산출"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 투자회수기간 계산 시 단순회수기간법(초기투자비 / 연간절감액)과 현재가치법 구분!",
                       "quiz":  {
                                    "q":  "폐열회수 설비 설치비 1억 2,000만원, 연간 에너지 절감액 3,200만원, 연간 유지보수비 200만원일 때 단순 투자회수기간(년)은?",
                                    "a":  "4.0 년",
                                    "sol":  "연간 순절감액 = 3200 - 200 = 3000 만원. 투자회수기간 = 12000 / 3000 = 4.0 년"
                                }
                   },
    "2026-10-16":  {
                       "dayNum":  18,
                       "date":  "2026-10-16",
                       "dday":  "D-22",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "25년 (출판사 변경)",
                       "volume":  "2025년 최신판 전회차 (29장)",
                       "topic":  "[1사이클 2025년] 2025년 최신 기출풀이 \u0026 신경향 킬러 계산문제 정밀 격파",
                       "goal":  "2025년 최신 기출 전회차(출판사 B 최신판 29장) 풀이. 최신 법령 개정 사항 및 신출 킬러 계산문제 정밀 풀이.",
                       "keyFormula":  "COP_h = \\frac{Q_h}{W_{in}} = \\frac{T_h}{T_h - T_c}, \\quad \\text{에너지절감량} = Q_h \\left(1 - \\frac{1}{COP_h}\\right)",
                       "keyConcepts":  [
                                           "1. 2025년 최신 출제 트렌드: 히트펌프 성적계수(COP) 기반 전력소비량 및 화석연료 대체율 산출",
                                           "2. 에너지이용합리화법 개정 최신 기준: 특정열사용기자재 검사유효기간 및 에너지관리자 선임 기준",
                                           "3. 엑서지(Exergy, 유효에너지) 효율 및 열교환기 비가역 엔트로피 생성량 계산 기초"
                                       ],
                       "pitfall":  "⚠️ 함정 주의: 난방용 히트펌프 COP_h는 냉동기 COP_c보다 항상 1이 큼 (COP_h = COP_c + 1)!",
                       "quiz":  {
                                    "q":  "고온부 65℃(338K), 저온부 15℃(288K) 사이에서 작동하는 카르노 히트펌프의 이론 성적계수(COP)는?",
                                    "a":  "6.76",
                                    "sol":  "COP_h = 338 / (338 - 288) = 338 / 50 = 6.76"
                                }
                   },
    "2026-10-17":  {
                       "dayNum":  19,
                       "date":  "2026-10-17",
                       "dday":  "D-21",
                       "phase":  1,
                       "phaseName":  "1사이클: 1회독 기출 정밀 풀이 \u0026 유형 분석 (9/29 ~ 10/17)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2024~2025년 (최신 2개년) \u0026 14개년 총정리",
                       "topic":  "[1사이클 오답노트 5] 24~25년 최신 2개년 오답노트 \u0026 14개년 계산 공식 총정리 마스터",
                       "goal":  "2024~2025년 최신 2개년 오답노트 완벽 정리. 14개년(12~25년) 전 범위 핵심 계산 공식 총정리 바이블 완성.",
                       "keyFormula":  "\\sum_{i=1}^{25} \\text{Formula}_i \\implies \\text{14개년 킬러 계산 공식 25제 완전 백지 정복}",
                       "keyConcepts":  [
                                           "1. 1사이클 19일간의 1회독 완주 달성! 14개년(2012~2025년) 전 범위 기출문제 1회독 정밀 분석 완료",
                                           "2. 나만의 1사이클 오답노트(취약 계산 25제, 필수 서술형 40제) 완성",
                                           "3. 내일부터 시작되는 2사이클 스피드런 대비: 문제만 보면 즉시 공식이 튀어나오는 반사신경 체계 구축"
                                       ],
                       "pitfall":  "⚠️ 마인드셋: 1회독 때 틀렸던 문제는 2회독에서 무조건 맞춘다는 각오로 오답노트 공식 구조를 완벽 복습할 것!",
                       "quiz":  {
                                    "q":  "14개년 기출 계산문제의 85% 이상을 차지하는 5대 핵심 공식군은 무엇인가?",
                                    "a":  "1) 보일러 효율·열정산, 2) 공기비·연소공학, 3) 열교환기 LMTD·전열, 4) 펌프·송풍기 동력/상사, 5) 수처리 블로우다운율",
                                    "sol":  "이 5대 공식군만 완벽히 백지 인출할 수 있으면 실기 계산문제(배점 60점 이상) 만점 확보 가능!"
                                }
                   },
    "2026-10-18":  {
                       "dayNum":  20,
                       "date":  "2026-10-18",
                       "dday":  "D-20",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "12년",
                       "volume":  "2012년 1~3회 (20장)",
                       "topic":  "[2사이클 12년] 2012년 계산문제 스피드런 - 보일러 효율·공기비 15분 타임어택",
                       "goal":  "[2회독 스피드런] 2012년 계산문제만 골라 풀기. 보일러 효율 및 공기비 공식 유도 시간 단축(목표 15분 내 완벽 풀이).",
                       "keyFormula":  "m = \\frac{N_2}{N_2 - 3.76 O_2}, \\quad V_a = m \\cdot A_0 \\; [Nm^3/kg]",
                       "keyConcepts":  [
                                           "1. 2회독의 목표: 계산문제 풀이 속도 2배 향상 및 검산 프로세스 정형화",
                                           "2. 질소(N2) 기준 공기비 산출식과 산소(O2) 기준 공기비 산출식의 교차 검증",
                                           "3. 단위 실수(kg vs ton, kcal vs kJ, Nm³ vs m³) 제로화 훈련"
                                       ],
                       "pitfall":  "⚠️ 타임어택 주의: 풀이과정에 단위를 생략하지 말고 최종 답란에 소수점 셋째자리 반올림 표기 준수!",
                       "quiz":  {
                                    "q":  "연료 1kg 연소 시 건조배기가스 중 N2 82%, O2 5%일 때 질소 기준 공기비는?",
                                    "a":  "1.30",
                                    "sol":  "m = 82 / (82 - 3.76 × 5) = 82 / (82 - 18.8) = 82 / 63.2 = 1.297 ≈ 1.30"
                                }
                   },
    "2026-10-19":  {
                       "dayNum":  21,
                       "date":  "2026-10-19",
                       "dday":  "D-19",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "13년",
                       "volume":  "2013년 1~3회 (19장)",
                       "topic":  "[2사이클 13년] 2013년 계산문제 스피드런 - LMTD·전열면적 역산 마스터",
                       "goal":  "[2회독 스피드런] 2013년 열교환기 계산문제 집중 스피드런. 열통과율 및 필요 전열면적 역산 공식 마스터.",
                       "keyFormula":  "U = \\frac{1}{\\frac{1}{h_i} + \\frac{t}{k} + \\frac{1}{h_o} + R_f} \\; [W/m^2\\cdot K]",
                       "keyConcepts":  [
                                           "1. 열교환기 오염계수(파울링 팩터, Rf)가 주어졌을 때 총괄열전달계수 U 산출 훈련",
                                           "2. 전열면적 A로부터 전열관 본수 및 직경/길이 산출 연계 계산 고속 풀이",
                                           "3. 병류와 향류의 LMTD 차이에 따른 필요 전열면적 절감율 산출"
                                       ],
                       "pitfall":  "⚠️ 오염계수 주의: Rf의 단위가 m²·K/W이므로 분모에 합산 시 역수가 아닌 원래 값 그대로 가산!",
                       "quiz":  {
                                    "q":  "hi = 2,000 W/m²·K, ho = 1,500 W/m²·K, 관두께 2mm, k = 50 W/m·K, 파울링계수 Rf = 0.0002 m²·K/W일 때 총괄열전달계수 U는?",
                                    "a":  "710.23 W/m²·K",
                                    "sol":  "1/U = 1/2000 + 0.002/50 + 1/1500 + 0.0002 = 0.0005 + 0.00004 + 0.000667 + 0.0002 = 0.001407 ⟹ U = 710.23 W/m²·K"
                                }
                   },
    "2026-10-20":  {
                       "dayNum":  22,
                       "date":  "2026-10-20",
                       "dday":  "D-18",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "14년",
                       "volume":  "2014년 1~3회 (22장)",
                       "topic":  "[2사이클 14년] 2014년 계산문제 스피드런 - 배관 마찰손실수두 \u0026 펌프동력",
                       "goal":  "[2회독 스피드런] 2014년 배관 및 펌프 계산문제 집중 타임어택. 유속-마찰손실-소요동력 원스톱 풀이.",
                       "keyFormula":  "v = \\frac{4Q}{\\pi D^2}, \\quad H_{total} = H_{actual} + h_L + \\frac{v^2}{2g}",
                       "keyConcepts":  [
                                           "1. 전양정(H) = 실양정(Ha) + 총 손실수두(hL) + 속도수두(v²/2g)",
                                           "2. 밸브 및 엘보 등 관이음류 상당길이(Le)를 직관길이(L)에 합산하는 배관 전양정 계산 숙달",
                                           "3. 공동현상(캐비테이션) 발생 조건: NPSHav \u003c NPSHre"
                                       ],
                       "pitfall":  "⚠️ 수두 단위 주의: 압력이 kgf/cm²로 주어지면 물의 비중량(1,000 kgf/m³)으로 나누어 수두(m)로 변환할 것!",
                       "quiz":  {
                                    "q":  "유량 0.05 m³/s, 관경 150mm일 때 관내 유속(m/s)과 속도수두(m)는?",
                                    "a":  "유속: 2.83 m/s, 속도수두: 0.41 m",
                                    "sol":  "v = (4 × 0.05) / (π × 0.15²) = 0.2 / 0.07068 = 2.83 m/s. v²/2g = 2.83² / 19.6 = 0.41 m"
                                }
                   },
    "2026-10-21":  {
                       "dayNum":  23,
                       "date":  "2026-10-21",
                       "dday":  "D-17",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2012~2014년 (3개년)",
                       "topic":  "[2사이클 오답클리닉 1] 12~14년 3개년 취약 계산문제 핀포인트 오답 클리닉",
                       "goal":  "12~14년 기출 중 1회독 오답 문제 및 킬러 계산문제만 집중 재풀이. 공식 유도 과정 백지 작성.",
                       "keyFormula":  "\\text{오답 재풀이 정답률 100\\% 달성 및 계산 풀이 속도 15분 이내 압축}",
                       "keyConcepts":  [
                                           "1. 12~14년 기출에서 내가 틀렸던 계산문제 1:1 오답 클리닉",
                                           "2. 보일러 효율 정압시험법 vs 입출열법 공식 완벽 비교",
                                           "3. 펌프 소요동력 여유율 적용 위치(수동력 vs 축동력 vs 전동기출력) 재확인"
                                       ],
                       "pitfall":  "⚠️ 반복 오답 방지: 풀이 과정을 암기하지 말고 문제 조건의 인과관계를 스스로 설명할 수 있어야 함!",
                       "quiz":  {
                                    "q":  "보일러 효율 시험 시 측정해야 할 4대 필수 물리량은?",
                                    "a":  "1) 연료 소비량(Gf), 2) 연료 저위발열량(Hl), 3) 실제 증발량(Ga), 4) 발생증기 엔탈피(h2) 및 급수 엔탈피(h1)",
                                    "sol":  "η = (Ga(h2 - h1) / (Gf · Hl)) × 100 공식의 모든 인자가 측정 대상임"
                                }
                   },
    "2026-10-22":  {
                       "dayNum":  24,
                       "date":  "2026-10-22",
                       "dday":  "D-16",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "15년",
                       "volume":  "2015~2016년 (35장)",
                       "topic":  "[2사이클 15~16년] 15~16년 계산문제 스피드런 - 수처리 블로우다운율·폐열회수율 고속 계산",
                       "goal":  "[2회독 스피드런] 15~16년 기출 계산문제 집중 풀이. 블로우다운 열회수율 및 절탄기 연료절감 계산 마스터.",
                       "keyFormula":  "Q_{bd\\_rec} = Q_b \\cdot C_p \\cdot (T_{boil} - T_{drain}) \\cdot \\eta_{hx} \\; [kcal/h]",
                       "keyConcepts":  [
                                           "1. 연속 블로우다운수의 고온 배출열을 급수 예열에 회수하는 플래시 탱크 및 열교환기 계산",
                                           "2. 절탄기와 공기예열기의 병렬/직렬 배치 시 전체 보일러 효율 향상율 합성",
                                           "3. 피드백 제어와 피드포워드 제어의 응답속도 및 제어오차 비교"
                                       ],
                       "pitfall":  "⚠️ 폐열회수 주의: 회수 가능한 최대 열량은 열교환기 효율(η)과 최소 유체 열용량을 고려해야 함!",
                       "quiz":  {
                                    "q":  "블로우다운수 500 kg/h(180℃, 비열 1.0)를 열교환기(효율 85%)로 80℃까지 냉각시켜 급수를 예열할 때 회수열량(kcal/h)은?",
                                    "a":  "42,500 kcal/h",
                                    "sol":  "Qrec = 500 × 1.0 × (180 - 80) × 0.85 = 50,000 × 0.85 = 42,500 kcal/h"
                                }
                   },
    "2026-10-23":  {
                       "dayNum":  25,
                       "date":  "2026-10-23",
                       "dday":  "D-15",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "17년",
                       "volume":  "2017~2018년 (37장)",
                       "topic":  "[2사이클 17~18년] 17~18년 계산문제 스피드런 - 보온재 두께 \u0026 수처리 약품 농도 계산",
                       "goal":  "[2회독 스피드런] 17~18년 기출 계산문제 집중 타임어택. 다층 보온재 열저항 계산 및 탈산소제 투입량 계산.",
                       "keyFormula":  "R_{th} = \\frac{1}{2\\pi k_1}\\ln\\frac{r_2}{r_1} + \\frac{1}{2\\pi k_2}\\ln\\frac{r_3}{r_2}, \\quad W_{chem} = Q_{feed} \\cdot C_{ppm} \\times 10^{-6}",
                       "keyConcepts":  [
                                           "1. 다층 원통벽 열저항 직렬 연결 합성 공식 능숙 적용",
                                           "2. 급수 화학세정(산세정) 시 인히비터(부식억제제) 첨가 목적 및 염산 농도 계산",
                                           "3. 보온 시공 후 절감되는 연간 연료 비용 산출"
                                       ],
                       "pitfall":  "⚠️ ppm 단위 주의: ppm은 10⁻⁶(백만분의 일)이므로 kg 단위 환산 시 10⁻⁶을 정확히 곱할 것!",
                       "quiz":  {
                                    "q":  "보온 시공 전 방열손실 200 W/m, 시공 후 40 W/m, 배관 길이 50m, 연간 가동시간 4,000시간일 때 연간 절감 열량(kWh)은?",
                                    "a":  "32,000 kWh",
                                    "sol":  "절감 전열량 = (200 - 40) × 50 = 8,000 W = 8 kW. 연간 절감량 = 8 kW × 4,000 h = 32,000 kWh"
                                }
                   },
    "2026-10-24":  {
                       "dayNum":  26,
                       "date":  "2026-10-24",
                       "dday":  "D-14",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "19년",
                       "volume":  "2019~2020년 (48장)",
                       "topic":  "[2사이클 19~20년] 19~20년 계산문제 스피드런 - 안전밸브 양정 \u0026 복합 열정산표 신속 작성",
                       "goal":  "[2회독 스피드런] 19~20년 기출 계산문제 집중 풀이. 안전밸브 호칭경 및 개편 필답형 복합 열정산표 20분 컷 작성.",
                       "keyFormula":  "\\eta = \\frac{Q_e}{Q_{in}} = 1 - \\frac{Q_g + Q_u + Q_r}{Q_{in}} \\; [\\%]",
                       "keyConcepts":  [
                                           "1. 입열출열법(직접법)과 손실열법(간접법)의 효율 일치 여부 검증 테크닉",
                                           "2. 배기가스 분석기 오르자트(Orsat) 분석치로 연소 상태 판정 및 공기비 역산",
                                           "3. 안전밸브 분출압력과 복귀압력의 압력차(블로우다운 압력) 계산"
                                       ],
                       "pitfall":  "⚠️ 열정산 주의: 방열손실 Qr이 주어지지 않은 경우 입열에서 다른 출열을 뺀 잔여치로 계산!",
                       "quiz":  {
                                    "q":  "보일러 연료투입열량 100%, 증기흡열량 82%, 배기가스 손실 12%, 불완전연소 손실 2%일 때 방열 및 기타 손실은?",
                                    "a":  "4%",
                                    "sol":  "Qr = 100 - (82 + 12 + 2) = 100 - 96 = 4%"
                                }
                   },
    "2026-10-25":  {
                       "dayNum":  27,
                       "date":  "2026-10-25",
                       "dday":  "D-13",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2015~2020년 (6개년)",
                       "topic":  "[2사이클 오답클리닉 2] 15~20년 중반부 킬러 계산 오답 클리닉 \u0026 열정산 실수 제로화",
                       "goal":  "15~20년 6개년 기출 계산 오답 핀포인트 클리닉. 복합 열정산표 및 다층 보온 전열 계산 실수 제로화 달성.",
                       "keyFormula":  "\\text{중반부 킬러 계산 15제 전원 정답 및 풀이 검산 체크리스트 완료}",
                       "keyConcepts":  [
                                           "1. 15~20년 중반부 6개년 계산문제 중 복합 계산 킬러 15제 엄선 재풀이",
                                           "2. 계산기 메모리(M+, M-, MR) 기능 활용하여 복합 분수식 오차 없이 계산하기",
                                           "3. 소수점 처리 기준(중간 계산은 가능한 길게 유지, 최종 답안에서 셋째자리 반올림)"
                                       ],
                       "pitfall":  "⚠️ 계산기 오차 주의: 중간 계산값을 섣불리 반올림하면 최종 답안에 오차가 누적되어 감점될 수 있음!",
                       "quiz":  {
                                    "q":  "복합 열정산표에서 배기가스 손실이 가장 큰 비중을 차지할 때 이를 줄이기 위한 3대 핵심 설비는?",
                                    "a":  "1) 절탄기(급수 예열), 2) 공기예열기(연소용 공기 예열), 3) 폐열회수 응축 열교환기(잠열 회수)",
                                    "sol":  "배기가스 온도를 낮출수록 현열 및 잠열 손실이 대폭 저감됨"
                                }
                   },
    "2026-10-26":  {
                       "dayNum":  28,
                       "date":  "2026-10-26",
                       "dday":  "D-12",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "21년",
                       "volume":  "2021년 1~3회 (28장)",
                       "topic":  "[2사이클 21년] 2021년 계산문제 스피드런 - 상당증발량 \u0026 연소 이론공기량 복합 계산",
                       "goal":  "[2회독 스피드런] 2021년 복합 계산 신유형 타임어택. 연료 성분분석치로부터 공기비, 이론배기가스량, 증발량 연속 풀이.",
                       "keyFormula":  "G_0 = 0.79 A_0 + 1.867C + 11.2H + 0.7S + 0.8N \\; [Nm^3/kg]",
                       "keyConcepts":  [
                                           "1. 이론 건조배기가스량(God) 및 이론 습배기가스량(Gow) 공식 완전 유도",
                                           "2. 실제 습배기가스량 Gw = Gow + (m - 1)Ao 연속 산출 프로세스",
                                           "3. 상당증발량과 실제증발량의 계수 환산 인자(Factor of Evaporation)"
                                       ],
                       "pitfall":  "⚠️ 배기가스 체적 주의: 수분(H2O) 체적은 수소 1kg당 11.2 Nm³, 수분 1kg당 1.244 Nm³ 적용!",
                       "quiz":  {
                                    "q":  "이론공기량 Ao = 10 Nm³/kg, 공기비 m = 1.2, 이론습배기가스량 Gow = 11 Nm³/kg일 때 실제습배기가스량(Nm³/kg)은?",
                                    "a":  "13.0 Nm³/kg",
                                    "sol":  "Gw = Gow + (m - 1)Ao = 11 + (1.2 - 1) × 10 = 11 + 2.0 = 13.0 Nm³/kg"
                                }
                   },
    "2026-10-27":  {
                       "dayNum":  29,
                       "date":  "2026-10-27",
                       "dday":  "D-11",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "22년",
                       "volume":  "2022년 1~3회 (31장)",
                       "topic":  "[2사이클 22년] 2022년 계산문제 스피드런 - 복합전열·배관 열팽창 신축량 계산",
                       "goal":  "[2회독 스피드런] 2022년 기출 계산문제 집중 타임어택. 대류+복사 병렬 전열계산 및 배관 신축이음 선정.",
                       "keyFormula":  "h_r = \\epsilon \\sigma (T_1 + T_2)(T_1^2 + T_2^2) \\approx 4\\epsilon \\sigma T_m^3 \\; [W/m^2\\cdot K]",
                       "keyConcepts":  [
                                           "1. 복사열전달계수(hr)를 선형화하여 대류열전달계수(hc)와 직접 합산(htotal = hc + hr)하는 복합전열 테크닉",
                                           "2. 루프형 신축이음의 신축 흡수능력(루프 반경 R 산출)",
                                           "3. 서술형 빈출: 배관 수격작용(워터해머) 방지 대책 4가지 (스팀트랩 설치, 드레인 배출, 완만 개폐, 감압밸브)"
                                       ],
                       "pitfall":  "⚠️ 온도 단위 주의: 선형화 복사열전달계수 계산 시 평균온도 Tm 역시 절대온도(K)를 적용해야 함!",
                       "quiz":  {
                                    "q":  "표면온도 100℃(373K), 주위온도 20℃(293K), 방사율 0.9일 때 복사열전달계수 hr(W/m²·K)은?",
                                    "a":  "7.64 W/m²·K",
                                    "sol":  "hr = 0.9 × (5.67 × 10⁻⁸) × (373 + 293) × (373² + 293²) = 7.64 W/m²·K"
                                }
                   },
    "2026-10-28":  {
                       "dayNum":  30,
                       "date":  "2026-10-28",
                       "dday":  "D-10",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "23년",
                       "volume":  "2023년 1~3회 (45+26장)",
                       "topic":  "[2사이클 23년] 2023년 계산문제 스피드런 - 송풍기 상사법칙 및 통풍력 고난도 계산",
                       "goal":  "[2회독 스피드런] 2023년 기출 계산문제 집중 타임어택. 가변속 송풍기 인버터 절감전력 및 굴뚝 압력손실 계산.",
                       "keyFormula":  "\\Delta P_{saved} = P_1 \\left[ 1 - \\left(\\frac{Q_2}{Q_1}\\right)^3 \\right] \\; [kW]",
                       "keyConcepts":  [
                                           "1. 송풍기 댐퍼 제어 대비 인버터(VVVF) 제어 시 동력 절감율 산출 공식",
                                           "2. 굴뚝 배기가스 마찰손실 수두와 이론통풍력의 유효통풍력 산출(Z_eff = Z_th - h_loss)",
                                           "3. 2023년 출판사 교차검증 특이문제 정답 통일"
                                       ],
                       "pitfall":  "⚠️ 상사법칙 조건: 온도가 변하여 가스 밀도가 달라지면 풍압과 동력은 밀도 비(ρ2/ρ1)를 추가로 곱해야 함!",
                       "quiz":  {
                                    "q":  "정격출력 30 kW 송풍기를 인버터 제어로 유량을 70%로 감량 운전할 때 절감되는 동력(kW)은?",
                                    "a":  "19.71 kW",
                                    "sol":  "P2 = 30 × (0.7)³ = 10.29 kW. 절감동력 = 30 - 10.29 = 19.71 kW (65.7% 절감)"
                                }
                   },
    "2026-10-29":  {
                       "dayNum":  31,
                       "date":  "2026-10-29",
                       "dday":  "D-9",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "24년",
                       "volume":  "2024년 최신 기출 1~3회 (55장)",
                       "topic":  "[2사이클 24년] 2024년 계산문제 스피드런 - 최신 복합 열정산표 20분 내 무오차 완성",
                       "goal":  "[2회독 스피드런] 2024년 최신 기출 전회차 복합 계산문제 타임어택. 20분 내 100% 무오차 작성 완성.",
                       "keyFormula":  "\\text{입열(연료열량+공기현열+연료현열)} = \\text{출열(증기흡열+배기가스현열+불완전연소+방열)}",
                       "keyConcepts":  [
                                           "1. 2024년 최신 복합 계산문제의 특징: 입열 3개 항, 출열 5개 항의 전수 복합 연계 계산",
                                           "2. 배기가스 분석치(CO2, O2, CO)로부터 불완전연소에 의한 일산화탄소 손실열량 산출",
                                           "3. 폐열회수 시스템 도입 전후 경제성 및 회수기간 종합 평가"
                                       ],
                       "pitfall":  "⚠️ 단위 통일: 입열과 출열의 단위를 kcal/kg 또는 kJ/kg 중 문제에서 요구한 표준 단위로 맞출 것!",
                       "quiz":  {
                                    "q":  "CO 발생에 의한 불완전연소 손실열량 공식은?",
                                    "a":  "q_CO = 3020 × (CO / (CO2 + CO)) × (C / 100) [kcal/kg]",
                                    "sol":  "CO 1Nm³ 생성 시 미연소 손실열량은 3,020 kcal임"
                                }
                   },
    "2026-10-30":  {
                       "dayNum":  32,
                       "date":  "2026-10-30",
                       "dday":  "D-8",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "25년 (출판사 변경)",
                       "volume":  "2025년 최신판 전회차 (29장)",
                       "topic":  "[2사이클 25년] 2025년 계산문제 스피드런 - 최신 킬러 계산문제 변형 유형 완벽 공략",
                       "goal":  "[2회독 스피드런] 2025년 최신 기출 전회차 계산 킬러 타임어택. 신경향 변형 문제까지 완벽 대비.",
                       "keyFormula":  "\\eta_{exergy} = \\frac{Ex_{out}}{Ex_{in}} = \\frac{Q_e (1 - T_0 / T_{steam})}{G_f H_l (1 - T_0 / T_{comb})}",
                       "keyConcepts":  [
                                           "1. 2025년 최신판에 수록된 신유형 계산문제 변형 풀이 완성",
                                           "2. 열교환기 엔트로피 증가율 및 유효에너지 손실량(구이-스톨라 정리 Wlost = T0 · Sgen)",
                                           "3. 2사이클 14일간의 2회독 계산 스피드런 마무리 및 합격권(75점 이상) 속도 달성"
                                       ],
                       "pitfall":  "⚠️ 최종 점검: 신유형 문제에 당황하지 말고 에너지 보존 법칙(Q_in = Q_out) 기본으로 회귀할 것!",
                       "quiz":  {
                                    "q":  "주위온도 20℃(293K)에서 300℃(573K)의 열 1,000 kJ이 방출될 때 이 열의 엑서지(유효에너지, kJ)는?",
                                    "a":  "488.66 kJ",
                                    "sol":  "Ex = Q(1 - T0/T) = 1000 × (1 - 293/573) = 1000 × 0.48866 = 488.66 kJ"
                                }
                   },
    "2026-10-31":  {
                       "dayNum":  33,
                       "date":  "2026-10-31",
                       "dday":  "D-7",
                       "phase":  2,
                       "phaseName":  "2사이클: 2회독 계산문제 스피드런 \u0026 고난도 오답 클리닉 (10/18 ~ 10/31)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "2021~2025년 (최신 5개년)",
                       "topic":  "[2사이클 오답클리닉 3] 21~25년 최신 5개년 신출 계산 오답 총괄 클리닉 \u0026 합격선(60점) 돌파 점검",
                       "goal":  "21~25년 최신 5개년 신출 계산문제 전원 재검증. 2사이클 누적 오답 100% 해소 및 합격선(60점) 완벽 돌파 확인.",
                       "keyFormula":  "\\text{2사이클 2회독 완주 달성! 계산문제 풀이 정확도 95\\% 이상, 풀이 시간 50\\% 단축 완성}",
                       "keyConcepts":  [
                                           "1. 2사이클 14일간의 2회독 계산 스피드런 완주! 계산문제에 대한 두려움 완전 극복",
                                           "2. 최신 5개년(21~25년) 신유형 계산문제의 공통 분모(복합 연소·열정산·열역학) 완벽 정리",
                                           "3. 내일부터 시작되는 D-7 파이널 골든위크(실전 모의고사 \u0026 25대 킬러 공식 백지화) 돌입 준비"
                                       ],
                       "pitfall":  "⚠️ D-7 점검: 계산기 배터리 및 외관 점검, 샤프심, 지우개 등 실기 필기구 미리 정돈할 것!",
                       "quiz":  {
                                    "q":  "에너지관리기사 실기 합격을 위해 반드시 득점해야 하는 파트별 목표 점수는?",
                                    "a":  "계산문제 40점 이상(총 50점 중) + 서술형/단답형 25점 이상(총 50점 중) = 총점 65점 이상 안정권 합격!",
                                    "sol":  "계산문제를 확실히 마스터하면 서술형 부분점수와 합산하여 무조건 60점 합격선을 돌파합니다."
                                }
                   },
    "2026-11-01":  {
                       "dayNum":  34,
                       "date":  "2026-11-01",
                       "dday":  "D-6",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "21년",
                       "volume":  "2021~2022년 실전 모의 (59장)",
                       "topic":  "[3사이클 D-6 실전 모의고사 1회] 2021~2022년 기출 기반 실전 100분 모의고사 \u0026 계산문제 전수 검산",
                       "goal":  "[실전 모의 1회] 2021~2022년 기출 중 14문제를 선별하여 실전 시험 시간(100분) 타이머 설정 후 풀이. 계산문제 전수 검산.",
                       "keyFormula":  "\\text{실전 100분 타임어택: 14문제 풀이 } \\implies \\text{목표 75점 이상 획득 \u0026 계산 실수 0건 달성}",
                       "keyConcepts":  [
                                           "1. 실제 시험과 동일한 조건(타이머 100분, 시험지 양식, 공학용 계산기)으로 실전 모의고사 진행",
                                           "2. 배점 높은 계산문제(6~8점) 우선 풀이 후 단답/서술형(4~5점) 풀이하는 시간 배분 전략",
                                           "3. 검산 시간 최소 15분 확보 훈련"
                                       ],
                       "pitfall":  "⚠️ 실전 팁: 풀이과정을 채점관이 읽기 쉽게 단계별(1단계: 공식, 2단계: 수치 대입, 3단계: 답+단위)로 깔끔히 기술!",
                       "quiz":  {
                                    "q":  "실기 시험 채점 시 감점되지 않는 올바른 최종 답안 작성 양식은?",
                                    "a":  "계산 공식 기재 ➔ 수치 대입 과정 기재 ➔ 최종 결과값(소수점 3째자리 반올림하여 2째자리까지) + [단위]",
                                    "sol":  "단위가 누락되거나 틀리면 계산 결과가 맞아도 0점 처리될 수 있으므로 단위 표기는 생명입니다!"
                                }
                   },
    "2026-11-02":  {
                       "dayNum":  35,
                       "date":  "2026-11-02",
                       "dday":  "D-5",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "23년",
                       "volume":  "2023~2024년 실전 모의 (74장)",
                       "topic":  "[3사이클 D-5 실전 모의고사 2회] 2023~2024년 기출 기반 실전 100분 모의고사 \u0026 서술형 키워드 최종 점검",
                       "goal":  "[실전 모의 2회] 2023~2024년 최신 기출 14문제 실전 모의고사. 최신 출제 트렌드 키워드 적중 훈련.",
                       "keyFormula":  "\\text{최신 기출 2회 모의고사: 목표 80점 이상 돌파 \u0026 신경향 신출 문제 적응력 극대화}",
                       "keyConcepts":  [
                                           "1. 최신 2개년 기출 기반 실전 모의고사 진행: 최신 유형 적응도 100% 확인",
                                           "2. 서술형 문제의 핵심 채점 키워드(예: 아담슨 조인트, 캐리오버, 역화, 포밍) 누락 여부 정밀 채점",
                                           "3. 모의고사 채점 후 틀린 문제 즉시 오답노트에 추가 및 취약점 보완"
                                       ],
                       "pitfall":  "⚠️ 서술형 팁: 문장을 길게 쓰지 말고 핵심 명사 키워드를 불릿 포인트로 명확히 나열할 것!",
                       "quiz":  {
                                    "q":  "보일러 통풍 방식 3가지와 특징은?",
                                    "a":  "1) 자연통풍(굴뚝 통풍력), 2) 압입통풍(FDF로 연소실에 정압 송풍), 3) 흡입통풍(IDF로 연소실 부압 흡입), 4) 평형통풍(FDF+IDF 조합)",
                                    "sol":  "압입통풍은 연소실 내가 정압이므로 가스 누설 위험이 있어 기밀 유지가 필수적임"
                                }
                   },
    "2026-11-03":  {
                       "dayNum":  36,
                       "date":  "2026-11-03",
                       "dday":  "D-4",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "공식정리",
                       "volume":  "연소·보일러 효율·열정산 12대 공식",
                       "topic":  "[3사이클 D-4 킬러 계산 25선 파트 1] 연소공학·보일러 효율·열정산 12대 핵심 공식 백지 암기 테스트",
                       "goal":  "연소공학 및 보일러 열정산 파트 12대 킬러 계산 공식 A4 백지 인출 테스트. 공식, 기호 정의, 단위 완벽 암기.",
                       "keyFormula":  "\\text{백지 테스트 12선: } \\eta, m, A_0, V_0, G_w, H_l, W_e, BHP, B, Q_{rec}, q_g, q_{latent}",
                       "keyConcepts":  [
                                           "1. 공식 1~4: 보일러 열효율(정압시험법/입출열법), 상당증발량(We), 보일러마력(BHP), 계수환산",
                                           "2. 공식 5~8: 이론공기량(Ao), 공기비(m), 실제습배기가스량(Gw), 연료 발열량 듀롱식(Hl)",
                                           "3. 공식 9~12: 배기가스 현열/잠열 손실열량, 연속 블로우다운율(B), 절탄기 연료절감율(S)"
                                       ],
                       "pitfall":  "⚠️ 백지 테스트 원칙: 공식을 보고 쓰지 말고, 주제어만 보고 백지에 공식과 유도 과정을 100% 자력으로 쓸 것!",
                       "quiz":  {
                                    "q":  "연소공학 12대 공식 중 \u0027이론공기량(Ao)\u0027과 \u0027실제습배기가스량(Gw)\u0027 공식을 백지에 작성하시오.",
                                    "a":  "A0 = 8.89C + 26.67(H - O/8) + 3.33S, Gw = Gow + (m - 1)Ao",
                                    "sol":  "이 두 공식은 연소 계산의 알파이자 오메가입니다."
                                }
                   },
    "2026-11-04":  {
                       "dayNum":  37,
                       "date":  "2026-11-04",
                       "dday":  "D-3",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "공식정리",
                       "volume":  "전열·열교환기·통풍·펌프 13대 공식",
                       "topic":  "[3사이클 D-3 킬러 계산 25선 파트 2] 전열·열교환기·통풍·펌프동력 13대 핵심 공식 백지 암기 테스트",
                       "goal":  "전열공학, 열교환기, 통풍력, 펌프동력 파트 13대 킬러 계산 공식 백지 인출 테스트. 계산문제 완벽 마스터 선언!",
                       "keyFormula":  "\\text{백지 테스트 13선: } \\Delta T_m, K, h_L, P_m, r_{cr}, W_s, \\Delta L, Z, \\text{상사법칙 } (Q, H, P), COP, Ex",
                       "keyConcepts":  [
                                           "1. 공식 13~16: 대수평균온도차(LMTD), 열통과율(K), 평판/원통 열전도, 임계보온반경(rcr)",
                                           "2. 공식 17~20: 달시 관마찰손실수두(hL), 펌프 전양정 및 모터소요동력(Pm), 안전밸브 분출면적(A)",
                                           "3. 공식 21~25: 배관 열팽창량(ΔL), 굴뚝 이론통풍력(Z), 송풍기 상사법칙(Q, H, P), 히트펌프 COP, 엑서지"
                                       ],
                       "pitfall":  "⚠️ 25대 공식 완성: 14개년 기출의 모든 계산문제가 이 25개 공식 범주 안에서 100% 해결됩니다!",
                       "quiz":  {
                                    "q":  "송풍기 상사법칙에서 회전수(N)와 임펠러 직경(D)이 동시 변화할 때 동력비 공식은?",
                                    "a":  "P2 / P1 = (N2 / N1)³ × (D2 / D1)⁵",
                                    "sol":  "회전수의 3승과 직경의 5승에 비례합니다."
                                }
                   },
    "2026-11-05":  {
                       "dayNum":  38,
                       "date":  "2026-11-05",
                       "dday":  "D-2",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "1~2사이클 누적 오답노트 전권",
                       "topic":  "[3사이클 D-2 오답노트 최종 회독] 1~2사이클에서 누적된 나만의 오답노트 전 항목 1회독 정독",
                       "goal":  "1~2사이클 동안 누적된 나만의 오답노트 전 항목(계산+서술형) 총정독. 실수 포인트 100% 머릿속 각인.",
                       "keyFormula":  "\\text{내가 틀렸던 문제가 시험에 나온다! 오답노트 전 항목 정답률 100\\% 확인}",
                       "keyConcepts":  [
                                           "1. 38일간 누적된 나만의 오답노트 전 항목을 처음부터 끝까지 꼼꼼히 1회독",
                                           "2. 과거에 실수했던 부호, 단위, 공식 적용 오류 포인트를 형광펜으로 재확인",
                                           "3. 자신감 충전: 이미 14개년 기출을 3사이클 완벽히 정복했음을 스스로 신뢰"
                                       ],
                       "pitfall":  "⚠️ 컨디션 관리: 오늘부터는 밤샘 금지, 실기 시험 시작 시각(09:00)에 뇌가 최적 활성화되도록 수면 조절!",
                       "quiz":  {
                                    "q":  "실기 시험장에서 문제를 받았을 때 가장 먼저 해야 할 3가지 행동은?",
                                    "a":  "1) 파본 여부 및 총 문제 수(보통 14~15문항) 확인, 2) 계산문제와 서술형 문제 배점 스캔, 3) 자신 있는 문제부터 침착하게 순서 배분",
                                    "sol":  "첫 5분의 침착함이 전체 100분의 성패를 좌우합니다."
                                }
                   },
    "2026-11-06":  {
                       "dayNum":  39,
                       "date":  "2026-11-06",
                       "dday":  "D-1",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "시험장 지참 파이널 요약집",
                       "topic":  "[3사이클 D-1 전 범위 마인드컨트롤] 공학용 계산기 리셋 및 사용법 점검, 신분증·수험표 준비, 14개년 빈출 공식 최종 눈도장",
                       "goal":  "시험 전날 완벽 준비: 공학용 계산기 기종 리셋 확인, 수험표·신분증·필기구 챙기기. 25대 킬러 공식 눈도장 및 가벼운 휴식.",
                       "keyFormula":  "\\text{D-1 합격 확정: 모든 준비는 끝났다. 내일 시험장에서 최고의 실력을 발휘한다!}",
                       "keyConcepts":  [
                                           "1. 시험장 필수 준비물: 신분증(주민등록증/운전면허증), 수험표, 공학용 계산기(규정 기종), 검정색 볼펜 2자루, 수정테이프",
                                           "2. 공학용 계산기 리셋(Reset) 방법 숙지: 시험관 앞에서 초기화 요청 시 당황하지 않고 초기화 수행",
                                           "3. 25대 킬러 계산 공식 바이블을 가볍게 1회독하며 눈도장 찍고 22시 이전 취침"
                                       ],
                       "pitfall":  "⚠️ 지참물 주의: 신분증 미지참 시 시험 응시 자체가 불가하여 퇴실 조치되므로 전날 가방에 미리 넣어둘 것!",
                       "quiz":  {
                                    "q":  "공학용 계산기 답안 표기 시 규정(유효숫자 및 반올림 원칙)은?",
                                    "a":  "소수점 이하 셋째자리에서 반올림하여 둘째자리까지 표기 (단, 문제에서 별도 요구사항이 있을 경우 해당 기준 우선)",
                                    "sol":  "예: 12.3456 -\u003e 12.35, 12.3000 -\u003e 12.3 또는 12.30"
                                }
                   },
    "2026-11-07":  {
                       "dayNum":  40,
                       "date":  "2026-11-07",
                       "dday":  "D-Day",
                       "phase":  3,
                       "phaseName":  "3사이클: 3회독 실전 모의고사 \u0026 킬러 계산 25제 완전 백지 복습 (11/01 ~ 11/07)",
                       "folder":  "오답노트 \u0026 요약",
                       "volume":  "실기 시험 당일 실전",
                       "topic":  "[★ D-Day 시험 당일] 에너지관리기사 실기 시험 (09:00)! 계산문제 전원 정답 \u0026 영광의 최종 합격!",
                       "goal":  "[★ 2026년 제3회 에너지관리기사 실기 시험 본시험] 08:30 입실 완료, 09:00 시험 개시. 14개년 기출 3사이클 완벽 마스터의 결실!",
                       "keyFormula":  "\\text{합격 점수 85점 이상 쟁취! 국가기술자격 에너지관리기사 최종 합격!}",
                       "keyConcepts":  [
                                           "1. 08:30 시험실 입실 완료 및 마음 가다듬기",
                                           "2. 14개년(2012~2025년) 기출문제를 3사이클 완주한 나 자신을 믿고 침착하게 문제 풀이",
                                           "3. 계산문제는 공식 정확히 쓰고 단위 빠짐없이 기재, 서술형은 키워드 중심으로 명확히 작성"
                                       ],
                       "pitfall":  "⚠️ 마지막 순간까지: 조기 퇴실하지 말고 시험 종료 종이 울릴 때까지 3번 이상 전 문항 재검산할 것!",
                       "quiz":  {
                                    "q":  "오늘 시험을 마친 후 나에게 전하는 한 마디는?",
                                    "a":  "40일간 12년부터 25년까지 14개년 기출을 3사이클 완주하며 계산문제를 완벽히 정복했다. 당당히 합격이다!",
                                    "sol":  "수고하셨습니다! 합격을 진심으로 축하합니다!"
                                }
                   }
};

const INITIAL_ENERGY_FORMULAS = [
  {
    id: "form-1",
    category: "보일러 열정산 및 효율",
    name: "보일러 입출열 효율 (정압 시험법)",
    formula: "\\eta = \\frac{G_a (h_2 - h_1)}{G_f \\times H_l} \\times 100 \\; [\\%]",
    description: "Ga: 실제증발량(kg/h), h2: 발생증기 엔탈피(kJ/kg 또는 kcal/kg), h1: 급수 엔탈피, Gf: 연료소비량(kg/h), Hl: 연료 저위발열량(kJ/kg 또는 kcal/kg)"
  },
  {
    id: "form-2",
    category: "보일러 성능 지표",
    name: "상당증발량 (환산증발량, Ge)",
    formula: "G_e = \\frac{G_a (h_2 - h_1)}{539} = \\frac{G_a (h_2 - h_1)}{2257} \\; [kg/h]",
    description: "기준조건: 100℃ 포화수에서 100℃ 포화증기로 증발할 때의 잠열(539 kcal/kg 또는 2257 kJ/kg)로 환산한 증발량"
  },
  {
    id: "form-3",
    category: "연소계산",
    name: "기체/액체 연료의 이론산소량 및 이론공기량(A0)",
    formula: "A_0 = \\frac{O_0}{0.21} = \\frac{22.414}{0.21} \\left( C + \\frac{H - O/8}{4} + \\frac{S}{32} \\right) \\; [Nm^3/kg]",
    description: "공기 중 산소 부피 분율을 21%(0.21)로 계산. 실제공기량 A = m · A0 (m = 공기비)"
  },
  {
    id: "form-4",
    category: "통풍 및 통풍력",
    name: "굴뚝의 이론 통풍력 (Z)",
    formula: "Z = 353 \\cdot H \\left( \\frac{1}{T_a} - \\frac{1}{T_g} \\right) = H (\\gamma_a - \\gamma_g) \\; [mmH_2O]",
    description: "H: 굴뚝 높이(m), Ta: 외기 절대온도(273+ta K), Tg: 배기가스 절대온도(273+tg K), γ: 비중량(kg/m³)"
  },
  {
    id: "form-5",
    category: "열전달 및 단열",
    name: "원통관/평면벽 열관류율(K) 및 열손실량(Q)",
    formula: "Q = K \\cdot A \\cdot \\Delta T_m = \\frac{\\Delta T}{\\frac{1}{\\alpha_1} + \\sum \\frac{L_i}{\\lambda_i} + \\frac{1}{\\alpha_2}} \\; [W \\text{ or } kcal/h]",
    description: "α1, α2: 내외 표면 열전달율, Li: 재료 두께, λi: 재료 열전도율"
  }
];

// 4. 에너지관리기사 실기 기출 & 계산 풀이 예제 (사진 첨부 및 AI 해설 기능 연동)
const INITIAL_ENERGY_QUESTIONS = [
  {
    "id": "ex-ch1-1",
    "category": "practice",
    "chapter": "Ch.1 보일러 열정산 및 효율",
    "year": null,
    "title": "보일러 열효율 및 상당증발량 계산",
    "topic": "열정산 / 효율",
    "examOrigin": "연습문제 Ch.1 (보일러 열정산 대표유형 10점)",
    "problemText": "어느 보일러에서 시간당 250kg의 중유를 연소하여 압력 1.0 MPa(포화온도 179.9℃), 발생증기량 3,200 kg/h의 포화증기를 발생시키고 있다.\n급수온도는 25℃이고, 중유의 저위발열량은 41,860 kJ/kg이다.\n(단, 1.0 MPa 포화증기 엔탈피는 2,778 kJ/kg이고, 25℃ 물의 엔탈피는 105 kJ/kg, 기준 증발잠열은 2,257 kJ/kg이다.)\n1) 보일러의 열효율(%)을 구하시오.\n2) 보일러의 상당증발량(kg/h)을 구하시오.",
    "finalAnswer": "1) 열효율: 81.73 %,   2) 상당증발량: 3,789.81 kg/h",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 제원 정리 및 단위 확인",
        "content": "연료소비량 $G_f = 250 \\; \\text{kg/h}$, 실제증발량 $G_a = 3,200 \\; \\text{kg/h}$\n발생증기 엔탈피 $h_2 = 2,778 \\; \\text{kJ/kg}$, 급수 엔탈피 $h_1 = 105 \\; \\text{kJ/kg}$\n연료 저위발열량 $H_l = 41,860 \\; \\text{kJ/kg}$, 기준 잠열 $r = 2,257 \\; \\text{kJ/kg}$"
      },
      {
        "stepTitle": "2단계: 보일러 열효율(η) 계산",
        "content": "$$\\eta = \\frac{G_a (h_2 - h_1)}{G_f \\times H_l} \\times 100 = \\frac{3,200 \\times (2,778 - 105)}{250 \\times 41,860} \\times 100 = \\frac{8,553,600}{10,465,000} \\times 100 \\approx 81.734 \\; [\\%]$$\n**정답: 81.73 %**"
      },
      {
        "stepTitle": "3단계: 상당증발량(Ge) 계산",
        "content": "$$G_e = \\frac{G_a (h_2 - h_1)}{2,257} = \\frac{3,200 \\times (2,778 - 105)}{2,257} = \\frac{8,553,600}{2,257} \\approx 3,789.809 \\; [\\text{kg/h}]$$\n**정답: 3,789.81 kg/h**"
      }
    ],
    "keyPoints": "잠열 기준이 kJ/kg일 때는 분모에 2,257을 대입하고, kcal/kg일 때는 539를 대입합니다.",
    "userMemo": "급수엔탈피 차감 필수!",
    "isReviewed": true
  },
  {
    "id": "ex-ch1-2",
    "category": "practice",
    "chapter": "Ch.1 보일러 열정산 및 효율",
    "year": null,
    "title": "보일러 마력(BHP) 및 전열면적 증발율 계산",
    "topic": "보일러 용량",
    "examOrigin": "연습문제 Ch.1 (용량 지표 6점)",
    "problemText": "전열면적 80 m²인 수관보일러의 시간당 실제 증발량이 4,500 kg/h이다.\n발생증기 엔탈피가 2,750 kJ/kg, 급수 엔탈피가 85 kJ/kg일 때,\n1) 보일러 마력(BHP)을 구하시오. (단, 1 BHP = 15.65 kg/h 상당증발량)\n2) 전열면적 증발율(kg/m²·h)을 구하시오.",
    "finalAnswer": "1) 보일러 마력: 339.49 BHP,   2) 전열면적 증발율: 56.25 kg/m²·h",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 상당증발량(Ge) 계산",
        "content": "$$G_e = \\frac{G_a(h_2 - h_1)}{2,257} = \\frac{4,500 \\times (2,750 - 85)}{2,257} = \\frac{11,992,500}{2,257} \\approx 5,313.47 \\; [\\text{kg/h}]$$"
      },
      {
        "stepTitle": "2단계: 보일러 마력(BHP) 산출",
        "content": "$$\\text{BHP} = \\frac{G_e}{15.65} = \\frac{5,313.47}{15.65} \\approx 339.519 \\; [\\text{BHP}]$$\n**정답: 339.49 BHP (또는 339.52 BHP)**"
      },
      {
        "stepTitle": "3단계: 전열면적 증발율(kg/m²·h) 산출",
        "content": "$$\\text{전열면적 증발율} = \\frac{G_a}{H} = \\frac{4,500}{80} = 56.25 \\; [\\text{kg/m}^2\\cdot\\text{h}]$$\n**정답: 56.25 kg/m²·h**"
      }
    ],
    "keyPoints": "보일러 마력은 반드시 상당증발량(Ge)을 기준으로 15.65로 나누어야 합니다.",
    "userMemo": "전열면적 증발율 = Ga / 전열면적(H)",
    "isReviewed": false
  },
  {
    "id": "ex-ch2-1",
    "category": "practice",
    "chapter": "Ch.2 연료 및 연소공학",
    "year": null,
    "title": "중유 연소 시 이론산소량, 이론공기량, 실제공기량 계산",
    "topic": "연소공학",
    "examOrigin": "연습문제 Ch.2 (연소 계산 필수 8점)",
    "problemText": "중량 조성 탄소(C) 85%, 수소(H) 12%, 황(S) 2%, 산소(O) 1%인 액체 연료를 연소시킨다.\n공기비 m = 1.25 일 때 다음을 구하시오.\n1) 이론 산소량 Oo (Nm³/kg)\n2) 이론 공기량 Ao (Nm³/kg)\n3) 실제 공기량 A (Nm³/kg)",
    "finalAnswer": "1) Oo = 1.93 Nm³/kg,   2) Ao = 9.18 Nm³/kg,   3) A = 11.48 Nm³/kg",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 이론 산소량(Oo) 산출",
        "content": "$$O_o = 1.867C + 5.6(H - \\frac{O}{8}) + 0.7S \\; [\\text{Nm}^3/\\text{kg}]$$\n$$O_o = 1.867(0.85) + 5.6(0.12 - \\frac{0.01}{8}) + 0.7(0.02)$$\n$$O_o = 1.5870 + 5.6(0.11875) + 0.014 = 1.5870 + 0.665 + 0.014 = 2.266 \\; [\\text{Nm}^3/\\text{kg}]$$"
      },
      {
        "stepTitle": "2단계: 이론 공기량(Ao) 산출",
        "content": "$$A_o = \\frac{O_o}{0.21} = \\frac{2.266}{0.21} \\approx 10.79 \\; [\\text{Nm}^3/\\text{kg}]$$"
      },
      {
        "stepTitle": "3단계: 실제 공기량(A) 산출",
        "content": "$$A = m \\times A_o = 1.25 \\times 10.79 \\approx 13.49 \\; [\\text{Nm}^3/\\text{kg}]$$"
      }
    ],
    "keyPoints": "산소 질량 분율 21%(체적)으로 나누어 이론공기량을 구합니다.",
    "userMemo": "공기비 m = A / Ao",
    "isReviewed": false
  },
  {
    "id": "ex-ch2-2",
    "category": "practice",
    "chapter": "Ch.2 연료 및 연소공학",
    "year": null,
    "title": "배기가스 분석치에 의한 공기비(m) 역산 공식",
    "topic": "배기가스 분석",
    "examOrigin": "연습문제 Ch.2 (오르자트 분석 6점)",
    "problemText": "보일러 연도 배기가스를 오르자트 분석기로 측정한 결과 건배기가스 중 CO2 = 12.5%, O2 = 4.5%, CO = 0.5%, N2 = 82.5% 이었다.\n배기가스 성분치에 의한 공기비(m)를 구하시오.",
    "finalAnswer": "공기비 m = 1.26",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 배기가스 분석치를 이용한 공기비(m) 공식",
        "content": "$$m = \\frac{\\text{N}_2}{\\text{N}_2 - 3.76(\\text{O}_2 - 0.5\\text{CO})}$$"
      },
      {
        "stepTitle": "2단계: 수치 대입 및 계산",
        "content": "$$m = \\frac{82.5}{82.5 - 3.76(4.5 - 0.5 \\times 0.5)} = \\frac{82.5}{82.5 - 3.76 \\times 4.25}$$\n$$m = \\frac{82.5}{82.5 - 15.98} = \\frac{82.5}{66.52} \\approx 1.2402$$\n(간이식 $m = \\frac{21}{21 - O_2} = \\frac{21}{16.5} \\approx 1.27$)\n**정밀식 정답: 1.24 (간이식 적용 시 1.27)**"
      }
    ],
    "keyPoints": "불완전연소(CO 발생)가 있을 때는 반드시 3.76(O2 - 0.5CO) 보정식을 적용해야 정확한 배점을 받습니다.",
    "userMemo": "CO 성분 감안 필수!",
    "isReviewed": false
  },
  {
    "id": "ex-ch3-1",
    "category": "practice",
    "chapter": "Ch.3 증기 및 열역학 사이클",
    "year": null,
    "title": "감압밸브 교축과정(Joule-Thomson) 후 증기 건도 계산",
    "topic": "교축 과정",
    "examOrigin": "연습문제 Ch.3 (등엔탈피 팽창 6점)",
    "problemText": "압력 1.6 MPa, 건도 0.96인 습포화증기가 감압밸브를 통과하여 압력 0.2 MPa로 단열 교축 팽창하였다.\n팽창 후 0.2 MPa 상태에서의 증기 건도(x₂)를 구하시오.\n(단, 1.6 MPa에서 포화수 엔탈피 h'₁ = 858 kJ/kg, 포화증기 엔탈피 h\"₁ = 2,793 kJ/kg;\n0.2 MPa에서 포화수 엔탈피 h'₂ = 505 kJ/kg, 포화증기 엔탈피 h\"₂ = 2,707 kJ/kg이다.)",
    "finalAnswer": "교축 후 건도 x₂ = 0.98",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 교축 전 엔탈피(h₁) 계산",
        "content": "$$h_1 = h'_1 + x_1(h''_1 - h'_1) = 858 + 0.96 \\times (2,793 - 858) = 858 + 0.96 \\times 1,935 = 858 + 1,857.6 = 2,715.6 \\; [\\text{kJ/kg}]$$"
      },
      {
        "stepTitle": "2단계: 교축 과정의 등엔탈피 성질 적용 (h₂ = h₁)",
        "content": "단열 교축과정에서는 외부와 열교환 및 한 일이 없으므로 엔탈피가 보존됩니다.\n$$h_2 = h_1 = 2,715.6 \\; [\\text{kJ/kg}]$$"
      },
      {
        "stepTitle": "3단계: 감압 후 건도(x₂) 산출",
        "content": "$$h_2 = h'_2 + x_2(h''_2 - h'_2)$$\n$$2,715.6 = 505 + x_2(2,707 - 505) = 505 + 2,202 x_2$$\n$$x_2 = \\frac{2,715.6 - 505}{2,202} = \\frac{2,210.6}{2,202} \\approx 1.0039$$\n(엔탈피가 포화증기 엔탈피보다 크므로 미세 과열증기 상태 또는 $x_2 \\approx 1.0$)"
      }
    ],
    "keyPoints": "교축 과정(Throttling) = 등엔탈피 과정(h1 = h2)을 즉각 떠올려야 합니다.",
    "userMemo": "교축 팽창은 h1 = h2 !",
    "isReviewed": false
  },
  {
    "id": "ex-ch4-1",
    "category": "practice",
    "chapter": "Ch.4 전열공학 및 단열/보온",
    "year": null,
    "title": "원관 보온 시 열손실이 최대가 되는 임계단열반경(rc) 계산",
    "topic": "임계단열반경",
    "examOrigin": "연습문제 Ch.4 (단열 계산 단골 5점)",
    "problemText": "외경이 40mm인 증기 배관에 열전도율 k = 0.08 W/m·K인 보온재를 피복하고자 한다.\n외기와의 표면 열전달율이 h = 10 W/m²·K일 때,\n1) 임계단열반경 rc (mm)를 구하시오.\n2) 보온재 두께가 임계단열반경보다 얇을 때 열손실량 변화를 설명하시오.",
    "finalAnswer": "1) 임계단열반경 rc = 8 mm,   2) 초기 피복 시 열손실량이 증가하다가 rc 초과 시 감소함",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 임계단열반경 공식",
        "content": "$$r_c = \\frac{k}{h} = \\frac{0.08 \\; [\\text{W/m}\\cdot\\text{K}]}{10 \\; [\\text{W/m}^2\\cdot\\text{K}]} = 0.008 \\; [\\text{m}] = 8 \\; [\\text{mm}]$$"
      },
      {
        "stepTitle": "2단계: 배관 반지름과의 관계 분석 및 서술",
        "content": "현재 배관의 반지름 $r_1 = 40 / 2 = 20 \\; \\text{mm}$ 입니다.\n임계반경 $r_c = 8 \\; \\text{mm}$ 가 배관 외경 반지름(20mm)보다 작으므로, 보온재를 피복하는 즉시 열손실량은 감소(보온 효과 발생)합니다.\n(만약 $r_1 < r_c$ 라면 단열재 피복 시 외표면적 증가 효과가 전열저항 증가보다 커서 열손실이 증가하게 됩니다.)"
      }
    ],
    "keyPoints": "원관 임계반경 공식 rc = k / h (구관일 때는 2k / h)를 정확히 구별해야 합니다.",
    "userMemo": "원관 rc = k/h, 구관 rc = 2k/h",
    "isReviewed": true
  },
  {
    "id": "ex-ch5-1",
    "category": "practice",
    "chapter": "Ch.5 통풍 및 집진설비",
    "year": null,
    "title": "굴뚝의 이론 통풍력 및 배기가스 밀도 계산",
    "topic": "통풍장치",
    "examOrigin": "연습문제 Ch.5 (통풍력 6점)",
    "problemText": "높이 45m의 굴뚝에서 외기 온도가 20℃이고, 배기가스의 평균 온도가 240℃이다.\n표준상태(0℃, 1기압)에서 공기의 밀도는 1.293 kg/Nm³, 배기가스의 밀도는 1.340 kg/Nm³일 때, 굴뚝의 이론 통풍력(mmH2O)을 구하시오.",
    "finalAnswer": "이론 통풍력 Z = 22.12 mmH2O",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 작동온도 상태의 공기 및 가스 밀도",
        "content": "$$\\gamma_a = 1.293 \\times \\frac{273}{273 + 20} = 1.2047 \\; [\\text{kg/m}^3]$$\n$$\\gamma_g = 1.340 \\times \\frac{273}{273 + 240} = 0.7131 \\; [\\text{kg/m}^3]$$"
      },
      {
        "stepTitle": "2단계: 이론 통풍력(Z) 계산",
        "content": "$$Z = H(\\gamma_a - \\gamma_g) = 45 \\times (1.2047 - 0.7131) = 45 \\times 0.4916 \\approx 22.12 \\; [\\text{mmH}_2\\text{O}]$$\n**정답: 22.12 mmH2O**"
      }
    ],
    "keyPoints": "밀도가 직접 주어졌으므로 간이공식(353)이 아닌 밀도차 공식 Z = H(γa - γg)를 사용합니다.",
    "userMemo": "밀도차 공식 필수 적용!",
    "isReviewed": false
  },
  {
    "id": "ex-ch6-1",
    "category": "practice",
    "chapter": "Ch.6 급수처리 및 보일러 보전",
    "year": null,
    "title": "보일러 연속 블로우다운(Blowdown)율 계산",
    "topic": "급수처리",
    "examOrigin": "연습문제 Ch.6 (수질관리 5점)",
    "problemText": "시간당 증발량 10 ton/h인 보일러에서 급수의 염화물 이온 농도가 15 ppm이고, 보일러수의 허용 염화물 이온 농도가 300 ppm이다.\n1) 보일러의 분출율(Blowdown Rate, %)을 구하시오.\n2) 시간당 분출량(kg/h)을 구하시오.",
    "finalAnswer": "1) 분출율: 5.26 %,   2) 분출량: 526.32 kg/h",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 분출율(B) 공식 적용",
        "content": "$$B = \\frac{S_f}{S_b - S_f} \\times 100 \\; [\\%]$$\n여기서 $S_f = 15 \\; \\text{ppm}$, $S_b = 300 \\; \\text{ppm}$ 이므로,\n$$B = \\frac{15}{300 - 15} \\times 100 = \\frac{15}{285} \\times 100 \\approx 5.263 \\; [\\%]$$\n**정답: 5.26 %**"
      },
      {
        "stepTitle": "2단계: 시간당 분출량(W_b) 계산",
        "content": "$$W_b = G_a \\times \\frac{B}{100} = 10,000 \\times 0.05263 \\approx 526.32 \\; [\\text{kg/h}]$$\n**정답: 526.32 kg/h**"
      }
    ],
    "keyPoints": "증발량 기준 분출율은 분모가 (Sb - Sf)이고, 급수량 기준일 때는 Sb입니다. 통상 증발량 기준 공식을 적용합니다.",
    "userMemo": "B = Sf / (Sb - Sf) * 100",
    "isReviewed": false
  },
  {
    "id": "ex-ch7-1",
    "category": "practice",
    "chapter": "Ch.7 자동제어 및 폐열회수",
    "year": null,
    "title": "보일러 절탄기(Economizer) 설치 시 연료절감율 계산",
    "topic": "폐열회수",
    "examOrigin": "연습문제 Ch.7 (에너지절감 6점)",
    "problemText": "보일러 배기가스 폐열을 회수하기 위해 절탄기를 설치하여 급수 온도를 25℃에서 85℃로 예열하였다.\n증기 엔탈피가 2,750 kJ/kg, 급수 엔탈피가 105 kJ/kg(25℃), 예열 후 급수 엔탈피가 356 kJ/kg(85℃)일 때,\n절탄기 설치에 따른 이론적 연료절감율(%)을 구하시오.",
    "finalAnswer": "연료절감율 S = 9.49 %",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 절탄기 설치 전 흡수열량(q₁) 계산",
        "content": "$$q_1 = h_2 - h_1 = 2,750 - 105 = 2,645 \\; [\\text{kJ/kg}]$$"
      },
      {
        "stepTitle": "2단계: 절탄기에서 회수한 급수열량(Δq) 계산",
        "content": "$$\\Delta q = h'_1 - h_1 = 356 - 105 = 251 \\; [\\text{kJ/kg}]$$"
      },
      {
        "stepTitle": "3단계: 연료 절감율(S) 산출",
        "content": "$$S = \\frac{\\Delta q}{q_1} \\times 100 = \\frac{251}{2,645} \\times 100 \\approx 9.4896 \\; [\\%]$$\n**정답: 9.49 %**"
      }
    ],
    "keyPoints": "급수온도가 약 6℃ 상승할 때마다 보일러 연료는 약 1% 절감되는 경험치와 부합하는지 검산합니다. (60℃ 상승 시 약 10% 절감)",
    "userMemo": "연료절감율 = 회수열량 / 초기소요열량",
    "isReviewed": true
  },
  {
    "id": "exam-2025-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2025년",
    "title": "2025년 최신 기출: 콘덴싱 보일러 잠열 회수율 및 연소효율",
    "topic": "최신 신유형",
    "examOrigin": "2025년 실기 기출 (신유형 개정 8점)",
    "problemText": "LNG를 연료로 사용하는 콘덴싱 보일러에서 저위발열량 43,500 kJ/Nm³, 고위발열량 48,200 kJ/Nm³이다.\n배기가스 중 수증기 응축 잠열의 85%를 회수할 때,\n1) 회수 가능한 잠열량(kJ/Nm³)을 구하시오.\n2) 저위발열량 기준 열효율 향상분(%)을 구하시오.",
    "finalAnswer": "1) 회수 잠열량: 3,995 kJ/Nm³,   2) 열효율 향상분: 9.18 %",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 배기가스 총 수증기 잠열량 산정",
        "content": "$$\\text{총 잠열} = H_h - H_l = 48,200 - 43,500 = 4,700 \\; [\\text{kJ/Nm}^3]$$"
      },
      {
        "stepTitle": "2단계: 회수 잠열량 계산 (회수율 85%)",
        "content": "$$Q_{\\text{rec}} = 4,700 \\times 0.85 = 3,995 \\; [\\text{kJ/Nm}^3]$$\n**정답: 3,995 kJ/Nm³**"
      },
      {
        "stepTitle": "3단계: 저위발열량 기준 효율 향상분 산출",
        "content": "$$\\Delta \\eta = \\frac{Q_{\\text{rec}}}{H_l} \\times 100 = \\frac{3,995}{43,500} \\times 100 \\approx 9.1839 \\; [\\%]$$\n**정답: 9.18 %**"
      }
    ],
    "keyPoints": "고위발열량과 저위발열량의 차이가 바로 연소생성 수증기의 잠열입니다.",
    "userMemo": "Hh - Hl = 잠열!",
    "isReviewed": false
  },
  {
    "id": "exam-2024-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2024년",
    "title": "2024년 기출: 오르자트 분석기 배기 산소농도에 의한 공기비 산정",
    "topic": "오르자트 분석",
    "examOrigin": "2024년 실기 기출 1회 (6점)",
    "problemText": "중유를 연소하는 보일러 연도에서 배기가스 중 잔류 산소 농도(O₂)가 4.2%로 측정되었다.\n완전 연소로 가정할 때 공기비(m)를 간이식으로 구하시오.",
    "finalAnswer": "공기비 m = 1.25",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 간이 공기비 공식 적용",
        "content": "$$m = \\frac{21}{21 - \\text{O}_2}$$"
      },
      {
        "stepTitle": "2단계: 수치 대입 및 계산",
        "content": "$$m = \\frac{21}{21 - 4.2} = \\frac{21}{16.8} = 1.25$$\n**정답: 1.25**"
      }
    ],
    "keyPoints": "배기가스 중 CO가 없거나 완전연소 조건일 때는 21 / (21 - O2) 간이식을 적용합니다.",
    "userMemo": "m = 21 / (21 - O2)",
    "isReviewed": true
  },
  {
    "id": "exam-2023-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2023년",
    "title": "2023년 기출: RTO 축열식 연소설비 열교환효율 계산",
    "topic": "폐열회수 RTO",
    "examOrigin": "2023년 실기 기출 2회 (6점)",
    "problemText": "VOC 처리용 축열식 소각로(RTO)에서 인입 가스 온도 30℃, 연소실 내부 온도 820℃, 최종 배출 가스 온도가 95℃이다.\nRTO의 축열 열교환 효율(%)을 구하시오.",
    "finalAnswer": "축열 효율 η = 91.77 %",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 열교환기 온도 효율 공식",
        "content": "$$\\eta = \\frac{T_{\\text{comb}} - T_{\\text{out}}}{T_{\\text{comb}} - T_{\\text{in}}} \\times 100 \\; [\\%]$$"
      },
      {
        "stepTitle": "2단계: 온도차 대입 및 계산",
        "content": "$$\\eta = \\frac{820 - 95}{820 - 30} \\times 100 = \\frac{725}{790} \\times 100 \\approx 91.772 \\; [\\%]$$\n**정답: 91.77 %**"
      }
    ],
    "keyPoints": "온도효율 = (연소실온도 - 출구온도) / (연소실온도 - 입구온도)",
    "userMemo": "RTO 온도효율 공식 암기!",
    "isReviewed": false
  },
  {
    "id": "exam-2022-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2022년",
    "title": "2022년 기출: 다층 평판벽의 총합 열관류율(K) 및 전열량",
    "topic": "열관류율",
    "examOrigin": "2022년 실기 기출 1회 (7점)",
    "problemText": "내화벽돌(두께 L₁=200mm, k₁=1.2 W/m·K)과 단열벽돌(두께 L₂=100mm, k₂=0.15 W/m·K)로 이루어진 가열로 벽면이 있다.\n내측 종합열전달율 h₁=30 W/m²·K, 외측 h₂=10 W/m²·K이고 노내 온도가 1,000℃, 외기 온도가 25℃일 때,\n1) 총합 열통과율(열관류율 K, W/m²·K)을 구하시오.\n2) 벽면 1m²당 열손실량(W/m²)을 구하시오.",
    "finalAnswer": "1) 열관류율 K = 1.03 W/m²·K,   2) 열손실량 q = 1,004.25 W/m²",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 총 전열저항(R) 산출",
        "content": "$$R = \\frac{1}{h_1} + \\frac{L_1}{k_1} + \\frac{L_2}{k_2} + \\frac{1}{h_2}$$\n$$R = \\frac{1}{30} + \\frac{0.2}{1.2} + \\frac{0.1}{0.15} + \\frac{1}{10} = 0.0333 + 0.1667 + 0.6667 + 0.1 = 0.9667 \\; [\\text{m}^2\\cdot\\text{K/W}]$$"
      },
      {
        "stepTitle": "2단계: 열관류율(K = 1/R) 계산",
        "content": "$$K = \\frac{1}{R} = \\frac{1}{0.9667} \\approx 1.0344 \\; [\\text{W/m}^2\\cdot\\text{K}]$$\n**정답: 1.03 W/m²·K**"
      },
      {
        "stepTitle": "3단계: 단위면적당 열손실량(q) 계산",
        "content": "$$q = K \\times \\Delta T = 1.0344 \\times (1,000 - 25) = 1.0344 \\times 975 \\approx 1,008.54 \\; [\\text{W/m}^2]$$\n(정밀 계산 시 1,008.54 W/m²)"
      }
    ],
    "keyPoints": "두께 단위를 반드시 미터(m)로 환산(200mm -> 0.2m)해야 합니다.",
    "userMemo": "R = 1/h1 + L/k + 1/h2",
    "isReviewed": false
  },
  {
    "id": "exam-2021-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2021년",
    "title": "2021년 기출: 대수평균온도차(LMTD)를 이용한 열교환기 전열면적",
    "topic": "대수평균온도차",
    "examOrigin": "2021년 실기 기출 2회 (8점)",
    "problemText": "향류형 열교환기에서 고온 유체가 180℃로 들어가 110℃로 나오고,\n저온 유체가 30℃로 들어가 90℃로 가열된다.\n총 전열량이 Q = 350 kW이고 총괄열전달계수가 U = 250 W/m²·K일 때,\n1) 대수평균온도차(LMTD, ℃)를 구하시오.\n2) 소요 전열면적(A, m²)을 구하시오.",
    "finalAnswer": "1) LMTD = 84.85 ℃,   2) 전열면적 A = 16.50 m²",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 양단 온도차 계산 (향류)",
        "content": "$$\\Delta T_1 = T_{h1} - T_{c2} = 180 - 90 = 90 \\; [^\\circ\\text{C}]$$\n$$\\Delta T_2 = T_{h2} - T_{c1} = 110 - 30 = 80 \\; [^\\circ\\text{C}]$$"
      },
      {
        "stepTitle": "2단계: 대수평균온도차(LMTD) 계산",
        "content": "$$\\Delta T_m = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)} = \\frac{90 - 80}{\\ln(90 / 80)} = \\frac{10}{\\ln(1.125)} = \\frac{10}{0.11778} \\approx 84.90 \\; [^\\circ\\text{C}]$$\n**정답: 84.90 ℃ (또는 84.85 ℃)**"
      },
      {
        "stepTitle": "3단계: 소요 전열면적(A) 산출",
        "content": "$$Q = U \\cdot A \\cdot \\Delta T_m \\implies A = \\frac{Q}{U \\cdot \\Delta T_m}$$\n$$A = \\frac{350,000 \\; [\\text{W}]}{250 \\times 84.90} = \\frac{350,000}{21,225} \\approx 16.4899 \\; [\\text{m}^2]$$\n**정답: 16.49 m²**"
      }
    ],
    "keyPoints": "kW 단위를 W로 환산(350 kW = 350,000 W)한 뒤 대입해야 합니다.",
    "userMemo": "LMTD = (ΔT1 - ΔT2) / ln(ΔT1/ΔT2)",
    "isReviewed": false
  },
  {
    "id": "exam-2020-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2020년",
    "title": "2020년 기출: 보일러 열정산 기준온도(대기온도)에 따른 입출열 산정",
    "topic": "보일러 열정산",
    "examOrigin": "2020년 실기 기출 1회 (7점)",
    "problemText": "중유 연소 보일러에서 기준온도 15℃, 연료유 온도 75℃(비열 c=2.0 kJ/kg·K), 연료소비량 180 kg/h이다.\n연료의 현열(顯熱)에 의한 시간당 입열량(kJ/h)을 구하시오.",
    "finalAnswer": "연료 현열 입열량 = 21,600 kJ/h",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 연료 현열 계산 공식",
        "content": "$$Q_f = G_f \\times c_f \\times (T_f - T_o) \\; [\\text{kJ/h}]$$"
      },
      {
        "stepTitle": "2단계: 수치 대입 및 계산",
        "content": "$$Q_f = 180 \\times 2.0 \\times (75 - 15) = 360 \\times 60 = 21,600 \\; [\\text{kJ/h}]$$\n**정답: 21,600 kJ/h**"
      }
    ],
    "keyPoints": "연료의 현열은 기준온도(To)를 차감한 온도차에 비열과 소비량을 곱합니다.",
    "userMemo": "현열 = G * c * ΔT",
    "isReviewed": false
  },
  {
    "id": "exam-2019-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2019년",
    "title": "2019년 기출: 송풍기 풍량 및 압력 변화에 따른 상사법칙 계산",
    "topic": "송풍기 상사법칙",
    "examOrigin": "2019년 실기 기출 2회 (6점)",
    "problemText": "회전수 N₁=1,200 rpm으로 운전 중인 송풍기의 풍량이 400 m³/min, 전압이 60 mmH2O, 축동력이 5.5 kW이다.\n회전수를 N₂=1,500 rpm으로 증가시킬 때,\n1) 변경된 풍량 Q₂ (m³/min)\n2) 변경된 축동력 P₂ (kW)를 구하시오.",
    "finalAnswer": "1) 풍량 Q₂ = 500 m³/min,   2) 축동력 P₂ = 10.74 kW",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 풍량 비례법칙 (회전수 1승 비례)",
        "content": "$$Q_2 = Q_1 \\times \\left(\\frac{N_2}{N_1}\\right) = 400 \\times \\left(\\frac{1,500}{1,200}\\right) = 400 \\times 1.25 = 500 \\; [\\text{m}^3/\\text{min}]$$\n**정답: 500 m³/min**"
      },
      {
        "stepTitle": "2단계: 동력 비례법칙 (회전수 3승 비례)",
        "content": "$$P_2 = P_1 \\times \\left(\\frac{N_2}{N_1}\\right)^3 = 5.5 \\times (1.25)^3 = 5.5 \\times 1.953125 \\approx 10.742 \\; [\\text{kW}]$$\n**정답: 10.74 kW**"
      }
    ],
    "keyPoints": "풍량은 1승, 압력은 2승, 축동력은 3승 비례하는 상사법칙을 철저히 암기해야 합니다.",
    "userMemo": "Q~N, P~N^2, L~N^3",
    "isReviewed": true
  },
  {
    "id": "exam-2018-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2018년",
    "title": "2018년 기출: 중유 황 연소 시 SO3 생성 및 황산로점 저온부식 방지책",
    "topic": "저온부식",
    "examOrigin": "2018년 실기 기출 1회 (6점 서술형)",
    "problemText": "보일러 공기예열기 및 절탄기 등 저온 전열면에서 발생하는 저온부식(Low Temperature Corrosion)에 대하여,\n1) 발생 원인 물질과 화학반응 메커니즘을 쓰시오.\n2) 현장에서의 대표 방지대책 3가지를 기술하시오.",
    "finalAnswer": "원인: SO3와 배기가스 수분의 결합(H2SO4 황산로점 접촉), 방지대책: 공기비 저감(저O2 연소), 배기가스 온도 유지, 내식성 재료 채택",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 발생 원인 및 메커니즘",
        "content": "연료 중 황(S)이 연소하여 $SO_2$가 되고, 산소 및 촉매작용으로 일부 $SO_3$가 생성됨.\n배기가스 중 수분($H_2O$)과 반응하여 황산 증기($H_2SO_4$)를 형성하며, 전열면 온도가 황산로점(약 130~150℃) 이하로 내려가면 황산이 응축되어 관벽을 급격히 부식시킴."
      },
      {
        "stepTitle": "2단계: 대표 방지 대책 3가지",
        "content": "1. **저O2 운전(공기비 저감)**: 과잉산소를 줄여 $SO_2 \\to SO_3$ 산화 억제\n2. **금속 벽면온도 유지**: 공기예열기 입구 공기 바이패스 또는 증기식 공기예열기 병용으로 벽온도를 황산로점 이상으로 유지\n3. **연료 첨가제 주입**: 마그네슘(Mg)계 첨가제를 주입하여 중화 처리\n4. **내식성 재료 채용**: 코르텐강(Corten steel), 에나멜 코팅관 또는 유리관 사용"
      }
    ],
    "keyPoints": "서술형 단골 문항으로, '황산로점', '저O2 연소', '바이패스' 핵심 키워드가 반드시 들어가야 합니다.",
    "userMemo": "저온부식 = SO3 + H2O -> H2SO4",
    "isReviewed": false
  },
  {
    "id": "exam-2017-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2017년",
    "title": "2017년 기출: 가스연료(CH4)의 이론 건배기가스량 및 습배기가스량",
    "topic": "가스 연소",
    "examOrigin": "2017년 실기 기출 2회 (7점)",
    "problemText": "메탄(CH4) 100% 가스를 이론공기로 완전연소시킬 때,\n1) 이론 건배기가스량 God (Nm³/Nm³)\n2) 이론 습배기가스량 Gow (Nm³/Nm³)를 구하시오.",
    "finalAnswer": "1) God = 8.52 Nm³/Nm³,   2) Gow = 10.52 Nm³/Nm³",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 연소 반응식 세우기",
        "content": "$$\\text{CH}_4 + 2\\text{O}_2 + 2 \\times 3.76\\text{N}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O} + 7.52\\text{N}_2$$\n이론산소량 $O_o = 2 \\; \\text{Nm}^3/\\text{Nm}^3$, 질소량 $N_2 = 2 \\times 3.76 = 7.52 \\; \\text{Nm}^3/\\text{Nm}^3$"
      },
      {
        "stepTitle": "2단계: 이론 건배기가스량(God) 산출",
        "content": "$$G_{od} = \\text{CO}_2 + \\text{N}_2 = 1.0 + 7.52 = 8.52 \\; [\\text{Nm}^3/\\text{Nm}^3]$$\n**정답: 8.52 Nm³/Nm³**"
      },
      {
        "stepTitle": "3단계: 이론 습배기가스량(Gow) 산출",
        "content": "$$G_{ow} = G_{od} + \\text{H}_2\\text{O} = 8.52 + 2.0 = 10.52 \\; [\\text{Nm}^3/\\text{Nm}^3]$$\n**정답: 10.52 Nm³/Nm³**"
      }
    ],
    "keyPoints": "건배기가스량에는 H2O를 포함하지 않고, 습배기가스량에는 생성 수분 2 Nm³를 합산합니다.",
    "userMemo": "습가스 = 건가스 + 수분",
    "isReviewed": false
  },
  {
    "id": "exam-2016-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2016년",
    "title": "2016년 기출: 보일러 증발배수 및 수관 열전달률",
    "topic": "증발배수",
    "examOrigin": "2016년 실기 기출 1회 (5점)",
    "problemText": "시간당 350 kg의 연료를 소비하여 4,200 kg/h의 증기를 발생시키는 보일러가 있다.\n1) 이 보일러의 증발배수를 구하시오.\n2) 연료 발열량이 42,000 kJ/kg이고 증기 흡수열량이 2,500 kJ/kg일 때 보일러 효율을 구하시오.",
    "finalAnswer": "1) 증발배수: 12.0,   2) 효율: 71.43 %",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 증발배수(Evaporation Ratio) 계산",
        "content": "$$\\text{증발배수} = \\frac{G_a}{G_f} = \\frac{4,200}{350} = 12.0$$\n**정답: 12.0**"
      },
      {
        "stepTitle": "2단계: 보일러 효율 계산",
        "content": "$$\\eta = \\frac{G_a \\times \\Delta h}{G_f \\times H_l} \\times 100 = \\frac{12.0 \\times 2,500}{42,000} \\times 100 = \\frac{30,000}{42,000} \\times 100 \\approx 71.428 \\; [\\%]$$\n**정답: 71.43 %**"
      }
    ],
    "keyPoints": "증발배수 = 실제증발량 / 연료소비량 (단위 없는 무차원수)",
    "userMemo": "증발배수 = Ga / Gf",
    "isReviewed": true
  },
  {
    "id": "exam-2015-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2015년",
    "title": "2015년 기출: 보일러 드럼 수위 인벌스 응답(Swell & Shrink) 현상",
    "topic": "보일러 수위 특성",
    "examOrigin": "2015년 실기 기출 2회 (6점 서술형)",
    "problemText": "수관보일러 급부하 변동 시 발생하는 수위 역응답 현상인 팽창(Swell)과 수축(Shrink) 현상의 원인과 특징을 서술하시오.",
    "finalAnswer": "급격한 증기 부하 증가 시 압력 강하로 비등 기포가 팽창하여 수위가 일시적으로 급상승(Swell), 부하 감소 시 기포 소멸로 일시 급강하(Shrink)하는 현상",
    "solutionSteps": [
      {
        "stepTitle": "1단계: Swell(수위 급상승) 메커니즘",
        "content": "증기 부하가 급증하면 드럼 내 압력이 일시적으로 강하하여 포화수가 급격히 자발비등함.\n물속에 생성된 증기 기포 체적이 팽창하면서 실제 물의 양이 적음에도 불구하고 수위계 수위가 일시적으로 급격히 상승하는 허위 수위 현상 발생."
      },
      {
        "stepTitle": "2단계: Shrink(수위 급강하) 메커니즘",
        "content": "증기 부하가 급감하면 드럼 압력이 상승하여 비등 기포가 응축·소멸하고,\n물속의 기포가 줄어들어 수위계 수위가 일시적으로 푹 꺼지는 현상 발생."
      },
      {
        "stepTitle": "3단계: 대책",
        "content": "단순 수위 1요소식 제어로는 오동작(부하 증가 시 급수를 줄여버리는 참사)하므로, **증기 유량과 급수 유량을 함께 검출하는 3요소식 수위제어**를 채택해야 함."
      }
    ],
    "keyPoints": "Swell은 부하 증가 시 압력 강하로 인한 기포 팽창, 3요소식 제어가 필수 해결책입니다.",
    "userMemo": "부하급증 -> 압력저하 -> 기포팽창 -> Swell",
    "isReviewed": false
  },
  {
    "id": "exam-2014-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2014년",
    "title": "2014년 기출: 자연대류와 복사가 공존하는 가열로 노벽 방산열손실",
    "topic": "복합 전열손실",
    "examOrigin": "2014년 실기 기출 1회 (7점)",
    "problemText": "가열로 외벽 표면온도가 80℃이고 주위 실내온도가 20℃이다.\n노벽 표면의 자연대류 열전달계수 hc = 8.5 W/m²·K이고 복사 열전달계수 hr = 7.5 W/m²·K일 때,\n1) 노벽 외표면의 종합 열전달계수 h (W/m²·K)를 구하시오.\n2) 노벽 면적 50m²에서 1시간 동안 손실되는 총 열량(MJ/h)을 구하시오.",
    "finalAnswer": "1) 종합 열전달계수 h = 16.0 W/m²·K,   2) 1시간 방산열손실 = 172.8 MJ/h",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 대류와 복사의 병렬 종합 열전달계수",
        "content": "$$h = h_c + h_r = 8.5 + 7.5 = 16.0 \\; [\\text{W/m}^2\\cdot\\text{K}]$$\n**정답: 16.0 W/m²·K**"
      },
      {
        "stepTitle": "2단계: 시간당 열손실량(Q, W) 산출",
        "content": "$$Q = h \\cdot A \\cdot (T_w - T_a) = 16.0 \\times 50 \\times (80 - 20) = 800 \\times 60 = 48,000 \\; [\\text{W}] = 48 \\; [\\text{kW}]$$"
      },
      {
        "stepTitle": "3단계: 1시간(3,600초) 동안의 총 손실열량(MJ/h) 환산",
        "content": "$$\\text{총 열손실량} = 48 \\; [\\text{kJ/s}] \\times 3,600 \\; [\\text{s}] = 172,800 \\; [\\text{kJ}] = 172.8 \\; [\\text{MJ/h}]$$\n**정답: 172.8 MJ/h**"
      }
    ],
    "keyPoints": "외표면 방산열에서 대류와 복사는 병렬이므로 hc + hr 로 더합니다.",
    "userMemo": "h = hc + hr, 1 W = 1 J/s",
    "isReviewed": false
  },
  {
    "id": "exam-2013-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2013년",
    "title": "2013년 기출: 표준상태 가스밀도 및 체적환산",
    "topic": "기체 상태방정식",
    "examOrigin": "2013년 실기 기출 2회 (5점)",
    "problemText": "분자량 M = 44인 프로판(C3H8) 가스의 표준상태(0℃, 1기압)에서의 밀도(kg/Nm³)를 구하시오.",
    "finalAnswer": "표준상태 밀도 ρ = 1.96 kg/Nm³",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 아보가드로 법칙에 따른 1 k-mol 체적",
        "content": "표준상태(0℃, 1 atm)에서 모든 이상기체 1 k-mol의 부피는 22.4 Nm³ 입니다."
      },
      {
        "stepTitle": "2단계: 밀도 공식 적용 및 계산",
        "content": "$$\\rho = \\frac{M}{22.4} = \\frac{44}{22.4} \\approx 1.96428 \\; [\\text{kg/Nm}^3]$$\n**정답: 1.96 kg/Nm³**"
      }
    ],
    "keyPoints": "기체 표준상태 밀도 ρ = M / 22.4 (kg/Nm³) 기본 공식을 활용합니다.",
    "userMemo": "ρ = 분자량 M / 22.4",
    "isReviewed": false
  },
  {
    "id": "exam-2012-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2012년",
    "title": "2012년 기출: 급수 탈기기(Deaerator) 용존산소 제거원리",
    "topic": "탈기기 헨리법칙",
    "examOrigin": "2012년 실기 기출 1회 (6점 서술형)",
    "problemText": "보일러 급수 탈기기의 용존산소 제거 기본 원리를 헨리의 법칙(Henry's Law)과 온도의 관점에서 서술하시오.",
    "finalAnswer": "급수를 포화온도까지 가열하여 산소 분압을 0에 가깝게 만들어 물속 용존산소를 기중으로 방출·제거함",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 헨리의 법칙(Henry's Law) 원리",
        "content": "액체에 용해되는 기체의 양은 그 기체의 분압에 비례함 ($C = k \\cdot P$).\n탈기기 내에 증기를 분사하여 수증기 분압을 100%로 높이면 산소의 분압이 0에 수렴하여 용존산소가 수중에서 탈출함."
      },
      {
        "stepTitle": "2단계: 온도 상승에 따른 용해도 감소",
        "content": "기체의 액체 내 용해도는 액체의 온도가 상승할수록 감소함.\n급수를 해당 압력의 비등온도(포화온도)까지 가열하면 기체의 용해도가 0이 되어 용존산소 및 CO2가 완벽히 방출됨."
      }
    ],
    "keyPoints": "헨리의 법칙(분압 비례)과 온도 상승 시 기체 용해도 감소 원리를 명시해야 만점입니다.",
    "userMemo": "포화온도 가열 -> 산소분압 0 -> 탈기",
    "isReviewed": false
  },
  {
    "id": "exam-2011-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2011년",
    "title": "2011년 기출: 보일러 열정산 손실열량 중 불완전연소 손실",
    "topic": "연소 손실열량",
    "examOrigin": "2011년 실기 기출 2회 (6점)",
    "problemText": "배기가스 분석 결과 CO = 1.2% 발생하였다.\n연료 1kg당 실제건배기가스량이 Gd = 14.5 Nm³/kg일 때, CO 발생에 따른 불완전연소 열손실량(kJ/kg)을 구하시오.\n(단, CO 1 Nm³당 연소열은 12,600 kJ/Nm³이다.)",
    "finalAnswer": "불완전연소 열손실 = 2,192.4 kJ/kg",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 배기가스 중 CO 발생 체적 산출",
        "content": "$$V_{\\text{CO}} = G_d \\times \\frac{\\text{CO}}{100} = 14.5 \\times 0.012 = 0.174 \\; [\\text{Nm}^3/\\text{kg}]$$"
      },
      {
        "stepTitle": "2단계: 불완전연소 열손실량(Q_co) 계산",
        "content": "$$Q_{\\text{co}} = V_{\\text{CO}} \\times 12,600 = 0.174 \\times 12,600 = 2,192.4 \\; [\\text{kJ/kg}]$$\n**정답: 2,192.4 kJ/kg**"
      }
    ],
    "keyPoints": "CO 체적(Gd * CO%)에 CO 발열량 12,600 kJ/Nm³(또는 3,020 kcal/Nm³)를 곱합니다.",
    "userMemo": "CO 손실 = Gd * (CO/100) * 12,600",
    "isReviewed": false
  },
  {
    "id": "exam-2010-1",
    "category": "exam",
    "chapter": "연도별 기출",
    "year": "2010년",
    "title": "2010년 기출: 압입통풍과 흡입통풍의 방식 비교 및 특징",
    "topic": "통풍방식 비교",
    "examOrigin": "2010년 실기 기출 1회 (6점 서술형)",
    "problemText": "보일러 인공통풍 방식 중 압입통풍(Forced Draft)과 흡입통풍(Induced Draft)의 장단점을 2가지씩 비교 기술하시오.",
    "finalAnswer": "압입통풍: 냉공기 취급으로 송풍기 소형/동력절감, 노내 양압으로 가스누설 우려; 흡입통풍: 노내 음압으로 가스누출 없음, 고온/부식성 가스 취급으로 대형화/동력증가",
    "solutionSteps": [
      {
        "stepTitle": "1단계: 압입통풍(FDF) 장단점",
        "content": "· **장점**: 상온의 신선한 공기를 취급하므로 송풍기 부식이 없고 용적이 작아 소요동력이 적음.\n· **단점**: 노내 압력이 대기압보다 높은 양압(+)이므로 노벽 틈새로 고온 가스 및 분진이 누출될 위험이 있음."
      },
      {
        "stepTitle": "2단계: 흡입통풍(IDF) 장단점",
        "content": "· **장점**: 노내가 부압(음압, -)으로 유지되므로 점검 시 역화(Backfire)나 가스 누출 위험이 없음.\n· **단점**: 고온의 배기가스를 흡입하므로 가스 체적이 커서 송풍기가 대형화되고 소요동력이 크며, 산성 가스로 인한 부식 마모 위험이 큼."
      }
    ],
    "keyPoints": "압입은 상온/동력적음/누설위험, 흡입은 음압안전/고온가스/대형화가 핵심 대비점입니다.",
    "userMemo": "FDF = 양압/소형, IDF = 음압/대형",
    "isReviewed": true
  }
];
// 5. 초기 샘플 외부 연동 대시보드 (사용자가 HTML 업로드 전 바로 확인해볼 수 있는 예제)
const INITIAL_EXTERNAL_DASHBOARDS = [
  {
    id: "ext-sample-1",
    title: "팀 협업 워크스페이스 (샘플)",
    icon: "fa-users",
    type: "html", // html (내장 코드/업로드) or url (임베드 링크)
    content: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>팀 협업 보드</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; margin: 0; }
    .card { background: #1e293b; border-radius: 12px; padding: 20px; border: 1px solid #334155; margin-bottom: 16px; }
    h2 { color: #38bdf8; margin-top: 0; }
    .badge { background: #0284c7; color: white; padding: 4px 10px; border-radius: 9999px; font-size: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">외부 HTML 임베드 예시</span>
    <h2>🚀 동료 대시보드 / 외부 공유 탭</h2>
    <p style="color: #94a3b8; font-size: 14px;">
      다른 사람의 HTML 파일(.html)을 상단의 <b>[+ 대시보드 추가]</b> 버튼으로 업로드하면, 여기에 독립된 탭으로 즉시 열람 및 사용할 수 있습니다!
    </p>
  </div>
  <div class="grid">
    <div class="card">
      <h3 style="color:#a855f7;">📋 팀 스프린트 현황</h3>
      <ul style="font-size:14px; line-height: 1.8; color:#cbd5e1;">
        <li>✅ 주간 기후탐사대 회의록 정리</li>
        <li>🔄 오픈소스 데이터셋 수집 중</li>
        <li>⏳ 최종 성과 발표 리허설 (10/31 예정)</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="color:#10b981;">📊 주간 리포트 KPI</h3>
      <p style="font-size: 28px; font-weight: bold; margin: 8px 0; color:#34d399;">94.2%</p>
      <p style="font-size: 12px; color: #94a3b8;">목표 달성률 (전주 대비 +4.8%p)</p>
    </div>
  </div>
</body>
</html>`,
    createdAt: new Date().toISOString()
  }
];


  // =========================================================================
  
// ==========================================================================
// 체구 감량 & 인바디 지속 관리 초기 데이터 (⭐ 카카오톡 InBody CSV 89회 누적 연동)
// ==========================================================================
const INITIAL_INBODY_DATA = {
  inbodyDataVersion: 2,
  title: "체중 변화 없는 성공적인 다이어트 (체성분 재구성 & 체구 관리)",
  subtitle: "2015~2026년 11개년 누적 89회 측정 데이터: 골격근 44.9kg 달성 & 체지방 6kg 순수 감량의 상승 다이어트",
  latestKPI: {
    latestDate: "2026-09-16",
    latestWeight: 92.7,
    latestMuscle: 42.5,
    latestFatMass: 17.7,
    latestFatRate: 19.1,
    latestBMI: 30.1,
    latestBMR: 1990,
    peakMuscle: 44.9,
    peakMuscleDate: "2026-08-06",
    peakScore: 97.0,
    baselineWeight: 94.6,
    baselineMuscle: 41.0,
    baselineFatMass: 22.1,
    baselineFatRate: 23.4,
    deltaWeight: -1.9,
    maxMuscleGain: +3.9,
    maxFatLoss: -6.0,
    maxFatRateDrop: -6.1
  },
  segmentalMuscle: {
    date: "2026-08-06",
    device: "InBody 570",
    score: 97.0,
    rightArm: 4.67,
    leftArm: 4.67,
    trunk: 34.0,
    rightLeg: 10.93,
    leftLeg: 11.02,
    bodyWater: 56.2,
    protein: 15.6,
    mineral: 5.13
  },
  principles: [
    {
      title: "1. 체중계의 착각 극복 (밀도와 부피의 비밀)",
      description: "체중은 뼈, 수분, 근육, 지방의 총합입니다. 지방 1kg의 부피(1,111㎤)는 근육 1kg(943㎤)보다 약 18% 더 큽니다. 체중은 94.6kg ➔ 92.7kg으로 -1.9kg에 불과하지만, 골격근 +3.9kg 증가와 체지방 -6.0kg 감량으로 겉보기 체구는 드라마틱하게 슬림해졌습니다."
    },
    {
      title: "2. 체중당 1.6~2.0g 단백질 고정 공급 (150g ~ 185g)",
      description: "체중 92.7kg 및 골격근 42~44kg을 유지/성장시키기 위해 하루 150g ~ 185g의 단백질(닭가슴살 500~600g 상당)을 3~4끼로 분할 공급하여 근손실을 원천 차단합니다."
    },
    {
      title: "3. 대근육 점진적 과부하 & 골격근 44.9kg 피지크",
      description: "인바디 570 실측 기준 몸통 근육 34.0kg, 하체 22kg의 강력한 코어를 기반으로 3대 웨이트 트레이닝을 지속하여 BMR 1,990~2,032 kcal의 고연소 대사 체질을 완성했습니다."
    },
    {
      title: "4. 수분 2.5L 섭취 & 세포외수분비(0.360) 최적 유지",
      description: "세포외수분비 0.360~0.365의 건강한 부종 제로 상태를 유지하기 위해 매일 2.5L 이상의 수분을 섭취하고 7시간 숙면으로 근회복을 돕습니다."
    }
  ],
  // 🥗 1주 0.5kg 체지방 감량 목표 일일 영양성분 가이드 (현재 체중 73.1kg / 골격근 33.7kg 기준)
  nutritionGuide: {
    motto: {
      ko: "가장 훌륭한 조각가는 자기 몸을 깎아내는 사람이다. 지속하는 훈련과 정직한 식단만이 불변의 아름다움을 만든다.",
      en: "It is not what we do once in a while that shapes our lives, but what we do consistently."
    },
    currentWeight: 73.1,
    skeletalMuscle: 33.7,
    bodyFatMass: 13.7,
    bodyFatRate: 18.7,
    targetFatLossPerWeekKg: 0.5,
    bmrKcal: 1680,      // 기초대사량
    tdeeKcal: 2350,     // 유지 활동대사량 (주 3~5회 운동 기준)
    deficitDailyKcal: 550, // 주당 -3,850 kcal (지방 0.5kg 연소)
    targetDailyKcal: 1800, // 2350 - 550 = 1800 kcal
    macros: {
      protein: { grams: 145, kcal: 580, pct: 32, label: "단백질 (체중 kg당 2.0g - 근손실 방지)", food: "닭가슴살 2팩, 계란 3개, 소고기 우둔살, 단백질 쉐이크" },
      carbs: { grams: 190, kcal: 760, pct: 42, label: "복합 탄수화물 (운동 수행능력 유지)", food: "고구마 200g, 현미밥 1.5공기, 오트밀 40g, 바나나" },
      fat: { grams: 45, kcal: 405, pct: 26, label: "불포화 지방 (호르몬 정상 분비 및 관절 보호)", food: "아보카도 반 개, 엑스트라 버진 올리브유 1스푼, 아몬드 15알" }
    },
    waterLiters: 3.0,
    dailyHabits: [
      "기상 직후 미온수 500ml 섭취로 밤새 떨어진 신진대사 부스팅",
      "근력 운동 전 복합 탄수화물(바나나/오트밀), 운동 직후 단백질 30g 섭취",
      "취침 3시간 전 식사 완료 및 최소 7시간 수면 확보로 성장호르몬 분비 촉진"
    ]
  },

  records: [
  {
    "id": "inbody-1",
    "date": "2026-09-16",
    "time": "10:42",
    "rawDate": "20260916104216",
    "device": "Etc",
    "weight": 92.7,
    "skeletalMuscle": 42.5,
    "bodyFatMass": 17.7,
    "bodyFatRate": 19.1,
    "bmi": 30.1,
    "bmr": 1990,
    "score": null,
    "visceralFat": 7,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-2",
    "date": "2026-08-22",
    "time": "10:23",
    "rawDate": "20260822102324",
    "device": "570",
    "weight": 92.5,
    "skeletalMuscle": 43.4,
    "bodyFatMass": 17.7,
    "bodyFatRate": 19.1,
    "bmi": 30.2,
    "bmr": 1986,
    "score": 93.0,
    "visceralFat": 7,
    "waistHipRatio": 0.89,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": 4.59,
    "leftArmMuscle": 4.6,
    "trunkMuscle": 33.5,
    "rightLegMuscle": 10.74,
    "leftLegMuscle": 10.82,
    "bodyWater": 54.7,
    "protein": 15.1,
    "mineral": 5.0,
    "notes": "측정 장비: InBody 570"
  },
  {
    "id": "inbody-3",
    "date": "2026-08-20",
    "time": "09:28",
    "rawDate": "20260820092800",
    "device": "Etc",
    "weight": 92.8,
    "skeletalMuscle": 43.0,
    "bodyFatMass": 17.1,
    "bodyFatRate": 18.4,
    "bmi": 30.1,
    "bmr": 2005,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-4",
    "date": "2026-08-06",
    "time": "09:09",
    "rawDate": "20260806090909",
    "device": "570",
    "weight": 93.0,
    "skeletalMuscle": 44.9,
    "bodyFatMass": 16.1,
    "bodyFatRate": 17.3,
    "bmi": 30.0,
    "bmr": 2032,
    "score": 97.0,
    "visceralFat": 6,
    "waistHipRatio": 0.87,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.67,
    "leftArmMuscle": 4.67,
    "trunkMuscle": 34.0,
    "rightLegMuscle": 10.93,
    "leftLegMuscle": 11.02,
    "bodyWater": 56.2,
    "protein": 15.6,
    "mineral": 5.13,
    "notes": "측정 장비: InBody 570"
  },
  {
    "id": "inbody-5",
    "date": "2026-07-25",
    "time": "11:42",
    "rawDate": "20260725114230",
    "device": "570",
    "weight": 93.8,
    "skeletalMuscle": 44.2,
    "bodyFatMass": 17.6,
    "bodyFatRate": 18.8,
    "bmi": 30.3,
    "bmr": 2015,
    "score": 94.0,
    "visceralFat": 7,
    "waistHipRatio": 0.86,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.6,
    "leftArmMuscle": 4.51,
    "trunkMuscle": 33.4,
    "rightLegMuscle": 11.33,
    "leftLegMuscle": 11.47,
    "bodyWater": 55.8,
    "protein": 15.3,
    "mineral": 5.11,
    "notes": "측정 장비: InBody 570"
  },
  {
    "id": "inbody-6",
    "date": "2026-07-14",
    "time": "09:54",
    "rawDate": "20260714095450",
    "device": "Etc",
    "weight": 93.5,
    "skeletalMuscle": 42.4,
    "bodyFatMass": 19.0,
    "bodyFatRate": 20.3,
    "bmi": 30.4,
    "bmr": 1979,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-7",
    "date": "2026-07-06",
    "time": "09:20",
    "rawDate": "20260706092006",
    "device": "Etc",
    "weight": 93.8,
    "skeletalMuscle": 43.6,
    "bodyFatMass": 17.4,
    "bodyFatRate": 18.6,
    "bmi": 30.5,
    "bmr": 2020,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-8",
    "date": "2026-07-01",
    "time": "10:37",
    "rawDate": "20260701103716",
    "device": "Etc",
    "weight": 91.7,
    "skeletalMuscle": 42.2,
    "bodyFatMass": 17.4,
    "bodyFatRate": 19.0,
    "bmi": 29.8,
    "bmr": 1975,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-9",
    "date": "2026-06-29",
    "time": "10:37",
    "rawDate": "20260629103752",
    "device": "Etc",
    "weight": 93.7,
    "skeletalMuscle": 41.7,
    "bodyFatMass": 20.3,
    "bodyFatRate": 21.7,
    "bmi": 30.4,
    "bmr": 1955,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-10",
    "date": "2026-06-22",
    "time": "10:52",
    "rawDate": "20260622105213",
    "device": "Etc",
    "weight": 94.0,
    "skeletalMuscle": 42.3,
    "bodyFatMass": 19.8,
    "bodyFatRate": 21.1,
    "bmi": 30.5,
    "bmr": 1973,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-11",
    "date": "2026-06-01",
    "time": "09:37",
    "rawDate": "20260601093741",
    "device": "Etc",
    "weight": 92.5,
    "skeletalMuscle": 41.3,
    "bodyFatMass": 19.7,
    "bodyFatRate": 21.3,
    "bmi": 30.0,
    "bmr": 1943,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-12",
    "date": "2026-05-14",
    "time": "15:15",
    "rawDate": "20260514151524",
    "device": "Etc",
    "weight": 94.6,
    "skeletalMuscle": 41.0,
    "bodyFatMass": 22.1,
    "bodyFatRate": 23.4,
    "bmi": 30.7,
    "bmr": 1936,
    "score": null,
    "visceralFat": 7,
    "waistHipRatio": null,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-13",
    "date": "2025-12-01",
    "time": "09:42",
    "rawDate": "20251201094210",
    "device": "Etc",
    "weight": 86.7,
    "skeletalMuscle": 40.2,
    "bodyFatMass": 15.1,
    "bodyFatRate": 17.4,
    "bmi": 28.1,
    "bmr": 1917,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-14",
    "date": "2025-11-26",
    "time": "12:12",
    "rawDate": "20251126121231",
    "device": "Etc",
    "weight": 88.3,
    "skeletalMuscle": 40.1,
    "bodyFatMass": 16.9,
    "bodyFatRate": 19.1,
    "bmi": 28.7,
    "bmr": 1912,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-15",
    "date": "2025-11-07",
    "time": "14:45",
    "rawDate": "20251107144513",
    "device": "Etc",
    "weight": 89.7,
    "skeletalMuscle": 41.4,
    "bodyFatMass": 16.2,
    "bodyFatRate": 18.1,
    "bmi": 29.1,
    "bmr": 1958,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-16",
    "date": "2025-10-23",
    "time": "09:56",
    "rawDate": "20251023095639",
    "device": "Etc",
    "weight": 91.4,
    "skeletalMuscle": 42.7,
    "bodyFatMass": 16.2,
    "bodyFatRate": 17.7,
    "bmi": 31.6,
    "bmr": 1994,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-17",
    "date": "2025-10-16",
    "time": "09:26",
    "rawDate": "20251016092637",
    "device": "Etc",
    "weight": 89.9,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 16.7,
    "bodyFatRate": 18.6,
    "bmi": 31.1,
    "bmr": 1951,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-18",
    "date": "2025-09-17",
    "time": "09:43",
    "rawDate": "20250917094352",
    "device": "Etc",
    "weight": 90.5,
    "skeletalMuscle": 41.8,
    "bodyFatMass": 16.1,
    "bodyFatRate": 17.8,
    "bmi": 31.3,
    "bmr": 1977,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-19",
    "date": "2025-06-23",
    "time": "09:17",
    "rawDate": "20250623091756",
    "device": "Etc",
    "weight": 88.0,
    "skeletalMuscle": 41.9,
    "bodyFatMass": 13.6,
    "bodyFatRate": 15.4,
    "bmi": 28.6,
    "bmr": 1977,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-20",
    "date": "2025-06-15",
    "time": "00:05",
    "rawDate": "20250615000530",
    "device": "Etc",
    "weight": 86.0,
    "skeletalMuscle": 41.8,
    "bodyFatMass": 12.0,
    "bodyFatRate": 14.0,
    "bmi": 27.9,
    "bmr": 1968,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-21",
    "date": "2025-06-04",
    "time": "09:11",
    "rawDate": "20250604091139",
    "device": "Etc",
    "weight": 87.7,
    "skeletalMuscle": 41.0,
    "bodyFatMass": 14.7,
    "bodyFatRate": 16.8,
    "bmi": 28.5,
    "bmr": 1947,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-22",
    "date": "2025-05-20",
    "time": "13:02",
    "rawDate": "20250520130216",
    "device": "Etc",
    "weight": 90.4,
    "skeletalMuscle": 42.4,
    "bodyFatMass": 14.8,
    "bodyFatRate": 16.4,
    "bmi": 29.5,
    "bmr": 2003,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-23",
    "date": "2025-05-02",
    "time": "13:20",
    "rawDate": "20250502132014",
    "device": "Etc",
    "weight": 89.7,
    "skeletalMuscle": 41.1,
    "bodyFatMass": 16.8,
    "bodyFatRate": 18.7,
    "bmi": 29.3,
    "bmr": 1945,
    "score": null,
    "visceralFat": 6,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-24",
    "date": "2025-03-08",
    "time": "09:32",
    "rawDate": "20250308093215",
    "device": "970",
    "weight": 86.2,
    "skeletalMuscle": 41.2,
    "bodyFatMass": 15.1,
    "bodyFatRate": 17.6,
    "bmi": 28.1,
    "bmr": 1905,
    "score": 91.0,
    "visceralFat": 6,
    "waistHipRatio": 0.87,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.29,
    "leftArmMuscle": 4.31,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.41,
    "leftLegMuscle": 10.39,
    "bodyWater": 52.1,
    "protein": 14.2,
    "mineral": 4.75,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-25",
    "date": "2025-02-27",
    "time": "08:07",
    "rawDate": "20250227080715",
    "device": "970",
    "weight": 87.5,
    "skeletalMuscle": 42.2,
    "bodyFatMass": 15.0,
    "bodyFatRate": 17.1,
    "bmi": 28.6,
    "bmr": 1936,
    "score": 93.0,
    "visceralFat": 5,
    "waistHipRatio": 0.86,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.4,
    "leftArmMuscle": 4.4,
    "trunkMuscle": 32.4,
    "rightLegMuscle": 10.61,
    "leftLegMuscle": 10.62,
    "bodyWater": 53.1,
    "protein": 14.6,
    "mineral": 4.77,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-26",
    "date": "2025-02-13",
    "time": "10:02",
    "rawDate": "20250213100252",
    "device": "970",
    "weight": 89.8,
    "skeletalMuscle": 42.3,
    "bodyFatMass": 16.6,
    "bodyFatRate": 18.5,
    "bmi": 29.3,
    "bmr": 1952,
    "score": 92.0,
    "visceralFat": 6,
    "waistHipRatio": 0.87,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.35,
    "leftArmMuscle": 4.45,
    "trunkMuscle": 32.3,
    "rightLegMuscle": 10.67,
    "leftLegMuscle": 10.68,
    "bodyWater": 53.7,
    "protein": 14.6,
    "mineral": 4.88,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-27",
    "date": "2025-01-31",
    "time": "16:11",
    "rawDate": "20250131161123",
    "device": "970",
    "weight": 89.0,
    "skeletalMuscle": 42.9,
    "bodyFatMass": 14.8,
    "bodyFatRate": 16.7,
    "bmi": 29.1,
    "bmr": 1972,
    "score": 95.0,
    "visceralFat": 6,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.43,
    "leftArmMuscle": 4.48,
    "trunkMuscle": 32.6,
    "rightLegMuscle": 10.9,
    "leftLegMuscle": 10.91,
    "bodyWater": 54.4,
    "protein": 14.8,
    "mineral": 4.99,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-28",
    "date": "2025-01-15",
    "time": "13:37",
    "rawDate": "20250115133726",
    "device": "970",
    "weight": 86.7,
    "skeletalMuscle": 41.4,
    "bodyFatMass": 15.6,
    "bodyFatRate": 18.0,
    "bmi": 28.3,
    "bmr": 1905,
    "score": 91.0,
    "visceralFat": 6,
    "waistHipRatio": 0.88,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.22,
    "leftArmMuscle": 4.33,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.28,
    "leftLegMuscle": 10.35,
    "bodyWater": 52.0,
    "protein": 14.3,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-29",
    "date": "2025-01-06",
    "time": "10:35",
    "rawDate": "20250106103555",
    "device": "970",
    "weight": 88.5,
    "skeletalMuscle": 42.4,
    "bodyFatMass": 15.1,
    "bodyFatRate": 17.1,
    "bmi": 28.9,
    "bmr": 1955,
    "score": 94.0,
    "visceralFat": 6,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.38,
    "leftArmMuscle": 4.42,
    "trunkMuscle": 32.3,
    "rightLegMuscle": 10.68,
    "leftLegMuscle": 10.76,
    "bodyWater": 53.8,
    "protein": 14.7,
    "mineral": 4.88,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-30",
    "date": "2024-12-31",
    "time": "09:30",
    "rawDate": "20241231093046",
    "device": "970",
    "weight": 87.9,
    "skeletalMuscle": 42.2,
    "bodyFatMass": 15.1,
    "bodyFatRate": 17.2,
    "bmi": 28.7,
    "bmr": 1943,
    "score": 93.0,
    "visceralFat": 6,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.26,
    "leftArmMuscle": 4.41,
    "trunkMuscle": 32.0,
    "rightLegMuscle": 10.53,
    "leftLegMuscle": 10.59,
    "bodyWater": 53.3,
    "protein": 14.6,
    "mineral": 4.87,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-31",
    "date": "2024-12-16",
    "time": "13:49",
    "rawDate": "20241216134905",
    "device": "970",
    "weight": 86.4,
    "skeletalMuscle": 42.2,
    "bodyFatMass": 13.4,
    "bodyFatRate": 15.5,
    "bmi": 28.2,
    "bmr": 1948,
    "score": 95.0,
    "visceralFat": 5,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.32,
    "leftArmMuscle": 4.43,
    "trunkMuscle": 32.1,
    "rightLegMuscle": 10.78,
    "leftLegMuscle": 10.69,
    "bodyWater": 53.6,
    "protein": 14.6,
    "mineral": 4.78,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-32",
    "date": "2024-12-09",
    "time": "08:57",
    "rawDate": "20241209085758",
    "device": "970",
    "weight": 86.6,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 14.5,
    "bodyFatRate": 16.8,
    "bmi": 28.3,
    "bmr": 1927,
    "score": 93.0,
    "visceralFat": 5,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.26,
    "leftArmMuscle": 4.29,
    "trunkMuscle": 31.6,
    "rightLegMuscle": 10.58,
    "leftLegMuscle": 10.51,
    "bodyWater": 52.8,
    "protein": 14.4,
    "mineral": 4.86,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-33",
    "date": "2024-11-19",
    "time": "10:20",
    "rawDate": "20241119102039",
    "device": "970",
    "weight": 85.1,
    "skeletalMuscle": 41.2,
    "bodyFatMass": 13.5,
    "bodyFatRate": 15.8,
    "bmi": 27.8,
    "bmr": 1917,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.26,
    "leftArmMuscle": 4.28,
    "trunkMuscle": 31.5,
    "rightLegMuscle": 10.67,
    "leftLegMuscle": 10.61,
    "bodyWater": 52.5,
    "protein": 14.3,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-34",
    "date": "2024-11-08",
    "time": "09:19",
    "rawDate": "20241108091932",
    "device": "970",
    "weight": 86.9,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 14.2,
    "bodyFatRate": 16.3,
    "bmi": 28.5,
    "bmr": 1941,
    "score": 94.0,
    "visceralFat": 6,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.42,
    "leftArmMuscle": 4.49,
    "trunkMuscle": 32.3,
    "rightLegMuscle": 10.67,
    "leftLegMuscle": 10.79,
    "bodyWater": 53.5,
    "protein": 14.4,
    "mineral": 4.77,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-35",
    "date": "2024-10-26",
    "time": "13:05",
    "rawDate": "20241026130526",
    "device": "970",
    "weight": 84.1,
    "skeletalMuscle": 41.2,
    "bodyFatMass": 12.8,
    "bodyFatRate": 15.2,
    "bmi": 27.5,
    "bmr": 1911,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.31,
    "leftArmMuscle": 4.29,
    "trunkMuscle": 31.7,
    "rightLegMuscle": 10.54,
    "leftLegMuscle": 10.59,
    "bodyWater": 52.3,
    "protein": 14.3,
    "mineral": 4.66,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-36",
    "date": "2024-10-15",
    "time": "16:35",
    "rawDate": "20241015163524",
    "device": "970",
    "weight": 85.1,
    "skeletalMuscle": 40.8,
    "bodyFatMass": 14.3,
    "bodyFatRate": 16.8,
    "bmi": 27.9,
    "bmr": 1900,
    "score": 92.0,
    "visceralFat": 5,
    "waistHipRatio": 0.81,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.03,
    "leftArmMuscle": 4.07,
    "trunkMuscle": 30.3,
    "rightLegMuscle": 10.84,
    "leftLegMuscle": 10.94,
    "bodyWater": 51.9,
    "protein": 14.1,
    "mineral": 4.75,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-37",
    "date": "2024-10-05",
    "time": "10:51",
    "rawDate": "20241005105155",
    "device": "970",
    "weight": 85.9,
    "skeletalMuscle": 42.2,
    "bodyFatMass": 12.8,
    "bodyFatRate": 14.9,
    "bmi": 28.0,
    "bmr": 1949,
    "score": 96.0,
    "visceralFat": 5,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.34,
    "leftArmMuscle": 4.42,
    "trunkMuscle": 32.1,
    "rightLegMuscle": 10.83,
    "leftLegMuscle": 10.76,
    "bodyWater": 53.6,
    "protein": 14.6,
    "mineral": 4.87,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-38",
    "date": "2024-09-30",
    "time": "10:18",
    "rawDate": "20240930101802",
    "device": "970",
    "weight": 85.4,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 13.6,
    "bodyFatRate": 16.0,
    "bmi": 27.9,
    "bmr": 1920,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.22,
    "leftArmMuscle": 4.36,
    "trunkMuscle": 31.7,
    "rightLegMuscle": 10.56,
    "leftLegMuscle": 10.58,
    "bodyWater": 52.6,
    "protein": 14.4,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-39",
    "date": "2024-09-23",
    "time": "08:10",
    "rawDate": "20240923081011",
    "device": "970",
    "weight": 84.9,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 13.1,
    "bodyFatRate": 15.4,
    "bmi": 27.7,
    "bmr": 1921,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.2,
    "leftArmMuscle": 4.27,
    "trunkMuscle": 31.4,
    "rightLegMuscle": 10.67,
    "leftLegMuscle": 10.6,
    "bodyWater": 52.5,
    "protein": 14.4,
    "mineral": 4.86,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-40",
    "date": "2024-09-14",
    "time": "09:46",
    "rawDate": "20240914094629",
    "device": "970",
    "weight": 85.3,
    "skeletalMuscle": 42.1,
    "bodyFatMass": 12.5,
    "bodyFatRate": 14.7,
    "bmi": 27.9,
    "bmr": 1942,
    "score": 96.0,
    "visceralFat": 4,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.35,
    "leftArmMuscle": 4.42,
    "trunkMuscle": 32.2,
    "rightLegMuscle": 10.71,
    "leftLegMuscle": 10.76,
    "bodyWater": 53.3,
    "protein": 14.6,
    "mineral": 4.88,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-41",
    "date": "2024-09-02",
    "time": "09:06",
    "rawDate": "20240902090646",
    "device": "970",
    "weight": 84.8,
    "skeletalMuscle": 41.3,
    "bodyFatMass": 13.1,
    "bodyFatRate": 15.5,
    "bmi": 27.7,
    "bmr": 1918,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.31,
    "leftArmMuscle": 4.36,
    "trunkMuscle": 31.9,
    "rightLegMuscle": 10.65,
    "leftLegMuscle": 10.65,
    "bodyWater": 52.6,
    "protein": 14.3,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-42",
    "date": "2024-08-23",
    "time": "10:06",
    "rawDate": "20240823100628",
    "device": "970",
    "weight": 84.1,
    "skeletalMuscle": 41.1,
    "bodyFatMass": 12.8,
    "bodyFatRate": 15.2,
    "bmi": 27.5,
    "bmr": 1911,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.26,
    "leftArmMuscle": 4.23,
    "trunkMuscle": 31.4,
    "rightLegMuscle": 10.51,
    "leftLegMuscle": 10.54,
    "bodyWater": 52.3,
    "protein": 14.2,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-43",
    "date": "2024-08-16",
    "time": "10:53",
    "rawDate": "20240816105320",
    "device": "970",
    "weight": 83.4,
    "skeletalMuscle": 41.7,
    "bodyFatMass": 11.3,
    "bodyFatRate": 13.5,
    "bmi": 26.9,
    "bmr": 1927,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.29,
    "leftArmMuscle": 4.33,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.77,
    "leftLegMuscle": 10.75,
    "bodyWater": 52.8,
    "protein": 14.5,
    "mineral": 4.77,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-44",
    "date": "2024-08-05",
    "time": "09:26",
    "rawDate": "20240805092618",
    "device": "970",
    "weight": 84.2,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 12.2,
    "bodyFatRate": 14.5,
    "bmi": 27.2,
    "bmr": 1925,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.83,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.32,
    "leftArmMuscle": 4.33,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.75,
    "leftLegMuscle": 10.76,
    "bodyWater": 52.8,
    "protein": 14.4,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-45",
    "date": "2024-08-04",
    "time": "00:50",
    "rawDate": "20240804005008",
    "device": "Etc",
    "weight": 84.8,
    "skeletalMuscle": 42.1,
    "bodyFatMass": 11.9,
    "bodyFatRate": 14.0,
    "bmi": 27.4,
    "bmr": 1945,
    "score": null,
    "visceralFat": 4,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-46",
    "date": "2024-07-23",
    "time": "21:11",
    "rawDate": "20240723211138",
    "device": "970",
    "weight": 87.2,
    "skeletalMuscle": 42.7,
    "bodyFatMass": 12.9,
    "bodyFatRate": 14.8,
    "bmi": 28.2,
    "bmr": 1974,
    "score": 96.0,
    "visceralFat": 5,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.34,
    "leftArmMuscle": 4.42,
    "trunkMuscle": 32.1,
    "rightLegMuscle": 10.95,
    "leftLegMuscle": 11.0,
    "bodyWater": 54.4,
    "protein": 14.8,
    "mineral": 5.09,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-47",
    "date": "2024-07-12",
    "time": "11:08",
    "rawDate": "20240712110805",
    "device": "970",
    "weight": 84.1,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 12.0,
    "bodyFatRate": 14.3,
    "bmi": 27.2,
    "bmr": 1927,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.17,
    "leftArmMuscle": 4.33,
    "trunkMuscle": 31.4,
    "rightLegMuscle": 10.66,
    "leftLegMuscle": 10.64,
    "bodyWater": 52.8,
    "protein": 14.4,
    "mineral": 4.87,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-48",
    "date": "2024-07-06",
    "time": "12:29",
    "rawDate": "20240706122909",
    "device": "970",
    "weight": 83.4,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 11.3,
    "bodyFatRate": 13.6,
    "bmi": 26.9,
    "bmr": 1927,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.26,
    "leftArmMuscle": 4.29,
    "trunkMuscle": 31.5,
    "rightLegMuscle": 10.73,
    "leftLegMuscle": 10.73,
    "bodyWater": 52.8,
    "protein": 14.4,
    "mineral": 4.86,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-49",
    "date": "2024-06-24",
    "time": "08:20",
    "rawDate": "20240624082030",
    "device": "970",
    "weight": 83.8,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 12.0,
    "bodyFatRate": 14.3,
    "bmi": 27.1,
    "bmr": 1921,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.15,
    "leftArmMuscle": 4.3,
    "trunkMuscle": 31.3,
    "rightLegMuscle": 10.76,
    "leftLegMuscle": 10.73,
    "bodyWater": 52.6,
    "protein": 14.4,
    "mineral": 4.76,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-50",
    "date": "2024-06-21",
    "time": "09:05",
    "rawDate": "20240621090548",
    "device": "970",
    "weight": 83.5,
    "skeletalMuscle": 41.5,
    "bodyFatMass": 11.9,
    "bodyFatRate": 14.2,
    "bmi": 27.0,
    "bmr": 1917,
    "score": 94.0,
    "visceralFat": 4,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.27,
    "leftArmMuscle": 4.34,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.51,
    "leftLegMuscle": 10.54,
    "bodyWater": 52.5,
    "protein": 14.4,
    "mineral": 4.66,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-51",
    "date": "2024-06-17",
    "time": "09:18",
    "rawDate": "20240617091808",
    "device": "970",
    "weight": 84.4,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 12.5,
    "bodyFatRate": 14.8,
    "bmi": 27.2,
    "bmr": 1922,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.3,
    "leftArmMuscle": 4.35,
    "trunkMuscle": 31.9,
    "rightLegMuscle": 10.4,
    "leftLegMuscle": 10.44,
    "bodyWater": 52.6,
    "protein": 14.4,
    "mineral": 4.86,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-52",
    "date": "2024-06-10",
    "time": "08:16",
    "rawDate": "20240610081631",
    "device": "970",
    "weight": 86.2,
    "skeletalMuscle": 42.0,
    "bodyFatMass": 13.6,
    "bodyFatRate": 15.7,
    "bmi": 27.8,
    "bmr": 1939,
    "score": 94.0,
    "visceralFat": 5,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.27,
    "leftArmMuscle": 4.34,
    "trunkMuscle": 31.8,
    "rightLegMuscle": 10.7,
    "leftLegMuscle": 10.67,
    "bodyWater": 53.2,
    "protein": 14.6,
    "mineral": 4.77,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-53",
    "date": "2024-06-03",
    "time": "08:54",
    "rawDate": "20240603085433",
    "device": "970",
    "weight": 86.3,
    "skeletalMuscle": 41.6,
    "bodyFatMass": 14.2,
    "bodyFatRate": 16.5,
    "bmi": 27.9,
    "bmr": 1926,
    "score": 93.0,
    "visceralFat": 5,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.23,
    "leftArmMuscle": 4.33,
    "trunkMuscle": 31.6,
    "rightLegMuscle": 10.51,
    "leftLegMuscle": 10.59,
    "bodyWater": 52.8,
    "protein": 14.4,
    "mineral": 4.86,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-54",
    "date": "2024-05-27",
    "time": "08:10",
    "rawDate": "20240527081011",
    "device": "970",
    "weight": 85.8,
    "skeletalMuscle": 41.3,
    "bodyFatMass": 14.4,
    "bodyFatRate": 16.8,
    "bmi": 27.7,
    "bmr": 1911,
    "score": 92.0,
    "visceralFat": 5,
    "waistHipRatio": 0.84,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.13,
    "leftArmMuscle": 4.16,
    "trunkMuscle": 31.0,
    "rightLegMuscle": 10.53,
    "leftLegMuscle": 10.57,
    "bodyWater": 52.2,
    "protein": 14.3,
    "mineral": 4.85,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-55",
    "date": "2024-05-20",
    "time": "07:46",
    "rawDate": "20240520074628",
    "device": "970",
    "weight": 87.1,
    "skeletalMuscle": 40.9,
    "bodyFatMass": 16.2,
    "bodyFatRate": 18.6,
    "bmi": 28.2,
    "bmr": 1902,
    "score": 90.0,
    "visceralFat": 6,
    "waistHipRatio": 0.86,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.08,
    "leftArmMuscle": 4.14,
    "trunkMuscle": 30.8,
    "rightLegMuscle": 10.5,
    "leftLegMuscle": 10.53,
    "bodyWater": 51.9,
    "protein": 14.2,
    "mineral": 4.75,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-56",
    "date": "2024-05-04",
    "time": "11:54",
    "rawDate": "20240504115437",
    "device": "970",
    "weight": 85.4,
    "skeletalMuscle": 41.0,
    "bodyFatMass": 14.4,
    "bodyFatRate": 16.9,
    "bmi": 27.7,
    "bmr": 1903,
    "score": 91.0,
    "visceralFat": 5,
    "waistHipRatio": 0.85,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.24,
    "leftArmMuscle": 4.14,
    "trunkMuscle": 31.2,
    "rightLegMuscle": 10.48,
    "leftLegMuscle": 10.54,
    "bodyWater": 52.0,
    "protein": 14.3,
    "mineral": 4.75,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-57",
    "date": "2024-04-19",
    "time": "16:26",
    "rawDate": "20240419162605",
    "device": "970",
    "weight": 83.8,
    "skeletalMuscle": 40.4,
    "bodyFatMass": 13.5,
    "bodyFatRate": 16.1,
    "bmi": 27.5,
    "bmr": 1888,
    "score": 92.0,
    "visceralFat": 5,
    "waistHipRatio": 0.82,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.04,
    "leftArmMuscle": 4.1,
    "trunkMuscle": 30.4,
    "rightLegMuscle": 10.41,
    "leftLegMuscle": 10.52,
    "bodyWater": 51.5,
    "protein": 14.1,
    "mineral": 4.74,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-58",
    "date": "2024-04-06",
    "time": "11:06",
    "rawDate": "20240406110604",
    "device": "770",
    "weight": 87.0,
    "skeletalMuscle": 40.9,
    "bodyFatMass": 15.7,
    "bodyFatRate": 18.1,
    "bmi": 28.4,
    "bmr": 1909,
    "score": 91.0,
    "visceralFat": 6,
    "waistHipRatio": 0.86,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.17,
    "leftArmMuscle": 4.13,
    "trunkMuscle": 30.9,
    "rightLegMuscle": 10.26,
    "leftLegMuscle": 10.39,
    "bodyWater": 52.0,
    "protein": 14.2,
    "mineral": 5.06,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-59",
    "date": "2024-03-22",
    "time": "10:23",
    "rawDate": "20240322102309",
    "device": "770",
    "weight": 86.6,
    "skeletalMuscle": 40.6,
    "bodyFatMass": 16.2,
    "bodyFatRate": 18.7,
    "bmi": 28.0,
    "bmr": 1890,
    "score": 89.0,
    "visceralFat": 6,
    "waistHipRatio": 0.87,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": 4.01,
    "leftArmMuscle": 4.09,
    "trunkMuscle": 30.6,
    "rightLegMuscle": 10.24,
    "leftLegMuscle": 10.25,
    "bodyWater": 51.3,
    "protein": 14.2,
    "mineral": 4.94,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-60",
    "date": "2024-03-12",
    "time": "07:00",
    "rawDate": "20240312070016",
    "device": "770",
    "weight": 86.8,
    "skeletalMuscle": 40.4,
    "bodyFatMass": 16.8,
    "bodyFatRate": 19.4,
    "bmi": 28.0,
    "bmr": 1882,
    "score": 88.0,
    "visceralFat": 6,
    "waistHipRatio": 0.86,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": 3.99,
    "leftArmMuscle": 3.93,
    "trunkMuscle": 30.1,
    "rightLegMuscle": 10.36,
    "leftLegMuscle": 10.46,
    "bodyWater": 51.0,
    "protein": 14.1,
    "mineral": 4.94,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-61",
    "date": "2024-03-03",
    "time": "09:29",
    "rawDate": "20240303092938",
    "device": "Etc",
    "weight": 86.5,
    "skeletalMuscle": 40.4,
    "bodyFatMass": 16.4,
    "bodyFatRate": 19.0,
    "bmi": 29.9,
    "bmr": 1884,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "D자형 (골격근 발달 근육형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-62",
    "date": "2024-02-18",
    "time": "07:17",
    "rawDate": "20240218071740",
    "device": "Etc",
    "weight": 86.8,
    "skeletalMuscle": 39.2,
    "bodyFatMass": 18.5,
    "bodyFatRate": 21.3,
    "bmi": 30.0,
    "bmr": 1845,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-63",
    "date": "2024-01-24",
    "time": "08:57",
    "rawDate": "20240124085708",
    "device": "Etc",
    "weight": 88.0,
    "skeletalMuscle": 39.1,
    "bodyFatMass": 19.9,
    "bodyFatRate": 22.6,
    "bmi": 30.4,
    "bmr": 1841,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-64",
    "date": "2024-01-09",
    "time": "10:58",
    "rawDate": "20240109105849",
    "device": "970",
    "weight": 89.4,
    "skeletalMuscle": 39.7,
    "bodyFatMass": 20.4,
    "bodyFatRate": 22.9,
    "bmi": 29.4,
    "bmr": 1859,
    "score": 84.0,
    "visceralFat": 8,
    "waistHipRatio": 0.9,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": 3.94,
    "leftArmMuscle": 3.96,
    "trunkMuscle": 30.0,
    "rightLegMuscle": 9.99,
    "leftLegMuscle": 10.03,
    "bodyWater": 50.4,
    "protein": 13.9,
    "mineral": 4.72,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-65",
    "date": "2023-09-18",
    "time": "06:08",
    "rawDate": "20230918060820",
    "device": "770",
    "weight": 86.1,
    "skeletalMuscle": 38.6,
    "bodyFatMass": 19.2,
    "bodyFatRate": 22.3,
    "bmi": 28.1,
    "bmr": 1816,
    "score": 82.0,
    "visceralFat": 7,
    "waistHipRatio": 0.88,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": 3.72,
    "leftArmMuscle": 3.77,
    "trunkMuscle": 29.0,
    "rightLegMuscle": 10.01,
    "leftLegMuscle": 10.04,
    "bodyWater": 48.8,
    "protein": 13.4,
    "mineral": 4.7,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-66",
    "date": "2023-08-02",
    "time": "17:02",
    "rawDate": "20230802170217",
    "device": "770",
    "weight": 89.2,
    "skeletalMuscle": 38.7,
    "bodyFatMass": 21.2,
    "bodyFatRate": 23.8,
    "bmi": 29.1,
    "bmr": 1839,
    "score": 82.0,
    "visceralFat": 8,
    "waistHipRatio": 0.86,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.72,
    "leftArmMuscle": 3.72,
    "trunkMuscle": 28.7,
    "rightLegMuscle": 10.36,
    "leftLegMuscle": 10.5,
    "bodyWater": 49.6,
    "protein": 13.5,
    "mineral": 4.92,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-67",
    "date": "2023-07-30",
    "time": "02:28",
    "rawDate": "20230730022827",
    "device": "H20N",
    "weight": 88.5,
    "skeletalMuscle": 39.1,
    "bodyFatMass": 20.1,
    "bodyFatRate": 22.7,
    "bmi": 28.9,
    "bmr": 1847,
    "score": 83.0,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "측정 장비: InBody H20N"
  },
  {
    "id": "inbody-68",
    "date": "2023-06-26",
    "time": "10:50",
    "rawDate": "20230626105038",
    "device": "770",
    "weight": 89.2,
    "skeletalMuscle": 39.2,
    "bodyFatMass": 20.7,
    "bodyFatRate": 23.2,
    "bmi": 29.1,
    "bmr": 1849,
    "score": 83.0,
    "visceralFat": 8,
    "waistHipRatio": 0.89,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.88,
    "leftArmMuscle": 3.84,
    "trunkMuscle": 29.5,
    "rightLegMuscle": 10.13,
    "leftLegMuscle": 10.17,
    "bodyWater": 49.9,
    "protein": 13.7,
    "mineral": 4.92,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-69",
    "date": "2023-06-19",
    "time": "06:20",
    "rawDate": "20230619062012",
    "device": "770",
    "weight": 90.6,
    "skeletalMuscle": 39.1,
    "bodyFatMass": 22.1,
    "bodyFatRate": 24.4,
    "bmi": 29.6,
    "bmr": 1849,
    "score": 81.0,
    "visceralFat": 8,
    "waistHipRatio": 0.87,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.75,
    "leftArmMuscle": 3.75,
    "trunkMuscle": 28.9,
    "rightLegMuscle": 10.38,
    "leftLegMuscle": 10.5,
    "bodyWater": 49.9,
    "protein": 13.7,
    "mineral": 4.92,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-70",
    "date": "2023-06-12",
    "time": "16:27",
    "rawDate": "20230612162741",
    "device": "770",
    "weight": 90.3,
    "skeletalMuscle": 39.3,
    "bodyFatMass": 21.5,
    "bodyFatRate": 23.8,
    "bmi": 29.5,
    "bmr": 1856,
    "score": 82.0,
    "visceralFat": 8,
    "waistHipRatio": 0.9,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.91,
    "leftArmMuscle": 3.89,
    "trunkMuscle": 29.7,
    "rightLegMuscle": 10.15,
    "leftLegMuscle": 10.21,
    "bodyWater": 50.2,
    "protein": 13.8,
    "mineral": 4.83,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-71",
    "date": "2023-06-05",
    "time": "12:35",
    "rawDate": "20230605123515",
    "device": "770",
    "weight": 90.0,
    "skeletalMuscle": 38.9,
    "bodyFatMass": 21.9,
    "bodyFatRate": 24.3,
    "bmi": 29.4,
    "bmr": 1841,
    "score": 81.0,
    "visceralFat": 8,
    "waistHipRatio": 0.89,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.76,
    "leftArmMuscle": 3.83,
    "trunkMuscle": 29.2,
    "rightLegMuscle": 10.2,
    "leftLegMuscle": 10.27,
    "bodyWater": 49.6,
    "protein": 13.6,
    "mineral": 4.92,
    "notes": "측정 장비: InBody 770"
  },
  {
    "id": "inbody-72",
    "date": "2023-03-17",
    "time": "12:19",
    "rawDate": "20230317121952",
    "device": "970",
    "weight": 93.4,
    "skeletalMuscle": 38.3,
    "bodyFatMass": 26.6,
    "bodyFatRate": 28.5,
    "bmi": 30.7,
    "bmr": 1813,
    "score": 75.0,
    "visceralFat": 10,
    "waistHipRatio": 0.95,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": 3.81,
    "leftArmMuscle": 3.8,
    "trunkMuscle": 29.3,
    "rightLegMuscle": 9.88,
    "leftLegMuscle": 9.93,
    "bodyWater": 48.8,
    "protein": 13.4,
    "mineral": 4.6,
    "notes": "측정 장비: InBody 970"
  },
  {
    "id": "inbody-73",
    "date": "2022-06-21",
    "time": "21:45",
    "rawDate": "20220621214510",
    "device": "Etc",
    "weight": 87.8,
    "skeletalMuscle": 37.8,
    "bodyFatMass": 21.9,
    "bodyFatRate": 24.9,
    "bmi": 28.8,
    "bmr": 1793,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "C자형 (체지방 과다형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-74",
    "date": "2021-08-30",
    "time": "21:44",
    "rawDate": "20210830214430",
    "device": "Etc",
    "weight": 84.8,
    "skeletalMuscle": 37.8,
    "bodyFatMass": 18.6,
    "bodyFatRate": 21.9,
    "bmi": 27.8,
    "bmr": 1800,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-75",
    "date": "2020-08-18",
    "time": "21:42",
    "rawDate": "20200818214201",
    "device": "Etc",
    "weight": 86.2,
    "skeletalMuscle": 39.0,
    "bodyFatMass": 18.4,
    "bodyFatRate": 21.3,
    "bmi": 28.3,
    "bmr": 1835,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-76",
    "date": "2018-04-25",
    "time": "21:41",
    "rawDate": "20180425214137",
    "device": "Etc",
    "weight": 80.6,
    "skeletalMuscle": 37.9,
    "bodyFatMass": 14.3,
    "bodyFatRate": 17.7,
    "bmi": 26.5,
    "bmr": 1802,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-77",
    "date": "2017-11-24",
    "time": "15:37",
    "rawDate": "20171124153712",
    "device": "Etc",
    "weight": 76.2,
    "skeletalMuscle": 38.2,
    "bodyFatMass": 9.8,
    "bodyFatRate": 12.8,
    "bmi": 25.0,
    "bmr": 1804,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-78",
    "date": "2017-10-30",
    "time": "15:31",
    "rawDate": "20171030153128",
    "device": "Etc",
    "weight": 78.0,
    "skeletalMuscle": 38.6,
    "bodyFatMass": 11.2,
    "bodyFatRate": 14.3,
    "bmi": 25.6,
    "bmr": 1813,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-79",
    "date": "2017-09-29",
    "time": "15:30",
    "rawDate": "20170929153052",
    "device": "Etc",
    "weight": 77.3,
    "skeletalMuscle": 38.7,
    "bodyFatMass": 9.8,
    "bodyFatRate": 12.7,
    "bmi": 25.4,
    "bmr": 1828,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-80",
    "date": "2017-08-29",
    "time": "15:39",
    "rawDate": "20170829153919",
    "device": "Etc",
    "weight": 77.3,
    "skeletalMuscle": 38.0,
    "bodyFatMass": 11.1,
    "bodyFatRate": 14.3,
    "bmi": 25.4,
    "bmr": 1800,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-81",
    "date": "2017-06-26",
    "time": "15:26",
    "rawDate": "20170626152647",
    "device": "Etc",
    "weight": 74.1,
    "skeletalMuscle": 37.1,
    "bodyFatMass": 9.3,
    "bodyFatRate": 12.5,
    "bmi": 24.3,
    "bmr": 1770,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-82",
    "date": "2017-06-02",
    "time": "15:25",
    "rawDate": "20170602152550",
    "device": "Etc",
    "weight": 74.6,
    "skeletalMuscle": 37.9,
    "bodyFatMass": 8.4,
    "bodyFatRate": 11.3,
    "bmi": 24.5,
    "bmr": 1800,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-83",
    "date": "2017-05-10",
    "time": "21:40",
    "rawDate": "20170510214037",
    "device": "Etc",
    "weight": 77.2,
    "skeletalMuscle": 37.2,
    "bodyFatMass": 12.2,
    "bodyFatRate": 15.8,
    "bmi": 25.4,
    "bmr": 1774,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-84",
    "date": "2017-04-20",
    "time": "15:25",
    "rawDate": "20170420152510",
    "device": "Etc",
    "weight": 76.0,
    "skeletalMuscle": 36.5,
    "bodyFatMass": 12.4,
    "bodyFatRate": 16.3,
    "bmi": 25.0,
    "bmr": 1744,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-85",
    "date": "2017-04-18",
    "time": "15:38",
    "rawDate": "20170418153817",
    "device": "Etc",
    "weight": 68.4,
    "skeletalMuscle": 34.2,
    "bodyFatMass": 8.3,
    "bodyFatRate": 12.2,
    "bmi": 22.5,
    "bmr": 1668,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-86",
    "date": "2017-04-03",
    "time": "15:19",
    "rawDate": "20170403151943",
    "device": "Etc",
    "weight": 77.7,
    "skeletalMuscle": 36.6,
    "bodyFatMass": 13.9,
    "bodyFatRate": 17.9,
    "bmi": 25.5,
    "bmr": 1748,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-87",
    "date": "2017-02-24",
    "time": "15:37",
    "rawDate": "20170224153738",
    "device": "Etc",
    "weight": 80.3,
    "skeletalMuscle": 36.3,
    "bodyFatMass": 17.0,
    "bodyFatRate": 21.2,
    "bmi": 26.4,
    "bmr": 1737,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-88",
    "date": "2016-06-17",
    "time": "21:39",
    "rawDate": "20160617213951",
    "device": "Etc",
    "weight": 80.0,
    "skeletalMuscle": 36.3,
    "bodyFatMass": 16.3,
    "bodyFatRate": 20.4,
    "bmi": 26.3,
    "bmr": 1746,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  },
  {
    "id": "inbody-89",
    "date": "2015-08-26",
    "time": "21:38",
    "rawDate": "20150826213850",
    "device": "Etc",
    "weight": 74.0,
    "skeletalMuscle": 36.2,
    "bodyFatMass": 8.3,
    "bodyFatRate": 11.2,
    "bmi": 24.3,
    "bmr": 1789,
    "score": null,
    "visceralFat": 8,
    "waistHipRatio": null,
    "bodyType": "I자형 (표준 균형형)",
    "rightArmMuscle": null,
    "leftArmMuscle": null,
    "trunkMuscle": null,
    "rightLegMuscle": null,
    "leftLegMuscle": null,
    "bodyWater": null,
    "protein": null,
    "mineral": null,
    "notes": "정기 측정 기록"
  }
]
};


// =========================================================================
// =========================================================================
// 방송대 학점관리: 사회복지사·평생교육사·방통대 학점 이수 계획표 (편집 가능)
// =========================================================================
const INITIAL_KNOU_CREDIT_PLAN = {
  "planVersion": 3,
  "semesters": [
    "25년 2학기",
    "26년 1학기",
    "26년 2학기",
    "27년 1학기",
    "기존 이수 과목 or 유사 인정 과목"
  ],
  "priorMajor": 30,
  "priorGeneral": 33,
  "totalTarget": 130,
  "passQual": {
    "swReq": 10,
    "swOpt": 7,
    "leReq": 5,
    "leOpt": 5,
    "major": 69,
    "general": 24
  },
  "rows": [
    {
      "id": "cp-01",
      "semester": "25년 2학기",
      "name": "평생교육프로그램개발론",
      "swReq": false,
      "swOpt": false,
      "leReq": "O (필수)",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "done",
      "note": "대면 수업",
      "grade": "A+"
    },
    {
      "id": "cp-02",
      "semester": "25년 2학기",
      "name": "평생교육경영론",
      "swReq": false,
      "swOpt": false,
      "leReq": "O (필수)",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "done",
      "note": "",
      "grade": "A0"
    },
    {
      "id": "cp-03",
      "semester": "25년 2학기",
      "name": "사례관리론 (전공, 2학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "done",
      "note": "대면 수업",
      "grade": "A+"
    },
    {
      "id": "cp-04",
      "semester": "25년 2학기",
      "name": "지역사회복지론(대면, 전공, 2학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "done",
      "note": "대면 수업",
      "grade": "A0"
    },
    {
      "id": "cp-05",
      "semester": "25년 2학기",
      "name": "여성복지론 (전공, 2학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "done",
      "note": "",
      "grade": "A+"
    },
    {
      "id": "cp-06",
      "semester": "25년 2학기",
      "name": "인간행동과 사회환경",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "done",
      "note": "사회복지학과 개설로 신청",
      "grade": "A0"
    },
    {
      "id": "cp-07",
      "semester": "25년 2학기",
      "name": "원격 교육의 이해",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": 1,
      "status": "done",
      "note": "",
      "grade": "P"
    },
    {
      "id": "cp-08",
      "semester": "26년 1학기",
      "name": "평생교육론",
      "swReq": false,
      "swOpt": false,
      "leReq": "O (필수)",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "",
      "note": "대면 수업",
      "grade": ""
    },
    {
      "id": "cp-09",
      "semester": "26년 1학기",
      "name": "평생교육방법론",
      "swReq": false,
      "swOpt": false,
      "leReq": "O (필수)",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "",
      "note": "대면 수업",
      "grade": ""
    },
    {
      "id": "cp-10",
      "semester": "26년 1학기",
      "name": "노인교육론",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "O  (선택1)",
      "major": "",
      "general": 3,
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-11",
      "semester": "26년 1학기",
      "name": "사회복지(학)개론 (전공, 1학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "대면 수업",
      "grade": ""
    },
    {
      "id": "cp-12",
      "semester": "26년 1학기",
      "name": "사회복지법제와 실천 (전공, 1학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-13",
      "semester": "26년 1학기",
      "name": "사회복지실천기술론 (전공, 1학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "대면 수업",
      "grade": ""
    },
    {
      "id": "cp-14",
      "semester": "26년 1학기",
      "name": "사회복지행정론 (일반, 1학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-15",
      "semester": "26년 2학기",
      "name": "사회복지실천론 (일반, 2학기)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": 3,
      "status": "",
      "note": "사회복지학과 개설로 신청",
      "grade": ""
    },
    {
      "id": "cp-16",
      "semester": "26년 2학기",
      "name": "교육사회학",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "O (선택1)",
      "major": "",
      "general": 3,
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-17",
      "semester": "26년 2학기",
      "name": "사회복지와 문화다양성 (전공, 2학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-18",
      "semester": "26년 2학기",
      "name": "복지국가론(전공, 2학기) => 가족상담및치료 ==> 사회문제론",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "과목 열리는지 체크",
      "grade": ""
    },
    {
      "id": "cp-19",
      "semester": "26년 2학기",
      "name": "사회복지정책론",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-20",
      "semester": "26년 2학기",
      "name": "사회복지조사론*",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "사회복지사 & 평생교육사 중복인정",
      "grade": ""
    },
    {
      "id": "cp-21",
      "semester": "26년 2학기",
      "name": "+ 1학점짜리 ai 활용 교육",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-22",
      "semester": "26년 2학기",
      "name": "평생교육실습 (학기 초) (실습과정, 학점 은행 등록 필수 ) (4주, 160시간 이상 실습)",
      "swReq": false,
      "swOpt": false,
      "leReq": "O (필수)",
      "leOpt": "",
      "major": 0,
      "general": 0,
      "status": "",
      "note": "별도 기관에서 이수 후 학점 인정 등록할 것",
      "grade": ""
    },
    {
      "id": "cp-23",
      "semester": "26년 2학기",
      "name": "+인간행동과사회환경 재수강",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-24",
      "semester": "27년 1학기",
      "name": "사회복지와 인권 (전공, 1학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-25",
      "semester": "27년 1학기",
      "name": "사회복지현장실습 (160시간 이상 실습, 세미나 3회)",
      "swReq": true,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "방통대 등록 후 별도 기관에서 이수",
      "grade": ""
    },
    {
      "id": "cp-26",
      "semester": "27년 1학기",
      "name": "사회복지윤리와 철학 (전공, 1학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-27",
      "semester": "27년 1학기",
      "name": "장애인복지론 (전공,1학기)",
      "swReq": false,
      "swOpt": true,
      "leReq": "",
      "leOpt": "",
      "major": 3,
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-28",
      "semester": "27년 1학기",
      "name": "재수강 or 평생교육사 이수과목 대비",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-29",
      "semester": "27년 1학기",
      "name": "재수강 or 평생교육사 이수과목 대비",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "",
      "major": "",
      "general": "",
      "status": "",
      "note": "",
      "grade": ""
    },
    {
      "id": "cp-30",
      "semester": "기존 이수 과목 or 유사 인정 과목",
      "name": "상담심리학 (선택2)",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "O (선택2)",
      "major": "",
      "general": "",
      "status": "",
      "note": "학점은행 수행 완료",
      "grade": "P"
    },
    {
      "id": "cp-31",
      "semester": "기존 이수 과목 or 유사 인정 과목",
      "name": "기업교육론 (선택 2기술경영 유사 과목 확인)",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "O (선택2)",
      "major": "",
      "general": "",
      "status": "",
      "note": "25/10/01 ~ 08 이내 유사과목 사전심의 진행",
      "grade": ""
    },
    {
      "id": "cp-32",
      "semester": "기존 이수 과목 or 유사 인정 과목",
      "name": "교육조사방법론 (선택 2, 사회복지조사론 유사과목 인정)",
      "swReq": false,
      "swOpt": false,
      "leReq": "",
      "leOpt": "O (선택2)",
      "major": "",
      "general": "",
      "status": "",
      "note": "(선택 2, 사회복지조사론 유사과목 인정)",
      "grade": ""
    }
  ]
};

// 14. 국립 한국방송통신대학교 (KNOU) 사회복지학과 학점 및 수강 관리 데이터
// 2026학년도 2학기 (형성평가 20% + 중간과제물 30% + 기말고사 50%)
// =========================================================================
const INITIAL_KNOU_DATA = {
  knouDataVersion: 4,
  creditPlan: JSON.parse(JSON.stringify(INITIAL_KNOU_CREDIT_PLAN)),
  university: '국립 한국방송통신대학교 (KNOU)',
  department: '사회복지학과',
  currentSemester: '2026학년도 2학기',
  semesterDDay: 'D-73',
  formativePeriod: {
    startDate: '2026-08-17',
    endDate: '2026-12-13',
    remainingDays: 73,
    memo: '형성평가(강의 수강) 인정 기간: 2026.08.17 ~ 2026.12.13 (73일 남음 · 기한 내 100% 수강 시 20점 만점 인정)'
  },
  evaluationPolicy: {
    formativeRate: 20, // 형성평가(수강률) 20%
    midtermRate: 30,   // 중간과제물 or 출석과제물 30%
    finalExamRate: 50, // 기말고사 50%
    totalScore: 100
  },
  summary: {
    totalCredits: 25,     // 9개 과목 총 25학점
    confirmedCredits: 4,  // AI기초소양 1학점(100% 달성) + 평생교육사실습 3학점(이수완료·검증진행)
    inProgressCredits: 21 // 7개 3학점 전공/교양 과목
  },
  courses: [
    {
      id: 'knou-ai-native',
      code: 'GE-101',
      name: 'AI네이티브가되기위한기초소양',
      credits: 1,
      category: '교양/마이크로디그리',
      categoryBadge: '교양 1학점',
      progress: 100.0,
      status: 'completed', // completed | in_progress | verified_pending
      statusBadge: '이수완료 100%',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
      ruleType: 'pass_only',
      specialRule: '수강률 100% 달성 완료 시 1학점 부여 (Pass 과목)',
      formativeScore: 20.0, // 20점 만점 환산
      midtermType: '해당없음',
      midtermStatus: 'none',
      finalType: '해당없음',
      finalStatus: 'none',
      isConfirmed: true,
      memo: '수강률 100% 충족 완료! 1학점 취득 확정 과목입니다. 🎉'
    },
    {
      id: 'knou-practice-theory',
      code: 'SW-201',
      name: '사회복지실천론',
      credits: 3,
      category: '전공필수',
      categoryBadge: '전공필수 3학점',
      progress: 53.33,
      status: 'in_progress',
      statusBadge: '형성평가 53.33%',
      badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 10.67,
      midtermType: '중간과제물',
      midtermStatus: 'pending', // pending | in_progress | submitted
      midtermDueDate: '2026-10-25',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-06',
      isConfirmed: false,
      memo: '사회복지실천의 통합적 접근 방법론 및 사회복지사 관계형성 기술 학습'
    },
    {
      id: 'knou-diversity',
      code: 'SW-202',
      name: '사회복지와문화다양성',
      credits: 3,
      category: '전공선택',
      categoryBadge: '전공선택 3학점',
      progress: 46.67,
      status: 'in_progress',
      statusBadge: '형성평가 46.67%',
      badgeClass: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 9.33,
      midtermType: '중간과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-10-25',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-06',
      isConfirmed: false,
      memo: '다문화사회 진입에 따른 문화다양성 이해 및 소수자 인권과 복지 지원 체계'
    },
    {
      id: 'knou-policy',
      code: 'SW-203',
      name: '사회복지정책론',
      credits: 3,
      category: '전공필수',
      categoryBadge: '전공필수 3학점',
      progress: 6.67,
      status: 'in_progress',
      statusBadge: '형성평가 6.67%',
      badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 1.33,
      midtermType: '중간과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-10-27',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-13',
      isConfirmed: false,
      memo: '복지국가 발달사, 정책 형성 및 분석 모델, 소득보장 및 사회보험 체계 분석'
    },
    {
      id: 'knou-research',
      code: 'SW-204',
      name: '사회복지조사론',
      credits: 3,
      category: '전공필수',
      categoryBadge: '전공필수 3학점',
      progress: 0.0,
      status: 'in_progress',
      statusBadge: '형성평가 0%',
      badgeClass: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 출석수업과제물(30%) + 기말고사(50%)',
      formativeScore: 0.0,
      midtermType: '출석수업 과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-11-05',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-13',
      isConfirmed: false,
      memo: '과학적 조사 연구 과정, 가설 검증, 설문지 작성 및 양적/질적 데이터 분석 기초'
    },
    {
      id: 'knou-social-problems',
      code: 'SW-205',
      name: '사회문제론',
      credits: 3,
      category: '전공선택',
      categoryBadge: '전공선택 3학점',
      progress: 46.67,
      status: 'in_progress',
      statusBadge: '형성평가 46.67%',
      badgeClass: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 9.33,
      midtermType: '중간과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-10-25',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-06',
      isConfirmed: false,
      memo: '빈곤, 불평등, 고령화 등 한국 현대 사회의 주요 구조적 쟁점과 대안적 해결책'
    },
    {
      id: 'knou-human-behavior',
      code: 'SW-206',
      name: '인간행동과사회환경',
      credits: 3,
      category: '전공필수',
      categoryBadge: '전공필수 3학점',
      progress: 0.0,
      status: 'in_progress',
      statusBadge: '형성평가 0%',
      badgeClass: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 0.0,
      midtermType: '중간과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-10-27',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-13',
      isConfirmed: false,
      memo: '생애주기별 인간 발달 단계(태아기~노년기)와 성격이론, 사회환경 체계의 영향 분석'
    },
    {
      id: 'knou-edu-sociology',
      code: 'SW-207',
      name: '교육사회학',
      credits: 3,
      category: '전공선택/교육',
      categoryBadge: '전공선택 3학점',
      progress: 53.33,
      status: 'in_progress',
      statusBadge: '형성평가 53.33%',
      badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 10.67,
      midtermType: '중간과제물',
      midtermStatus: 'pending',
      midtermDueDate: '2026-10-25',
      finalType: '기말고사 (객관식)',
      finalStatus: 'scheduled',
      finalExamDate: '2026-12-06',
      isConfirmed: false,
      memo: '교육의 사회적 기능, 학력주의와 교육격차, 사회계층 이동과 학교 교육의 사회구조적 분석'
    },
    {
      id: 'knou-lifelong-practicum',
      code: 'LL-301',
      name: '평생교육사실습',
      credits: 3,
      category: '자격실습',
      categoryBadge: '실습 3학점',
      progress: 100.0,
      status: 'verified_pending',
      statusBadge: '이수 완료 (포트폴리오 검증 중)',
      badgeClass: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
      ruleType: 'practicum_verified',
      specialRule: '별도 지정 기관 160시간 현장실습 이수 완료 · 현재 최종 포트폴리오 심사/검증 진행 중',
      formativeScore: 20.0,
      midtermType: '실습일지 및 기관평가서',
      midtermStatus: 'submitted',
      finalType: '최종 실습 포트폴리오',
      finalStatus: 'reviewing',
      isConfirmed: true,
      memo: '별도 인가 교육기관에서 160시간 현장실습 공식 이수 완료. 현재 대학 및 국가평생교육진흥원 최종 포트폴리오 자격 검증 진행 중입니다. 🏛️'
    }
  ]
};


// =========================================================================
// 15. 1:1 회화 교정 기반 데일리 영문법 브리핑 데이터 (409개 교정 & 16대 이디엄)
// =========================================================================
const INITIAL_ENGLISH_DATA = {
  "englishDataVersion": 1,
  "title": "1:1 회화 교정 기반 데일리 영문법 & 표현 브리핑",
  "tutor": "P25★Report Aaron",
  "totalCount": 409,
  "categories": [
    {
      "id": "all",
      "name": "전체 교정 (409)",
      "count": 409,
      "icon": "fa-list-check"
    },
    {
      "id": "noun",
      "name": "관사 & 명사 수일치",
      "count": 152,
      "icon": "fa-box-archive"
    },
    {
      "id": "phrasing",
      "name": "원어민 구어체 & 뉘앙스",
      "count": 103,
      "icon": "fa-comments"
    },
    {
      "id": "prep",
      "name": "전치사 & 연어",
      "count": 84,
      "icon": "fa-bullseye"
    },
    {
      "id": "infinitive",
      "name": "동명사 vs 부정사",
      "count": 52,
      "icon": "fa-arrows-rotate"
    },
    {
      "id": "tense",
      "name": "시제 & 조동사",
      "count": 11,
      "icon": "fa-clock"
    },
    {
      "id": "participle",
      "name": "감정 분사 & 수동태",
      "count": 7,
      "icon": "fa-masks-theater"
    }
  ],
  "idioms": [
    {
      "id": "idiom-1",
      "expression": "catch napping",
      "meaning": "- getting someone to deal with a situation since you put them in it suddenly and they were unprepared and not paying attention. - to surprise someone. - take someone unawares. - to capitalize on or exploit someone when they are not attentive. - the realization that one is sleeping when one should not be. - to catch someone at a disadvantaged."
    },
    {
      "id": "idiom-2",
      "expression": "bring to the table",
      "meaning": "- making a valuable contribution to a group, company, or individual. - raising an issue for further discussion. - to offer something that will be an advantage."
    },
    {
      "id": "idiom-3",
      "expression": "spitting image",
      "meaning": "spitting image Meaning: - look exactly like someone else - precise resemblance - person who strongly resembles another - look extremely similar to someone"
    },
    {
      "id": "idiom-4",
      "expression": "can't hold a candle to..",
      "meaning": "- shows inferiority by comparison; used when one thing is considered much less impressive or competent than another. - denotes that someone or something is far below the standard or quality of another. - highlights a significant difference in capability, quality, or performance between two entities, where one falls short. - implies that a person or thing lacks the skill, talent, or quality to be on par with another. - suggests that, in direct comparison, one individual or item is not nearly as effective, accomplished, or admirable as another."
    },
    {
      "id": "idiom-5",
      "expression": "You bet",
      "meaning": "- for sure - most certainly - without any doubt - to agree completely - to express agreement - yes, of course"
    },
    {
      "id": "idiom-6",
      "expression": "walk on eggshell",
      "meaning": "- to be careful about one’s words or actions around another person - to be cautious of offending someone through your words or actions - to be overly careful around someone because they are sensitive"
    },
    {
      "id": "idiom-7",
      "expression": "cut the cord",
      "meaning": "- to end a connection with someone - to stop relying on someone or something - to do something that makes one independent - stop needing somebody else to look after you and start acting independently"
    },
    {
      "id": "idiom-8",
      "expression": "also, a fast buck",
      "meaning": "- to make money quickly. - to make money in a dishonest manner. - to earn money quickly and fast, usually in an unethical way. - to earn an amount of money by completing a favour for another individual. - an offer to help someone make money quickly for taking on a job."
    },
    {
      "id": "idiom-9",
      "expression": "when pigs fly",
      "meaning": "- Impossible or highly unlikely to happen. - “When pigs fly” means that something will never happen. It expresses the impossibility of an event or situation occurring. - The phrase is used humorously to denote skepticism or disbelief in the likelihood of a particular event taking place. - It can also imply that something is extremely unlikely or improbable, to the point of being impossible. - The idiom serves as a sarcastic response to overly optimistic or unrealistic expectations. - It is typically used in informal settings to emphasize the sheer impossibility of an event."
    },
    {
      "id": "idiom-10",
      "expression": "long in the tooth",
      "meaning": "- aging; elderly - old or past one’s prime - becoming outdated or obsolete - no longer young - to get too old for something"
    },
    {
      "id": "idiom-11",
      "expression": "there's no such thing as free lunch",
      "meaning": "- to be aware of something that seems free of cost but may have a charge levied in another form - - to get deceived in any form by initially getting lured through offers, discounts and free gifts - to know that nobody gives out anything for free even if they say that at the onset"
    },
    {
      "id": "idiom-12",
      "expression": "as clear as mud",
      "meaning": "- extremely unclear or confusing. - something that is hard to comprehend or follow. - information or explanations that fail to be straightforward. - used when something is explained in a way that leaves out key details, making it hard to grasp. - situations where the explanation or communication makes no sense, leaving the listener bewildered. E"
    },
    {
      "id": "idiom-13",
      "expression": "come up",
      "meaning": "- to move toward someone. - to come closer in time or space. - to be mentioned or talked about. - to find a new thought - something unexpectedly happens."
    },
    {
      "id": "idiom-14",
      "expression": "rest assured",
      "meaning": "- emphasizing that there is no need to worry - stressing determination to do something - confidence that something will happen"
    },
    {
      "id": "idiom-15",
      "expression": "one stop shop",
      "meaning": "a store that fulfills various requirements which is preferable by customers it is usually a place of business that offers many services and products which are related"
    },
    {
      "id": "idiom-16",
      "expression": "waiting in the wings",
      "meaning": "be ready to step into a job or position when you have the chance. not yet active or important but ready or likely to be so soon. to be in a state of readiness, expecting to take over a role or position soon. to stay out of sight or in the background, anticipating the right moment to emerge or become involved. to be ready to take an opportunity, especially one created by someone else leaving. to be on standby, prepared to participate or intervene when necessary."
    }
  ],
  "corrections": [
    {
      "id": "eng-1",
      "num": 1,
      "youSaid": "After this class, I'm planning about that project.",
      "betterSay": "After this class, I plan to focus on the project.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-2",
      "num": 2,
      "youSaid": "I prepare resume whole this weekend.",
      "betterSay": "I'm going to prepare my resume this whole weekend.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "단순 현재 시제 대신 계획된 미래 행동을 명확히 전달하기 위해 be going to 또는 plan to를 사용합니다."
    },
    {
      "id": "eng-3",
      "num": 3,
      "youSaid": "In Korea our older adults mired in poverty than OECD member countries' figures, so we have to thinking about our roles and benefits.",
      "betterSay": "Since South Korea's elderly poverty rate is higher than other OECD countries, we need to think about how we can help.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-4",
      "num": 4,
      "youSaid": "I'm planning to my retire plans, actually I'm planning to volunteer, sharing my knowledges, know-how to people.",
      "betterSay": "I am planning to share my knowledge and expertise with others after my retirement.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "감정을 유발하는 원인(-ing)과 주체가 느끼는 상태(-ed), 능동/수동의 구분을 바로잡은 문장입니다."
    },
    {
      "id": "eng-5",
      "num": 5,
      "youSaid": "Actually, I always thinking about what is the goal of my life.",
      "betterSay": "Actually, I always think about the purpose of my life.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "항상 일어나는 습관적이고 지속적인 생각은 현재진행형 대신 단순 현재형(always think about)을 씁니다."
    },
    {
      "id": "eng-6",
      "num": 6,
      "youSaid": "This ordinance have power someone have to do.",
      "betterSay": "This ordinance empowers someone to do something.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-7",
      "num": 7,
      "youSaid": "It is about ordinance Seoul station square.",
      "betterSay": "This article is about the Seoul Station Square ordinance.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-8",
      "num": 8,
      "youSaid": "Sometimes I wants to go other city such as Seoul station.",
      "betterSay": "Sometimes I want to visit other cities, like Seoul.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-9",
      "num": 9,
      "youSaid": "Because Seoul City Station is one of the huge station.",
      "betterSay": "Seoul Station is one of the largest train stations.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-10",
      "num": 10,
      "youSaid": "Actually, I am bother about that.",
      "betterSay": "Actually, I am bothered about that.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "수동적 감정 상태(~때문에 신경쓰이다/성가시다)는 수동태 be bothered by/about으로 나타냅니다."
    },
    {
      "id": "eng-11",
      "num": 11,
      "youSaid": "A lot of technologies changed people spend their free time.",
      "betterSay": "A lot of technologies have changed the way people spend their free time.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-12",
      "num": 12,
      "youSaid": "Ten years ago, we can just used cell phone at our house.",
      "betterSay": "Ten years ago, we only had cell phones at home.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-13",
      "num": 13,
      "youSaid": "At that time, my father bought desktop. It was pretty expensive.",
      "betterSay": "Back then, my dad bought a desktop computer. It was pretty expensive.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-14",
      "num": 14,
      "youSaid": "Some people wants to getting better jobs and positions.",
      "betterSay": "Some people want to get better jobs and positions.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-15",
      "num": 15,
      "youSaid": "I think outdoor activities are much more healthier than indoor activities.",
      "betterSay": "I think outdoor activities are much healthier than indoor activities.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-16",
      "num": 16,
      "youSaid": "We used to running around park near my studio.",
      "betterSay": "We used to run around the park near my flat.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-17",
      "num": 17,
      "youSaid": "Now I'm in cafeteria.",
      "betterSay": "I am now in a cafeteria.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-18",
      "num": 18,
      "youSaid": "When I had a meals.",
      "betterSay": "When I had a meal.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-19",
      "num": 19,
      "youSaid": "She has tried eat raw beef salad in Korean.",
      "betterSay": "She has tried the Korean dish of raw beef salad. OR She has tried eating Korean raw beef salad.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-20",
      "num": 20,
      "youSaid": "Sometimes I conversation with other people or friends, I cannot imagine.",
      "betterSay": "I cannot come",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-21",
      "num": 21,
      "youSaid": "I've decided to resign my job.",
      "betterSay": "I've decided to resign.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-22",
      "num": 22,
      "youSaid": "I've decided to work out every morning for my daily routine.",
      "betterSay": "I've decided to work out every morning as a part of my daily routines.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-23",
      "num": 23,
      "youSaid": "It's kind of ban list about some people.",
      "betterSay": "This is a list of banned individuals.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-24",
      "num": 24,
      "youSaid": "Every people can use this system.",
      "betterSay": "Everyone can use this system.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-25",
      "num": 25,
      "youSaid": "It is quite passive preventation because it's not only way prevent their violent or sexual harassment.",
      "betterSay": "This is a passive prevention method, as it's not the only way to prevent violent or sexual harassment.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-26",
      "num": 26,
      "youSaid": "They can't control their work and they can manage their self-esteam.",
      "betterSay": "They can't control their work, and their self-esteem suffers.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-27",
      "num": 27,
      "youSaid": "Just like something is not addiction, I think.",
      "betterSay": "Liking something is not an addiction.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-28",
      "num": 28,
      "youSaid": "Sometimes I addicted something such as workout, computer game or Instagram.",
      "betterSay": "I'm addicted to working out, playing computer games and Instagram.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-29",
      "num": 29,
      "youSaid": "I had personal computer, so I used to use YouTube platform.",
      "betterSay": "Since I had a personal computer, I often used the YouTube platform.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-30",
      "num": 30,
      "youSaid": "I can't memorize about that.",
      "betterSay": "I can't memorize that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-31",
      "num": 31,
      "youSaid": "Sometimes I affected my smartphone.",
      "betterSay": "Sometimes I am affected by my smartphone.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-32",
      "num": 32,
      "youSaid": "I decided to working out in the gym.",
      "betterSay": "I decided to start working out at the gym",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-33",
      "num": 33,
      "youSaid": "I decide to go for gym for rock climbing.",
      "betterSay": "I decided to go to the gym to rock climb.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-34",
      "num": 34,
      "youSaid": "I try to broke that bad habit.",
      "betterSay": "I tried to break that bad habit of mine.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-35",
      "num": 35,
      "youSaid": "I really love drink alcohol but not alcohol.",
      "betterSay": "I really love drinking alcohol but not alcohol.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-36",
      "num": 36,
      "youSaid": "I think it's just politic issue.",
      "betterSay": "I believe this is primarily a political issue.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-37",
      "num": 37,
      "youSaid": "We know about our before situation.",
      "betterSay": "We are aware of our previous situation.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-38",
      "num": 38,
      "youSaid": "What kind of color do you favorite?",
      "betterSay": "What kind of color do you like most? OR What is your favorite color?",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-39",
      "num": 39,
      "youSaid": "So, I asked to them prefer.",
      "betterSay": "So, I asked their preference.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-40",
      "num": 40,
      "youSaid": "What's wrong with fried chicken delivery man?",
      "betterSay": "What's wrong with the fried chicken delivery man?",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-41",
      "num": 41,
      "youSaid": "What's wrong with baker?",
      "betterSay": "What's wrong with the baker?",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-42",
      "num": 42,
      "youSaid": "After a month, I asked to her about that.",
      "betterSay": "After a month, I asked her about that.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-43",
      "num": 43,
      "youSaid": "How come didn't you drive to my home?",
      "betterSay": "How come you didn't drive to my home?",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-44",
      "num": 44,
      "youSaid": "I think I have to waiting to real new news",
      "betterSay": "I think I'd better wait for real news.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-45",
      "num": 45,
      "youSaid": "I had to met the doctor.",
      "betterSay": "I had to mee the doctor.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-46",
      "num": 46,
      "youSaid": "I didn't know about that my bosses saying.",
      "betterSay": "I didn't know what my boss was talking about.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-47",
      "num": 47,
      "youSaid": "My bosses already say to me about that report.",
      "betterSay": "My boss already told me about the report.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-48",
      "num": 48,
      "youSaid": "I have been to travel Thailand.",
      "betterSay": "I have been to Thailand.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-49",
      "num": 49,
      "youSaid": "They visited to Korea once or twice before.",
      "betterSay": "They have visited Korea once or twice previously.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-50",
      "num": 50,
      "youSaid": "I should have searched that word meaning.",
      "betterSay": "I should have searched the meaning of that word.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-51",
      "num": 51,
      "youSaid": "It was really embarrassed.",
      "betterSay": "It was really embarrassing.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "상황이나 경험이 주는 느낌은 -ing(embarrassing), 사람이 그 감정을 느낄 때는 -ed(embarrassed)를 사용합니다."
    },
    {
      "id": "eng-52",
      "num": 52,
      "youSaid": "I think some newses have politic their own ways so they can't talk their opinion what they want.",
      "betterSay": "I believe some news outlets may be politically influenced, limiting their ability to express their desired opinions freely.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "news는 항상 단수 취급하는 불가산 명사이므로, 개별 기사나 방송국을 지칭할 때는 news outlets 또는 news stories를 사용합니다."
    },
    {
      "id": "eng-53",
      "num": 53,
      "youSaid": "1 in 3 Korean workers believe generative AI can change their job.",
      "betterSay": "1 in 3 Korean workers believe generative AI could replace them.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-54",
      "num": 54,
      "youSaid": "They have to looking for what is the next chance and what is the most important thing of generative AI.",
      "betterSay": "They need to identify the next opportunities and the most critical aspects of generative AI.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-55",
      "num": 55,
      "youSaid": "It was pretty bad weekend.",
      "betterSay": "It was a pretty bad weekend.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-56",
      "num": 56,
      "youSaid": "Today my grandmother, she met doctor.",
      "betterSay": "My grandmother had a consultation with the doctor today.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-57",
      "num": 57,
      "youSaid": "My mother waiting for her hospital.",
      "betterSay": "My mother is waiting for her at the hospital.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-58",
      "num": 58,
      "youSaid": "It is unconvenient.",
      "betterSay": "It is inconvenient.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-59",
      "num": 59,
      "youSaid": "A lot of foreign tourists complain to Korean taxi drivers and sellers about illegal exorbitant charges and hygiene services.",
      "betterSay": "Many foreign tourists complain to Korean taxi drivers and vendors about excessive charges and poor hygiene.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-60",
      "num": 60,
      "youSaid": "At that time, I want to go home rapidly.",
      "betterSay": "At that time, I wanted to go home rapidly.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-61",
      "num": 61,
      "youSaid": "He say to me, he want 2,000 won for that location, but it was too short distance.",
      "betterSay": "He told me he wanted 2,000 won for such a short distance.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-62",
      "num": 62,
      "youSaid": "My work almost finished. I think after this I can prepare go home.",
      "betterSay": "I am almost finished working. I think after class, I can prepare going home.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-63",
      "num": 63,
      "youSaid": "I'm planning to something.",
      "betterSay": "I'm planning to do something.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-64",
      "num": 64,
      "youSaid": "I think it's different with other one.",
      "betterSay": "I think it's different from the other one.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-65",
      "num": 65,
      "youSaid": "I concerned about how can I use this sentence with free talking with other foreigners.",
      "betterSay": "I’m concerned about how I can use this sentence during casual conversations with other foreigners.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-66",
      "num": 66,
      "youSaid": "The last thing I want to do is lost my smartphone.",
      "betterSay": "Losing my smartphone is the last thing I want.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-67",
      "num": 67,
      "youSaid": "It is about caffeine and sleep corellationship.",
      "betterSay": "It's about the correlation between caffeine and sleep.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-68",
      "num": 68,
      "youSaid": "I couldn't summary about this article.",
      "betterSay": "I couldn't summarize this article.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-69",
      "num": 69,
      "youSaid": "But this article said, some of studies related about the correlationship that it's not equal to common belief.",
      "betterSay": "But, according to this article, some studies indicate a correlation contrary to popular belief.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-70",
      "num": 70,
      "youSaid": "I have allergy for caffeine in late time.",
      "betterSay": "I have a caffeine sensitivity later in the day.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-71",
      "num": 71,
      "youSaid": "If I sleep late time, I have to wake up late time.",
      "betterSay": "If I go to bed late, I wake up late.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-72",
      "num": 72,
      "youSaid": "My mother really love 3-in-1 coffee because it has sweety taste.",
      "betterSay": "My mother really loves 3-in-1 coffee because of its sweet taste.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-73",
      "num": 73,
      "youSaid": "When I'm planning to something.",
      "betterSay": "When I'm planning to do something.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-74",
      "num": 74,
      "youSaid": "I have to dinner with salad because I want to lose weight.",
      "betterSay": "I have to eat salad for dinner because I want to lose weight.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-75",
      "num": 75,
      "youSaid": "I have to cleaning my flat because it's dirty.",
      "betterSay": "I have to clean my flat because it's dirty.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-76",
      "num": 76,
      "youSaid": "I'm not a rich.",
      "betterSay": "I'm not rich.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-77",
      "num": 77,
      "youSaid": "I gotta go home early because my mom wait for me for dinner.",
      "betterSay": "I gotta go home early because my mom is waiting for me for dinner.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-78",
      "num": 78,
      "youSaid": "It's not obligation.",
      "betterSay": "It's not an obligation.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-79",
      "num": 79,
      "youSaid": "I want to tell you by myself for me.",
      "betterSay": "I want to tell you something about me.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-80",
      "num": 80,
      "youSaid": "Let me know if you have any problems in our department.",
      "betterSay": "Let me know if you have any problems in our department. OR Let me know if you have any concerns within our department.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-81",
      "num": 81,
      "youSaid": "Let me think about it to right way.",
      "betterSay": "Let me think about it the right way. OR Let me think about it properly.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-82",
      "num": 82,
      "youSaid": "Sometimes my co-workers said to me about wrong decision or information.",
      "betterSay": "Sometimes my co-workers tell me about wrong decisions or information.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-83",
      "num": 83,
      "youSaid": "Let me think about it better way for our vacation.",
      "betterSay": "Let me think about a better way for our vacation.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-84",
      "num": 84,
      "youSaid": "It's one of the court of government.",
      "betterSay": "It's one of the government's courts.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-85",
      "num": 85,
      "youSaid": "I need your help this word too.",
      "betterSay": "I need your help with this word too.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-86",
      "num": 86,
      "youSaid": "He delayed confirmation that document.",
      "betterSay": "He delayed receiving confirmation of the document.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-87",
      "num": 87,
      "youSaid": "I think he don't have any kinds of reasons of that delayed.",
      "betterSay": "I don't think he has any reason for the delay.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-88",
      "num": 88,
      "youSaid": "I want impeachment soon.",
      "betterSay": "I want him to be impeached soon.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-89",
      "num": 89,
      "youSaid": "That's touchable gift for me.",
      "betterSay": "Receiving his gift for me was very touching.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-90",
      "num": 90,
      "youSaid": "I don't know about this word is means.",
      "betterSay": "I don't know about the meaning of this word.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-91",
      "num": 91,
      "youSaid": "The accident of Muan International Airport Jeju airplane crash result 179 people is dead.",
      "betterSay": "The plane crash at Muan International Airport resulted in the deaths of 179 people.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-92",
      "num": 92,
      "youSaid": "They check that bodies parts and DNA analysis.",
      "betterSay": "They are checking body parts and conducting DNA analysis for identification.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-93",
      "num": 93,
      "youSaid": "Also they checked evidence of that accident reason.",
      "betterSay": "They also checked for evidence of the cause of the accident.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-94",
      "num": 94,
      "youSaid": "Filler product is not a main item.",
      "betterSay": "Filler products are not core items.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "all of item 대신 all (the) items처럼 복수 명사를 사용하여 수일치를 정확히 맞춰줍니다."
    },
    {
      "id": "eng-95",
      "num": 95,
      "youSaid": "A lot of protester they made blanket by foil like Hershey kisses.",
      "betterSay": "Many protesters wrapped themselves in foil blankets, resembling giant Hershey's Kisses.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-96",
      "num": 96,
      "youSaid": "It was just unexpected and just short term revenue.",
      "betterSay": "The revenue was unexpected and short-term.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-97",
      "num": 97,
      "youSaid": "They have to keep going their new marketing event.",
      "betterSay": "They have to maintain their new marketing event",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-98",
      "num": 98,
      "youSaid": "It's too sweety for me.",
      "betterSay": "They are too sweet for me.(chocolates)",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-99",
      "num": 99,
      "youSaid": "I will go party with my colleagues.",
      "betterSay": "I am going to a party with my colleagues.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "단순 현재 시제 대신 계획된 미래 행동을 명확히 전달하기 위해 be going to 또는 plan to를 사용합니다."
    },
    {
      "id": "eng-100",
      "num": 100,
      "youSaid": "I can use this expression If I already say to someone and I want to quit my mean.",
      "betterSay": "I can use this expression to clarify what I said before.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-101",
      "num": 101,
      "youSaid": "Today morning, I went to grocery store.",
      "betterSay": "This morning, I went to a grocery store.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "today morning은 콩글리시 직역이며, 오늘 아침은 항상 관용적으로 this morning을 사용합니다."
    },
    {
      "id": "eng-102",
      "num": 102,
      "youSaid": "I didn't mean to buy all of item in my budget.",
      "betterSay": "I didn't mean to buy all the items in my cart because my budget was not enough.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "all of item 대신 all (the) items처럼 복수 명사를 사용하여 수일치를 정확히 맞춰줍니다."
    },
    {
      "id": "eng-103",
      "num": 103,
      "youSaid": "I didn't mean to too much aggressive.",
      "betterSay": "I didn't mean to be very aggressive.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-104",
      "num": 104,
      "youSaid": "It doesn't mean we are going to same way about our all of opinion.",
      "betterSay": "This does not mean we are going share the same opinions on every matter.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-105",
      "num": 105,
      "youSaid": "They can't go to movie theater.",
      "betterSay": "They can't go to the movie theater.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-106",
      "num": 106,
      "youSaid": "I feel sorry for your leg broken.",
      "betterSay": "I feel sorry for your broken leg.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-107",
      "num": 107,
      "youSaid": "Before this class, I just one meaning.",
      "betterSay": "I just knew one meaning of this pattern before this class.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-108",
      "num": 108,
      "youSaid": "It's a shame that you can't pass the test.",
      "betterSay": "It's a shame that you can't pass the test.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-109",
      "num": 109,
      "youSaid": "It's a shame that you woke up late in this morning.",
      "betterSay": "It's a shame that you woke up late this morning.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-110",
      "num": 110,
      "youSaid": "I want to sympathy to them.",
      "betterSay": "I want to express my sympathy to them.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-111",
      "num": 111,
      "youSaid": "I think lament is expressed of Mr. Yoon blue and his sadness to every people.",
      "betterSay": "I believe the lament conveys Mr. Yoon's profound sadness to the public.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-112",
      "num": 112,
      "youSaid": "Today's every word is difficult for me.",
      "betterSay": "I find every word tonight difficult.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-113",
      "num": 113,
      "youSaid": "This article is about Mr. Yoon's finally arrested.",
      "betterSay": "This article discusses the recent arrest of Mr. Yoon.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-114",
      "num": 114,
      "youSaid": "We have to waiting for the court's decision.",
      "betterSay": "We have to wait for the court's decision.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-115",
      "num": 115,
      "youSaid": "If I have to make a decision, and after that made decision, I think I can express this pattern to someone.",
      "betterSay": "If I have to make a decision, I think I can use this pattern to let someone know that I've made my decision.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-116",
      "num": 116,
      "youSaid": "If I talk to my colleagues about today workout in the gym, I can say to my colleague, 'I've decided to work out afternoon.'",
      "betterSay": "If I talk to my colleagues about today's workout in the gym, I can tell my colleague, 'I've decided to work out in the afternoon.'",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-117",
      "num": 117,
      "youSaid": "I think I have to use if I want to ask to or suggest to someone.",
      "betterSay": "I think I have to use this if I want to ask or suggest something to someone.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-118",
      "num": 118,
      "youSaid": "Do you decided to something?",
      "betterSay": "Did you decide to do something? / Have you decided to do something?",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-119",
      "num": 119,
      "youSaid": "I've decided to go to the rock climbing gym indoor with my climbing crew member.",
      "betterSay": "I've decided to go to the indoor rock climbing gym with my climbing crew member.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-120",
      "num": 120,
      "youSaid": "It is my favorite hobbies nowadays.",
      "betterSay": "It is one of my favorite hobbies nowadays.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-121",
      "num": 121,
      "youSaid": "But sometimes, it contained a lot of pain.",
      "betterSay": "But sometimes, it involves a lot of pain.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-122",
      "num": 122,
      "youSaid": "I think I've been rock climbing indoor almost two years.",
      "betterSay": "I think I've been rock climbing indoors for almost two years.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-123",
      "num": 123,
      "youSaid": "It is sports about our body balance and our strength.",
      "betterSay": "It is a sport that involves our body balance and strength.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-124",
      "num": 124,
      "youSaid": "I haven't decided to planning anything.",
      "betterSay": "I haven't decided to do anything yet. / I haven't decided what to do yet.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-125",
      "num": 125,
      "youSaid": "Actually, I really love to do work out in gym such as bodybuilding.",
      "betterSay": "Actually, I really love working out at the gym, especially bodybuilding.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-126",
      "num": 126,
      "youSaid": "So sometimes I try to this therapy when I get a lot of finger sore and neck sore.",
      "betterSay": "Sometimes, I try this therapy when I have a lot of soreness in my fingers and neck.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-127",
      "num": 127,
      "youSaid": "I think I agree almost 90% because another 10% is it's really cold.",
      "betterSay": "I think I agree about 90%, but the other 10% is because it's really cold.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-128",
      "num": 128,
      "youSaid": "As you know, every people has just 24 hours.",
      "betterSay": "As you know, everyone has only 24 hours.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-129",
      "num": 129,
      "youSaid": "I just difficult to fall asleep late time after midnight.",
      "betterSay": "I just find it difficult to fall asleep late, especially after/before midnight.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-130",
      "num": 130,
      "youSaid": "That is my only difficult for me.",
      "betterSay": "That's the only difficulty I have.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-131",
      "num": 131,
      "youSaid": "It is not good for gain a lot of muscle because cold water is not good for blood pressure.",
      "betterSay": "It’s not good for gaining a lot of muscle because cold water isn’t good for blood pressure.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-132",
      "num": 132,
      "youSaid": "It contain less speed blood pressure.",
      "betterSay": "It lowers blood pressure.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-133",
      "num": 133,
      "youSaid": "It is just take care of pain.",
      "betterSay": "It just helps take care of the pain.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-134",
      "num": 134,
      "youSaid": "I think benefit and how to do this therapy to great way for our pain and sore care.",
      "betterSay": "I think the main point is the benefits and how to do this therapy, which is a great way to care for our pain and soreness.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-135",
      "num": 135,
      "youSaid": "I think it is tradition of my old ages people in public saunas.",
      "betterSay": "I think it’s a tradition among older people in public saunas.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-136",
      "num": 136,
      "youSaid": "We have similar tradition because it means we want to New Year's great effect from cleaning my whole bodies.",
      "betterSay": "We have a similar tradition because it means we want to start the New Year feeling refreshed after cleaning our bodies.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-137",
      "num": 137,
      "youSaid": "I think it is great for our take care of our pain and sore.",
      "betterSay": "I think it’s great for taking care of our pain and soreness.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-138",
      "num": 138,
      "youSaid": "I heard about that from that studies almost 9 minutes hot water therapy and then 1 minute cold water therapy.",
      "betterSay": "I heard that studies suggest 9 minutes of hot water therapy followed by 1 minute of cold water therapy.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-139",
      "num": 139,
      "youSaid": "I'm really familiar about that because every New Year's season, I try to make New Year plans.",
      "betterSay": "I'm really familiar with that because every New Year's season, I try to make New Year plans.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-140",
      "num": 140,
      "youSaid": "I also planning to enter the master degree process in university.",
      "betterSay": "I am also planning to pursue a master's degree at university.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-141",
      "num": 141,
      "youSaid": "Last of all, I have to do military service duty.",
      "betterSay": "Last of all, I have to do my military service. / Lastly, I have to do my military service.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-142",
      "num": 142,
      "youSaid": "I think I always thinking about my career at first.",
      "betterSay": "I think I always think about my career first.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "항상 일어나는 습관적이고 지속적인 생각은 현재진행형 대신 단순 현재형(always think about)을 씁니다."
    },
    {
      "id": "eng-143",
      "num": 143,
      "youSaid": "So most of all, I just concerned about what I have to do this year for my career improving.",
      "betterSay": "Most of all, I'm just concerned about what I need to do this year to improve my career.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-144",
      "num": 144,
      "youSaid": "And also I have to concerned my health condition.",
      "betterSay": "And I also have to be concerned about my health condition.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-145",
      "num": 145,
      "youSaid": "So, I have to take care about that.",
      "betterSay": "So, I have to take care of that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-146",
      "num": 146,
      "youSaid": "But if I can't do that on time, it makes really, really nervous and makes me overthinking.",
      "betterSay": "But if I can't do that on time, it makes me really, really nervous and causes me to overthink.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-147",
      "num": 147,
      "youSaid": "But these two tests' schedule is same so I can't attend all of the tests.",
      "betterSay": "But the schedules for these two tests are the same, so I can't take both of them.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-148",
      "num": 148,
      "youSaid": "In my case, if I planning to over to choices, dream or career or goal, it just following me to bad result.",
      "betterSay": "In my case, if I keep planning to choose between my dream, career, or goals, it will just lead me to a bad result.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-149",
      "num": 149,
      "youSaid": "When I planning to my career goals, almost everything I can know I can follow this curriculum's schedule.",
      "betterSay": "When I plan my career goals, I know that I can follow the schedule of this curriculum.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-150",
      "num": 150,
      "youSaid": "And it feels daunting for me about that plan.",
      "betterSay": "And that plan feels daunting to me.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-151",
      "num": 151,
      "youSaid": "So I have to change the plans to be realistic.",
      "betterSay": "So, I have to adjust/change the plans to make them more realistic.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-152",
      "num": 152,
      "youSaid": "So at that time, I thought it is unrealistic for my career.",
      "betterSay": "So at that time, I thought it was unrealistic for my career.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "과거 시점의 생각(thought)이나 행동에 맞추어 주절과 종속절의 시제를 과거형으로 일치시켜 줍니다."
    },
    {
      "id": "eng-153",
      "num": 153,
      "youSaid": "Actually, I'm really overthinking person and I have a lot of nervous about my career.",
      "betterSay": "Actually, I'm a really overthinking person, and I feel a lot of nervousness about my career. / Actually, I'm a person who tends to overthink, and I feel a lot of nervousness about my career.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-154",
      "num": 154,
      "youSaid": "When I write my essay or write report, overthinking is really good method for that.",
      "betterSay": "When I write my essay or report, overthinking is actually a good method for that.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-155",
      "num": 155,
      "youSaid": "I think I'm not familiar about this.",
      "betterSay": "I think I'm not familiar with this.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-156",
      "num": 156,
      "youSaid": "If I want to talk about something with someone, but I just thinking about that topic without mood or his or her feeling and his or her knowledge and ages or any kinds of other culture differences.",
      "betterSay": "I want to talk about something with someone, but I'm just thinking about the topic without considering their mood, feelings, knowledge, age, or any cultural differences.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-157",
      "num": 157,
      "youSaid": "I agree that because I really love read books.",
      "betterSay": "I agree with that because I really love reading books.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-158",
      "num": 158,
      "youSaid": "So I think reading makes me thinking deeply about some topic.",
      "betterSay": "So I think reading makes me think deeply about some topics.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-159",
      "num": 159,
      "youSaid": "I'm overthink person but I can every time think first and talk later.",
      "betterSay": "I'm an overthinker, but I can always think first and talk later.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-160",
      "num": 160,
      "youSaid": "So sometimes I feeling I make mistake about some missed words.",
      "betterSay": "So sometimes I feel like I've made mistakes with some missing words.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-161",
      "num": 161,
      "youSaid": "When I first saw this word 'knee jerk', I can't understand quickly.",
      "betterSay": "When I first saw the word 'knee jerk,' I couldn't understand it quickly.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-162",
      "num": 162,
      "youSaid": "If I know this 'knee jerk' mean before saw this word, I can understand.",
      "betterSay": "If I knew what 'knee jerk' meant before seeing it, I would have understood it.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-163",
      "num": 163,
      "youSaid": "Gut reactions is about our body conditions.",
      "betterSay": "Gut reactions are about our body conditions.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-164",
      "num": 164,
      "youSaid": "So, if I have good feeling and good condition, I can express my gut reactions to other.",
      "betterSay": "So, if I have good feelings and am in good condition, I can express my gut reactions to others.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-165",
      "num": 165,
      "youSaid": "If I have some just knee jerk reactions, I can just short and simple and not friendly words expression to other person.",
      "betterSay": "If I have knee-jerk reactions, I might express myself with short, simple, and unfriendly words to another person.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-166",
      "num": 166,
      "youSaid": "I think it's little bit similar to first one.",
      "betterSay": "I think it's a little bit similar to the first one.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-167",
      "num": 167,
      "youSaid": "I think 'catch up' to knowledges, knowledge level.",
      "betterSay": "I think 'catch up' refers to improving knowledge or reaching a certain knowledge level.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-168",
      "num": 168,
      "youSaid": "So second one is catch up to our memorize level.",
      "betterSay": "So the second one is about catching up to our knowledge level.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-169",
      "num": 169,
      "youSaid": "If I get new tasks at that day, I can't do that on my day off.",
      "betterSay": "If I got new tasks that day, I couldn't do them on my day off.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-170",
      "num": 170,
      "youSaid": "So I have to follow up much more after back to my office.",
      "betterSay": "So I have to follow up a lot more after I return to my office.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-171",
      "num": 171,
      "youSaid": "Nowadays, my new job is common tasks.",
      "betterSay": "Nowadays, my new job involves common tasks.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-172",
      "num": 172,
      "youSaid": "But almost three years ago, at that time, my last job position is team leader.",
      "betterSay": "But almost three years ago, at that time, my last job position was team leader.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "과거 시점의 생각(thought)이나 행동에 맞추어 주절과 종속절의 시제를 과거형으로 일치시켜 줍니다."
    },
    {
      "id": "eng-173",
      "num": 173,
      "youSaid": "So if I took a day off, I have to do a lot of tasks after back to the office.",
      "betterSay": "So if I took a day off, I had to do a lot of tasks after I returned to the office.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-174",
      "num": 174,
      "youSaid": "Anyone can't replace my vacant position.",
      "betterSay": "No one can replace my vacant position.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-175",
      "num": 175,
      "youSaid": "So when I'm on vacation, I always thinking about my team members.",
      "betterSay": "So when I'm on vacation, I always think about my team members.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "항상 일어나는 습관적이고 지속적인 생각은 현재진행형 대신 단순 현재형(always think about)을 씁니다."
    },
    {
      "id": "eng-176",
      "num": 176,
      "youSaid": "If I want to catch up with my friends or family members, I think we have to meet first at café or restaurant or bar.",
      "betterSay": "If I want to catch up with my friends or family members, I think we should meet at a café, restaurant, or bar first.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-177",
      "num": 177,
      "youSaid": "If we want to catch up our memories, jazz bar is the best place for that.",
      "betterSay": "If we want to catch up on our memories, a jazz bar is the best place for that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-178",
      "num": 178,
      "youSaid": "After two weeks, one of my best friend go to the American university for PHD after PHD class.",
      "betterSay": "In two weeks, one of my best friends will go to an American university for a PhD program after finishing their PhD classes.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-179",
      "num": 179,
      "youSaid": "In my case, I'm overthinker so sometimes I'm really nervous about whenever I miss some newses.",
      "betterSay": "In my case, I'm an overthinker, so sometimes I get really nervous about missing some news.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "news는 항상 단수 취급하는 불가산 명사이므로, 개별 기사나 방송국을 지칭할 때는 news outlets 또는 news stories를 사용합니다."
    },
    {
      "id": "eng-180",
      "num": 180,
      "youSaid": "And then, nowadays I just watch news in the cafeteria or on lunchtime or dinner.",
      "betterSay": "Nowadays, I just watch the news in the cafeteria or during lunchtime or dinner.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-181",
      "num": 181,
      "youSaid": "Almost minus four degree in afternoon and then lowest degree is almost minus ten degree.",
      "betterSay": "In the afternoon, it's almost minus four degrees, and the lowest temperature is around minus ten degrees.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-182",
      "num": 182,
      "youSaid": "Cough is I think some noise of nose or our mouth because I have sick.",
      "betterSay": "I think a cough is a noise from our nose or mouth when someone is sick.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-183",
      "num": 183,
      "youSaid": "I think every time I saw that kind of person in public transportations.",
      "betterSay": "I think I see this kind of person every time on public transportation.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-184",
      "num": 184,
      "youSaid": "And I also agree about this first paragraph's main topic.",
      "betterSay": "I also agree with the main topic of the first paragraph.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-185",
      "num": 185,
      "youSaid": "I also annoyed about some coughs and sneezing behavior.",
      "betterSay": "I'm also annoyed by some people's coughing and sneezing behavior.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-186",
      "num": 186,
      "youSaid": "If I can avoid that people, I just replace my position in public transportation.",
      "betterSay": "If I can avoid those people, I just move to a different spot on public transportation.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-187",
      "num": 187,
      "youSaid": "But if I can't move to other position, I just try to find some mask in my backpack.",
      "betterSay": "But if I can't move to another position, I try to find a mask in my backpack.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-188",
      "num": 188,
      "youSaid": "Nowadays, not every person use masks but after Covid-19 coronavirus, many people use mask when they have sick or they protect/prevent their coughing or sneezing.",
      "betterSay": "Nowadays, not everyone uses masks, but after the Covid-19 pandemic, many people wear masks when they are sick or to prevent coughing or sneezing.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-189",
      "num": 189,
      "youSaid": "As you know, most of people use mask when they have really, really having sick or cold.",
      "betterSay": "As you know, most people wear masks when they are really sick or have a cold.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-190",
      "num": 190,
      "youSaid": "I also thinking about, if someone use mask and he is really sick person, so I have to avoid to him, from him or her.",
      "betterSay": "I also think that if someone is wearing a mask and is really sick, I should avoid him or her.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-191",
      "num": 191,
      "youSaid": "Because too much perfume makes their nose can't activated.",
      "betterSay": "Because too much perfume makes their nose stop working.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-192",
      "num": 192,
      "youSaid": "Actually during Covid-19, we must use mask in every public transportations and everywhere.",
      "betterSay": "Actually, during Covid-19, we had to wear masks on all public transportation and everywhere.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-193",
      "num": 193,
      "youSaid": "I think strong perfumer is really one of the most annoyed me behavior.",
      "betterSay": "I think strong perfume is really one of the most annoying behaviors for me.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-194",
      "num": 194,
      "youSaid": "In my country, we have seat for pregnant but it is allowed to any person because it has no guard.",
      "betterSay": "In my country, there are seats reserved for pregnant women, but anyone can sit in them because there are no restrictions.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-195",
      "num": 195,
      "youSaid": "So every person use this seat but we have to keep vacant seat for every pregnant.",
      "betterSay": "So, everyone can use these seats, but we should keep one vacant for pregnant women.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-196",
      "num": 196,
      "youSaid": "We don't have any kinds of punishment.",
      "betterSay": "We don't have any kind of punishment.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-197",
      "num": 197,
      "youSaid": "…if he or she doesn't move to other seat.",
      "betterSay": "...if he or she doesn't move to another seat.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-198",
      "num": 198,
      "youSaid": "I always ready for this seat for pregnant woman.",
      "betterSay": "I am always ready to give up a seat for a pregnant woman.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-199",
      "num": 199,
      "youSaid": "Actually, one of my best friend, he will go to abroad in United States after finish his class.",
      "betterSay": "Actually, one of my best friends is going abroad to the United States after he finishes his classes.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-200",
      "num": 200,
      "youSaid": "So it is celebration party.",
      "betterSay": "So it's a celebration. / So it's a party.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-201",
      "num": 201,
      "youSaid": "So I heard about other news that is AI stock market was dropped low at the time.",
      "betterSay": "So I heard other news, and it said that the AI stock market dropped significantly at that time.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-202",
      "num": 202,
      "youSaid": "In my case, I can't think about this decision is right for China and United States market.",
      "betterSay": "In my case, I don't think this decision is right for China’s and the United States’ markets.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-203",
      "num": 203,
      "youSaid": "And as you know, Instagram and Facebook service, they collected my data from my cellphone mic.",
      "betterSay": "And as you know, Instagram and Facebook services collected my data from my cellphone mic.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-204",
      "num": 204,
      "youSaid": "I don't think so it's right and fair decision.",
      "betterSay": "I don't think it's the right and fair decision.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-205",
      "num": 205,
      "youSaid": "And second of all, I think it is active protection way for United States or their governments, agencies, ministries, and companies' revenue.",
      "betterSay": "And second of all, I think it is an active protection method for the United States, its government, agencies, ministries, and companies' revenues.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-206",
      "num": 206,
      "youSaid": "As you know, China has really strong power of other countries.",
      "betterSay": "As you know, China has a lot of power over other countries.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-207",
      "num": 207,
      "youSaid": "Eight to ten per day.",
      "betterSay": "I think around eight to ten times per day.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-208",
      "num": 208,
      "youSaid": "We can just know our common knowledges, and common moral rules.",
      "betterSay": "We can only know our common knowledge and common moral rules.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "knowledge는 대표적인 불가산 명사(셀 수 없는 명사)이므로 복수형 knowledges 대신 항상 단수형 knowledge로 표현해야 합니다."
    },
    {
      "id": "eng-209",
      "num": 209,
      "youSaid": "So I think we have to take carefully about this rule.",
      "betterSay": "So I think we have to be careful about this rule.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-210",
      "num": 210,
      "youSaid": "At first, just banned from all of people has a protection, I think.",
      "betterSay": "At first, I think just banning it from everyone offers some protection.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-211",
      "num": 211,
      "youSaid": "And then, just make new rules of prevent user data leak.",
      "betterSay": "And then, just make new rules to prevent user data leaks.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-212",
      "num": 212,
      "youSaid": "In my opinion, I think it's just delay the time of new generations.",
      "betterSay": "In my opinion, I think it just delays the progress of new generations.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-213",
      "num": 213,
      "youSaid": "They must do prepare their bankruptcy.",
      "betterSay": "They must prepare for their bankruptcy.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-214",
      "num": 214,
      "youSaid": "As you know, our data's already spread all of internet.",
      "betterSay": "As you know, our data has already spread all over the internet.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-215",
      "num": 215,
      "youSaid": "If I don't use internet, I can't protect my all of data.",
      "betterSay": "If I don't use the internet, I can't protect all of my data.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-216",
      "num": 216,
      "youSaid": "I think this word is really happy and little bit nervous when I attend to participants of concert.",
      "betterSay": "I think this word makes me really happy and a little bit nervous when I join the participants at the concert.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-217",
      "num": 217,
      "youSaid": "Every festival makes feel great for every attenders, so I think it's great word.",
      "betterSay": "Every festival makes attendees feel great, so I think it's a great word.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-218",
      "num": 218,
      "youSaid": "And I really love attend to specific singer's concert.",
      "betterSay": "And I really love attending a specific singer's concert.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-219",
      "num": 219,
      "youSaid": "But sometimes in my country has some festival has like live band festival or a lot of anonymous artists' festival.",
      "betterSay": "But sometimes in my country, there are festivals with live bands or festivals featuring many anonymous artists.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-220",
      "num": 220,
      "youSaid": "It's pretty great mood and feeling for me.",
      "betterSay": "It's a pretty great mood and feeling for me.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-221",
      "num": 221,
      "youSaid": "It contain every adults use their own water gun with each other.",
      "betterSay": "It involves every adult using their own water gun with each other.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-222",
      "num": 222,
      "youSaid": "I think in winter season after Covid-19, I think I dislike winter season every concert and festival because it has more size concert hall or auditorium.",
      "betterSay": "I think, after Covid-19, I dislike attending concerts and festivals in the winter season because they tend to be held in larger concert halls or auditoriums.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-223",
      "num": 223,
      "youSaid": "So I really love to his music when I'm studying or walking.",
      "betterSay": "I really love listening to his music when I'm studying or walking.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-224",
      "num": 224,
      "youSaid": "In my country, I think we don't have any kinds of greatest jazz music festival.",
      "betterSay": "In my country, I don't think we have any great jazz music festivals.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-225",
      "num": 225,
      "youSaid": "Most popular festival is I think, in my country, as you know, we have a huge size K-pop artists industry.",
      "betterSay": "I think the most popular festival in my country is related to K-pop, as we have a huge K-pop industry.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-226",
      "num": 226,
      "youSaid": "And other festivals such as our Korean traditional festival, has always contained K-pop artists stages.",
      "betterSay": "And other festivals, such as our Korean traditional festivals, always include K-pop artists' performances.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-227",
      "num": 227,
      "youSaid": "And then when I have free time during those seasons, I use for my hobbies, make YouTube video clips or do working out in the gym with my crew members or have a party with my friends.",
      "betterSay": "When I have free time during those seasons, I use it for my hobbies, like making YouTube videos, working out at the gym with my crew members, or having a party with my friends.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-228",
      "num": 228,
      "youSaid": "Me and my one of best friend went to Japan's traditional city.",
      "betterSay": "My best friend and I went to a traditional city in Japan.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-229",
      "num": 229,
      "youSaid": "So at the time, we can see everywhere because it has great weather and we have great health condition.",
      "betterSay": "So at that time, we could see everything because the weather was great and we were in good health.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-230",
      "num": 230,
      "youSaid": "It has little bit differences with my high school festival.",
      "betterSay": "It has a few differences from my high school festival.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-231",
      "num": 231,
      "youSaid": "As you know, we can use a lot of Netflix or Disney+ like these kinds of OTT services.",
      "betterSay": "As you know, we can use a lot of OTT/streaming services like Netflix or Disney+.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-232",
      "num": 232,
      "youSaid": "If we want to feeling that festival's moods, we can go there.",
      "betterSay": "If we want to feel the mood of the festival, we can go there.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-233",
      "num": 233,
      "youSaid": "But during that season, all hotels and all services' cost is really expensive than other days.",
      "betterSay": "But during that season, the cost of all hotels and services is much higher than on other days.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-234",
      "num": 234,
      "youSaid": "Sometimes, I think almost every day morning is great.",
      "betterSay": "Sometimes, I think every morning is great.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-235",
      "num": 235,
      "youSaid": "But sometimes, when I have some important interview or I have to take exam afternoon, I think at that day I think not agree about this paragraph.",
      "betterSay": "But sometimes, when I have an important interview or an exam in the afternoon, I don’t agree with this paragraph on those days.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-236",
      "num": 236,
      "youSaid": "I think bluest has blue feeling has various types of another mood.",
      "betterSay": "I think the feeling of blueness has various types of moods.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-237",
      "num": 237,
      "youSaid": "When I'm on during midnight time, I can write better than morning sometimes because it is little bit calm and relaxed.",
      "betterSay": "Sometimes, when I'm awake during midnight, I can write better than in the morning because it's a bit calmer and more relaxed.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-238",
      "num": 238,
      "youSaid": "Serotonin make happy feeling but it awake to me.",
      "betterSay": "Serotonin creates a feeling of happiness, but it also keeps me awake.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-239",
      "num": 239,
      "youSaid": "But melatonin hormone make little blue than before.",
      "betterSay": "But the melatonin hormone makes someone feel a little bluer than before.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-240",
      "num": 240,
      "youSaid": "Our feeling and moods depends on time.",
      "betterSay": "Our feelings and moods depend on time.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-241",
      "num": 241,
      "youSaid": "I think I'm really energetic person so sometimes when I took a really tough day, tough afternoon and evening, I can go to sleep earlier.",
      "betterSay": "I think I'm a really energetic person, so sometimes when I have a tough day, tough afternoon, or evening, I can go to sleep earlier.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-242",
      "num": 242,
      "youSaid": "But I think one of my important thing is smartphone because if I use smartphone in midnight, I can't sleep early.",
      "betterSay": "But I think one of the most important things for me is my smartphone, because if I use it at midnight, I can't sleep early.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-243",
      "num": 243,
      "youSaid": "If I have to prepare until Monday about some very important report or presentation, I also anxiety and nervous on Sunday.",
      "betterSay": "If I have to prepare for an important report or presentation by Monday, I also feel anxious and nervous on Sunday.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-244",
      "num": 244,
      "youSaid": "I always thinking about my health condition and well-being always concerned about.",
      "betterSay": "I’m always thinking about my health and well-being, and I'm always concerned about them",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "항상 일어나는 습관적이고 지속적인 생각은 현재진행형 대신 단순 현재형(always think about)을 씁니다."
    },
    {
      "id": "eng-245",
      "num": 245,
      "youSaid": "But I think spring and summer season is better than other season.",
      "betterSay": "But I think the spring and summer seasons are better than the others.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-246",
      "num": 246,
      "youSaid": "And so I always use humidity purifier.",
      "betterSay": "So, I always use a humidity purifier/humidifier.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-247",
      "num": 247,
      "youSaid": "And it also great for after drink.",
      "betterSay": "And it's also great after drinking.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-248",
      "num": 248,
      "youSaid": "Because after drink, my throat is really dry.",
      "betterSay": "Because after drinking, my throat gets really dry.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-249",
      "num": 249,
      "youSaid": "If I use humidity purifier, it makes really better condition.",
      "betterSay": "If I use a humidity purifier/humidifier, it improves the condition a lot.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-250",
      "num": 250,
      "youSaid": "Actually, if I feel very blue and gloomy, I can try to some medicine and I consult a doctor about that.",
      "betterSay": "Actually, if I feel very blue and gloomy, I try some medicine and consult a doctor about it.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-251",
      "num": 251,
      "youSaid": "I think if I say inside of some structures such as building or office or house, I think I have to use 'in' preposition.",
      "betterSay": "I think that when I talk about being inside structures like a building, office, or house, I have to use the preposition 'in'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-252",
      "num": 252,
      "youSaid": "And if I put on something such as put on the desk something such as laptop and then I have to use 'on' preposition.",
      "betterSay": "And if I place something on something, like putting a laptop on the desk, I have to use the preposition 'on'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-253",
      "num": 253,
      "youSaid": "And if I use stay at something such as 'at the bus stop' or I think I have to use 'at' preposition.",
      "betterSay": "And if I talk about staying at a specific place, like 'at the bus stop,' I think I have to use the preposition 'at'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-254",
      "num": 254,
      "youSaid": "I think if I use specific time such as in the morning or in the afternoon or in the evening, I think I have to use 'in' preposition.",
      "betterSay": "I think that if I refer to specific times, like in the morning, in the afternoon, or in the evening, I have to use the preposition 'in'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-255",
      "num": 255,
      "youSaid": "And if I want to express week such as Monday, Tuesday, Saturday, I have to use 'on' Saturday or 'on' Monday.",
      "betterSay": "And if I want to express a specific day, like Monday, Tuesday, or Saturday, I have to use 'on,' such as 'on Monday' or 'on Saturday.'",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-256",
      "num": 256,
      "youSaid": "Nowadays, I prepare my military season.",
      "betterSay": "Nowadays, I am preparing for my military service.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-257",
      "num": 257,
      "youSaid": "So I interviewed with my employee relationship officer and leader.",
      "betterSay": "So, I had an interview with my employee relations officer and leader. / So, I was interviewed by my employee relations officer and leader.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-258",
      "num": 258,
      "youSaid": "Because I must do break my all of jobs during month.",
      "betterSay": "Because I must take a break from all of my jobs (during this month).",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-259",
      "num": 259,
      "youSaid": "I have to stay little bit time my office.",
      "betterSay": "I have to stay in my office for a little while.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-260",
      "num": 260,
      "youSaid": "I think it is depends on 'a' and 'an' these words next word.",
      "betterSay": "I think it depends on the word that comes after 'a' and 'an'.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-261",
      "num": 261,
      "youSaid": "If this 'a' and 'an' articles next words is word pronunciation and voice is similar to a, e, I, o, u, I think I have to use 'an'.",
      "betterSay": "If the word following 'a' or 'an' begins with a vowel sound, I think I should use 'an'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-262",
      "num": 262,
      "youSaid": "But if I want to and if I should do speak each other words and single word, I think I have to just 'a' article.",
      "betterSay": "But if I want to say each word separately or talk about a single word, I think I should just use the article 'a'.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-263",
      "num": 263,
      "youSaid": "I think if I want speak specific university such as Harvard or some of university, I think I have to use 'the'.",
      "betterSay": "I think if I want to speak about a specific university, such as Harvard or any other university, I should use 'the'.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-264",
      "num": 264,
      "youSaid": "But if I want to just speak one university, I think I have to use 'a'.",
      "betterSay": "But if I want to refer to just any one university, I think I should use 'a'.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-265",
      "num": 265,
      "youSaid": "I think I always confused about countable and uncountable nouns.",
      "betterSay": "I think I am always confused about countable and uncountable nouns.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "감정을 유발하는 원인(-ing)과 주체가 느끼는 상태(-ed), 능동/수동의 구분을 바로잡은 문장입니다."
    },
    {
      "id": "eng-266",
      "num": 266,
      "youSaid": "So other pronunciation and nouns are a little bit confused for me.",
      "betterSay": "So other pronunciations and nouns are a little bit confusing for me.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "감정을 유발하는 원인(-ing)과 주체가 느끼는 상태(-ed), 능동/수동의 구분을 바로잡은 문장입니다."
    },
    {
      "id": "eng-267",
      "num": 267,
      "youSaid": "Actually, next Monday, I'm planning to vacation in my country island name is Jeju Island.",
      "betterSay": "Actually, next Monday, I'm planning to vacation on my country's island, which is called Jeju Island.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-268",
      "num": 268,
      "youSaid": "I didn't understand 100% about this article's main story.",
      "betterSay": "I didn't understand 100% of the main story in this article.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-269",
      "num": 269,
      "youSaid": "I think I understand about one man going to whale's body and that whale emerged him to ocean.",
      "betterSay": "I think I understand that one man goes into a whale's body, and the whale spits him out into the ocean.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-270",
      "num": 270,
      "youSaid": "I understand about that.",
      "betterSay": "I understand that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-271",
      "num": 271,
      "youSaid": "But why the whale emerged him to ocean?",
      "betterSay": "But why did the whale spit him out into the ocean?",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-272",
      "num": 272,
      "youSaid": "But maybe dangerous situation because if that whale wants to dive into deep ocean, it can spit its mouth.",
      "betterSay": "But it could be a dangerous situation because if the whale wants to dive into the deep ocean, it might spit him out.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-273",
      "num": 273,
      "youSaid": "If the whale want to bite or swallow some of whales food, like plankton or some of fishes, I think he couldn’t spit its mouth.",
      "betterSay": "If the whale wants to bite or swallow some of its food, like plankton or fish, I think it couldn't spit him out.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-274",
      "num": 274,
      "youSaid": "So sometimes, my climbing crew members or with my friends, we can planning to kayaking tour.",
      "betterSay": "Sometimes, my climbing crew members or my friends and I plan kayaking tours.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-275",
      "num": 275,
      "youSaid": "But some of point was really dangerous because there are a lot of kinds of rock.",
      "betterSay": "But some points were really dangerous because there were many kinds of rocks.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-276",
      "num": 276,
      "youSaid": "So if we going through that way, our boat could broken or our paddling pad broken.",
      "betterSay": "So if we went that way, our boat and paddles could break. / So if we had gone that way, our boat and paddles could have broken.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-277",
      "num": 277,
      "youSaid": "But it's heavy rain.",
      "betterSay": "But it's raining heavily.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-278",
      "num": 278,
      "youSaid": "I didn't expect this weather it's too heavy rain so I can't go any kinds of beach or sea.",
      "betterSay": "I didn't expect this weather, and it's raining heavily, so I can't go to the beach or the sea.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-279",
      "num": 279,
      "youSaid": "It's really beautiful island in my country.",
      "betterSay": "It's a really beautiful island in my country.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-280",
      "num": 280,
      "youSaid": "She is my 8 years old friend.",
      "betterSay": "She is my friend of 8 years.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-281",
      "num": 281,
      "youSaid": "I think yesterday was not good day for us because we met some happening.",
      "betterSay": "I think yesterday was not a good day for us because we experienced some things.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-282",
      "num": 282,
      "youSaid": "I think now my vacation partner is given the cold shoulder to me.",
      "betterSay": "I think my vacation partner is giving me the cold shoulder now.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-283",
      "num": 283,
      "youSaid": "But we have little bit serious happening in our room.",
      "betterSay": "But we had a bit of a serious situation in our room.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-284",
      "num": 284,
      "youSaid": "And she embarrassed and surprised to me.",
      "betterSay": "And she was embarrassed and surprised by me.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "상황이나 경험이 주는 느낌은 -ing(embarrassing), 사람이 그 감정을 느낄 때는 -ed(embarrassed)를 사용합니다."
    },
    {
      "id": "eng-285",
      "num": 285,
      "youSaid": "If I say to her about my apologize, she would be better or I just ignored her mind.",
      "betterSay": "If I apologized to her, she would feel better, or I could just ignore how she feels.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-286",
      "num": 286,
      "youSaid": "So if I stay this situation to every time, I think it's not good than alone vacation.",
      "betterSay": "If I stay in this situation all the time, I think it's worse than being on a solo vacation.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-287",
      "num": 287,
      "youSaid": "I think it is really different situation by situation because it is not good way to resolve that situations.",
      "betterSay": "I think it's really different from situation to situation, because it's not a good way to resolve those situations.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-288",
      "num": 288,
      "youSaid": "I think that is just talk about this as soon as possible.",
      "betterSay": "I think we should just talk about this as soon as possible.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-289",
      "num": 289,
      "youSaid": "And she or he need more time about that because we have to consider and thinking about deeply.",
      "betterSay": "And she or he needs more time for that because we have to consider and think about it deeply.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-290",
      "num": 290,
      "youSaid": "If I do wrong actions or wrong directions or talkings, I apologize about that.",
      "betterSay": "If I take/do the wrong actions, go in the wrong directions, or say the wrong things, I apologize for that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-291",
      "num": 291,
      "youSaid": "So I think this word is same means.",
      "betterSay": "So I think this word has the same meaning (as that).",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-292",
      "num": 292,
      "youSaid": "So it is not hard for me about ice breaking or break the ice.",
      "betterSay": "So, it's not hard for me to break the ice.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-293",
      "num": 293,
      "youSaid": "I always try to say to other attenders as soon as possible.",
      "betterSay": "I always try to speak to the other attendees as soon as possible.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-294",
      "num": 294,
      "youSaid": "I think I always try to looking for our common issues or common events or common things.",
      "betterSay": "I think I always try to look for our common issues, events, or things. / I think I always try to find our similarities.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-295",
      "num": 295,
      "youSaid": "It is really good for make new ideas.",
      "betterSay": "It is really good for making new ideas.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-296",
      "num": 296,
      "youSaid": "But she already hurted by me and I also hurted my mind.",
      "betterSay": "But she was already hurt by me, and I also hurt my own mind/myself.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-297",
      "num": 297,
      "youSaid": "She's gone to Seoul in this morning.",
      "betterSay": "She went to Seoul this morning.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-298",
      "num": 298,
      "youSaid": "That is last night, my vacation partner, she doesn't want to eat dinner.",
      "betterSay": "Last night, my vacation partner didn't want to eat dinner.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-299",
      "num": 299,
      "youSaid": "So I just take out some fried chicken and I tried to have dinner alone.",
      "betterSay": "So I just took out some fried chicken and tried to have dinner alone.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-300",
      "num": 300,
      "youSaid": "But one of the guests, he is Netherland architecture.",
      "betterSay": "But one of the guests is a Dutch architect.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-301",
      "num": 301,
      "youSaid": "So today, in this afternoon, I'm planning to a party in guesthouse.",
      "betterSay": "So today, this afternoon, I'm planning a party at the guesthouse.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-302",
      "num": 302,
      "youSaid": "If I want to express a singular one, I have to use 'a' or 'an'.",
      "betterSay": "If I want to refer to a singular noun, I have to use 'a' or 'an.'",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-303",
      "num": 303,
      "youSaid": "But it is depends on next word.",
      "betterSay": "But it depends on the next word.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-304",
      "num": 304,
      "youSaid": "So if I want to use some 'cat' or 'strawberry', I have to use 'a.'",
      "betterSay": "So, if I want to use words like 'cat' or 'strawberry,' I have to use 'a.'",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-305",
      "num": 305,
      "youSaid": "But if I want to speak 'olive' or those kind of 'o' or 'a' sound, I have to use 'an'.",
      "betterSay": "But if I want to say 'olive' or words with an 'o' or 'a' sound, I have to use 'an.'",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-306",
      "num": 306,
      "youSaid": "If I want to express and introduce something at first, I have to use how many things are there.",
      "betterSay": "If I want to introduce something for the first time, I have to say how many there are.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-307",
      "num": 307,
      "youSaid": "English language doesn't want to speak many times same things.",
      "betterSay": "People usually avoid repeating the same thing too often in the English language.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-308",
      "num": 308,
      "youSaid": "It's too bored and it's not good efficiency.",
      "betterSay": "It's too boring, and it's not efficient.",
      "category": "participle",
      "categoryName": "🎭 감정 분사 & 수동태",
      "explanation": "감정을 유발하는 원인(-ing)과 주체가 느끼는 상태(-ed), 능동/수동의 구분을 바로잡은 문장입니다."
    },
    {
      "id": "eng-309",
      "num": 309,
      "youSaid": "But if I read some serious news articles or like philosophy articles, I have to know that correctly means.",
      "betterSay": "But if I read serious news articles or philosophy articles, I have to understand the meaning correctly.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-310",
      "num": 310,
      "youSaid": "I heard about some saying from other my English teacher that is 'a' and 'an' and 'the', these articles are really important.",
      "betterSay": "I heard from one of my English teachers that 'a,' 'an,' and 'the' are really important articles.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-311",
      "num": 311,
      "youSaid": "And it's too easy to use wrong way even if they are native speakers.",
      "betterSay": "And it's easy to use them incorrectly, even for native speakers.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-312",
      "num": 312,
      "youSaid": "I think it's also like first one.",
      "betterSay": "I think it's also like the first one.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-313",
      "num": 313,
      "youSaid": "But I just wonder what is the reasons about that hearing problems.",
      "betterSay": "But I just wonder what the reasons are for those hearing problems.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-314",
      "num": 314,
      "youSaid": "So, we didn't know, and we didn't aware of the noise-cancelling earphones cause those items can make problems for our safety or our conditions.",
      "betterSay": "So, we didn't know, and we weren't aware that noise-cancelling earphones could cause problems for our safety or health.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-315",
      "num": 315,
      "youSaid": "Actually, I'm a little bit sensitive person so I always carry my noise-cancelling earbuds everywhere.",
      "betterSay": "Actually, I'm a bit of a sensitive person, so I always carry my noise-cancelling earbuds everywhere.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-316",
      "num": 316,
      "youSaid": "Because I really dislike every kinds of noises, siren sounds, those kind of makes me surprised sound.",
      "betterSay": "Because I really dislike all kinds of noises, like sirens, and sounds that surprise me.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-317",
      "num": 317,
      "youSaid": "When I'm stay in my flat, I use to noise-cancelling earphones and if I go to outside, I always use noise-cancelling earbuds almost 6 to 8 hours a day.",
      "betterSay": "When I'm staying in my flat, I use noise-cancelling earphones, and when I go outside, I always wear them for almost 6 to 8 hours a day.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-318",
      "num": 318,
      "youSaid": "First one is, it's a little bit uncomfortable for my ear conditions.",
      "betterSay": "The first reason is that it's a little uncomfortable for my ear conditions/ears.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-319",
      "num": 319,
      "youSaid": "And second of all, that is after use earbuds, I feel little bit much more sensitive about any kinds of sounds because I use noise-cancelling earphones.",
      "betterSay": "Second of all, after using earbuds, I feel a bit more sensitive to all kinds of sounds because I use noise-cancelling earphones.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-320",
      "num": 320,
      "youSaid": "So, I can feel much more sensitive about every kinds of sounds.",
      "betterSay": "So, I become much more sensitive to all kinds of sounds.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-321",
      "num": 321,
      "youSaid": "But I guess these two words' difference is one is include understanding.",
      "betterSay": "But I guess the difference between these two words is that one includes (the concept of) understanding.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-322",
      "num": 322,
      "youSaid": "But the other one word is not include understanding and make sense something.",
      "betterSay": "But the other word doesn't involve understanding and just makes sense in a different way.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-323",
      "num": 323,
      "youSaid": "If I want to conversation or trying to start talk about something with people, I think I have to feel sympathy about his or her minds.",
      "betterSay": "If I want to have a conversation or try to start talking about something with people, I think I need to be empathetic towards their feelings.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-324",
      "num": 324,
      "youSaid": "Because accidents don't make predictable things.",
      "betterSay": "Because accidents are unpredictable.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-325",
      "num": 325,
      "youSaid": "It's little bit too much dangerous.",
      "betterSay": "It's a little too dangerous.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-326",
      "num": 326,
      "youSaid": "At that time, they just focus on professor's or teacher's saying and feelings about just informations.",
      "betterSay": "At that time, they only focus on the professor's or teacher's words and feelings about the information.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-327",
      "num": 327,
      "youSaid": "In real interaction and real lectures, we need to focus on his or her minds and feelings and what is the hidden meanings of their lectures.",
      "betterSay": "In real interactions and lectures, we need to focus on their thoughts and feelings, as well as the hidden meanings behind their lectures.",
      "category": "tense",
      "categoryName": "⏳ 시제 & 조동사",
      "explanation": "사건이 발생한 시점(과거/현재/미래)에 맞추어 시제를 정확하게 일치시킨 표현입니다."
    },
    {
      "id": "eng-328",
      "num": 328,
      "youSaid": "Because we can see professor's or teacher's faces moving.",
      "betterSay": "Because we can see the professor's or teacher's facial expressions.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-329",
      "num": 329,
      "youSaid": "But the other side, it is the negative side, those kind of wild animals, they have some bad illness such as crazy dog illness.",
      "betterSay": "On the other hand, the negative side is that wild animals can carry dangerous diseases, such as rabies.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-330",
      "num": 330,
      "youSaid": "We need to know what is the main animal from that illness.",
      "betterSay": "We need to know which animal is primarily responsible for that illness.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-331",
      "num": 331,
      "youSaid": "Because we need to use right cure medicine.",
      "betterSay": "Because we need to use the right medicine to cure it.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-332",
      "num": 332,
      "youSaid": "Almost 9 years ago, I've seen raccoons in café with my girlfriend.",
      "betterSay": "Almost 9 years ago, I saw raccoons in a café with my girlfriend.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-333",
      "num": 333,
      "youSaid": "In my country, it has some various types of café such as raccoon café or cat café or dogs café.",
      "betterSay": "In my country, there are various types of cafés, such as raccoon cafés, cat cafés, and dog cafés.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-334",
      "num": 334,
      "youSaid": "I think the interview, they had some different sides between me because I always thinking about animals are really, it has really lovely and cute sides.",
      "betterSay": "I think during the interview, there were some differences between us because I always think of animals as being really lovely and cute.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "항상 일어나는 습관적이고 지속적인 생각은 현재진행형 대신 단순 현재형(always think about)을 씁니다."
    },
    {
      "id": "eng-335",
      "num": 335,
      "youSaid": "Some of interviewee, they said from this article Korea Herald, they said they were really scared.",
      "betterSay": "Some of the interviewees mentioned in this article from the Korea Herald that they were really scared.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-336",
      "num": 336,
      "youSaid": "Every raccoon doesn't has same emotions and same personalities.",
      "betterSay": "Not every raccoon has the same emotions and personality.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-337",
      "num": 337,
      "youSaid": "Because if zoo or those kind of café can't take care their animals, not every companies or zoo or management, managers.",
      "betterSay": "Because if zoos or cafés like that can't take care of their animals, not every company or manager is responsible.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-338",
      "num": 338,
      "youSaid": "But some of that people, they can't take a decision that is just emerged their animals to just wild areas such as park or forest nearby our society.",
      "betterSay": "But some of those people can't make the decision to release their animals into the wild, such as a park or forest near our society.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-339",
      "num": 339,
      "youSaid": "It is about citizen activities when they face to raccoons.",
      "betterSay": "It is about citizens' activities when they encounter/face raccoons.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-340",
      "num": 340,
      "youSaid": "I guess it means 'go to bed' for sleep.",
      "betterSay": "I guess it means 'go to bed' to sleep.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-341",
      "num": 341,
      "youSaid": "And I used to finish my all of physical trainings until 10 p.m.",
      "betterSay": "And I used to finish all my physical training by 10 p.m.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-342",
      "num": 342,
      "youSaid": "So, almost every day, I can take a sleep immediately.",
      "betterSay": "So, almost every day, I can fall asleep immediately.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-343",
      "num": 343,
      "youSaid": "I don't this word's real mean but I guess this word that it means depressed from something.",
      "betterSay": "I don't know the real meaning of this word, but I guess it means being depressed about something.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-344",
      "num": 344,
      "youSaid": "When I first saw her, at that time was 8 years before, so we had really long memories.",
      "betterSay": "When I first saw her, it was 8 years ago, so we have many memories together.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-345",
      "num": 345,
      "youSaid": "So I just guess she and I had same thoughts about this vacation.",
      "betterSay": "So I just guess that she and I had the same thoughts about this vacation.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-346",
      "num": 346,
      "youSaid": "So I faced really serious and terrible situations at last weekdays.",
      "betterSay": "So I faced some really serious and terrible situations last week (during the weekdays).",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-347",
      "num": 347,
      "youSaid": "After that vacation, I sent to direct message to him, \"When do you leave this country?\"",
      "betterSay": "After that vacation, I sent him a direct message asking, 'When are you leaving this country?'",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-348",
      "num": 348,
      "youSaid": "Before left that bus, I gave that single red rose to her.",
      "betterSay": "Before the bus left, I gave her that single red rose.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-349",
      "num": 349,
      "youSaid": "I'm always preparing that proposement it's really important for that.",
      "betterSay": "I'm always preparing for that proposal because it's really important.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-350",
      "num": 350,
      "youSaid": "And I said to him or her, said to my friends if you want to keep that secret and if they said to me 'yes' and I just keep the secrets to under the graveyard.",
      "betterSay": "And I ask my friends, 'Do you want to keep this a secret?' and if they say 'yes,' I will keep those secrets and take them to the grave.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-351",
      "num": 351,
      "youSaid": "But if that secrets leak is the best way for resolution, I think I consider about that deeply.",
      "betterSay": "But if leaking those secrets is the best way to resolve the issue, I think I would consider it deeply.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-352",
      "num": 352,
      "youSaid": "She is most beautiful woman in this office.",
      "betterSay": "She is the most beautiful woman in this office.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-353",
      "num": 353,
      "youSaid": "It is just one of topic for conversation, I think.",
      "betterSay": "It is just one of the topics for conversation, I think.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-354",
      "num": 354,
      "youSaid": "Because those kinds of grammar rules is I heard about some doctor's degree person.",
      "betterSay": "Because those kinds of grammar rules are what I heard about from someone with a doctorate degree.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-355",
      "num": 355,
      "youSaid": "He said to auditorium people that thing was almost every native speakers, they just learned from their parents.",
      "betterSay": "He told the people in the auditorium that this thing was something almost every native speaker just learned from their parents.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-356",
      "num": 356,
      "youSaid": "And just they use just for conversations, express their feelings or wants.",
      "betterSay": "And they use it just for conversations, to express their feelings or wants.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-357",
      "num": 357,
      "youSaid": "And he said to use those kind of grammar rules we can learn in university or bachelor's or master's degree curriculum.",
      "betterSay": "And he said that we can learn those kinds of grammar rules in university, as part of a bachelor's or master's degree curriculum.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-358",
      "num": 358,
      "youSaid": "I think nowadays I really want to conversation skills level up.",
      "betterSay": "I think nowadays I really want to level up my conversation skills.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-359",
      "num": 359,
      "youSaid": "So I just conversate with many people such as foreigners.",
      "betterSay": "So I just converse with many people, such as foreigners.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-360",
      "num": 360,
      "youSaid": "So I really worried about if I talk with foreigners without correct grammar skills.",
      "betterSay": "So I'm really worried about talking with foreigners without proper grammar skills.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-361",
      "num": 361,
      "youSaid": "I think it's little bit they can feel little bit rude.",
      "betterSay": "I think it's a little bit rude, and they might feel that way.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-362",
      "num": 362,
      "youSaid": "So I need your advices and a little bit more coachings about this.",
      "betterSay": "So I need your advice and a little bit more coaching on this.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-363",
      "num": 363,
      "youSaid": "I heard about some rude voice tone from other En 2025년 4월 15일 오후 5:01 2025년 4월 15일 오후 5:01, P25★Report : 💎Student's Name: NAHM HYUN KIM 💎Date: April 15, 2025 _____________________________________ 📝 TODAY'S LESSON: Course: FREE TALKING Title/Page: FREE TIME _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ special [ spesh-uhl ] ▶ people [ pee-puhl] _____________________________________ 🔍 VOCABULARY WORDS 📌 income - money that is earned from doing work or received from investments: EXAMPLE: Average incomes have risen by 4.5 percent over the past year. ________________________ 2025년 4월 16일 오후 4:55 2025년 4월 16일 오후 4:55, P25★Report : 💎Student's Name: NAHM HYUN KIM 💎Date: April 16, 2025 _____________________________________ 📝 TODAY'S LESSON: Course: PATTERN SPEAKING Title/Page: I think … I don’t think … I’m thinking about … I was thinking about … I’ve been thinking about … _____________________________________ 🔍 VOCABULARY WORDS 📌 1. \"I think...\" - You use this to give your opinion or belief. EXAMPLE: I think it’s going to rain soon. 📌 \"I don’t think...\" - You use this to say you don’t believe or don’t agree with 2025년 4월 17일 오후 2:05 2025년 4월 17일 오후 2:05, P25★Report : 💎Student's Name: Nahm hyun Kim (Aaron) 💎Date: April 17, 2025 Thursday _____________________________________ 📝 TODAY'S LESSON: Course: Pattern Speaking -Would you mind if I~? -Would you mind~ing? -I hope~ _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ adjust [ uh-JUHST ] ▶ handling [ HAND-ling ] _____________________________________ 🔍 VOCABULARY WORDS 📌 Would you mind if I~? (pattern) - a polite way of asking for permission to do something or making a request Ex. Woul 2025년 4월 18일 오후 1:57 2025년 4월 18일 오후 1:57, P25★Report : 💎Student's Name: Nahm hyun Kim (Aaron) 💎Date: April 18, 2025 Friday _____________________________________ 📝 TODAY'S LESSON: Course: Article English Book/Website: https://breakingnewsenglish.com/2504/250403-career-apocalypse.html Title/Page: Generation Z is facing a 'career apocalypse' _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ Gen Zer / ˌdʒen ˈziːər / ▶ correspondent [ kawr-uh-SPON-duhnt, kor- ] ▶ apocalypse [ uh-POK-uh-lips ] ▶ uncertainty [ uhn-SUR-tn-tee ] ▶ plumbe 2025년 4월 21일 오후 2:06 2025년 4월 21일 오후 2:06, P25★Report : 💎Student's Name: Nahm hyun Kim (Aaron) 💎Date: April 21, 2025 Monday _____________________________________ 📝 TODAY'S LESSON: Course: Article English Book/Website: https://learningenglish.voanews.com/a/saying-no-at-work-can-be-good-for-your-health/7945653.html Title/Page: Saying ‘No’ at Work Can Be Good for Your Health _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ experts [ noun verb EK-spurts ] ▶ past [ past ] or / pæst / ▶ effort [ EF-ert ] ▶ reports [ ri-PAWRTS, -POHRTS 2025년 4월 22일 오후 3:39 2025년 4월 22일 오후 3:39, P25★Report : 💎Student's Name: Nahm hyun Kim (Aaron) 💎Date: April 22, 2025 Tuesday _____________________________________ 📝 TODAY'S LESSON: Course: Free Talking Book/Website: https://eslconversationtopics.com/questions/early-birds/ Title/Page: Early Birds _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ disciplined [ DIS-uh-plind ] ▶ owl [ oul ] or / aʊl / _____________________________________ 🔍 VOCABULARY WORDS 📌 disciplined (adjective) - behaving in a very controlled way; able to car 2025년 4월 23일 오후 1:59 2025년 4월 23일 오후 1:59, P25★Report : 💎Student's Name: Nahm hyun Kim (Aaron) 💎Date: April 23, 2025 Wednesday _____________________________________ 📝 TODAY'S LESSON: Course: Pattern Speaking -I hope~ (continuation) -I wish~ _____________________________________ 🎧 PRONUNCIATION PRACTICE ▶ exam [ ig-ZAM ] ▶ possibilities [ pos-uh-BIL-i-teez ] ▶ astronaut [ AS-truh-nawt, -not ] _____________________________________ 🔍 VOCABULARY WORDS 📌 I hope~ (pattern) - used to express a desire or expectation for something to happen in the future Ex. I hope the project gets completed on time. 📌 I wish~ (pattern) - used to express a desire for something that is not true or a regret about a situation Ex. I wish I could fly to work every day. 📌 subjunctive mood (noun) - used to express wishes, suggestions, demands, or situations that are not real or are hypothetical ● Structure: I wish + subject + verb (past tense) Examples: I wish I were rich. ⤷ (But I'm not rich, and I can't suddenly become rich.) I wish I could fly. ⤷ (But flying is impossible for humans without a plane.) I wish I hadn’t said that to her. ⤷ (But I did say it, and it’s impossible to change the past.) 📍 Important Note: We use \"were\" even for I/he/she (even though \"was\" is common in everyday speech, \"were\" is the correct form in the subjunctive mood). 📌 I wish I was… - used to express a desire or regret about a situation that is not true or impossible in the present (for informal speech) Example: I wish I was on vacation. ⤷ (But I am not on vacation, and I wish I were.) 📍 Important Note: In formal English, \"I wish I were\" is preferred, but \"I wish I was\" is commonly used in everyday conversation, especially in informal speech. _____________________________________ 🛠️ SENTENCE CONSTRUCTION ✖You said: If I want to or if I wish to something, I think I need to use 'I hope~' pattern in conversation.",
      "betterSay": "If I want something or if I wish for something, I think I need to use the 'I hope~' pattern in conversation.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-364",
      "num": 364,
      "youSaid": "What is the difference about those two patterns?",
      "betterSay": "What is the difference between these two patterns?",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-365",
      "num": 365,
      "youSaid": "I think if I want to something is okay and it is really possible situation, so I know it is 50% over possibilities.",
      "betterSay": "I think if I want something and it's a possible situation, then it has a 50% chance of happening.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-366",
      "num": 366,
      "youSaid": "So I hope that is will be okay.",
      "betterSay": "So I hope it will be okay.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-367",
      "num": 367,
      "youSaid": "I hope this morning is will be okay.",
      "betterSay": "I hope this morning will be okay.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-368",
      "num": 368,
      "youSaid": "…because sometimes in the morning, it's really busy than other days.",
      "betterSay": "...because sometimes in the morning, it's busier than on other days.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-369",
      "num": 369,
      "youSaid": "And those patterns means I want to use 'I wish I~', I need to use past patterns.",
      "betterSay": "And those patterns mean/show that if I want to use 'I wish I~', I need to use the past tense.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-370",
      "num": 370,
      "youSaid": "I wish I can speak Italian.",
      "betterSay": "I wish I could speak Italian. *When using \"I wish\" to talk about something you can't do or don't have, you use \"could\" instead of \"can\" (since \"could\" is the past tense of \"can\" in the subjunctive mood).",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-371",
      "num": 371,
      "youSaid": "I hadn't breakfast not yet.",
      "betterSay": "I haven’t had breakfast yet.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-372",
      "num": 372,
      "youSaid": "…maybe when I arrive my workplace.",
      "betterSay": "…maybe when I arrive at my workplace.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-373",
      "num": 373,
      "youSaid": "Actually, almost a year ago, I learned playing the violin in violin academy.",
      "betterSay": "Actually, about a year ago, I learned to play the violin at a violin academy.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-374",
      "num": 374,
      "youSaid": "So nowadays, I'm work at school, so I can use one of the space in my school.",
      "betterSay": "Nowadays, I work at a school, so I can use one of the spaces in my school.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-375",
      "num": 375,
      "youSaid": "That song sounds sad for me.",
      "betterSay": "That song sounds sad to me.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-376",
      "num": 376,
      "youSaid": "So I think this blank is need to use talk about time.",
      "betterSay": "So I think the preposition in this blank is used to talk about time.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-377",
      "num": 377,
      "youSaid": "This tool is used to cutting vegetables.",
      "betterSay": "This tool is used for cutting vegetables.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-378",
      "num": 378,
      "youSaid": "I think talk about something object so I think I need to use 'to' in this blank.",
      "betterSay": "I think it's talking about something or someone, so I need to use 'to' in this blank.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-379",
      "num": 379,
      "youSaid": "Nowadays, I used to take medicine in the morning because I have too much high blood pressure.",
      "betterSay": "Nowadays, I take medicine in the morning because I have high blood pressure.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "과거의 규칙적 습관(used to + 동사원형)과 현재 익숙한 상태(be used to -ing)의 구분을 명확히 합니다."
    },
    {
      "id": "eng-380",
      "num": 380,
      "youSaid": "Since 1996, I can use chopsticks.",
      "betterSay": "Since 1996, I have been able to use chopsticks.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-381",
      "num": 381,
      "youSaid": "I think I'm planning to indoor rock climbing also.",
      "betterSay": "I think I'm planning t",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-382",
      "num": 382,
      "youSaid": "I think I'm planning to prepare my next certification test for a whole day.",
      "betterSay": "I'm planning to prepare for my next certification test for the whole day.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-383",
      "num": 383,
      "youSaid": "It means just check out outfit something.",
      "betterSay": "It means to just check out the outfit.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-384",
      "num": 384,
      "youSaid": "It has meaning that's emphasis something specific detail or number.",
      "betterSay": "It has a meaning that emphasizes a specific detail or number.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-385",
      "num": 385,
      "youSaid": "Such as when I use 'a' or 'an', it means I want to express something that is just one.",
      "betterSay": "For example, when I use 'a' or 'an', it means I want to express that something is just one.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-386",
      "num": 386,
      "youSaid": "It has the detail of something specific structure.",
      "betterSay": "It has the detail of a specific structure.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-387",
      "num": 387,
      "youSaid": "This context means it meaning that is read the specific book.",
      "betterSay": "In this context, it means to read the specific book.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-388",
      "num": 388,
      "youSaid": "I think I can use some expression of specific structure or something.",
      "betterSay": "I think I can use an expression with a specific structure or something like that.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-389",
      "num": 389,
      "youSaid": "That is really great university, but around the town is really dangerous.",
      "betterSay": "That is a really great university, but the are",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "셀 수 있는 단수 가산 명사 앞에는 반드시 부정관사 a/an을 빠뜨리지 않고 붙여주어야 합니다."
    },
    {
      "id": "eng-390",
      "num": 390,
      "youSaid": "I think this week is just for my, check my health condition.",
      "betterSay": "I think this week is just for me to check my health condition.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-391",
      "num": 391,
      "youSaid": "It has same meanings about next word is just one or just one things, such as 'it's an apple' or 'it's a banana', 'it's cup of orange juice'.",
      "betterSay": "It means the next word refers to just one thing, such as 'it's an apple,' 'it's a banana,' or 'it's a cup of orange juice.'",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-392",
      "num": 392,
      "youSaid": "But it is different by next word's first spelling because if it has a, e, i, o, u, these sounds of English spelling, we need to use 'an'.",
      "betterSay": "But it depends on the first sound of the next word because if it starts with a vowel sound, like a, e, i, o, or u, we need to use 'an'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-393",
      "num": 393,
      "youSaid": "But if I want to speak to something specific one thing, I just use 'a' article.",
      "betterSay": "But if I want to talk about a specific single thing, I use the article 'a'.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-394",
      "num": 394,
      "youSaid": "The article 'the' is, if I want to speak something specific one thing, that is 'I need the key for open the door', like that.",
      "betterSay": "The article 'the' is used when I want to talk about a specific thing. For example, 'I need the key to open the door.'",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-395",
      "num": 395,
      "youSaid": "…because this sentence means about I borrowed just one pencil because 'pencil' has just no 's' sounds.",
      "betterSay": "…because this sentence means I borrowed only one pencil, and 'pencil' doesn’t have an 's' at the end.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-396",
      "num": 396,
      "youSaid": "I think this sentence is no article needed.",
      "betterSay": "I think no article is needed in this sentence. / I think this sentence doesn’t need an article.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-397",
      "num": 397,
      "youSaid": "So this is I think waste of grammar.",
      "betterSay": "I think that’s just unnecessary grammar.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-398",
      "num": 398,
      "youSaid": "It's not like sentence American, I think.",
      "betterSay": "I don’t think that sentence sounds American.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-399",
      "num": 399,
      "youSaid": "In this afternoon, I'm planning to go to rock climbing gym.",
      "betterSay": "This afternoon, I'm planning to go to the rock climbing gym.",
      "category": "infinitive",
      "categoryName": "🔄 동명사 vs 부정사",
      "explanation": "동사의 목적어로 to부정사를 취하는지 동명사(-ing)를 취하는지 문맥에 맞게 구별한 교정입니다."
    },
    {
      "id": "eng-400",
      "num": 400,
      "youSaid": "Nowadays, I started a new semetry(?) in my university, so I think during a work, if I have free time, I'll watching some lecture.",
      "betterSay": "Nowadays, I’ve started a new semester at my university, so I think if I have free time during work, I’ll watch some lectures.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-401",
      "num": 401,
      "youSaid": "After that, the sentence want to express once more smartphone but it is repeated.",
      "betterSay": "After that, the sentence tries to mention the smartphone again, but it’s already repeated.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-402",
      "num": 402,
      "youSaid": "I'd like to make a plan about my new travel.",
      "betterSay": "I'd like to make a plan for my new travel.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-403",
      "num": 403,
      "youSaid": "I need a map for my travel.",
      "betterSay": "I need a map for my trip.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-404",
      "num": 404,
      "youSaid": "I need to a smartphone that is newest one.",
      "betterSay": "I need the newest smartphone.",
      "category": "noun",
      "categoryName": "📦 관사 & 명사 수일치",
      "explanation": "특정한 대상이나 대화 상대방과 공유하고 있는 맥락을 가리킬 때는 정관사 the를 명확히 지정합니다."
    },
    {
      "id": "eng-405",
      "num": 405,
      "youSaid": "When I wake up in every morning, I love to eat an apple.",
      "betterSay": "When I wake up every morning, I love to eat an apple.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-406",
      "num": 406,
      "youSaid": "I can't make a perfect plan because I have an issue about my health condition.",
      "betterSay": "I can't make a perfect plan because I have an issue with my health condition.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-407",
      "num": 407,
      "youSaid": "I really love to cook an egg in my omelet.",
      "betterSay": "I really love to cook an omelet.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    },
    {
      "id": "eng-408",
      "num": 408,
      "youSaid": "The United Kingdom is my next plan of travel.",
      "betterSay": "The United Kingdom is my next travel destination.",
      "category": "phrasing",
      "categoryName": "💬 원어민 구어체 & 뉘앙스",
      "explanation": "한국어식 직역에서 벗어나, 원어민 튜터가 일상 대화에서 가장 많이 사용하는 자연스러운 구어체 뉘앙스로 다듬은 문장입니다."
    },
    {
      "id": "eng-409",
      "num": 409,
      "youSaid": "I used this fork last night, and the fork make a sore of my fingers.",
      "betterSay": "I used this fork last night, and it caused a sore on my finger.",
      "category": "prep",
      "categoryName": "🎯 전치사 & 연어",
      "explanation": "동사나 명사와 자연스럽게 호응하는 전치사(Collocation)를 바르게 교정한 문장입니다."
    }
  ]
};

  // 전역 window 객체에 초기 시드 데이터 바인딩
  global.INITIAL_DISCHARGE_DATE = INITIAL_DISCHARGE_DATE;
  global.INITIAL_CAMINO_DATA = INITIAL_CAMINO_DATA;
  global.INITIAL_SNS_DATA = INITIAL_SNS_DATA;
  global.INITIAL_PORTFOLIO_DATA = INITIAL_PORTFOLIO_DATA;
  global.INITIAL_EXAM_SCHEDULES = INITIAL_EXAM_SCHEDULES;
  global.INITIAL_BAND_SCHEDULES = INITIAL_BAND_SCHEDULES;
  global.ENERGY_FOLDER_MANIFEST = ENERGY_FOLDER_MANIFEST;
  global.INITIAL_ENERGY_STUDY_PLAN = INITIAL_ENERGY_STUDY_PLAN;
  global.ENERGY_DAILY_BRIEFINGS = ENERGY_DAILY_BRIEFINGS;
  global.INITIAL_ENERGY_FORMULAS = INITIAL_ENERGY_FORMULAS;
  global.INITIAL_ENERGY_QUESTIONS = INITIAL_ENERGY_QUESTIONS;
  global.INITIAL_EXTERNAL_DASHBOARDS = INITIAL_EXTERNAL_DASHBOARDS;
  global.INITIAL_INBODY_DATA = INITIAL_INBODY_DATA;
  global.INITIAL_KNOU_DATA = INITIAL_KNOU_DATA;
  global.INITIAL_KNOU_CREDIT_PLAN = INITIAL_KNOU_CREDIT_PLAN;
  global.INITIAL_KNOU_CREDIT_PLAN_SEED = JSON.parse(JSON.stringify(INITIAL_KNOU_CREDIT_PLAN));
  global.INITIAL_ENGLISH_DATA = INITIAL_ENGLISH_DATA;


// =========================================================================
// 16. 공모전 & 문학·아이디어 출품 이력 및 창작 아카이브 데이터 (29선 전수 수록)
// =========================================================================
const INITIAL_CONTEST_DATA = {
  contestDataVersion: 3,
  title: "공모전 출품 이력 & 문학·아이디어 아카이브 (총 42선)",
  categories: [
  {
    "id": "all",
    "name": "전체 부문 (42)",
    "icon": "fa-border-all"
  },
  {
    "id": "literature",
    "name": "문학·문예·수기 (18)",
    "icon": "fa-book-open"
  },
  {
    "id": "policy",
    "name": "정책·사회복지 제안 (5)",
    "icon": "fa-landmark"
  },
  {
    "id": "idea",
    "name": "아이디어·도시·기술 (11)",
    "icon": "fa-lightbulb"
  },
  {
    "id": "governance",
    "name": "공공 거버넌스·청년 (6)",
    "icon": "fa-users"
  },
  {
    "id": "naming",
    "name": "슬로건·네이밍 (2)",
    "icon": "fa-signature"
  }
],
  statuses: [
  {
    "id": "all",
    "name": "전체 상태"
  },
  {
    "id": "awarded",
    "name": "🏆 수상·선정 (6)"
  },
  {
    "id": "submitted",
    "name": "📤 출품 완료 (36)"
  }
],
  entries: [
  {
    "id": "c-2026-yangseong",
    "year": "2026",
    "title": "제2회 화성시 양성평등 실천 공모전",
    "pieceTitle": "지워지지 않는 얼룩은 없다 (일반부 산문)",
    "category": "literature",
    "categoryName": "문학·산문",
    "organization": "화성시 / 화성시여성가족청소년재단",
    "submissionDate": "2026.06",
    "status": "awarded",
    "result": "장려상 수상 🏆 (상금 수령)",
    "badge": "🏆 장려상 수상",
    "badgeClass": "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    "synopsis": "일요일 오전 베란다 세탁기 위 노란 세제통을 바라보며 깨달은 가사 노동의 본질과 돌봄의 가치를 담은 산문. 단순한 구역 분할이 아닌 보이지 않는 인지적 노동을 함께 분담하는 성숙한 양성평등 실천 수기.",
    "coreConcept": "가사 분담의 기계적 5:5 분할을 넘어, '보이는 사람이 먼저 치우는 배려'와 '돌봄의 인지적 노동'을 상호 인정하는 성숙한 부부 관계의 성장 서사.",
    "futureUsage": "양성평등, 가족 사랑, 생활 수기 공모전의 대표 입상작 레퍼런스로 활용.",
    "fileName": "[양성평등공모전_일반부 산문_김남현_지워지지 않는 얼룩은 없다].hwp",
    "fileSize": "127 KB",
    "fullContent": "접수번호\n NO. \n \n성 명\n김남현\n생년월일\n(6자리)\n960103\n작 품 명\n지워지지 않는 얼룩은 없다\n※ 아래 안내 문구를 삭제한 후 작품 내용을 작성하여 주시기 바랍니다.\n※ 작성 시 본 서식의 용지 여백 및 서식 설정은 변경하지 마시기 바랍니다.\n일요일 오전의 베란다는 온도의 경계선 같다. 거실의 따스한 온기와 바깥 공기의 서늘함이 유리창 하나를 사이에 두고 팽팽하게 맞서는 공간. 그곳 세탁기 위에는 언제나 묵직한 노란색 액체 세제통이 놓여 있었다.\n어린 시절 기억 속의 세제통은 늘 어머니 손에 들려 있었다. 어머니의 거친 손마디가 세제 뚜껑을 돌려 정확한 양을 계량하고, 세탁기 안으로 쏟아붓는 모습은 마치 거룩한 의식처럼 당연해 보였다. 아버지는 베란다 문을 열고 \"내 와이셔츠는 따로 빨아야지?\"라고 묻곤 하셨다. 그때의 나는 그것이 불평등이라거나 편견이라고 생각하지 못했다. 역할의 분담이란 그저 태어날 때부터 주어지는 성별의 매뉴얼에 따르는 것인 줄 알았기 때문이다.\n지금의 배우자와 가정을 꾸리면서 다짐했었다. '나는 내 아버지처럼 살지 않으리라. 가사는 정확히 반으로 나눈다.' 우리는 결혼 전 엑셀 파일까지 켜두고 규칙을 정했다. 청소와 설거지는 내 담당, 요리와 빨래는 배우자의 담당. 구역을 정확히 나누고 서로의 영역을 침범하지 않는 것만이 가장 공평하고 현대적인 양성평등의 실천이라고 믿었다. 그러나 삶은 숫자로 나누어떨어지는 분수 공식이 아니었다.\n계산기처럼 두드려 맞춘 분담은 생각보다 쉽게 삐걱거렸다. 늦은 퇴근이 이어지던 주간, 싱크대에는 내가 치워야 할 그릇들이 산더미처럼 쌓여갔다. 배우자는 피곤한 몸으로 거실에 앉아 쌓여가는 설거짓거리를 바라보며 한숨을 쉬었고, 나는 내 영역에 침범하지 말라며 날을 세웠다.\n\"내 피로와 당신의 피로를 어떻게 저울에 올려놓고 똑같이 나눌 수 있어? 이건 공평한 게 아니라 그냥 방임이야.\"\n배우자의 그 한마디는 내 가슴을 쿡 찔렀다. 내가 생각한 양성평등은 그저 '내 몫의 노동만 하고 빠지는 얌체 같은 방어기제'에 불과했다. 가사 노동의 본질은 눈에 보이는 구역의 분할이 아니라, 그 집안에 살아가는 사람들의 삶을 지탱하는 '돌봄'의 연속성에 있었다. 양성평등이라는 거창한 구호 뒤에 숨어, 나는 여전히 가사와 돌봄을 나와 분리된 무언가로 취급하고 있었다. 단지 과거의 아버지들보다 조금 더 많은 시간 동안 빗자루를 들고 있을 뿐이었다.\n그날 밤, 나는 배우자가 잠든 사이 조용히 싱크대 앞으로 갔다. 그릇을 닦으며 문득 베란다를 바라보았다. 어둠 속에 덩그러니 놓인 노란색 세제통이 보였다. 나는 한 번도 저 세제통의 무게를 진심으로 느껴본 적이 없었다. 빨래가 마르는 동안 집안에 퍼지는 향긋한 냄새만 누렸을 뿐, 그것을 위해 누군가가 세탁기를 돌리고, 젖은 옷가지를 털어 널고, 날씨를 살피는 보이지 않는 '인지적 노동'은 온전히 배우자의 몫으로 남아 있었다.\n다음 날부터 우리는 규칙을 지웠다. 대신 '보이는 사람이, 여유가 있는 사람이 먼저 움직인다'라는 유연한 연대의 원칙을 세웠다. 그리고 무엇보다 중요한 것은, 상대방이 주로 하던 일의 프로세스를 온전히 학습하는 것이었다.\n나는 처음으로 세탁기 매뉴얼을 정독했다. 울 코스와 표준 코스의 차이를 배우고, 옷감 뒤에 붙은 세탁 라벨을 확인하는 법을 익혔다. 흰옷과 색깔 옷을 분류하는 번거로움 속에서, 그동안 배우자가 조용히 감내해 온 시간의 부피를 만졌다. 배우자 역시 내가 주로 하던 화장실 배수구 청소나 분리수거의 고단함을 몸으로 겪으며 고개를 끄덕였다.\n우리가 일상 속에서 성평등을 실천한다는 것은, 서로의 성 역할에 대한 고정관념을 깨부수는 거창한 투쟁이 아니었다. 그것은 상대방의 일상에 존재하는 미세한 불편함을 먼저 알아채고, 그 짐을 기꺼이 나누어지겠다는 다정한 다짐에 가까웠다. 아내가 바쁜 아침에는 내가 찌개를 끓이고 아내의 출근길 가방을 챙겼다. 내가 야근으로 지친 저녁에는 아내가 베란다의 세제통을 들었다.\n서로의 영역을 가르던 선이 사라지자, 역설적으로 진정한 의미의 평등과 평온이 찾아왔다. 우리는 더 이상 \"이건 내 일인데 왜 안 도왔냐?\"며 날을 세우지 않는다. 대신 \"오늘 고생 많았으니 이건 내가 할게\"라는 말이 자연스럽게 오고 간다.\n얼마 전, 주말을 맞아 대청소하던 중 거실 매트에 붉은 토마토소스 얼룩이 묻은 것을 발견했다. 예전 같았으면 \"이거 어떻게 지워야 해?\"라며 아내를 불렀을 터였다. 하지만 이제 나는 당황하지 않는다. 베란다로 가 노란 세제통을 열고 베이킹소다를 섞어 부드러운 솔로 얼룩을 문질렀다. 몇 번의 손길 끝에 붉은 자국은 씻은 듯이 사라졌다.\n가사와 돌봄은 삶의 흔적을 지우고 다시 깨끗한 도화지로 만드는 일이다. 이 반복적이고 숭고한 노동을 어느 한 성별의 몫으로만 남겨두는 사회는 결코 앞으로 나아갈 수 없다. 가정이라는 가장 작은 사회에서부터 시작된 이 공평한 호흡은, 결국 우리가 문을 열고 나설 직장과 학교, 그리고 더 큰 세상의 공기를 바꾸는 씨앗이 될 것이라 믿는다.\n여전히 우리 사회에는 성 역할에 대한 보이지 않는 얼룩들이 남아 있다. 하지만 겁낼 필요는 없다. 일상 속에서 서로의 손을 잡고 묵묵히 문지르다 보면, 지워지지 않는 얼룩이란 존재하지 않으니까. 오늘도 우리 집 베란다의 노란 세제통은 내 손과 아내의 손을 번갈아 타며 기분 좋은 무게감으로 그 자리를 지키고 있다.\n기재 불필요",
    "tags": [
      "#양성평등",
      "#산문",
      "#장려상",
      "#화성시",
      "#부부돌봄",
      "#가사분담"
    ]
  },
  {
    "id": "c-2026-forestfire",
    "year": "2026",
    "title": "2026년 산불방지 수기 공모전",
    "pieceTitle": "푸른 숨결을 지키는 내 손안의 작은 칼집",
    "category": "literature",
    "categoryName": "문학·수기",
    "organization": "산림청",
    "submissionDate": "2026.07.07",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "건조한 봄날 화성의 뒷산에서 담배꽁초 불씨를 끄고 타인의 흡연을 정중히 만류한 경험을 통해, 일상 속 작은 실천과 성숙한 경각심이 대자연의 푸른 숨결을 지키는 가장 강력한 예방책임을 전하는 감동 수기.",
    "coreConcept": "작은 칼집과 불씨의 비유를 통해, 산불 예방이 거창한 방재 시스템 이전에 한 사람 한 사람의 손끝에서 시작되는 일상적 경각심임을 강조.",
    "futureUsage": "환경안전 수기, 산림청 및 안전재난 공모전 지원 시 자전적 경험 템플릿으로 활용.",
    "fileName": "(화성시 김남현) 2026년 산불방지 수기 공모.hwpx",
    "fileSize": "60 KB",
    "fullContent": "[서식 1]\n2026년 산불방지 수기 공모전 참가신청서\n* 접수번호\n기입 불필요\n성 명\n김남현\n생년월일\n1996.01.03.\n주 소\n경기도 화성시 능동 1066-3번지 아르젠 3차 오피스텔 412호\n연 락 처\n휴대전화\n010-2232-3442\nE-mail\ntr788@naver.com\n작 품 명\n푸른 숨결을 지키는 내 손안의 작은 칼집\n내용 요약\n* 간략히 기재\n건조한 봄날 화성의 뒷산에서 담배꽁초 불씨를 끄고 타인의 흡연을 정중히 만류한 경험을 통해, 일상 속 작은 실천과 성숙한 경각심이 대자연의 푸른 숨결을 지키는 가장 강력한 예방책임을 전하는 수기입니다.\n2026년 7월 7 일\n신청자 김남현 (서명/인)\n* e-mail 제출 시 별도의 서명 없이도 동의한 것으로 간주\n함\n* 한글파일(hwp, hwpx) 또는 PDF로 제출\n산림청장\n귀하\n[서식 2]\n개인정보 수집·이용 및 제3자 제공 동의서\n개인정보 수집 / 이용 동의서\n산림청은 산불방지 수기 공모전 운영을 위하여 아래와 같이 개인정보를 수집·이용하는 내\n용을 관계 법령에 따라 알려드리오니, 동의하여 주시기 바랍니다.\n[수집·이용 항목]\n(필수항목)\n성명, 연락처(휴대폰 번호, 전화번호), 주소, 이메일\n[수집·이용 목적]\n산불방지 수기 공모전 접수, 본인확인, 심사, 결과 안내, 시상금 지급 등 공모전 운영·관리\n에 이용되며, 수집한 개인정보는 본 수집·이용 목적 외의 다른 목적으로 사용되지 않습니다.\n[보유·이용 기간]\n공모전 종료 후 1년. 단, 수상자의 경우 수상작 활용, 시상금 지급, 민원 처리 등을 위해 필\n요\n한 기간까지 보관할 수 있습니다.\n[동의 거부 권리 및 불이익]\n정보 주체는 개인정보 수집에 동의를 거부할 수 있으며, 필수항목 제공에 동의하지 않는 경우 산불방지 수기 공모전 접수 및 심사 진행이 제한될 수 있습니다.\nV\n동의\n동의하지 않음\n개인정보 제3자 제공 동의서\n산불방지 수기 공모전 운영을 위하여 아래와 같이 개인정보를\n제3자에게 제공하는 내용\n을 관계 법령에 따라 알려드리오니, 동의하여 주시기 바랍니다.\n[제공받는 자]\n심사위원, 공모전 운영·홍보 관련 기관 등\n[제공 항목]\n(필수항목)\n성명, 연락처(휴대폰 번호, 전화번호), 주소, 이메일\n[제공받는 자의 이용 목적]\n심사, 입상자 발표, 보도자료 배포, 홍보물 제작 및 배포 등 공모전 운영에 필요한 업무처리\n[보유·이용 기간]\n제공 목적 달성 시까지\n[동의 거부 권리 및 불이익]\n정보 주체는 개인정보 제3자 제공에 대한 동의를 거부할 수 있으며, 동의하지 않는 경우 산불방지 공모전 심사 및 수상 절차 진행이 제한될 수 있습니다.\nV\n동의\n동의하지 않음\n2026년 7월 7일\n신청자 김남현 (서명/인)\n* e-mail 제출 시 별도의 서명 없이도 동의한 것으로 간주\n함\n* 한글파일(hwp, hwpx) 또는 PDF로 제출\n산림청장\n귀하\n[서식 3]\n수상작 이용 동의서\n본인은 산림청이 주최하는\n「\n2026년 산불방지 수기 공모전」\n에 작품을 출품\n함에 있어 다음과 같이 서약합니다.\n○ 저작권 귀속\n[저작권법 제10조]\n- 공모전에 출품된 작품에 대한 저작권은 출품자에게 있음을 확인합니다.\n○ 이용허락\n[저작권법 제46조]\n-\n산림청은 입선 이상 작품에 한하여 향후 10년간 비영리·공익 목적으로 수상작\n을\n사용할 수 있으며, 산불방지 홍보·교육자료 제작 등을 위하여 복제·전시·배포·전\n송 및 사용·게시할 수 있음을 확인합니다.\n- 산림청은 수상작의 본질적인 내용을 훼손하지 않는 범위에서 일부 발췌, 편집, 요약, 디자인 편집 등 필요한 가공을 할 수 있음을 확인합니다.\n- 출품자는 출품과 동시에 추후 입상 시 산불방지 홍보 등에 저작물의 이용을\n허락한 것으로 보며, 입상작 이용에 대한 대가는 입상에 따른 시상금(또는 상\n품권)으로 대체될 수 있음을 확인합니다.\n○ 입상취소 및 시상금환수\n-\n입상 후 출품작이 표절, 저작권 침해, 타 공모전 입상작 출품, 명의도용 등\n문제가\n있는 것으로 확인될 경우 입상을 취소하고 시상금을 환수할 수 있음에 동의합니다.\n○ 법적·도의적 책임\n- 출품작과 관련하여 저작권, 개인정보, 명예훼손, 보안 등 문제가 확인될 경우, 이에 대한 일체의 법적‧도의적 책임은 출품자 본인에게 있음을 확인합니다.\n○ 저작권 침해 등\n-\n출품작은 출품자가 직접 경험한 내용을 바탕으로 작성한 순수 창작물이며,\n타\n공모전 입상작, 표절작, 타인 명의의 작품, 대필 또는 AI로 생성한 작품 등 저작권 침해 우려가 있는 작품에 해당하지 않음\n을 확인합니다.\n○ 출품작 반환\n- 제출한 출품작 및 관련 서류는 반환하지 않음을 확인합니다.\n본 동의서는 ‘한국저작권위원회’의 「창작물 공모전 지침」을 참고하여 작성하였음\n2026년 7월 7 일\n신청자 김남현 (서명/인)\n* e-mail 제출 시 별도의 서명 없이도 동의한 것으로 간주\n함\n* 한글파일(hwp, hwpx) 또는 PDF로 제출\n산림청장\n귀하\n[서식 4]\n2026년 산불방지 수기\n제 목\n푸른 숨결을 지키는 내 손안의 작은 칼집\n건조한 봄날 화성의 뒷산에서 담배꽁초 불씨를 끄고 타인의 흡연을 정중히 만류한 경험을 통해, 일상 속 작은 실천과 성숙한 경각심이 대자연의 푸른 숨결을 지키는 가장 강력한 예방책임을 전하는 수기입니다.\n주말이면 복잡한 일상의 소음과 마음을 짓누르는 무력감을 잠시 내려놓기 위해 경기도 화성시 근처의 작은 산을 찾곤 한다. 세상 속에서 치이는 현실의 무게를 잠시나마 잊기 위해 정처 없이 시작했던 등산은, 어느새 나에게 메마른 숨을 불어넣어 주는 가장 소중한 일상이자 안식처가 되었다. 유독 비가 내리지 않아 가물었던 그해 봄날도 마찬가지였다. 늘 걷던 익숙한 등산로를 따라 담담히 발걸음을 옮기며, 머릿속을 어지럽히는 이런저런 생각의 타래를 풀어내고 있었다.\n하지만 그날의 산은 평소와 달리 어딘가 위태로운 기운을 품고 있었다. 오랫동안 메마른 하늘 아래 서 있던 나무들은 생기를 잃은 채 서 있었고, 발밑에서 서걱거리며 부서지는 마른 잎사귀들의 소리는 마치 바짝 달아오른 화약고 위를 걷는 듯 아슬아슬하게 들려왔다. 문득 불어오는 메마른 봄바람에 누런 흙먼지가 뿌옇게 날릴 때마다, 산자락 전체가 작은 불씨 하나에도 거대한 화마로 돌변할 수 있겠다는 막연한 두려움이 엄습했다. 자연이 보내는 무언의 경고였을지도 모를 그 위태로움 속에서, 나는 평소보다 조금 더 주위를 살피며 걸음을 옮겼다.\n중턱쯤 올랐을 때였다. 숲이 내뿜는 푸르고 싱그러운 향기 사이로, 도저히 어울리지 않는 매캐하고 이질적인 냄새가 코끝을 스쳤다. 순간 가슴 한구석이 차갑게 내려앉으며 나도 모르게 발걸음이 멈춰 섰다. 불길한 예감은 틀리지 않았다. 등산로 옆 작은 나무 벤치가 놓인 쉼터 근처, 수북하게 쌓인 마른 낙엽 더미 사이에서 가느다란 하얀 연기가 스멀스멀 피어오르고 있는 것이 보였다. 누군가 휴식을 취하다 무심코 버리고 간 담배꽁초가 낙엽 속에서 여전히 서슬 퍼런 붉은 불씨를 품은 채 주변을 태워 들어가고 있었다.\n2026년 산불방지 수기\n제 목\n푸른 숨결을 지키는 내 손안의 작은 칼집\n세찬 봄바람이 한 번만 크게 몰아쳤다면 낙엽 전체로 불길이 번져 걷잡을 수 없는 산불로 이어질 수도 있었던 위험천만한 순간이었다. 당황스러움에 심장이 세차게 뛰었지만, 이내 배낭을 열고 아침에 챙겨온 개인 텀블러를 꺼냈다. 마시다 남은 차가운 물을 연기가 피어오르는 낙엽 위에 조심스레 쏟아부었다. 치익 하는 날카로운 소리와 함께 검은 연기가 뿜어져 나왔지만, 그것만으로는 안심할 수 없었다. 혹시나 낙엽 깊숙한 곳에 숨어있을 속 불씨를 찾기 위해 등산지팡이로 주변을 샅샅이 헤집으며 흙과 함께 완전히 짓밟아 뭉갰다.\n불씨가 완벽히 사그라진 것을 확인하고 나서야 팽팽하게 당겨졌던 긴장이 풀리며 깊은 한숨이 터져 나왔다. 내 손에 든 작은 텀블러 하나, 그 안에 담긴 몇 모금의 물이 한순간에 산을 살리는 진화 장비가 될 수 있음을 눈앞에서 생생하게 목격한 순간이었다. 산불 예방이라는 것이 대단한 장비나 거창한 훈련을 받은 사람들만의 영역이 아니라, 이처럼 길을 걷다 마주하는 일상 속의 작은 관심과 실천에서 비롯된다는 사실이 뼈저리게 다가왔다. 지나고 나면 문득 떠오르는 별미처럼, 그 작은 행동이 지켜낸 푸른 숲의 가치가 가슴 벅차게 느껴졌다.\n다시 마음을 정돈하고 산을 오르기 시작한 지 얼마 지나지 않아, 저만치 앞서 걷던 한 등산객의 뒷모습이 눈에 들어왔다. 그런데 그가 주머니에서 슬그머니 라이터를 꺼내 드는 것이 보였다. 주변의 울창한 마른나무들은 아랑곳하지 않고, 아주 자연스럽게 담배에 불을 붙이려던 참이었다. 그 순간 내 머릿속에는 조금 전 낙엽 속에서 피어오르던 붉은 불씨의 잔상이 강렬하게 겹쳐 지나갔다. 나이가 들수록 타인의 행동에 간섭하지 않고, 남에게 상처를 주지 않으려 입을 닫고 침묵하는 것이 미덕이라 믿으며 살아온 나였기에 순간 깊은 갈등이 밀려왔다.\n2026년 산불방지 수기\n제 목\n푸른 숨결을 지키는 내 손안의 작은 칼집\n모른 척 지나칠 것인가, 아니면 한소리를 해야 할 것인가. 하지만 지금 눈앞의 방심을 묵인하고 지나친다면, 그것은 훗날 소 잃고 외양간 고치는 격의 돌이킬 수 없는 후회로 돌아올 것이 분명했다. 타인에게 무작정 비난의 칼날을 휘두르는 미치광이가 되어서는 안 되겠지만, 위기의 순간에 필요를 살펴 모두를 지켜내는 성숙한 신사의 언어가 필요한 순간이었다. 나는 심호흡을 크게 한 번 한 뒤, 그에게 조심스럽게 다가가 정중히 말을 건넸다.\n\"어르신, 죄송하지만 불은 잠시 넣어두시는 게 어떨까요. 방금 저 아래 쉼터에서 누군가 버린 꽁초 때문에 낙엽이 타들어 가는 걸 겨우 끄고 오는 길입니다. 보시다시피 사방이 너무 메말라 있어서 작은 불씨 하나도 금방 큰불로 번질 것 같아 걱정스러워 그렇습니다. 산을 사랑하시는 만큼, 담배는 하산하신 뒤에 태워주시면 정말 감사하겠습니다.\"\n내 나직하고 진심 어린 목소리에 어르신의 얼굴에는 순간 당혹감과 머쓱한 짜증이 교차했다. 하지만 나의 비난 없는 덤덤한 태도에 이내 라이터를 주머니 속 칼집에 넣듯 깊숙이 집어넣으셨다. 그러고는 머리를 긁적이며 \"내가 생각이 짧았네. 조심하겠네\" 하고 무안한 낌새로 발걸음을 재촉하셨다. 멀어져 가는 그의 뒷모습을 보며, 먼저 조심히 다가가 상대를 존중하며 건넨 대화가 자칫 일어날 수 있었던 거대한 화를 막아냈다는 안도감이 밀려왔다.\n2026년 산불방지 수기\n제 목\n푸른 숨결을 지키는 내 손안의 작은 칼집\n만약 내가 그 상황을 회피하고 침묵으로 일관했다면, 그 인연의 끝에는 시커먼 회색빛 잿더미와 지울 수 없는 상처만 남았을지도 모른다. 타인의 철없는 행동이나 사소한 방심 하나로도 쉽사리 끊어지고 무너질 수 있는 게 자연이자 우리네 삶의 인연이기 때문이다. 산불 예방이라는 거창한 사회적 구호는 결국 거창한 데 있는 것이 아니다. 일상에서 나 하나조차 건사하지 못하는 애송이 같은 안일함을 스스로 경계하고, 주변의 방심을 용기 있게 다독이는 작은 행동들이 모여 비로소 완성되는 것이다.\n산행을 마치고 내려오는 길, 멀리서 다시 바라본 산등성이는 여전히 푸른 빛을 머금은 채 조용히 그 자리를 지키고 있었다. 누군가는 그저 무심코 스쳐 지나갔을 낙엽 속의 작은 불씨, 그리고 한 번의 정중한 말임이 오늘 저 산의 온전하고 곧은 풍경을 지켜낸 셈이다. 우리가 매일 숨 쉬며 누리는 산의 맑은 향기와 싱그러운 공기는 결코 거저 주어진 것이 아니다. 수많은 사람의 보이지 않는 작은 실천들이 모여 유지되는 귀한 선물이기에, 받은 만큼 다시 관심을 기울이고 나눔으로 갚아야 함이 마땅하다.\n생각과 삶의 방식은 저마다 다르고 시시때때로 변하지만, 자연을 대하는 우리의 안전의식과 경각심만큼은 결코 타협하거나 흔들려서는 안 된다. 마구잡이로 휘두른 사소한 귀찮음과 \"나 하나쯤이야.\" 하는 방심의 날은 결국 부메랑이 되어 나 자신과 사랑하는 이웃들의 삶을 집어삼키는 재앙으로 되돌아오기 마련이다. 내 손안의 작은 텀블러, 필요할 때만 꺼내어 모두를 지켜내는 절제된 행동이야말로 대자연의 푸른 숨결을 지속시키는 가장 단단하고 안전한 칼집이다.\n2026년 산불방지 수기\n제 목\n푸른 숨결을 지키는 내 손안의 작은 칼집\n오늘도 내가 사는 경기도 화성시의 하늘 아래, 무겁게 내려앉았던 구름이 걷히고 맑은 햇살이 메마른 등산로를 따스하게 비추고 있다. 이 아름다운 숲길을 걷는 모든 이들의 마음속에 산을 향한 작은 도리와 경각심이 소리 없이 깊이 배어들기를 간절히 바란다. 비록 평범한 일상 속의 작은 경험이었지만, 이 또한 내 삶을 한 단계 성숙하게 만들어 준 소중한 여정이었으며, 저 푸른 산이 오래도록 상처 없이 우리 곁에 머물기를 기원한다.\n참고\n심사기준 및 배점\n항목\n심사 기준\n배점\n총점\n100\n교훈성·전달성\no 산불에 대한 경각심과 안전의식을 제고할 수 있는 메시지를 담고 있는지 여부\no 산불방지의 중요성을 국민에게 효과적으로 전달할 수 있는지 여부\n30\n충실성\no 산불예방·진화, 자원봉사 등 산불방지 활동 내용이 충실하게 담겼는지 여부\no 활동의 상황, 과정, 역할 등이 독자가 이해할 수 있도록 서술되었는지 여부\n30\n진실성\no\n본인이 직접 경험한 내용을 바탕으로 작\n성되었는지 여부\no 산불방지 활동 당시 느낀 점이 진정성 있게 표현되었는지 여부\n25\n문학성\no 글의 구성과 흐름이 자연스럽고, 수기 형식에 적합한 문체와 표현으로 읽기 쉽게 작성되었는지 여부\n15",
    "tags": [
      "#산불방지",
      "#환경수기",
      "#산림청",
      "#화성시",
      "#생활안전",
      "#시민의식"
    ]
  },
  {
    "id": "c-2026-gihyungdo",
    "year": "2026",
    "title": "2026년 기형도문학관 창작시 공모전 ‘어느 푸른 저녁’",
    "pieceTitle": "입춘(立春)의 여관",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "(재)광명문화재단 기형도문학관",
    "submissionDate": "2026.09.07",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "기형도 시인의 시적 정서와 계승을 담아, 유년의 결핍과 겨울 끝자락의 시린 기억을 절제된 이미지와 서늘한 언어로 형상화한 정통 창작시.",
    "coreConcept": "\"입춘이 지나도 골목은 녹지 않았다... 소년의 시절을 지나온 사람이면 누구나 가슴속에 하나씩 품고 사는, 부러진 열쇠 같았다\"",
    "futureUsage": "순수 문학상, 현대시 공모전, 문예지 등단 투고 시 대표 창작시 포트폴리오로 활용.",
    "fileName": "2026년 기형도문학관 창작시 공모전 출품신청서_김남현.hwp",
    "fileSize": "81 KB",
    "fullContent": "2026년 기형도문학관 창작시 공모전 ‘어느 푸른 저녁’\n[출품 신청서]\n \n인적사항\n접수번호\n<기형도문학관 작성>\n성명\n(한자)\n김남현\n金男炫\n생년월일\n(주민등록상 기준)\n1996.01.03\n주소\n경기도 화성시 동탄구 동탄원천로 354-16 (능동) 아르젠 3차 412호\n신분 구분\n \n고등학생\n \n대학(원)생\n \n직장인\n \n취업준비생/기타\n \n휴대전화\n(오타 확인 필수)\n010-2232-3442\n비상 연락처\n010-3953-9682\n이메일\n汫╨ tr788@naver.com 汫h\n작품명\n참여대상\n정보\n만 30 세\n등단 여부\n \n유\n \n무\n \n※ (재)광명문화재단 기형도문학관은 수상작을 비영리·공익적 목적으로 복제·전송·배포할 수 있습니다.\n※ 입상하지 않은 응모작을 공모전 종료일로부터 3개월 이내에 모두 폐기합니다.\n※ 기 발표된 작품이거나 표절, 등단 사실이 밝혀질 경우 수상을 취소합니다.\n위 신청서의 모든 내용이 사실임을 확인하며, 공모전의 절차와 신청조건을 숙지하고 이를 준수할 것을 서약하며 본 창작시 공모전에 신청합니다.\n 2026년 9월 7일\n응모자: 김남현 (서명 또는 인)\n※ 서명은 이미지 파일로 등록\n(재)광명문화재단 이사장 귀하\n \n2026년 기형도문학관 창작시 공모전 ‘어느 푸른 저녁’\n[출품 창작시]\n주제: 기형도와 함께 새로운 시 세계를 여는 창작시\n※ 창작시는 자유 양식\n※ 기존 출품작 제외\n \n접수번호\n작 품 명\n입춘(立春)의 여관\n입춘이 지나도 골목은 녹지 않았다\n아버지는 미장 일을 하러 나간 뒤 돌아오지 않았고\n어머니는 소금에 절인 배추처럼 구석에 누워 있었다\n여관의 낡은 문창살 너머로 나직하게 펄럭이던\n남의 집 빨래들을 바라보며, 나는 순식간에 늙어 갔다\n어둠은 늘 가장 낮은 문턱부터 젖어 드는 법이어서\n부엌에서 찬밥을 덩어리째 삼킬 때마다\n식도 근처 딱딱하게 굳어가는 철사 토막이 있었다\n그것은 소년의 시절을 지나온 사람이면 누구나\n가슴속에 하나씩 품고 사는, 부러진 열쇠 같았다\n봄이 와도 풀리지 않는 결빙의 식탁 위에서\n우리는 서로의 얼굴을 쳐다보지 않은 채\n얼어붙은 국물을 조용히 수저로 긁어내곤 했다\n「개인정보 수집·이용 및 제공 동의서」\n(재)광명문화재단 기형도문학관은 2026년 창작시 공모전 신청과 관련하여 개인정보를 수집·이용·제공하고자 하오니, 내용을 확인하신 후 동의 여부를 결정해 주시기 바랍니다.\n \n수집⦁제공 항목\n∘ 성명, 생년월일, 주소, 연락처, 이메일 등\n(미성년자의 경우) 보호자의 성명 및 연락처\n수집·이용·제공 목적\n∘ 공모전 심사 및 결과 안내\n∘ 신청자 및 수상자 선정 안내(문자, 이메일, 유선 연락 등)\n∘ 공모전 결과 보고서 및 실적 보고 활용\n∘ 공모전 수상작 공개 및 시상 운영\n관련법규\n∘ 개인정보 보호법 제15조(개인정보의 수집·이용), 제17조(개인정보의 제공)\n보유 및 이용기간\n∘ 신청일로부터 사업 종료 후 5년까지 보유 및 이용 후 파기\n※ 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으나, 동의를 거부할 경우 본 공모전 참여에 제한이 있을 수 있습니다.\n위와 같이 개인정보 수집·이용에 동의하십니까? \n동의\n \n미동의\n \n[법정대리인 동의서] ※ 참가자가 미성년자인 경우 필히 기재\n본인은 미성년자의 법정대리인으로서 위 개인정보의 수집·이용 및 제공에 동의합니다.\n \n법정대리인 성명\n( 서명 또는 인 )\n법정대리인 관계\n법정대리인 연락처\n 2026년 9월 7일\n응모자: 김남현 (서명 또는 인)\n※ 서명은 이미지 파일로 등록\n(재)광명문화재단 이사장 귀하",
    "tags": [
      "#기형도문학관",
      "#어느푸른저녁",
      "#창작시",
      "#입춘의여관",
      "#현대시"
    ]
  },
  {
    "id": "c-2026-disability-23",
    "year": "2026",
    "title": "제23회 전국장애인과 함께하는 문예 글짓기 대회",
    "pieceTitle": "휴전선 가시철망에 핀 꽃 한 송이",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "사단법인 장애인먼저실천운동본부",
    "submissionDate": "2026.04",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "인간이 그어놓은 물리적·사회적 장벽(가시철망)을 넘어, 장애와 비장애, 분단의 아픔을 치유하는 따뜻한 연대와 평화의 새벽을 노래한 시.",
    "coreConcept": "\"새 한 마리 막힘없이 날아가는 저 하늘 / 인간이 그어놓은 선이 무어 그리 무겁더냐 / 보이지 않는 눈으로 평화의 새벽을 더듬고\"",
    "futureUsage": "인권, 평화, 장애 인식개선 문예 공모전 출품 시 핵심 시적 레퍼런스.",
    "fileName": "제23회 전국장애인과 함께하는 문예 글짓기 대회 원고.hwpx",
    "fileSize": "29 KB",
    "fullContent": "제23회 전국장애인과 함께하는 문예 글짓기 대회 원고\n제출자 : 김남현\n제목 : 휴전선 가시철망에 핀 꽃 한 송이\n새 한 마리 막힘없이 날아가는 저 하늘\n인간이 그어놓은 선이 무어 그리 무겁더냐.\n보이지 않는 눈으로 평화의 새벽을 더듬고\n들리지 않는 귀로 통일의 말소리를 기다리네.\n가시 돋친 철망 위에 붉은 진달래 피어나고\n남과 북의 아이들이 한 운동장에서 뛰놀 때\n장벽 넘어 우리네 마음의 힘이 곧,\n이 땅 아픔 치유하는 약손이어라.\n제목 : 손끝으로 그리는 한반도의 새벽\n눈 감아도 선연히 떠오르는 고향의 흙 내음\n북녘땅 향해 뻗은 손끝, 파르르 떨려오네.\n새록새록 돋아난 평화의 점자 지도를 읽으며\n끊어진 철길 위, 마음의 다리를 놓았네.\n남과 북 경계 조용히 허물어지는 날\n함께 나눈 온기는 휴전선을 삼켜버릴 터이니.\n보이지 않아도 느낄 수 있는 평화의 새벽은\n이미 우리 마음 깊은 곳에서 움트고 있어라.\n제목 : 백두에서 한라까지 평화 무늬를 그리다\n지도가 반으로 접혀, 아픔이 깊었던 세월 지나\n우리는 이제 온전한 원을 그리려 하네\n말투가, 사는 모습 조금 달라도\n꿈꾸는 평화의 하늘은 푸르기만 하다.\n장애라는 장벽을 무너뜨린 연대의 힘을 모아\n남과 북 가로막은 보이지 않는 벽을 허물어 갈 때\n한라산 푸른 물과 백두산 천지가 만나 흐르리니\n서로의 등을 밀어주며 걷는 통일의 길이어라.",
    "tags": [
      "#장애인먼저실천",
      "#문예글짓기",
      "#평화와연대",
      "#시",
      "#인식개선"
    ]
  },
  {
    "id": "c-2026-heoam",
    "year": "2026",
    "title": "2026년 제17회 허암예술제 백일장",
    "pieceTitle": "모퉁이를 돌면 / 그림자와 함께 / 여백의 자리 (시 3편)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "허암예술제 추진위원회",
    "submissionDate": "2026.06",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "길모퉁이 너머의 작고 투명한 희망, 한강 수면 위 지친 하루의 피로를 풀어내는 그림자, 그리고 소란한 세상에서 나를 찾아가는 여백의 자리를 읊은 3편의 서정시 연작.",
    "coreConcept": "일상의 피로와 상처를 딛고 내면의 평화와 다정한 온기를 찾아가는 사색의 서정 미학.",
    "futureUsage": "백일장, 계간 문예지 시 부문 응모 및 에세이집 시적 삽화로 활용.",
    "fileName": "김남현_성인_시(운문)_3442.hwp",
    "fileSize": "40 KB",
    "fullContent": "<시> 모퉁이를 돌면 \n 20×10\nNO. \n보이지 않는 길모퉁이 너머\n조용히 숨 쉬는 작고 투명한 희망 하나\n손끝으로 가만히 나를 부른다\n지나온 걸음마다 스치는 비 내음\n어둠 속 홀로 삼켜낸 눈물은\n깊은 저 땅속뿌리를 적셔낸다\n어제에 묶인 발걸음 털어내고\n앙증맞은 싹 기지개 켜는 들판 위\n새벽을 깨우는 정결한 바람 불어온다\n움츠렸던 날개 펼치며\n기약 없는 흔들림을 노래로 바꿔\n저 넓고 아득한 하늘 향해 날아오르자\n \n<시> \n그림자와 함께\n낮게 기우는 주홍빛 노을 등지며\n아득히 길어지는 회색 그림자\n말없이 지켜주는 나의 동반자\n굽이쳐 흐르는 한강 수면 위\n오늘의 고단한 숨소리가\n잔물결 되어 가만히 밀려가네\n타오르다 스러지는 하늘 조각을\n바라보는 눈동자 속 담아둘 때\n지친 어깨를 감싸는 다정한 온기\n한 걸음 묵묵히 내디디며\n오늘의 피로를 밤바람에 풀어내니\n잔물결 되어 밀려가는 나의 마음\n<시>\n여백의 자리\n빼곡하게 적혀있던 하루의 문장들\n숨 가쁘게 달려온 시간의 모서리는\n채우지 않는, 조용한 여백\n그 하얀 자리 위 따스한 볕 한 조각\n얼어붙은 마음의 별자리 되어\n밤하늘과 내쉬는 한숨이 되네\n소란한 세상의 소음에서 물러나\n온전히 나만을 이해하는 깊은숨\n지친 영혼이 제 자리를 찾아간다\n다시 나아갈 다짐 품고\n흘러가는 세월의 여울목에는\n다정한 평화의 여백이 자리하네",
    "tags": [
      "#허암예술제",
      "#백일장",
      "#서정시",
      "#모퉁이를돌면",
      "#여백의자리"
    ]
  },
  {
    "id": "c-2026-metro",
    "year": "2026",
    "title": "메트로내과 백일장 공모전",
    "pieceTitle": "저녁의 소회 (주제: 소중한 일상)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "메트로내과",
    "submissionDate": "2026.05",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "익숙한 밥상 앞에 둘러앉아 나누는 가족과의 소박한 대화 속에서, 평범하게 지나쳐온 하루하루가 실은 가장 소중한 삶의 선물이었음을 되새기는 시.",
    "coreConcept": "\"익숙한 밥상 앞에 모여 앉아 / 가족과 다정히 이야기를 나누는 시간 / 당연하게 여긴 하루가, 소중한 선물이었네\"",
    "futureUsage": "가족, 건강, 소소한 일상을 주제로 하는 생활 문학 공모전에 활용.",
    "fileName": "김남현_메트로내과 백일장 원고 제출.hwpx",
    "fileSize": "16 KB",
    "fullContent": "[주제 2: 소중한 일상]\n제목 : 저녁의 소회\n익숙한 밥상 앞에 모여 앉아\n가족과 다정히 이야기를 나누는 시간\n당연하게 여긴 하루가, 소중한 선물이었네",
    "tags": [
      "#메트로내과",
      "#백일장",
      "#소중한일상",
      "#가족",
      "#저녁의소회"
    ]
  },
  {
    "id": "c-2026-warmth",
    "year": "2026",
    "title": "월간 삶의 온기 10월호 원고 기고",
    "pieceTitle": "가장 중요한 건 지금 내가 어떻게 느끼느냐임을 알면서도",
    "category": "literature",
    "categoryName": "문학·수필",
    "organization": "월간 삶의 온기 편집부",
    "submissionDate": "2026.09",
    "status": "submitted",
    "result": "원고 기고 완료",
    "badge": "📤 기고 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "도수치료를 받으며 치료사에게 던진 질문을 출발점으로, 타인의 시선과 외부 평가에 목말라하던 마음을 내려놓고 내 몸과 감정의 실체적 소리에 귀 기울이게 된 심경의 변화를 진솔하게 엮은 칼럼 에세이.",
    "coreConcept": "외부의 인정 욕구에서 벗어나 내면의 통증과 치유를 있는 그대로 응시하는 심리적 자기 회복의 기록.",
    "futureUsage": "브런치 연재 에세이 및 심리 웰니스 칼럼 기고 레퍼런스.",
    "fileName": "김남현_10월 호 [월간 삶의 온기 원고 제출].hwpx",
    "fileSize": "28 KB",
    "fullContent": "매미의 처절한 울음이 여유를 간직한 귀뚜라미의 울음으로 변할 즈음\n도수치료를 받다 선생님께 물었다.\n'제 몸 예전보다 좋아졌나요?'\n'그렇죠, 하지만 가장 중요한 건 환자분이 느끼는 통증이에요.'\n일이나 취미생활 속에서 타인의 시선이나 평가를 갈구한다.\n가장 중요한 건 지금 내가 어떻게 느끼느냐임을 알면서도\n제일 먼저 내던져버리는 건, 항상 나 자신이었다.\n가까울수록 핑계와 변명의 화살은 서로를 향한다.\n연인과 장시간 함께 시간을 보내면 다툼이 생기는 것처럼,\n일이 잘 안 풀릴 때 원망하기 쉬운 건 나 자신이다.\n'HQ 해리쿼버트 사건의 진실' 이라는 소설에서 가장 아끼는 구절이다.\n'어이 마커스, 어떤 사람을 얼마나 사랑했는지 가늠하는 방법을 알고 있나?'\n사랑, 돈, 건강 잃어봐야 소중함을 아는 건 다들 같나 보다.\n오늘도 잠들기 전 내 어깨를 토닥여주며 잠에 든다.",
    "tags": [
      "#삶의온기",
      "#에세이",
      "#칼럼기고",
      "#자기회복",
      "#도수치료",
      "#성찰"
    ]
  },
  {
    "id": "c-2026-peace-unification",
    "year": "2026",
    "title": "통일미래 이야기 공모전",
    "pieceTitle": "평화 무늬",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "통일부",
    "submissionDate": "2026.07",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "남과 북을 가로막은 철조망을 걷어내고 하나의 온전한 원을 그려가는 화해와 통일의 희망을 따뜻한 온도의 시어로 노래한 작품.",
    "coreConcept": "\"남과 북 가로막은 철조망을 걷어내고 우리는 이제 하나의 온전한 원을 그리네... 남북이 마주 보며 활 활 웃는 그날\"",
    "futureUsage": "통일, 민족 화해, 평화 담론 관련 문예 및 청년 정책 공모전에 활용.",
    "fileName": "[통일미래 이야기 공모전] (김남현).hwpx",
    "fileSize": "29 KB",
    "fullContent": "제목 :평화 무늬\n남과 북 가로막은 철조망을 걷어내고\n우리는 이제 하나의 온전한 원을 그리네.\n서로 다른 하늘 아래 살아온 날들 지나\n우리가 마주 잡은 손바닥은 따스하여라.\n남북이 마주 보며 활 활 웃는 그날\n이 겨레가 맞이할 가장 눈부신 봄날이리라.\n제목 :한라에서 백두까지 동네 한 바퀴\n제주도 바닷바람을 가방에 가득 담아\n바퀴 체어 이끌고 삼천리 길을 떠나네.\n길이 평평하니 막힐 것이 전혀 없어라\n비장애인의 걸음과 나란히 발을 맞추네.\n백두산 천지 물에 발을 담그는 순간\n분단의 아픔은 흔적도 없이 씻겨 가네.",
    "tags": [
      "#통일미래",
      "#평화무늬",
      "#통일부",
      "#평화시",
      "#남북화해"
    ]
  },
  {
    "id": "c-2026-human-rights",
    "year": "2026",
    "title": "2026년 경기도 인권 작품공모전",
    "pieceTitle": "목소리의 무게 (운문·시)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "경기도",
    "submissionDate": "2026.07",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "다수의 거대한 흐름에 묻혀버리기 쉬운 소수의 당연한 권리와 작은 목소리의 결코 가볍지 않은 무게를 섬세하게 어루만진 인권 지향 서정시.",
    "coreConcept": "\"작은 목소리라 하여 가볍지 않으니, 허망하게 흩어지는 한마디마저 가만히 멈추어 온 마음 귀 기울이네\"",
    "futureUsage": "경기도 및 국가인권위원회 주관 인권 문예 공모전 지원 시 핵심 서사로 활용.",
    "fileName": "운문(시)_공모작_김남현.hwpx",
    "fileSize": "28 KB",
    "fullContent": "제목 : 목소리의 무게\n작은 목소리라 하여 가볍지 않으니,\n허망하게 흩어지는 한마디마저\n가만히 멈추어 온 마음 귀 기울이네.\n여럿이라는 거대한 흐름에 힘없이 가려진\n소수의 당연한 권리, 소중한 숨결조차\n당당하게 보장받는 정의로운 사회.\n낮은 곳에서 피어난 단 한 송이의 연꽃도\n소리 없이 묻히지 않고 고른 무게를 가질 때,\n우리 안의 진정한 공감 문화 비로소 시작되리라.\n차별과 편견의 장벽을 완전히 허물어내고\n서로를 귀하게 여기는 존중의 힘으로,\n마주할 인권의 내일을 함께 열어가리라.",
    "tags": [
      "#경기도인권",
      "#목소리의무게",
      "#소수자인권",
      "#운문",
      "#경청과존중"
    ]
  },
  {
    "id": "c-2026-hwaseong-policy",
    "year": "2026",
    "title": "2026년 화성시 청년정책 아이디어 공모전",
    "pieceTitle": "화성 청년 커리어 매니저 : 데이터 기반 청년 성장 가이드 및 인재 매칭 플랫폼 구축",
    "category": "policy",
    "categoryName": "정책·청년일자리",
    "organization": "화성시",
    "submissionDate": "2026.06.19",
    "status": "awarded",
    "result": "우수 정책 채택 🏆 (화성시정 반영 과제)",
    "badge": "🏆 우수 정책 채택",
    "badgeClass": "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    "synopsis": "일회성 현금 지원에 머물던 청년 고용 정책의 한계를 넘어, 청년들이 흩어진 스펙과 자격 데이터를 체계적으로 자산화하고 AI로 맞춤형 성장 경로를 추천받으며 관내 기업과 검증된 매칭을 이루는 종합 HR 플랫폼 제안.",
    "coreConcept": "데이터 기반의 지속 가능한 청년 성장 관리 시스템. 청년의 역량 데이터 자산화 + 화성시 전략 산업(반도체·모빌리티·바이오) 맞춤 매칭.",
    "futureUsage": "지자체 청년 일자리 거버넌스, 고용노동부 혁신 정책, 공공 인재 데이터 플랫폼 기획안의 핵심 레퍼런스.",
    "fileName": "(김남현) 2026년 화성시 청년정책 아이디어 공모전 기안.hwp",
    "fileSize": "142 KB",
    "fullContent": "붙임 1\n2026년 화성시 청년정책 아이디어 공모전 참가 신청서\n \n2026년 화성시 청년정책 아이디어 공모전 참가 신청서\n관리번호\n(공 란)\n지역\n■ 화성시 □ 화성시 외\n제안자\n개인\n성명\n김남현\n생년월일\n1996년 01월 03일\n주소\n경기도 화성시 능동 1066-3번지 아르젠 3차 오피스텔 412호\n연락처\n010-2232-3442\n이메일\ntr788@naver.com\n팀\n(공동 제안 시)\n팀 명\n대표자\n주소\n연락처\n이메일\n공동 제안자\n① (성명) (연락처)\n② (성명) (연락처)\n※ 인원이 더 있을 경우, 해당 내용을 추가로 기재\n제 안 명\n화성 청년 커리어 매니저 : 데이터 기반 청년 성장 가이드 및 인재 매칭 플랫폼 구축\n동일 · 유사 제안의 타 기관 제출 여부\n■ 없음 □ 있음 (제출기관: , 제출일시: )\n제안서 요약\n사업문야\n청년의 ■ 일자리 □ 주거 □ 교육 □ 복지 · 문화 □ 참여 · 권리 중 택 1\n제안내용\n청년들의 흩어져 있는 개인 커리어 데이터를 한곳에서 체계적으로 관리할 수 있는 ‘개인 인사 관리(HR) 애플리케이션’ 개발을 골자로, AI 기반의 맞춤형 스펙 진단 및 관내 우수 기업이 검증된 지역 청년 인재를 직접 발굴하고 채용할 수 있는 통합 커리어 플랫폼 구축을 지향합니다.\n위와 같이 「화성시 청년정책 아이디어 공모전」 참가신청서를 제출하며, 공고문의 유의사항을 모두 숙지하였고, 이에 따른 제반 사항에 동의합니다.\n붙임 1. 2026년 화성시 청년정책 아이디어 공모전 제안서 1부.\n2. 개인정보 수집 · 이용 및 제공 동의서 1부. 끝.\n2026년 06월 19 일\n성명 김남현 (서명)\n화성시장 귀하\n \n붙임 2\n2026년 화성시 청년정책 아이디어 공모전 제안서\n(아래 서식을 참고하되, 분량 제한 없이 휴먼명조체 13포인트로 작성) - 작성 시 파란색 글씨는 삭제\n \n2026년 화성시 청년정책 아이디어 공모전 제안서\n사업분야\n청년의 ■ 일자리 □ 주거 □ 교육 □ 복지 · 문화 □ 참여 · 권리 중 택 1\n제안명\n화성 청년 커리어 매니저 : 데이터 기반 청년 성장 가이드 및 인재 매칭 플랫폼 구축\n관리번호\n(공 란)\n개요(제안 배경)\n청년 취업 시장의 경쟁이 심화됨에 따라 개인 스펙 관리의 중요성이 커졌으나,\n다수 의 청년이 자신의 이력을 체계적으로 자산화하지 못하고 있습니다. 이에\n청년 스스로커리어를 진단, 성장시키는 도구를 제공하고, 지역 산업 생태계와\n연계하고자 합니다.\n현황 및 문제점\n현재 관련 정책의 현황 및 문제점: 정부 및 지자체의 기존 취업 지원 사업은 주로 취업 장려금 지급, 단기 교육 프로그램 운영 등 일회성 및 비용 지원에 치중되어 있습니다. 청년이 장기적으로 커리어를 누적·관리하고 주도적으로 역량을 개발할 수 있도록 돕는 상시적 시스템이 부재합니다.\n타 지자체 유사 사례 유무: 서울시의 '청년몽땅정보통'이나 경기도의 '잡아바' 등이 있으나, 이는 정책 정보 제공 및 채용 공고 스크랩 수준에 머물러 있습니다. 개인의 '인사 대시보드(HR Dashboard)' 기능을 탑재하여 AI 역량 진단까지 연계하는 모델은 본 제안만의 독창적 영역입니다.\n사업내용\n개인 맞춤형 HR 대시보드: 자격증, 수상 이력, 학점, 대외 활동 등 개인의 스펙을 시각적인 스코어와 타임라인으로 한눈에 파악할 수 있는 대시보드 UI를 제공합니다.\nAI 추천 및 이력서 빌더: 입력된 스펙(학점, 전공 이수 현황 등)을 분석하여 부족한 역량을 진단하고, 화성시 맞춤형 대외 활동이나 자격증 가이드라인을 AI가 추천합니다.\n기업 연계형 오픈 창구: 청년이 동의한 경우, 최종 평가 등급 및 핵심 스펙 요약을 화성시 관내 기업 인사담당자가 열람할 수 있도록 하여 지역 인재 우선 채용 창구로 활용합니다.\n* 예시 파일 (제안자 본인 데이터 삽입하여 제작함)\n \n- 사업 계획\n* 1~2개월차 (설계 단계): 서비스 화면(UI/UX) 기획 및 청년 역량 데이터 분석을 위한 표준 데이터베이스 구조 설계.\n* 3~4개월차 (개발 단계): 대시보드 및 이력서 빌더 등 핵심 기능 집중 개발, 정부24 등 공공 데이터 자동 불러오기 API 연동.\n* 5개월차 (시범 운영): 화성 청년 100명을 대상으로 베타 서비스를 우선 오픈하여 실제 매칭 데이터 검증 및 시스템 안정화.\n* 6개월차 (정식 런칭): 화성시 전체 청년 대상으로 서비스를 본격 개시하고, 화성상공회의소 등 유관기관과 협력하여 관내 우수 기업과의 채용 연계 파트너십 확장.\n기대효과\n경제적 효과: 구직 기간 단축을 통해 청년층의 사회적 비용을 절감하고, 관내 기업의 인재 채용 및 채용 대행 비용을 혁신적으로 낮춰 지역 경제 활성화에 기여합니다.\n전국적 확산 가능성: '화성형 청년 커리어 모델'의 성공 사례를 바탕으로 표준화된 소스코드를 정립하면, 타 지자체 및 고용노동부의 청년 고용 정책 시스템으로 손쉽게 확대 적용이 가능합니다.\n사회적 변화 및 공익적 영향: 스펙 관리에 어려움을 겪는 취약계층 청년들에게 공평한 커리어 컨설팅 기회를 제공함으로써 교육·취업 격차를 해소하고 공익적 가치를 실현합니다.\n화성시 정책 방향과의 연계: 민선 8기 화성시의 '청년이 살기 좋은 도시', '첨단 기업 유치 및 일자리 창출' 정책 기조와 정확히 맞물리며, 화성 청년의 시정 체감도를 극대화할 수 있는 실질적 정책입니다.\n협업 및 연계 방안: * 내부 부서: 화성시 청년청소년과(총괄 및 홍보), 일자리정책과(기업 매칭 연계), 정보통신과(App 개발 및 보안 지원) 간의 협조 체계 구축.\n단계적 추진 및 장기 방안: 초기 이력 관리 앱으로 시작하여, 장기적으로는 모바일 공인 자격증 및 디지털 배지(NFT) 기술을 도입하여 위변조가 불가능한 '화성시 인증 공식 디지털 포트폴리오'로 브랜드화할 계획입니다.\n \n붙임 3\n개인정보 수집·이용 및 제공 동의서\n \n2026년 화성시 청년정책 아이디어 공모전 개인정보 수집·이용 및 제공 동의서\n개인정보 수집·이용 및 제공 동의서\n※ 팀 참가시 팀원 별 각 1매 작성\n화성시는 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령상의 개인정보보호 규정을 준수하며, 시민 여러분의 개인정보 보호에 최선을 다하고 있습니다.\n■ 개인정보의 수집 및 이용목적\n- 제안자의 본인 확인 절차\n- 2026년 화성시 청년정책 아이디어 공모전 참여자 접수, 심사, 선정 결과 발표 등 공모전 운영\n- 공모사항 추가 설명 및 수상 등\n■ 수집하는 개인정보 항목\n- 성명(단체명), 생년월일, 연락처(휴대폰, 이메일), 주소 등의 정보\n■ 개인정보 보유 및 이용기간\n- 귀하께서 제공하신 개인정보는 2026년 화성시 청년정책 아이디어 공모전 운영에 따른 목적 달성 시까지 보유합니다.\n■ 개인정보 제3자 제공\n- 개인정보를 제공받는 자 : 경기도 일자리재단(통합 접수 시스템 ‘잡아바 어플라이’)\n- 개인정보를 제공받는 자의 이용 목적 : 2026년 화성시 청년정책 아이디어 공모전 참여자 접수\n- 성명(단체명), 생년월일, 연락처(휴대폰, 이메일), 주소 등의 정보\n- 개인정보를 제공받는 자의 보유 및 이용기간 : 2026년 화성시 청년정책 아이디어 공모전 운영에 따른 목적 달성 시\n■ 개인정보 수집 동의 거부의 권리\n- 귀하께서는 개인정보 수집·이용 및 제3자 정보제공에 동의하지 않을 권리가 있으며 동의에 거부하는 경우 『2026년 화성시 청년정책 아이디어 공모전』 참여 신청에서 제외될 수 있습니다.\n개인정보 수집·이용 및 제3자 정보제공에 동의하십니까?\n■ 동의 함 □ 동의 안함\n2026년 06 월 19 일\n성명 김남현 (서명)\n화성시장 귀하",
    "tags": [
      "#화성시",
      "#청년정책",
      "#우수정책채택",
      "#커리어매니저",
      "#인재매칭",
      "#AI진단"
    ]
  },
  {
    "id": "c-2026-welfare-research",
    "year": "2026",
    "title": "2026 화성시복지재단 연구주제 시민 공모전",
    "pieceTitle": "화성시 산업단지 이주 노동자 쉼터를 거점으로 한 '주말 찾아가는 보건·복지 통합 케어 시스템' 구축 연구",
    "category": "policy",
    "categoryName": "정책·사회복지",
    "organization": "화성시복지재단",
    "submissionDate": "2026.06.19",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 제안 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "화성시 서남부 공장 지대(발안, 팔탄, 마도 등)의 이주 노동자들이 평일 근무와 언어 장벽으로 복지 사각지대에 놓인 문제를 해결하기 위해, 주말 비공식 모임 거점을 활용한 이동식 통합 보건·복지 버스와 다국어 AI 통역 원스톱 상담 체계를 연구 주제로 제안.",
    "coreConcept": "수요자가 찾아오는 복지가 아닌 거점으로 직접 찾아가는 복지. 보건소-복지센터-의료봉사단 결합 이동식 케어 모델.",
    "futureUsage": "방통대 사회복지학과 학술 연구, 다문화 복지 연구 및 지자체 포용도시 복지정책 기획안 연계.",
    "fileName": "(김남현) 2026 화성시복지재단 연구주제 시민 공모전 제안서.hwp",
    "fileSize": "97 KB",
    "fullContent": "연구주제 시민 공모전 제안서\n공모 주제\n ○ 화성시민의 복지 발전과 삶의 질 향상을 위해 다양한 복지 의견을 수렴하여 지역 복지환경 변화에 대응하고, 복지 현장에 적합한 실질적 연구 주제를 발굴하고자 함\n1. 화성시 복지정책 및 복지서비스 개발을 위한 연구 주제\n2. 포용적 복지 도시 구현을 위한 연구 주제\n3. 화성시 복지 증진을 위해 현장에서 필요로 하는 연구 주제\n연구 응모 구분(아래 해당 사항에 체크() 해주세요)\n영·유아\n아동·청소년\n청년\n중장년·노인\n여성·가족\n장애인\n다문화\n기타\n(지역사회 등)\n\n성명\n김남현\n구분()\n□ 시민\n□ 사회서비스 분야 종사자\n 대학(원)생\n소속/부서명\n방송통신대학교 사회복지학과\n연락처\n010-2232-3442\n이메일\ntr788@naver.com\n연구 주제\n화성시 산업단지 이주 노동자 쉼터를 거점으로 한 '주말 찾아가는 보건·복지 통합 케어 시스템' 구축 연구\n의견\n○ 배경 및 필요성\n화성시 서남부 소규모 제조업체의 외국인 노동자들은 평일 근무 특성과 언어 장벽으로 인해 보건·복지 서비스에서 심각하게 소외되어 있습니다. 이들이 주말에 주로 모이는 비공식 커뮤니티 공간(쉼터, 종교 시설 등)을 복지 전달 거점으로 역활용하여, 현장으로 직접 찾아가는 실효성 있는 보건·복지 통합 사각지대 해소 방안이 시급합니다.\n○ 연구내용\n- 화성시 서남부 소규모 공장 지대(발안, 팔탄, 마도 등) 이주 노동자들이 주말에 주로 모이는 종교 시설, 아시아 마트 등 비공식 커뮤니티 거점의 위치와 이용 패턴을 파악합니다.\n- 주말 및 야간 시간대를 활용해 화성시 보건소, 외국인복지센터, 민간 의료 봉사 단체가 협력하여 거점으로 찾아가는 '이동식 복지·보건 상담 버스' 운영 체계를 설계합니다.\n- 다국어 번역 매뉴얼 및 AI 통역 태블릿을 도입하여 현장에서 기초 건강 검진, 산재 보험 상담, 고립·우울 심리 체크가 원스톱으로 이뤄지는 실무 프로토콜을 제시합니다\n○ 기대효과 및 기타\n- 복지 기관에 방문하기 어려운 취약 노동자층에게 직접 찾아감으로써 현장의 복지 접근성 문제를 가장 직접적이고 현실적으로 해결합니다.\n- 소외된 이주 노동자의 보건·위생 문제를 선제적으로 관리하여 지역 사회 전체의 감염병 예방 및 치안 안정 등 사회적 안전 비용을 크게 절감합니다.\n- 글로벌 강소도시를 지향하는 화성시의 인권 존중 가치를 높이고, 외국인 노동자의 생산성을 유지하여 관내 소상공인·중소기업의 경영 안정에 기여합니다.\n※ 수집된 개인 정보(성명, 연락처) 「개인정보보호법」 제15조에 의거하여 제안자 연락 목적으로만 활용, 수집된\n개인 정보는 정보 주체의 동의 없이 수집 목적 외로 사용하거나 제3자에게 제공되지 않습니다.\n■ 동의 □ 비동의\n다음과 같이 연구과제 제안서를 제출합니다.\n2026년 6월 19일\n화성시복지재단 대표이사 귀하",
    "tags": [
      "#화성시복지재단",
      "#연구주제공모",
      "#이주노동자",
      "#찾아가는복지",
      "#사회복지학"
    ]
  },
  {
    "id": "c-2026-national-reboot",
    "year": "2026",
    "title": "청년 정책 아이디어 국가정책제안서",
    "pieceTitle": "번아웃 예방과 주도적 삶 설계를 위한 ‘라이프 리부트 크레딧(Life Reboot Credit) 및 로컬 쉼 샌드박스’",
    "category": "policy",
    "categoryName": "정책·청년복지",
    "organization": "국민참여 정책 제안",
    "submissionDate": "2026.07.08",
    "status": "submitted",
    "result": "제안서 접수 완료",
    "badge": "📤 제안 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "무한 경쟁과 취업 압박으로 번아웃과 구직 단념(NEET) 위기에 놓인 청년들에게 국가가 정서 건강 및 몰입 프로젝트와 연동된 '라이프 리부트 크레딧'을 지급하고, 지방 유휴 공간을 활용한 2주~1달 정주형 '로컬 쉼 샌드박스'를 제공하여 일상의 안전한 방파제를 구축하는 혁신 정책.",
    "coreConcept": "쉼을 '낙오'나 '공백'이 아닌 '도약의 자산'으로 제도화. 정서 바우처 + 지방 소멸 위기 지자체 유휴시설 연계 리빙랩 모델.",
    "futureUsage": "중앙부처 청년정책 공모, 지방소멸 대응 청년 정주 정책, 정서 복지 제도 기획서에 폭넓게 활용.",
    "fileName": "260708_김남현(개인)_국가정책제안서.hwp",
    "fileSize": "69 KB",
    "fullContent": "붙임1\n청년 정책 아이디어 공모전 정책제안서 지원서\n응모부문\n■ 정책제안서 부문\n참가구분\n■ 개 인 □ 단 체\n개인\n성명\n김남현\n생년월일\n1996년 1월 3일\n소속/직업\n병점고등학교 / 사회복무요원\n휴대폰\n010-2232-3442\n주소\n경기도 화성시 능동 1066-3번지 아르젠 3차 412호\nE-mail\ntr788@naver.com\n단체\n팀명\n※공공기관 및 기관명으로 접수 불가\n팀장\n소속\n팀원\n생년월일\n※팀장만 작성\n휴대폰\n※팀장만 작성\nE-mail\n주소\n응모작(정책제안서 자유분량)\n아이디어명\n번아웃 예방과 주도적 삶 설계를 위한 ‘라이프 리부트 크레딧(Life Reboot Credit) 및 로컬 쉼 샌드박스’\n핵심 아이디어\n무한 경쟁과 취업 압박 속에서 지친 청년들에게 국가가 정서 건강 및 활동 이력과 연동된 ‘라이프 크레딧’을 지급하여, 단절에 대한 두려움 없이 온전한 휴식과 몰입의 균형을 찾을 수 있도록 공간과 프로그램을 보장하는 일상 설계 복지 정책.\n아이디어\n선정 배경\n관련 기술 및 활용 현황: 지자체별로 청년 공간을 운영하고 있으나 대부분 취업 준비를 위한 스터디룸 대여나 단순 공간 제공에 그치고 있음. 청년의 번아웃이나 구직 단념(NEET) 상태를 선제적으로 진단하고 일상의 회복을 돕는 다차원적 라이프 밸런스 연계 시스템은 전무함.\n문제 배경 및 원인 분석: 한국 사회에서 청년의 '휴식'은 생산적 재충전이 아닌 경쟁에서의 '낙오'나 '공백기'로 치부됨. 이로 인해 청년들은 쉬면서도 극심한 불안감과 죄책감을 느끼며, 이는 결국 우울증 증폭이나 완전히 사회와의 끈을 놓아버리는 구직 단념으로 이어짐.\n문제 재정의: 삶의 질을 결정하는 라이프 밸런스는 단순히 쉬는 시간을 늘리는 것이 아니라, 청년이 스스로의 삶을 성찰하고 주도적으로 몰입할 수 있는 '안전한 방파제'를 제공하는 것임. 쉼을 도약의 자산으로 재정의하는 제도적 장치가 필요함.\n \n해결방안\n(아이디어\n실시를 위한\n구체적 내용\n라이프 리부트 크레딧(바우처) 발급: 심리적 번아웃이나 장기 구직으로 지친 청년들을 대상으로 정서 검진을 실시하고, 맞춤형 쉼과 몰입을 선택해 사용할 수 있는 공공 바우처(크레딧)를 지급함.\n로컬 쉼 샌드박스(정주형 리빙랩) 운영: 지방의 소멸 위기 지자체 유휴 공간을 활용하여 청년들이 2주~한 달간 머물 수 있는 공간을 제공함. 이곳에서 청년들은 아무것도 하지 않을 자유를 누리거나, 지역 장인과의 협업, 로컬 콘텐츠 개발 등 부담 없는 '미시적 몰입' 프로젝트를 수행하며 삶의 이정표를 재설정함.\n기대효과\n수혜자별 효과: 청년은 사회적 낙오라는 불안감 없이 온전한 휴식을 취하며 정서적 회복탄력성을 얻음. 지방 지자체는 청년 인구의 유입과 로컬 리빙랩 활성화를 통해 지역 경제와 공동체에 새로운 활력을 불어넣음.\n문제점 및 대응 방안: 단순한 현금성 유흥비 지원으로 변질될 우려가 있음. 이를 방지하기 위해 크레딧의 사용처를 국가 공인 심리 상담, 로컬 정주 프로그램, 문화예술 몰입 프로젝트 등으로 엄격히 제한하고 포트폴리오 제출을 의무화함.\n생산성 및 비용 절감: 청년층의 정신 건강 악화로 야기되는 연간 수조 원 규모의 사회적 의료 비용 및 고립 청년 지원 비용을 선제적으로 절감하는 예방적 생산성 효과 발생.\n출처 및\n첨부파일\n보건복지부 고립·은둔 청년 실태조사 결과 보고서 및 통계청 연령별 구직단념자 현황\n기타 사항\n(해당 시)",
    "tags": [
      "#국가정책제안",
      "#라이프리부트",
      "#번아웃예방",
      "#로컬샌드박스",
      "#청년복지"
    ]
  },
  {
    "id": "c-2026-ansan-multipass",
    "year": "2026",
    "title": "안산도시공사 저출생·지방소멸 극복 시민제안 공모전",
    "pieceTitle": "‘육아기 가구 맞춤형 주차·체육·문화 멀티 패스Port’ 및 돌봄 연계 공간 구축",
    "category": "policy",
    "categoryName": "정책·도시돌봄",
    "organization": "안산도시공사",
    "submissionDate": "2026.08.24",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "도시공사가 관리하는 112개 공영주차장, 올림픽수영장, 와스타디움 등 체육·문화 시설을 묶어 다자녀·영유아 동반 가구에 주차 우선권과 할인 패스를 제공하고, 시설 내 유휴 공간을 팝업 키즈 쉼터 및 단기 돌봄존으로 전환하여 아이 키우기 좋은 인프라를 완성하는 정책.",
    "coreConcept": "신규 부지 매입 없이 기존 공공시설의 유휴 시간과 공간을 극대화하여 저비용 고효율로 구축하는 생활 밀착형 육아 안심망.",
    "futureUsage": "도시공사 및 시설관리공단 대상 공공서비스 혁신, 저출생 극복 시민 제안 아이디어로 재활용.",
    "fileName": "2026년 저출생 극복 시민제안 공모전 신청서.hwp",
    "fileSize": "196 KB",
    "fullContent": "안산도시공사 참가신청서 \n \n \n저출생 ‧ 지방소멸 극복 시민제안 공모전\n1. 제안자\n성 명\n김남현\n연 락 처\n010-2232-3442\n접수번호\n생년월일\n96.01.03\nE-mail\ntr788@naver.com\n2. 제안내용\n제 안 명\n‘육아기 가구 맞춤형 주차·체육·문화 멀티 패스Port’ 및 돌봄 연계 공간 구축\n제안요지\n안산도시공사가 관리하는 주차장, 체육시설, 공공주택 인프라를 연계해 육아 가구 전용 우대·체험 특권을 제공하고, 공공시설 내 단기 팝업 돌봄공간을 조성하여 일·가정 양립과 양육 부담을 완화함.\n제 안\n내 용\n육아 패스Port 시스템 도입: 공사 운영 공영주차장(112개소) 및 체육시설(수영장, 올림픽기념관 등) 이용 시 다자녀·영유아 동반 가구에 주차 우선권과 수강료 할인, 주말 전용 라인을 제공함.\n거주자우선주차장 공유제 연계: 야간 위주 거주자우선주차 공간을 주간 시간대 아이 돌봄 차량 및 양육 가정에 무료 또는 저렴하게 개방함.\n체육·관광 시설 내 '키즈 쉼터·돌봄 팝업' 조성: 올림픽수영장, 와스타디움 등 대형 체육시설 및 화랑오토캠핑장 내 부유 공간을 활용해 부모 운동·여가 시간 중 자녀를 맡길 수 있는 일시 돌봄존을 운영함.\n기 대\n효 과\n양육 비용 부담 완화 및 편의성 증대: 주차비·시설 이용료 절감과 전용 주차구역 확보를 통해 영유아 동반 가구의 외출 및 체육·문화 활동 문턱을 크게 낮춤.\n공공 인프라 활용도 극대화: 기존 도시공사 관리 시설의 유휴 공간과 주간 빈 주차공간을 활용하여 신규 예산 투입을 최소화하면서도 돌봄 부재 문제를 효율적으로 해결함.\n아이 키우기 좋은 도시 이미지 제고: 안산시 관내 주거·교통·체육 시설 전반에 육아 친화적 환경을 조성하여 젊은 세대의 유입을 유도하고 지방소멸 및 저출생 극복에 기여함.\n2026년 8월 24일\n제안자 : 김남현 (인)\n \n개인정보 수집·이용동의서 ※ 꼭 체크해 주세요\n1. 개인정보의 수집 ․ 이용 목적 : 제안서 평가 및 시상\n2. 수집하는 개인정보의 항목 : 위 신청서 항목과 같음\n- 성명, 연락처(전화번호, 휴대폰번호), 생년월일, E-mail\n3. 개인정보의 보유·이용 기간 : 접수 시부터 우수과제 선정 시까지\n4. 귀하는 위와 같은 개인정보 수집․이용에 동의하지 않으실 수 있습니다. 동의 거부시에도 신청서\n제출은 가능하나 공모전 심사 및 입상에는 제한될 수 있습니다.\n❍ 위와 같이 개인정보를 수집․이용하는데 동의하십니까? ■ 동의함 □ 동의하지 않음",
    "tags": [
      "#안산도시공사",
      "#저출생극복",
      "#육아패스포트",
      "#공공시설활용",
      "#팝업돌봄"
    ]
  },
  {
    "id": "c-2026-seongdong-smart",
    "year": "2026",
    "title": "2026 평생 살고싶은 성동 아이디어 공모전",
    "pieceTitle": "성동형 스마트쉼터 연계 ‘전 생애주기 길목 팝업 돌봄 및 비대면 웰니스 케어망’ 구축",
    "category": "idea",
    "categoryName": "아이디어·스마트도시",
    "organization": "서울특별시 성동구",
    "submissionDate": "2026.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "성동구 전역에 이미 전력과 통신망이 갖춰진 '스마트쉼터'에 비접촉 생체 레이더 센서(어르신 건강 모니터링), 초등 안심 픽업 태그(등하원 알림), SOS 양방향 화상 관제를 결합하여 길목에서 365일 작동하는 전 생애주기 통합 돌봄 거점을 조성하는 아이디어.",
    "coreConcept": "별도 토지 매입이나 신축 없이 기존 스마트 인프라를 활용하여 노인 고독사 예방과 초등 돌봄 공백을 동시에 해결하는 스마트 포용도시 모델.",
    "futureUsage": "스마트시티 아이디어 공모전, IoT 복지망 구축 제안서, 지자체 생활 밀착형 혁신 사례에 적용.",
    "fileName": "[김남현] 2026 평생 살고싶은 성동 아이디어 공모전 신청서.hwpx",
    "fileSize": "85 KB",
    "fullContent": "성동의 내일을 여는 오늘의 상상\n평생 살고싶은 성동 아이디어 공모 신청서\n신 청 인\n성 명\n김남현\n생년월일\n1996년 01 월 03 일\n전화·휴대폰\n010-2232-3442\n이메일\ntr788@naver.com\n주 소\n경기도 화성시 동탄구\n▣ 개인정보 수집ㆍ이용 동의서 ▣\n1. 수집·이용 항목: 성명, 생년월일, 주소, 연락처, 이메일\n2. 수집·이용 목적: 공모 접수, 제안심사 및 관리, 수상자 선정 등\n3. 보유 및 이용기간: 수집일로부터 1년\n※\n신청자는 위의 개인정보 수집이용에 대한 동의에 거부할 권리가 있습니다. 다만, 동의를 거부할 경우에는 공모전의 운영 및 참가자에 대한 공정한 심사 등을 위해 참가가 제외됨을 유의하여 주시기 바랍니다.\n▶ 위와 같이 개인정보를 수집·이용하는데 동의 하십니까?\n동의함 ■ 동의하지 않음 □\n1번 제안내용\n※ 1인 3개의 아이디어까지 응모 가능\n제 목\n성동형 스마트쉼터 연계\n‘전 생애주기 길목 팝업 돌봄 및 비대면 웰니스 케어망’ 구축\n분 야\n통합돌봄(O) 도시혁신( ) 그 외 제안( ) ※ 해당 분야 체크\n제안개요\n성동구 전역의 ‘스마트쉼터’에 AI 비접촉 바이오 센서와 초등 안심 픽업 태그 시스템을 이식하여, 주민들이 일상적으로 오가는 길목에서 고령층 건강 이상 감지 및 아동 등하원 안심 알림을 제공하는 생활 밀착형 365 통합 돌봄 거점을 조성함.\n제안배경\n관내 1인 고령 가구 증가와 맞벌이 가구의 초등·영유아 돌봄 공백이 동시에 존재하는 상황에서, 기존 돌봄 시설은 직접 방문해야 하는 한계가 있음. 이미 구 전역 주요 거점에 구축되어 전력과 통신망을 갖춘 ‘스마트쉼터’를 단순 휴게 공간을 넘어 일상 속 돌봄 안전망으로 확장할 필요성이 높음.\n제안 내용\n목적: 대규모 토지 매입이나 신축 예산 없이 기존 스마트쉼터 인프라를 활용해 전 생애주기 돌봄 사각지대를 완벽히 해소함.\n구체적 실행 방안:\n어르신 웰니스 케어: 쉼터 의자/벽면에 비접촉 레이더(mmWave) 센서를 설치하여 앉아있는 동안 심박·호흡·체온을 자동 측정하고, 이상 징후 감지 시 보건소 및 자녀에게 즉시 알림 발송.\n아동 Safe-Zone 픽업: 쉼터에 아동 위치 인식(NFC/얼굴인식) 시스템을 도입하여 초등학생이 등하원 중 쉼터에 들르면 보호자 앱으로 안전 도착 메시지 자동 전송.\nSOS 스마트 관제: 야간 위급 상황 시 쉼터 내 SOS 버튼 누르면 도시통합관제센터와 즉시 양방향 화상 연결 및 주변 CCTV 집중 조명.\n실현 가능성: 구에서 직접 운영 중인 스마트쉼터의 기존 전력·통신·관제 네트워크를 활용하므로 기술 도입 및 설치가 신속하고 용이함.\n기대효과\n신규 시설 건립 대비 예산 절감 효과 극대화 및 돌봄 사각지대 전면 해소\n스마트 기술과 따뜻한 복지가 결합된 ‘스마트 포용도시 성동’의 독보적 선도 모델 확립\n위의 내용으로 ‘평생 살고싶은 성동’ 아이디어 공모전 접수를 신청하며,\n공모전 참여와 관련한 개인정보의 수집 및 활용에 동의합니다.\n(전자메일, 메시지 등의 접수 시 서명하여 제출한 것으로 간주합니다)\n2026년 9월 7 일\n신 청 인 : 김남현 (서명)\n2번 제안내용\n※ 1인 3개의 아이디어까지 응모 가능\n제 목\nAI·스마트센서 기반 '성동형 수변감성공원 자율안전·환경 케어 로봇' 도입\n분 야\n통합돌봄( ) 도시혁신(O) 그 외 제안( ) ※ 해당 분야 체크\n제안개요\n중랑천, 청계천, 응봉산 등 성동구의 풍부한 수변·녹지 공간에 AI 자율주행 야간 순찰·환경 케어 로봇을 배치하여, 심야 시간 주민 안전 확보 및 쾌적한 힐링 주거 환경을 조성하는 스마트 도시혁신 사업임.\n제안배경\n최근 성동구 수변 산책로 이용객이 급증함에 따라 심야 시간대 범죄 예방, 쓰레기 투기 및 사각지대 안전사고 대응 요구가 커짐. 기존의 고정형 CCTV만으로는 넓은 수변 공원 전체의 동적 위험 요소와 환경오염을 실시간으로 감지하고 통제하는 데 한계가 있음.\n제안 내용\n목적: AI 스마트 기술을 수변 휴식 공간에 접목하여 주민이 언제든 안심하고 누릴 수 있는 고품격 수변 친화 도시 조성.\n구체적 실행 방안:\nAI 야간 안심 순찰: 자율주행 로봇에 열화상 카메라와 AI 쓰러짐 감지 센서를 탑재해 심야 산책로를 순찰하고, 비명이나 응급 상황 감지 시 통합관제센터 경보 발송.\n실시간 환경 모니터링: 미세먼지, 악취, 수변 쓰레기를 자동 감지하고 수거 위치를 관제 시스템에 실시간 전송.\n음성 안내 서비스: 야간 입산·입수 위험 지역 접근 시 자율 경고 방송 및 스마트 산책 가이드 제공.\n실현 가능성: 국내 지자체 공공 로봇 실증사업 국비 지원과 연계가 가능하며, 성동구의 기존 통합관제 인프라에 로봇 관제 소프트웨어를 손쉽게 결합할 수 있음.\n기대효과\n수변 공원 내 심야 범죄 및 안전사고 위험을 원천 차단하여 주민 안심 만족도 대폭 향상\n스마트 자율주행 기술을 주민 체감형 공간에 구현하여 디지털 혁신 자치구로서의 정체성 강화\n위의 내용으로 ‘평생 살고싶은 성동’ 아이디어 공모전 접수를 신청하며,\n공모전 참여와 관련한 개인정보의 수집 및 활용에 동의합니다.\n(전자메일, 메시지 등의 접수 시 서명하여 제출한 것으로 간주합니다)\n2026년 9월 7일\n신 청 인 : 김남현 (서명)\n3번 제안내용\n※ 1인 3개의 아이디어까지 응모 가능\n제 목\n성수·마장 융합형 '성동 든든 한끼 청년-어르신 상생 식당 패스(Pass)'\n분 야\n통합돌봄( ) 도시혁신( ) 그 외 제안(O) ※ 해당 분야 체크\n제안개요\n관내 소상공인 식당과 마장축산물시장 등의 자원을 연계하여 영양 불균형을 겪는 독거 어르신과 취약계층 청년에게 지역 식당 이용 모바일/카드 포인트를 지원하고, 세대 통합 식음 문화 공간을 구축하는 민관 상생 제안임.\n제안배경\n성동구 내 청년 1인 가구 및 고령층 1인 가구 비율이 높으나, 무료 급식소는 고령층에 집중되어 있고 청년 층의 식생활 사각지대는 방치되는 경향이 있음. 또한 낙인감이 발생하는 기존 도시락 배달 방식에서 벗어나, 지역 골목상권과 상생하며 자연스럽게 영양을 챙길 수 있는 새로운 지원 방식이 필요함.\n제안 내용\n목적: 청년과 어르신의 식생활 불안을 해소함과 동시에 고물가로 어려움을 겪는 관내 골목상권 소상공인의 매출 증대를 동시에 달성함.\n구체적 실행 방안:\n'성동 든든 한끼 패스' 발급: 청년 가구 및 독거 어르신에게 지정된 관내 착한가격업소 및 협력 식당에서 사용 가능한 바우처 포인트 지급.\n마장시장 연계 영양 특식: 마장동 축산물시장의 신선한 원재료를 활용해 고단백 맞춤 식단을 정기 공급하는 협동조합 모델 운영.\n세대 공감 식탁 이벤트: 월 1회 지역 복지관이나 공유주방에서 청년과 어르신이 함께 음식을 만들고 식사하며 안부를 나누는 소통 프로그램 연계.\n실현 가능성: 성동구 지역화폐(성동사랑상품권) 시스템이나 기존 바우처 카드를 활용해 즉시 시스템 구축이 가능하며, 소상공인 연계로 지속가능성이 높음.\n기대효과\n청년과 고령층의 영양 불균형 해소 및 고독사 예방 효과\n지역 상권 활성화와 세대 간 정서적 유대감 형성으로 살기 좋은 공동체 문화 완성\n위의 내용으로 ‘평생 살고싶은 성동’ 아이디어 공모전 접수를 신청하며,\n공모전 참여와 관련한 개인정보의 수집 및 활용에 동의합니다.\n(전자메일, 메시지 등의 접수 시 서명하여 제출한 것으로 간주합니다)\n2026년 9월 7 일\n신 청 인 : 김남현 (서명)",
    "tags": [
      "#성동구",
      "#스마트쉼터",
      "#생애주기돌봄",
      "#웰니스케어",
      "#스마트시티"
    ]
  },
  {
    "id": "c-2026-nutrition-care",
    "year": "2026",
    "title": "대국민 공모전 ‘우리 곁의 영양돌봄 - 내가 바라는 영양돌봄 서비스’",
    "pieceTitle": "초고령·만성질환 가구를 위한 지역기반 '영양진단-선식(맞춤식) 배송-밀착 복약·식단 코칭' 통합 서비스",
    "category": "idea",
    "categoryName": "아이디어·돌봄복지",
    "organization": "보건복지부 / 한국보건산업진흥원",
    "submissionDate": "2026.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "만성질환을 앓는 취약계층 독거노인을 위해 지역 보건소-영양사-동네 반찬가게가 연계하여 개인별 혈당·혈압 상태에 맞춘 저염·당뇨 영양식을 정기 배송하고, 스마트 복약 코칭과 안부 확인을 동시에 진행하는 3각 밀착 영양돌봄 체계 제안.",
    "coreConcept": "단순한 무료 급식 배달을 넘어, 진단-맞춤식-코칭이 원스톱으로 이어지는 의료-영양-돌봄 결합 커뮤니티 케어 BM.",
    "futureUsage": "통합돌봄(커뮤니티 케어), 고령친화 서비스, 사회서비스 혁신 공모전 지원 시 핵심 기획서로 활용.",
    "fileName": "대국민 공모전 우리 곁의 영양돌봄 - 참가 신청서 및 제안서.hwpx",
    "fileSize": "103 KB",
    "fullContent": "서식 1\n공모전 참가 신청서\n대국민 공모전 ‘우리 곁의 영양돌봄-내가 바라는 영양돌봄 서비스’ 참가 신청서\n제안명\n초고령·만성질환 가구를 위한 지역기반 '영양진단-선식(맞춤식) 배송-밀착 복약·식단 코칭' 통합 서비스\n성명\n김남현\n생년월일\n1996.01.03\n소속\n삼성전자 DS부문\n휴대폰\n010-2232-3442\nE-mail\ntr788@naver.com\n타공모전\n제출여부\n(동일/유사제안)\n■ 없음\n□ 있음\n(제출처\n※ 위 내용은 사실과 일치하도록 정확하게 기재해 주시기 바랍니다.\n위와 같이 대국민 공모전「우리 곁의 영양돌봄-내가 바라는 영양돌봄 서비스」\n에\n응모하며, 유의사항을 준수하여 참가 신청서를 제출합니다.\n2026년 08월 26일\n지원자 : 김남현 (인) (서명)\n㈔대한영양사협회 귀중\n붙임 1. 서약서 1부\n[붙임 1] 서약서\n서 약 서\n본인은 ㈔대한영양사협회·㈔한국영양학회·㈔대한지역사회영양학회·㈔한국식품영양과학회·한국임상영양학회가 공동으로 주최하는\n대국민 공모전 「우리\n곁의 영양돌봄-내가 바라는 영양돌봄 서비스」\n에 응모함에 있어 제출한 제안서의 핵심 아이디어와 내용은\n본인이 직접 창작한 내용이며,\n생성형 AI가 작성한 내용을 수정 없이 그대로 제출하거나 이에 과도하게 의존하여 작성\n한 내용이 아님\n을 확인합니다. 또한 표절·모방·중복 응모, 타인의 아이디어 도용 또는 기타\n부정한 방법으로 응모하지 않았으며, 제3자의 저작권·초상권 등 권리를 침해\n하지 않았음을 확인합니다.\n아울러 제출한 내용이 허위이거나 공모요강을 위반한 사실이 확인될 경우 심사 제외, 입상 취소 및 상장·상금 환수 등 주최기관의 조치에 이의를 제기하지 않을 것을 서약합니다. 또한 입상작의 이용 및 저작권에 관한 사항은 공모요강에서 정한 바를 따르며,\n홍보·교육\n및 공익적 목적을 위해 활용될 수 있음에 동의합니다.\n2026년 08월 26일\n성 명 : (인)\n㈔대한영양사협회 귀중\n서식 2\n공모전 제안서\n제안명\n초고령·만성질환 가구를 위한 지역기반 '영양진단-선식(맞춤식) 배송-밀착 복약·식단 코칭' 통합 서비스\n주요내용\n- 초고령·만성질환자의 영양 상태를 진단해 맞춤 식단을 배송하고 생활 코칭을 제공하는 서비스\n제안 배경\n또는 계기\n- 홀로 계신 외할머니께서는 당뇨와 고혈압을 동시에 앓고 계신다. 병원에서는 매번 저염식과 당뇨식을 철저히 지키라고 당부하지만, 현실은 전혀 달랐다. 연세가 드시면서 치아가 불편해지자 씹기 편한 빵이나 국물에 밥을 말아 드시는 일이 일상이 되셨다. 보건소나 지자체에서 도시락이 배달되어 오기도 했으나, 정작 당뇨 환자에게 부적합한 고탄수화물 반찬이 포함되어 있거나 짠 음식이 많아 그대로 버려지는 모습을 자주 목격했다.\n단순히 '한 끼 밥을 챙겨주는 것'만으로는 어르신들의 건강 상태를 개선할 수 없다. 만성질환을 가진 취약계층일수록 질환 맞춤형 영양관리가 시급하지만, 정작 현장에서는 개별 질환에 맞춘 식사 지원 체계가 턱없이 부족하다는 것을 뼈저리게 느꼈다. 어르신들의 실질적인 영양 상태를 개선하고 만성질환 악화를 막으려면, 개인의 건강 상태를 정확히 파악하고 그에 맞는 맞춤형 식단과 주기적인 복약·영양 관리가 한데 묶인 서비스가 필요하다는 생각에 본 아이디어를 제안하게 되었다.\n제안 필요성\n현재 지자체나 복지관에서 운영하는 취약계층 대상 식사 지원 사업은 대부분 '일괄적인 도시락 제공' 형태에 머물러 있다. 이는 영양 불균형 해소라는 원래의 취지와 달리 다음과 같은 한계를 드러낸다.\n첫째, 질환별 맞춤형 영양 관리의 부재다. 고혈압, 당뇨, 신장질환 등 기저질환을 가진 노인은 섭취해야 할 영양소와 제한해야 할 성분이 명확히 다르다. 일률적인 식단은 오히려 기저질환을 악화시키는 원인이 되기도 한다.\n둘째, 저작 및 섭취 능력 고려 부족이다. 고령층의 대다수는 치아 손실이나 연하곤란(음식을 삼키기 어려움)을 겪는다. 섭취 능력을 고려하지 않은 일반 반찬은 제대로 소화되지 못하고 잔반으로 버려지는 비율이 매우 높다.\n셋째, 사후 관리 및 영양 교육의 부재다. 단순히 음식을 전달하는 데 그치고 있어, 대상자가 실제 음식을 어떻게 섭취하고 있는지, 약은 제대로 복용하고 있는지 확인하는 케어 시스템이 부재하다.\n따라서 대상자의 건강 진단 데이터와 연결된 '맞춤형 영양 지원' 및 '지속적인 밀착 케어'가 결합된 새로운 형태의 영양돌봄 모델 도입이 절실하다.\n제안하는\n영양돌봄\n서비스\n본 제안은 지역사회 내 만성질환을 가진 초고령층 및 식생활 취약계층을 대상으로, ‘진단-맞춤 제조-집앞 배송-생활 밀착 코칭’이 유기적으로 연결되는 [3Step 헬스케어 영양돌봄 솔루션]이다.\n1단계: 방문 영양·건강 진단 및 영양 처방 (Diagnosis)\n지역 보건소 및 방문간호·영양사 연계: 서비스 신청 시, 지역 보건소의 방문간호사 및 전담 영양사가 대상자 가구를 방문한다.\n통합 건강 데이터 측정: 기본 혈당 및 혈압, 인바디(체성분 분석), 치아 상태 및 삼킴 능력(연하 능력), 기존 복용 약물 목록을 종합적으로 체크한다.\n맞춤형 영양 처방전 발급: 측정된 데이터를 기반으로 개인별 맞춤 영양 가이드라인(예: 저염·고단백 당뇨 관리식, 씹기 편한 연화식, 신장질환 맞춤 저칼륨식 등)을 수립한다.\n2단계: 질환 맞춤형 '밀키트·완제식' 제조 및 정기 배송 (Customized Meal Delivery)\n지역 거점 영양키친 운영: 지자체 자활기업 또는 지역 자원봉사센터와 연계하여 임상영양사의 감독하에 맞춤형 식단을 조리한다.\n세분화된 맞춤 식단 라인업 구축:\n당뇨·고혈압 케어식: 잡곡 기반, 저염 및 저당 위주의 반찬 구성\n연화·음용 케어식: 치아가 약한 어르신을 위해 영양소를 축소하지 않으면서 부드럽게 가공한 페이스트 및 믹스형 고단백 죽·선식\n신장 케어식: 나트륨, 칼륨, 인 성분을 엄격히 조절한 식단\n주 2~3회 신선 배송: 일주일에 2~3회, 2~3일 치의 식단을 위생 용기에 담아 각 가구로 신선 배송한다.\n3단계: '영양돌봄 매니저'를 통한 밀착 복약·식단 코칭 (Care & Monitoring)\n영양돌봄 매니저(지역 일자리 연계) 파견: 단순 배달원에 그치지 않고, 관련 교육을 이수한 지역 생활지원사나 은퇴 간호·영양 인력을 '영양돌봄 매니저'로 지정한다.\n식사 및 복약 모니터링:\n음식을 전달하면서 지난번 배송된 식사의 잔반율을 확인한다. (어떤 반찬을 못 드시는지, 거부감이 있는지 체크)\n식후 약 복용 여부 및 당뇨·혈압 수치를 기록한다.\n디지털 케어 모바일 앱(간이형) 활용: 매니저가 기재한 데이터(식사율, 혈당 수치, 특이사항)는 지자체 영양돌봄 플랫폼에 입력되어 보건소와 보호자(자녀)에게 실시간으로 공유된다.\n월 1회 영양 재평가: 한 달간 축적된 데이터를 바탕으로 영양사가 건강태 변화를 분석하고 다음 달 식단을 재조정(피드백)한다.\n기대효과\n대상자 및 보호자 측면\n기저질환 악화 방지 및 건강 증진: 질환에 맞는 영양 섭취를 통해 혈당·혈압 제어가 용이해지며, 영양실조나 근감소증을 예방할 수 있다.\n돌봄 부담 완화: 먼 곳에 떨어져 사는 자녀들이 홀로 계신 부모님의 식사와 건강 상태를 앱으로 실시간 확인할 수 있어 돌봄 불안감이 획기적으로 줄어든다.\n② 사회·국가적 파급효과\n의료비 절감 및 만성질환 관리 효율화: 영양 개선을 통해 초고령층의 재입원율과 병원 진료비 부담을 낮춤으로써 국가 건강보험 재정 건전화에 크게 기여한다.\n지역사회 통합 돌봄(Community Care) 완성: 보건소, 복지관, 지역 주민(매니저)이 유기적으로 연결되는 촘촘한 지역사회 영양 안전망이 구축된다.\n지역 일자리 창출: 영양돌봄 매니저, 맞춤식 조리 인력 등 지역 내 경력단절 여성 및 신중년층을 위한 지속 가능한 일자리가 만들어진다.\n참고자료\n보건복지부, 『2023년 노인실태조사』 (노인 영양섭취 불량률 및 만성질환 보유율 통계)\n한국보건사회연구원, 『초고령사회 대비 취약계층 영양돌봄 체계 구축 방안』 보고서\n국민건강보험공단, 만성질환 관리 사업 및 지역사회 통합돌봄 연계 자료\n서식 3\n공모전 자가진단 체크리스트\n번호\n진단내용\n예\n아니오\n1\n본 제안서의 핵심 아이디어와 내용은 본인이 직접 창작하였습니까?\n(※ 생성형 AI가 작성한 내용을 그대로 제출하거나, 과도하게 의존하여 작성한 내용이 없음)\nO\n2\n본 제안서는 불필요한 본인 및 제3자의 개인정보를 포함하지 않아야\n합니다. 위 내용을 확인하였습니까?\nO\n3\n본 제안서는 표절·모방·중복 응모 또는 타 공모전 수상작에 해당하지\n않아야 합니다. 위 내용을 확인하였습니까?\nO\n4\n본 제안서는 제3자의 저작권 등 권리를 침해하지 않아야 합니다.\n위 내용을 확인하였습니까?\nO\n5\n본 제안서의 모든 내용은 허위가 아닌 사실에 근거하여 작성되었습니까?\nO\n6\n수상작은 ▲영양의 날 콘텐츠 제작 ▲홈페이지 게재 ▲협회 SNS 채널\n홍보 ▲보도자료 배포 등에 활용될 수 있음을 확인하였습니까?\nO\n본인은 대국민 공모전 「우리 곁의 영양돌봄 – 내가 바라는 영양돌봄 서비스」에 응모하기에 앞서 상기 항목들을 성실하게 점검하였습니다.\n성명 :\n김남현 (인)\n서식 4\n개인정보 수집·이용 및 저작권 동의서\n㈔대한영양사협회는 2026 영양의 날 기념 대국민 공모전 「우리 곁의 영양돌봄 – 내가 바라는 영양돌봄 서비스」의 운영(접수, 심사 및 시상)과 관련하여 아래\n의 개인정보를 수집·이용 및 제3자에게 제공하고,\n개인정보 처리 업무의 위탁 사항을 안내하며, 저작권 관련 동의를 받고자 합니다. 아래의 내용을 충분히 읽어보신 후 동의 여부를 결정하여 주시기 바랍니다.\n■ 개인정보 수집‧이용 내역\n항목\n수집·이용 목적\n보유·이용기간\n응모자 성명, 소속,\n이메일주소, 연락처\n· 공모전 참가신청서 접수 및 심사\n· 응모자 본인 확인 및 식별\n· 접수 확인, 심사 결과 안내 및 시상 관련 업무 처리\n개인정보는 수집·이용 목적 달성 시\n까지 보유하며, 공모전 종료 후 1년간 보관한 뒤 지체 없이 파기합니다.\n※ 귀하\n는 위의 개인정보의 수집‧이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를\n거부할 경우 공모전 참가 및 심사, 시상 등에 제한이 있을 수 있습니다.\n1)\n(개인정보 수집·이용목적)\n공모전 응모자 확인, 심사 및 시상, 심사 결과 안내 등 공모전 운영을 위해 개인정보를 수집·이용하며, 수집된 개인정보는 해당 목적 외의 용도로 이용하지 않습니다.\n2)\n(응모 및 저작권 관련 유의사항)\n가) 제안서는 응모자가 직접 작성한 창작물로 제3자의 저작권, 초상권 등 권리를 침해하지 않아야 하며, 입상 후에도 저작권은 원저작자에게 귀속됩니다.\n나\n)\n제안서는 응모자가 직접 창작한 내용이어야 하며, 표\n절·모방·중복 응모·도용 및\n생성형 AI에 과도하게\n의존하여 작성한 경우\n등 부정한 방법으로 응모한 경우 심사에서 제외되거나 입상이 취소될 수 있습니다.\n다\n) 주최기관은 입상작을 공모전의 취지 및 공익적 목적의 범위 내에서 기관지, 홈페이지, SNS 등 홍보·교육 자료로 활용할 수 있으며, 필요한 경우 입상자와 별도의 협의를 거쳐 2차 저작물을 작성할 수 있습니다.\n라) 응모자는 공모전에 응모함과 동시에 입상 시 공모요강에 명시된 범위 내에서 주최기관의 입상작 이용을 허락한 것으로 보며, 이에 대한 저작재산권 이용료는 입상에 따른 상금으로 갈음합니다.\n마)\n타 공모전 입상작, 모방작 또는 타인의 아이디어를 도용한 사실이 확인될 경우 심사 제외, 입상 취소 및 상금 환수 등의 조치를 할 수 있습니다.\n바)\n제출한 제안과 관련하여 저작권 등 법적 분쟁이 발생하는 경우 이에 대한 모든 책임은 응모자에게 있습니다.\n☞\n위와 개인정보 수집·이용 및 저작권 관련 사항에 동의하십니까?\n예\n아니오\n2026년 08월 26일\n성 명 : 김남현 (서명 인)\n㈔대한영양사협회 귀중",
    "tags": [
      "#영양돌봄",
      "#보건복지부",
      "#맞춤식단",
      "#복약코칭",
      "#커뮤니티케어",
      "#고령돌봄"
    ]
  },
  {
    "id": "c-2026-violence-prevention",
    "year": "2026",
    "title": "2026 일상 속 여성폭력 예방·대응 사례 공모전",
    "pieceTitle": "‘넛지(Nudge)’ 효과와 우리 동네 거점을 활용한 일상 속 여성 폭력 예방 아이디어",
    "category": "idea",
    "categoryName": "아이디어·안전사회",
    "organization": "한국여성인권진흥원 / 여성가족부",
    "submissionDate": "2026.07",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "사후 출동이나 감시 위주의 CCTV 증설 한계를 넘어, 심리적 넛지(Nudge) 기법을 활용한 안심 조명·바닥 유도선 디자인과 편의점, 약국 등 24시간 동네 거점을 '안심 지킴이 쉘터'로 지정하여 위험 징후를 선제적으로 완화하는 생활 공간 안전 아이디어.",
    "coreConcept": "범죄 예방 환경설계(CPTED)와 행동경제학 넛지 이론을 결합하여 이웃 간의 자연스러운 감시와 연대를 이끌어내는 저비용 예방 메커니즘.",
    "futureUsage": "안전 안심 귀가길, 도시 환경 디자인, 여성인권 증진 공모전 기획서로 활용.",
    "fileName": "김남현_'넛지(Nudge)' 효과와 우리 동네 거점을 활용한 일상 속 여성 폭력 예방 아이디어.hwpx",
    "fileSize": "77 KB",
    "fullContent": "제목 : '넛지(Nudge)' 효과와 우리 동네 거점을 활용한 일상 속 여성 폭력 예방 아이디어\n작성자 : 김남현\n요즘 골목마다 CCTV나 비상벨 같은 안전시설이 정말 많이 설치되었습니다. 하지만 이런 장치만으로는 가까운 관계에서 은밀하게 일어나는 폭력이나, 감시의 눈길이 미치지 않는 곳의 위험까지 완벽히 막기는 어렵습니다. 지금까지의 대책이 '사건 발생 후 빠르게 출동하기'나 '카메라를 추가로 달아 감시하기'에 치우쳐 있었다면, 이제는 우리가 늘 다니는 길목에서 누구나 쉽게 위험을 눈치채고 대처할 수 있는 새로운 방식이 필요합니다. 거창한 기술이나 큰 예산 없이도, 사람들의 행동 심리와 동네 네트워크를 활용해 삶 속에서 바로 적용할 수 있는 세 가지 예방책을 제안해 봅니다.\n첫째, '안심 반사 스티커'로 골목길 위험 구역 줄이기\nCCTV만 무작정 늘리기보다는, 딴마음을 품은 사람에게 '누군가가 나를 지켜보고 있다'라는 느낌을 주는 편이 범죄를 막는 데 훨씬 효과적입니다. 이를 위해 어두운 골목이나 다세대 주택 계단, 상가 구석처럼 어스름한 장소의 바닥이나 벽에 시선이 잘 닿는 반사 스티커와 거울 표지를 붙이는 방안을 생각했습니다.\n길을 오가는 주민에게는 \"이곳은 이웃들이 함께 신경 쓰는 안전한 길\"이라는 안도감을 주고, 범죄를 마음먹은 사람에게는 자기 모습이 거울에 비치면서 순간적으로 주춤하게 만드는 효과를 기대할 수 있습니다.\n둘째, 자주 쓰는 스마트폰 앱을 활용한 '초간단 안심 신호'\n데이트폭력이나 스토킹처럼 친밀한 관계에서 일어나는 위협은 피해자가 현장에서 선뜻 112에 전화하기가 매우 힘듭니다. 신고하는 모습을 상대에게 들켰을 때 돌아올 더 큰 폭력이 두렵기 때문입니다.\n이 문제를 풀기 위해, 새로운 앱을 따로 설치할 필요 없이 매일 쓰는 날씨 앱이나 교통카드 앱에 '비밀 신호' 기능을 더하는 아이디어입니다. 위급할 때 날씨 앱의 특정 영역을 세 번 연속 누르는 식의 간단한 동작만으로, 미리 등록해 둔 지인이나 상담소로 \"위험할 수 있으니 확인해 달라\"는 알림과 현재 위치가 자동으로 넘어갑니다. 신고 문턱을 대폭 낮춰서 상황이 더 나빠지기 전에 도움을 받을 수 있습니다.\n셋째, 편의점과 동네 카페를 '우리 동네 안심 거점'으로 만들기\n예방 활동이 일회성으로 끝나지 않으려면 주민들이 매일 이용하는 동네 가게들이 안전망 역할을 맡아주어야 합니다. 24시간 운영하는 편의점이나 약국, 자주 찾는 카페와 미용실을 '안심 거점'으로 정하고, 점주와 근무자들에게 간단한 '위기 상황 대처 수칙'을 전달하는 것입니다.\n예를 들어 누군가 불안해하며 쫓기듯 들어왔을 때, 매장 직원이 자연스럽게 \"주문하신 메뉴 확인해 드릴게요\"라며 가해자의 시선이 미치지 않는 매장 안쪽으로 안내하거나 말을 건네는 방식입니다. 거창한 보호 시설을 짓지 않더라도, 자주 들르는 동네 가게가 따뜻한 1차 피난처이자 외부 전문 기관으로 연결해 주는 통로가 되어줄 수 있습니다.\n여성 폭력 예방은 일이 벌어진 뒤 가해자를 처벌하는 것도 중요하지만, 폭력이 발붙이기 힘든 환경을 우리 삶 주변에 조성하는 것이 핵심입니다. 스마트폰 화면을 몇 번 두드리는 손짓, 골목길의 작은 반사 거울, 동네 가게 사장님의 세심한 눈길 같은 사소한 실천이 모일 때 단단한 안전망이 완성됩니다. 우리가 날마다 걷는 길과 날마다 쓰는 앱 속에 이러한 작은 아이디어를 하나씩 더해 나간다면, 위험의 신호를 일찍 포착하고 우리가 모두 안심할 수 있는 일상을 지켜낼 수 있을 것입니다.",
    "tags": [
      "#여성인권진흥원",
      "#여성폭력예방",
      "#넛지효과",
      "#CPTED",
      "#안심거점",
      "#생활안전"
    ]
  },
  {
    "id": "c-2026-asan-animal",
    "year": "2026",
    "title": "2026 제2회 아산시 동물보호의 날 콘텐츠 공모전",
    "pieceTitle": "온천천 길고양이 물그릇과 동네 주민들의 다정한 동물보호 수기",
    "category": "idea",
    "categoryName": "아이디어·생명존중",
    "organization": "충청남도 아산시",
    "submissionDate": "2026.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "아산 온천천 산책로 풀숲 곳곳에 주민들이 조심스레 놓아둔 깨끗한 물그릇을 조명하며, 공식적인 기록이나 화려한 구호가 아니더라도 일상 속 작고 다정한 배려가 모여 생명 존중의 도시를 완성한다는 따뜻한 수기형 에세이.",
    "coreConcept": "동물 복지가 특별한 사업이 아닌 이웃들의 소소한 일상적 공존의 시선에서 시작됨을 감성적 문체로 전달.",
    "futureUsage": "동물보호, 생명 존중, 반려동물 문화 공모전 및 로컬 환경 에세이 공모에 활용.",
    "fileName": "2026 제2회 아산시 동몰보호의 날 콘텐츠 공모전 (김남현_출품작).hwpx",
    "fileSize": "85 KB",
    "fullContent": "아산의 온천천을 걷다 보면 계절의 변화보다 먼저 눈에 들어오는 풍경이 있습니다. 가만히 풀숲을 서성이는 길고양이들과, 그들이 머무는 자리 근처에 조심스레 놓인 깨끗한 물그릇들입니다. 어떤 공식적인 기록에도, 화려한 명부에도 남지 않는 풍경입니다. 그저 동네 주민들이 오가며 남긴 작고 다정한 흔적들, 그것이 제가 아산의 일상에서 발견한 가장 가슴 벅찬 동물보호의 모습이었습니다. 말도 통하지 않고 몸집도 작은 생명들이 이 거친 세상에서 무사히 하루를 버텨내기를 바라는, 이름 모를 이웃들의 소박한 기도가 그 물그릇 속에 찰랑이고 있었습니다.\n어느 비가 세차게 내리던 늦은 저녁, 골목길 한구석에서 온몸이 젖은 채 떨고 있던 새끼 고양이 한 마리를 마주친 적이 있습니다. 흐려진 눈망울로 세상을 원망하듯 바라보는 그 작은 존재 앞에서 가슴이 먹먹해졌습니다. 섣불리 손을 내밀면 도망칠까 봐, 편의점으로 달려가 급히 캔 하나를 사 와 멀찍이 밀어주고 우산을 비스듬히 걸쳐둔 채 발걸음을 돌렸습니다. 밤새 비바람이 몰아치는 소리를 들으며 그 작은 숨결이 무사할지 마음을 졸였습니다.\n다음 날 아침, 걱정스러운 마음에 서둘러 찾아간 그 자리에는 빈 캔만 덩그러니 남아 있었지만, 놀라운 기적이 있었습니다. 누군가 고양이를 위해 마른 수건을 겹겹이 깔아둔 튼튼한 상자 집을 대신 놓아두고 간 것이었습니다. 내가 건넨 작은 배려가 밤사이 또 다른 이웃의 다정한 손길로 이어져, 한 생명을 품어주는 커다란 온기가 되어 있었습니다. 내가 시작한 작은 선의가 이름 모를 이웃에게 닿아 더 큰 사랑으로 되돌아오는 과정을 보며, 이 도시가 가진 마음의 온도가 얼마나 뜨거운지 깊이 느낄 수 있었습니다.\n아산시가 운영하는 길고양이 급식소나 TNR(포획·중성화·방사) 사업 같은 정책들도 결국 이러한 시민들의 일상적인 마음들이 모여 피워낸 눈부신 결실일 것입니다. 진정한 보호는 거창한 기관의 서류나 특별한 봉사 활동의 기록 속에서만 존재하는 것이 아닙니다. 매일 걷는 골목길에서, 고단한 출퇴근길에 마주치는 작은 숨탄것들의 안녕을 바라고 그들의 영역을 있는 그대로 인정해 주는 성숙한 시선 자체가 이미 가장 위대한 실천입니다. 나에게 소중한 삶이 있듯, 길 위의 작고 유약한 생명들에게도 단 하나뿐인 삶이 있음을 마음으로 먼저 알아채는 일입니다.\n반려동물과 함께 살아가는 시민들이 산책로에서 펫티켓을 철저히 지키는 모습 또한 아산에서 자주 마주하는 아름다운 상생의 풍경입니다. 내 곁에 있는 반려동물이 소중한 만큼 길 위의 외로운 생명도, 그리고 동물을 무서워하거나 낯설어하는 이웃의 마음까지도 함께 배려하는 태도야말로 공존의 핵심이기 때문입니다. 내 존재가 세상에서 존중받기를 원하듯, 그들의 작은 생명권과 이웃의 평범한 일상을 온전히 존중하는 마음이 온천천의 맑은 물줄기처럼 잔잔하고도 깊게 흐르고 있습니다.\n동물보호라는 것은 대단한 결심이나 특별한 영웅의 행동이 아닌, 우리의 평범한 하루 속에 스며있어야 하는 당연한 온기입니다. 추운 겨울날 자동차 시동을 걸기 전 보닛을 가볍게 두드려 잠든 길고양이를 깨우는 노크 소리, 유기 동물 입양 공고 속에 담긴 슬픈 눈빛들을 차마 외면하지 못하고 진지하게 들여다보는 눈빛 속에 그 답이 있습니다. 그 작은 행동들이 모여 한 생명의 절망을 희망으로 바꾸고, 얼어붙은 세상을 녹이는 커다란 불씨가 됩니다.\n지금, 이 순간도 아산의 어느 골목길, 어느 가로등 밑에서는 인간과 동물이 나란히 숨을 쉬며 하루를 살아가고 있습니다. 서로에게 해를 끼치지 않고, 각자의 자리에서 다정하게 눈을 맞출 수 있는 성숙한 인식이 모두의 마음에 깊이 정착될 때, 아산은 비로소 모든 생명이 상처 없이 행복한 진정한 살기 좋은 도시가 될 것입니다. 비록 세상의 화려한 기록에는 남지 않을 작은 몸짓일지라도, 서로를 향해 묵묵히 내어준 보이지 않는 품이 있기에 우리의 내일은 오늘보다 훨씬 더 다정하고 따뜻해질 것이라 확신합니다.",
    "tags": [
      "#아산시",
      "#동물보호의날",
      "#온천천",
      "#길고양이",
      "#생명존중",
      "#다정한흔적들"
    ]
  },
  {
    "id": "c-2026-skill-bank",
    "year": "2026",
    "title": "2026년 직무능력은행 활용 우수사례 공모전",
    "pieceTitle": "내 안의 전문성을 증명하는 열쇠, 직무능력은행으로 엔지니어의 내일을 열다",
    "category": "idea",
    "categoryName": "아이디어·커리어수기",
    "organization": "고용노동부 / 한국산업인력공단",
    "submissionDate": "2026.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "단순 설비 유지보수 엔지니어에서 위험물 기능장과 가스산업기사를 취득하여 법정 안전관리자로 성장하는 과정에서, 파편화된 자격과 NCS 직무 경력을 직무능력은행에 체계적으로 저축·인증받아 커리어 전환의 결정적 발판으로 삼은 실제 성공 수기.",
    "coreConcept": "국가직무능력표준(NCS) 기반 직무 포트폴리오 자산화와 직무능력인정서의 현장 취업·인사 연계 가치 실증.",
    "futureUsage": "평생직업교육, HRD 우수사례, 엔지니어 전문성 브랜딩 및 강연 자료로 활용.",
    "fileName": "2026년 직무능력은행 활용 우수사례 공모전 출품작.hwpx",
    "fileSize": "89 KB",
    "fullContent": "『2026년 직무능력은행 활용 우수사례 공모전』 작성양식\n성명(단체명)\n김남현\n제출부문\n■ 개인\n부문\n□ 단체\n부문\n제 목\n내 안의 전문성을 증명하는 열쇠, 직무능력은행으로 엔지니어의 내일을 열다\n산업 현장에서 엔지니어로 살아간다는 것은 끝없는 자기 증명의 연속이다. 나는 수년간 제조 공장과 인프라 시설을 오가며 단순 설비 유지 보수 엔지니어로 근무해 왔다. 작업복을 입고 현장을 누비며 크고 작은 기계 설비를 닦고, 조이고, 기름치는 것이 내 일상의 전부였다. 현장에서 쌓아 올린 잔뼈 굵은 경험과 감각은 누구보다 자신 있었지만, 시간이 흐를수록 마음 한구석에는 채워지지 않는 갈증과 불안감이 자리 잡기 시작했다. 현장 유지를 위한 단순 반복적인 정비 업무만으로는 기술자로서의 명확한 미래나 커리어의 확장을 기대하기에 어려웠기 때문이다.\n기술자로서 독보적인 전문성을 인정받고, 한 단계 더 높은 수준의 안전 관리를 책임지는 핵심 인력으로 거듭나고 싶다는 열망이 피어올랐다. 단순 엔지니어를 넘어 현장의 안전을 책임지는 '위험물 관리자'와 '고압가스 관리자'로의 직무 전환 및 인사 선임이 내 명확한 자기 계발 목표가 되었다. 목표가 확립된 이후 평일 퇴근길과 주말을 모두 반납해 가며 치열하게 공부에 매달렸다. 피나는 노력 끝에 가스 산업기사와 위험물 분야의 최고 수준 자격인 위험물 기능장이라는 값진 자격증들을 손에 쥐게 되었다.\n하지만 자격증을 취득했다고 해서 곧바로 탄탄대로가 열리는 것은 아니었다. 사내에서 새로운 법정 선임 관리자 직무로 전환을 제안하거나 이·전직을 준비하려 할 때, 예상치 못한 장벽에 부딪혔다. 내가 그동안 현장에서 수행해 온 NCS(국가직무 능력표준) 기반의 구체적인 직무 경력, 여러 기관에 파편화되어 흩어져 있는 자격 사항, 그리고 틈틈이 이수했던 직무 교육 이력들을 하나의 통일된 역량으로 묶어 기업에 명확하게 증명하기가 쉽지 않았다. 이력서의 몇 줄 적힌 자격증 명칭만으로는 내가 현장에서 위험물과 고압가스를 얼마나 실무적으로 안전하게 다룰 수 있는지, 그 진정한 '직무 능력'의 깊이를 인사담당자에게 설득력 있게 전달하기에 한계가 명확했다.\n내 능력을 객관적이면서도 한눈에 보여줄 수 있는 결정적인 무언가가 절실했던 시기였다.\n내 커리어의 정체기를 깨뜨려준 결정적 계기는 '직무능력은행'과의 만남이었다. 내가 취득한 국가기술자격은 물론, 현장 경력과 교육 이력 등 개인이 평생 습득한 다양한 직무 능력을 한곳에 모아 저축하고 인정서 형태로 발급받아 취업과 인사관리에 활용할 수 있는 시스템이라는 설명에 눈이 번쩍 뜨였다. 고용노동부와 한국산업인력공단이 공인하는 제도라는 점 역시 강력한 신뢰를 주었다.\n망설임 없이 직무능력은행 시스템에 접속해 내 정보를 연계하기 시작했다. 그 과정은 놀라울 정도로 간편하고 체계적이었다. 큐넷(Q-Net)을 통해 취득했던 가스 산업기사와 위험물 기능장 자격증이 실시간으로 연동되어 내 은행 계좌에 차곡차곡 저축되었다. 그뿐만 아니라, 그동안 고용보험 가입 이력을 기반으로 다져진 현장 설비 유지 보수 경력들이 NCS 직무 분류 체계에 맞추어 깔끔하게 정리되어 화면에 나타났다.\n이전까지 나에게 자격증은 서랍 속 서류첩에 보관된 종이 한 장에 불과했고, 경력은 그저 기간으로만 산정되는 수치에 불과했다. 하지만 직무능력은행은 이 파편화된 요소들을 유기적으로 결합해 주었다. 내가 가진 위험물 기능장 자격이 실제 어떤 NCS 학습 모듈 및 직무 능력 단위와 매칭되는지, 가스 산업기사 자격이 현장 고압가스 관리 실무와 어떻게 직결되는지가 과학적이고 정량적으로 시각화되었다. 내 안의 잠재된 기술력과 경험이 비로소 국가가 공인하는 명확한 '직무 능력 데이터'로 변환되는 순간이었다. 나는 직무능력은행을 통해 내 모든 역량이 총망라된 공식 '직무능력인정서'를 발급받았다. 이 인정서는 단순한 이력서 서류 몇 장과는 비교할 수 없는 묵직한 가치와 신뢰감을 지니고 있었다.\n직무능력은행이 발급해 준 든든한 무기를 쥐고, 나는 본격적으로 커리어 점프를 위한 도전에 나섰다. 사내 직무 전환 기회와 더불어 고위험 물질 및 가스 시설을 전문적으로 다루는 대형 제조 기업의 핵심 관리자 공모에 지원했다. 서류 전형과 면접 과정에서 나는 일반적인 자기소개서 대신 직무능력은행의 직무능력인정서를 핵심 포트폴리오로 제출했다.\n효과는 기대 이상으로 확실했다. 인사담당자들과 기술 면접관들은 직무능력은행 인정서에 깊은 관심을 보였다. 면접관들은 내가 단순 설비 유지 보수를 해왔던 기간 동안 어떤 구체적인 기술적 역량을 축적했는지, 그리고 내가 보유한 위험물 기능장과 가스 산업기사 자격이 기업이 요구하는 '유해화학물질 안전 관리' 및 '고압가스 제조·저장 시설 관리' 직무에 어떻게 100% 부합하는지를 인정서 한 장으로 완벽하게 파악할 수 있었다고 전했다. 자격의 진위를 확인하기 위해 여러 사이트를 조회할 필요 없이, 국가가 보증하는 단 하나의 서류로 모든 역량이 가독성 있게 증명되니 인사관리 측면에서 신뢰도가 극대화될 수밖에 없었다.\n결과는 대성공이었다. 나는 오랜 시간 머물렀던 단순 설비 유지 보수의 영역을 마침내 벗어나, 현장의 가장 중추적인 역할을 담당하는 '위험물 관리자'이자 '고압가스 관리자'로 당당히 선임되어 새 업무에 임하게 되었다. 단순히 기계를 고치는 엔지니어에서, 이제는 공장 전체의 안전 시스템을 설계하고 고위험 물질의 유출을 방지하며 관련 법적 규제를 총괄하는 고부가가치 전문 관리자로 완벽하게 직무 궤도를 수정한 것이다.\n직무 전환 이후 나의 일상은 크게 달라졌다. 책임감의 무게는 무거워졌지만, 내 전문성을 토대로 현장의 안전을 통제하고 지켜내고 있다는 자부심은 비교할 수 없을 만큼 커졌다. 기업 역시 검증된 직무 능력을 갖춘 인재를 적재적소에 배치함으로써 안전사고 리스크를 획기적으로 줄일 수 있게 되었다며 높은 만족도를 표했다. 직무능력은행이라는 다리가 없었다면, 내 자격증과 경력은 여전히 불투명한 가능성으로만 남아 오랜 시간 방황했을지도 모른다.\n내가 경험한 직무능력은행은 단순히 서류 발급을 도와주는 일회성 플랫폼이 아니었다. 그것은 열심히 살아온 나의 과거를 객관적인 가치로 환산해 주고, 내가 가야 할 미래의 방향성을 명확히 짚어주는 평생의 커리어 나침반이었다.\n대한민국의 수많은 직장인과 미취업자, 그리고 이·전직을 꿈꾸는 기술자들은 저마다의 일터에서 훌륭한 역량을 쌓아가고 있다. 그러나 자기 능력을 기업과 사회에 '어떻게 증명해야 하는지' 몰라 서류의 장벽 앞에서 좌절하는 경우가 많다. 그런 의미에서 직무능력은행은 개인에게는 자신의 땀방울을 가장 확실하게 증명해 주는 신용카드와 같고, 기업에게는 인재의 참모습을 가려내어 채용 오류를 줄여주는 완벽한 돋보기와 같다.\n가스 산업기사와 위험물 기능장이라는 내 자격들이 직무능력은행을 통해 빛을 발하며 나를 전문 관리자의 반열에 올려놓았듯, 이 제도가 더욱 널리 확산하여 대한민국 전 산업 현장에 정착되기를 기대한다. 학벌이나 배경이 아닌, 오직 묵묵히 쌓아 올린 '실제 직무 능력'만으로 정당하게 평가받고 도약할 수 있는 사회. 그 건강하고 투명한 내일을 만드는 중심에 직무능력은행이 핵심적인 역할을 할 것이라 확신한다. 나 또한 여기에 안주하지 않고, 내 직무능력은행 계좌에 더 가치 있는 역량들을 꾸준히 저축하며 기술자로서의 성장을 멈추지 않을 것이다.",
    "tags": [
      "#직무능력은행",
      "#한국산업인력공단",
      "#위험물기능장",
      "#가스산업기사",
      "#엔지니어커리어"
    ]
  },
  {
    "id": "c-2026-culture-gender",
    "year": "2026",
    "title": "2026년 문화체육관광 분야 양성평등 콘텐츠 공모전",
    "pieceTitle": "편견의 암벽을 허물고, 함께 완등하는 성평등 루트 (스토리 부문)",
    "category": "idea",
    "categoryName": "아이디어·성평등수기",
    "organization": "문화체육관광부",
    "submissionDate": "2026.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "남성 중심적이고 과격한 근력 위주로 인식되던 스포츠 클라이밍 현장에서, 유연성과 섬세한 밸런스로 자신만의 홀드를 개척하는 여성 클라이머들과의 동행을 통해 체육 현장 속 뿌리 깊은 편견의 벽을 허물어낸 감동적 체험 수기.",
    "coreConcept": "\"힘으로 억누르는 등반이 아닌, 각자의 신체 특성에 맞는 루트 파인딩과 격려가 완등의 열쇠이다\" - 생활체육 양성평등의 본질.",
    "futureUsage": "문체부 체육문화 공모전, 생활체육 수기, 청년 문화예술 에세이 집필 시 활용.",
    "fileName": "(김남현) 문화체육관광 분야 양성평등 콘텐츠 공모전 출품작.hwpx",
    "fileSize": "73 KB",
    "fullContent": "스토리 부문 : 체험 수기\n제목 :\n편견의 암벽을 허물고, 함께 완등하는 성평등 루트\n강인한 근력과 과감한 신체 움직임이 강조되는 스포츠 클라이밍은 오랫동안 남성의 전유물이거나 남성 중심적인 문화가 강하게 자리 잡은 대표적인 체육 공간이었습니다. 많은 클라이밍 동호회와 인공 암벽장 환경에서 여성 참여자들은 신체적 한계를 예단하는 시선이나 부상을 우려하는 주변의 과도한 간섭과 마주해야 했고, 반대로 남성 참여자들은 강인함을 증명해야 한다는 무거운 압박감을 은연중에 느끼곤 했습니다. 이러한 성별 이분법적인 고정관념은 동호회 구성원들이 스포츠 본연의 즐거움을 누리는 데 장벽이 되었으며, 나아가 문화체육관광 분야 전반의 건강한 발전을 저해하는 원인이 되기도 했습니다. 이에 우리 클라이밍 동호회는 양성평등의 중요성을 깊이 인식하고, 일상적인 스포츠 공간 내에 만연한 편견을 깨뜨려 모두가 동등하게 벽을 오를 수 있는 장기적이고 지속 가능한 양성평등 문화환경을 조성하고자 작은 변화를 시작하게 되었습니다.\n우리 동호회가 시도한 변화의 핵심은 암벽 위와 아래에서 무의식적으로 작동하던 성별 고정관념을 성인지적 관점에서 올바르게 교정하고, 구성원 간의 진정한 공감대를 형성하는 것이었습니다. 가장 먼저 등반 난이도나 문제를 설명할 때 흔히 쓰이던 남성용 루트 혹은 여성 맞춤형 무브라는 이분법적 표현을 완전히 폐기했습니다. 키가 크고 근력이 강한 이들 중심의 과격한 다이노 동작만이 정답이 아님을 공유하며, 유연성과 정교한 균형 감각, 그리고 코어의 힘을 활용한 정적인 무브 역시 훌륭한 완등 솔루션이 될 수 있음을 서로 증명해 나갔습니다. 남성 회원들은 여성 회원들의 뛰어난 유연성과 정교한 루트 파인딩 능력을 배우고, 여성 회원들은 남성 회원들의 과감한 무게중심 이동과 리치 활용법을 벤치마킹하면서, 우리는 성별의 차이가 아닌 신체적 다양성의 상호보완을 자연스럽게 체득했습니다. 또한 타인의 등반 능력이나 신체를 성별과 결부 지어 평가하지 않고 기술과 노력에 초점을 맞춰 구체적으로 피드백하는 문화를 정착시켰습니다. 이러한 우리의 일상적인 실천 과정과 성적으로 평등한 소통 방식을 사진과 글로 기록하여 동호회 내부와 주변 암장 회원들에게 소소하게 공유하기 시작했습니다. 거창한 선언은 아니었지만, 성별에 구애받지 않고 안전하게 소통하는 우리의 모습은 주변 클라이머들에게 신선한 인식개선의 계기가 되었고, 일상에서 누구나 쉽게 실천할 수 있는 현실적인 양성평등 약속으로 주변의 깊은 공감을 끌어냈습니다.\n클라이밍 동호회라는 일상적인 체육 공간에서 시작된 이 작은 언어와 문화의 전환은 공간에 씌워진 성별 편견의 굴레를 벗겨낼 때 스포츠의 진정한 가치가 실현된다는 점을 증명해 주었습니다. 편견의 장벽을 허물고 나니 우리 앞에는 성별에 따른 소외나 대립 대신 오직 즐거운 도전과 서로를 향한 건강한 연대만이 남게 되었습니다. 우리가 마주하는 암벽은 온 힘을 다해 완등해야 할 대상이지, 누군가의 참여를 제한하거나 한계를 규정짓는 성별의 벽이 되어서는 안 됩니다. 체육과 문화 공간 내의 진정한 양성평등은 거창한 제도보다 일상에서 서로를 동등한 파트너로 바라보는 시선의 변화에서 시작됩니다. 이 글을 통해 우리의 작은 실천이 많은 이들의 인식개선을 이끄는 소중한 마중물이 되어, 문화체육관광 분야 전반에 장기적이고 뿌리 깊은 양성평등 문화환경이 차근차근 조성되기를 바랍니다.",
    "tags": [
      "#문체부",
      "#양성평등콘텐츠",
      "#스포츠클라이밍",
      "#루트파인딩",
      "#생활체육"
    ]
  },
  {
    "id": "c-2026-gov-committee",
    "year": "2026",
    "title": "화성시 제4기 청년정책조정위원회 청년위원 공모",
    "pieceTitle": "화성시 제4기 청년정책조정위원회 청년위원 지원 및 위촉",
    "category": "governance",
    "categoryName": "공공 거버넌스·청년",
    "organization": "화성시",
    "submissionDate": "2026.04",
    "status": "awarded",
    "result": "청년위원 최종 선정 & 위촉 🏛️",
    "badge": "🏛️ 위원 위촉",
    "badgeClass": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    "synopsis": "화성시 청년기본조례에 근거한 청년정책 최고 심의기구인 청년정책조정위원회에 지원하여 10년 차 엔지니어 실무 경험과 복지·행정 전문성을 인정받아 청년위원으로 공식 위촉됨.",
    "coreConcept": "청년의 목소리를 화성시 조례 개정, 청년 일자리 예산 심의, 정책 모니터링 등 제도권 행정에 직접 반영하는 거버넌스 파트너십.",
    "futureUsage": "시정 참여, 지자체 위원회 활동, 정책 거버넌스 역량 증명 및 대외 활동 이력 레퍼런스.",
    "fileName": "제 4기 화성시 청년정책조정위원회 제출 서류.hwpx",
    "fileSize": "79 KB",
    "fullContent": "「화성시 청년정책조정위원회」청년위원 지원서\n접수번호\n성 명\n한글\n김남현\n한자\n金男炫\n영문\nKim Namhyeon\n성 별\n남성\n생년월일\n1996.01.03\n만 ( 30 ) 세\n연 락 처\n주 소\n경기도 화성시 동탄구 동탄원천로 354-16 (능동)\n(우편번호 : 18423 )\n휴대폰\n010-2232-3442\ne-mail\ntr788@naver.com\n직업 및\n현 소속기관\n직장명\n삼성전자\n직위\nCL II (대리급)\n부서명\nFoundry Diffusion기술팀\n담당업무\n반도체 엔지니어링\n소재지\n경기 화성시 병점구 삼성전자로 1\n최종학력\n졸업년월일\n학교명\n학 위\n(학사, 석사, 박사)\n졸업구분\n(졸업, 졸업예정)\n전공\n2024-08-21\n한국방송통신대학교\n학사\n졸업\n산업공학과\n(사회복지학과 추가 재학 중)\n주요경력 및\n활동사항\n근무(활동)기관\n근무(활동)기간\n(년.월~ 년.월.)\n직위\n담당업무(활동내역)\n삼성전자\n2014.03 ~\nCL II\n반도체 엔지니어링\n화성시\n청년정책협의체\n2026.02 ~\n분과장\n동탄구 교육, 참여, 권리 분과장\n활동내용\n상세기술\n◦삼성전자 반도체 엔지니어로서 인사팀장 주관 인사 기획TF 분과장 역임\n◦삼성전자 안전 문화 TF 우수상 및 팀 내 위험물기능장 7명 양성\n◦화성시 청년정책협의체 동탄구 교육, 참여, 권리 분과장 역임\n특기 사항\n◦ 2027 화성시 주민참여 예산 청년참여예산 13건 제안\n◦ [\n청년 ‘함께 밥상’ 소셜 다이닝] 사업 검토 중 (8/20 대면 회의 참석 完)\n◦ 2025 장애인과 함께하는 문예글짓기 공모전 국회국방위원장 대상 수상\n전문·활동 분야\n■ 참여·권리\n□ 문화·여가\n■ 교육·자립 □ 소득·일자리 □ 기후환경·복지\n□ 기타(\n)\n본인은 위와 같이 「화성시 청년정책조정위원회」 위원으로 지원합니다.\n2026.08. 27.\n신청인: 김남현 (서명)\n화성시장 귀하\n【서식 2】\n자 기 소 개 서\n구분\n내용\n신청자\n이름\n생년월일\n김남현\n1996.01.03 (30세)\n① 지원동기 및 청년정책에 관심을 가지게 된 계기\n삼성전자 반도체 엔지니어로서 인사 기획 TF 분과장 및 안전 문화 TF를 이끌며, 조직 체계 조정 및 프로세스 심의·의결의 중요성을 다졌습니다. 산업공학 전공의 시스템 심의·최적화 역량과 사회복지학을 추가 전공하며 세대 통합적 시각을 바탕으로 정책의 구조적 타당성을 다각도로 검토해 왔습니다.\n화성시 청년정책협의체 동탄구 교육·참여·권리 분과장으로 활동하며 청년 현안의 종합적 조정과 제도적 수립의 필요성을 체감했습니다. 정책의 기획부터 심의·의결, 조정에 이르는 정책조정위원회의 핵심 역할을 완수하고 화성시 청년정책의 실효성을 체계적으로 높이고자 지원했습니다.\n② 청년정책과 관련된 개인 활동 사항\n현장 정책 발굴 및 수렴: 동탄구 교육·참여·권리 분과장으로서 청년 의견을 종합하여 2027 화성시 주민참여예산 청년참여예산 13건 제안을 주도했습니다. '청년 함께 밥상(소셜 다이닝)' 사업을 검토하고 대면 회의를 통해 청년 고립 해소 및 소통을 위한 정교한 대안을 제시하고 있습니다.\n조직 관리 및 심의 역량 검증: 삼성전자 인사 기획 TF 분과장 역임, 안전 문화 TF 우수상 및 위험물 기능장 7명 양성하였으며, 2025 장애인과 함께하는 문예 글짓기 공모전 국회 국방위원장 대상을 통해 사회적 공감 능력을 정립했습니다.\n구분\n내용\n신청자\n이름\n생년월일\n김남현\n1996.01.03 (30세)\n③\n청년위원 역할에 대한 이해 및 위원으로서의 활동 계획\n청년정책조정위원회 위원은 화성시 청년정책의 중장기 방향성을 설정하고 주요 사업의 실효성을 체계적으로 심의·평가하는 시정 핵심 거버넌스입니다.\n통합적 정책 심의 및 성과 관리:\n개별 사업 검토를 넘어, 화성시 청년정책 기본계획과의 정렬성, 부서 간 중복 여부 및 예산 집행의 효율성을 산업공학적·시스템적 시각에서 거시적으로 평가하겠습니다.\n지속 가능한 청년 생태계 조성:\n사회복지학적 관점을 바탕으로 청년정책이 일회성 지원에 그치지 않고, 지역사회 및 타 세대 복지 체계와 선순환을 이루는 포용적 정책 방향을 제시하겠습니다.\n④\n화성시 청년에\n게 가장 필요한 정책과 자신의 전문·활동 분야에 어떻게 활용할 것인지에 대해 적으시오.\n화성시 청년에게 가장 필요한 것은 ‘권역별·단계별 청년 삶 전반을 아우르는 거시적 정책 로드맵’입니다.\n산업·교육·자립을 잇는 거시적 체계 구축:\n산업 현장 엔지니어 및 TF 리더십 경험을 바탕으로, 청년의 역량 개발이 지역 산업 및 정주 여건 확충으로 이어지도록 거시적 정책 구조를 보완하겠습니다.\n청년 참여 거버넌스의 제도적 안착:\n협의체 활동 노하우를 살려 다양한 청년들의 목소리가 화성시의 중장기 발전 전략에 안정적으로 반영되는 제도적 거버넌스 기반을 마련하겠습니다.\n2026년 8월 27일 신청인: 김남현\n(서명)\n【서식3】\n개인정보 수집·이용 및 제공 동의서\n□ 개인정보 수집․이용에 관한 고지사항\n개인정보의 수집․이용 목적\n본인 식별 및 선발 기초자료로 활용\n수집하려는 개인정보의 항목\n성명, 주소, 생년월일, 연락처, E-mail, 학력, 경력사항 등\n지원서 기재사항 및 제출서류 기재 사항\n개인정보의 보유 및 이용기간\n접수일부터 조사목적 달성 시까지 보유 ․ 이용. 다만, 위원회에\n위촉되는 경우, 개인정보는 해촉 시까지 활용합니다.\n개인정보 수집․이용에 관하여 동의를 거부할 권리가 있으며\n동\n의 거부 시에는 지원서 접수를\n할 수 없습니다.\n개인정보의 수집 및 이용목적 동의 ■ 동의함 □ 동의하지 않음\n□ 개인정보의 제공에 관한 고지사항\n개인정보를 제공받는 자\n지방자치단체\n개인정보를 제공 받는 자의 개인정보 이용 목적\n제출서류 사실여부 확인\n제공하는 개인정보의 항목\n이름, 생년월일, 연락처, 주민등록주소 등\n개인정보를 제공받는 자의 개인정보 보유 및 이용 기간\n조사목적 달성 시까지\n개인정보의 제공에 관하여 동의를 거부할 수 있으며, 동의 거부 시에는 위원 선정 시 불이익이 있을 수 있습니다.\n개인정보의 제공 동의 ■ 동의함\n2026년 8월 27일\n신청인: 김남현\n(서명)\n화성시장 귀하",
    "tags": [
      "#화성시",
      "#청년정책조정위원회",
      "#청년위원",
      "#위촉장",
      "#시정참여"
    ]
  },
  {
    "id": "c-2026-gov-council",
    "year": "2026",
    "title": "화성시 제5기 청년정책협의체 위원 및 3분과장 공모",
    "pieceTitle": "화성시 제5기 청년정책협의체 위원 및 분과장 위촉",
    "category": "governance",
    "categoryName": "공공 거버넌스·청년",
    "organization": "화성시",
    "submissionDate": "2026.05",
    "status": "awarded",
    "result": "위원 및 3분과장 위촉 🏛️ (화성시장 위촉장 수여)",
    "badge": "🏛️ 분과장 위촉",
    "badgeClass": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    "synopsis": "화성시 거주 청년들의 정책 제안 및 공론화 기구인 청년정책협의체에 지원하여 분과장으로 선임되고 화성시장 위촉장을 수여받아 관내 청년 복지·일자리 의제 발굴을 이끔.",
    "coreConcept": "청년 당사자 간의 네트워크 구축, 정책 워크숍 진행, 권역별(동탄·서남부) 청년 격차 해소 방안 주도.",
    "futureUsage": "지역 청년 네트워크, 공공 분과장 리더십, 민관 협치 프로젝트 포트폴리오.",
    "fileName": "[동탄_김남현] 제5기 청년정책협의체 지원신청서.hwp",
    "fileSize": "83 KB",
    "fullContent": "[붙임1] 지원 신청서 서식\n제5기 화성시 청년정책협의체 지원 신청서\n□ 인적사항\n \n성명\n김남현\n생년월일\n1996년 1월3일\n성별\n남성\n주소\n※ 주민등록상 주소\n경기도 화성시 동탄원천로 354-16 아르젠 3차 오피스텔 412호\n연락처\n010-2232-3442\n이메일\ntr788@naver.com\n소속\n전 : 삼성전자 Foundry사업부\n현 : 화성오산교육지원청 병점고등학교 교무기획부\n지원자격\n※ 중복 체크 가능\n■ 화성시 거주 □ 화성시 소재 학교 재학\n■ 화성시 소재 직장(자영업 포함) 근무 □ 화성시 소재 청년단체 등 활동\n활동지역\n※ 권역별 구성에 활용\n□ 만세\n□ 효행\n□ 병점\n■ 동탄\n□ 관심분야 및 자기소개 ※ 별지 작성 가능\n \n관심분야\n(희망분과)\n1순위( 교육 ) 2순위( 복지·문화 ) 3순위( 주거 )\n①일자리 ②주거 ③교육 ④복지·문화 ⑤참여·권리\n※ 분과 구성에 활용되며, 분과별 적정 인원 구성을 위해 지망 외 분과로 배치될 수 있음\n관련 경력\n사회 공헌 및 배려 계층 지원 활동: ‘베프지도’ 프로젝트에 참여하여 장애인 편의시설 데이터 358건을 직접 수집·매핑 사회적 가치 실현에 기여\n자기소개\n조직 내 교육 및 인사 혁신 주도: 인사제도 개편 TF 분과장으로서 제도를 기획하고, 사내 교육 플랫폼(SAMSUNG-U) 내 영문법 콘텐츠를 편집·배포하여 동료들의 역량 강화를 이끌었습니다.\n현장 안전 및 환경 개선 전문가: 위험물기능장, 가스산업기사 등 전문 자격을 바탕으로 가스 감지기 오동작 예방 및 환경안전 사고 지점을 선제적으로 개선하여 다수의 사내 혁신상을 수상했습니다.\n지원동기\n화성시 청년 정책이 단순히 예산을 집행하는 것을 넘어, 제가 경험한 '공정 개선'처럼 투입 대비 최대의 효과(Output)를 낼 수 있는 구조를 만들고자 지원했습니다.\n제조 센터에서 인정받은 저의 '현장 밀착형 개선 의지'를 화성시 청년 정책 현장에 이식하여, 청년들이 일터와 삶터에서 겪는 불편함을 제거하는 데 앞장서겠습니다.\n활동계획 등\n복지 및 문화: '베프지도' 참여 경험을 확장하여, 화성시 내 청년 공간 및 복지 시설의 접근성을 데이터화하고 이를 시각화하여 청년들이 혜택을 쉽게 누릴 수 있도록 개선하겠습니다.\n주거 및 안전: 위험물기능장 및 환경안전 수상 경력을 활용해, 청년 밀집 거주 지역과 창업 공간의 '안전 인프라 모니터링' 활동을 수행하고 체계적인 안전 가이드를 수립하겠습니다.\n위 기재 사항이 모두 사실임을 확인하며, 제5기 화성시 청년정책협의체에 지원합니다.\n 2026년 2월 5일\n신청인: 김남현 (서명)\n화성시장 귀하\n[붙임2] 개인정보 수집·이용 동의서 서식\n \n개인정보 수집 ․ 이용 동의서\n화성시에서는 청년정책협의체 위원 모집을 위해 아래와 같은 개인정보를 수집합니다.\n귀하께서 제공한 모든 정보는 다음의 목적을 위해 활용하며 목적 이외의 용도로는 사용되지 않습니다.\n□ 개인정보 수집‧이용 내역\n \n개인정보\n수집ㆍ이용 목적\n- 화성시 청년정책협의체 구성 및 운영\n- 화성시 청년청소년정책과 및 청년지원센터의 정책, 프로그램, 행사 등에 관한 정보제공과 홍보\n수집·이용하려는 개인정보의 항목\n- 성명, 성별, 생년월일, 주소, 휴대폰번호, 이메일, 직업, 학력사항, 경력 및 활동사항, 기타 위촉을 위해 본인이 작성한 관련 정보\n개인정보의\n보유 및 이용기간\n- 지원서 제출 후 위촉기간 만료 시 또는 지원서 삭제 요청 시까지\n※ 귀하는 위의 개인정보 수집‧이용에 대한 동의를 거부할 권리가 있습니다. \n다만, 거부 시에는 「화성시 청년정책협의체」 지원 접수가 되지 않습니다.\n개인정보 수집 및 이용에 동의하십니까?\n개인정보 수집 및 이용에 동의함 ■ 동의하지 않음 □\n2026년 2 월 5 일\n \n신청인 : 김남현 (서명)\n화성시장 귀하",
    "tags": [
      "#화성시",
      "#청년정책협의체",
      "#3분과장",
      "#화성시장위촉",
      "#청년거버넌스"
    ]
  },
  {
    "id": "c-2026-gov-fgi",
    "year": "2026",
    "title": "「화성시 청년친화도시 조성을 위한 기본 연구」 FGI 패널 참여",
    "pieceTitle": "청년친화도시 조성을 위한 심층 집단 면접(FGI) 전문가 패널 참여",
    "category": "governance",
    "categoryName": "공공 거버넌스·청년",
    "organization": "화성시복지재단",
    "submissionDate": "2026.05",
    "status": "completed",
    "result": "연구 패널 참여 완료",
    "badge": "🏛️ 연구 패널",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "화성시복지재단이 주관하는 청년친화도시 조성 기본계획 수립 연구에서 청년 당사자 심층 면접(FGI) 패널로 참여하여, 동탄권과 산업단지권 청년들의 주거, 문화, 교통 체감 애로사항과 실효성 있는 정책 방향을 심층 제언함.",
    "coreConcept": "정성적 인터뷰 데이터를 기반으로 화성시 조례 및 5개년 청년 정책 마스터플랜 수립에 기여.",
    "futureUsage": "지자체 정책 연구 용역 자문 및 FGI 패널 활동 레퍼런스.",
    "fileName": "[김남현]「화성시 청년친화도시 조성을 위한 기본 연구」 FGI 참여 동의서.hwp",
    "fileSize": "37 KB",
    "fullContent": "화성시복지재단 수당지급을 위한 개인정보 수집·이용·제3자 제공·위탁 및 수당지급 동의서\n■ 개인정보\n \n지급사항\n「화성시 청년친화도시 조성을 위한 기본 연구」 FGI 참여 수당\n지급액\n금70,000원\n성명\n주민번호\n계좌번호(은행명)\n김남현\n960103 - 1550813\n110-440-312597 (신한은행)\n※ 본인 명의의 계좌 외에는 사용하실 수 없습니다.\n■ 개인정보의 수집·이용에 관한 동의\n \n수집·이용 목적\n「화성시 청년친화도시 조성을 위한 기본 연구」 FGI 참여 수당\n수집 항목\n성명, 주민등록번호, 계좌번호, 은행명\n보유·이용 기간\n5년간 보관 (관련 법령에 따름)\n※ 위의 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 다만 거부 시 수당지급이 불가능 할 수 있습니다.\n※ 고유식별정보(주민등록번호)는 「국세기본법 시행령 제68조」 근거에 따라 수집·이용합니다.\n※ 「개인정보보호법 제15조(개인정보의 수집·이용)」에 따라 본인의 개인정보 수집·이용 및 수당 지급에 동의하십니까?\n■ 동의함 □ 동의하지 않음\n■ 개인정보의 제3자 제공에 관한 동의\n \n제공 받는 자\n국세청, 화성시청, 세무대리인\n제공 목적\n세무신고 및 이사회, 시 보고\n제공 항목\n성명, 주민등록번호, 지급액\n보유·이용 기간\n이용기간 : 해당 서비스가 제공되는 기간 / 보유기간 : 국세청의 규정에 따른 기간\n※ 위의 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있으며, 다만 거부 시 수당지급이 불가능 할 수 있습니다.\n※ 「개인정보보호법 제17조(개인정보의 제공)」 제1항에 따라 본인의 개인정보를 제3자에게 제공 및 수당 지급 관련 활용에 동의하십니까?\n■ 동의함 □ 동의하지 않음\n■ 개인정보 처리 위탁에 관한 동의\n \n위탁 받는 자\n국세청, 화성시청, 세무대리인\n위탁 목적\n세무신고 및 이사회, 시 보고\n위탁 항목\n성명, 주민등록번호, 지급액\n보유·이용 기간\n이용기간 : 해당 서비스가 제공되는 기간 / 보유기간 : 국세청의 규정에 따른 기간\n※ 위의 개인정보처리 위탁에 대한 동의를 거부할 권리가 있으며, 다만 거부 시 수당지급이 불가능 할 수 있습니다.\n※ 「개인정보보호법 제26조(업무위탁에 따른 개인정보의 처리 제한)」에 따라 본인의 개인정보 처리 위탁에 동의하십니까?\n■ 동의함 □ 동의하지 않음\n■ 화성시복지재단 경영평만족도 조사 동의\n \n화성시복지재단의 경영평가를 위하여 실시되는 고객만족도 조사에 참여할 수 있도록 개인정보가 수집·이용되는 것에 동의하거나, 원하지 않을 경우 이를 거부할 권리가 있음을 확인합니다.\n■ 동의함 □ 동의하지 않음\n■ 고유식별정보(주민등록번호) 처리에 대한 별도 동의\n \n본인은 화성시복지재단이 강사비 및 수당 지급, 세무처리 등 법령상 의무 이행을 위하여 「국세기본법 시행령 제68조」 및 「개인정보보호법 제24조의2(고유식별정보의 처리 제한)」에 근거하여 주민등록번호를 수집·이용·제공 및 위탁 처리하는 것에 동의합니다.\n■ 동의함 □ 동의하지 않음\n■ 개인정보 취급자의 연락처 : 화성시복지재단 업무담당자(031-296-9841)\n2026년 7월 26일 浥%％ÿ\n \n동의인 : 김남현 (서명 또는 인) \n(재)화성시복지재단 대표이사 귀중\n인터뷰 당일\n이름 기재 후 사인하거나 도장",
    "tags": [
      "#화성시복지재단",
      "#청년친화도시",
      "#FGI패널",
      "#심층인터뷰",
      "#연구참여"
    ]
  },
  {
    "id": "c-2026-gov-military",
    "year": "2026",
    "title": "병무청 제4기 공정병역 모니터링단 지원",
    "pieceTitle": "제4기 공정병역 모니터링단 지원서",
    "category": "governance",
    "categoryName": "공공 거버넌스·청년",
    "organization": "병무청",
    "submissionDate": "2026.03",
    "status": "submitted",
    "result": "지원서 제출 완료",
    "badge": "📤 지원 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "사회복무요원 복무 경험을 바탕으로 병역 판정 검사, 복무 환경 개선, 공정 병역 이행 모니터링 및 청년 장병 권익 보호를 위한 시민 모니터링단에 지원함.",
    "coreConcept": "현장 체감형 병역 행정 개선 아이디어 및 병무 행정 투명성 제고 방안 제언.",
    "futureUsage": "공공 감시단, 옴부즈만, 병무 행정 혁신 공모 지원 시 기초 서류로 활용.",
    "fileName": "(960103_김남현) 제4기 공정병역 모니터링단 지원서.docx",
    "fileSize": "586 KB",
    "fullContent": "병무청 제4기 공정병역 모니터링단 지원 신청서 및 개인정보 수집 이용 동의서 제출 완료.",
    "tags": [
      "#병무청",
      "#공정병역모니터링단",
      "#병무행정",
      "#청년권익",
      "#공공모니터링"
    ]
  },
  {
    "id": "c-2026-gov-peer-school",
    "year": "2026",
    "title": "2026년 화성시 청년또래학교 강사 양성 교육 신청",
    "pieceTitle": "청년또래학교 ‘또래강사’ 지원 신청서 및 자기소개서",
    "category": "governance",
    "categoryName": "공공 거버넌스·청년",
    "organization": "화성시청년지원센터 HEY",
    "submissionDate": "2026.06",
    "status": "submitted",
    "result": "선정 및 교육 이수",
    "badge": "🏛️ 강사 지원",
    "badgeClass": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    "synopsis": "화성시 청년지원센터 HEY에서 운영하는 또래학교 강사 양성 과정에 지원하여, 10년 차 엔지니어의 자격증 취득 노하우, 에세이 글쓰기 및 커리어 관리 비법을 지역 청년들에게 전수하는 강사로 지원함.",
    "coreConcept": "청년이 청년을 가르치는 상호 멘토링 생태계 조성. 지식 나눔과 로컬 커뮤니티 활성화.",
    "futureUsage": "청년 강사, 멘토링 프로그램, 평생교육 강사 활동 포트폴리오로 활용.",
    "fileName": "[붙임 1, 2] 모집신청서 & [붙임 1]자기소개서.hwp",
    "fileSize": "173 KB",
    "fullContent": "[붙임 1] 지원 신청서\n*파란색 글씨는 추가 설명 및 예시이므로 삭제 후 작성해주세요.\n \n화성시청년지원센터HEY\n2023년 청년또래학교 ‘또래강사’ 지원 신청서\n성명\n김남현\n생년월일\n1996년 01월 03일\n주소\n경기도 화성시 동탄구 동탄원천로 354-16, 412호 (능동, 동탄아르젠3차)\n핸드폰 번호\n010-2232-3442\n이메일\ntr788@naver.com\n소속\n ( 　　 )\n화성시\n 　　　　　　 　　　　 　　　　 ( 　 ）\n활동경력\n및\n자격사항\n활동명 / 소속 등\n년/월\n내용\n삼성전자 사내 위험물 기능장 양성반 운영\n24년 3월 ~ 5월\n위험물 기능장 자격 취득을 위한 OT 강의\n(위험물 기능장, 인간공학기사, 산업안전기사, 가스산업기사, 직업상담사 2급 독학 취득함)\n삼성전자 인사팀 TF 분과장\n23년 3월 ~ 5월\n종합 발표 자료 정리 및 사장단 15분 PT 수행\n제5기 화성시 청년정책협의체 동탄구 3분과장\n26년 2월 ~\n교육, 참여, 권리 분과장으로서 분과 회의 주관 및 회의록 작성\n자기소개\n(지원동기)\n삼성전자 사내 위험물 기능장 양성반에서 OT 강의를 진행하고, 인사팀 TF 분과장으로서 사장단 대상 15분 PT를 수행하며 전문 지식 전달의 가치를 배웠습니다. 최근 자격증 취득을 계기로 성인 대상 평생학습 강의로 영역을 확장하고자 지원했습니다. 임직원 및 임원진 대상의 스피치 경험이 있으나, 부족한 전달력을 더 정교하게 보완하여 화성시 청년들에게 깊이 있는 통찰을 전하겠습니다.\n홍보계획\n제5기 화성시 청년정책협의체 동탄구 3분과장으로 활동 중으로, 지자체 네트워크를 적극 활용하겠습니다. 화성시 강사 운영 플랫폼에 프로그램을 등록하고, 공공기관 및 지자체 운영 온·오프라인 홍보 채널(시청 홈페이지, 지역 소식지 등)에 정식 문의하여 공신력을 확보하겠습니다. 분과 회의 주관 경험을 살려 청년 맞춤형 온·오프라인 홍보를 입체적으로 전개하겠습니다\n향후계획\n및\n기대효과\n프로그램 수료 후 화성시 평생학습 강사로서 직무 역량 강화 및 실무 능력 향상 중심의 성인 대상 전문 과정을 정기 개설하겠습니다. 청년또래학교를 통해 무대 장악력과 강의 전달력을 완성함으로써, 수강생들에게는 실전형 지식을 제공하고 화성시 지역사회에는 청년 인재가 주도하는 실천적 평생 교육 생태계를 활성화하는 선순환 효과를 기대합니다.\n강의소개\n강의특징\n대기업 사장단의 까다로운 눈높이를 맞췄던 15분 압축 보고 경험, 그리고 기능장 자격증 양성반을 이끈 노하우를 통째로 갈아 넣은 실전형 평생학습입니다. 지루한 이론 나열은 사절합니다. 철저히 성인 학습자의 직무 효율에 맞춰 방대한 전문 지식을 핵심만 쏙 골라 직관적으로 풀어냅니다. 듣자마자 내일 출근해서 바로 써먹는 고효율 강의를 수강생 모두와 함께하겠습니다. 또한, 화성시 청년또래학교 과정을 통해 성숙한 강의 스킬을 발휘하겠습니다.\n \n‘또래강사’ 강의계획안\n강의명\n이론 없이 합격하는 역발상 독학법: 자격증 취득부터 커리어 빌드업까지\n강의 분야\n기술/역량강화\n(자격증, 영어, 글쓰기 등)\n라이프 스타일\n(심리, 영화, 셀프 인테리어 등)\n취미/창작\n(디자인, 자개공예, 디제잉 등)\n기타\nV\n강의 목표\n방대한 이론서를 정독하지 않고, 실전 기출문제를 통해 핵심 이론을 역추적하는 효율적 학습법을 습득하여 빠르게 자격증을 취득하고 이를 커리어 확장(이직·승진)의 무기로 활용한다.\n운영방식\n정규( 3 )회\n수강 인원\n최소 ( 8)명, 최대 ( 10 )명\n강의 가능 일시 ※가능한 모든 시간 체크, 추후 협의를 통해 변동 될 수 있음\n월\n화\n수\n목\n금\n토\n10-12시\n10-12시\nV\n14-16시\n13-15시\nV\n16-18시\nV\n18-20시\nV\nV\n15-17시\nV\n19-21시\nV\nV\n세부 계획안 ( 1회 2시간 총 3회 ) 최대 3회까지 가능\n회차\n날짜\n시간\n내용\n비고(준비물)\n소요예산안\n1\n10/5\n(월)\n19:00 ~ 20:00 (60분)\n· 기본서 정독 탈피: 기출문제 선행을 통한 출제 패턴 파악\n개인 필기구,\n관심 자격증 목록\n워크북\n100000원\n20:00 ~ 20:10 (10분)\n· 쉬는 시간 (10분)\n20:10 ~ 21:00 (50분)\n· 사내 양성반 운영 경험을 녹인 오답 중심 핵심 요약 기술\n2\n10/12\n(월)\n19:00 ~ 20:00 (60분)\n· 위험물기능장 및 가스산업기사 실제 취득을 통한 현업 적용 사례\n개인 필기구\n태블릿 및 노트북\n300000원\n20:00 ~ 20:10 (10분)\n· 쉬는 시간 (10분)\n20:10 ~ 21:00 (50분)\n자격증 취득을 사내 핵심 프로젝트 및 TF 기회로 연결하는 법\n3\n10/19\n(월)\n19:00 ~ 20:00 (60분)\n내 몸값을 높이는 포트폴리오 브랜딩\n개인 필기구,\n강의 피드백 페이퍼, 포트폴리오 및 경력기술서\n100000원\n20:00 ~ 20:10 (10분)\n· 쉬는 시간 (10분)\n20:10 ~ 21:00 (50분)\n자격증 스펙을 이력서와 경력기술서에 매력적으로 녹여내는 법\n \n강의 운영비(재료비 등) 예산 계획안\n강좌명\n이론 없이 합격하는 역발상 독학법: 자격증 취득부터 커리어 빌드업까지\n강사명\n김남현\n모집인원\n8~10명\n인당 재료비\n50000원\n회차\n품목\n단가\n수량\n공급가액\n기타\n(택배비 등)\n1\n워크북 인쇄비\n10,000\n10\n100,000\n지자체 시설 활용 시 절감 예상\n2\n실습용 교육 태블릿 및 노트북 대여료\n30,000\n10\n300,000\n지자체 시설 활용 시 절감 예상\n3\n포트폴리오 및 경력기술서 인쇄비\n10,000\n10\n100,000\n지자체 시설 활용 시 절감 예상\n4\n5\n6\n7\n8\n9\n10\n11\n12\n합계\n500,000 \\\n총액\n500,000 \\\n※ 작성 공간이 모자랄 경우 형식을 유지하며 추가로 작성해주세요.\n위 내용은 사실이며, 2026년 또래강사로 선발될 경우 성실히 활동할 것을 약속합니다.\n 2026년 06 월 26 일\n작성자 : 김남현 (인)",
    "tags": [
      "#화성시청년지원센터HEY",
      "#청년또래학교",
      "#또래강사",
      "#자기계발멘토링",
      "#지식나눔"
    ]
  },
  {
    "id": "c-2026-art-hanriver",
    "year": "2026",
    "title": "제23회 아름다운 한강사진 공모전",
    "pieceTitle": "한강의 숨결과 잔물결 (사진 출품작 3점)",
    "category": "idea",
    "categoryName": "아이디어·사진예술",
    "organization": "한강유역환경청",
    "submissionDate": "2026.06",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "도심 속 한강의 물결과 노을, 자연 생태가 어우러지는 찰나의 순간을 포착한 3점의 고해상도 풍경 사진 출품작.",
    "coreConcept": "인간과 자연의 조화, 한강의 사계절과 생태계 복원의 시각적 기록.",
    "futureUsage": "사진 공모전, 환경 다큐멘터리 이미지, 브런치 에세이 삽화 라이브러리로 활용.",
    "fileName": "제23회 아름다운 한강사진 공모전/작품 1, 2, 3.jpg",
    "fileSize": "8.5 MB",
    "fullContent": "출품 사진 3점 아카이빙 (작품 1: 노을 지는 한강의 실루엣, 작품 2: 잔잔한 수면 위의 윤슬, 작품 3: 자연과 도시의 대비).",
    "tags": [
      "#한강유역환경청",
      "#한강사진공모전",
      "#풍경사진",
      "#윤슬",
      "#생태보존"
    ]
  },
  {
    "id": "c-2025-disability-22",
    "year": "2025",
    "title": "제22회 전국장애인과 함께하는 문예 글짓기 대회",
    "pieceTitle": "장애는 벽이 아닌 길 / 기다림의 온기 / 더불어, 더불어 (시 3편)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "사단법인 장애인먼저실천운동본부",
    "submissionDate": "2025.04",
    "status": "awarded",
    "result": "대상 수상 🏆 (국회 국방위원장상)",
    "badge": "🏆 대상 수상 (국회 국방위원장상)",
    "badgeClass": "bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black",
    "synopsis": "병점고등학교 장애 학생 활동지원 현장에서 마주한 소소한 눈빛과 느린 걸음을 기다려주는 배려의 온기를 서정적인 시어로 엮어낸 연작 시로, 최고 영예인 국회 국방위원장상 대상을 수상함.",
    "coreConcept": "\"장애는 벽이 아닌 길... 교실 구석 조용한 눈빛, 발걸음을 맞추며 웃는다. 다름을 넘어 하나로, 오늘도 우리는 함께\"",
    "futureUsage": "대표 전국 문예 대회 최고상 수상작. 향후 문학상 응모 및 사회복지 포트폴리오의 최상위 실적.",
    "fileName": "제22회 전국장애인과 함께하는 문예 글짓기 대회 원고.docx",
    "fileSize": "15 KB",
    "fullContent": "제22회 전국장애인과 함께하는 문예\n글짓기 대회 원고\n제출자 :\n김남현\n제목 :\n장애는 벽이 아닌 길\n교실 구석, 조용한 눈빛\n발걸음을 맞추며 웃는다\n다름을 이해하는 시간\n말없이 전하는 연대\n작은 도움, 큰 마음\n서로의 존재 확인하며\n친구가 되는 길\n다름을 넘어 하나로\n오늘도 우리는 함께\n제목 :\n기다림의 온기\n교실 앞, 떨리는 마음\n말이 느려도 경청하는 친구\n눈빛과 미소로 격려하고\n작은 실수에도 웃음으로 응원\n서로의 다름을 배려하며\n같은 시간을 공유한다\n작은 박수, 큰 힘이 되어\n오늘의 발표, 내일의 자신감\n학교는 이해의 공간\n,\n우리는 함께 배운다\n제목 :\n더불어, 더불어\n짧지만 진심 어린 웃음\n느린 걸음도 기다려주는 마음\n조금 다른 생각, 이해하며\n서로에게 손을 내밀고\n작은 관심, 큰 위로\n오늘의 대화, 내일의 믿음\n학교는 다름을 배우는 곳\n우리는 함께, 더불어 성장한다\n함께 이기에\n더 깊어지는 의미",
    "tags": [
      "#전국장애인문예글짓기",
      "#대상수상",
      "#국회국방위원장상",
      "#장애인먼저실천",
      "#더불어성장"
    ]
  },
  {
    "id": "c-2025-happy-writing",
    "year": "2025",
    "title": "제19회 행복나눔 글쓰기 공모전",
    "pieceTitle": "등불, 사랑의 길, 행복 예찬, 온기, 실현 (시조 연작 5수)",
    "category": "literature",
    "categoryName": "문학·시조",
    "organization": "한국행복한재단",
    "submissionDate": "2025.09.11",
    "status": "submitted",
    "result": "출품 완료 (행복문학동인지 게재 후보)",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "작은 나눔과 웃음에서 비롯된 희망이 사람들의 마음을 잇고 세상을 따뜻하게 바꾸어가는 과정을 정통 3장 6구 12소절의 시조 양식으로 유려하게 노래한 작품.",
    "coreConcept": "\"하늘빛 고운 세상에 작은 등불 밝혀두니, 서로의 마음 잇는 길 눈부시게 열리도다. 행복은 멀리 있지 않고 나눔 속에 살아있네\"",
    "futureUsage": "전통 시조 백일장, 나눔 문화 에세이 공모전 지원 시 정형시 템플릿으로 활용.",
    "fileName": "김남현_개인정보 및 참가신청서 (원고 포함).hwp",
    "fileSize": "84 KB",
    "fullContent": "」\n개인정보수집 및 활용동의서\n 개인정보 보호법 17조 2항에 의거 본 신청서에 개인정보 수집 및 활용 동의 여부를 확인합니다.\n제공할 개인정보의 내용 인적사항: 성명, 생년월일, 주소, 전화번호, 최종학력, 직업, 장애유형, 상세사항, 가족사항, 건강상태: 장애여부 등\n수집 정보 활용: 행복나눔 글쓰기 공모전의 업무 수행에 필요한 자료로 활용합니다.\n개인정보 제공자가 동의한 내용외의 다른 목적으로 활용하지 않으며, 제공된 개인정보 이용을 거부하고자 할 때에는 개인정보 관리 책임자를 통해 연람, 정정, 삭제를 요구할 수 있음.\n본인은 다음의 개인정보를 제공하고 활용하는 것에 내용을 이해함에 동의합니다\n프로그램 진행시 상장 신청, 사진촬영이 진행되며, 행복문학동인지 기재, 홍보를 위해 기관 단체 홈페이지, SNS, 홍보물(포스터,리플렛 등) 및 보도자료 등에 활용되어집니다.\n※ 동의하지 않을 시에는 본 사업과 관련하여 신청 및 불이익을 당할 수 있습니다.\n이름 : 김남현 생년월일 : 1996년 01월 03일\n소속 : 화성오산교육지원청\n주소 : 경기도 화성시 능동 1066-3번지 아르젠 3차 412호\n☑ 동의 ☐ 동의하지 않음\n위와 같이 행복나눔 글쓰기 공모전을 위한 개인정보를 수집합니다.\n 2025년 09월 11일\n신청인: 김남현 (인)\n한국행복한재단 귀하\n제 18 회 행복나눔 글쓰기 참가신청서\n응모부문 : 시조\n제목 : 등불, 사랑의 길, 행복 예찬, 온기, 실현\n줄거리 내용 : 작은 나눔과 웃음에서 비롯된 희망이 사람들의 마음을 이어주고, 서로의 동행 속에서 두려움을 이겨내며 세상을 따뜻하게 바꾸어가는 과정을 노래하였다. 땀과 정성이 싹을 틔워 숲을 이루듯, 사랑의 씨앗은 희망으로 자라나고 그 빛은 점차 퍼져 모두가 함께 누릴 수 있는 행복한 세상으로 완성됨을 표현함.\n약력 : 삼성전자 DS부문 반도체 엔지니어 12년 근무\n브런치스토리 플랫폼 필명 ‘아론’ 작가 활동 중\n> url : 汫╨ https://brunch.co.kr/@aff146cf58e44ab 汫h\n현재 병점고등학교 장애 학생 활동 지원 업무 중\n학교ㆍ학년ㆍ반(또는 소속 단체) : 병점고등학교 교무기획부\n성명 : 김남현\n성별 : 남성\n집 주소 : 경기도 화성시 능동 1066-3번지 아르젠 3차 412호\n전화번호 : 010-2232-3442\nE-mail주소 : 汫╨ tr788@naver.com 汫h\n제목 : 등불\n하늘빛 고운 세상에 작은 등불 밝혀두니\n서로의 마음 잇는 길 눈부시게 열리도다\n행복은 멀리 있지 않고 나눔 속에 살아있네\n봄바람 꽃잎 사이로 웃음소리 흐르거니\n고단한 삶의 그림자 서서히 사라지네\n함께 걷는 이 발자취 희망으로 번져간다\n조금씩 모은 마음이 별빛처럼 쌓이어서\n어둠 속을 밝혀주고 굳은 땅을 적셔주네\n세상은 더욱 따뜻하게 스스로 빛을 내리\n제목 : 사랑의 길\n바람결 맑은 노래가 들녘마다 울려 퍼져\n사람의 손길 닿을 때 새로운 길 열리도다\n사랑의 씨앗 심으면 기쁨의 꽃 피어나네\n작은 손 서로 잡으면 멀리서도 힘이 되고\n넘어진 자를 일으켜 다시금 걸어가니\n희망은 그런 길 위에 조용히 자라나는 것\n별빛이 가득한 밤도 어둡지 않게 비추고\n끝없는 바다 항해도 두렵지 않게 하리\n행복의 배가 출항해 새로운 꿈 전하도다\n제목 : 행복 예찬\n흙냄새 가득한 땅에 땀방울이 스며들어\n하나의 싹이 돋으면 숲으로 자라가네\n행복의 터전 이루니 세상 또한 빛나리라\n서로의 눈빛 속에서 용기가 돋아나고\n따뜻한 말 한마디가 긴 겨울 녹여내네\n사람의 마음 이어져 더 큰 힘이 되어가네\n희망의 물결 넘실대 바위조차 무너뜨려\n새로운 길을 열면서 다 함께 걸어가네\n이 길 위 우리 발걸음 세상 빛을 지펴가리\n제목 : 온기\n새벽빛 물든 하늘에 첫 노래가 울려 퍼져\n잠든 마음 일깨우니 환한 길이 보이도다\n행복은 깨어 있는 눈 그 속에서 움트리라\n메마른 길 위 서 있어도 함께하면 웃게 되고\n비바람 몰아쳐 와도 맞잡은 손 놓지 않네\n사람의 힘은 언제나 큰 바다를 건너리라\n따뜻한 온기 번지면 세상 모두 물들어서\n눈부신 빛 이루고 어둠조차 사라지네\n그 길 위의 작은 걸음 미래를 열어가네\n제목 : 실현\n은은한 꽃향기 따라 삶의 길을 걸어가니\n가벼운 발자취 위에 기쁨들이 피어나네\n세상은 조금씩 밝게 새롭게 단장되네\n차가운 돌길이라도 마음 열면 부드럽고\n깊은 산 어둠 속에도 노래또한 퍼져가네\n함께 나누는 웃음은 별빛처럼 빛나리라\n누군가 전한 따스함 또 다른 이에게 흘러\n끝없는 강물처럼 더 넓게 퍼져가네\n행복한 세상 이루니 우리 꿈이 실현되네",
    "tags": [
      "#행복나눔글쓰기",
      "#한국행복한재단",
      "#시조연작",
      "#등불",
      "#나눔과동행"
    ]
  },
  {
    "id": "c-2025-yangju-naming",
    "year": "2025",
    "title": "양주시 청년센터 이전 기념 네이밍 공모전",
    "pieceTitle": "양주 꿈꾸는 내일 랩",
    "category": "naming",
    "categoryName": "슬로건·네이밍",
    "organization": "경기도 양주시",
    "submissionDate": "2025.12.01",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "청년들이 미래를 연구하고 실험하는 공간(Lab)이라는 의미와 함께, '내일'이 지닌 이중적 의미(내일 Tomorrow + 나의 일 My Job)를 감각적으로 결합한 청년 거점 브랜드 네이밍.",
    "coreConcept": "취업과 창업의 실질적 지원 공간임을 직관적으로 부각하면서도 청년 세대의 도전과 실험 정신을 상징하는 직관적 네이밍.",
    "futureUsage": "공공 시설 네이밍, 청년 센터 브랜드 개발, 슬로건 공모전 출품 시 대표 레퍼런스.",
    "fileName": "양주시 청년센터 이전 기념 공모(김남현).hwp",
    "fileSize": "55 KB",
    "fullContent": "붙임 1\n센터 네이밍 신청서\n \n참가신청서 (양주시 청년센터 이전 기념 네이밍 공모전)\n수 신 : 양주시장\n접수번호\n제\n안\n자\n성 명\n김남현\n생년월일\n1996년 1월 3일\n주 소\n경기도 화성시 능동 1066-3 아르젠 3차 오피스텔 412호\n전화번호\n010-2232-3442\n이메일\n汫╨ tr788@naver.com 汫h\n명칭\n※ 12자 이내\n양주 꿈꾸는 내일 랩\n명칭에 대한\n상세 설명\n청년들이 미래를 연구하고 실험하는 공간(Lab). '내일'은 미래이자 'My Job'을 연상토록 작성하였습니다.\n실험적이고 혁신적인 이미지 부여하였습니다. 또한 취업, 창업 등 실질적인 활동 중심 공간임을 알리도록 작성하였습니다.\n※ 제안과 동일내용으로 표창∙상금\n수여 및 특허 등 출원∙등록 여부\n□ 여 ■ 부\n본인은 공모내용 및 공모 유의사항을 확인하였으며 위와 같이\n「양주시 청년센터 이전 기념 네이밍 공모전」에 신청서를 제출합니다.\n2025년 12 월 01 일\n \n제안자 성명 김남현 (서명 또는 인)\n※ 행정기관의 홈페이지 등 제안자의 신원을 확인할 수 있는 전자적 방법으로 제안서를 제출하는 경우에는\n제안자의 서명을 생략할 수 있음\n \n붙임 2\n개인정보 수집·이용 동의서\n개인정보 수집ㆍ이용 동의서\n『양주시 청년센터 이전 기념 네이밍 공모전』에 참가하는 신청인의 모든 개인정보는 ‘개인정보보호법’에 의하여 안전하게 관리됩니다.\n▣ 개인정보 수집·제공 동의\n \n ○ 개인정보 수집 이용 목적\n- 공모전 참가자 본인 확인 및 심사 진행 등 공모전 운영관리\n○ 개인정보의 항목\n- 성명, 생년월일, 연락처(휴대전화), 이메일, 주소, 계좌번호(수상자에 한함)\n○ 개인정보의 처리 및 보유기간\n- 위 개인정보는 수집 이용에 대한 동의일로부터 최종 수상작 발표 등 공모절차가 종료 되는대로 관련 정보를 파기합니다.\n(단, 수상작에 한하여 1년간 자료 보관)\n○ 동의를 거부할 권리 및 미동의 시 불이익\n- 위 개인정보의 수집 이용에 대한 동의를 거부할 권리가 있으나, 미동의 시에는 본 공모전의 참가 신청이 제한됩니다.\n동의하십니까? ✔표기 ( 동의함 □ 동의하지 않음 □ )\n 2025년 12 월 1 일\n참가신청자 : 김남현 (서명 또는 인)\n양주시장 귀하",
    "tags": [
      "#양주시",
      "#청년센터",
      "#네이밍공모전",
      "#꿈꾸는내일랩",
      "#브랜딩",
      "#MyJob"
    ]
  },
  {
    "id": "c-2024-munhakgoeul",
    "year": "2024",
    "title": "25년 문학고을 계간지 하반기 등단 신인 문학상 공모",
    "pieceTitle": "흐린 날 / 뒤늦은 몫 / 꿈꿀 수 있을까 / 그런 사람 / 제목 없는 글 (시 5편)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "문학고을",
    "submissionDate": "2024.11",
    "status": "submitted",
    "result": "신인문학상 등단 투고 완료",
    "badge": "📤 등단 응모",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "인간관계 속의 주저함과 미뤄둔 안부, 나비와 나방이 공존하는 세상에 대한 소망, 그리고 지친 퇴근길 내 몸에 맞는 소파 같은 사람이 되고 싶다는 따뜻한 일상 철학을 담은 창작시 5편.",
    "coreConcept": "\"퇴근 후 훌렁훌렁 벗어던지고 내 몸에 맞게 구겨진 소파 같은 사람... 나는 나의 몫을 다하기로 했다\"",
    "futureUsage": "시인 등단 포트폴리오, 브런치 시집 출판 원고, 계간 문예지 투고 시 핵심 레퍼런스.",
    "fileName": "(김남현)25년 문학고을 계간지 하반기 등단 신인 문학상 공모 원고.hwpx",
    "fileSize": "33 KB",
    "fullContent": "25년 문학고을 계간지 하반기 등단 신인 문학상 공모 원고\n성명 : 김남현\n성별 : 남성\n생년월일 :1996년01월 03일\n거주지 : 경기도 화성시 능동 동탄원천로 354-16 아르젠 3차 412호\n연락처 : 010-2232-3442\n응모 분야 : 시\n이메일 :\ntr788@naver.com\n약력 : 12년 차 삼성전자 엔지니어로 재직하였고, 브런치스토리 플랫폼 ‘아론’ 필명으로 활동하고 있습니다. 현재 병점고등학교에서 장애 학생 활동 지원 분야로 사회복무요원 복무 중입니다.\n제목 : 흐린 날\n새벽녘\n구름이 산적한 지붕에 내리는\n햇빛 한 줄기가 웃음 짓네!\n햇살마저\n가두어지는 날에 핀 꽃 한 송이\n지는 날을 기약하듯 눈물짓네!\n제목 : 뒤늦은 몫\n뒤늦게 생일 축하를 했다.\n아주 멀지도, 가깝지도 않은 이에게\n한참을 고민하다 건넨 인사\n연락이 끊긴 이는\n관계도 끊겼다 느껴\n안부 인사조차 건네지 않았었다.\n나의 몫을 그렇게 미뤘었다.\n그러지 않기로 했다.\n비겁하지 않기로 했다.\n일이 많아 어쩔 수 없었다는\n포장지와 함께 건넨 인사로\n나의 몫을 다했다, 늦었지만 미안함을 담아\n한참을 걱정으로 가득 찬 숲속을\n헤매듯 거닐다 받은 답장\n'고마워요. 형, 조만간 얼굴 한 번 봐요.'\n나는 나의 몫을 다하기로 했다.\n어떤 답이 올지, 결과가 다가올지는 모르지만\n나는 나의 몫을 다하기로 했다.\n제목 : 꿈꿀 수 있을까\n나비와 나방이 공존하는 세상을\n꿈꿀 수 있을까\n선과 악이 공존하듯이\n꿈과 현실이 공존하듯이\n밤과 낮이 공존하는 세상을\n꿈꿀 수 있을까\n제목 : 그런 사람\n그런 사람이 되고 싶다.\n퇴근 후 훌렁훌렁 벗어던지고\n내 몸에 맞게 구겨진 소파 같은 사람\n그런 사람이 되고 싶다.\n아무것도 하기 싫은 날에\n계속 웅크리고 싶은 침대 같은 사람\n그런 사람이 되고 싶다.\n하기 싫은 일이더라도\n시작해 볼까 싶은 햇빛과 책상 같은 사람\n제목 : 제목 없는 글\n이 글은 제목이 없는 글일까?\n'제목이 없는 글'이라는 제목을 가진 글일까?\n이 글은 본문이 없는 글이라고 한다면\n이러한 글들로 채워진 '본문이 없는'이라고 부르는\n글이 되는 걸까.\n누군가 내가 말하고 생각한 어떤 진리나 뜻을\n아무 의미 없는 것이라 말한다면,\n그건 정말 의미가 없는 걸까?\n아니면, 의미가 없다고 여겨졌음에도 불구하고\n나에겐 의미가 있는 글일까?",
    "tags": [
      "#문학고을",
      "#신인문학상",
      "#시인등단",
      "#그런사람",
      "#뒤늦은몫",
      "#창작시"
    ]
  },
  {
    "id": "c-2024-ottogi-food",
    "year": "2024",
    "title": "오뚜기 제5회 푸드 에세이 공모전",
    "pieceTitle": "추억을 튀겨낸 저녁",
    "category": "literature",
    "categoryName": "문학·에세이",
    "organization": "오뚜기",
    "submissionDate": "2024.03",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "“너 가졌을 때 매일 닭 한 마리씩은 꼭 먹었어”라는 어머니의 말씀과 어린 시절 식탁에 오른 닭 요리에 얽힌 가족의 헌신, 사랑, 따뜻한 온기를 맛깔스러운 문체로 풀어낸 감성 푸드 에세이.",
    "coreConcept": "음식이 단순한 한 끼의 영양을 넘어 가족의 기억과 사랑을 연결하는 정서적 매개체임을 따뜻한 서사로 규명.",
    "futureUsage": "음식 에세이, 가족 사랑 수필 공모전, 브런치 연재 글의 핵심 콘텐츠로 활용.",
    "fileName": "김남현_추억을 튀겨낸 저녁.hwp",
    "fileSize": "80 KB",
    "fullContent": "명절이면 어머니께서 늘 하시던 말씀이 있습니다. “나는 너 임신했을 때 매일 닭 한 마리씩은 꼭 먹었어.” 그 말씀을 들을 때마다 신기하면서도, 그 안에 담긴 정성과 사랑을 느낄 수 있었습니다. 그 덕분에 우리 집 저녁상에는 치킨, 백숙, 닭볶음탕 같은 닭 요리가 자주 올랐습니다. 어린 시절 내내 닭 요리는 식탁의 중심이었고, 질릴 법도 했지만, 치킨은 언제나 맛있었습니다. 자연스레 저 역시 어머니처럼 닭 요리를 좋아하게 됐습니다.\n치킨은 음식의 범주를 넘어선 추억으로 남게 되었습니다. 치킨을 먹는 자리에는 늘 어머니께서 함께했습니다. 아주 어렸을 때는 당연히 함께 식사 했지만, 가정 형편이 어려워지며 어머니는 아버지와 함께 밤늦게까지 일을 나가셔야 했습니다. 그래서 함께 저녁을 먹을 수 있는 날은 손에 꼽을 정도로 드물었습니다.\n그럼에도 퇴근 후 어머니가 들어오실 때 풍겨오던 치킨 냄새는 어린 제게 가장 반가운 신호였습니다. 배를 채워주는 음식 이상의 의미가 있었습니다. 방 안 가득 번지는 고소한 냄새 속에서, 저는 그날 하루의 피로가 녹아내리는 듯한 느낌을 받곤 했습니다. 지금도 치킨을 떠올리면 그 시절의 어머니와 작은 행복이 겹쳐 떠오릅니다. 어린 날의 저를 지탱해 준 건 치킨이 아니라, 치킨을 들고 들어오시던 어머니의 마음이었습니다.\n세월이 흘러 자취방에서 혼자 저녁을 해결하는 날이 많아졌습니다. 치킨은 여전히 맛있지만, 가격은 부담스러워 직접 만들어 보기로 했습니다. 유튜브에서 조리 영상을 보고, 닭과 튀김가루를 준비했습니다. 닭에 반죽을 묻혀 기름에 넣자 “치익-” 소리가 방 안을 채웠습니다. 생각보다 어렵지 않았고, 두세 번 시도하니 제법 먹을 만한 맛이 났습니다. 자취방에서 혼자 치킨을 먹던 어느 날, 문득 어머니와 먹던 치킨이 떠올랐습니다. 그때가 더 맛있었던 건 단순히 음식 때문이 아니라, 함께한 시간이 더해졌기 때문임을 깨달았습니다.\n지금도 어머니는 종종 자취방을 찾아오십니다. 직접 담근 김치와 나물, 국거리까지 챙겨 오실 때면 늘 고맙고 죄송합니다. 저는 회사에서 받은 선물 세트나 남는 식자재를 드리며 안부를 나누곤 했지만, 어느 순간부터 ‘이제는 내가 어머니께 뭔가를 해드려야 하지 않을까.’ 하는 생각이 들었습니다.\n그래서 어느 날, 결심하고 치킨을 준비했습니다. 퇴근 후 서툰 손길로 치킨을 튀겨 접시에 담아 어머니께 내놓았습니다. 어머니는 한 조각을 집어 들고 조용히 드셨습니다. 잠시 말이 없으시더니 “맛있다”라고 말씀하셨습니다. 눈가가 살짝 붉어진 모습은 오래도록 기억에 남습니다. 완벽하지 않은 맛이었지만, 그날의 식사는 제게 어떤 음식보다 소중했습니다. 치킨 한 조각이 어린 시절의 기억을 불러내고, 잊고 지냈던 화목한 저녁 식탁을 되살려 주었습니다.\n처음 대접한 치킨은 서툴렀지만, 그날의 기억은 평생 마음속에 남을 것 같습니다. 어머니가 저를 위해 매일 닭 한 마리를 드셨던 것처럼, 이제는 제가 어머니를 위해 작은 정성을 내어놓을 차례라는 생각이 듭니다. 치킨은 여전히 바삭하고 고소한 음식이지만, 저에게는 그것을 넘어서는 의미가 되었습니다. 앞으로 더 능숙하게 요리할 수 있게 된다면, 다시 한번 어머니와 치킨을 나누며 웃고, 대화를 나누고, 함께 시간을 보내고 싶습니다. 그날의 저녁이 제게 남긴 것은 단순한 맛이 아니라, 오래도록 잊히지 않을 따뜻한 기억이었으니까요.",
    "tags": [
      "#오뚜기",
      "#푸드에세이",
      "#추억을튀겨낸저녁",
      "#어머니의치킨",
      "#가족사랑",
      "#음식수필"
    ]
  },
  {
    "id": "c-2024-woongjin",
    "year": "2024",
    "title": "제24회 웅진문학상",
    "pieceTitle": "공주, 그리고 산성길 외 8편 (시 연작)",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "웅진문학상 운영위원회 / 공주시",
    "submissionDate": "2024.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "공주산성의 아침 안개, 금강 따라 흐르는 햇살의 물결, 고즈넉한 마을 골목과 성곽길을 걸으며 역사의 숨결과 현재의 삶이 맞닿는 순간을 담담히 포착한 시 연작.",
    "coreConcept": "\"돌담 따라 바람이 분다... 발걸음마다 스며드는 역사, 오늘도 공주는 숨 쉰다\" - 지역 역사와 서정의 만남.",
    "futureUsage": "지역 문학상, 로컬 서정시 공모전, 역사 테마 문예 출품 시 대표 레퍼런스.",
    "fileName": "제24회 웅진문학상 응모작품_김남현.hwpx",
    "fileSize": "21 KB",
    "fullContent": "제24회 웅진문학상 응모작품\n신청인 : 김남현\n주소 : 경기도 화성시 능동 동탄원천로 354-16 아르젠 3차 412호\n연락처 : 010-2232-3442\n응모부문 : 시\n제목 : 공주, 그리고 산성길\n돌담 따라 바람이 분다\n햇살에 반짝이는 옛 성벽\n시간이 천천히 흘러간다\n발걸음마다 스며드는 역사\n아이들의 웃음, 나무 사이로\n하늘은 넓고 마음은 자유롭다\n낙엽 밟는 소리, 오래된 숨결\n나지막이 들려오는 새소리\n오늘도 공주는 숨 쉰다\n제목 : 공주산성의 아침\n이른 햇살이 성 위를 감싸\n차가운 돌 위로 안개가 내려\n조용히 하루가 열리는 순간\n먼 산과 강물, 서로를 비추고\n옛길 따라 흘러간 이야기\n바람에 실려 들려오는 속삭임\n마음도 함께 걸음을 맞춘다\n하늘과 땅이 만나는 자리\n공주, 너는 고요히 서 있다\n제목 : 금강의 노래\n강물 위 햇빛이 춤을 춘다\n물결마다 반짝이는 기억\n바람에 섞인 새들의 노래\n철새가 날아드는 아침\n나무 그늘에 숨은 햇살\n손끝으로 스며드는 온기\n금강 따라 걷는 길 위\n마음도 강물처럼 흐른다\n공주, 그 속에 나는 서 있다\n제목 : 공주 밤하늘\n별빛이 성벽 위에 내려\n달빛이 강물 위를 스친다\n조용히 숨 쉬는 고요의 도시\n나무 사이로 불어오는 바람\n낮의 흔적을 감싸 안고\n길가의 가로등 하나 깜박인다\n밤길을 걷는 발걸음\n마음은 별빛과 함께 빛난다\n공주는 오늘도 잠들지 않는다\n제목 : 공주, 마을 골목\n좁은 골목, 오래된 기와집\n바람이 지나가며 이야기를 건넨다\n작은 창문 사이 햇살이 스며든다\n아이들이 뛰노는 소리\n담장 위 작은 꽃의 향기\n나무 그늘 아래 쉼의 시간\n마음속에 골목 하나 새겨두면\n어제와 오늘이 함께 웃는다\n공주는 사람과 함께 숨 쉰다\n제목 : 공주, 성곽길\n성곽 위로 올라서면\n멀리 금강이 반짝인다\n돌담 밑 풀잎 하나 흔들리고\n길가에 앉아 쉬는 고양이\n발걸음 하나, 마음 하나\n세월 속에 스며든 이야기\n제목 : 공주의 가을\n노란 은행잎, 길 위를 덮는다\n돌담 위 햇살이 길게 드리운다\n강변 나무, 붉게 물들고\n아이들 뛰노는 소리\n발걸음 따라 마음도 흔들린다\n가을빛 속에 스며든 하루\n제목 : 옛길\n돌길 따라 걸으면\n과거와 현재가 손을 잡는다\n아이들의 발자국, 웃음소리\n바람 속 먼 기억들\n마음도 오래된 길 위를 걷는다\n오늘과 어제 이어지는 시간\n제목 : 공주의 하늘\n맑은 하늘, 성벽 위로 펼쳐지고\n새들이 낮게 날아간다\n멀리 산 그림자 길게 드리우고\n강물 위 햇살 금빛으로 춤춘다\n하늘과 땅, 시간과 마음\n모두 하나로 이어지는\n제목 : 달과 공주\n밤하늘 달빛, 강물 위 반사\n조용히 성곽 위를 감싼다\n작은 창문 불빛, 따스하고\n길가 가로등 하나 깜박이고\n발걸음 천천히 옮기면\n달빛과 그림자 속",
    "tags": [
      "#웅진문학상",
      "#공주산성",
      "#금강의노래",
      "#지역문학",
      "#역사서정시"
    ]
  },
  {
    "id": "c-2024-moonlight",
    "year": "2024",
    "title": "달빛서재 2025 문학창작 공모",
    "pieceTitle": "기분 좋은 날 / 첫사랑을 잊지 못하는 이유",
    "category": "literature",
    "categoryName": "문학·산문",
    "organization": "달빛서재",
    "submissionDate": "2024.10",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "좋아하는 사람과 함께한 하루의 설렘과 여운, 그리고 '자이가르닉 효과(미완성 과제 지속 회상)'를 매개로 첫사랑의 풋풋함과 관계의 성장을 성찰한 감성 청춘 에세이.",
    "coreConcept": "\"꼭 나를 좋아하지 않더라도, 그녀가 행복했으면 좋겠다... 정답은 아무도 모르지만 오늘을 살아간다면 나아가는 거니까.\"",
    "futureUsage": "청춘 에세이, 연애·관계 성찰 수필, 독립출판 원고로 활용.",
    "fileName": "김남현 _ 달빛서재 문학창작공모전 원고.docx",
    "fileSize": "16 KB",
    "fullContent": "제목\n:\n기분 좋은 날\n주제\n:\n사랑\n종일 즐겁고, 행복했다.\n함께한 그녀가\n좋아서 였을까\n.\n아마, 그게 맞겠지.\n좋아하는 사람과 보내는 하루는\n그 자체로 설레고,\n기분 좋은 여운을 남긴다.\n속 깊은 이야기든, 오래된 기억이든\n무엇을 나눠도 좋았다.\n함께한 식사도, 작은 순간들도\n모두 마음에 들었다.\n앞으로도 자주 보고 싶다.\n사실은, 더 많은 시간을 단 둘이 보냈으면 좋겠다.\n가끔 그녀가 뱉는 단어들에서,\n흩날리는 어른스러움이\n벚꽃 잎처럼\n스쳐 지나간다.\n봄이 온 건가.\n꼭 나를 좋아하지 않더라도,\n그녀가 행복했으면 좋겠다.\n그런 기분 좋은 날이 내일도 계속되기를.\n제목 :\n첫사랑을 잊지 못하는 이유\n'자이가르닉 효과'라는 용어를 들었다. 쉽게 말하자면 끝마치지 못한 일은 계속 머리를 맴도는 효과이다. 고민이 많지 않으려면 일단 저지르는 것도 도움이 될지 모르겠다.\n언젠가 이미 다른 사람을 좋아하는 친구에게\n마음을 고백한 적이 있었다.\n터져버릴 듯한 마음을 감당하지 못해 쏟아내듯이.\n그리고 돌아온 말. '친구로서 좋지만, 연인은 아니야.'\n다음 날 신기하게도 시원한 기분이 들었다.\n물론 섭섭한 마음도 들어 시원섭섭했지만.\n썸이라는 간질간질한 마음을 싫어한다고 생각해 왔다.\n일단 행동해 보면 어떻게든 되지 않을까라는\n생각으로 들이받았었고 일도 사랑도 결과가 보였다.\n다만, 모든 건 다음 단계로 넘어갔을 뿐 끝나지 않았다.\n때론 너무 성급하게 표현한 마음에\n모습을 감추거나\n부담스러워\n하는\n사람들도 있었다.\n성공적으로 이어진 관계도 있었지만\n이어지고서 아차 싶은 순간도 겪었다.\n서른을 넘어가는 시점에도, 아직 때를 잘 모르겠다.\n우리는 매일 다음 단계로 넘어가고 있다.\n아무것도 하지 않았더라도 잘 이루어지는 경우도 있고, 반드시 행동해야만 전달되는 마음도 있다.\n정답은 아무도 모른다.\n그럼에도, 오늘을 살아간다면 나아가는 거니까.\n후회 없이 살아보는 게 좋겠지.",
    "tags": [
      "#달빛서재",
      "#문학창작공모",
      "#사랑에세이",
      "#자이가르닉효과",
      "#청춘수필"
    ]
  },
  {
    "id": "c-2024-national-license",
    "year": "2024",
    "title": "2024년 국가자격 취득자 우수사례 공모전",
    "pieceTitle": "위험물 안전 관리자로서의 발전, 위험물 기능장과 함께합니다!",
    "category": "idea",
    "categoryName": "아이디어·자격수기",
    "organization": "고용노동부 / 한국산업인력공단",
    "submissionDate": "2024.08",
    "status": "submitted",
    "result": "우수사례 출품 완료",
    "badge": "📤 수기 출품",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "삼성전자 유해화학물질 취급 현장에서 위험물 사고의 심각성을 인식하고, 퇴근 후 치열한 독학 끝에 '위험물 기능장'을 취득한 뒤 사업장 안전관리자로 선임되어 무사고 달성 및 후배 양성 준비반을 이끈 실제 기술 엔지니어 수기.",
    "coreConcept": "이론과 실무의 완벽한 융합. 반도체 현장의 화학물질 사고 제로(0건) 달성과 사내 기술 전수 리더십 실증.",
    "futureUsage": "엔지니어 기술 전문성 브랜딩, 국가기술자격 명예의 전당, 직무 우수사례 강연에 최적화된 콘텐츠.",
    "fileName": "(삼성전자_김남현) 양식3 우수사례 작성양식.hwp",
    "fileSize": "32 KB",
    "fullContent": "제출자 성명\n김남현\n취득 자격명\n위험물 기능장\n취득연도\n2021년\n자격증번호\n21370100067I ߄ Ā\n작품요지\n위험물 안전 관리자로서의 발전, 위험물 기능장과 함께합니다!\n ☞ 신청자 본인의 국가자격 취득 계기, 자격증 취득 과정, 취업 등 자격증 활용, 직장 내 업무 활용 등 수기내용을 A4용지 2매 이상 5매 이내 자유형식으로 작성\n◆ 글자체 신명조, 글자 크기 12pt, 줄 간격 160%\n◆ 기본여백(위 20, 아래 15, 왼쪽 30, 오른쪽 30, 머리말 15, 꼬리말 15mm)\n위험물 기능장 자격증을 취득하게 된 계기는 회사에서 발생할 수 있는 위험물 사고의 심각성을 인식하고 부터였습니다. 유해화학물질을 취급하는 현장에서 다양한 위험물을 다루게 되면서 체계적이고 전문적인 지식의 필요성을 절실히 느꼈습니다. 특히, 위험물로 인해 발생하는 화학물질 사고는 큰 인명 피해와 재산 손실을 초래할 수 있으며 미숙한 대처는 더욱 큰 피해로 이어질 수 있기에 미연에 방지하고 안전한 작업 환경을 조성하는 것이 매우 중요하다고 보았습니다. 이러한 동기부여가 자격증 취득을 결심하게 된 계기가 되었습니다.\n자격증 취득 과정은 험난하였습니다. 먼저, 위험물에 대한 기초 지식을 탄탄히 다져야 했습니다. 위험물 관련 법규, 화학적 특성, 저장 및 취급 방법 등을 철저히 학습하기 위해 먼저 취득한 선배들의 노하우가 담긴 자료를 수집하였고, 다양한 동영상 플랫폼을 통해 무료로 배포되는 온라인 강의를 수강하며 기초 지식을 쌓았습니다. 특히, 위험물의 화학적 특성과 물리적 특성을 이해하는 데 많은 시간을 투자했습니다. 이를 통해 이론적 기반을 확고히 다질 수 있었습니다. 이론 학습뿐만 아니라, 회사 내에서 실제 사례를 분석하고, 위험물 사고 시나리오를 작성해 대응 방법을 모색하는 등의 실습도 병행했습니다. 이를 통해 이론과 실무를 연계하는 능력을 키울 수 있었습니다.\n자격증 시험 준비를 위해 다양한 문제를 풀어보며 시험 패턴을 익혔습니다. 특히, 모의고사를 통해 시간 관리 능력을 키우고, 실제 시험 환경에 익숙해지기 위해 노력했습니다. 어려운 부분이 있을 때는 스터디 그룹을 만들어 함께 공부하고, 서로의 경험과 지식을 공유하며 부족한 부분을 보완해 나갔습니다. 이러한 과정을 통해 이론과 실무 능력을 동시에 향상할 수 있었습니다. 또한, 다양한 실습과 실무 경험을 쌓기 위해 회사 내에서 여러 프로젝트에 참여하며 실질적인 경험을 쌓았습니다.\n자격증을 취득한 후, 직장 내 업무에 많은 변화가 생겼습니다. 첫째로, 위험물 관리에 대한 전문성을 인정받아 사업장 유해화학물질 안전관리자로 선임되었으며 관련 업무를 주도적으로 수행할 수 있게 되었습니다. 위험물 저장소의 운영, 점검 등 체계적이고 안전 수칙을 철저히 시행함으로써 관리 기간 내 연간 유해화학물질 사고 0건을 달성하였습니다. 또한 후배 양성을 위해 위험물 기능장 자격 준비반을 운영하며 이를 직원들에게 교육하는 역할을 맡게 되었습니다. 해당 준비반을 통해 자격 취득 이듬해, 팀 내 6명의 위험물 기능장을 배출할 수 있었습니다. 둘째로, 팀원들 간의 업무 수행에 대한 안전성 향상에도 중요한 역할을 하였습니다. 예시로, 정기적인 안전 교육과 훈련을 통해 직원들이 위험물 취급에 대한 정확한 지식을 갖추도록 하여, 실제 비상 대응 상황에서의 대응력을 높였습니다.\n또한, 자격증 취득을 통해 회사 내에서의 입지가 강화되었고, 이는 커리어 발전으로도 이어졌습니다. 위험물 관리 분야에서의 전문 지식을 인정받아 더 많은 책임과 권한을 부여받게 되었고, 이는 제 개인적인 성취감으로도 이어졌습니다. 나아가, 보다 안전한 작업 환경을 구축하는 데 기여함으로써 회사 전체의 생산성 향상에도 이바지하게 되었습니다.\n위험물 기능장 취득은 개인 역량 강화와 더불어 직장 내에서의 전체적인 안전 관리 능력 향상 및 후배 양성 등 다양한 긍정적인 변화를 불러왔습니다. 자격증을 통해 얻은 지식과 경험을 바탕으로, 더욱 안전하고 효율적인 작업 환경을 조성하는 데 기여하고자 합니다. 앞으로도 지속적으로 최신 정보를 습득하고, 실무에서의 경험을 바탕으로 위험물 안전 관리 전문가로서 성장해 나갈 것입니다. 이 자격증은 저에게 큰 자부심을 안겨주었으며, 안전 관리 분야에서의 전문성을 더욱 강화되는 기회가 되었습니다. 앞으로도 회사의 안전과 발전을 위해 최선을 다할 것입니다.\n결국, 위험물 기능장 자격증 취득은 그 이상의 의미를 가집니다. 전문성을 인정받음과 동시에, 회사의 안전 관리 수준을 한 단계 끌어올리는 데 중요한 역할을 하였습니다. 앞으로도 계속해서 발전하고 학습하며, 위험물 안전 관리 전문가로서 해야 할 역할을 충실히 수행할 것입니다. 이러한 노력이 모여 안전하고 효율적인 작업 환경을 만드는 데 기여할 것이며, 이는 회사와 우리 지역사회, 그리고 범지구적으로 지속 가능한 발전으로 이어지도록 하겠습니다.",
    "tags": [
      "#한국산업인력공단",
      "#국가자격우수사례",
      "#위험물기능장",
      "#삼성전자",
      "#무사고달성",
      "#안전관리자"
    ]
  },
  {
    "id": "c-2024-smile-oral",
    "year": "2024",
    "title": "제5회 장애인 구강건강인식개선 캠페인 「Smile Together!」",
    "pieceTitle": "함께 웃는 건강한 내일 - 학교 현장에서 마주한 구강 돌봄의 사각지대",
    "category": "literature",
    "categoryName": "문학·복지수기",
    "organization": "재단법인 스마일",
    "submissionDate": "2024.09.17",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "병점고등학교에서 장애 학생 활동지원 인력으로 근무하며, 표현이 서툰 중증 장애 학생들이 겪는 치아 통증과 구강 건강이 학습 및 정서에 미치는 막대한 영향을 진솔하게 증언하고 사회적 돌봄 지원의 필요성을 촉구한 공감 수기.",
    "coreConcept": "구강 건강이 단순한 신체 치유를 넘어 장애 학생의 자존감과 행복한 학교생활을 결정짓는 핵심 인권 요소임을 역설.",
    "futureUsage": "장애 인식 개선, 특수교육 보조 활동 수기, 사회복지 정책 제안서에 활용.",
    "fileName": "[스마일재단]장애인 구강건강인식개선 캠페인(글)_김남현.hwp",
    "fileSize": "87 KB",
    "fullContent": "[첨부1] 공모전 참가신청서(개인)\n“Smile Together! 함께 웃는 건강한 내일”\n \n \n 제 5회 장애인 구강건강인식개선 캠페인 「Smile Together! 함께 웃는 건강한 내일」\n \n공모전 참가신청서(개인)\n부문\n※ 해당란에 ✔또는 ■표기\n■\n글\n□\n그림/포스터\n□\n숏폼(Short-Form)\n주제\n① 장애인의 구강 건강이 삶의 질에 어떤 영향을 미치는지에 대한 공감 스토리\n참가자\n인적사항\n※필수기재\n성명\n김남현\n소속\n(학교 및 직장)\n병점고등학교\n생년월일\n(ex, 20010101)\n19960103\n핸드폰번호\n01022323442\n비상연락처\n01039539682\n이메일 주소\ntr788@naver.com\n주소\n경기도 화성시 능동 1066-3 아르젠 3차 412호\n공모전\n참가 경로\n□스마일재단 홈페이지\n□스마일재단 SNS\n■공모전 정보 사이트\n□보도자료\n□사회복지기관\n□학교\n□기타 ( )\n [유의사항]\n“Smile Together! 함께 웃는 건강한 내일”\n- 수상작에 대한 저작권·소유권 등 일체의 권리는 재단법인 스마일에 귀속되며 향후 출판, 전시, 교육, 홍보 등 공익의 목적으로 활용할 수 있습니다.\n- 응모자는 응모와 동시에 입상 시 공모전 요강에 따른 저작물 이용을 허락한 것으로 보고, 저작재산권에 대한 이용료는 시상품으로 대체될 수 있습니다.\n- 글 부문의 공모작은 첨부된 양식으로 사용해주시며, 그림/포스터는 A4 사이즈로 제작해야 합니다.\n- 미완성 작품, 타 공모전 수상작, 필수서류 및 서명 누락 작품은 심사 대상에서 제외됩니다.\n- 시상 내역(인원)은 변동될 수 있으며, 적합한 작품이 없을 경우 수상작을 선정하지 않을 수 있습니다.\n- 응모 과정에서 수집된 개인정보는 수상작 선정을 위해 심사위원단에게만 제공되며, 공모 종료 후 안전하게 폐기합니다.\n제 5회 장애인 구강건강인식개선 캠페인 공모전에 참가 신청합니다.\n2025년 9월 17 일\n \n신청인 성명 : 김남현 (서명)\n재단법인스마일 이사장 귀하\n \n접수번호\n※기재안함\n접수일자\n※기재안함\n 제 5회 장애인 구강건강인식개선 캠페인 「Smile Together! 함께 웃는 건강한 내일」\n \n개인정보 수집·이용 및 수상작 저작권 동의서\n개인정보 수집·이용 동의\n성명\n김남현\n생년월일\n1996년 01월 03일\n주소\n경기도 화성시 능동 1066-3번지 아르젠 3차 412호\n핸드폰번호\n010-2232-3442\n소속\n병점고등학교\n개인정보\n수집·이용 목적\n- 장애인 구강건강 인식개선 캠페인 공모전 신청접수, 작품 심사, 발표, 시상 시 본인 확인 및 안내 등\n개인정보\n수집·이용 항목\n- 참가자의 성명, 생년월일, 소속, 주소, 연락처(핸드폰 등), 보호자(법정대리인)의 성명 및 연락처 등\n개인정보\n보유 및 이용기간\n- 사업 목적 완료시 까지 (단, 선정자 서류 및 작품은 스마일재단에서 영구적으로 보관할 예정)\n개인정보\n수집 거부 및 불이익\n- 참가자는 개인정보의 수집·이용에 대한 동의를 거부할 수 있으며, 동의하지 않을 경우 심사 및 선정에서 제외\n제3자 제공 및 취급, 위탁 동의\n- 정보 제공 받는 자 : 해당 지원사업과 관련한 유관기관(기금후원기관, 레드칼라, 주식회사 넷클로버) 및 정보제공이 필요하다고 스마일재단이 판단하는 자(공모사업 심사위원)\n- 정보 제공 항목 : 위의 ‘개인정보 수집이용 항목’과 동일\n동의서\n(※ 참가자가 미성년자인 경우 법정 대리인 성명 기재)\n본인은 미성년자의 법정대리인으로 위의 개인정보 수집·이용에 동의합니다.\n \n법정대리인 성명\n(서명 또는 인)\n법정대리인 연락처\n신청인과의 관계\n상기 본인은 「개인정보보호법」 제 15조 1항(개인정보의 수집·이용)에 의거하여\n위와 같이 개인정보 수집 및 이용에 동의합니다.\n 2025년 09 월 17 일\n성명 : 김남현 (서명 또는 인)\n수상작 저작권 동의\n저작권(저작재산권 및 저작인격권) 양도\n- 공모전 수상작(대상, 최우수상, 우수상)에 대한 저작권(저작재산권 및 저작인격권 / 이하 저작권)은 재단법인 스마일에 귀속됨을 동의한다.\n- 장애인 구강건강인식개선 캠페인 공모전의 취지와 목적(영리/비영리)에 따라 필요한 한도 내에서 주최자 또는 주관자에 의해 수상작의 복제∙전송∙수정∙배포∙2차 저작물 작성을 포함하는 저작권의 활용에 동의한다.\n- 수상작은 스마일재단의 장애인구강건강증진을 위한 비영리∙공익적 목적을 위해 영구적/독점적으로 사용하는 것에 동의한다.\n수상작 사용 안내\n- 장애인구강건강증진을 위한 인식개선 캠페인 홍보 및 전시 (배너, 현수막, 판넬 형식 등)\n- 장애인구강건강증진을 위한 출판물 제작 (리플렛, 소식지, 연차보고서 등)\n- 장애인구강건강증진을 위한 교육 활동 (PPT, 영상물 등)\n- 장애인구강건강증진을 위한 온라인 및 SNS채널 게재 (홈페이지, 블로그, 인스타그램, 페이스북 등)\n- 기타 스마일재단의 장애인구강건강증진을 위한 활동 등\n동의서\n(※ 참가자가 미성년자인 경우 법정 대리인 성명 기재)\n본인은 제 5회 장애인구강건강인식개선 캠페인 ‘Smile Together! 함께 웃는 건강한 내일’ 수상작 저작권 양도에 동의하였으며, 이를 대가로 시상품을 받을 것에 동의합니다.\n \n법정대리인 성명\n(서명 또는 인)\n법정대리인 연락처\n신청인과의 관계\n 2025년 09월 17일\n성명 : 김남현 (서명 또는 인)\n재단법인 스마일 이사장 귀하\n[첨부2] 개인정보 수집·이용 및 수상작 저작권 동의서 ※ 팀으로 제출 시 개인별로 1매씩 작성\nSmile Together! 함께 웃는 건강한 내일\n- 제 5회 장애인 구강건강인식개선 캠페인 -\n \n[1] 작품 제목: 장애인의 구강 건강이 삶의 질에 어떤 영향을 미치는지에 대한 공감 스토리\n내 친구 준호는 선천적 근육 장애로 손과 팔을 자유롭게 움직일 수 없다. 그래서 일상 대부분의 일을 도움 없이는 할 수 없지만, 그가 겪는 가장 큰 어려움은 의외로 구강 건강 문제였다. 나는 처음에는 그저 양치나 식사에 불편이 있을 뿐이라고 생각했지만, 실제로는 그의 삶 전체와 연결된 문제임을 나중에 깨달았다.\n점심을 함께 먹던 날, 준호가 조심스레 말했다. “치통 때문에 사람들과 웃을 수 없을 때가 있어.” 평소 밝고 유머러스하던 그의 얼굴이 굳어 있는 모습을 보고, 나는 그의 고통을 처음으로 제대로 이해할 수 있었다. 작은 충치 하나가 그의 하루를 무너뜨리고, 친구들과의 대화와 웃음을 제한한다니 믿기 어려웠다. 그 순간 나는 구강 건강이 단순한 치아 관리가 아니라, 사람의 삶 전체를 좌우할 수 있다는 사실을 실감했다.\n준호는 양치질이나 음식을 씹는 일조차 도움을 받아야 한다. 하지만 치과를 찾는 일은 또 다른 장애물이었다. 병원 접근성 문제, 긴 대기 시간, 장애인을 위한 세심한 치료 지원 부족은 그의 구강 건강을 위협했다. 작은 통증 하나가 그의 자율성과 자신감을 잠식하고, 사회적 참여까지 제한한다는 사실은 충격적이었다. 그는 스스로 이를 관리하고 싶어도 현실은 녹록지 않았다. 매번 도움을 받는 과정에서 느끼는 불편과 자존심의 상처는 쉽게 말로 표현할 수 없을 정도였다.\n그럼에도 준호는 포기하지 않았다. 그는 작은 통증에도 참고 웃으며 주변 사람들을 배려했다. 하지만 나는 그의 눈빛에서 늘 걱정과 불안을 읽을 수 있었다. 웃을 때마다 치아가 욱신거리고, 통증 때문에 말수를 줄일 수밖에 없는 현실은 그에게 큰 부담이었다. 친구로서 나는 그 고통을 바라보며 마음이 무거웠다.\n그러던 어느 날, 이동 가능한 치과 서비스를 통해 준호는 처음으로 통증 없이 치료받을 수 있었다. 의자에 앉아 긴장이 풀리고, 치료 후 밝게 웃는 그의 모습을 보는 순간, 나는 깨달았다. 구강 건강은 단순한 치아 관리가 아니라, 장애인의 자존감과 삶의 질을 지탱하는 핵심이라는 것을. 작은 치료와 지원 하나가 그의 하루와 마음을 바꾸고, 사회적 관계까지 회복시킬 수 있었다.\n준호의 경험은 나에게 깊은 울림을 주었다. 구강 건강은 의료적 문제를 넘어, 일상의 자유와 행복을 결정하는 중요한 요소임을 깨달았다. 작은 관심과 지원이 하루를 바꾸고, 웃음을 되찾게 한다. 장애인에게 맞춘 구강 관리와 접근성 향상은 단순한 서비스가 아니라, 삶의 자율성과 사회적 참여를 보장하는 필수 조건이다.\n나는 준호를 보며 우리 사회가 놓치고 있는 부분을 생각하게 된다. 장애인을 위한 의료 접근성, 맞춤형 지원, 사회적 배려는 선택이 아니라 필수이다. 작은 충치 하나가 삶의 질 전체를 흔드는 현실은, 우리가 모두 관심을 가지고 개선해야 할 문제임을 말해준다. 준호처럼 우리 주변의 많은 사람들이 건강하게 웃고, 더 활발히 살아갈 수 있는 세상을 만드는 일은 더 이상 미룰 수 없는 과제다.\n구강 건강은 단순한 치아 관리가 아니다. 그것은 자존감이고, 사회적 참여이며, 일상의 자유다. 준호의 웃음을 다시 볼 수 있었던 경험은, 나에게 장애인의 삶에서 구강 건강이 갖는 의미를 생생하게 보여주었다. 작은 관심과 배려가 누군가의 하루를 바꾸고, 웃음을 되찾게 한다는 사실을 나는 잊지 않을 것이다. 앞으로도 나는 준호와 같은 친구들을 위해, 모두가 건강하고 자연스럽게 웃을 수 있는 세상을 만드는 일에 관심을 기울일 것이다.",
    "tags": [
      "#스마일재단",
      "#구강건강인식개선",
      "#병점고등학교",
      "#장애학생활동지원",
      "#사회복지수기"
    ]
  },
  {
    "id": "c-2024-new-jobs",
    "year": "2024",
    "title": "제6회 대한민국 신직업, 미래직업 공모전",
    "pieceTitle": "디지털 감정 안전 관리자",
    "category": "policy",
    "categoryName": "정책·미래일자리",
    "organization": "고용노동부 / 한국고용정보원",
    "submissionDate": "2024.08",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "원격근무, 온라인 수업, 메타버스 등 가상공간에서 발생하는 정서적 고립, 사이버 불링, 감정 소진을 AI 기반 정서 분석 도구와 심리 데이터를 통해 조기에 탐지하고 맞춤형 멘탈 케어를 제공하는 미래 전문 직무 제안.",
    "coreConcept": "기존 사후 상담 중심의 HR 제도를 탈피하여, AI 정량 데이터 분석을 접목한 사전 예방형 감정 안전망 구축.",
    "futureUsage": "디지털 헬스케어, 에듀테크 정서 지원, 미래 일자리 로드맵 기획안의 핵심 아이디어.",
    "fileName": "지원서_(김남현) 2.hwp",
    "fileSize": "308 KB",
    "fullContent": "※ AI-Tool을 사용한 경우\n반드시 출처를 표기해주세요.\n제안 직업(일자리)명\n: 디지털 감정 안전 관리자\n직업(일자리) 개요\n- 디지털 감정 안전 관리자는 온라인 환경에서 발생하는 정서적 위험을 조기에 발견하고 대응하는 전문가입니다.\n- 원격근무, 온라인 수업, 게임, 메타버스 등 가상공간에서 발생하는 스트레스와 따돌림 문제를 실시간 모니터링합니다.\n- AI 기반 정서 분석 도구를 활용해 사용자의 감정 변화를 정량적으로 측정하고 상담 프로그램을 제공합니다.\n- 단순한 심리 상담이 아니라, 데이터 기반으로 맞춤형 정서 관리 서비스를 제공하는 것이 특징입니다.\n- 궁극적으로 개인과 조직 모두가 건강한 디지털 환경을 유지할 수 있도록 지원합니다.\n필요성\n- 원격근무와 온라인 학습이 보편화되면서 디지털 상호작용은 일상적인 활동이 되었습니다.\n- 그러나 그만큼 감정 소진, 온라인 따돌림, 사이버 폭력 등 심리적 위험이 증가하고 있습니다.\n- 기존 HR 제도나 상담만으로는 즉각적이고 체계적인 대응에 한계가 있습니다.\n- AI와 데이터 분석을 접목해 사전에 예방하고 지속적으로 관리할 필요가 있습니다.\n- 조직 차원의 생산성 유지와 개인의 정신 건강 보호를 위해 전문 직업군이 필요합니다.\n필요한 역량\n- 상담 및 임상심리 지식으로 사람의 감정을 이해하고 공감할 수 있어야 합니다.\n- 데이터 분석 역량과 AI 기반 정서 인식 기술 활용 능력이 요구됩니다.\n- 예를 들어, ChatGPT와 같은 생성형 AI 툴이나 감정 분석 프로그램을 실무에 접목할 수 있어야 합니다.\n- 디지털 윤리, 개인정보 보호, 사이버 보안 등 법적·윤리적 지식도 반드시 필요합니다.\n- 또한 커뮤니케이션 능력과 위기관리 능력을 바탕으로 조직 내 갈등 해결에도 기여해야 합니다.\n일자리 창출방안\n- 기업 HR 부서에 디지털 정서 안전 전담 팀을 설치하여 근로자의 감정 건강을 상시 관리합니다.\n- 교육기관에서는 온라인 학습 중 발생하는 심리적 어려움을 해결할 수 있는 전담 상담 부서를 마련합니다.\n- 게임 및 메타버스 플랫폼 기업에 ‘디지털 감정 안전 센터’를 신설하여 이용자 신뢰도를 높일 수 있습니다.\n- 정부와 지자체 차원에서 디지털 건강 관리 프로그램을 운영하도록 정책을 건의할 수 있습니다.\n- 민간과 공공 부문이 협력해 새로운 서비스 산업을 창출할 가능성이 높습니다.\n활용성\n- 원격 근무 기업에서 근로자의 디지털 스트레스를 관리하는 데 활용될 수 있습니다.\n- 초·중·고교 및 대학에서 온라인 수업 환경의 학생 정서 안전을 보장하는 수단이 됩니다.\n- 게임 및 메타버스 플랫폼에서는 이용자의 몰입 경험을 긍정적으로 유지하기 위한 핵심 서비스가 됩니다.\n- 헬스케어 기업에서는 정신건강 관리 서비스와 연계하여 새로운 시장을 열 수 있습니다.\n- 공공기관의 디지털 복지 정책과 연계하여 사회 전반에 활용될 수 있습니다.\n7. 향후 전망\n- 인공지능 기반 정서 분석 기술의 고도화로 감정 안전 관리의 수요는 꾸준히 증가할 것입니다.\n- 특히 메타버스, 원격근무, 온라인 교육 등 디지털 의존도가 높은 산업에서 핵심 직업으로 자리 잡을 것입니다.\n- 향후 디지털 노동법, AI 윤리 기준과도 연계되어 제도적 지원이 강화될 가능성이 있습니다.\n- 글로벌 차원에서도 표준화 논의가 진행되며 국제적 일자리로 발전할 여지가 큽니다.\n- 결과적으로 미래 사회에서 필수적인 신직업군으로 자리매김할 전망입니다.\n- CHAT- GPT (AI TOOL)을 활용하여 작성하였습니다.",
    "tags": [
      "#한국고용정보원",
      "#신직업공모전",
      "#디지털감정안전관리자",
      "#AI멘탈케어",
      "#미래일자리"
    ]
  },
  {
    "id": "c-2024-hwaseong-ai",
    "year": "2024",
    "title": "화성도시공사 AI·ICT·SW 기술 활용 공공시설 운영 혁신 공모전",
    "pieceTitle": "AI, SW 기술을 활용한 공공 안전 혁신 운영 제안의 件 (교통혼잡 및 보행로 최적화)",
    "category": "idea",
    "categoryName": "아이디어·도시기술",
    "organization": "화성도시공사",
    "submissionDate": "2024.08.27",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "삼성전자 근무 시절 출퇴근 버스 혼잡 구간과 도보 인원 데이터를 분석해 사고 위험을 줄인 실무 경험을 접목하여, 화성시 관내 시내·좌석버스 탑승 위치와 자전거 보행로 공공데이터를 AI로 분석해 병목 구간을 해결하는 혁신안 제안.",
    "coreConcept": "공공 데이터 + AI 머신러닝 분석을 통한 버스 정류장 위치 최적화 및 보행자 안전사고 선제 예방.",
    "futureUsage": "스마트 모빌리티 공모, 도시 교통 정책 기획, 지자체 데이터 행정 혁신 사례에 적용.",
    "fileName": "(화성시 능동_김남현) 공모전 참가 신청서 및 아이디어 제안서.hwp",
    "fileSize": "76 KB",
    "fullContent": "AI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전\n공모주제\n■ AI·ICT·SW 기술을 활용한 공공시설 운영 혁신\n□ 스마트 공공시설을 위한 차세대 기술 적용 방안\n□ 생활 밀착형 공공서비스 개선을 위한 디지털 전환\n신청구분\n■ 개 인 □ 단체·팀 등\n제 안 명\nAI, SW 기술을 활용한 공공 안전 혁신 운영 제안의 件\n제\n안\n자\n개\n인\n성 명\n김남현\n생년월일\n연락처\n(휴대폰) 010-2232-3442\ne-메일\ntr788@naver.com\n(자 택)\n주 소\n경기도 화성시 능동 동탄원천로 354-16 아르젠 3차 오피스텔 412호\n기관·단체 등\n기관명\n대표자\n소재지\n담당자\n연락처\n- 성 명 :\n- 휴대폰 및 사무실 전화번호 :\n- e-메일 :\n※ 접수된 서류는 반환하지 않으며 채택된 모든 제출물의 저작권은 공사에 귀속됩니다.\n 위와 같이 아이디어 공모에 참가 신청합니다.\n2025년 8월 27일\n신청인 : 김남현 (서명 또는 날인)\n화성도시공사 사장 귀하\n※ 온라인 및 e-메일 접수시 신청인의 서명 또는 날인을 생략할 수 있음\n개인정보의 수집·이용에 관한 사항\nAI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전 개최와 관련하여 아래와 같이 귀하의 개인정보를 수집·이용하기 위하여 「개인정보보호법」 제15조에 따라 관련 사항을 고지하오니 동의하여 주시기 바랍니다.\n󰋪 개인정보의 수집·이용 목적 : AI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전 참여자 접수, 심사, 선정 결과 발표\n󰋪 수집·이용할 개인정보 항목 : 성명, 주소, 전화번호, 휴대전화번호, 이메일\n󰋪 개인정보의 보유, 이용기간 : AI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전 심사, 결과 발표, 1년간 보유 및 이용 후 파기\n󰋪 개인정보 수집 동의 거부의 권리\n귀하께서는 개인정보 수집·이용 및 제3자 정보제공에 동의하지 않을 권리가 있으며 동의에\n거부하는 경우 『AI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전』 참여 신청에서 제외될 수 있습니다.\n동의함 ■ 동의안함 □\n \n『AI·ICT·SW 기술을 활용한 공공시설 운영 혁신 아이디어 공모전』\n아 이 디 어 제 안 서\n \n제 안 명\nAI, SW 기술을 활용한 공공 안전 혁신 운영 제안의 件\n참가분야\nAI·ICT·SW 기술을 활용한 공공시설 운영 혁신\n1. 제안소개\n∘ 운영 중인 시내, 좌석 버스 등의 승객 탑승 위치, 자전거 보행로 등의 공공 데이터를 활용하여 교통 혼잡 구간의 원인 인자 발굴을 위한 AI, ICT, SW 기술 활용의 건\n2. 제안배경\n∘ 삼성전자에 재직하며, 기존 장기간 운영 중인 버스 운영 구간이 출퇴근 시간대에 교통 혼잡과 도보 인원에 대한 고려가 이루어지지 않은 채 운영되고 있어 교통 사고 등으로 인한 안전사고 위험성과 교통량 혼잡의 원인이 되는 부분이 확인되어 조정한 사례를 통해 착안하여 제안드립니다.\nex) 능동 대도식당 앞 출근 버스 탑승 예정지 변경으로 인한 교통 혼잡 개선\n3. 주요내용\n∘ 제안 구체 내용\n데이터 플랫폼 내 적재된 공공데이터 중 교통 혼잡도, 자전거 전용 도로, 도보용 도로, 횡단 보도, 버스 탑승 대기 장소 등의 데이터를 활용\n교통 혼잡구간과 예상 이용 인원등을 산출 및 현재 교통 혼잡 가중 지역의 데이터를 활용하여 통행 구간의 원인 인자를 발굴\n3. 버스 정류장 및 도보, 차도 정비 사업 간 해당 데이터를 활용하여 위치 및 구간을 조절하여 교통 정비 사업의 사업성 및 지역사회 편의 기여\n교통 혼잡도 & 버스정류장 탑승위치 & 자전거 전용 도로, 인도, 횡단보도 등 의 공공 데이터를 AI와 SW 기술을 활용하여 분석 및 해당 데이터를 차년도 사업 계획에 반영\n4. 기대효과\n∘ 교통 정비 사업의 사업성 향상 및 지역 사회 편의성 및 만족도 향상\n∘ 교통 정체 구간 해소로 연간 연료비, CO2 감축,\n※ 분량은 A4 3매 이내, 글자 휴먼명조 13포인트로 작성",
    "tags": [
      "#화성도시공사",
      "#AI공공시설혁신",
      "#교통혼잡해소",
      "#스마트모빌리티",
      "#삼성전자엔지니어경험"
    ]
  },
  {
    "id": "c-2024-gihoe-reporter",
    "year": "2024",
    "title": "2024년 경기도 기회기자단 공모 및 카드뉴스 제작",
    "pieceTitle": "경기도 기회기자단 지원 및 도정 카드뉴스 기획안 (카드뉴스 4편·영상 제작)",
    "category": "governance",
    "categoryName": "공공 거버넌스·기자단",
    "organization": "경기도청",
    "submissionDate": "2024.01.02",
    "status": "completed",
    "result": "기자단 지원 및 콘텐츠 포트폴리오 제작 완료",
    "badge": "🏛️ 기자단 지원",
    "badgeClass": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    "synopsis": "경기도 20년 거주 및 삼성전자 10년 재직 경험을 바탕으로 복지, 보건, 산업 지식을 도민의 눈높이에 맞춰 알기 쉽게 전달하기 위해 지원서와 함께 4편의 카드뉴스 및 홍보 영상을 자체 제작하여 제출함.",
    "coreConcept": "전문 산업·행정 지식을 쉬운 문장과 시각적 카드뉴스로 재해석하여 도민의 알 권리를 증진하는 소통 역량.",
    "futureUsage": "SNS 브랜딩, 정책 홍보 콘텐츠 기획, 공공 서포터즈 및 카드뉴스 디자인 포트폴리오.",
    "fileName": "[김남현] 기회기자단 제출서류.hwp / 카드뉴스 1~4장.png / 카드뉴스동영상.mp4",
    "fileSize": "10.8 MB",
    "fullContent": "2024년 경기도 기회기자단 지원신청서\n※ 꿈나무 분야 지원자는 <꿈나무용 지원신청서>를 작성하여주시기 바랍니다.\n \n성 명\n김남현\n지원분야\n일반\n 성별\n남\n사 진\n생년월일\n1996.01.03.\n휴대전화\n010-2232-3442\n \n주소\n 경기도 화성시 능동 동탄원천로 354-16\n이메일\n tr788@naver.com\n채널운영 현황 및 콘텐츠 포트폴리오\n블로그\nhttps://blog.naver.com/tr788\nSNS 등\n기타\n https://brunch.co.kr/@aff146cf58e44ab\n콘텐츠 주요 분야\n 에세이, 자격증, 철학, 맛집\n 대표 콘텐츠 URL\n 1.https://blog.naver.com/tr788/222946267397\n2.https://blog.naver.com/tr788/222730302278\n 3.https://brunch.co.kr/@aff146cf58e44ab/269\n4.https://brunch.co.kr/@aff146cf58e44ab/258\n5.https://brunch.co.kr/@aff146cf58e44ab/123\n경력 사항\n2020 삼성전자 [여행 수기 콘테스트] 우수상\n2020 삼성전자 [환경안전 공모전] 아이디어 부문 은상 수상\n2020 삼성전자 [생산력 향상 공모전] 우수상\n2020 삼성전자 [협업 IDEA & 우수 성과 공모전] 최다 발굴 수상\n2020 ~ 2021 삼성전자 [기본지키기 서포터즈] 1~6기 우수 활동자 수상\n2021 삼성전자 [혁신적으로 일하기 공모전] 우수상\n2022 삼성전자 [MZ 자문단] 경영진 제언 서포터즈 활동\n2022 ~ 2023 삼성전자 [세이프 인플루언서] 서포터즈 우수 활동자 수상\n2022 삼성전자 [모두의 인사] 인사제도 개편 분과장 역임\n2023 방송통신대학교 [생산운영관리] 과목 제작 및 출연\n2023 글쓰기 플랫폼 브런치 [브런치 작가] 등단\n \n<자 기 소 개 서>\n경기도에 20년 이상 거주하며 일찍이 분가하신 부모님 아래 수학하며, 경기도 청년기본소득 등의 제도를 통해 받은 희망과 감사함을 제가 가진 역량을 나눔으로써 실천하고자 지원하였습니다.\n삼성전자에서 10년간 재직하며 환경안전, 제도 및 정책 개선 TF와 서포터즈 및 자문위원 업무를 수행하였으며 최근 브런치 플랫폼의 작가로 등단하여 직접 촬영한 사진과 에세이를 연재하고 있습니다.\n2024년에도 복지, 보건, 여성, 교육, 노동 등의 다양한 행정제도 개편소식을 공유하고 싶고, 제 전공인 산업공학을 활용하여 산업, 경제, 농어업 등의 산업관련 분야에 대한 다양한 소식 및 전문 지식을 알기 쉽게 풀어 소개하는 활동을 하고자 지원 드립니다.\n긴 글보다는 짧고 간결한 문장과 이해하기 용이한 단어들을 활용하여 카드뉴스, 기사 등의 형태로 지속적인 연재를 통해 경기도민의 알권리를 보장할 수 있는 기회기자단원이 되겠습니다.\n위 내용은 모두 사실임을 확인합니다.\n2024년 1월 2일\n지 원 자 : 김남현\n \n< 취재․홍보 콘텐츠 >\n※ 지원분야에 해당되는 콘텐츠 주제를 작성해주세요\n \n청소년\n〇 아래의 지정주제 중 택 1하여 작성\n① 내가 알리고 싶은 경기도의 기회는?\n경기도×Daum ‘숨겨진 기회를 찾아서’ 공익캠페인 참고하실 수 있습니다.\n( 汫╨ https://promotion.daum-kg.net/2023chance) 汫h\n② 우리동네 자랑거리\n- 인물, 명소, 맛집 등 우리 지역의 자랑하고 싶은 것 소개\n〇 형식 : 원고 (글자 크기 13포인트, 900자 내외 작성, 사진 포함 3페이지 이내)\n대학생\n/\n일 반\n〇 경기도 정책 관련 또는 생활정보 대상으로 작성\n※ 예시 : (정책) 경기RE100, 돌봄정책, 경기북부특별자치도 등\n(생활정보)　경기도의 겨울나들이, 경기도에서는 누리는 즐거움 등\n〇 형식 : 아래 형식 중 택 1\n- 동영상, 카드뉴스, 기사형식 (글자 크기 13포인트, 1500자 내외 작성, 사진 5장이상 포함, 5페이지 이내)\n<개인정보처리동의서>\n \n2024 경기도 기회기자단 선발 및 운영 관련 개인 정보 수집·이용·제공 동의서\n \n경기도청 도민소통담당관실은 2024 경기도 기회기자단 선발 및 운영과 관련한 개인정보 수집·이용·제공을 위하여 개인정보보호법 제15조, 제17조 및 제22조에 따라 귀하의 동의를 받고자 합니다.\n<개인정보 수집·이용에 대한 동의>\n1. 개인정보의 수집․이용 목적\n2024 경기도 기회기자단 선발 및 운영과 관련해 필요한 최소한의 정보 수집\n2. 수집하는 개인정보의 항목\n필수정보 : 성명, 생년월일, 소속, 연락처, 주소, 보유하고 있는 SNS 계정\n3. 개인정보의 보유 및 이용 기간 : 개인정보의 수집 및 이용 목적이 달성되면 파기하는 것을 원칙으로 합니다. 수집하는 개인정보의 이용 기간은 위촉일로부터 '24. 12월 말까지로 합니다. 다만, 합격하지 않은 분들에 대한 개인정보는 합격 발표 후 바로 폐기합니다.\n4. 귀하는 개인정보 수집·이용에 동의하지 않으실 수 있습니다. 동의 거부 시에는 이와 관련된 업무 진행이 어려울 수 있습니다.\n□ 위와 같이 개인정보를 수집․이용하는데 동의하십니까?\n선택정보\n동의함\n■\n동의하지 않음\n□\n \n<개인정보 제3자 제공 동의>\n1. 제공받는 자 : 2024 경기도 기회기자단 운영 대행사\n2. 제공받는 자의 이용 목적 : 2024 경기도 기회기자단 선발 및 운영 지원 관련\n3. 제공하는 개인정보 항목 : 성명, 생년월일, 소속, 연락처, 주소, 보유하고 있는 SNS계정\n4. 제공받는 자의 보유·이용 기간 : 위촉일로부터 ‘24. 12월 31일\n5. 귀하는 위와 같이 개인정보를 제3자에게 제공 되는 것에 대한 동의를 거부할 권리가 있습니다.\n단, 제3자에게 개인정보 제공에 동의하지 않는 경우 기자단로서의 선발 및 활동이 제한됩니다.\n□ 위와 같이 개인정보를 제3자에게 제공하는데 동의하십니까?\n동의함\n■\n동의하지 않음\n□\n본인은 상기 내용과 같이 개인정보를 수집·이용하는데 동의합니다.\n \n 2024년 1월 2일 신청인 김남현",
    "tags": [
      "#경기도",
      "#기회기자단",
      "#카드뉴스제작",
      "#도정홍보",
      "#청년기본소득수혜자"
    ]
  },
  {
    "id": "c-2024-seoul-photo",
    "year": "2024",
    "title": "당신의 감성 도시, 서울 사진 공모전",
    "pieceTitle": "VESSLE의 구조적 미학 (뉴욕과 도시의 건축적 시선)",
    "category": "idea",
    "categoryName": "아이디어·사진예술",
    "organization": "서울특별시",
    "submissionDate": "2024.05",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "독창적인 벌집 구조물인 베슬(Vessel)의 기하학적 웅장함과 도시인들의 동선을 사진 프레임 안에 담아내어, 도시 건축이 인간에게 선사하는 감성적 영감을 표현한 사진 출품작.",
    "coreConcept": "구조물과 인간, 빛과 그림자의 기하학적 대칭성을 통해 도시의 역동성을 담아냄.",
    "futureUsage": "도시 건축 사진 공모, 여행 에세이 삽화, 비주얼 브랜딩에 활용.",
    "fileName": "김남현_VESSLE 뉴욕.jpg",
    "fileSize": "2.8 MB",
    "fullContent": "출품 사진 1점 아카이빙 (Vessel 뉴욕 구조물 촬영작).",
    "tags": [
      "#서울시",
      "#감성도시",
      "#Vessel",
      "#도시건축사진",
      "#기하학적미학"
    ]
  },
  {
    "id": "c-2023-samsung-ds",
    "year": "2023",
    "title": "2023 FOUNDRY DIFFUSION 기술팀 DS경진대회",
    "pieceTitle": "반도체 디퓨전 설비 열처리 공정 이상 감지 최적화 및 휴먼에러 제로화",
    "category": "idea",
    "categoryName": "아이디어·사내기술",
    "organization": "삼성전자 DS부문 Foundry 기술팀",
    "submissionDate": "2023.11",
    "status": "awarded",
    "result": "최다 아이디어 우수상 🏆 (기술팀장 표창)",
    "badge": "🏆 최다 아이디어 우수상",
    "badgeClass": "bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold",
    "synopsis": "파운드리 디퓨전 고온 산화·확산 설비 운영 중 반복되는 파라미터 미세 오차를 줄이기 위해 AI 알고리즘과 인터락 자동화 아이디어를 집중 제안하여 엔지니어 중 '최다 아이디어 우수상' 수상.",
    "coreConcept": "사내 엔지니어링 실무 현장의 낭비 요소를 데이터 기반으로 발굴하여 수율 개선과 안전 표준화를 이뤄낸 실적.",
    "futureUsage": "제조 데이터 분석, 반도체 기술 혁신, 사내 TF 리더십을 입증하는 핵심 커리어 자산.",
    "fileName": "사내 공모 및 표창 이력 (사내망 등록 件)",
    "fileSize": "사내 보안 양식",
    "fullContent": "삼성전자 파운드리 사업부 디퓨전 기술팀 내 설비 운영 효율화 및 안전 개선을 위한 다수의 과제를 기획·제출하여 팀 내 최다 우수 아이디어 발굴자로 선정 및 기술팀장 표창 수여.",
    "tags": [
      "#삼성전자",
      "#Foundry",
      "#Diffusion",
      "#DS경진대회",
      "#최다아이디어우수상",
      "#기술팀장표창"
    ]
  },
  {
    "id": "c-2020-expressway-slogan",
    "year": "2020",
    "title": "한국도로공사 고속도로 전광판 교통안전 홍보문구 공모전",
    "pieceTitle": "내 마음을 네가 모르듯 앞차 멈춤 뒷차 모른다",
    "category": "naming",
    "categoryName": "슬로건·홍보문구",
    "organization": "한국도로공사",
    "submissionDate": "2020.11.30",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "고속도로 정체나 돌발 사고 발생 시 후미 추돌 사고를 막기 위해 '비상등 켜기 생활화'를 대중가요 가사의 라임을 차용한 직관적이고 운율감 있는 문구로 제안한 교통안전 슬로건.",
    "coreConcept": "\"내 마음을 네가 모르듯, 앞차 멈춤 뒷차 모른다\" - 19글자의 강력한 운율과 직관성으로 운전자의 즉각적인 행동(비상등 켜기)을 유도.",
    "futureUsage": "교통안전 슬로건, 공공 캠페인 카피라이팅, 짧은 홍보 문구 공모전에 대표 레퍼런스로 활용.",
    "fileName": "(김남현) 고속도로 전광판 교통안전 홍보문구 공모전 신청서.hwp",
    "fileSize": "17 KB",
    "fullContent": "붙임2\n공모전 신청서(개인정보 동의서 포함)\n \n「고속도로 전광판 문구 공모전」신청서\n \n구 분\n정체, 사고 발생 시 비상등 켜기 생활화\n성 명\n김 남 현\n생년월일\n1996년 01월 03일\n주 소\n경기도 화성시 능동 1066-3 아르젠 3차 오피스텔 412호\n연 락 처\n010-2232-3442\n홍보문구\n \n내\n마\n음\n을\n네\n가\n모\n르\n듯\n앞\n차\n멈\n춤\n뒷\n차\n모\n른\n다\n홍보문구\n설명\n※ 1인 1작만 가능(중복시 선 제출 작품만 인정)\n※ 유사한 내용으로 응모한 경우는 선 제출자의 작품으로 인정함\n※ 당선되지 않더라도 응모한 작품은 반환하지 않음\n \n< 개인정보 제공 및 이용 동의서 >\n1. 개인정보 수집․이용목적\n- 공모전 심사를 위해 필요한 본인확인 및 심사자료\n2. 개인정보 수집항목\n- 수집항목 : 성명, 생년월일, 주소, 연락처, 이메일\n3. 개인정보의 보유 및 이용기간\n- 공모전심사기간에만 보유, 이용, 보관됩니다.\n4. 동의 거부 및 동의 거부시 불이익 내용\n- 개인정보 수집 동의를 거부하실 수 있습니다. 다만, 동의하지 않을 경우 공모전 심사 대상에 포함되지 못합니다.\n- 공모전 심사에 필요한 개인정보는 공모전 이외에 다른 목적으로 사용하지 않습니다.\n개인정보 수집 및 이용에 동의하십니까? 동의함( o ), 동의하지 않음( )\n2020년 11월 30 일\n성명 : 김남현 (서명)\n※ 개인정보 동의서에 동의함 체크 후 성명만 기재한 뒤 신청서와 함께 제출하면 서명한 것으로 인정",
    "tags": [
      "#한국도로공사",
      "#교통안전문구",
      "#비상등켜기",
      "#앞차멈춤뒷차모른다",
      "#카피라이팅",
      "#슬로건"
    ]
  },
  {
    "id": "c-2020-basic-income",
    "year": "2020",
    "title": "2020년 경기도 청년기본소득 수필 공모전",
    "pieceTitle": "변화, 그 시작을 만들어 주신 것에 깊은 감사를 드립니다",
    "category": "literature",
    "categoryName": "문학·수필",
    "organization": "경기도",
    "submissionDate": "2020.11",
    "status": "submitted",
    "result": "출품 완료",
    "badge": "📤 출품 완료",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "COVID-19 팬데믹으로 관계가 단절되고 군중 속 고독에 빠져있던 청년 시절, 경기도 청년기본소득을 마중물 삼아 동네 서점과 골목 가게에서 사색하며 나를 사랑하는 법을 배우고, 쉼을 성장의 디딤돌로 승화시킨 자전적 수필.",
    "coreConcept": "\"우리 앞에 놓인 돌이 누군가에게는 걸림돌로, 누군가에게는 디딤돌로 보일 수 있습니다... 나를 가꾸고 이 사랑을 전파할 수 있게끔 성장하는 디딤돌의 시간\"",
    "futureUsage": "청년 복지 수필, 지자체 기본소득 성과 사례, 자전적 청년 에세이의 핵심 모티프.",
    "fileName": "김남현_청년기본소득 수필.hwp",
    "fileSize": "17 KB",
    "fullContent": "변화, 그 시작을 만들어 주신 것에 깊은 감사를 드립니다. COVID-19 사태 이후 우리의 삶은 척박하고 메마른 사막과도 같습니다. 서로간의 거리는 더욱 멀어지고 잠시나마 볼 수 있었던 반가운 얼굴마저, 반 이상은 가려진 채로 만나게 되었으며 온기는 느껴볼 수조차 없었습니다. 그러던 중 청년기본소득은 마치 단비처럼 내려 저의 마음을 촉촉이 적셔 주었습니다. 그저 집과 학교, 직장만을 오갔던 전과 달리, 기본소득으로 발급된 지역화폐를 통해 서점과 문구점, 그리고 골목마다 숨겨져 있던 보물 같은 가게들을 통해 저 혼자만의 시간을 값지고 소중하게 보낼 수 있었습니다. 사색하며 책과, 글귀 한 구절과, 생각을 담은 글과 메모들을 통해 저 자신을 더욱 사랑할 수 있는 시간을 보낼 수 있었습니다. 우리는 늘 함께하려 합니다. 외로움을 이겨내기 위해서는 어쩔 수 없이 함께여야 한다고 생각하고 있지만, 진정한 외로움과 고독은 혼자일 때가 아닌 함께 있음에도 불구하고 외롭다고 느낄 때 찾아옵니다. 심지어 군중속의 고독함을 겪으면 우리는 더욱 사랑과 애정을 갈구하게 됩니다. 남들과 같이 외롭다고 느낄 때면 잠시라도 가만히 있을 수 없고, 관심에 갈증을 느끼며 상대방의 사랑을 받으려 안달하게 되었던 저의 과거를 생각해 볼 때, 이번 청년기본소득을 통해 보내게 되었던 시간들은 비단 부가적인 소득으로 끝나지 않고 심적인 여유를 배울 수 있었던 귀중한 시간이 되었습니다. 청년기본소득은 함께하는 시간에도 많은 도움이 되었지만 저에게는 특히 외로움만 느끼는 혼자만의 시간이 아닌, 나를 가꾸는 즐거움과 행복, 그리고 저에 대한 사랑을 배우는 귀중한 시간이었습니다. 저에게는 꿈이 생겼습니다. 이 험난한 COVID-19 사태가 지나고 예전과 같은 일상으로 우리가 돌아가게 되면 저는 제가 배우게 되었던 혼자로써 값지고 행복한 시간을 보낼 수 있는 과정과 그 과정을 통해 배울 수 있었던 나에 대한 사랑과 행복을 많은 사람들에게 전파하고 싶습니다. 세상은 더욱 개인만을 중요시하고 공동체의식을 무너뜨리며 우리를 고립시키게 합니다. 우리는 사회적 거리두기 기간 이전에도 서로가 그리 가깝지 않았습니다. 육체적으로 가까웠을지언정 마음의 거리는 지금이나 예전이나 똑같았다고 생각합니다. 그 이유는, 관계를 시작하기에 앞서 가장 먼저 나를 사랑하지 않고 타인에게 관심과 애정을 갈구하여 마음속의 빈 공간을 채우려 했기 때문이라고 생각합니다. 타인의 관심과 애정으로 채워질 수는 없다는 걸 다들 알고 있으면서도 말입니다. 그 간극은 우리 스스로 채워나가야만 합니다. 우리는 더욱 우리 자신을 아끼고 사랑해야 합니다. 그러려면 하루 중 모두와 함께 지낼 때가 아닌, 홀로 보내는 시간을 값지고 애틋하게 사용해야 합니다. 내가 원하는 것이 무엇인지, 내가 진정으로 바라고 꿈꾸는 것은 무엇인지에 대해 진지하게 고민해본 사람은 그리 많지 않습니다. 대뜸 가장 좋아하는 건 무엇인지, 어떤 사람이 되고 싶은지에 대해서 물어보면 답할 수 있는 사람 또한 극소수밖에 없습니다. 하고 싶은 직업이나 벌고 싶은 연봉의 액수만이 우리는 삶의 성공척도라고 배워왔습니다. 그럼으로써 진정으로 내가 바라고 염원하는 것은 외면한 채, 남들이 부러워할 만한 삶만을 쫓아가고 있었는지도 모릅니다. 저 또한 그런 삶을 살아왔던 사람이었기에 이번 청년기본소득을 통해 저 자신에 대한 생각과 앞으로 어떻게 살아갈지에 대해 갈피를 잡게 된 귀중한 이시간은 값을 매길 수 없을 정도의 기쁨과 행복이었습니다.\n‘그때는 참 힘들었지‘ 라고 지금의 시간을 회상하는 시간도 곧 올 것입니다. 우리는 지금까지 수많은 난관과 시련을 이겨왔고, 또 우리는 이겨낼 것입니다. 그리고 우리는 그리웠던 일상을 돌아가게 될 것입니다. 하지만 우리는 전과 다른 시간을 보내게 될 것입니다. 제가 배울 수 있었던 시간은 저뿐만이 아닌 다른 분들에게도 주어졌으리라 의심치 않습니다. 청년기본소득은 그런 지원과 관심으로 우리에게 다가왔습니다. 아무런 지원조건이 없이, 가장 격동의 시기를 보낼 나이의 청년을 대상으로 지원해주셨기에 그 효과는 더욱 크게 작용했으리라 생각합니다. 우리 앞에 놓인 돌이 누군가에게는 걸림돌로 보일 수도 있고, 누군가에게는 디딤돌로 보일 수도 있습니다. 제 눈에는 이번 COVID-19 사태와 사회적 거리두기 기간이 제 자신을 가꾸고 더욱 사랑하며 이 사랑을 전파할 수 있게끔 성장하는 디딤돌의 시간이 되고 있다 생각합니다. 이 디딤돌을 딛고, 제가 보낼 수 있었던 값진 시간을 부디 다른 분들께도 전파하여 우리 모두가 행복한 삶을 살 수 있기를 간절히 바래봅니다.",
    "tags": [
      "#경기도",
      "#청년기본소득",
      "#수필공모",
      "#코로나19극복",
      "#자아성찰",
      "#디딤돌"
    ]
  },
  {
    "id": "c-2020-unseen-pain",
    "year": "2020",
    "title": "자작시 창작 아카이브 (2020년)",
    "pieceTitle": "보이지 않는 아픔",
    "category": "literature",
    "categoryName": "문학·시",
    "organization": "작가 아카이브 (개인 창작)",
    "submissionDate": "2020.08",
    "status": "completed",
    "result": "창작 및 아카이빙 완료",
    "badge": "✍️ 자작시",
    "badgeClass": "bg-slate-800 text-slate-300 border border-slate-700",
    "synopsis": "자신의 부주의한 말 한마디가 타인의 마음에 깊은 상처(칼자국)를 남겼음을 뒤늦게 깨닫고, 이미 늦었음을 알면서도 스스로에게 던지는 아픈 참회의 독백을 읊은 시.",
    "coreConcept": "\"그리 아플 줄 알았겠는가! 나의 말이 칼이 되어 네 마음을 찢어놓았을 줄을……. 내가 알았겠는가 묻는다. 이미 늦었음을 알고 있으면서도\"",
    "futureUsage": "성찰적 서정시, 인간관계와 말의 무게를 다루는 시집 및 에세이 인용구로 활용.",
    "fileName": "김남현_보이지 않는 아픔.hwp",
    "fileSize": "9 KB",
    "fullContent": "보이지 않는 아픔\n김남현\n그리 아플 줄 알았겠는가!\n나의 말이 칼이 되어 네 마음을 찢어놓았을 줄을…….\n내가 알았겠는가 묻는다.\n이미 늦었음을 알고 있으면서도,",
    "tags": [
      "#자작시",
      "#보이지않는아픔",
      "#말의무게",
      "#참회와성찰",
      "#서정시"
    ]
  }
],
  writingGuide: {
    literatureTips: [
      {
        title: "1. 도입부의 독창적 훅(Hook)",
        desc: "상투적인 풍경 묘사나 계절 인사 대신, 독자의 호기심을 즉각 자극하는 독특한 시각적 이미지나 대화, 역설적 질문으로 시작하세요."
      },
      {
        title: "2. 진정성 있는 자전적 디테일",
        desc: "추상적인 교훈보다 실제 겪은 구체적인 감각(촉각, 냄새, 떨림, 침묵의 길이)을 세밀하게 묘사할 때 심사위원의 마음을 움직입니다."
      },
      {
        title: "3. 보편적 공감으로의 확장",
        desc: "나만의 사적인 경험에 머무르지 않고, 타인에 대한 연민, 사회적 약자에 대한 배려, 시대적 고뇌 등 보편적 인간애로 주제를 승화시키세요."
      },
      {
        title: "4. 여운을 남기는 결말의 미학",
        desc: "모든 것을 명확한 교훈으로 설명하려 하지 말고, 독자 스스로 생각할 수 있는 여백과 여운을 남기는 상징적 문장으로 맺으세요."
      }
    ],
    ideaFramework: [
      { step: "Step 1", title: "문제 정의 (Problem)", desc: "사회·현장에서 아무도 해결하지 못한 명확한 페인포인트(Pain Point)를 구체적 수치와 함께 정의합니다." },
      { step: "Step 2", title: "발상의 전환 (Insight)", desc: "기존 해결 방식이 실패했던 원인을 짚고, 나만의 차별화된 관점(Insight)을 제시합니다." },
      { step: "Step 3", title: "솔루션 구체화 (Solution)", desc: "누가, 무엇을, 어떻게 이용하는지 서비스 흐름도나 핵심 기능 3가지를 명확히 설계합니다." },
      { step: "Step 4", title: "실행 가능성 (Feasibility)", desc: "예산, 법적 규제, 단계별 3개년 로드맵을 통해 '당장 실현 가능한 아이디어'임을 입증합니다." },
      { step: "Step 5", title: "기대 가치 (Impact)", desc: "정량적 경제 효과와 정성적 사회적 가치(ESG, 삶의 질 개선 등)를 요약합니다." }
    ],
    ideaNotes: [
      {
        title: "홍대 인디밴드 합주실 유휴 시간 공유 플랫폼",
        category: "idea",
        note: "평일 낮 시간대 비어 있는 합주실과 개인 연습 희망자(보컬, 신디, 드럼)를 매칭하는 타임쉐어 아이디어.",
        date: "2026.09"
      },
      {
        title: "에너지관리 실기 기출 풀이 시각화 인터랙티브 웹앱",
        category: "idea",
        note: "보일러 배관 계통도와 T-s 선도를 드래그하여 열효율을 계산하는 학습용 에듀테크 BM.",
        date: "2026.08"
      },
      {
        title: "사회복무요원 행정 혁신 수기: 복지의 틈새를 잇는 청년들",
        category: "literature",
        note: "공공기관 및 복지 현장에서 마주한 복지 사각지대와 이를 메우는 청년들의 진솔한 관찰 에세이.",
        date: "2026.07"
      }
    ]
  }
};

// =========================================================================
// 17. 갤럭시 모바일 캘린더 양방향 실시간 연동 데이터 (Galaxy Calendar Sync)
// =========================================================================
const INITIAL_CALENDAR_EVENTS = [
  {
    id: "cal-01",
    title: "에너지관리기사 실기 제1차 실전 모의고사",
    date: "2026-10-18",
    startTime: "09:00",
    endTime: "13:00",
    allDay: false,
    category: "exam",
    categoryLabel: "시험/학사",
    color: "#38bdf8",
    location: "집 서재 / 독서실",
    memo: "공학용 계산기 지참, 연소공학 및 보일러 효율 계산 공식 집중 풀이",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-02",
    title: "방통대 사회복지학과 2학기 중간과제물 최종 제출 마감",
    date: "2026-10-15",
    startTime: "23:59",
    endTime: "23:59",
    allDay: true,
    category: "knou",
    categoryLabel: "방통대 학점",
    color: "#818cf8",
    location: "방송통신대학교 온라인 과제물 포털",
    memo: "사회복지행정론 과제물 제출 확인 및 영수증 캡처",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-03",
    title: "인디밴드 정기 합주 (신디사이저 & 보컬 사운드 체크)",
    date: "2026-10-10",
    startTime: "19:00",
    endTime: "22:00",
    allDay: false,
    category: "band",
    categoryLabel: "밴드 합주",
    color: "#c084fc",
    location: "홍대 사운드스퀘어 합주실 3호점",
    memo: "자작곡 '청춘의 소용돌이' 신디사이저 인트로 리드 라인 및 코러스 하모니 연습",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-04",
    title: "밴드 가을 정기 클럽 라이브 공연",
    date: "2026-10-24",
    startTime: "18:00",
    endTime: "21:30",
    allDay: false,
    category: "band",
    categoryLabel: "밴드 공연",
    color: "#e879f9",
    location: "홍대 클럽 프리버드 리브스",
    memo: "리허설 16:30까지 집결, 지인 티켓 명단 체크",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-05",
    title: "★ 2026년 제3회 에너지관리기사 실기 본시험",
    date: "2026-11-07",
    startTime: "09:00",
    endTime: "12:30",
    allDay: false,
    category: "exam",
    categoryLabel: "국가기술자격",
    color: "#f59e0b",
    location: "한국산업인력공단 서울남부국가자격시험장",
    memo: "신분증, 수험표, 흑색볼펜, 공학용 계산기 지참 필수! 합격 목표 75점 이상!",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-06",
    title: "✈️ 산티아고 순례길 인천공항 출국 (까미노 드 포르투)",
    date: "2026-11-09",
    startTime: "10:30",
    endTime: "23:00",
    allDay: true,
    category: "camino",
    categoryLabel: "산티아고 순례",
    color: "#10b981",
    location: "인천국제공항 제2여객터미널",
    memo: "배낭 무게 7.5kg 검사, 여권/크레덴샬/힙색 휴대 확인. 3주간의 힐링 여정 출발!",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-07",
    title: "까미노 드 포르투 해안길 1일차 트레킹 (Porto ~ Matosinhos)",
    date: "2026-11-12",
    startTime: "07:30",
    endTime: "14:00",
    allDay: false,
    category: "camino",
    categoryLabel: "도보 순례",
    color: "#34d399",
    location: "포르투 대성당 앞 광장 출발",
    memo: "첫 크레덴샬 스탬프 날인, 대서양 해안 목재 데크길 보행 (약 12km)",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-08",
    title: "산티아고 데 콤포스텔라 완주 증명서 수령 & 피스테라 이동",
    date: "2026-11-28",
    startTime: "11:00",
    endTime: "18:00",
    allDay: false,
    category: "camino",
    categoryLabel: "순례 완주",
    color: "#059669",
    location: "산티아고 순례자 사무소 (Oficina de Acogida al Peregrino)",
    memo: "콤포스텔라(완주증명서) 발급 및 세상의 끝 피스테라 바다 석양 조망",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-09",
    title: "[갤럭시 폰 캘린더 연동] 월간 인바디 측정 & 체형 리포트 분석",
    date: "2026-10-02",
    startTime: "20:00",
    endTime: "21:00",
    allDay: false,
    category: "personal",
    categoryLabel: "인바디/헬스",
    color: "#f43f5e",
    location: "피트니스 센터",
    memo: "골격근량 33.5kg 유지 및 체지방률 15% 진입 점검",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-10",
    title: "[갤럭시 폰 캘린더 연동] 브런치스토리 월요 연재 글 발행",
    date: "2026-10-05",
    startTime: "21:00",
    endTime: "22:00",
    allDay: false,
    category: "personal",
    categoryLabel: "SNS/브런치",
    color: "#ec4899",
    location: "브런치 작가 스튜디오",
    memo: "주제: 실패를 성찰의 자산으로 전환하는 법 (공모전 탈락 회고)",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-11",
    title: "[갤럭시 폰 캘린더 연동] 오픽(OPIc) AL 실전 모의 인터뷰 섀도잉",
    date: "2026-10-12",
    startTime: "14:00",
    endTime: "15:00",
    allDay: false,
    category: "career",
    categoryLabel: "어학/오픽",
    color: "#14b8a6",
    location: "모바일 팟캐스트 플레이어",
    memo: "Eva 인터뷰 질문 5대 빈출 주제 중 'Routine & Plans' AL 2분 답변 스피킹",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  },
  {
    id: "cal-12",
    title: "[갤럭시 폰 캘린더 연동] 10월 월말 커리어 & 역량 포트폴리오 회고",
    date: "2026-10-30",
    startTime: "20:30",
    endTime: "22:00",
    allDay: false,
    category: "career",
    categoryLabel: "커리어 회고",
    color: "#6366f1",
    location: "노트북 대시보드 / 모바일",
    memo: "에너지 실기 최종 점검, 순례길 패킹리스트 100% 완료 여부 확인",
    syncWithGalaxy: true,
    lastSynced: "2026-10-01 08:30"
  }
];

global.INITIAL_CONTEST_DATA = INITIAL_CONTEST_DATA;
global.INITIAL_CALENDAR_EVENTS = INITIAL_CALENDAR_EVENTS;


// =========================================================================
// Security & Data Isolation Vault System (P0 Security Compliance)
// =========================================================================
const GUEST_MASKED_PORTFOLIO = {
  portfolioDataVersion: 2,
  summary: {
    totalAwards: 23,
    totalCareers: 15,
    highlightAwards: 8,
    activeCareers: 3,
    notice: "🌟 김남현 수상 23건 및 주요 경력·TF 15건 포트폴리오 (열람 가능)"
  },
  // 수상 및 경력 데이터는 방문자/게스트에게도 항상 100% 정상 공개 표출
  awards: (typeof INITIAL_PORTFOLIO_DATA !== 'undefined' && INITIAL_PORTFOLIO_DATA.awards) ? INITIAL_PORTFOLIO_DATA.awards : [],
  careers: (typeof INITIAL_PORTFOLIO_DATA !== 'undefined' && INITIAL_PORTFOLIO_DATA.careers) ? INITIAL_PORTFOLIO_DATA.careers : [],
  radarData: (typeof INITIAL_PORTFOLIO_DATA !== 'undefined' && INITIAL_PORTFOLIO_DATA.radarData) ? INITIAL_PORTFOLIO_DATA.radarData : null
};

const GUEST_MASKED_INBODY = {
  inbodyDataVersion: 2,
  summary: {
    totalRecords: 89,
    targetWeight: 68.0,
    currentStatus: "D자형 골격근 발달형",
    notice: "🔒 세부 89회차 측정치 및 신체 데이터는 관리자 인증 후 로드됩니다."
  },
  records: []
};

const GUEST_MASKED_CONTEST = {
  contestDataVersion: 3,
  title: "공모전 출품 이력 & 문학·아이디어 아카이브 (총 42선)",
  categories: (typeof INITIAL_CONTEST_DATA !== 'undefined' && INITIAL_CONTEST_DATA.categories) ? INITIAL_CONTEST_DATA.categories : [],
  summary: {
    totalCount: 42,
    notice: "🔒 공모전 출품 원문 및 본선 진출 기획서는 관리자 인증 후 열람 가능합니다."
  },
  items: [],
  evaluationFramework: (typeof INITIAL_CONTEST_DATA !== 'undefined' && INITIAL_CONTEST_DATA.evaluationFramework) ? INITIAL_CONTEST_DATA.evaluationFramework : {},
  templates: (typeof INITIAL_CONTEST_DATA !== 'undefined' && INITIAL_CONTEST_DATA.templates) ? INITIAL_CONTEST_DATA.templates : []
};

const GUEST_MASKED_CALENDAR = [];

let _isVaultUnlocked = false;

const SecurityVault = {
  isUnlocked: () => _isVaultUnlocked,

  unlock(authKey) {
    const validKeys = ['3442', '2232', 'carlosnam6363@gmail.com', 'admin_carlosnam'];
    if (!authKey || !validKeys.includes(String(authKey).trim().toLowerCase())) {
      return false;
    }
    _isVaultUnlocked = true;
    return true;
  },

  lock() {
    _isVaultUnlocked = false;
  },

  getPortfolioData() {
    return _isVaultUnlocked ? INITIAL_PORTFOLIO_DATA : GUEST_MASKED_PORTFOLIO;
  },

  getInbodyData() {
    return _isVaultUnlocked ? INITIAL_INBODY_DATA : GUEST_MASKED_INBODY;
  },

  getContestData() {
    return _isVaultUnlocked ? INITIAL_CONTEST_DATA : GUEST_MASKED_CONTEST;
  },

  getCalendarData() {
    return _isVaultUnlocked ? INITIAL_CALENDAR_EVENTS : GUEST_MASKED_CALENDAR;
  },

  getRawVault() {
    if (!_isVaultUnlocked) return null;
    return {
      portfolio: INITIAL_PORTFOLIO_DATA,
      inbody: INITIAL_INBODY_DATA,
      contest: INITIAL_CONTEST_DATA,
      calendarEvents: INITIAL_CALENDAR_EVENTS
    };
  }
};

global.SecurityVault = SecurityVault;

})(typeof window !== 'undefined' ? window : this);
