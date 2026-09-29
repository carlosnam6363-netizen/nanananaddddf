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
  caminoDataVersion: 3,
  title: "산티아고 순례길 까미노 드 포르투 (Camino Portugués 3주)",
  startDate: "2026-11-09",
  endDate: "2026-11-29",
  ddayTarget: "2026-11-09",
  route: "포르투(Porto) 해안길 ~ 비아나 ~ 비고 ~ 산티아고 데 콤포스텔라 ~ 피스테라",
  totalDistance: "약 240 km (도보 순례 + 주요 거점 도시 2일 체류)",
  status: "준비 중 (항공권 & 코스 확정)",
  durationInfo: "총 21일간 (출국 2일, 귀국 2일, 포르투/비아나/비고/산티아고 4대 거점 각 2일 체류 관광)",
  packingList: [
    { text: "크레덴샬(순례자 여권) & 가리비 껍데기", category: "필수/서류", done: false },
    { text: "발목 지지용 트레킹화 (길들인 중등산화)", category: "의류/신발", done: false },
    { text: "30L~35L 경량 순례자 배낭 & 레인커버", category: "장비", done: false },
    { text: "메리노울 트레킹 양말 (3켤레) & 스포츠 테이프", category: "의류/신발", done: false },
    { text: "바셀린 & 콤피드(물집 방지 패치) & 소독약", category: "위생/약품", done: false },
    { text: "방수 기능성 판초 우의 & 바람막이", category: "의류/신발", done: false },
    { text: "카본 트레킹 폴(스틱 1쌍) & 무릎 보호대", category: "장비", done: false },
    { text: "초경량 침낭 라이너 & 귀마개 (알베르게 필수)", category: "장비", done: false },
    { text: "트래블로그 카드 2장 & 유로화 소액 현금", category: "필수/서류", done: false },
    { text: "유럽 통합 eSIM & 20,000mAh 보조배터리", category: "전자기기", done: false },
    { text: "휴대용 빨랫줄 & 옷핀 & 속건 여행용 타월", category: "위생/생활", done: false },
    { text: "미니 플래시 / 헤드랜턴 (새벽 출발용)", category: "장비", done: false }
  ],
  itinerary: [
    {
      day: "Day 1 (11/09)",
      date: "2026-11-09",
      title: "인천 국제공항 출발 (출국 1일차)",
      distance: "비행 약 14시간",
      type: "flight",
      stay: "기내 1박",
      description: "인천공항 제2터미널 출발, 유럽 주요 허브(파리/프랑크푸르트 등) 경유. 에너지관리기사 시험 후 홀가분한 마음으로 떠나는 3주 순례 여정의 시작.",
      highlight: "설레는 여정의 첫 발걸음!"
    },
    {
      day: "Day 2 (11/10)",
      date: "2026-11-10",
      title: "포르투(Porto) 공항 도착 & 호텔 체크인 (출국 2일차)",
      distance: "시내 이동",
      type: "flight",
      stay: "포르투 구시가지 호텔",
      description: "포르투 프란시스코 사 카르네이루 공항 도착. 지하철(메트로)로 시내 이동 후 숙소 체크인. 도루강(Douro River) 강변 노을을 바라보며 시차 적응 및 휴식.",
      highlight: "낭만의 도시 포르투 입성"
    },
    {
      day: "Day 3 (11/11)",
      date: "2026-11-11",
      title: "포르투 시내 관광 & 순례자 등록 (포르투 2일 체류 1일차)",
      distance: "도보 관광 약 8 km",
      type: "tour",
      stay: "포르투 구시가지 호텔",
      description: "아름다운 아줄레주 타일의 상벤투(São Bento) 기차역, 해리포터 모티브 렐루 서점, 클레리구스 탑 탐방. 포르투 대성당(Sé do Porto) 방문하여 순례자 여권(Credencial) 수령 및 첫 공식 스탬프(Sello) 날인.",
      highlight: "대성당에서 순례자 여권(크레덴샬) 수령 & 첫 스탬프"
    },
    {
      day: "Day 4 (11/12)",
      date: "2026-11-12",
      title: "동루이스 다리 & 빌라 노바 드 가이아 와이너리 (포르투 2일 체류 2일차)",
      distance: "도보 관광 약 6 km",
      type: "tour",
      stay: "포르투 구시가지 호텔",
      description: "동루이스 1세 다리(Ponte de Dom Luís I) 2층 상판 도보 횡단. 가이아 지구의 유서 깊은 포트 와인(Port Wine) 와이너리 투어 및 시음. 리베이라 광장에서 강변 버스킹 음악 감상하며 내일부터 시작될 도보 순례 마음 다잡기.",
      highlight: "동루이스 다리 파노라마 선셋 & 포트 와인 투어"
    },
    {
      day: "Day 5 (11/13)",
      date: "2026-11-13",
      title: "포르투 대성당 ~ 마토지뉴스 ~ 빌라 두 콘드 (해안길 도보 순례 시작)",
      distance: "약 22 km",
      type: "walk",
      stay: "빌라 두 콘드 알베르게/숙소",
      description: "포르투 대성당 앞 출발! 도루강을 따라 대서양 바다와 만나는 포즈(Foz) 지구를 지나 마토지뉴스 해변 나무 데크길을 걷습니다. 시원한 대서양 파도 소리와 함께하는 해안길(Senda Litoral) 첫 구간.",
      highlight: "대서양 해안 나무 데크길(Passadiços) 첫 도보 순례"
    },
    {
      day: "Day 6 (11/14)",
      date: "2026-11-14",
      title: "빌라 두 콘드 ~ 포보아 드 바르징 ~ 에스포센드",
      distance: "약 24 km",
      type: "walk",
      stay: "에스포센드 알베르게",
      description: "유서 깊은 어촌 마을 포보아 드 바르징(Póvoa de Varzim)을 거쳐 카바두강 하구의 에스포센드(Esposende)로 전진. 넓게 펼쳐진 백사장과 모래언덕, 소나무 숲길이 번갈아 나타납니다.",
      highlight: "모래언덕(Dunes)과 소나무 숲길의 정취"
    },
    {
      day: "Day 7 (11/15)",
      date: "2026-11-15",
      title: "에스포센드 ~ 비아나 두 카스텔루 (거점 도시 입성)",
      distance: "약 25 km",
      type: "walk",
      stay: "비아나 두 카스텔루 호텔/호스텔",
      description: "네이바강을 건너 유칼립투스 숲길을 지나 포르투갈 북부의 보석이라 불리는 해안 항구 도시 비아나 두 카스텔루(Viana do Castelo)에 입성. 에펠이 설계한 철교를 건너 역사 지구 도착.",
      highlight: "에펠 철교 건너 아름다운 항구 도시 입성"
    },
    {
      day: "Day 8 (11/16)",
      date: "2026-11-16",
      title: "비아나 두 카스텔루 산타 루시아 & 휴식 (비아나 2일 체류)",
      distance: "도보 관광 약 5 km",
      type: "tour",
      stay: "비아나 두 카스텔루 호텔/호스텔",
      description: "푸니쿨라를 타고 몬테 데 산타 루시아(Santa Luzia) 성당 등정. 내셔널 지오그래픽이 선정한 세계 최고의 파노라마 뷰 감상. 카베델루 해변 산책 및 전통 해산물 밥(Arroz de Marisco) 만찬으로 체력 완벽 재충전.",
      highlight: "산타 루시아 성당에서 내려다보는 대서양 파노라마 전경"
    },
    {
      day: "Day 9 (11/17)",
      date: "2026-11-17",
      title: "비아나 두 카스텔루 ~ 카미냐 (포르투갈 국경 관문)",
      distance: "약 27 km",
      type: "walk",
      stay: "카미냐 알베르게/숙소",
      description: "해안 암초와 바닷길을 따라 북진하여 포르투갈의 국경 관문 카미냐(Caminha) 도착. 미뇨강(Rio Minho) 건너편으로 스페인 갈리시아의 산등성이가 손에 잡힐 듯 보입니다.",
      highlight: "국경 도시 카미냐의 고즈넉한 광장 정취"
    },
    {
      day: "Day 10 (11/18)",
      date: "2026-11-18",
      title: "카미냐 (페리 국경 도하) ~ 아 과르다 ~ 바이오나 (스페인 진입)",
      distance: "약 25 km",
      type: "walk",
      stay: "바이오나 알베르게/호스텔",
      description: "보트를 타고 미뇨강을 건너 스페인 갈리시아 아 과르다(A Guarda)로 입국! 시차 1시간 빨라짐. 켈트 유적지 산타 테크라를 바라보며 웅장한 해안 절벽길을 따라 콜럼버스의 배 핀타호가 도착했던 역사 도시 바이오나(Baiona) 도착.",
      highlight: "보트 타고 스페인 국경 넘기 & 웅장한 해안 절벽길"
    },
    {
      day: "Day 11 (11/19)",
      date: "2026-11-19",
      title: "바이오나 ~ 비고 (갈리시아 최대 항구 도시 입성)",
      distance: "약 25 km",
      type: "walk",
      stay: "비고 중심가 호텔/숙소",
      description: "리아스 바이샤스(Rías Baixas) 해안 만을 따라 비고(Vigo)로 행진. 도시 외곽에서 바라보는 비고 만과 시에스 제도(Islas Cíes)의 전경이 장관을 이룹니다. 활기 넘치는 대도시 숙소 체크인.",
      highlight: "비고 만과 시에스 섬 조망 & 활기찬 항구 도시 진입"
    },
    {
      day: "Day 12 (11/20)",
      date: "2026-11-20",
      title: "비고 구시가지 & 카스트로 요새 탐방 (비고 2일 체류)",
      distance: "도보 관광 약 6 km",
      type: "tour",
      stay: "비고 중심가 호텔/숙소",
      description: "구시가지 카스코 베호(Casco Vello) 산책, 몬테 도 카스트로(O Castro) 요새에서 비고 항 전경 감상. 유명 굴 거리(Rúa da Pescadería)에서 신선한 갈리시아산 생굴과 알바리뇨(Albariño) 화이트 와인 페어링 즐기기.",
      highlight: "카스트로 요새 전망 & 신선한 갈리시아 굴 거리 미식"
    },
    {
      day: "Day 13 (11/21)",
      date: "2026-11-21",
      title: "비고 ~ 레돈델라 (해안길과 중앙길의 합류)",
      distance: "약 16 km",
      type: "walk",
      stay: "레돈델라 공립 알베르게",
      description: "비고를 출발해 산길과 숲길을 지나 레돈델라(Redondela)에 도착. 포르투갈 내륙 중앙길(Central Route)을 걸어온 전 세계 순례자들과 반갑게 합류하는 상징적인 지점.",
      highlight: "중앙길 순례자들과의 반가운 만남 & '부엔 카미노!'"
    },
    {
      day: "Day 14 (11/22)",
      date: "2026-11-22",
      title: "레돈델라 ~ 폰테삼파이오 ~ 폰테베드라",
      distance: "약 19 km",
      type: "walk",
      stay: "폰테베드라 알베르게/호스텔",
      description: "나폴레옹 군대를 물리친 유서 깊은 중세 다리 폰테삼파이오(Ponte Sampaio)를 건너 숲길 트레킹. 갈리시아의 주도 폰테베드라(Pontevedra) 도착, 조개껍데기 모양의 성 페레그리나(La Peregrina) 성당 참배.",
      highlight: "조개껍데기 평면의 순례자 성 페레그리나 성당"
    },
    {
      day: "Day 15 (11/23)",
      date: "2026-11-23",
      title: "폰테베드라 ~ 칼다스 데 레스 (온천 마을)",
      distance: "약 21 km",
      type: "walk",
      stay: "칼다스 데 레스 숙소",
      description: "아름다운 포도밭 터널과 조용한 시골 마을길을 걷습니다. 로마 시대부터 유명한 온천 마을 칼다스 데 레스(Caldas de Reis) 도착. 광장의 천연 유황 온천 족욕 분수대에 발을 담그고 피로를 말끔히 씻어냅니다.",
      highlight: "마을 공용 온천 족욕탕에서 즐기는 피로 해소"
    },
    {
      day: "Day 16 (11/24)",
      date: "2026-11-24",
      title: "칼다스 데 레스 ~ 발가 ~ 파드론 (성 야고보 전설의 땅)",
      distance: "약 19 km",
      type: "walk",
      stay: "파드론 알베르게/숙소",
      description: "갈리시아 전원 풍경을 지나 성 야고보의 유해를 실은 배가 도착했던 성지 파드론(Padrón) 도착. 산티아고 성당의 '페드론(배를 묶었던 돌)' 확인. 스페인 전통 꽈리고추 튀김(Pimientos de Padrón) 맛보기.",
      highlight: "성 야고보 유골의 기원 파드론 도착 & 피미엔토스 고추 튀김"
    },
    {
      day: "Day 17 (11/25)",
      date: "2026-11-25",
      title: "파드론 ~ 산티아고 데 콤포스텔라 (영광의 완주 입성!)",
      distance: "약 24 km",
      type: "walk",
      stay: "산티아고 시내 부티크 호텔",
      description: "마지막 걸음! 멀리 대성당 첨탑이 보이는 환희의 언덕(Monte do Gozo)을 지나 대망의 산티아고 대성당 앞 오브라도이로(Obradoiro) 광장에 마침내 입성! 배낭을 바닥에 내려놓고 성당을 올려다보는 순간 뜨거운 감격. 순례자 사무소에서 완주 인증서(Compostela) 수령.",
      highlight: "★ 240km 대장정 완주! 오브라도이로 광장의 벅찬 감동 & 콤포스텔라 인증서"
    },
    {
      day: "Day 18 (11/26)",
      date: "2026-11-26",
      title: "산티아고 대성당 순례자 미사 & 축하 만찬 (산티아고 2일 체류)",
      distance: "시내 관광 약 5 km",
      type: "tour",
      stay: "산티아고 시내 부티크 호텔",
      description: "낮 12시 산티아고 대성당 공식 순례자 미사 참배. 거대한 은제 향로가 성당 공중을 가르는 보타푸메이로(Botafumeiro) 장관 관람. 순례길 동행들과의 감격스러운 완주 축하 갈리시아 문어 요리(Pulpo a la Gallega) 만찬.",
      highlight: "대성당 보타푸메이로(거대 향로) 순례자 미사 & 갈리시아 풀포 만찬"
    },
    {
      day: "Day 19 (11/27)",
      date: "2026-11-27",
      title: "세상의 끝 피스테라(Finisterre) & 무시아(Muxía) 당일 투어",
      distance: "투어 버스 당일 여행",
      type: "tour",
      stay: "산티아고 시내 부티크 호텔",
      description: "중세 순례자들이 세상의 끝이라 믿었던 피스테라 곶(0.00 km 표지석) 방문. 끝없이 펼쳐진 대서양 바다를 바라보며 낡은 부츠나 조개껍데기를 마주하고 새로운 다짐. 파도가 부서지는 성스러운 무시아 성모 성당 방문.",
      highlight: "대서양 절벽 끝 '0.00 km' 표지석에서 완성하는 순례의 마침표"
    },
    {
      day: "Day 20 (11/28)",
      date: "2026-11-28",
      title: "산티아고 공항 출발 & 유럽 경유 (귀국 1일차)",
      distance: "비행 약 15시간",
      type: "flight",
      stay: "기내 1박",
      description: "산티아고 데 콤포스텔라(SCQ) 공항 출발, 마드리드/파리 경유하여 인천행 국제선 탑승. 3주간의 잊지 못할 추억과 단단해진 내면을 가슴에 품고 귀국길에 오릅니다.",
      highlight: "3주간의 여정을 가슴에 품고 귀국길"
    },
    {
      day: "Day 21 (11/29)",
      date: "2026-11-29",
      title: "인천 국제공항 무사 귀국 (귀국 2일차)",
      distance: "귀가",
      type: "flight",
      stay: "스위트 홈",
      description: "인천 국제공항 무사 도착. 짐 정리 및 사랑하는 가족/지인들과의 반가운 재회. 순례길에서 얻은 맑은 에너지로 앞으로의 일상과 커리어 도약을 당차게 시작!",
      highlight: "무사 귀국 완료! 더 성숙하고 당당해진 나로서의 새로운 출발"
    }
  ],
  memos: "에너지관리기사 시험 직후 지친 심신을 완벽히 리셋하고 3주간 나 자신과 깊게 대화한 성찰의 시간.\n'부엔 카미노(Buen Camino)!'에서 배운 한 걸음의 위대함을 품고 앞으로 나아가기."
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

// ==========================================================================// ==========================================================================
// 수상 내역 (23건) & 주요 경력 (15건) 통합 포트폴리오 초기 데이터 (⭐ 신규 추가)
// ==========================================================================
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
// 14. 국립 한국방송통신대학교 (KNOU) 사회복지학과 학점 및 수강 관리 데이터
// 2026학년도 2학기 (형성평가 20% + 중간과제물 30% + 기말고사 50%)
// =========================================================================
const INITIAL_KNOU_DATA = {
  knouDataVersion: 1,
  university: '국립 한국방송통신대학교 (KNOU)',
  department: '사회복지학과',
  currentSemester: '2026학년도 2학기',
  semesterDDay: 'D-75',
  formativePeriod: {
    startDate: '2026-08-17',
    endDate: '2026-12-13',
    remainingDays: 75,
    memo: '형성평가(강의 수강) 인정 기간: 2026.08.17 ~ 2026.12.13 (기한 내 100% 수강 시 20점 만점 인정)'
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
      progress: 46.67,
      status: 'in_progress',
      statusBadge: '형성평가 46.67%',
      badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 9.33,
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
      progress: 26.67,
      status: 'in_progress',
      statusBadge: '형성평가 26.67%',
      badgeClass: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 5.33,
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
      progress: 26.67,
      status: 'in_progress',
      statusBadge: '형성평가 26.67%',
      badgeClass: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
      ruleType: 'standard',
      specialRule: '형성평가(20%) + 중간과제물(30%) + 기말고사(50%)',
      formativeScore: 5.33,
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
      progress: 46.67,
      status: 'in_progress',
      statusBadge: '형성평가 46.67%',
      badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
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
  global.INITIAL_ENGLISH_DATA = INITIAL_ENGLISH_DATA;


// =========================================================================
// 16. 공모전 & 문학·아이디어 출품 이력 및 창작 아카이브 데이터
// =========================================================================
const INITIAL_CONTEST_DATA = {
  contestDataVersion: 1,
  title: "공모전 출품 이력 & 문학·아이디어 아카이브",
  categories: [
    { id: "all", name: "전체 부문", icon: "fa-border-all" },
    { id: "literature", name: "문학·문예 (산문/수필/소설)", icon: "fa-book-open" },
    { id: "idea", name: "아이디어·혁신기획", icon: "fa-lightbulb" },
    { id: "policy", name: "정책·공공제안", icon: "fa-landmark" },
    { id: "naming", name: "슬로건·네이밍", icon: "fa-signature" }
  ],
  statuses: [
    { id: "all", name: "전체 상태" },
    { id: "awarded", name: "🏆 수상작 (Awarded)" },
    { id: "reviewing", name: "⏳ 심사 진행 중" },
    { id: "submitted", name: "📤 출품 완료" },
    { id: "draft", name: "📝 기획·보관함" }
  ],
  entries: [
    {
      id: "contest-2026-08",
      title: "제2회 화성시 양성평등 공모전",
      pieceTitle: "다름을 품는 온기 - 일상 속 작은 배려와 공존의 시선",
      category: "literature",
      categoryName: "문학·산문",
      organization: "화성시여성가족청소년재단",
      submissionDate: "2026.08",
      status: "awarded",
      result: "장려상 수상 (재단이사장 표창)",
      badge: "🏆 장려상",
      badgeClass: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
      synopsis: "양성평등의 가치를 거창한 담론이 아닌, 가족과 직장 등 일상 속에서 마주하는 소소한 배려와 역할 존중의 시선으로 풀어낸 자전적 산문 작품.",
      coreConcept: "일상성, 공감성, 상호 배려의 시선. '틀림이 아닌 다름'을 인정하는 따뜻한 서사 전개.",
      fullContent: `우리가 살아가는 하루 속에는 수많은 '당연함'이 스쳐 지나갑니다. 아침의 식탁을 정성스레 차려내던 어머니의 거친 손등, 퇴근길 묵직한 가방을 짊어지고 골목길을 밝히던 아버지의 굽은 등... 우리는 종종 그 수고로움 뒤에 '성별'이라는 오래된 잣대를 무의식적으로 덧씌우곤 했습니다.

하지만 양성평등이란 거창한 구호나 누군가의 자리를 빼앗는 제로섬 게임이 아닙니다. 그것은 서로가 짊어진 삶의 무게를 헤아리고, 각자의 자리에서 흘리는 땀방울을 동등한 인격의 가치로 존중하는 '따뜻한 온기'에서 출발합니다. 

내가 먼저 설거지통 앞으로 다가서고, 상대방의 고단한 하루에 따뜻한 차 한 잔을 건넬 수 있는 마음. 서로의 다름을 경쟁의 도구가 아닌, 부족함을 채워주는 상생의 퍼즐 조각으로 바라볼 때, 비로소 우리의 일상은 차별 없는 온전한 평등으로 채워집니다. 다름을 품는 온기가 더 많은 이들의 마음에 스며들기를 바랍니다.`,
      futureUsage: "가족·공동체 수필 공모전, 시민 복지 수기, '배려와 공존' 모티프의 에세이 집필 시 핵심 서사로 재활용 가능.",
      tags: ["#양성평등", "#산문", "#화성시", "#재단이사장표창", "#공존과배려"],
      fileName: "제2회_화성시_양성평등_공모전_산문_출품원고.pdf",
      fileSize: "342 KB"
    },
    {
      id: "contest-2025-12",
      title: "장애인과 함께하는 문해(문예) 글짓기 대회",
      pieceTitle: "마음의 획을 잇다 - 글자를 배우며 세상을 만난 이들의 눈빛",
      category: "literature",
      categoryName: "문학·수필",
      organization: "문해교육협회 / 대한민국 국회",
      submissionDate: "2025.12",
      status: "awarded",
      result: "대상 수상 (국회 국방위원장 표창)",
      badge: "👑 대상 (국회 표창)",
      badgeClass: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
      synopsis: "사회복지 실습 및 문해 교육 현장에서 글을 깨쳐가는 어르신들과 장애인 학습자들의 삶의 궤적을 곁에서 지켜보며 느낀 감동과 배움의 숭고함을 진솔하게 엮은 수필.",
      coreConcept: "문해(Literacy)를 통한 세상과의 연결과 존엄성 회복. 진정성 있는 현장 관찰과 따뜻한 문장력.",
      fullContent: `삐뚤빼뚤하게 눌러쓴 연필 자국 위로 돋보기 너머의 침침한 눈동자가 머뭅니다. 자음 'ㄱ'과 모음 'ㅏ'가 만나 '가'가 되기까지, 여든이 넘은 어르신과 손끝이 떨리는 장애인 학습자의 손가락마디에는 말로 다 전하지 못한 긴 세월의 한이 서려 있었습니다.

"선생님, 내 이름 석 자를 통장에 처음 내 손으로 적은 날, 은행 창구에 서서 한참을 울었습니다."

그분들에게 글을 배운다는 것은 단순한 문자의 습득이 아니었습니다. 세상과 단절되었던 두터운 벽을 허물고, 비로소 내 삶의 온전한 주인이 되는 눈부신 해방의 순간이었습니다. 마음의 획을 긋고, 또 하나의 선을 이어 단어를 만들어내듯, 우리는 서로의 상처를 보듬고 세상과 소통하는 법을 배웁니다. 배움에는 나이도, 장애의 벽도 없음을 그들의 빛나는 눈빛 속에서 깊이 깨달았습니다.`,
      futureUsage: "사회복지 문예 공모, 소외계층 인권 수기, 교육봉사 감동 에세이로 확장 가능.",
      tags: ["#문해교육", "#문예글짓기", "#대상수상", "#국회국방위원장상", "#사회복지"],
      fileName: "문해문예_글짓기대회_수필_대상원문.docx",
      fileSize: "185 KB"
    },
    {
      id: "contest-2026-03",
      title: "화성시 청년정책 제안 공모전",
      pieceTitle: "동탄권역 청년 교육·참여·권리 증진을 위한 '청년 링크 스테이션' 구축안",
      category: "policy",
      categoryName: "정책·공공제안",
      organization: "화성시청 청년정책과",
      submissionDate: "2026.03",
      status: "awarded",
      result: "우수 정책 채택 (청년정책협의체 위원 및 3분과장 위촉)",
      badge: "⭐ 우수 정책 채택",
      badgeClass: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
      synopsis: "동탄 신도시 및 인근 청년들의 교육 격차 해소와 자치 참여 권리를 원스톱으로 지원하는 온·오프라인 하이브리드 청년 거점 플랫폼 제안서.",
      coreConcept: "공간 인프라와 디지털 커뮤니티의 결합, 청년 권익 네트워크의 자생적 생태계 조성.",
      fullContent: `[제안 배경]
화성시 동탄권역은 청년 인구 비율이 전국 최고 수준임에도 불구하고, 청년들이 능동적으로 역량을 개발하고 정책 결정에 참여할 수 있는 열린 거점 공간과 정보 연계망이 부족합니다.

[핵심 솔루션: 3대 거점 연계망]
1. 청년 권리·교육 센터: 실무 직무 교육 및 노동 권익 법률 상담 상시화
2. 오픈 랩(Open Lab): 청년 창작자 및 스타트업 간의 네트워킹 코워킹 스페이스
3. 모바일 링크 앱: 관내 청년 복지·문화 혜택 실시간 푸시 및 정책 투표 플랫폼

[기대 효과]
청년들의 정책 효능감 증대, 지역 정착률 향상, 청년 주도형 문화 콘텐츠 발굴.`,
      futureUsage: "타 지자체 청년 정책 공모, 청년 거버넌스 제안서 작성 시 표준 프레임워크로 활용.",
      tags: ["#청년정책", "#화성시", "#정책제안", "#청년협의체", "#거버넌스"],
      fileName: "청년링크스테이션_정책제안서_최종본.pdf",
      fileSize: "1.2 MB"
    },
    {
      id: "contest-2023-02",
      title: "FOUNDRY DIFFUSION 기술팀 DS경진대회",
      pieceTitle: "스마트 공정 데이터 시각화 및 설비 파라미터 최적화 아이디어",
      category: "idea",
      categoryName: "아이디어·혁신기획",
      organization: "삼성전자 DS부문 DIFFUSION기술팀",
      submissionDate: "2023.02",
      status: "awarded",
      result: "최다 아이디어부문 우수상 수상",
      badge: "💡 최다 아이디어 우수",
      badgeClass: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
      synopsis: "반도체 확산(Diffusion) 공정 현장에서 발생하는 복합 변수들을 실시간 모니터링하여 공정 병목을 사전 감지하는 제조 지능화 아이디어 제안.",
      coreConcept: "현장 중심의 실용적 개선, 자동화 알고리즘 기반 선제적 트러블슈팅.",
      fullContent: `[제안 목적]
반도체 웨이퍼 열처리 공정의 온도, 가스 유량, 압력 등 핵심 인자를 실시간 시각화하여 산포를 30% 이상 개선.

[구현 방안]
- 설비 PLC 데이터와 품질 계측기 연동 대시보드 구축
- 임계치 초과 시 엔지니어 스마트폰 즉시 알람 시스템 구현
- 과거 베스트 레시피 자동 추천 머신러닝 모듈 탑재

[성과]
사내 기술팀 경진대회 최다 아이디어 제안 및 우수상 채택.`,
      futureUsage: "스마트팩토리 기획 공모, 산업 데이터 분석 공모전 시 핵심 엔지니어링 사례로 활용.",
      tags: ["#사내혁신", "#아이디어", "#반도체", "#디퓨전", "#스마트공정"],
      fileName: "DS경진대회_아이디어_제안서.pptx",
      fileSize: "2.4 MB"
    },
    {
      id: "contest-2026-09",
      title: "2026 전국 사회혁신 아이디어 챌린지",
      pieceTitle: "AI 기반 느린학습자 맞춤형 생활 문해 및 사회적응 보조 솔루션",
      category: "idea",
      categoryName: "아이디어·혁신기획",
      organization: "행정안전부 / 한국사회복지협의회",
      submissionDate: "2026.09",
      status: "reviewing",
      result: "서류 심사 통과 · 2차 PT 심사 대기",
      badge: "⏳ 2차 심사 중",
      badgeClass: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
      synopsis: "경계선 지능인 및 느린학습자가 일상 속 키오스크, 행정 서류, 디지털 금융을 쉽게 이용할 수 있도록 돕는 쉬운 말 변환 AI 인터페이스 기획안.",
      coreConcept: "사회복지와 AI 네이티브 기술의 융합, 디지털 포용성 극대화.",
      fullContent: `[문제 정의]
전 국민의 약 14%로 추정되는 경계선 지능인은 복잡한 디지털 행정 서류와 무인 키오스크 앞에서 심각한 사회적 고립을 경험합니다.

[해결책: 이지톡(Easy-Talk) AI]
1. 관공서 양식 스캔 시 초등 3학년 수준의 쉬운 말 요약 및 음성 안내
2. 키오스크 화면 간소화 모드 연동
3. 사회복무요원 및 자원봉사자 즉각 화상 호출 헬프라인 연계`,
      futureUsage: "ESG 혁신 기획 공모, 소셜 벤처 IR 덱, 공공 데이터 창업경진대회로 고도화 가능.",
      tags: ["#사회복지", "#AI포용성", "#느린학습자", "#사회혁신", "#ESG"],
      fileName: "사회혁신챌린지_기획제안서_초안.docx",
      fileSize: "450 KB"
    },
    {
      id: "contest-2026-draft-1",
      title: "신춘문예 및 문예지 단편소설/수필 출품 기획안",
      pieceTitle: "카미노의 침묵 - 산티아고 길 위에서 길어 올린 청춘의 자화상",
      category: "literature",
      categoryName: "문학·수필/에세이",
      organization: "주요 일간지 신춘문예 및 문예지",
      submissionDate: "2026.11 예정",
      status: "draft",
      result: "원고 집필 및 시놉시스 초안 보관",
      badge: "📝 집필 진행 중",
      badgeClass: "bg-slate-700/50 text-slate-300 border border-slate-600/40",
      synopsis: "800km 산티아고 순례길을 걸으며 마주친 각양각색의 순례자들과, 쉼 없이 달려온 20대의 고민, 그리고 새로운 진로를 앞둔 청년의 내면을 밀도 있게 그린 문학 작품.",
      coreConcept: "길(Camino)이라는 메타포를 통한 자아 탐색과 치유. 담백하면서도 서정적인 문체.",
      fullContent: `자갈길을 밟을 때마다 배낭 속에서 덜그럭거리는 조가비 소리는 흡사 지나온 삶의 파편들이 부딪히는 소리 같았습니다. 왜 나는 그토록 앞만 보고 달렸던 것일까. 군 복무의 시간, 취업의 문턱, 자격증 시험의 압박 속에서 내가 잃어버렸던 것은 목적지가 아니라 바로 걷는 그 자체의 온기였습니다...`,
      futureUsage: "신춘문예 수필 부문 출품 및 브런치스토리 연재 출판 기획서로 연계.",
      tags: ["#산티아고", "#순례길", "#에세이", "#신춘문예", "#청춘의자화상"],
      fileName: "카미노의침묵_시놉시스_초안.hwp",
      fileSize: "92 KB"
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

  global.INITIAL_CONTEST_DATA = INITIAL_CONTEST_DATA;

})(typeof window !== 'undefined' ? window : this);
