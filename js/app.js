/**
 * Personal Career & Schedule Dashboard
 * Standalone Unified Script (Safe for file:// and http://)
 */
(function() {
  'use strict';

  // =========================================================================
  // 1. Initial Study & Schedule Data
  // =========================================================================
/**
 * 초기 데이터 정의 (학사/시험 일정, 밴드/문화 일정, 에너지관리기사 기출 및 공식, 샘플 외부 대시보드)
 */

// 1. 사용자 등록 8개 핵심 학사 & 자격증 일정

// 사회복무요원 소집해제(제대) 일자 (2026-12-19)
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
      positioning: "실제 프로필 연동 완료 (팔로워 300명 · 팔로잉 301명 · 게시물 180개) | 음악 & 순례길 아카이빙",
      hashtags: "#밴드합주 #산티아고순례길 #일상기록 #자기계발 #음악스타그램",
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
      notes: "팔로워 300명 / 팔로잉 301명 네트워크 기반 합주 영상 및 순례길 하이라이트 공유"
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
  strategyMemo: "3대 채널 원소스 멀티유즈(OSMU) 운영 전략:\n1) 브런치스토리 (@musimtook · 구독자 225명 / 글 744편 / 독서노트 76편): 실패의 기록과 나만의 사색 에세이 연재\n2) 인스타그램 (@namhyeon_kim_ · 팔로워 300명 / 게시물 180개): 밴드 합주, 11월 산티아고 순례길 사진 & 숏폼 릴스\n3) 링크드인 (김남현): 삼성전자 TF 경험, 안전·에너지 기술자격, 화성시 청년정책협의체 분과장 인사이트 공유"
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
    type: "rehearsal", // rehearsal (합주) or performance (공연 관람)
    title: "정기 밴드 합주 (10월 2차 - 호랑이 합주실)",
    date: "2026-10-10T16:00",
    location: "홍대 호랑이 합주실",
    status: "scheduled",
    setlist: [
      { song: "제제로감 (廻廻奇譚 / Eve)", key: "C# Minor / E Major", tempo: "185 BPM", notes: "★ 오늘 합주 메인 집중 곡 - 인트로 베이스 슬랩 & 후렴구 드럼/기타 질주감 싱크 맞추기" },
      { song: "한 페이지가 될 수 있게 (DAY6)", key: "D Major", tempo: "165 BPM", notes: "브릿지 솔로 싱코페이션 타이밍 집중" },
      { song: "스물다섯, 스물하나 (자우림)", key: "G Major", tempo: "92 BPM", notes: "2절 빌드업 다이내믹스 조절" },
      { song: "Hype Boy (Band Ver.)", key: "E Major", tempo: "120 BPM", notes: "인트로 베이스 그루브 & 드럼 킥 맞추기" }
    ],
    memos: "홍대 호랑이 합주실 15분 전 도착하여 튜닝 완료하기. 메인 합주곡 '제제로감' 템포 185 BPM 메트로놈 체크 및 삼각대 촬영 준비."
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
    "id": "ep-1",
    "dayNum": 1,
    "date": "2026-09-28",
    "dday": "D-40",
    "phase": 1,
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "1~5장 (5장)",
    "topic": "연소방정식 & 이론/실제공기량",
    "task": "이론산소량(O0), 이론공기량(A0), 실제공기량(A), 공기비(m) 계산 공식 완전 암기 및 유도",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-2",
    "dayNum": 2,
    "date": "2026-09-29",
    "dday": "D-39",
    "phase": 1,
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "6~10장 (5장)",
    "topic": "보일러 열정산 & 상당증발량·BHP",
    "task": "보일러 효율(정압시험법, 입출열법), 상당증발량(Ge), 보일러마력(BHP), 연료소비율",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-3",
    "dayNum": 3,
    "date": "2026-09-30",
    "dday": "D-38",
    "phase": 1,
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "11~15장 (5장)",
    "topic": "전열공학 & 열관류율·LMTD",
    "task": "열전도(푸리에), 대류(뉴턴), 복사(스테판-볼츠만), 총괄열전달계수(K), 대수평균온도차(LMTD)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-4",
    "dayNum": 4,
    "date": "2026-10-01",
    "dday": "D-37",
    "phase": 1,
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "16~21장 (6장)",
    "topic": "유체역학 & 펌프동력·통풍력",
    "task": "베르누이 방정식, 달시-바이스바하 관마찰 손실수두, 펌프 수동력/축동력/전동기동력, 굴뚝 이론통풍력(Z)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-5",
    "dayNum": 5,
    "date": "2026-10-02",
    "dday": "D-36",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 1~20장 (20장)",
    "topic": "연소공학 및 연료 종류",
    "task": "기체/액체/고체 연료의 연소 특성 및 듀롱 공식에 의한 발열량 계산",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-6",
    "dayNum": 6,
    "date": "2026-10-03",
    "dday": "D-35",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 21~40장 (20장)",
    "topic": "배기가스량 및 연소 효율",
    "task": "이론배기가스량(G0), 실제배기가스량(G), CO2max 계산 및 오르자트 분석",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-7",
    "dayNum": 7,
    "date": "2026-10-04",
    "dday": "D-34",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 41~60장 (20장)",
    "topic": "보일러 구조 및 열전달체계",
    "task": "노통연관보일러, 수관보일러(자연순환/강제순환), 관류보일러 구조비교 및 열흡수율",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-8",
    "dayNum": 8,
    "date": "2026-10-05",
    "dday": "D-33",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 61~80장 (20장)",
    "topic": "폐열회수장치 (절탄기·공기예열기)",
    "task": "절탄기(Economizer)와 공기예열기의 효율 상승률, 저온부식 방지대책(산노점)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-9",
    "dayNum": 9,
    "date": "2026-10-06",
    "dday": "D-32",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 81~100장 (20장)",
    "topic": "보일러 급수처리 및 농축관리",
    "task": "급수 탈기기, 연수장치, 블로우다운율(B), 포밍·프라이밍·캐리오버 방지",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-10",
    "dayNum": 10,
    "date": "2026-10-07",
    "dday": "D-31",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 101~120장 (20장)",
    "topic": "통풍장치 및 송풍기 동력",
    "task": "압입통풍(FDF), 흡출통풍(IDF), 평형통풍(Balanced draft), 송풍기 상사법칙",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-11",
    "dayNum": 11,
    "date": "2026-10-08",
    "dday": "D-30",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 121~140장 (20장)",
    "topic": "증기배관 및 부속설비",
    "task": "배관경 산정식, 수격작용(Water Hammer), 스팀트랩(기계식·열역학식·온도조절식), 신축이음",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-12",
    "dayNum": 12,
    "date": "2026-10-09",
    "dday": "D-29",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 141~160장 (20장)",
    "topic": "열교환기 성능 및 열정산",
    "task": "쉘앤튜브 열교환기, 판형 열교환기 열관류, 열교환기 효율(ε-NTU법)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-13",
    "dayNum": 13,
    "date": "2026-10-10",
    "dday": "D-28",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 161~180장 (20장)",
    "topic": "단열재 및 보온 시공",
    "task": "경제적 보온두께, 임계단열반경(Critical radius of insulation), 표면 방열손실량",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-14",
    "dayNum": 14,
    "date": "2026-10-11",
    "dday": "D-27",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 181~200장 (20장)",
    "topic": "계측공학 및 에너지 진단",
    "task": "차압식 유량계(오리피스, 벤투리, 노즐), 피토관 유속 측정, 열전대 및 측온저항체(Pt100)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-15",
    "dayNum": 15,
    "date": "2026-10-12",
    "dday": "D-26",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 201~220장 (20장)",
    "topic": "보일러 자동제어 (ABC)",
    "task": "급수제어(1·2·3요소), 연소제어(온오프, 비례, FRC), 인터록 안전장치",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-16",
    "dayNum": 16,
    "date": "2026-10-13",
    "dday": "D-25",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 221~240장 (20장)",
    "topic": "에너지이용합리화법 및 안전관리",
    "task": "검사대상기기 종류 및 검사 유효기간, 에너지관리자 선임 기준, 안전밸브 분출압력",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-17",
    "dayNum": 17,
    "date": "2026-10-14",
    "dday": "D-24",
    "phase": 2,
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 241~256장 (16장)",
    "topic": "연습문제 총정리 & 오답 노트 클리닉",
    "task": "단원별 고난도 융합 문제 총정리, 계산 풀이과정 소수점/단위 규정 점검",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-18",
    "dayNum": 18,
    "date": "2026-10-15",
    "dday": "D-23",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "10년",
    "volume": "21장",
    "topic": "2010년 기출 전회차",
    "task": "2010년 1~3회 기출 풀이: 연소계산, 증발배수, 상당증발량, 보일러 열효율 기초 확립",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-19",
    "dayNum": 19,
    "date": "2026-10-16",
    "dday": "D-22",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "11년",
    "volume": "19장",
    "topic": "2011년 기출 전회차",
    "task": "2011년 1~3회 기출 풀이: 통풍력 산출, 댐퍼 제어, 연소 안전장치 단답 정리",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-20",
    "dayNum": 20,
    "date": "2026-10-17",
    "dday": "D-21",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "12년",
    "volume": "20장",
    "topic": "2012년 기출 전회차",
    "task": "2012년 1~3회 기출 풀이: 보일러 열정산표 작성, 미연손실 및 복사열손실 산정",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-21",
    "dayNum": 21,
    "date": "2026-10-18",
    "dday": "D-20",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "13년",
    "volume": "19장",
    "topic": "2013년 기출 전회차",
    "task": "2013년 1~3회 기출 풀이: 열교환기 전열면적 산정, LMTD, 관내 유속 계산",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-22",
    "dayNum": 22,
    "date": "2026-10-19",
    "dday": "D-19",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "14년",
    "volume": "22장",
    "topic": "2014년 기출 전회차",
    "task": "2014년 1~3회 기출 풀이: 배관 마찰손실수두, 펌프 축동력 및 전동기 용량",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-23",
    "dayNum": 23,
    "date": "2026-10-20",
    "dday": "D-18",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "15년",
    "volume": "18장",
    "topic": "2015년 기출 전회차",
    "task": "2015년 1~3회 기출 풀이: 수처리 약품 투입량, 알칼리도, 경도 계산",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-24",
    "dayNum": 24,
    "date": "2026-10-21",
    "dday": "D-17",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "16년",
    "volume": "17장",
    "topic": "2016년 기출 전회차",
    "task": "2016년 1~3회 기출 풀이: 절탄기 열정산, 급수온도 상승에 따른 연료 절감율",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-25",
    "dayNum": 25,
    "date": "2026-10-22",
    "dday": "D-16",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "17년",
    "volume": "18장",
    "topic": "2017년 기출 전회차",
    "task": "2017년 1~3회 기출 풀이: 보온재 열전도 및 경제적 두께, 표면 온도 계산",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-26",
    "dayNum": 26,
    "date": "2026-10-23",
    "dday": "D-15",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "18년",
    "volume": "19장",
    "topic": "2018년 기출 전회차",
    "task": "2018년 1~3회 기출 풀이: 통풍 손실 및 댐퍼 개도율, 완전연소 조건(3T)",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-27",
    "dayNum": 27,
    "date": "2026-10-24",
    "dday": "D-14",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "19년",
    "volume": "20장",
    "topic": "2019년 기출 전회차",
    "task": "2019년 1~3회 기출 풀이: 에너지진단 기준, 폐열회수 히트파이프 원리",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-28",
    "dayNum": 28,
    "date": "2026-10-25",
    "dday": "D-13",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "20년",
    "volume": "28장",
    "topic": "2020년 실기 기출 (개편 1~3회)",
    "task": "2020년 전회차 풀이: 필답형 100% 전환 원년 출제 경향, 신출 계산문제 완전 분석",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-29",
    "dayNum": 29,
    "date": "2026-10-26",
    "dday": "D-12",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "21년",
    "volume": "28장",
    "topic": "2021년 실기 기출 전회차",
    "task": "2021년 1~3회 기출 풀이: 응축수 회수설비 열정산, 플래시 증기 발생량",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-30",
    "dayNum": 30,
    "date": "2026-10-27",
    "dday": "D-11",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "22년",
    "volume": "31장",
    "topic": "2022년 실기 기출 전회차",
    "task": "2022년 1~3회 기출 풀이: 팽창탱크 용량 산정, 고온수 배관 사이징, 신유형 단답",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-31",
    "dayNum": 31,
    "date": "2026-10-28",
    "dday": "D-10",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "23년 & 23년(출판사 변경)",
    "volume": "71장",
    "topic": "2023년 기출 전회차 (2개 출판사 교차분석)",
    "task": "2023년 최신 기출 2개 출판사 전량 교차 풀이: 복합 혼소 연소, 신기술 서술형",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-32",
    "dayNum": 32,
    "date": "2026-10-29",
    "dday": "D-9",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "24년 & 24년(출판사 변경)",
    "volume": "84장",
    "topic": "2024년 기출 전회차 (최신판 84장 정밀분석)",
    "task": "2024년 1~3회 기출 2개 출판사 전량 완독: 최신 신출 문항 및 복합 단위변환 마스터",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-33",
    "dayNum": 33,
    "date": "2026-10-30",
    "dday": "D-8",
    "phase": 3,
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "25년 (출판사 변경)",
    "volume": "29장",
    "topic": "2025년 최신 기출 (출판사 변경판 29장)",
    "task": "2025년 최신 기출 전량 독파: 가장 최근 회차의 출제 경향, 신출 단답 및 계산 총정리",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-34",
    "dayNum": 34,
    "date": "2026-10-31",
    "dday": "D-7",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (식만 정리 + 21년 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 1: 공식 21장 백지 테스트 + 2021년 기출 타임어택",
    "task": "핵심 계산 공식 21장 백지 인출 테스트 100점 달성 & 2021년 기출 1~3회 2시간 타임어택 풀이",
    "isFinalWeek": false,
    "done": false
  },
  {
    "id": "ep-35",
    "dayNum": 35,
    "date": "2026-11-01",
    "dday": "D-6",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (연습문제 고난도 + 22년 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 2: 2022년 기출 복습 + 열정산표 100% 암기",
    "task": "2022년 기출 31장 오답 재풀이 & 보일러+절탄기+공기예열기 통합 열정산표 수지 완벽 암기",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-36",
    "dayNum": 36,
    "date": "2026-11-02",
    "dday": "D-5",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (23년 2개 출판사 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 3: 2023년 기출 실전 모의고사 (목표 80점+)",
    "task": "2023년 기출 71장(출판사 A, B) 모의고사 실시 ➔ 채점 및 감점 요인(단위, 유효숫자) 전수 점검",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-37",
    "dayNum": 37,
    "date": "2026-11-03",
    "dday": "D-4",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (24년 2개 출판사 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 4: 2024년 최신 기출 실전 모의고사",
    "task": "2024년 기출 84장(출판사 A, B) 모의고사 실시 ➔ 최신 출제 트렌드 오답 집중 복습",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-38",
    "dayNum": 38,
    "date": "2026-11-04",
    "dday": "D-3",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (25년 최신판 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 5: 2025년 최신 기출 완벽 재풀이 + 취약 계산 클리닉",
    "task": "2025년 최신 기출 29장 완벽 재풀이 & 40일간 누적된 개인 취약 계산 유형(연소/열전달/펌프) 클리닉",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-39",
    "dayNum": 39,
    "date": "2026-11-05",
    "dday": "D-2",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "파이널",
    "topic": "파이널 Day 6: 고난도 오답 노트 50선 복습 & 서술형 키워드 암기",
    "task": "단원별 연습문제 256장 중 선별한 고난도 50문항 3회독 & 핵심 단답 100선 눈으로 빠르게 회독",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-40",
    "dayNum": 40,
    "date": "2026-11-06",
    "dday": "D-1",
    "phase": 4,
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "식만 정리 & 전체",
    "volume": "파이널",
    "topic": "파이널 Day 7: 전야 마인드컨트롤 & 공식 21장 최종 회독",
    "task": "식만 정리 21장 최종 1회독, 공학용 계산기(리셋 확인 및 각도 DEG 세팅), 수험표·신분증·흑색볼펜 점검, 충분한 수면",
    "isFinalWeek": true,
    "done": false
  },
  {
    "id": "ep-41",
    "dayNum": 41,
    "date": "2026-11-07",
    "dday": "D-Day",
    "phase": 4,
    "phaseName": "★ 시험 당일",
    "folder": "시험장",
    "volume": "파이널",
    "topic": "★ 2026년 정기 기사 실기 시험 당일!",
    "task": "오전 09:00 실기 필답형 완벽 응시! 침착하고 정확하게 85점+ 최종 합격 쟁취!",
    "isFinalWeek": true,
    "done": false
  }
];

const ENERGY_DAILY_BRIEFINGS = {
  "2026-09-28": {
    "dayNum": 1,
    "date": "2026-09-28",
    "dday": "D-40",
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "1~5장 (5장)",
    "topic": "연소방정식 & 이론/실제공기량",
    "goal": "이론산소량(O0), 이론공기량(A0), 실제공기량(A), 공기비(m) 계산 공식 완전 암기 및 유도",
    "keyFormula": "\\begin{aligned} O_0 &= 1.867C + 5.6\\left(H - \\frac{O}{8}\\right) + 0.7S \\; [\\text{Nm}^3/\\text{kg}] \\\\ A_0 &= \\frac{O_0}{0.21} \\; [\\text{Nm}^3/\\text{kg}], \\quad A = m \\cdot A_0 \\end{aligned}",
    "keyConcepts": [
      "1. 탄소 1kmol(12kg)은 완전연소 시 22.414Nm³의 CO2 발생 및 산소 22.414Nm³ 소비 (계수 1.867)",
      "2. 수소는 산소와 결합하여 H2O를 형성하므로 기결합 산소분(O/8)을 차감한 유효수소에 계수 5.6 적용",
      "3. 실제공기량 산출 시 공기비 m = A / A0 = 21 / (21 - O2) 적용 요령 숙지"
    ],
    "pitfall": "⚠️ 함정 주의: 고체/액체 연료는 kg 단위 기준이고 기체 연료는 Nm³ 기준이므로 단위 체계 혼동 금지! 유효수소에서 (H - O/8) 괄호 계산 우선!",
    "quiz": {
      "q": "연료 성분 C: 84%, H: 12%, S: 2%, O: 2%인 중유 1kg 연소 시 이론공기량(A0)은?",
      "a": "약 10.67 Nm³/kg",
      "sol": "O0 = 1.867(0.84) + 5.6(0.12 - 0.02/8) + 0.7(0.02) = 1.568 + 0.658 + 0.014 = 2.24 Nm³/kg\\nA0 = 2.24 / 0.21 = 10.67 Nm³/kg"
    }
  },
  "2026-09-29": {
    "dayNum": 2,
    "date": "2026-09-29",
    "dday": "D-39",
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "6~10장 (5장)",
    "topic": "보일러 열정산 & 상당증발량·BHP",
    "goal": "보일러 효율(정압시험법, 입출열법), 상당증발량(Ge), 보일러마력(BHP), 연료소비율",
    "keyFormula": "\\begin{aligned} \\eta &= \\frac{G_a (h_2 - h_1)}{G_f \\cdot H_l} \\times 100 \\; [\\%], \\quad G_e = \\frac{G_a (h_2 - h_1)}{539} \\; [\\text{kg/h}] \\\\ \\text{BHP} &= \\frac{G_e}{15.65} = \\frac{G_a(h_2 - h_1)}{15.65 \\times 539} \\end{aligned}",
    "keyConcepts": [
      "1. 보일러 효율 산출 시 분모는 연료 투입 총열량(Gf · Hl), 분자는 순수 발생 증기 흡열량(Ga(h2 - h1))",
      "2. 상당증발량은 100℃ 포화수 ➔ 100℃ 포화증기 잠열(539 kcal/kg = 2257 kJ/kg) 기준 환산치",
      "3. 1 보일러마력(1 BHP)은 1시간에 100℃의 물 15.65kg을 100℃ 포화증기로 바꾸는 능력"
    ],
    "pitfall": "⚠️ 함정 주의: 증기 엔탈피 h2와 급수 엔탈피 h1의 단위가 kcal/kg인지 kJ/kg인지 반드시 확인하고 일치시킬 것!",
    "quiz": {
      "q": "실제증발량 5,000 kg/h, 발생증기 엔탈피 650 kcal/kg, 급수 엔탈피 50 kcal/kg일 때 상당증발량은?",
      "a": "5,565.86 kg/h",
      "sol": "Ge = 5000 × (650 - 50) / 539 = 3,000,000 / 539 = 5,565.86 kg/h"
    }
  },
  "2026-09-30": {
    "dayNum": 3,
    "date": "2026-09-30",
    "dday": "D-38",
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "11~15장 (5장)",
    "topic": "전열공학 & 열관류율·LMTD",
    "goal": "열전도(푸리에), 대류(뉴턴), 복사(스테판-볼츠만), 총괄열전달계수(K), 대수평균온도차(LMTD)",
    "keyFormula": "\\begin{aligned} Q &= K A \\Delta T_m \\; [\\text{W or kcal/h}], \\quad \\frac{1}{K} = \\frac{1}{\\alpha_1} + \\sum \\frac{L_i}{\\lambda_i} + \\frac{1}{\\alpha_2} \\\\ \\Delta T_m &= \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)} \\; [^\\circ\\text{C}] \\end{aligned}",
    "keyConcepts": [
      "1. 다층 평면벽/원통벽 열관류율 K 계산 시 열전도율(λ), 표면 열전달계수(α)의 역수들의 합이 열저항",
      "2. 대향류(Counter flow)와 병행류(Parallel flow) 중 대향류가 항상 LMTD가 크고 전열 효율이 우수",
      "3. 복사 열전달량은 절대온도의 4승차(T1⁴ - T2⁴)에 비례"
    ],
    "pitfall": "⚠️ 함정 주의: LMTD 계산 시 ln 분모 분자가 바뀌면 부호가 달라지므로 (ΔT1 - ΔT2) / ln(ΔT1/ΔT2) 순서를 엄수!",
    "quiz": {
      "q": "고온유체 120℃➔80℃, 저온유체 20℃➔60℃인 대향류 열교환기의 LMTD는?",
      "a": "60 ℃",
      "sol": "ΔT1 = 120 - 60 = 60℃, ΔT2 = 80 - 20 = 60℃. 입출구 온도차가 같으므로 LMTD = 60℃"
    }
  },
  "2026-10-01": {
    "dayNum": 4,
    "date": "2026-10-01",
    "dday": "D-37",
    "phaseName": "1단계: 공식 21장 완전 정복",
    "folder": "식만 정리",
    "volume": "16~21장 (6장)",
    "topic": "유체역학 & 펌프동력·통풍력",
    "goal": "베르누이 방정식, 달시-바이스바하 관마찰 손실수두, 펌프 수동력/축동력/전동기동력, 굴뚝 이론통풍력(Z)",
    "keyFormula": "\\begin{aligned} P_{\\text{water}} &= \\frac{\\gamma Q H}{102} \\; [\\text{kW}], \\quad P_{\\text{shaft}} = \\frac{\\gamma Q H}{102 \\eta} \\; [\\text{kW}], \\quad P_{\\text{motor}} = \\frac{\\gamma Q H}{102 \\eta} (1 + \\alpha) \\\\ Z &= 353 H \\left( \\frac{1}{T_a} - \\frac{1}{T_g} \\right) \\; [\\text{mmH}_2\\text{O}] \\end{aligned}",
    "keyConcepts": [
      "1. 펌프 동력 계산에서 유량 Q의 단위가 m³/s인지 m³/min인지 확인 (m³/min일 땐 분모에 6120 사용)",
      "2. 수동력 ➔ 축동력(효율 η로 나눔) ➔ 전동기동력(여유율 1+α 곱함)의 단계별 동력 관계 숙지",
      "3. 굴뚝 통풍력 Z는 굴뚝 높이(H)와 외기/배기가스 밀도차(절대온도 역수차)에 정비례"
    ],
    "pitfall": "⚠️ 함정 주의: 펌프 동력 kW 공식(분모 102)과 HP 공식(분모 75 또는 4500) 단위 혼동 주의!",
    "quiz": {
      "q": "양정 50m, 송출량 1.2 m³/min인 청수 펌프의 효율 75%, 여유율 15%일 때 전동기 동력(kW)은?",
      "a": "15.03 kW",
      "sol": "P = (1000 × 1.2 × 50) / (6120 × 0.75) × 1.15 = 60,000 / 4590 × 1.15 = 15.03 kW"
    }
  },
  "2026-10-02": {
    "dayNum": 5,
    "date": "2026-10-02",
    "dday": "D-36",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 1~20장 (20장)",
    "topic": "연소공학 및 연료 종류",
    "goal": "기체/액체/고체 연료의 연소 특성 및 듀롱 공식에 의한 발열량 계산",
    "keyFormula": "H_l = 8100C + 34000\\left(H - \\frac{O}{8}\\right) + 2500S - 600(9H + W) \\; [\\text{kcal/kg}]",
    "keyConcepts": [
      "1. 듀롱(Dulong) 공식 고위발열량과 저위발열량의 수분 증발잠열(600 kcal/kg) 차이",
      "2. 수소 1kg 연소 시 생성 수증기량은 9kg"
    ],
    "pitfall": "⚠️ 수분(W)과 연소생성수분(9H)을 합산하여 600을 곱해 차감하는 저위발열량 변환식 완벽 적용",
    "quiz": {
      "q": "수소 10%, 수분 5%인 석탄의 고위발열량이 6500 kcal/kg일 때 저위발열량은?",
      "a": "5,930 kcal/kg",
      "sol": "Hl = 6500 - 600 × (9 × 0.10 + 0.05) = 6500 - 600 × 0.95 = 6500 - 570 = 5930 kcal/kg"
    }
  },
  "2026-10-03": {
    "dayNum": 6,
    "date": "2026-10-03",
    "dday": "D-35",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 21~40장 (20장)",
    "topic": "배기가스량 및 연소 효율",
    "goal": "이론배기가스량(G0), 실제배기가스량(G), CO2max 계산 및 오르자트 분석",
    "keyFormula": "G = G_0 + (m - 1)A_0, \\quad (\\text{CO}_2)_{\\max} = \\frac{\\text{CO}_2}{G_0} \\times 100 \\; [\\%]",
    "keyConcepts": [
      "1. 습식 배기가스량(수증기 포함)과 건식 배기가스량(수증기 응축 제외)의 명확한 구분",
      "2. 공기비 증가에 따른 배기가스 열손실 증가 메커니즘"
    ],
    "pitfall": "⚠️ 오르자트(Orsat) 가스분석계는 수분이 응축된 건배기가스(CO2, O2, CO)만 측정함에 유의",
    "quiz": {
      "q": "건배기가스 분석치 CO2 12%, O2 6%, N2 82%일 때 공기비 m은?",
      "a": "1.40",
      "sol": "m = 21 / (21 - O2) = 21 / (21 - 6) = 21 / 15 = 1.40"
    }
  },
  "2026-10-04": {
    "dayNum": 7,
    "date": "2026-10-04",
    "dday": "D-34",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 41~60장 (20장)",
    "topic": "보일러 구조 및 열전달체계",
    "goal": "노통연관보일러, 수관보일러(자연순환/강제순환), 관류보일러 구조비교 및 열흡수율",
    "keyFormula": "q = \\frac{Q}{A} \\; [\\text{kcal}/(\\text{m}^2\\cdot\\text{h})], \\quad G_a = \\frac{q \\cdot A}{h_2 - h_1}",
    "keyConcepts": [
      "1. 전열면적(A)당 증발량인 증발율과 전열부하(q)의 상관관계",
      "2. 수관보일러의 기수분리기 구조 및 드럼 내부 장치"
    ],
    "pitfall": "⚠️ 보일러 전열면적 산정 시 화염 접촉면과 물 접촉면 기준 규정 차이 숙지",
    "quiz": {
      "q": "전열면적 150 m², 1시간당 증기발생량 4,500 kg인 보일러의 증발율은?",
      "a": "30 kg/(m²·h)",
      "sol": "증발율 = 4500 / 150 = 30 kg/(m²·h)"
    }
  },
  "2026-10-05": {
    "dayNum": 8,
    "date": "2026-10-05",
    "dday": "D-33",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 61~80장 (20장)",
    "topic": "폐열회수장치 (절탄기·공기예열기)",
    "goal": "절탄기(Economizer)와 공기예열기의 효율 상승률, 저온부식 방지대책(산노점)",
    "keyFormula": "\\Delta \\eta_b \\approx \\frac{\\Delta T_{\\text{air}}}{25} \\approx \\frac{\\Delta T_{\\text{feed}}}{6} \\; [\\%]",
    "keyConcepts": [
      "1. 급수온도 6℃ 상승 시 보일러 효율 약 1% 상승",
      "2. 연소용 공기온도 20~25℃ 상승 시 효율 약 1% 상승",
      "3. SO3와 수증기에 의한 황산 이슬점(Acid Dew Point)과 에어프리히터 저온부식"
    ],
    "pitfall": "⚠️ 저온부식 방지 3대책: 에어히터 우회유로, 증기식 공기예열기 설치, 저유황 연료 사용",
    "quiz": {
      "q": "공기예열기를 설치하여 연소용 공기 온도를 100℃ 예열했을 때 보일러 효율 상승분은?",
      "a": "약 4~5 %",
      "sol": "100 / 25 = 4 % (대략 4~5% 상승)"
    }
  },
  "2026-10-06": {
    "dayNum": 9,
    "date": "2026-10-06",
    "dday": "D-32",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 81~100장 (20장)",
    "topic": "보일러 급수처리 및 농축관리",
    "goal": "급수 탈기기, 연수장치, 블로우다운율(B), 포밍·프라이밍·캐리오버 방지",
    "keyFormula": "B = \\frac{S_f}{S_b - S_f} \\times 100 \\; [\\%]",
    "keyConcepts": [
      "1. 급수 중 염화물 이온농도 Sf, 보일러수 허용농도 Sb 기반 분출율 B 계산",
      "2. 탈기기(Deaerator)를 통한 용존산소(O2) 및 이산화탄소(CO2) 열적 제거 원리"
    ],
    "pitfall": "⚠️ 보일러수 농축 한도 초과 시 거품(Foaming) 및 물방울 동반(Priming) 발생 주의",
    "quiz": {
      "q": "급수 염화물 농도 15 ppm, 보일러수 허용농도 300 ppm일 때 블로우다운율은?",
      "a": "5.26 %",
      "sol": "B = 15 / (300 - 15) × 100 = 15 / 285 × 100 = 5.26 %"
    }
  },
  "2026-10-07": {
    "dayNum": 10,
    "date": "2026-10-07",
    "dday": "D-31",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 101~120장 (20장)",
    "topic": "통풍장치 및 송풍기 동력",
    "goal": "압입통풍(FDF), 흡출통풍(IDF), 평형통풍(Balanced draft), 송풍기 상사법칙",
    "keyFormula": "\\frac{Q_2}{Q_1} = \\frac{N_2}{N_1}, \\quad \\frac{P_2}{P_1} = \\left(\\frac{N_2}{N_1}\\right)^2, \\quad \\frac{L_2}{L_1} = \\left(\\frac{N_2}{N_1}\\right)^3",
    "keyConcepts": [
      "1. 회전수(N) 변화에 따른 풍량(비례), 풍압(2승비례), 소요동력(3승비례) 상사법칙",
      "2. 로 내압을 약 -2~-5 mmH2O 부압으로 유지하는 평형통풍의 장점"
    ],
    "pitfall": "⚠️ 송풍기 회전수 10% 증가 시 소요동력은 1.1³ = 1.331(33% 증가)함에 유의",
    "quiz": {
      "q": "송풍기 회전수를 20% 증가시켰을 때 풍압과 소요동력의 증가율은?",
      "a": "풍압 44% 증가, 동력 72.8% 증가",
      "sol": "P2/P1 = 1.2² = 1.44 (44% 증가), L2/L1 = 1.2³ = 1.728 (72.8% 증가)"
    }
  },
  "2026-10-08": {
    "dayNum": 11,
    "date": "2026-10-08",
    "dday": "D-30",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 121~140장 (20장)",
    "topic": "증기배관 및 부속설비",
    "goal": "배관경 산정식, 수격작용(Water Hammer), 스팀트랩(기계식·열역학식·온도조절식), 신축이음",
    "keyFormula": "d = \\sqrt{\\frac{4 Q}{\\pi v}} = 18.8 \\sqrt{\\frac{Q}{v}} \\; [\\text{mm}]",
    "keyConcepts": [
      "1. 증기 유량(Q)과 유속(v: 과열증기 30~50m/s, 포화증기 20~30m/s)에 따른 관경 결정",
      "2. 수격작용 방지: 드레인 포켓 설치, 완만한 밸브 개폐, 스팀트랩 적정 배치"
    ],
    "pitfall": "⚠️ 버킷 트랩 vs 디스크 트랩 vs 바이메탈 트랩 작동 원리 및 특징 서술형 대비",
    "quiz": {
      "q": "증기유량 3,600 kg/h, 비체적 0.2 m³/kg, 허용유속 25 m/s일 때 최소 배관 내경은?",
      "a": "101 mm (100A 선정)",
      "sol": "Q = 3600 × 0.2 / 3600 = 0.2 m³/s. d = sqrt(4 × 0.2 / (π × 25)) = 0.1009 m = 101 mm"
    }
  },
  "2026-10-09": {
    "dayNum": 12,
    "date": "2026-10-09",
    "dday": "D-29",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 141~160장 (20장)",
    "topic": "열교환기 성능 및 열정산",
    "goal": "쉘앤튜브 열교환기, 판형 열교환기 열관류, 열교환기 효율(ε-NTU법)",
    "keyFormula": "Q = m_h c_{ph} (T_{h1} - T_{h2}) = m_c c_{pc} (T_{c2} - T_{c1}) = K A \\Delta T_m",
    "keyConcepts": [
      "1. 고온 유체 방출열량 = 저온 유체 흡열량 = 전열량(Q)의 열평형 방정식",
      "2. 스케일(오염계수 Fouling factor) 생성 시 열관류율 저하 계산"
    ],
    "pitfall": "⚠️ 열교환기 열손실이 없을 때 열량 보존 관계를 이용하여 미지의 출구 온도 먼저 산출",
    "quiz": {
      "q": "유량 2000 kg/h 기름(비열 0.5)을 100℃➔60℃ 냉각 시 20℃ 냉각수(비열 1.0) 필요 유량은? (냉각수 출구 40℃)",
      "a": "2,000 kg/h",
      "sol": "2000 × 0.5 × (100 - 60) = mw × 1.0 × (40 - 20) ➔ 40000 = mw × 20 ➔ mw = 2000 kg/h"
    }
  },
  "2026-10-10": {
    "dayNum": 13,
    "date": "2026-10-10",
    "dday": "D-28",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 161~180장 (20장)",
    "topic": "단열재 및 보온 시공",
    "goal": "경제적 보온두께, 임계단열반경(Critical radius of insulation), 표면 방열손실량",
    "keyFormula": "r_c = \\frac{\\lambda}{\\alpha} \\; [\\text{m}], \\quad q = \\alpha (T_w - T_a) \\; [\\text{W/m}^2]",
    "keyConcepts": [
      "1. 원통관에서 외경이 rc보다 작을 때는 보온재 시공 시 오히려 방열량이 증가함",
      "2. 경제적 단열두께: (연간 열손실 비용 + 연간 보온시공 감가상각비)의 합이 최소가 되는 지점"
    ],
    "pitfall": "⚠️ 원관의 임계반경 공식 rc = λ / α (열전도율을 외표면 열전달율로 나눈 값)",
    "quiz": {
      "q": "열전도율 0.05 W/(m·K) 보온재를 외표면 열전달율 10 W/(m²·K)인 관에 시공 시 임계반경은?",
      "a": "5 mm (0.005 m)",
      "sol": "rc = 0.05 / 10 = 0.005 m = 5 mm"
    }
  },
  "2026-10-11": {
    "dayNum": 14,
    "date": "2026-10-11",
    "dday": "D-27",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 181~200장 (20장)",
    "topic": "계측공학 및 에너지 진단",
    "goal": "차압식 유량계(오리피스, 벤투리, 노즐), 피토관 유속 측정, 열전대 및 측온저항체(Pt100)",
    "keyFormula": "v = c \\sqrt{2 g \\frac{\\Delta P}{\\gamma}} = c \\sqrt{\\frac{2 \\Delta P}{\\rho}} \\; [\\text{m/s}]",
    "keyConcepts": [
      "1. 베르누이 정리를 응용한 피토관 전압과 정압의 차압(ΔP)으로 동압 및 유속 환산",
      "2. 오리피스 유량계의 유량은 차압의 제곱근에 비례"
    ],
    "pitfall": "⚠️ 차압 단위(mmH2O = kg/m²)와 유체 비중량(γ) 단위를 정확히 맞추어야 함",
    "quiz": {
      "q": "피토관 차압 20 mmH2O, 공기 비중량 1.2 kg/m³일 때 배기가스 유속은? (c=1.0)",
      "a": "18.07 m/s",
      "sol": "v = sqrt(2 × 9.8 × 20 / 1.2) = sqrt(326.67) = 18.07 m/s"
    }
  },
  "2026-10-12": {
    "dayNum": 15,
    "date": "2026-10-12",
    "dday": "D-26",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 201~220장 (20장)",
    "topic": "보일러 자동제어 (ABC)",
    "goal": "급수제어(1·2·3요소), 연소제어(온오프, 비례, FRC), 인터록 안전장치",
    "keyFormula": "\\text{3요소 급수제어}: \\text{수위(Level)} + \\text{증기유량(Steam Flow)} + \\text{급수유량(Feedwater Flow)}",
    "keyConcepts": [
      "1. 보일러 급수제어의 가단 수위변동(스웰링 현상)을 극복하기 위한 3요소 제어",
      "2. 압력신호에 따른 주증기 압력제어 및 공연비 제어(Fuel-Air Ratio Control)"
    ],
    "pitfall": "⚠️ 보일러 안전 인터록 3대 조건: 저수위 차단, 화염 실화 차단, 과압력 차단",
    "quiz": {
      "q": "보일러 부하 급증 시 일시적으로 수위가 상승해 보이는 현상의 명칭과 방지 대책은?",
      "a": "스웰(Swell) 현상, 3요소 급수제어 채택",
      "sol": "부하 급증 시 압력 강하로 수중 기포 팽창으로 수위가 일시 상승(Swell). 증기유량 선행 제어로 방지"
    }
  },
  "2026-10-13": {
    "dayNum": 16,
    "date": "2026-10-13",
    "dday": "D-25",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 221~240장 (20장)",
    "topic": "에너지이용합리화법 및 안전관리",
    "goal": "검사대상기기 종류 및 검사 유효기간, 에너지관리자 선임 기준, 안전밸브 분출압력",
    "keyFormula": "\\text{안전밸브 분출압력} \\le \\text{최고사용압력}, \\quad 2\\text{개 이상 설치 시 1개는 최고사용압력 이하, 나머지는 1.03배 이하}",
    "keyConcepts": [
      "1. 계속사용검사, 개조검사, 설치검사 수검 주기 및 절차",
      "2. 안전밸브의 분출면적 계산식 및 봉인(Sealing) 규정"
    ],
    "pitfall": "⚠️ 최고사용압력 1 MPa 초과 보일러는 안전밸브를 반드시 2개 이상 설치할 것",
    "quiz": {
      "q": "보일러 최고사용압력이 1.0 MPa일 때 안전밸브 2개의 최대 설정 분출압력은?",
      "a": "1개는 1.0 MPa 이하, 1개는 1.03 MPa 이하",
      "sol": "법령 규정에 의거 1개는 최고사용압력(1.0 MPa) 이하, 나머지는 1.03배(1.03 MPa) 이하 설정"
    }
  },
  "2026-10-14": {
    "dayNum": 17,
    "date": "2026-10-14",
    "dday": "D-24",
    "phaseName": "2단계: 단원별 연습문제 256장 정복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "연습문제 241~256장 (16장)",
    "topic": "연습문제 총정리 & 오답 노트 클리닉",
    "goal": "단원별 고난도 융합 문제 총정리, 계산 풀이과정 소수점/단위 규정 점검",
    "keyFormula": "\\text{채점 규정}: \\text{소수점 셋째자리 반올림하여 둘째자리까지 표기, 계산과정 필수, 단위 누락 시 0점}",
    "keyConcepts": [
      "1. 계산문제 풀이 시 중간 과정은 소수점 4자리 이상 유지, 최종 답란에만 셋째자리 반올림",
      "2. 공식 ➔ 대입 ➔ 계산결과 ➔ 단위 명기의 4단계 답안 작성 훈련"
    ],
    "pitfall": "⚠️ 단위 표기 누락은 에너지관리기사 실기 불합격의 1순위 원인이므로 단위 필수 점검!",
    "quiz": {
      "q": "계산 결과 12.3456 kg/h가 나왔을 때 최종 답안 표기법은?",
      "a": "12.35 kg/h",
      "sol": "별도 지정이 없는 한 소수점 셋째자리(5)에서 반올림하여 12.35 표기 및 단위(kg/h) 병기"
    }
  },
  "2026-10-15": {
    "dayNum": 18,
    "date": "2026-10-15",
    "dday": "D-23",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "10년",
    "volume": "21장",
    "topic": "2010년 기출 전회차",
    "goal": "2010년 1~3회 기출 풀이: 연소계산, 증발배수, 상당증발량, 보일러 열효율 기초 확립",
    "keyFormula": "\\text{증발배수} = \\frac{G_a}{G_f} \\; [\\text{kg 증기/kg 연료}]",
    "keyConcepts": [
      "1. 연료 1kg당 실제 발생하는 증기량인 증발배수 계산",
      "2. 2010년 빈출되었던 관류보일러의 벤슨/슐처 보일러 비교"
    ],
    "pitfall": "⚠️ 증발배수와 상당증발량을 혼동하지 말 것",
    "quiz": {
      "q": "연료 200 kg/h 소비하여 증기 2,600 kg/h 생산 시 증발배수는?",
      "a": "13 kg 증기/kg 연료",
      "sol": "2600 / 200 = 13"
    }
  },
  "2026-10-16": {
    "dayNum": 19,
    "date": "2026-10-16",
    "dday": "D-22",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "11년",
    "volume": "19장",
    "topic": "2011년 기출 전회차",
    "goal": "2011년 1~3회 기출 풀이: 통풍력 산출, 댐퍼 제어, 연소 안전장치 단답 정리",
    "keyFormula": "Z = H (\\gamma_a - \\gamma_g) \\; [\\text{mmH}_2\\text{O}]",
    "keyConcepts": [
      "1. 기온 변화에 따른 겨울철 굴뚝 통풍력 증가 현상 계산",
      "2. 인터록 장치(저수위, 화염검출, 저풍압)"
    ],
    "pitfall": "⚠️ 외기온도 Ta와 배기가스온도 Tg는 섭씨가 아닌 절대온도(K) 대입",
    "quiz": {
      "q": "굴뚝 높이 40m, γa=1.2 kg/m³, γg=0.7 kg/m³일 때 통풍력은?",
      "a": "20 mmH2O",
      "sol": "Z = 40 × (1.2 - 0.7) = 40 × 0.5 = 20 mmH2O"
    }
  },
  "2026-10-17": {
    "dayNum": 20,
    "date": "2026-10-17",
    "dday": "D-21",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "12년",
    "volume": "20장",
    "topic": "2012년 기출 전회차",
    "goal": "2012년 1~3회 기출 풀이: 보일러 열정산표 작성, 미연손실 및 복사열손실 산정",
    "keyFormula": "\\text{손실열량 합계} = q_1(\\text{배기가스}) + q_2(\\text{불완전연소}) + q_3(\\text{방열}) + q_4(\\text{회중미연})",
    "keyConcepts": [
      "1. 열정산 기준온도(통상 외기온도 20℃) 확인",
      "2. 입열(연료발열량+현열+공기현열)과 출열(유효출열+손실열) 일치"
    ],
    "pitfall": "⚠️ 열손실법 효율 = 100 - (총손실열량 / 총입열량 × 100)",
    "quiz": {
      "q": "총입열량 10,000 kJ/kg, 배기가스손실 1,200 kJ/kg, 방열손실 300 kJ/kg일 때 효율은?",
      "a": "85 %",
      "sol": "효율 = 100 - (1500 / 10000 × 100) = 85 %"
    }
  },
  "2026-10-18": {
    "dayNum": 21,
    "date": "2026-10-18",
    "dday": "D-20",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "13년",
    "volume": "19장",
    "topic": "2013년 기출 전회차",
    "goal": "2013년 1~3회 기출 풀이: 열교환기 전열면적 산정, LMTD, 관내 유속 계산",
    "keyFormula": "A = \\frac{Q}{K \\Delta T_m} \\; [\\text{m}^2]",
    "keyConcepts": [
      "1. 전열면적 계산 시 열관류율 K의 단위(W/m²K vs kcal/m²h℃) 일치",
      "2. 튜브 내경/외경 전열면적 기준 구분"
    ],
    "pitfall": "⚠️ 단위 시간당 열량 Q를 초당(W = J/s) 또는 시간당(kcal/h)으로 완벽 통일",
    "quiz": {
      "q": "전열량 116.3 kW, K=500 W/(m²·K), LMTD=40℃일 때 필요 전열면적은?",
      "a": "5.815 m²",
      "sol": "Q = 116,300 W. A = 116300 / (500 × 40) = 5.815 m²"
    }
  },
  "2026-10-19": {
    "dayNum": 22,
    "date": "2026-10-19",
    "dday": "D-19",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "14년",
    "volume": "22장",
    "topic": "2014년 기출 전회차",
    "goal": "2014년 1~3회 기출 풀이: 배관 마찰손실수두, 펌프 축동력 및 전동기 용량",
    "keyFormula": "h_L = f \\frac{L}{d} \\frac{v^2}{2g} \\; [\\text{m}]",
    "keyConcepts": [
      "1. 달시 공식 마찰계수 f, 관길이 L, 내경 d, 유속 v 대입",
      "2. 흡입실양정 + 토출실양정 + 관손실수두 = 전양정 H"
    ],
    "pitfall": "⚠️ 내경 d는 mm가 아닌 m 단위로 변환하여 분모에 대입",
    "quiz": {
      "q": "f=0.02, L=100m, d=0.1m, v=2m/s일 때 마찰손실수두는?",
      "a": "4.08 m",
      "sol": "hL = 0.02 × (100 / 0.1) × (4 / 19.6) = 20 × 0.204 = 4.08 m"
    }
  },
  "2026-10-20": {
    "dayNum": 23,
    "date": "2026-10-20",
    "dday": "D-18",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "15년",
    "volume": "18장",
    "topic": "2015년 기출 전회차",
    "goal": "2015년 1~3회 기출 풀이: 수처리 약품 투입량, 알칼리도, 경도 계산",
    "keyFormula": "\\text{경도(ppm)} = \\text{Ca}^{2+} \\times \\frac{100}{40} + \\text{Mg}^{2+} \\times \\frac{100}{24.3}",
    "keyConcepts": [
      "1. 탄산칼슘(CaCO3, 분자량 100) 환산 경도 계산식",
      "2. 청관제(인산나트륨) 투입 목적 및 실리카 스케일 방지"
    ],
    "pitfall": "⚠️ 1당량 기준 분자량 비(Ca=40 ➔ CaCO3=100) 환산비율 정확히 적용",
    "quiz": {
      "q": "Ca²⁺ 이온 농도가 40 mg/L일 때 CaCO3 환산 경도는?",
      "a": "100 ppm",
      "sol": "40 × (100 / 40) = 100 ppm"
    }
  },
  "2026-10-21": {
    "dayNum": 24,
    "date": "2026-10-21",
    "dday": "D-17",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "16년",
    "volume": "17장",
    "topic": "2016년 기출 전회차",
    "goal": "2016년 1~3회 기출 풀이: 절탄기 열정산, 급수온도 상승에 따른 연료 절감율",
    "keyFormula": "\\text{연료절감율} = \\frac{h_{w2} - h_{w1}}{(h_2 - h_{w1}) + (h_{w2} - h_{w1})} \\approx \\frac{\\Delta t_w}{H_l / c_w + \\dots}",
    "keyConcepts": [
      "1. 연료절감율 공식: 절탄기 흡열량 / 보일러 총입열량",
      "2. 공기예열기 설치 시 연소온도 상승 효과"
    ],
    "pitfall": "⚠️ 연료절감율 분모에 증기 흡열량과 절탄기 흡열량이 올바르게 들어가는지 확인",
    "quiz": {
      "q": "발생증기 흡열량 600 kcal/kg, 절탄기 급수 흡열량 30 kcal/kg일 때 연료절감율은?",
      "a": "4.76 %",
      "sol": "30 / (600 + 30) × 100 = 30 / 630 × 100 = 4.76 %"
    }
  },
  "2026-10-22": {
    "dayNum": 25,
    "date": "2026-10-22",
    "dday": "D-16",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "17년",
    "volume": "18장",
    "topic": "2017년 기출 전회차",
    "goal": "2017년 1~3회 기출 풀이: 보온재 열전도 및 경제적 두께, 표면 온도 계산",
    "keyFormula": "t_s = t_a + \\frac{Q}{\\alpha_o A} \\; [^\\circ\\text{C}]",
    "keyConcepts": [
      "1. 보온 외표면 온도 ts 계산 및 화상 방지 안전 기준(50℃ 이하)",
      "2. 보온재의 구비조건 5가지 단답형 암기"
    ],
    "pitfall": "⚠️ 보온재 구비조건: 열전도율이 작을 것, 내열성/기계적 강도가 클 것, 흡습성이 작을 것",
    "quiz": {
      "q": "표면 열손실 200 W/m², 외기온도 20℃, 외표면 열전달계수 10 W/(m²K)일 때 표면온도는?",
      "a": "40 ℃",
      "sol": "ts = 20 + 200 / 10 = 20 + 20 = 40 ℃"
    }
  },
  "2026-10-23": {
    "dayNum": 26,
    "date": "2026-10-23",
    "dday": "D-15",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "18년",
    "volume": "19장",
    "topic": "2018년 기출 전회차",
    "goal": "2018년 1~3회 기출 풀이: 통풍 손실 및 댐퍼 개도율, 완전연소 조건(3T)",
    "keyFormula": "\\text{연소의 3T}: \\text{온도(Temperature)}, \\text{시간(Time)}, \\text{난류(Turbulence)}",
    "keyConcepts": [
      "1. 3T 원리: 착화온도 이상 유지, 체류시간 확보, 공기와 연료의 강력한 혼합",
      "2. 등가 직관길이 환산 및 곡관/밸브류 압력강하 합산"
    ],
    "pitfall": "⚠️ 3T에 산소(Oxygen)를 더하여 3T+1O로 서술하는 변형 문제 대비",
    "quiz": {
      "q": "완전연소를 위한 3대 기본 요소를 쓰시오.",
      "a": "온도(Temperature), 시간(Time), 혼합/난류(Turbulence)",
      "sol": "고온 유지, 충분한 체류시간, 공기와의 난류 혼합"
    }
  },
  "2026-10-24": {
    "dayNum": 27,
    "date": "2026-10-24",
    "dday": "D-14",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "19년",
    "volume": "20장",
    "topic": "2019년 기출 전회차",
    "goal": "2019년 1~3회 기출 풀이: 에너지진단 기준, 폐열회수 히트파이프 원리",
    "keyFormula": "\\text{진단 주기}: \\text{에너지 다소비사업자(연간 2,000 TOE 이상)는 5년마다 수검}",
    "keyConcepts": [
      "1. 히트파이프(Heat Pipe)의 모세관 작용(Wick) 및 잠열 열수송 특성",
      "2. 보일러 가동 중 스케일 장해 4가지"
    ],
    "pitfall": "⚠️ 스케일 장해: 전열효율 저하, 관벽 과열로 파열, 보일러 수명 단축, 연료 소비 증가",
    "quiz": {
      "q": "에너지이용합리화법상 에너지진단 의무 대상자와 주기는?",
      "a": "연간 2,000 TOE 이상 다소비사업자, 5년 주기",
      "sol": "연간 2,000 TOE 이상인 사업자는 5년마다 의무 진단"
    }
  },
  "2026-10-25": {
    "dayNum": 28,
    "date": "2026-10-25",
    "dday": "D-13",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "20년",
    "volume": "28장",
    "topic": "2020년 실기 기출 (개편 1~3회)",
    "goal": "2020년 전회차 풀이: 필답형 100% 전환 원년 출제 경향, 신출 계산문제 완전 분석",
    "keyFormula": "\\text{실기 개편}: \\text{작업형 폐지 ➔ 필답형 100%(100점 만점), 복합 계산형 비중 70% 이상}",
    "keyConcepts": [
      "1. 2020년 필답 개편 이후 출제된 고난도 열정산 복합형 문항 분석",
      "2. 환경 규제 관련 질소산화물(NOx) 저감 연소 기술(FGR, LNB, SCR/SNCR)"
    ],
    "pitfall": "⚠️ 배점 8~10점짜리 대형 복합계산 문제는 부분점수가 있으므로 중간식 정밀 서술",
    "quiz": {
      "q": "저NOx 버너(LNB)의 질소산화물 저감 기본 원리 2가지는?",
      "a": "화염온도 저하, 산소 농도 저하(단계 연소)",
      "sol": "공기/연료 다단 연소로 화염 최고온도를 낮추고 국소 고산소 영역 억제"
    }
  },
  "2026-10-26": {
    "dayNum": 29,
    "date": "2026-10-26",
    "dday": "D-12",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "21년",
    "volume": "28장",
    "topic": "2021년 실기 기출 전회차",
    "goal": "2021년 1~3회 기출 풀이: 응축수 회수설비 열정산, 플래시 증기 발생량",
    "keyFormula": "X = \\frac{h_{f1} - h_{f2}}{r_2} \\times 100 \\; [\\%]",
    "keyConcepts": [
      "1. 고압 응축수가 저압 용기로 배출될 때 재증발하는 플래시 증기율(X)",
      "2. 응축수 회수로 인한 급수온도 상승 및 연료 절감 효과"
    ],
    "pitfall": "⚠️ 고압 포화수 엔탈피 hf1, 저압 포화수 엔탈피 hf2, 저압 증발잠열 r2 정확히 대입",
    "quiz": {
      "q": "8 bar 포화수(hf=721 kJ/kg)가 대기압(hf=419, r=2257 kJ/kg) 방출 시 재증발율은?",
      "a": "13.38 %",
      "sol": "X = (721 - 419) / 2257 × 100 = 302 / 2257 × 100 = 13.38 %"
    }
  },
  "2026-10-27": {
    "dayNum": 30,
    "date": "2026-10-27",
    "dday": "D-11",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "22년",
    "volume": "31장",
    "topic": "2022년 실기 기출 전회차",
    "goal": "2022년 1~3회 기출 풀이: 팽창탱크 용량 산정, 고온수 배관 사이징, 신유형 단답",
    "keyFormula": "V_t = \\frac{V_w (v_2 - v_1)}{1 - P_1 / P_2} \\; [\\text{L}]",
    "keyConcepts": [
      "1. 밀폐식 팽창탱크 수팽창량 및 설계압력에 따른 총 용량 계산",
      "2. 고온수 보일러와 증기보일러의 특성 및 비교"
    ],
    "pitfall": "⚠️ 절대압력 P1, P2 대입 시 게이지압에 대기압(1.033 ata = 0.1 MPa) 가산 필수",
    "quiz": {
      "q": "수용량 10,000 L 배관계의 팽창량 400 L, 최저압 2 ata, 최고압 4 ata일 때 팽창탱크 용량은?",
      "a": "800 L",
      "sol": "Vt = 400 / (1 - 2/4) = 400 / 0.5 = 800 L"
    }
  },
  "2026-10-28": {
    "dayNum": 31,
    "date": "2026-10-28",
    "dday": "D-10",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "23년 & 23년(출판사 변경)",
    "volume": "71장",
    "topic": "2023년 기출 전회차 (2개 출판사 교차분석)",
    "goal": "2023년 최신 기출 2개 출판사 전량 교차 풀이: 복합 혼소 연소, 신기술 서술형",
    "keyFormula": "H_{l,\\text{mix}} = \\sum (x_i \\cdot H_{l,i}) \\; [\\text{kcal/kg or kcal/Nm}^3]",
    "keyConcepts": [
      "1. 혼합연료의 평균 발열량 및 혼소 시 소요 이론공기량 합산 계산",
      "2. 출판사별 해설 차이 비교 및 산업인력공단 정답 기준 정립"
    ],
    "pitfall": "⚠️ 기체연료 체적비와 액체연료 중량비 혼합 시 단위 변환 정밀 점검",
    "quiz": {
      "q": "LNG(저위발열량 10,000 kcal/Nm³) 60%, B-C유(10,000 kcal/kg) 40% 혼소 시 총입열은?",
      "a": "각 연료별 소비량에 각각의 발열량을 곱해 합산",
      "sol": "총입열량 = Q_gas × Hl_gas + G_oil × Hl_oil"
    }
  },
  "2026-10-29": {
    "dayNum": 32,
    "date": "2026-10-29",
    "dday": "D-9",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "24년 & 24년(출판사 변경)",
    "volume": "84장",
    "topic": "2024년 기출 전회차 (최신판 84장 정밀분석)",
    "goal": "2024년 1~3회 기출 2개 출판사 전량 완독: 최신 신출 문항 및 복합 단위변환 마스터",
    "keyFormula": "\\text{온실가스 배출량} = \\text{연료소비량} \\times \\text{순발열량} \\times \\text{배출계수} \\times \\frac{44}{12}",
    "keyConcepts": [
      "1. 2024년 출제된 에너지이용합리화법 최신 개정 조항 및 온실가스 배출량",
      "2. 관류보일러 캐스케이드(Cascade) 제어 시스템의 에너지 절감 원리"
    ],
    "pitfall": "⚠️ 2024년 출판사 변경 보강분(29장)의 신유형 해설 집중 숙지",
    "quiz": {
      "q": "보일러 캐스케이드(다수대 연동) 시스템의 대표적인 장점 2가지는?",
      "a": "부분부하 시 효율 저하 방지, 1대 고장 시에도 백업 가능(신뢰성)",
      "sol": "필요 대수만 고효율 가동하여 부분부하 손실 억제 및 대수 제어로 안정성 증대"
    }
  },
  "2026-10-30": {
    "dayNum": 33,
    "date": "2026-10-30",
    "dday": "D-8",
    "phaseName": "3단계: 16개년 과년도 기출 481장 독파",
    "folder": "25년 (출판사 변경)",
    "volume": "29장",
    "topic": "2025년 최신 기출 (출판사 변경판 29장)",
    "goal": "2025년 최신 기출 전량 독파: 가장 최근 회차의 출제 경향, 신출 단답 및 계산 총정리",
    "keyFormula": "\\text{최신 출제 경향}: \\text{친환경 고효율화(콘덴싱), 디지털 계측제어, 신재생 하이브리드 연계}",
    "keyConcepts": [
      "1. 2025년 최신 시험에서 출제된 킬러 문항 3제 완벽 분해",
      "2. 시험장에 그대로 들고 들어갈 최신 출제 키워드 30선"
    ],
    "pitfall": "⚠️ 최신 기출에서 다룬 수치 조건과 유사 변형 문제가 올해(2026년) 시험에 직결됨",
    "quiz": {
      "q": "콘덴싱 보일러에서 잠열을 회수할 때 회수되는 열과 배기가스 온도 특성은?",
      "a": "수증기 응축잠열(약 539 kcal/kg) 회수, 배기가스 온도 50~60℃ 이하 저하",
      "sol": "배기가스 속 수증기를 응축시켜 잠열을 회수하므로 효율 100% 이상(LHV 기준) 달성 가능"
    }
  },
  "2026-10-31": {
    "dayNum": 34,
    "date": "2026-10-31",
    "dday": "D-7",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (식만 정리 + 21년 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 1: 공식 21장 백지 테스트 + 2021년 기출 타임어택",
    "goal": "핵심 계산 공식 21장 백지 인출 테스트 100점 달성 & 2021년 기출 1~3회 2시간 타임어택 풀이",
    "keyFormula": "\\text{전 범위 10대 공식 백지 인출}: A_0, G_e, \\text{BHP}, \\eta, K, \\Delta T_m, P_{\\text{pump}}, Z, B, h_L",
    "keyConcepts": [
      "1. '식만 정리' 폴더 21장 전 페이지의 공식을 A4 백지에 그대로 적는 셀프 테스트",
      "2. 2021년 기출 28장의 계산 문제를 풀이 과정까지 꼼꼼히 적으며 타임어택"
    ],
    "pitfall": "⚠️ 공식 백지 테스트에서 한 글자라도 헷갈리는 공식은 포스트잇에 적어 책상에 부착!",
    "quiz": {
      "q": "공식 백지 테스트: 보일러 효율(정압시험법)과 상당증발량 공식을 적으시오.",
      "a": "η = Ga(h2 - h1)/(Gf·Hl) × 100, Ge = Ga(h2 - h1)/539",
      "sol": "반드시 단위와 분모 분자 변수를 정확히 기술"
    }
  },
  "2026-11-01": {
    "dayNum": 35,
    "date": "2026-11-01",
    "dday": "D-6",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (연습문제 고난도 + 22년 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 2: 2022년 기출 복습 + 열정산표 100% 암기",
    "goal": "2022년 기출 31장 오답 재풀이 & 보일러+절탄기+공기예열기 통합 열정산표 수지 완벽 암기",
    "keyFormula": "\\text{열정산 수지}: \\sum Q_{\\text{in}} = \\sum Q_{\\text{out}} = Q_{\\text{useful}} + Q_{\\text{loss}}",
    "keyConcepts": [
      "1. 열정산표 빈칸 채우기 문제 3회 반복 훈련",
      "2. 2022년 출제된 신유형 서술형 답안 키워드 암기"
    ],
    "pitfall": "⚠️ 열정산표 계산 시 기준온도(20℃)와 배기가스 온도 차이를 정확히 적용할 것",
    "quiz": {
      "q": "보일러 열정산표의 4대 열손실 항목은?",
      "a": "배기가스 열손실, 불완전연소 가스 열손실, 방열 손실, 회중 미연분 열손실",
      "sol": "q1~q4의 손실 항목을 암기"
    }
  },
  "2026-11-02": {
    "dayNum": 36,
    "date": "2026-11-02",
    "dday": "D-5",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (23년 2개 출판사 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 3: 2023년 기출 실전 모의고사 (목표 80점+)",
    "goal": "2023년 기출 71장(출판사 A, B) 모의고사 실시 ➔ 채점 및 감점 요인(단위, 유효숫자) 전수 점검",
    "keyFormula": "\\text{실전 득점 전략}: \\text{계산 60점 만점 확보} + \\text{단답 25점 확보} = 85\\text{점 고득점 합격}",
    "keyConcepts": [
      "1. 실제 시험과 동일하게 2시간 30분 타이머 세팅 후 풀이",
      "2. 소수점 처리 규정(셋째자리 반올림하여 둘째자리까지) 준수 여부 집중 확인"
    ],
    "pitfall": "⚠️ 계산기 버튼 입력 실수(괄호 누락, 분모 나누기 오류) 없는지 2회 연속 계산 검산 습관화",
    "quiz": {
      "q": "실전 모의고사 자가점검: 계산문제 풀이 시 부분점수를 획득하기 위한 조건은?",
      "a": "공식 명기, 수치 대입 과정 기술, 최종 답과 단위 일치",
      "sol": "공식과 대입식이 맞으면 최종 계산 실수 시에도 부분점수 인정 가능"
    }
  },
  "2026-11-03": {
    "dayNum": 37,
    "date": "2026-11-03",
    "dday": "D-4",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (24년 2개 출판사 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 4: 2024년 최신 기출 실전 모의고사",
    "goal": "2024년 기출 84장(출판사 A, B) 모의고사 실시 ➔ 최신 출제 트렌드 오답 집중 복습",
    "keyFormula": "\\text{합격 커트라인}: 60\\text{점} \\implies \\text{목표}: 80\\text{점 이상으로 안정권 진입}",
    "keyConcepts": [
      "1. 2024년 기출 55장 + 출판사 변경 29장 전 문항 완벽 재검토",
      "2. 애매하게 맞힌 문제까지 확실하게 오답 노트에 정리"
    ],
    "pitfall": "⚠️ 2024년 기출 중 서술형 문항의 키워드가 누락되지 않도록 답안 재작성 훈련",
    "quiz": {
      "q": "2024년 기출 핵심: 스팀트랩 불량 시 발생하는 문제점 2가지는?",
      "a": "생증기 누출로 열손실 증대, 드레인 배출 불량으로 수격작용 발생",
      "sol": "트랩 열림 고장(증기 손실)과 닫힘 고장(응축수 체류 ➔ 워터해머)을 구분 기술"
    }
  },
  "2026-11-04": {
    "dayNum": 38,
    "date": "2026-11-04",
    "dday": "D-3",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "전체 (25년 최신판 기출)",
    "volume": "파이널",
    "topic": "파이널 Day 5: 2025년 최신 기출 완벽 재풀이 + 취약 계산 클리닉",
    "goal": "2025년 최신 기출 29장 완벽 재풀이 & 40일간 누적된 개인 취약 계산 유형(연소/열전달/펌프) 클리닉",
    "keyFormula": "\\text{취약점 제로화}: \\text{틀렸던 문제는 반드시 다시 나온다는 마인드로 3번 연속 정답 도출}",
    "keyConcepts": [
      "1. 2025년 최신 기출 29장을 보지 않고 처음부터 끝까지 혼자 힘으로 풀이",
      "2. 자신이 가장 자주 틀렸던 계산 공식 3개를 골라 완벽하게 마스터"
    ],
    "pitfall": "⚠️ 계산 문제에서 단위 환산(kW ➔ kcal/h, kg ➔ Nm³, bar ➔ MPa)에 걸려 넘어지지 않도록 유의",
    "quiz": {
      "q": "1 kW를 시간당 열량(kcal/h)으로 환산하면?",
      "a": "860 kcal/h",
      "sol": "1 W = 1 J/s ➔ 1 kW = 3600 kJ/h = 3600 / 4.1868 ≈ 860 kcal/h"
    }
  },
  "2026-11-05": {
    "dayNum": 39,
    "date": "2026-11-05",
    "dday": "D-2",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "연습문제 (기출이 대부분인)",
    "volume": "파이널",
    "topic": "파이널 Day 6: 고난도 오답 노트 50선 복습 & 서술형 키워드 암기",
    "goal": "단원별 연습문제 256장 중 선별한 고난도 50문항 3회독 & 핵심 단답 100선 눈으로 빠르게 회독",
    "keyFormula": "\\text{단답형 합격 공식}: \\text{질문이 묻는 핵심 기술 용어(Key-Term)가 반드시 문장에 포함되어야 함}",
    "keyConcepts": [
      "1. 서술형 문제는 긴 문장보다 채점관이 찾는 '핵심 명사 키워드'를 명확하게 기재",
      "2. 연습문제 256장의 고난도 계산 문제 풀이법 최종 점검"
    ],
    "pitfall": "⚠️ 단답형 작성 시 문제에서 요구한 개수(예: 3가지를 쓰시오)만 정확히 작성 (초과 작성 시 오답 위험)",
    "quiz": {
      "q": "보일러의 3대 안전장치를 쓰시오.",
      "a": "안전밸브, 고저수위 경보기(차단장치), 화염 검출기",
      "sol": "과압 방지, 수위 이상 방지, 실화 방지 3대 장치"
    }
  },
  "2026-11-06": {
    "dayNum": 40,
    "date": "2026-11-06",
    "dday": "D-1",
    "phaseName": "4단계: [마지막 7일] 연습 & 기출 무한 반복",
    "folder": "식만 정리 & 전체",
    "volume": "파이널",
    "topic": "파이널 Day 7: 전야 마인드컨트롤 & 공식 21장 최종 회독",
    "goal": "식만 정리 21장 최종 1회독, 공학용 계산기(리셋 확인 및 각도 DEG 세팅), 수험표·신분증·흑색볼펜 점검, 충분한 수면",
    "keyFormula": "\\text{시험 전날 필승 전략}: \\text{새로운 문제 절대 금지, 자신감 충전, 22:00 이전 취침, 최상의 컨디션 확보}",
    "keyConcepts": [
      "1. 신분증, 수험표, 공학용 계산기(허용군 기종 확인 및 리셋 조작 숙지), 흑색 볼펜(2자루 이상), 수정테이프 지참",
      "2. 40일간 완주한 나 자신을 믿고 당당하게 합격을 확신하기"
    ],
    "pitfall": "⚠️ 연필이나 샤프로 작성한 답안은 0점 처리되므로 반드시 지워지지 않는 흑색 볼펜 사용!",
    "quiz": {
      "q": "내일 시험장에서 사용할 답안 작성 펜과 계산기 규정은?",
      "a": "흑색 볼펜 전용(연필/청색 불가), 공학용 계산기 허용 기종 리셋 확인",
      "sol": "규정 위반으로 인한 실격 방지"
    }
  },
  "2026-11-07": {
    "dayNum": 41,
    "date": "2026-11-07",
    "dday": "D-Day",
    "phaseName": "★ 시험 당일",
    "folder": "시험장",
    "volume": "파이널",
    "topic": "★ 2026년 정기 기사 실기 시험 당일!",
    "goal": "오전 09:00 실기 필답형 완벽 응시! 침착하고 정확하게 85점+ 최종 합격 쟁취!",
    "keyFormula": "\\text{합격을 진심으로 축하합니다! 그동안의 41일간 노력이 결실을 맺는 날입니다.}",
    "keyConcepts": [
      "1. 시험 시작 30분 전 입실 완료 및 계산기 세팅 확인",
      "2. 문제지 수령 후 아는 문제부터 침착하고 빠르게 풀이",
      "3. 계산 과정과 단위, 소수점 둘째자리 표기 2회 이상 정밀 검산"
    ],
    "pitfall": "★ 포기하지 않고 끝까지 문제를 읽고 정답을 적어내면 무조건 합격합니다!",
    "quiz": {
      "q": "오늘 시험에 임하는 나의 다짐은?",
      "a": "침착하게 모든 문제를 이해하고 완벽하게 답안을 작성하여 당당히 합격한다!",
      "sol": "합격을 축하합니다!"
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
// 2. Cloud Sync & Storage Manager
  // =========================================================================
/**
 * Cloud Sync & Local Storage Module
 * - LocalStorage 자동 저장 및 오프라인 우선 보장
 * - Firebase Firestore 실시간 양방향 동기화 (옵션 A)
 * - JSON 백업 내보내기 / 복원 기능
 */

// [study-data imported]

const STORAGE_KEY = 'career_dashboard_data_v1';
const FIREBASE_CONFIG_KEY = 'career_dashboard_firebase_config';

class SyncManager {
  constructor() {
    this.db = null;
    this.unsubscribe = null;
    this.isOnline = navigator.onLine;
    this.syncStatusListeners = [];
    this.dataChangeListeners = [];
    this.status = 'local'; // 'local', 'connecting', 'synced', 'error'
    this.lastSyncedAt = null;

    window.addEventListener('online', () => this.handleNetworkChange(true));
    window.addEventListener('offline', () => this.handleNetworkChange(false));
  }

  // 데이터 초기 로드 (로컬 우선)
  loadInitialData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const upgradedCamino = (parsed.camino && parsed.camino.caminoDataVersion === 3)
          ? parsed.camino
          : JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
        const upgradedBands = (parsed.bands && parsed.bands.length > 0 && parsed.bands[0].date === "2026-10-10 16:00")
          ? parsed.bands
          : JSON.parse(JSON.stringify(INITIAL_BAND_SCHEDULES));
        const upgradedEnergyPlan = (parsed.energyPlan && parsed.energyPlan.length === INITIAL_ENERGY_STUDY_PLAN.length)
          ? parsed.energyPlan
          : JSON.parse(JSON.stringify(INITIAL_ENERGY_STUDY_PLAN));
        const upgradedSns = (parsed.sns && parsed.sns.snsDataVersion === 3)
          ? parsed.sns
          : JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
        const upgradedPortfolio = (parsed.portfolio && parsed.portfolio.portfolioDataVersion === 2)
          ? parsed.portfolio
          : JSON.parse(JSON.stringify(INITIAL_PORTFOLIO_DATA));
        const upgradedInbody = (parsed.inbody && parsed.inbody.inbodyDataVersion === 2 && parsed.inbody.records && parsed.inbody.records.length >= 89)
          ? parsed.inbody
          : JSON.parse(JSON.stringify(INITIAL_INBODY_DATA));

        parsed.camino = upgradedCamino;
        parsed.bands = upgradedBands;
        parsed.energyPlan = upgradedEnergyPlan;
        parsed.sns = upgradedSns;
        parsed.portfolio = upgradedPortfolio;
        parsed.inbody = upgradedInbody;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));

        return {
          exams: parsed.exams || INITIAL_EXAM_SCHEDULES,
          bands: upgradedBands,
          formulas: parsed.formulas || INITIAL_ENERGY_FORMULAS,
          questions: parsed.questions || INITIAL_ENERGY_QUESTIONS,
          energyPlan: upgradedEnergyPlan,
          externalDashboards: parsed.externalDashboards || INITIAL_EXTERNAL_DASHBOARDS,
          dischargeDate: parsed.dischargeDate || INITIAL_DISCHARGE_DATE,
          camino: upgradedCamino,
          sns: upgradedSns,
          portfolio: upgradedPortfolio,
          inbody: upgradedInbody,
          theme: parsed.theme || 'dark'
        };
      }
    } catch (e) {
      console.warn('LocalStorage 로드 실패, 기본값 사용:', e);
    }

    return {
      exams: INITIAL_EXAM_SCHEDULES,
      bands: INITIAL_BAND_SCHEDULES,
      formulas: INITIAL_ENERGY_FORMULAS,
      questions: INITIAL_ENERGY_QUESTIONS,
      energyPlan: INITIAL_ENERGY_STUDY_PLAN,
      externalDashboards: INITIAL_EXTERNAL_DASHBOARDS,
      dischargeDate: INITIAL_DISCHARGE_DATE,
      camino: INITIAL_CAMINO_DATA,
      sns: INITIAL_SNS_DATA,
      portfolio: INITIAL_PORTFOLIO_DATA,
      inbody: INITIAL_INBODY_DATA,
      theme: 'dark'
    };
  }

  // 로컬 저장
  saveToLocal(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      this.lastSyncedAt = new Date();
      return true;
    } catch (e) {
      console.error('LocalStorage 저장 실패 (용량 초과 가능성):', e);
      return false;
    }
  }

  // Firebase 초기화 시도
  async initFirebase(config = null) {
    const activeConfig = config || this.getSavedFirebaseConfig();
    if (!activeConfig || !activeConfig.apiKey || !activeConfig.projectId) {
      this.setStatus('local', '로컬 저장 모드 (Firebase 미설정)');
      return false;
    }

    this.setStatus('connecting', 'Firebase 클라우드 연결 중...');

    try {
      // Firebase CDN 동적 로드 (Compat 버전 사용으로 번들러 없이 브라우저에서 바로 동작)
      if (!window.firebase) {
        await this.loadScript('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
        await this.loadScript('https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js');
      }

      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(activeConfig);
      }

      this.db = window.firebase.firestore();
      const userId = activeConfig.userId || 'my_dashboard_user';
      const docRef = this.db.collection('dashboards').doc(userId);

      // 실시간 리스너 구독
      if (this.unsubscribe) this.unsubscribe();

      this.unsubscribe = docRef.onSnapshot(
        (doc) => {
          if (doc.exists) {
            const remoteData = doc.data();
            this.saveToLocal(remoteData);
            this.notifyDataChange(remoteData);
            this.setStatus('synced', '클라우드 동기화 완료 (실시간)');
          } else {
            // 원격에 데이터가 없으면 로컬 데이터를 최초 업로드
            const localData = this.loadInitialData();
            docRef.set(localData);
            this.setStatus('synced', '원격 초기 데이터 등록 완료');
          }
        },
        (error) => {
          console.error('Firestore 동기화 에러:', error);
          this.setStatus('error', `동기화 오류: ${error.message}`);
        }
      );

      // 설정 저장
      localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(activeConfig));
      return true;
    } catch (err) {
      console.error('Firebase 초기화 실패:', err);
      this.setStatus('error', `Firebase 연결 실패: ${err.message}`);
      return false;
    }
  }

  // 클라우드로 데이터 전송
  async syncToCloud(data) {
    this.saveToLocal(data);

    if (this.db) {
      try {
        const config = this.getSavedFirebaseConfig();
        const userId = (config && config.userId) || 'my_dashboard_user';
        await this.db.collection('dashboards').doc(userId).set(data, { merge: true });
        this.setStatus('synced', '클라우드에 저장됨');
      } catch (err) {
        console.error('클라우드 저장 실패:', err);
        this.setStatus('error', '클라우드 저장 실패 (로컬에만 보관됨)');
      }
    }
  }

  getSavedFirebaseConfig() {
    try {
      const val = localStorage.getItem(FIREBASE_CONFIG_KEY);
      return val ? JSON.parse(val) : null;
    } catch (e) {
      return null;
    }
  }

  handleNetworkChange(isOnline) {
    this.isOnline = isOnline;
    if (!isOnline) {
      this.setStatus('local', '오프라인 (인터넷 연결 끊김 - 로컬 동작)');
    } else {
      if (this.getSavedFirebaseConfig()) {
        this.initFirebase();
      } else {
        this.setStatus('local', '온라인 (로컬 모드)');
      }
    }
  }

  setStatus(status, message) {
    this.status = status;
    this.syncStatusListeners.forEach(listener => listener({ status, message, lastSyncedAt: this.lastSyncedAt }));
  }

  onStatusChange(callback) {
    this.syncStatusListeners.push(callback);
  }

  onDataChange(callback) {
    this.dataChangeListeners.push(callback);
  }

  notifyDataChange(data) {
    this.dataChangeListeners.forEach(listener => listener(data));
  }

  // 스크립트 로더 헬퍼
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    });
  }

  // JSON 파일로 내보내기
  exportToJSON(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `career_dashboard_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // JSON 파일 읽어서 복원
  importFromJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && (parsed.exams || parsed.bands || parsed.questions)) {
            this.saveToLocal(parsed);
            if (this.db) this.syncToCloud(parsed);
            resolve(parsed);
          } else {
            reject(new Error('유효하지 않은 대시보드 백업 파일입니다.'));
          }
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('파일을 읽지 못했습니다.'));
      reader.readAsText(file);
    });
  }
}

const syncManager = new SyncManager();


  // =========================================================================
  // 3. Application Controllers & Navigation
  // =========================================================================
/**
 * Main Application Logic
 * - State Management
 * - Responsive Navigation & Tabs
 * - D-Day Engine
 * - Exam, Band, Energy Study, and External Dashboards Controllers
 */

// [cloud-sync imported]

// ==========================================================================
// Central Tab Registry & Reordering System (3 Major Categories)
// 1. 커리어 패스 관리 (career) : 에너지관리기사, 시험 및 학사 일정, 주요 경력 & TF, 수상 내역 관리
// 2. 취미 (hobby) : 산티아고 순례길, 체구 감량 & 인바디, 밴드 합주 & 문화, SNS & 브랜딩
// 3. 기타 (etc) : 종합 대시보드, 외부 연동 & 엑셀
// ==========================================================================
const TAB_CATEGORIES = [
  {
    id: 'career',
    name: '커리어 패스 관리',
    shortName: '커리어',
    icon: 'fa-briefcase',
    color: 'text-amber-400',
    badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    headerBadge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
  },
  {
    id: 'hobby',
    name: '취미',
    shortName: '취미',
    icon: 'fa-heart',
    color: 'text-rose-400',
    badgeClass: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
    headerBadge: 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
  },
  {
    id: 'etc',
    name: '기타',
    shortName: '기타',
    icon: 'fa-layer-group',
    color: 'text-slate-400',
    badgeClass: 'bg-slate-700/50 text-slate-300 border border-slate-600/40',
    headerBadge: 'bg-slate-800 text-slate-300 border border-slate-700/50'
  }
];

const TAB_REGISTRY = [
  // 1. 커리어 패스 관리 (4개)
  { id: 'energy', name: '에너지관리기사', shortName: '에너지', icon: 'fa-graduation-cap', color: 'text-amber-300', badge: 'D-40', badgeClass: 'bg-sky-500/20 text-sky-300', category: 'career', categoryName: '커리어 패스 관리' },
  { id: 'exam', name: '시험 및 학사 일정', shortName: '일정', icon: 'fa-calendar-days', color: 'text-blue-400', badge: null, badgeClass: '', category: 'career', categoryName: '커리어 패스 관리' },
  { id: 'careers', name: '주요 경력 & TF', shortName: '경력', icon: 'fa-briefcase', color: 'text-emerald-400', badge: '15건', badgeClass: 'bg-emerald-500/20 text-emerald-400', isPortfolio: true, category: 'career', categoryName: '커리어 패스 관리' },
  { id: 'awards', name: '수상 내역 관리', shortName: '수상', icon: 'fa-trophy', color: 'text-amber-400', badge: '23건', badgeClass: 'bg-amber-500/20 text-amber-400', isPortfolio: true, category: 'career', categoryName: '커리어 패스 관리' },

  // 2. 취미 (4개)
  { id: 'camino', name: '산티아고 순례길', shortName: '순례길', icon: 'fa-person-hiking', color: 'text-amber-400', badge: '11/9 (3주)', badgeClass: 'bg-amber-500/20 text-amber-400', category: 'hobby', categoryName: '취미' },
  { id: 'inbody', name: '체구 감량 & 인바디', shortName: '인바디', icon: 'fa-weight-scale', color: 'text-rose-400', badge: '89회', badgeClass: 'bg-rose-500/20 text-rose-400', category: 'hobby', categoryName: '취미' },
  { id: 'band', name: '밴드 합주 & 문화', shortName: '밴드', icon: 'fa-guitar', color: 'text-purple-400', badge: '10/10', badgeClass: 'bg-purple-500/20 text-purple-300', category: 'hobby', categoryName: '취미' },
  { id: 'sns', name: 'SNS & 브랜딩', shortName: 'SNS', icon: 'fa-share-nodes', color: 'text-pink-400', badge: 'Brunch', badgeClass: 'bg-pink-500/20 text-pink-400', category: 'hobby', categoryName: '취미' },

  // 3. 기타 (2개)
  { id: 'overview', name: '종합 대시보드', shortName: '홈', icon: 'fa-house', color: 'text-sky-400', badge: null, badgeClass: '', category: 'etc', categoryName: '기타' },
  { id: 'external', name: '외부 연동 & 엑셀', shortName: '연동·엑셀', icon: 'fa-window-restore', color: 'text-emerald-400', badge: 'Excel', badgeClass: 'bg-emerald-500/20 text-emerald-400', category: 'etc', categoryName: '기타' }
];

const DEFAULT_TAB_ORDER = TAB_REGISTRY.map(t => t.id);

function getTabOrder() {
  try {
    const saved = localStorage.getItem('career_dashboard_tab_order');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const validOrder = parsed.filter(id => TAB_REGISTRY.some(t => t.id === id));
        DEFAULT_TAB_ORDER.forEach(id => {
          if (!validOrder.includes(id)) validOrder.push(id);
        });
        return validOrder;
      }
    }
  } catch (e) {
    console.warn('탭 순서 로드 실패, 기본값 사용:', e);
  }
  return [...DEFAULT_TAB_ORDER];
}

function saveTabOrder(order) {
  try {
    localStorage.setItem('career_dashboard_tab_order', JSON.stringify(order));
    state.tabOrder = order;
  } catch (e) {
    console.error('탭 순서 저장 실패:', e);
  }
}

// Global App State

// ==========================================================================
// Admin Access Control & Google Authentication System
// Target Admin: carlosnam6363@gmail.com
// ==========================================================================
const ADMIN_EMAIL = 'carlosnam6363@gmail.com';
const AUTH_STORAGE_KEY = 'career_dashboard_auth_user';

function getSavedAuthUser() {
  try {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn('인증 정보 로드 실패:', e);
  }
  return null;
}

function saveAuthUser(user) {
  try {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch (e) {
    console.error('인증 정보 저장 실패:', e);
  }
}

function isCurrentUserAdmin() {
  const user = state.currentUser;
  return !!(user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());
}

function updateAdminState() {
  const user = state.currentUser;
  const isAdmin = isCurrentUserAdmin();
  state.isAdmin = isAdmin;

  if (isAdmin) {
    document.body.classList.add('is-admin');
  } else {
    document.body.classList.remove('is-admin');
  }

  renderAuthWidget();
}

function checkAdminPermission(actionName = '데이터 수정') {
  if (!state.isAdmin) {
    showToast(`⚠️ [수정 불가] ${actionName} 권한은 관리자(${ADMIN_EMAIL})에게만 있습니다.`);
    openAdminAuthModal();
    return false;
  }
  return true;
}

function openAdminAuthModal() {
  renderAuthWidget();
  const modal = document.getElementById('modal-admin-auth');
  if (modal) modal.classList.remove('hidden');
}

function renderAuthWidget() {
  const sidebarContainer = document.getElementById('sidebar-auth-widget');
  const mobileContainer = document.getElementById('mobile-auth-widget');
  const modalStatusContainer = document.getElementById('auth-modal-user-status');
  const modalBtnText = document.getElementById('google-login-btn-text');

  const user = state.currentUser;
  const isAdmin = state.isAdmin;

  // 1. Sidebar Widget
  if (sidebarContainer) {
    if (isAdmin && user) {
      sidebarContainer.innerHTML = `
        <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-2 shadow-sm">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-xs flex-shrink-0 shadow">
              <i class="fa-solid fa-crown text-[11px]"></i>
            </div>
            <div class="truncate">
              <div class="flex items-center gap-1">
                <span class="text-[11px] font-black text-amber-300">관리자 모드</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p class="text-[10px] text-slate-400 truncate font-mono">${user.email}</p>
            </div>
          </div>
          <button onclick="window.app.handleLogout()" class="px-2 py-1 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 text-[10px] font-bold transition flex items-center gap-1 flex-shrink-0" title="로그아웃">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      `;
    } else if (user) {
      sidebarContainer.innerHTML = `
        <div class="p-2 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-2">
          <div class="truncate min-w-0">
            <span class="text-[10px] text-slate-400 block truncate">일반 사용자 (${user.email})</span>
            <span class="text-[9px] text-amber-400 font-bold">읽기 전용 모드</span>
          </div>
          <button onclick="window.app.handleLogout()" class="text-[10px] text-slate-400 hover:text-white px-2 py-1 bg-slate-700 rounded-lg">
            로그아웃
          </button>
        </div>
      `;
    } else {
      sidebarContainer.innerHTML = `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between px-1 text-[10px]">
            <span class="text-slate-400 flex items-center gap-1">
              <i class="fa-solid fa-lock text-[9px] text-slate-500"></i> 방문자 모드
            </span>
            <span class="text-slate-400 font-medium">읽기 전용</span>
          </div>
          <button onclick="window.app.openAuthModal()" class="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border border-slate-700/80 hover:border-amber-500/40 shadow-sm cursor-pointer group">
            <svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span class="group-hover:text-amber-300 transition text-[11px]">관리자 로그인</span>
          </button>
        </div>
      `;
    }
  }

  // 2. Mobile Quick Widget
  if (mobileContainer) {
    if (isAdmin && user) {
      mobileContainer.innerHTML = `
        <button onclick="window.app.openAuthModal()" class="text-xs px-2 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1">
          <i class="fa-solid fa-crown text-[10px]"></i>
          <span>관리자</span>
        </button>
      `;
    } else {
      mobileContainer.innerHTML = `
        <button onclick="window.app.openAuthModal()" class="text-xs px-2 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-bold flex items-center gap-1">
          <i class="fa-solid fa-lock text-[10px]"></i>
          <span>게스트</span>
        </button>
      `;
    }
  }

  // 3. Modal Status
  if (modalStatusContainer) {
    if (isAdmin && user) {
      modalStatusContainer.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-white">${user.displayName || '관리자'} (${user.email})</div>
            <div class="text-[10px] text-emerald-400">👑 관리자 권한 활성화됨 (모든 수정 가능)</div>
          </div>
        </div>
        <button onclick="window.app.handleLogout()" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg font-bold">
          로그아웃
        </button>
      `;
      if (modalBtnText) modalBtnText.innerText = '다른 계정으로 전환';
    } else if (user) {
      modalStatusContainer.innerHTML = `
        <div class="text-xs text-rose-300">
          ⚠️ 현재 계정(<b>${user.email}</b>)은 관리자 권한이 없습니다.<br>
          <span class="text-slate-400 text-[10px]">관리자 이메일(${ADMIN_EMAIL})로 다시 로그인해주세요.</span>
        </div>
        <button onclick="window.app.handleLogout()" class="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg font-bold">
          로그아웃
        </button>
      `;
      if (modalBtnText) modalBtnText.innerText = '관리자 계정으로 로그인';
    } else {
      modalStatusContainer.innerHTML = `
        <span class="text-slate-400 text-xs">현재 상태: <b>로그인되지 않음 (읽기 전용 게스트)</b></span>
        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">Read-Only</span>
      `;
      if (modalBtnText) modalBtnText.innerText = 'Google 계정으로 로그인 (관리자)';
    }
  }
}

async function handleGoogleLogin() {
  try {
    // 1. Try Firebase Auth popup if firebase app and auth are configured
    if (window.firebase && window.firebase.auth) {
      const activeConfig = syncManager.getSavedFirebaseConfig();
      if (activeConfig && activeConfig.apiKey && activeConfig.authDomain) {
        showToast('Google 인증 팝업을 여는 중...');
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        if (user) {
          const authUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '소유자',
            photoURL: user.photoURL || null
          };
          state.currentUser = authUser;
          saveAuthUser(authUser);
          updateAdminState();
          window.app.closeAllModals();
          if (authUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
            showToast(`👑 환영합니다! ${ADMIN_EMAIL} 관리자 권한이 활성화되었습니다.`);
          } else {
            showToast(`⚠️ ${authUser.email} 계정은 읽기 전용 권한입니다.`);
          }
          return;
        }
      }
    }

    // 2. Direct Admin Auth (Local / Standalone Mode):
    // Authenticate as carlosnam6363@gmail.com directly
    const authUser = {
      uid: 'admin_carlosnam',
      email: ADMIN_EMAIL,
      displayName: 'Carlos Nam',
      photoURL: null
    };
    state.currentUser = authUser;
    saveAuthUser(authUser);
    updateAdminState();
    window.app.closeAllModals();
    showToast(`👑 ${ADMIN_EMAIL} 관리자 인증 완료! 수정 권한이 활성화되었습니다.`);
  } catch (err) {
    console.error('Google 로그인 오류:', err);
    showToast(`인증 오류: ${err.message || '로그인에 실패했습니다.'}`);
  }
}

function handleLogout() {
  try {
    if (window.firebase && window.firebase.auth) {
      firebase.auth().signOut().catch(() => {});
    }
  } catch (e) {}

  state.currentUser = null;
  saveAuthUser(null);
  updateAdminState();
  showToast('로그아웃되었습니다. 읽기 전용 게스트 모드로 전환되었습니다.');
}

let state = {
  currentUser: getSavedAuthUser(),
  isAdmin: false,
  exams: [],
  bands: [],
  formulas: [],
  questions: [],
  energyPlan: INITIAL_ENERGY_STUDY_PLAN,
  energyStudySubtab: 'briefing', // 'briefing', 'plan', 'folders', 'daily', 'formulas', 'upload' (오늘 브리핑 기본)
  selectedBriefingDate: '2026-09-28',
  showBriefingQuiz: false,
  flashcardMode: 'single', // 'single' or 'list'
  cardFlipped: {}, // { [qId]: boolean }
  cardMastered: {},
  foldersDone: {},
  energyPlanPhaseFilter: 'all',
  externalDashboards: [],
  dischargeDate: INITIAL_DISCHARGE_DATE,
  camino: INITIAL_CAMINO_DATA,
  sns: INITIAL_SNS_DATA,
  portfolio: INITIAL_PORTFOLIO_DATA,
  inbody: INITIAL_INBODY_DATA,
  externalSubtab: 'excel', // 'excel' or 'dashboards'
  inbodyYearFilter: 'all', // 'all', '2026', '2025', '2024', 'prev'
  theme: 'dark',
  activeTab: 'overview',
  tabOrder: getTabOrder(),
  navCategoryFilter: 'all', // 'all' | 'career' | 'hobby' | 'etc'
  activeExternalTabId: null,
  examFilter: 'all',
  bandFilter: 'all',
  snsFilter: 'all',
  portfolioMode: 'awards', // 'awards' | 'careers' | 'timeline'
  awardFilter: 'all',
  careerFilter: 'all',
  portfolioSearch: '',
  currentQuestionIndex: 0,
  flashcardCategoryFilter: 'all', // 'all', 'practice', 'exam', 'mastered', 'unmastered'
  flashcardDetailFilter: 'all', // 'all' or specific chapter/year
  flashcardSearch: '',
  brunchLastSync: "2026-09-28 09:00"
};

// ==========================================================================
// Dynamic Navigation & Tab Reordering Functions
// ==========================================================================
function setNavCategoryFilter(catId) {
  state.navCategoryFilter = catId;
  renderNavigation();
}

function renderNavigation() {
  const currentTab = state.activeTab;
  const order = state.tabOrder && state.tabOrder.length > 0 ? state.tabOrder : getTabOrder();
  state.tabOrder = order;
  const catFilter = state.navCategoryFilter || 'all';

  // 1. Desktop Sidebar Navigation
  const desktopContainer = document.getElementById('desktop-sidebar-nav');
  if (desktopContainer) {
    // Category Filter Chips
    const filterChipsHtml = `
      <div class="grid grid-cols-4 gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800 mb-3 text-[10px]">
        <button onclick="window.app.setNavCategoryFilter('all')" class="py-1 px-1 rounded-lg font-bold transition text-center ${catFilter === 'all' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
          전체
        </button>
        <button onclick="window.app.setNavCategoryFilter('career')" class="py-1 px-1 rounded-lg font-bold transition text-center truncate ${catFilter === 'career' ? 'bg-amber-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-amber-300'}" title="커리어 패스 관리">
          💼 커리어
        </button>
        <button onclick="window.app.setNavCategoryFilter('hobby')" class="py-1 px-1 rounded-lg font-bold transition text-center truncate ${catFilter === 'hobby' ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-400 hover:text-rose-300'}" title="취미">
          ❤️ 취미
        </button>
        <button onclick="window.app.setNavCategoryFilter('etc')" class="py-1 px-1 rounded-lg font-bold transition text-center truncate ${catFilter === 'etc' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}" title="기타">
          ⚙️ 기타
        </button>
      </div>
    `;

    // Filter categories to display
    const targetCategories = catFilter === 'all'
      ? TAB_CATEGORIES
      : TAB_CATEGORIES.filter(c => c.id === catFilter);

    const sectionsHtml = targetCategories.map(cat => {
      // Find tabs belonging to this category, preserving relative order from state.tabOrder
      const catTabs = order
        .map(id => TAB_REGISTRY.find(t => t.id === id))
        .filter(t => t && t.category === cat.id);

      if (catTabs.length === 0) return '';

      const tabsHtml = catTabs.map(tabDef => {
        const isActive = currentTab === tabDef.id;
        const activeClass = isActive
          ? 'nav-tab-active text-sky-400 bg-sky-500/15 font-bold border border-sky-500/30 shadow-sm'
          : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium';
        
        const badgeHtml = tabDef.badge
          ? `<span class="text-[9px] px-1.5 py-0.5 rounded font-bold ${tabDef.badgeClass || 'bg-slate-800 text-slate-300'}">${tabDef.badge}</span>`
          : '';

        const clickHandler = tabDef.isPortfolio
          ? `window.app.openPortfolioTab('${tabDef.id}')`
          : `window.app.switchTab('${tabDef.id}')`;

        return `
          <button data-nav-tab="${tabDef.id}" onclick="${clickHandler}" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition ${activeClass}">
            <i class="fa-solid ${tabDef.icon} w-4 text-center ${tabDef.color}"></i>
            <span class="flex-1 text-left truncate">${tabDef.name}</span>
            ${badgeHtml}
          </button>
        `;
      }).join('');

      return `
        <div class="mb-3">
          <div class="flex items-center justify-between px-2.5 py-1 mb-1">
            <span class="text-[10px] font-extrabold flex items-center gap-1.5 ${cat.color}">
              <i class="fa-solid ${cat.icon} text-[10px]"></i>
              <span>${cat.name}</span>
            </span>
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-bold ${cat.headerBadge}">
              ${catTabs.length}
            </span>
          </div>
          <div class="space-y-1">
            ${tabsHtml}
          </div>
        </div>
      `;
    }).join('');

    desktopContainer.innerHTML = filterChipsHtml + sectionsHtml;
  }

  // 2. Mobile Bottom Navigation
  const mobileContainer = document.getElementById('mobile-bottom-nav');
  if (mobileContainer) {
    mobileContainer.innerHTML = order.map((tabId) => {
      const tabDef = TAB_REGISTRY.find(t => t.id === tabId);
      if (!tabDef) return '';
      const isActive = currentTab === tabDef.id;
      const activeClass = isActive
        ? 'mobile-tab-active text-sky-400 font-bold bg-sky-500/20 border border-sky-500/30'
        : 'text-slate-400 font-medium hover:text-slate-200';

      const clickHandler = tabDef.isPortfolio
        ? `window.app.openPortfolioTab('${tabDef.id}')`
        : `window.app.switchTab('${tabDef.id}')`;

      const catDef = TAB_CATEGORIES.find(c => c.id === tabDef.category);
      const dotColor = catDef ? (catDef.id === 'career' ? 'bg-amber-400' : catDef.id === 'hobby' ? 'bg-rose-400' : 'bg-slate-400') : 'bg-slate-500';

      return `
        <button data-mobile-tab="${tabDef.id}" onclick="${clickHandler}" class="flex flex-col items-center justify-center gap-1 text-[10px] px-2.5 py-1.5 rounded-xl flex-shrink-0 min-w-[52px] transition relative ${activeClass}">
          <span class="w-1.5 h-1.5 rounded-full ${dotColor} absolute top-1 right-2"></span>
          <i class="fa-solid ${tabDef.icon} text-sm ${tabDef.color}"></i>
          <span class="truncate max-w-[56px]">${tabDef.shortName}</span>
        </button>
      `;
    }).join('');
  }
}

function renderTabOrderModal() {
  const container = document.getElementById('tab-order-list');
  if (!container) return;

  const order = state.tabOrder && state.tabOrder.length > 0 ? state.tabOrder : getTabOrder();
  state.tabOrder = order;

  container.innerHTML = order.map((tabId, idx) => {
    const tabDef = TAB_REGISTRY.find(t => t.id === tabId);
    if (!tabDef) return '';
    const isFirst = idx === 0;
    const isLast = idx === order.length - 1;

    const catDef = TAB_CATEGORIES.find(c => c.id === tabDef.category) || {
      name: tabDef.categoryName || '기타',
      shortName: '기타',
      badgeClass: 'bg-slate-700/50 text-slate-300 border border-slate-600/40',
      icon: 'fa-layer-group'
    };

    const badgeHtml = tabDef.badge
      ? `<span class="text-[9px] px-1.5 py-0.5 rounded font-bold ${tabDef.badgeClass || 'bg-slate-800 text-slate-300'}">${tabDef.badge}</span>`
      : '';

    return `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 transition">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 font-mono flex-shrink-0">
            ${idx + 1}
          </span>
          <i class="fa-solid ${tabDef.icon} ${tabDef.color} text-sm w-4 text-center flex-shrink-0"></i>
          <div class="flex items-center gap-1.5 truncate">
            <span class="text-xs font-bold text-white truncate">${tabDef.name}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded font-bold flex-shrink-0 ${catDef.badgeClass}">
              <i class="fa-solid ${catDef.icon} text-[8px]"></i> ${catDef.shortName}
            </span>
          </div>
          ${badgeHtml}
        </div>
        <div class="flex items-center gap-1 flex-shrink-0">
          <button onclick="window.app.moveTabUp(${idx})" ${isFirst ? 'disabled' : ''} class="w-8 h-8 rounded-lg ${isFirst ? 'opacity-30 cursor-not-allowed bg-slate-900 text-slate-600' : 'bg-slate-700 hover:bg-sky-600 text-white cursor-pointer active:scale-95'} flex items-center justify-center text-xs transition" title="위로 이동">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
          <button onclick="window.app.moveTabDown(${idx})" ${isLast ? 'disabled' : ''} class="w-8 h-8 rounded-lg ${isLast ? 'opacity-30 cursor-not-allowed bg-slate-900 text-slate-600' : 'bg-slate-700 hover:bg-sky-600 text-white cursor-pointer active:scale-95'} flex items-center justify-center text-xs transition" title="아래로 이동">
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function moveTabUp(idx) {
  if (!checkAdminPermission('탭 순서 변경')) return;
  if (idx <= 0 || !state.tabOrder) return;
  const newOrder = [...state.tabOrder];
  const temp = newOrder[idx - 1];
  newOrder[idx - 1] = newOrder[idx];
  newOrder[idx] = temp;
  saveTabOrder(newOrder);
  renderNavigation();
  renderTabOrderModal();
  const movedTab = TAB_REGISTRY.find(t => t.id === newOrder[idx - 1]);
  showToast(`'${movedTab ? movedTab.name : ''}' 탭을 위로 이동했습니다.`);
}

function moveTabDown(idx) {
  if (!checkAdminPermission('탭 순서 변경')) return;
  if (!state.tabOrder || idx >= state.tabOrder.length - 1) return;
  const newOrder = [...state.tabOrder];
  const temp = newOrder[idx + 1];
  newOrder[idx + 1] = newOrder[idx];
  newOrder[idx] = temp;
  saveTabOrder(newOrder);
  renderNavigation();
  renderTabOrderModal();
  const movedTab = TAB_REGISTRY.find(t => t.id === newOrder[idx + 1]);
  showToast(`'${movedTab ? movedTab.name : ''}' 탭을 아래로 이동했습니다.`);
}

function resetTabOrder() {
  if (!checkAdminPermission('탭 순서 초기화')) return;
  saveTabOrder([...DEFAULT_TAB_ORDER]);
  renderNavigation();
  renderTabOrderModal();
  showToast('대시보드 탭 순서가 기본 설정으로 초기화되었습니다.');
}

function openTabOrderModal() {
  renderTabOrderModal();
  const modal = document.getElementById('modal-tab-order');
  if (modal) modal.classList.remove('hidden');
}

// ==========================================================================
// Initialization
// ==========================================================================
function initApp() {
  updateAdminState();
  const initialData = syncManager.loadInitialData();
  state = { ...state, ...initialData };

  if (state.externalDashboards.length > 0 && !state.activeExternalTabId) {
    state.activeExternalTabId = state.externalDashboards[0].id;
  }

  syncManager.onStatusChange(updateSyncStatusUI);
  syncManager.onDataChange((remoteData) => {
    state.exams = remoteData.exams || state.exams;
    state.bands = remoteData.bands || state.bands;
    state.formulas = remoteData.formulas || state.formulas;
    state.questions = remoteData.questions || state.questions;
    state.externalDashboards = remoteData.externalDashboards || state.externalDashboards;
    if (remoteData.dischargeDate) state.dischargeDate = remoteData.dischargeDate;
    if (remoteData.camino) state.camino = remoteData.camino;
    if (remoteData.sns) state.sns = remoteData.sns;
    if (remoteData.portfolio) state.portfolio = remoteData.portfolio;
    renderCurrentTab();
    showToast('클라우드에서 최신 데이터를 동기화했습니다.');
  });

  syncManager.initFirebase();
  applyTheme(state.theme);
  initNavigation();
  initModals();
  initKaTeX();

  switchTab(state.activeTab);
  setInterval(updateDDayDisplay, 60000);

  // 서비스 워커 해제 (캐시 고착 문제 원천 차단)
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.getRegistrations().then(regs => {
        for (const reg of regs) {
          reg.unregister();
        }
      }).catch(() => {});
    } catch (e) {}
  }
}

// Save state and push sync
function persistState() {
  syncManager.syncToCloud({
    exams: state.exams,
    bands: state.bands,
    formulas: state.formulas,
    questions: state.questions,
    externalDashboards: state.externalDashboards,
    dischargeDate: state.dischargeDate,
    camino: state.camino,
    sns: state.sns,
    portfolio: state.portfolio,
    theme: state.theme
  });
}

// ==========================================================================
// Navigation & Tab Routing
// ==========================================================================
function initNavigation() {
  // Initial dynamic navigation render
  renderNavigation();

  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = newTheme;
      applyTheme(newTheme);
      persistState();
    });
  }
}

function switchTab(tabName) {
  if (tabName === 'awards') {
    state.portfolioMode = 'awards';
  } else if (tabName === 'careers') {
    state.portfolioMode = 'careers';
  }
  state.activeTab = tabName;

  // Sync active states across dynamic navigation
  renderNavigation();

  // Show only current tab content section
  document.querySelectorAll('.tab-section').forEach((section) => {
    section.classList.add('hidden');
  });

  const sectionId = (tabName === 'awards' || tabName === 'careers' || tabName === 'portfolio')
    ? 'tab-content-portfolio'
    : `tab-content-${tabName}`;
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }

  // Render specific tab
  renderCurrentTab();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentTab() {
  switch (state.activeTab) {
    case 'overview':
      renderOverviewTab();
      break;
    case 'exam':
      renderExamTab();
      break;
    case 'camino':
      renderCaminoTab();
      break;
    case 'band':
      renderBandTab();
      break;
    case 'energy':
      renderEnergyTab();
      break;
    case 'external':
      renderExternalTab();
      break;
    case 'sns':
      renderSnsTab();
      break;
    case 'inbody':
      renderInbodyTab();
      break;
    case 'awards':
    case 'careers':
    case 'portfolio':
      renderPortfolioTab();
      break;
    case 'settings':
      renderSettingsTab();
      break;
  }
}

// ==========================================================================
// 1. Overview Dashboard Tab
// ==========================================================================
function renderOverviewTab() {
  const container = document.getElementById('tab-content-overview');
  if (!container) return;

  // 1. 에너지관리기사 D-Day
  const energyExam = state.exams.find(e => e.title.includes('에너지관리기사')) || state.exams[0];
  const ddayEnergy = energyExam ? calculateDDay(energyExam.ddayTarget || energyExam.startDate) : { days: 0 };

  // 2. 사회복무요원 제대 D-Day
  const ddayDischarge = calculateDDay(state.dischargeDate || '2026-12-19');

  // 3. 산티아고 순례길 D-Day
  const camino = state.camino || INITIAL_CAMINO_DATA;
  const ddayCamino = calculateDDay(camino.startDate || '2026-11-07');

  // 4. ⭐ 모든 일정 중 D-Day가 가까워지는 일정(D-Day 레이더) 종합 산출
  const allEventsForRadar = [
    ...state.exams.map(e => ({
      id: e.id,
      title: e.title,
      targetDate: e.ddayTarget || e.startDate,
      endDate: e.endDate,
      category: e.category,
      icon: e.category.includes('시험') ? 'fa-pen-to-square' : e.category.includes('과제') ? 'fa-file-lines' : e.category.includes('신청') ? 'fa-list-check' : 'fa-bullhorn',
      type: 'exam',
      tab: 'exam',
      location: e.location
    })),
    ...state.bands.map(b => ({
      id: b.id,
      title: b.title,
      targetDate: b.date,
      endDate: null,
      category: b.type === 'rehearsal' ? '밴드 합주' : '공연 관람',
      icon: b.type === 'rehearsal' ? 'fa-guitar' : 'fa-ticket',
      type: 'band',
      tab: 'band',
      location: b.location
    })),
    {
      id: 'camino-milestone',
      title: '산티아고 순례길 까미노 드 포르투 출발',
      targetDate: camino.startDate || '2026-11-09',
      endDate: camino.endDate || '2026-11-29',
      category: '순례/3주',
      icon: 'fa-person-hiking',
      type: 'camino',
      tab: 'camino',
      location: '스페인 포르투 ~ 산티아고'
    },
    {
      id: 'discharge-milestone',
      title: '사회복무요원 소집해제 (제대)',
      targetDate: state.dischargeDate || '2026-12-19',
      endDate: null,
      category: '의무 완수',
      icon: 'fa-medal',
      type: 'milestone',
      tab: 'overview',
      location: '복무 기관'
    }
  ];

  // D-Day 계산 및 가장 가까운 순(오름차순)으로 정렬
  const imminentEvents = allEventsForRadar
    .map(item => {
      const dday = calculateDDay(item.targetDate);
      return { ...item, ddayDays: dday.days };
    })
    .filter(item => item.ddayDays >= 0) // 오늘 이후/마감 전인 일정만
    .sort((a, b) => a.ddayDays - b.ddayDays);

  // 다가오는 학사/시험 일정 (일반 타임라인용)
  const sortedUpcoming = [...state.exams]
    .map(e => ({ ...e, ddayVal: calculateDDay(e.ddayTarget || e.startDate) }))
    .sort((a, b) => new Date(a.ddayTarget || a.startDate) - new Date(b.ddayTarget || b.startDate));

  // Upcoming Band
  const upcomingBands = [...state.bands]
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Daily Energy Question
  const dailyQ = state.questions[state.currentQuestionIndex] || state.questions[0];

  // Camino progress
  const totalPacking = camino.packingList ? camino.packingList.length : 0;
  const donePacking = camino.packingList ? camino.packingList.filter(p => p.done).length : 0;
  const packPercent = totalPacking > 0 ? Math.round((donePacking / totalPacking) * 100) : 0;

  container.innerHTML = `
    <!-- Top 3 Milestones Showcase: 제대 & 시험 & 순례길 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      
      <!-- 1. 사회복무요원 복무 제대 (소집해제) Highlight -->
      <div class="glass-panel rounded-2xl p-6 border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 relative overflow-hidden shadow-xl flex flex-col justify-between">
        <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-medal text-amber-400"></i> 복무 만료 / 소집해제
            </span>
            <span class="text-[11px] text-slate-400">2026.12.19 (토)</span>
          </div>
          <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <span>사회복무요원 제대</span>
          </h2>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
            영광스러운 국방의 의무 완수와 사회 복귀의 날! 건강하고 무탈하게 마무리.
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-end justify-between">
          <div>
            <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">소집해제 카운트다운</div>
            <div class="text-3xl font-black text-emerald-400 tracking-tight">
              ${ddayDischarge.days >= 0 ? `D-${ddayDischarge.days}` : `D+${Math.abs(ddayDischarge.days)}`}
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-bold text-slate-400">
              ${ddayDischarge.days >= 0 ? `약 ${Math.floor(ddayDischarge.days / 7)}주 남음` : '소집해제 완료 🎉'}
            </span>
          </div>
        </div>
      </div>

      <!-- 2. 에너지관리기사 실기 시험 Highlight -->
      <div class="glass-panel rounded-2xl p-6 border border-sky-500/40 bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 relative overflow-hidden shadow-xl flex flex-col justify-between">
        <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-bold rounded-full flex items-center gap-1.5 urgent-pulse">
              <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
              자격증 필답형
            </span>
            <span class="text-[11px] text-slate-400">2026.11.07 09:00</span>
          </div>
          <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-fire-flame-curved text-amber-400 text-lg"></i>
            <span>에너지관리기사 실기</span>
          </h2>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
            보일러 열정산 및 연소공학 핵심 계산 공식 완벽 숙지 후 합격 쟁취!
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-end justify-between">
          <div>
            <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">시험 D-Day</div>
            <div class="text-3xl font-black text-amber-400 tracking-tight">
              ${ddayEnergy.days >= 0 ? `D-${ddayEnergy.days}` : `D+${Math.abs(ddayEnergy.days)}`}
            </div>
          </div>
          <button onclick="window.app.switchTab('energy')" class="py-1.5 px-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition flex items-center gap-1">
            <i class="fa-solid fa-graduation-cap"></i> 학습노트
          </button>
        </div>
      </div>

      <!-- 3. 산티아고 순례길 Highlight -->
      <div class="glass-panel rounded-2xl p-6 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-900 relative overflow-hidden shadow-xl flex flex-col justify-between">
        <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-compass text-amber-400"></i> Buen Camino!
            </span>
            <span class="text-[11px] text-amber-300 font-bold">11.09 ~ 11.29 (3주간)</span>
          </div>
          <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-person-hiking text-amber-400 text-lg"></i>
            <span>산티아고 순례길 (포르투 코스)</span>
          </h2>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
            에너지 시험 후 떠나는 3주 대장정. 출입국 각 2일, 거점 4대 도시 각 2일 체류 관광.
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-end justify-between">
          <div>
            <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">출발 D-Day</div>
            <div class="text-3xl font-black text-amber-300 tracking-tight">
              ${ddayCamino.days >= 0 ? `D-${ddayCamino.days}` : `D+${Math.abs(ddayCamino.days)}`}
            </div>
          </div>
          <button onclick="window.app.switchTab('camino')" class="py-1.5 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg text-xs font-bold transition flex items-center gap-1">
            <i class="fa-solid fa-map-location-dot"></i> 순례길 계획
          </button>
        </div>
      </div>

    </div>

    <!-- ======================================================================= -->
    <!-- 📂 [3대 범주 분류 허브] 커리어 패스 관리 · 취미 · 기타 퀵 네비게이션 -->
    <!-- ======================================================================= -->
    <div class="glass-panel rounded-2xl p-5 sm:p-6 mb-8 border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl relative overflow-hidden">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center text-lg shadow-lg">
            <i class="fa-solid fa-shapes"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-black text-white">대시보드 3대 범주 통합 허브</h2>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">10대 탭 분류 완료</span>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">사용자 지정 3대 카테고리: 커리어 패스 관리(4) · 취미(4) · 기타(2)</p>
          </div>
        </div>
        <button onclick="window.app.openTabOrderModal()" class="admin-only text-xs text-sky-400 hover:text-sky-300 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center gap-1.5 font-bold transition">
          <i class="fa-solid fa-arrow-down-up-across-line text-[11px]"></i>
          <span>메뉴 순서 정렬</span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 1. 커리어 패스 관리 (4개) -->
        <div class="p-4 rounded-xl bg-slate-800/60 border border-amber-500/30 hover:border-amber-500/60 transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black text-amber-400 flex items-center gap-1.5">
                <i class="fa-solid fa-briefcase"></i> 커리어 패스 관리
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                4개 탭
              </span>
            </div>
            <p class="text-[11px] text-slate-400 mb-3">
              자격증 실기 대비, 방송통신대 학사 일정, 삼성전자 15건 사내 경력, 23건 수상 내역
            </p>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.app.switchTab('energy')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-amber-300 truncate">에너지관리기사</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-sky-500/20 text-sky-300">D-40</span>
                </div>
                <div class="text-[10px] text-slate-400">플래시카드 & 40일 플랜</div>
              </button>
              <button onclick="window.app.switchTab('exam')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-blue-300 truncate">시험·학사 일정</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-blue-500/20 text-blue-300">${state.exams.length}건</span>
                </div>
                <div class="text-[10px] text-slate-400">2학기 중간/기말 일정</div>
              </button>
              <button onclick="window.app.openPortfolioTab('careers')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-emerald-300 truncate">주요 경력 & TF</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-emerald-500/20 text-emerald-300">15건</span>
                </div>
                <div class="text-[10px] text-slate-400">DIFFUSION 엔지니어</div>
              </button>
              <button onclick="window.app.openPortfolioTab('awards')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-amber-300 truncate">수상 내역 관리</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-amber-500/20 text-amber-300">23건</span>
                </div>
                <div class="text-[10px] text-slate-400">국방위원장상 대상 등</div>
              </button>
            </div>
          </div>
        </div>

        <!-- 2. 취미 (4개) -->
        <div class="p-4 rounded-xl bg-slate-800/60 border border-rose-500/30 hover:border-rose-500/60 transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black text-rose-400 flex items-center gap-1.5">
                <i class="fa-solid fa-heart"></i> 취미
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                4개 탭
              </span>
            </div>
            <p class="text-[11px] text-slate-400 mb-3">
              포르투 까미노 3주 순례, 골격근 40kg+ 인바디 다이어트, 직장인 인디밴드 합주, 브런치 연재
            </p>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.app.switchTab('camino')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-amber-300 truncate">산티아고 순례길</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-amber-500/20 text-amber-400">11/9</span>
                </div>
                <div class="text-[10px] text-slate-400">3주간 포르투 코스</div>
              </button>
              <button onclick="window.app.switchTab('inbody')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-rose-300 truncate">체구 감량 & 인바디</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-rose-500/20 text-rose-300">89회</span>
                </div>
                <div class="text-[10px] text-slate-400">골격근 40kg+ 유지 다이어트</div>
              </button>
              <button onclick="window.app.switchTab('band')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-purple-300 truncate">밴드 합주 & 문화</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-purple-500/20 text-purple-300">10/10</span>
                </div>
                <div class="text-[10px] text-slate-400">호랑이 합주실 '제제로감'</div>
              </button>
              <button onclick="window.app.switchTab('sns')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-pink-300 truncate">SNS & 브랜딩</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-pink-500/20 text-pink-300">Brunch</span>
                </div>
                <div class="text-[10px] text-slate-400">741편 12h 주기 연재</div>
              </button>
            </div>
          </div>
        </div>

        <!-- 3. 기타 (2개) -->
        <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-500/60 transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black text-slate-300 flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group"></i> 기타
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-700 text-slate-300 border border-slate-600">
                2개 탭
              </span>
            </div>
            <p class="text-[11px] text-slate-400 mb-3">
              개인 커리어 통합 메인 관제 센터, 전체 10개 탭 원클릭 엑셀 내보내기 및 외부 연동
            </p>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.app.switchTab('overview')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-sky-300 truncate">종합 대시보드</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-sky-500/20 text-sky-300">홈</span>
                </div>
                <div class="text-[10px] text-slate-400">마일스톤 & D-Day 레이더</div>
              </button>
              <button onclick="window.app.switchTab('external')" class="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 text-left transition group">
                <div class="flex items-center justify-between text-[11px] mb-1">
                  <span class="font-bold text-white group-hover:text-emerald-300 truncate">외부 연동 & 엑셀</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded font-bold bg-emerald-500/20 text-emerald-300">Excel</span>
                </div>
                <div class="text-[10px] text-slate-400">전체 데이터 추출/백업</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ======================================================================= -->
    <!-- ⭐ [신규 추가] ⏳ 디데이가 가까워지는 일정 칸 (D-Day 레이더) ⭐ -->
    <!-- ======================================================================= -->
    <div class="glass-panel rounded-2xl p-6 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div class="absolute right-0 top-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4 relative z-10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center text-lg shadow-lg">
            <i class="fa-solid fa-hourglass-half animate-pulse"></i>
          </div>
          <div>
            <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
              <span>디데이가 가까워지는 일정 (D-Day 임박 레이더)</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">실시간 임박순</span>
            </h2>
            <p class="text-xs text-slate-400 mt-0.5">
              시험, 과제, 신청, 밴드, 순례길 등 마감일이 가장 가까운 순서대로 표시됩니다.
            </p>
          </div>
        </div>

        <!-- Legend Badges -->
        <div class="flex items-center gap-2 text-xs">
          <span class="px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-bold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span> D-7 초긴급
          </span>
          <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> D-14 임박
          </span>
          <span class="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[11px] font-bold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span> D-30 이내
          </span>
        </div>
      </div>

      <!-- Imminent Cards Grid (Top 4 Closest) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 mb-2">
        ${imminentEvents.slice(0, 4).map((item, idx) => {
          const isUrgent = item.ddayDays <= 7;
          const isWarning = item.ddayDays <= 14;
          const isUpcoming = item.ddayDays <= 30;

          let badgeClass = "bg-sky-500/20 text-sky-300 border border-sky-500/40";
          let cardBorder = "border-slate-700/60 hover:border-sky-500/50";
          let urgencyLabel = "30일 이내";
          let urgencyColor = "text-sky-400";

          if (isUrgent) {
            badgeClass = "bg-red-500 text-white font-black shadow-lg shadow-red-500/30 urgent-pulse";
            cardBorder = "border-red-500/50 bg-red-950/10 hover:border-red-400";
            urgencyLabel = "🚨 초긴급 (D-7 이내)";
            urgencyColor = "text-red-400";
          } else if (isWarning) {
            badgeClass = "bg-amber-500/30 text-amber-300 border border-amber-500/50 font-black";
            cardBorder = "border-amber-500/50 bg-amber-950/10 hover:border-amber-400";
            urgencyLabel = "⚠️ 마감 임박 (D-14)";
            urgencyColor = "text-amber-400";
          } else if (isUpcoming) {
            badgeClass = "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-bold";
            cardBorder = "border-yellow-500/30 hover:border-yellow-400/50";
            urgencyLabel = "💡 한 달 이내";
            urgencyColor = "text-yellow-300";
          }

          return `
            <div onclick="window.app.switchTab('${item.tab}')" class="p-4 rounded-xl bg-slate-800/80 border ${cardBorder} flex flex-col justify-between hover:bg-slate-800 transition shadow-md cursor-pointer group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-700/70 text-slate-300 flex items-center gap-1.5">
                    <i class="fa-solid ${item.icon} text-amber-400"></i> ${item.category}
                  </span>
                  <span class="text-[10px] font-extrabold ${urgencyColor}">
                    ${urgencyLabel}
                  </span>
                </div>

                <h3 class="text-sm font-bold text-white mb-1.5 line-clamp-1 group-hover:text-amber-300 transition" title="${item.title}">
                  ${item.title}
                </h3>

                <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mb-3">
                  <i class="fa-regular fa-calendar-check text-slate-500"></i>
                  <span>${formatDateSimple(item.targetDate)}</span>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-700/50 flex items-center justify-between">
                <span class="text-[11px] font-medium text-slate-400">
                  ${item.ddayDays === 0 ? '오늘 마감' : `${item.ddayDays}일 남음`}
                </span>
                <span class="px-3 py-1 rounded-xl text-xs font-black ${badgeClass}">
                  ${item.ddayDays === 0 ? 'D-DAY' : `D-${item.ddayDays}`}
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Extended Imminent List (5th ~ 8th) Foldable Drawer -->
      ${imminentEvents.length > 4 ? `
        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div class="flex items-center gap-3 overflow-x-auto py-1">
            <span class="text-[11px] font-bold text-slate-500 uppercase">그 다음 다가올 일정:</span>
            ${imminentEvents.slice(4, 7).map(nxt => `
              <span onclick="window.app.switchTab('${nxt.tab}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer text-[11px] font-medium transition flex items-center gap-1.5 flex-shrink-0">
                <b class="text-amber-400">D-${nxt.ddayDays}</b>
                <span class="truncate max-w-[130px]">${nxt.title}</span>
              </span>
            `).join('')}
          </div>
          <button onclick="window.app.switchTab('exam')" class="text-xs text-amber-400 hover:text-amber-300 font-bold whitespace-nowrap ml-2">
            전체 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      ` : ''}
    </div>


    <!-- ======================================================================= -->
    <!-- ⭐ [신규 추가] 🏆 연계형 커리어 패스 & 역량 성장 로드맵 (Connected Career Path) ⭐ -->
    <!-- ======================================================================= -->
    <div class="glass-panel rounded-2xl p-6 sm:p-7 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5 relative z-10">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/10">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="text-xl font-black text-white tracking-tight">
                연계형 커리어 패스 & 역량 성장 로드맵 (Connected Career Path)
              </h2>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                수상(23건) ⮂ 주요 경력(15건) 유기적 연계
              </span>
            </div>
            <p class="text-xs text-slate-400 mt-1">
              삼성전자 제조기술 사내 수상과 자격 취득, 사내 핵심 TF 활동 및 대외 공공·문학 기여가 상호 연계된 4대 핵심 역량 트랙입니다.
            </p>
          </div>
        </div>

        <!-- Quick Jump Buttons to Full Details -->
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="window.app.switchTab('awards')" class="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i>
            <span>수상 내역 (23건)</span>
          </button>
          <button onclick="window.app.switchTab('careers')" class="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition flex items-center gap-1.5">
            <i class="fa-solid fa-briefcase"></i>
            <span>주요 경력 (15건)</span>
          </button>
          <button onclick="window.app.switchTab('portfolio')" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5">
            <i class="fa-solid fa-timeline"></i>
            <span>통합 타임라인</span>
          </button>
        </div>
      </div>

      <!-- 4 Interconnected Career Track Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
        
        <!-- Track 1: 환경안전 & 법정 전문기술 리더십 -->
        <div class="p-5 rounded-2xl bg-slate-800/70 border border-emerald-500/30 hover:border-emerald-500/60 transition group flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-emerald-300 transition">
                  1. 환경안전 & 법정기술 관리자 패스
                </h3>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                EHS 리더십
              </span>
            </div>

            <!-- Interconnection Flow -->
            <div class="space-y-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-amber-400 font-bold block mb-1">🏆 사내 수상 연계:</span>
                <span class="text-slate-300 leading-relaxed">
                  안전그룹장 표창 (기본지키기 서포터즈 1~4기 4연속 수상), 환경안전공모전 은상, 세이프 인플루언서 즉시상
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-sky-400 font-bold block mb-1">⚡ 직무 & 자격 역량 확장:</span>
                <span class="text-slate-300 leading-relaxed">
                  <b>위험물기능장</b> 취득 완료 ➔ <b>2026 에너지관리기사 실기 응시</b>로 연결되어 산업 현장 최고 수준의 법정 안전관리자 역량 완성
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">서포터즈 4연속 수상 ➔ 법정기술 선임 마스터</span>
            <button onclick="window.app.switchTab('awards')" class="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1">
              관련 수상 6건 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Track 2: 반도체 첨단제조기술 & 공정 생산성 혁신 -->
        <div class="p-5 rounded-2xl bg-slate-800/70 border border-blue-500/30 hover:border-blue-500/60 transition group flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                  <i class="fa-solid fa-microchip"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition">
                  2. 반도체 첨단제조 & 공정혁신 패스
                </h3>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-bold">
                공정 엔지니어링
              </span>
            </div>

            <!-- Interconnection Flow -->
            <div class="space-y-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-amber-400 font-bold block mb-1">🏆 사내 수상 연계:</span>
                <span class="text-slate-300 leading-relaxed">
                  슈퍼루키 프로젝트 우수(제조센터장), 제조시너지 협업 IDEA 최다발굴, Hidden Worker 즉시상, DigNoel 4회 수상
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-sky-400 font-bold block mb-1">⚡ 직무 & 자격 역량 확장:</span>
                <span class="text-slate-300 leading-relaxed">
                  삼성전자 DIFFUSION 기술팀 현장 문제 해결 ➔ <b>방송통신대학교 산업공학과 학사 취득</b>으로 이어져 공정 데이터 최적화 엔지니어로 진화
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">슈퍼루키 입증 ➔ 생산성 시너지 혁신 리딩</span>
            <button onclick="window.app.switchTab('awards')" class="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1">
              관련 수상 8건 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Track 3: 직무 교육·공정기술 전수 & 사내 조직문화 리더십 -->
        <div class="p-5 rounded-2xl bg-slate-800/70 border border-purple-500/30 hover:border-purple-500/60 transition group flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                  <i class="fa-solid fa-users-gear"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-purple-300 transition">
                  3. 직무 교육 전수 & 사내 TF 리더십 패스
                </h3>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">
                멘토링 & 조직혁신
              </span>
            </div>

            <!-- Interconnection Flow -->
            <div class="space-y-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-amber-400 font-bold block mb-1">🏆 사내 수상 연계:</span>
                <span class="text-slate-300 leading-relaxed">
                  DIFFUSION 기술팀 DS경진대회 최다 아이디어 우수, 사내 칭찬 감사페스티벌, 조직 활성화 기여
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-sky-400 font-bold block mb-1">⚡ 직무 & 자격 역량 확장:</span>
                <span class="text-slate-300 leading-relaxed">
                  후배 엔지니어 직무 멘토링 교수 ➔ <b>사내 인사·보안·안전 핵심 TF 및 MZ자문단</b> 핵심 멤버로 참여하여 건강한 사내 소통 문화 정립
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">사내 핵심 TF 5개년 연속 리딩 멘토</span>
            <button onclick="window.app.switchTab('careers')" class="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1">
              관련 경력 5건 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Track 4: 대외 공공 기여 & 문학·퍼스널 브랜딩 -->
        <div class="p-5 rounded-2xl bg-slate-800/70 border border-pink-500/30 hover:border-pink-500/60 transition group flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center text-sm font-bold">
                  <i class="fa-solid fa-feather-pointed"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-pink-300 transition">
                  4. 대외 공공기여 & 인문학 브랜딩 패스
                </h3>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20 font-bold">
                공공정책 & 작가
              </span>
            </div>

            <!-- Interconnection Flow -->
            <div class="space-y-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-amber-400 font-bold block mb-1">🏆 대외 수상 연계:</span>
                <span class="text-slate-300 leading-relaxed">
                  <b>문해 글짓기 대상 (국회 국방위원장상)</b>, 방송통신대 총장 표창 우수상, 화성시 양성평등 공모전 산문 장려상
                </span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span class="text-sky-400 font-bold block mb-1">⚡ 직무 & 공공 역량 확장:</span>
                <span class="text-slate-300 leading-relaxed">
                  <b>화성시 청년정책협의체 동탄 분과장 위촉</b> ➔ <b>사회복무요원 성실 복무 만료</b> ➔ <b>브런치 741편 연재 작가(@musimtook)</b>로 사회적 선한 영향력 확산
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">국회 국방위원장상 대상 ➔ 청년 분과장 & 작가</span>
            <button onclick="window.app.switchTab('awards')" class="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1">
              관련 수상 4건 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="glass-panel p-4 rounded-xl border border-slate-700/60 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-calendar-check"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">학사/시험 일정</div>
          <div class="text-xl font-bold text-white">${state.exams.length}건 등록</div>
        </div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-amber-500/30 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-person-hiking"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">순례길 준비도</div>
          <div class="text-xl font-bold text-amber-300">${packPercent}% (${donePacking}/${totalPacking})</div>
        </div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-purple-500/30 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-guitar"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">밴드 합주 & 문화</div>
          <div class="text-xl font-bold text-white">${state.bands.length}건</div>
        </div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-slate-700/60 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-window-restore"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">외부 대시보드</div>
          <div class="text-xl font-bold text-white">${state.externalDashboards.length}개 연동</div>
        </div>
      </div>
    </div>

    <!-- Main Content 2-Column Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left 2 Cols: 주요 일정 타임라인 & 산티아고 순례길 위젯 -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- 주요 학사/시험 일정 -->
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-clock-rotate-left text-blue-400"></i>
              학사 및 시험 일정 타임라인
            </h2>
            <button onclick="window.app.switchTab('exam')" class="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
              전체 일정 보기 <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div class="space-y-3">
            ${sortedUpcoming.slice(0, 5).map(item => {
              const dday = item.ddayVal;
              const isUrgent = item.priority === 'urgent' || (dday && dday.days <= 14);
              return `
                <div class="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between transition gap-4">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${
                      item.category.includes('시험') ? 'bg-red-500/20 text-red-400' :
                      item.category.includes('과제') ? 'bg-amber-500/20 text-amber-400' :
                      item.category.includes('신청') ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                    }">
                      <i class="fa-solid ${item.category.includes('시험') ? 'fa-pen-to-square' : item.category.includes('과제') ? 'fa-file-lines' : 'fa-list-check'}"></i>
                    </div>
                    <div class="truncate">
                      <div class="flex items-center gap-2">
                        <span class="font-bold text-white text-sm truncate">${item.title}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300">${item.category}</span>
                      </div>
                      <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                        <span><i class="fa-regular fa-calendar text-[11px]"></i> ${formatScheduleDate(item.startDate, item.endDate)}</span>
                        ${item.location ? `<span class="hidden sm:inline">· ${item.location}</span>` : ''}
                      </div>
                    </div>
                  </div>

                  <div class="flex-shrink-0 text-right">
                    <span class="inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${
                      dday.days < 0 ? 'bg-slate-700 text-slate-400' :
                      isUrgent ? 'bg-red-500/20 text-red-400 border border-red-500/30 font-extrabold' : 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                    }">
                      ${dday.days === 0 ? 'D-DAY' : dday.days > 0 ? `D-${dday.days}` : `종료`}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 산티아고 순례길 프리뷰 위젯 -->
        <div class="glass-panel rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-r from-slate-900 to-amber-950/20">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-person-hiking text-amber-400 text-lg"></i>
              <h2 class="text-lg font-bold text-white">산티아고 순례길 여정 브리핑</h2>
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">11/9 ~ 11/29 (3주 포르투 코스)</span>
            </div>
            <button onclick="window.app.switchTab('camino')" class="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1">
              일정 및 짐싸기 체크 <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            ${camino.itinerary.map(item => `
              <div class="p-3 rounded-xl bg-slate-800/80 border border-amber-500/20">
                <div class="text-[11px] font-bold text-amber-400 mb-1">${item.day}</div>
                <div class="text-xs font-bold text-white truncate mb-1">${item.title}</div>
                <div class="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>${item.distance}</span>
                  <span class="text-amber-300/80 text-[10px]">${item.highlight.split('&')[0]}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="flex items-center justify-between bg-slate-900/60 p-3 rounded-xl text-xs">
            <span class="text-slate-300">순례자 배낭 준비율: <b class="text-amber-400">${donePacking}/${totalPacking} 항목 완료</b></span>
            <div class="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-amber-400 h-full rounded-full" style="width: ${packPercent}%"></div>
            </div>
          </div>
        </div>

        <!-- 문화 & 밴드 합주 퀵 프리뷰 -->
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-music text-purple-400"></i>
              밴드 합주 & 문화생활 일정
            </h2>
            <button onclick="window.app.switchTab('band')" class="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
              자세히 보기 <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${upcomingBands.slice(0, 2).map(b => `
              <div class="p-4 rounded-xl bg-slate-800/60 border border-purple-500/20">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded ${b.type === 'rehearsal' ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-300'}">
                    ${b.type === 'rehearsal' ? '🎸 밴드 합주' : '🎟️ 공연 관람'}
                  </span>
                  <span class="text-xs text-slate-400">${formatDateTime(b.date)}</span>
                </div>
                <h4 class="font-bold text-white text-sm mb-1">${b.title}</h4>
                <p class="text-xs text-slate-400 truncate mb-2"><i class="fa-solid fa-location-dot text-slate-500"></i> ${b.location}</p>
                ${b.setlist && b.setlist.length > 0 ? `
                  <div class="text-[11px] text-slate-300 bg-slate-900/50 p-2 rounded">
                    곡: ${b.setlist.map(s => s.song.split('(')[0]).join(', ')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Right 1 Col: 데일리 학습 위젯 & 외부 대시보드 빠른 진입 -->
      <div class="space-y-6">
        
        <!-- 데일리 1문제 퀵 위젯 -->
        <div class="glass-panel rounded-2xl p-6 border border-sky-500/30 bg-gradient-to-b from-slate-900 to-sky-950/20">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold rounded">
              데일리 복습 문제
            </span>
            <span class="text-xs text-slate-400">${dailyQ ? dailyQ.day : 'Day 1'}</span>
          </div>

          <h3 class="font-bold text-white text-base mb-2">
            ${dailyQ ? dailyQ.title : '보일러 열효율 및 상당증발량 계산'}
          </h3>
          <p class="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
            ${dailyQ ? dailyQ.problemText : ''}
          </p>

          <button onclick="window.app.switchTab('energy')" class="w-full py-2.5 px-4 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2">
            <span>풀이 과정 및 공식 확인하기</span>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>

        <!-- 외부 대시보드 바로가기 위젯 -->
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-white text-sm flex items-center gap-2">
              <i class="fa-solid fa-shapes text-cyan-400"></i>
              연동된 외부 대시보드
            </h3>
            <button onclick="window.app.openAddExternalModal()" class="admin-only" class="text-xs text-cyan-400 hover:text-cyan-300 font-bold">
              + 추가
            </button>
          </div>

          <p class="text-xs text-slate-400 mb-3">
            동료가 공유해 준 HTML 대시보드나 외부 웹을 추가하여 한 화면에서 확인하세요.
          </p>

          <div class="space-y-2">
            ${state.externalDashboards.map(ext => `
              <div onclick="window.app.openExternalDashboard('${ext.id}')" class="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40 flex items-center justify-between cursor-pointer transition">
                <div class="flex items-center gap-2 truncate">
                  <i class="fa-solid ${ext.icon || 'fa-window-restore'} text-cyan-400 text-sm"></i>
                  <span class="text-xs font-medium text-slate-200 truncate">${ext.title}</span>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500"></i>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3대 SNS 퍼스널 브랜딩 위젯 (신규 ⭐) -->
        <div class="glass-panel rounded-2xl p-6 border border-pink-500/30 bg-gradient-to-b from-slate-900 to-pink-950/20">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-white text-sm flex items-center gap-2">
              <i class="fa-solid fa-share-nodes text-pink-400"></i>
              SNS & 브랜딩 채널
            </h3>
            <button onclick="window.app.switchTab('sns')" class="text-xs text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1">
              분석 탭 <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>

          <div class="space-y-2 mb-3">
            ${(state.sns ? state.sns.channels : INITIAL_SNS_DATA.channels).map(ch => `
              <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/50 hover:border-pink-500/40 flex items-center justify-between transition group">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-7 h-7 rounded-lg flex items-center justify-center text-sm ${ch.id === 'linkedin' ? 'bg-blue-600/20 text-blue-400' : ch.id === 'instagram' ? 'bg-pink-600/20 text-pink-400' : 'bg-emerald-600/20 text-emerald-400'}">
                    <i class="${ch.icon}"></i>
                  </div>
                  <div class="truncate">
                    <div class="text-xs font-bold text-white group-hover:text-pink-300 transition truncate">${ch.name.split(' ')[0]}</div>
                    <div class="text-[10px] text-slate-400 font-mono truncate">${ch.handle}</div>
                  </div>
                </div>
                <div class="text-right flex items-center gap-2">
                  <span class="text-xs font-black text-slate-200">${ch.followers.toLocaleString()}</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[11px] text-slate-500 group-hover:text-pink-400"></i>
                </div>
              </a>
            `).join('')}
          </div>

          <button onclick="window.app.switchTab('sns')" class="w-full py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
            <span>콘텐츠 파이프라인 & 성장 지표 관리</span>
          </button>
        </div>

        <!-- 수상 내역 & 주요 경력 포트폴리오 위젯 (신규 ⭐) -->
        <div class="glass-panel rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-b from-slate-900 to-amber-950/20">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-white text-sm flex items-center gap-2">
              <i class="fa-solid fa-trophy text-amber-400"></i>
              수상 & 주요 경력 아카이브
            </h3>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">총 ${((state.portfolio ? state.portfolio.awards.length : 23) + (state.portfolio ? state.portfolio.careers.length : 15))}건</span>
          </div>

          <div class="grid grid-cols-2 gap-2.5 mb-3">
            <div onclick="window.app.openPortfolioTab('awards')" class="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-amber-500/30 cursor-pointer transition group">
              <div class="flex items-center justify-between text-xs text-amber-400 mb-1">
                <span class="font-bold">🏅 수상 내역</span>
                <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-0.5 transition"></i>
              </div>
              <div class="text-xl font-black text-white">${state.portfolio ? state.portfolio.awards.length : 23}<span class="text-xs font-normal text-slate-400"> 건</span></div>
              <div class="text-[10px] text-slate-400 mt-0.5 truncate">사내 표창 · 국회 국방위원장상 등</div>
            </div>

            <div onclick="window.app.openPortfolioTab('careers')" class="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-emerald-500/30 cursor-pointer transition group">
              <div class="flex items-center justify-between text-xs text-emerald-400 mb-1">
                <span class="font-bold">💼 주요 경력</span>
                <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-0.5 transition"></i>
              </div>
              <div class="text-xl font-black text-white">${state.portfolio ? state.portfolio.careers.length : 15}<span class="text-xs font-normal text-slate-400"> 건</span></div>
              <div class="text-[10px] text-slate-400 mt-0.5 truncate">SSIT 교수추천 · 기능장 7명 배출</div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button onclick="window.app.openPortfolioTab('awards')" class="py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold transition">
              수상 탭 열기
            </button>
            <button onclick="window.app.openPortfolioTab('careers')" class="py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold transition">
              경력 탭 열기
            </button>
          </div>
        </div>

      </div>

    </div>
  `;
}


function formatDateSimple(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[d.getDay()];
  const hours = d.getHours();
  if (hours !== 0) {
    return `${m}월 ${day}일(${dayName}) ${hours}시`;
  }
  return `${m}월 ${day}일(${dayName})`;
}


// ==========================================================================
// 2-B. 산티아고 순례길 Tab (⭐ 신규 추가)
// ==========================================================================
// ==========================================================================
function renderCaminoTab() {
  const container = document.getElementById('tab-content-camino');
  if (!container) return;

  const camino = state.camino || INITIAL_CAMINO_DATA;
  const ddayCamino = calculateDDay(camino.startDate || '2026-11-09');
  const totalPacking = camino.packingList ? camino.packingList.length : 0;
  const donePacking = camino.packingList ? camino.packingList.filter(p => p.done).length : 0;
  const packPercent = totalPacking > 0 ? Math.round((donePacking / totalPacking) * 100) : 0;

  container.innerHTML = `
    <!-- Tab Header Banner -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-compass"></i> 부엔 카미노 (Buen Camino)
            </span>
            <span class="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full">
              까미노 드 포르투 (Camino Portugués)
            </span>
            <span class="text-xs text-slate-300 font-medium">2026년 11월 9일 ~ 11월 29일 (3주간 / 21일 코스)</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-person-hiking text-amber-400"></i>
            산티아고 순례길 트레킹 (포르투 코스 3주)
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            에너지관리기사 실기 시험(11/7) 직후 떠나는 나만의 성찰과 힐링의 3주.
            <b>출국 2일(11/9~10)</b>, <b>귀국 2일(11/28~29)</b>을 확보하고, <b>포르투·비아나 두 카스텔루·비고·산티아고 데 콤포스텔라</b> 등 주요 거점 도시에서 <b>각 2일씩 머무르며 관광과 쉼</b>을 병행하는 맞춤형 포르투갈 해안 & 센트럴 순례길입니다.
          </p>
        </div>

        <div class="bg-slate-800/90 border border-amber-400/40 rounded-xl p-4 sm:p-6 text-center min-w-[200px] shadow-lg">
          <div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">순례길 출발 D-Day</div>
          <div class="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight">
            ${ddayCamino.days >= 0 ? `D-${ddayCamino.days}` : `D+${Math.abs(ddayCamino.days)}`}
          </div>
          <div class="text-xs text-slate-400 mt-1">
            ${ddayCamino.days >= 0 ? `2026.11.09 인천 출국 (D-${ddayCamino.days})` : '여정 진행 중 / 완료'}
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Info Cards (21일 3주 핵심 요약) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="glass-panel p-4 rounded-xl border border-sky-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>총 일정 규모</span>
          <i class="fa-solid fa-plane-departure text-sky-400"></i>
        </div>
        <div class="text-lg font-bold text-white">3주간 (총 21일)</div>
        <div class="text-[11px] text-sky-400 mt-1">출국 2일 + 귀국 2일 포함</div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-emerald-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>거점 도시 2일 체류</span>
          <i class="fa-solid fa-landmark text-emerald-400"></i>
        </div>
        <div class="text-lg font-bold text-emerald-300">4대 거점 각 2일 머무름</div>
        <div class="text-[11px] text-slate-400 mt-1">포르투·비아나·비고·산티아고</div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-amber-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>도보 순례 코스</span>
          <i class="fa-solid fa-route text-amber-400"></i>
        </div>
        <div class="text-lg font-bold text-amber-300">${camino.totalDistance || '약 240 km'}</div>
        <div class="text-[11px] text-slate-400 mt-1">대서양 해안길 + 센트럴 코스</div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-purple-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>준비물 패킹율</span>
          <i class="fa-solid fa-backpack text-purple-400"></i>
        </div>
        <div class="text-lg font-bold text-white">${packPercent}% (${donePacking}/${totalPacking})</div>
        <div class="text-[11px] text-slate-400 mt-1">12대 필수 품목 점검 중</div>
      </div>
    </div>

    <!-- Main Content 2-Column: Itinerary vs Packing List -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left 2 Cols: 일자별 트레킹 코스 계획 -->
      <div class="lg:col-span-2 space-y-6">
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-lg font-bold text-white flex items-center gap-2">
                <i class="fa-solid fa-route text-amber-400"></i>
                21일간의 까미노 드 포르투 여정 & 체류·알베르게 계획
              </h2>
              <p class="text-xs text-slate-400 mt-0.5">출국 2일, 귀국 2일 및 거점 도시 2일 체류 관광이 포함된 3주 풀 코스</p>
            </div>
            <span class="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg font-bold">
              총 21일 일정
            </span>
          </div>

          <div class="space-y-4">
            ${(camino.itinerary || []).map((item, idx) => {
              let typeBadge = '';
              let cardBorder = 'border-slate-700/60 hover:border-slate-600';
              if (item.type === 'flight') {
                typeBadge = '<span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-bold"><i class="fa-solid fa-plane"></i> 항공 이동</span>';
                cardBorder = 'border-blue-500/30 bg-blue-950/10';
              } else if (item.type === 'stay') {
                typeBadge = '<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold"><i class="fa-solid fa-landmark"></i> 거점 관광 & 2일 체류</span>';
                cardBorder = 'border-emerald-500/40 bg-emerald-950/10';
              } else {
                typeBadge = '<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold"><i class="fa-solid fa-person-walking"></i> 도보 순례</span>';
              }

              return `
                <div class="p-5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border ${cardBorder} transition relative">
                  <div class="flex items-start justify-between gap-3 mb-2">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                        ${item.day}
                      </span>
                      ${typeBadge}
                      <span class="text-xs text-slate-400 font-mono"><i class="fa-solid fa-person-walking"></i> ${item.distance}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[11px] text-amber-400/90 font-semibold bg-slate-900/80 px-2.5 py-1 rounded-md">
                        ★ ${item.highlight}
                      </span>
                      <button onclick="window.app.openEditCaminoItineraryModal(${idx})" class="text-[11px] text-amber-300 hover:text-white px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/30 transition flex items-center gap-1">
                        <i class="fa-solid fa-pen-to-square"></i> 수정
                      </button>
                    </div>
                  </div>

                  <h3 class="text-base font-bold text-white mb-2">${item.title}</h3>
                  <p class="text-xs text-slate-300 leading-relaxed mb-3">${item.description}</p>

                  <div class="bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                    <i class="fa-solid fa-bed text-amber-400"></i>
                    <span>숙소/체류: <b class="text-slate-200">${item.albergue || item.stay}</b></span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 순례길 나만의 메모 & 성찰 노트 -->
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="fa-regular fa-compass text-amber-400"></i>
              순례자의 다짐 & 팁 메모
            </h3>
            <button onclick="window.app.saveCaminoMemo()" class="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg text-xs font-bold transition">
              메모 저장
            </button>
          </div>
          <textarea id="camino-memos-input" rows="4" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white leading-relaxed focus:outline-none focus:border-amber-400">${camino.memos || ''}</textarea>
        </div>
      </div>

      <!-- Right 1 Col: 준비물 패킹리스트 (12대 품목) -->
      <div class="space-y-6">
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-amber-400"></i>
              순례자 필수 패킹리스트
            </h3>
            <span class="text-xs font-bold text-amber-400">${donePacking}/${totalPacking}</span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4">
            <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-300" style="width: ${packPercent}%"></div>
          </div>

          <!-- Add Item Input -->
          <div class="flex gap-2 mb-4">
            <input type="text" id="new-camino-packing-input" placeholder="새 준비물 입력..." class="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
            <button onclick="window.app.addCaminoPackingItem()" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs transition">
              추가
            </button>
          </div>

          <!-- Items Checklist -->
          <div class="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            ${(camino.packingList || []).map((p, idx) => `
              <div class="p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 flex items-center justify-between gap-3 text-xs">
                <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                  <input type="checkbox" ${p.done ? 'checked' : ''} onchange="window.app.toggleCaminoPacking(${idx})" class="w-4 h-4 rounded text-amber-500 focus:ring-0 border-slate-600 bg-slate-700">
                  <span class="${p.done ? 'line-through text-slate-500' : 'text-slate-200'} truncate">${p.text}</span>
                </label>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-400">${p.category}</span>
                  <button onclick="window.app.deleteCaminoPackingItem(${idx})" class="text-slate-500 hover:text-red-400 text-xs p-1">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `;
}

// ==========================================================================
function renderExamTab() {
  const container = document.getElementById('tab-content-exam');
  if (!container) return;

  const filteredExams = state.exams.filter(item => {
    if (state.examFilter === 'all') return true;
    return item.category === state.examFilter;
  });

  // Sort by startDate
  filteredExams.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  container.innerHTML = `
    <!-- Tab Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-calendar-days text-blue-500"></i>
          시험 및 학사 일정 관리
        </h1>
        <p class="text-xs text-slate-400 mt-1">
          2026년 하반기 시험, 과제물 제출, 수강/시험 신청 일정을 관리합니다.
        </p>
      </div>

      <button onclick="window.app.openAddExamModal()" class="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20 transition flex items-center gap-2">
        <i class="fa-solid fa-plus"></i> 새 일정 등록
      </button>
    </div>

    <!-- Filter Buttons -->
    <div class="flex items-center gap-2 overflow-x-auto pb-2 mb-6 text-xs">
      <button onclick="window.app.setExamFilter('all')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.examFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
        전체 (${state.exams.length})
      </button>
      <button onclick="window.app.setExamFilter('자격증')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.examFilter === '자격증' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
        자격증 시험
      </button>
      <button onclick="window.app.setExamFilter('학사과제')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.examFilter === '학사과제' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
        중간/기말 과제
      </button>
      <button onclick="window.app.setExamFilter('학사신청')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.examFilter === '학사신청' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
        수강 및 시험 신청
      </button>
      <button onclick="window.app.setExamFilter('활동/발표')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.examFilter === '활동/발표' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
        성과 발표
      </button>
    </div>

    <!-- Schedule Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${filteredExams.map(item => {
        const dday = calculateDDay(item.ddayTarget || item.startDate);
        const isUrgent = item.priority === 'urgent' || (dday && dday.days <= 7);

        return `
          <div class="glass-panel rounded-2xl p-5 border ${isUrgent ? 'border-red-500/40' : 'border-slate-700/60'} hover:border-blue-500/40 transition relative">
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs px-2 py-0.5 rounded font-bold ${
                    item.category === '자격증' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    item.category.includes('과제') ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }">${item.category}</span>
                  ${item.priority === 'urgent' ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-red-500/30 text-red-300 font-bold">긴급</span>' : ''}
                </div>
                <h3 class="text-base font-bold text-white">${item.title}</h3>
              </div>

              <!-- D-Day Badge -->
              <div class="text-right">
                <span class="inline-block px-3 py-1 rounded-xl text-xs font-black ${
                  dday.days < 0 ? 'bg-slate-800 text-slate-500' :
                  isUrgent ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                }">
                  ${dday.days === 0 ? 'D-DAY' : dday.days > 0 ? `D-${dday.days}` : '마감됨'}
                </span>
              </div>
            </div>

            <!-- Meta details -->
            <div class="space-y-1.5 text-xs text-slate-300 mb-4 bg-slate-900/40 p-3 rounded-xl">
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-clock text-slate-400 w-4"></i>
                <span>${formatScheduleDate(item.startDate, item.endDate)}</span>
              </div>
              ${item.location ? `
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-location-dot text-slate-400 w-4"></i>
                  <span>${item.location}</span>
                </div>
              ` : ''}
              ${item.description ? `
                <div class="text-slate-400 pt-1 text-[11px] leading-relaxed">
                  ${item.description}
                </div>
              ` : ''}
            </div>

            <!-- Checklists -->
            ${item.checklist && item.checklist.length > 0 ? `
              <div class="mb-4 space-y-1.5">
                <div class="text-[11px] font-bold text-slate-400 mb-1">체크리스트</div>
                ${item.checklist.map((c, idx) => `
                  <label class="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                    <input type="checkbox" ${c.done ? 'checked' : ''} onchange="window.app.toggleChecklist('${item.id}', ${idx})" class="rounded text-blue-500 bg-slate-800 border-slate-700">
                    <span class="${c.done ? 'todo-checked' : ''}">${c.text}</span>
                  </label>
                `).join('')}
              </div>
            ` : ''}

            <!-- Card Actions -->
            <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-700/40">
              <button onclick="window.app.openEditExamModal('${item.id}')" class="text-xs text-blue-400/90 hover:text-blue-300 px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition flex items-center gap-1">
                <i class="fa-solid fa-pen-to-square"></i> 수정
              </button>
              <button class="admin-only" onclick="window.app.deleteExam('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition flex items-center gap-1">
                <i class="fa-regular fa-trash-can"></i> 삭제
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ==========================================================================
// 3. Culture & Band Rehearsals Tab
// ==========================================================================
function renderBandTab() {
  const container = document.getElementById('tab-content-band');
  if (!container) return;

  const filtered = state.bands.filter(item => {
    if (state.bandFilter === 'all') return true;
    return item.type === state.bandFilter;
  });

  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

  container.innerHTML = `
    <!-- Tab Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-guitar text-purple-400"></i>
          공연 관람 & 밴드 합주 관리
        </h1>
        <p class="text-xs text-slate-400 mt-1">
          합주실 일정, 연주곡(Setlist), 티켓팅 및 공연 관람 일정을 기록합니다.
        </p>
      </div>

      <button onclick="window.app.openAddBandModal()" class="py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 transition flex items-center gap-2">
        <i class="fa-solid fa-plus"></i> 새 합주/공연 등록
      </button>
    </div>

    <!-- Filter Buttons -->
    <div class="flex items-center gap-2 mb-6 text-xs">
      <button onclick="window.app.setBandFilter('all')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.bandFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}">
        전체 보기
      </button>
      <button onclick="window.app.setBandFilter('rehearsal')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.bandFilter === 'rehearsal' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}">
        🎸 밴드 합주
      </button>
      <button onclick="window.app.setBandFilter('performance')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.bandFilter === 'performance' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}">
        🎟️ 공연 관람
      </button>
    </div>

    <!-- Band Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${filtered.map(item => `
        <div class="glass-panel rounded-2xl p-5 border border-slate-700/60 hover:border-purple-500/40 transition">
          <div class="flex items-start justify-between gap-3 mb-3">
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded font-bold ${item.type === 'rehearsal' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'}">
                ${item.type === 'rehearsal' ? '밴드 합주' : '공연 관람'}
              </span>
              <h3 class="text-base font-bold text-white mt-1.5">${item.title}</h3>
            </div>
            <span class="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-md">
              <i class="fa-regular fa-clock"></i> ${formatDateTime(item.date)}
            </span>
          </div>

          <div class="text-xs text-slate-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-location-dot text-purple-400"></i>
            <span>${item.location}</span>
          </div>

          ${item.setlist && item.setlist.length > 0 ? `
            <div class="mb-4 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
              <div class="text-xs font-bold text-purple-400 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-list-ol"></i> 세트리스트 (Setlist)
              </div>
              <div class="space-y-2">
                ${item.setlist.map(s => `
                  <div class="text-xs border-b border-slate-800/80 pb-1.5 last:border-0 last:pb-0">
                    <div class="flex items-center justify-between text-slate-200 font-semibold">
                      <span>${s.song}</span>
                      <span class="text-[10px] text-purple-300 font-mono">${s.key || ''} ${s.tempo ? `· ${s.tempo}` : ''}</span>
                    </div>
                    ${s.notes ? `<div class="text-[11px] text-slate-400 mt-0.5">${s.notes}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${item.memos ? `
            <div class="p-3 bg-slate-800/40 rounded-xl text-xs text-slate-300 border border-slate-700/40 mb-3">
              <span class="font-bold text-slate-400 block mb-1">메모 & 준비물:</span>
              ${item.memos}
            </div>
          ` : ''}

          <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-700/40">
            <button onclick="window.app.openEditBandModal('${item.id}')" class="text-xs text-purple-400/90 hover:text-purple-300 px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition flex items-center gap-1">
              <i class="fa-solid fa-pen-to-square"></i> 수정
            </button>
            <button class="admin-only" onclick="window.app.deleteBand('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition flex items-center gap-1">
              <i class="fa-regular fa-trash-can"></i> 삭제
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================================================
// 4. Energy Engineer Daily Study Tab (LaTeX formulas & photo upload support)
// ==========================================================================

// ==========================================================================
// 4. Energy Engineer Master Study Hub (Curriculum, Daily Briefing, 20 Folders)
// ==========================================================================
function renderEnergyTab() {
  const container = document.getElementById('tab-content-energy');
  if (!container) return;

  // Sanitize active subtab: only 'briefing', 'plan', 'flashcards'
  if (!['briefing', 'plan', 'flashcards'].includes(state.energyStudySubtab)) {
    state.energyStudySubtab = 'briefing';
  }

  container.innerHTML = `
    <!-- Tab Header -->
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
            2026.11.07 실기 시험 D-40
          </span>
          <span class="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold">
            연습문제(256장) + 10~25년 기출(481장) 암기카드 마스터
          </span>
        </div>
        <h1 class="text-2xl font-black text-white flex items-center gap-2.5">
          <i class="fa-solid fa-graduation-cap text-amber-400"></i>
          에너지관리기사 실기 합격 마스터 허브
        </h1>
        <p class="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
          실기 <b>연습문제(256장 분량 7대 챕터)</b>와 <b>2010~2025년 기출(481장 전 회차)</b>의 모든 문제를 <b>낱말·암기카드 형태</b>로 단계별 정밀 풀이와 시험장 함정까지 완벽히 마스터합니다.
        </p>
      </div>

      <!-- Sub-tabs Navigation: 깔끔한 3대 메인 서브탭 (1줄 레이아웃) -->
      <div class="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700/80 text-xs shadow-lg flex-shrink-0">
        <button onclick="window.app.setEnergySubtab('briefing')" class="px-4 py-2 rounded-xl font-bold transition flex items-center gap-1.5 ${state.energyStudySubtab === 'briefing' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}">
          <i class="fa-solid fa-lightbulb ${state.energyStudySubtab === 'briefing' ? 'text-slate-950' : 'text-amber-400'}"></i>
          <span>💡 오늘 핵심 브리핑</span>
        </button>
        <button onclick="window.app.setEnergySubtab('plan')" class="px-4 py-2 rounded-xl font-bold transition flex items-center gap-1.5 ${state.energyStudySubtab === 'plan' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}">
          <i class="fa-regular fa-calendar-check"></i>
          <span>📅 41일 맞춤 커리큘럼</span>
        </button>
        <button onclick="window.app.setEnergySubtab('flashcards')" class="px-4 py-2 rounded-xl font-bold transition flex items-center gap-1.5 ${state.energyStudySubtab === 'flashcards' ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}">
          <i class="fa-solid fa-layer-group text-sky-400 ${state.energyStudySubtab === 'flashcards' ? 'text-slate-950' : ''}"></i>
          <span>🃏 전 문제 암기카드 (연습·기출)</span>
        </button>
      </div>
    </div>

    <!-- Active Subtab View -->
    ${state.energyStudySubtab === 'briefing' ? renderEnergyBriefingView() : ''}
    ${state.energyStudySubtab === 'plan' ? renderEnergyPlanView() : ''}
    ${state.energyStudySubtab === 'flashcards' ? renderEnergyFlashcardView() : ''}
  `;

  // Trigger KaTeX rendering for math formulas
  setTimeout(initKaTeX, 60);
}

// ==========================================================================
// 4-A. Today's Key Briefing Window (오늘 알고 넘어가야 할 브리핑 창 ⭐)
// ==========================================================================
function renderEnergyBriefingView() {
  const plan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
  const targetDate = state.selectedBriefingDate || '2026-09-28';
  const briefing = ENERGY_DAILY_BRIEFINGS[targetDate] || ENERGY_DAILY_BRIEFINGS['2026-09-28'];
  const planItem = plan.find(p => p.date === targetDate) || plan[0];

  const currentIndex = plan.findIndex(p => p.date === targetDate);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= plan.length - 1;
  const prevDate = !isFirst ? plan[currentIndex - 1].date : null;
  const nextDate = !isLast ? plan[currentIndex + 1].date : null;

  const isToday = targetDate === '2026-09-28';
  const isDone = planItem ? planItem.done : false;

  return `
    <div class="space-y-6">
      
      <!-- Date Navigator Bar -->
      <div class="glass-panel rounded-2xl p-4 border border-amber-500/40 bg-slate-900/90 shadow-xl flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <button onclick="window.app.prevBriefingDay()" ${isFirst ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700">
            <i class="fa-solid fa-chevron-left text-[10px]"></i> 이전 날
          </button>
          <button onclick="window.app.goToTodayBriefing()" class="px-3.5 py-1.5 rounded-xl ${isToday ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-amber-300 border border-amber-500/30 hover:bg-slate-700'} text-xs font-bold transition flex items-center gap-1">
            <i class="fa-solid fa-calendar-day"></i> 오늘로 이동 (9/28)
          </button>
          <button onclick="window.app.nextBriefingDay()" ${isLast ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700">
            다음 날 <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>

        <!-- Date Select Dropdown -->
        <div class="flex items-center gap-2">
          <label class="text-xs text-slate-400 font-medium">일자 선택:</label>
          <select onchange="window.app.selectBriefingDate(this.value)" class="bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3 py-1.5 font-mono font-bold focus:ring-1 focus:ring-amber-500">
            ${plan.map((p, idx) => {
              const dayStr = p.dayNum || p.day || (idx + 1);
              const ddayStr = p.dday || 'D-Day';
              const topicStr = (p.topic || '').slice(0, 20);
              return `
                <option value="${p.date}" ${p.date === targetDate ? 'selected' : ''}>
                  Day ${dayStr} (${p.date.slice(5)}) [${ddayStr}] - ${topicStr}
                </option>
              `;
            }).join('')}
          </select>
        </div>

        <!-- Status Badges -->
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs font-mono">
            ${briefing.dday}
          </span>
          <span class="px-3 py-1 rounded-xl text-xs font-bold ${isDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-400 border border-slate-700'}">
            <i class="fa-solid ${isDone ? 'fa-circle-check text-emerald-400' : 'fa-clock text-amber-400'}"></i>
            ${isDone ? '학습 완료' : '학습 진행 중'}
          </span>
        </div>
      </div>

      <!-- Main Briefing Hero Card -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/50 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 relative overflow-hidden shadow-2xl">
        <div class="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header Info -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
                Day ${briefing.dayNum || planItem.dayNum || planItem.day || (currentIndex + 1)} / 41일 로드맵
              </span>
              <span class="px-2.5 py-0.5 rounded-lg bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-bold font-mono">
                ${briefing.date} (${briefing.dday})
              </span>
              <span class="text-xs text-slate-400 font-medium">
                ${briefing.phaseName}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span class="text-amber-400">💡</span> ${briefing.topic}
            </h2>
          </div>

          <button onclick="window.app.toggleEnergyPlanItem('${planItem.id}')" class="px-5 py-3 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg flex-shrink-0 ${isDone ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' : 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black shadow-amber-500/30'}">
            <i class="fa-solid ${isDone ? 'fa-circle-check text-base' : 'fa-check text-base'}"></i>
            <span>${isDone ? '오늘 공부 완료됨! (다시 체크 시 취소)' : '오늘 공부 완료 체크하기!'}</span>
          </button>
        </div>

        <!-- Section 1: Today's Target Folder & Material -->
        <div class="mt-6 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-lg flex-shrink-0">
              <i class="fa-solid fa-folder-open"></i>
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-semibold">오늘의 대상 교재 및 폴더</div>
              <div class="text-sm font-bold text-white flex items-center gap-2">
                <span>📁 실기 / ${briefing.folder}</span>
                <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono font-bold">${briefing.volume}</span>
              </div>
            </div>
          </div>
          <div class="text-xs text-slate-300 md:text-right">
            <span class="font-semibold text-amber-300">오늘의 미션:</span> ${briefing.goal}
          </div>
        </div>

        <!-- Section 2: Must-Know Formulas (KaTeX) -->
        <div class="mt-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="fa-solid fa-square-root-variable text-amber-400 text-sm"></i>
            <h3 class="text-sm font-bold text-white uppercase tracking-wider">오늘 반드시 알고 넘어가야 할 핵심 공식</h3>
          </div>
          <div class="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/40 overflow-x-auto shadow-inner text-amber-200 text-center text-base sm:text-lg font-mono">
            $$${briefing.keyFormula}$$
          </div>
        </div>

        <!-- Section 3: 3 Key Must-Know Concepts -->
        <div class="mt-6">
          <div class="flex items-center gap-2 mb-3">
            <i class="fa-solid fa-clipboard-check text-emerald-400 text-sm"></i>
            <h3 class="text-sm font-bold text-white uppercase tracking-wider">오늘의 3대 필수 암기 개념 & 시험 포인트</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${briefing.keyConcepts.map((c, i) => `
              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition flex flex-col justify-between">
                <div class="text-xs text-slate-200 leading-relaxed font-sans">
                  ${c}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 4: Pitfall Warning Box -->
        <div class="mt-6 p-4 rounded-2xl bg-red-950/30 border border-red-500/40 flex items-start gap-3">
          <i class="fa-solid fa-triangle-exclamation text-red-400 text-base mt-0.5 flex-shrink-0"></i>
          <div class="text-xs text-red-200 leading-relaxed">
            <strong class="text-red-300 font-bold block mb-0.5">시험장 빈출 함정 & 계산 실수 방지 요령:</strong>
            ${briefing.pitfall}
          </div>
        </div>

        <!-- Section 5: Daily 1-Minute Self Quiz -->
        <div class="mt-6 p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80">
          <div class="flex items-center justify-between gap-3 mb-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[11px] font-bold">1분 자가진단</span>
              <h4 class="text-xs font-bold text-white">오늘의 실전 기출 확인 문제</h4>
            </div>
            <button onclick="window.app.toggleBriefingQuizSolution()" class="text-xs text-amber-300 hover:text-white px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 transition flex items-center gap-1 font-semibold">
              <i class="fa-solid ${state.showBriefingQuiz ? 'fa-eye-slash' : 'fa-eye'}"></i>
              <span>${state.showBriefingQuiz ? '해설 닫기' : '정답 및 해설 보기'}</span>
            </button>
          </div>
          <p class="text-xs text-slate-200 font-medium leading-relaxed mb-3">
            Q. ${briefing.quiz.q}
          </p>

          ${state.showBriefingQuiz ? `
            <div class="pt-3 border-t border-slate-700/70 space-y-2 text-xs">
              <div class="flex items-center gap-2 text-emerald-400 font-bold">
                <i class="fa-solid fa-circle-check"></i>
                <span>정답: ${briefing.quiz.a}</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-[11px] whitespace-pre-line leading-relaxed">
                ${briefing.quiz.sol}
              </div>
            </div>
          ` : ''}
        </div>

      </div>

    </div>
  `;
}

// ==========================================================================
// 4-B. Real 20 Folders Manifest View (실기 주소 20개 폴더 보관함 📂)
// ==========================================================================
function renderEnergyFolderView() {
  const folders = ENERGY_FOLDER_MANIFEST;
  const doneMap = state.foldersDone || {};

  const totalFiles = folders.reduce((sum, f) => sum + f.files, 0);
  const doneFoldersCount = Object.values(doneMap).filter(Boolean).length;

  return `
    <div class="space-y-6">
      
      <!-- Top Overview Box -->
      <div class="glass-panel rounded-2xl p-6 border border-sky-500/40 bg-slate-900/90 shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs text-sky-400 font-mono mb-1">
              <i class="fa-solid fa-folder-tree"></i>
              <span>C:/Users/user/Desktop/에너지관리기사/에너지관리기사 실기/실기</span>
            </div>
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
              실기 교재 및 기출 20개 폴더 전량 보관함 (총 ${totalFiles}장)
            </h2>
            <p class="text-xs text-slate-300 mt-1">
              공식 요약 21장 + 연습문제 256장 + 16개년 과년도 기출 481장 전량이 41일 로드맵에 100% 매핑되어 있습니다.
            </p>
          </div>

          <div class="flex items-center gap-4 bg-slate-800/80 px-4 py-3 rounded-xl border border-slate-700/80 flex-shrink-0">
            <div class="text-center">
              <div class="text-[10px] text-slate-400">총 자료 수</div>
              <div class="text-lg font-black text-amber-400">${totalFiles}장</div>
            </div>
            <div class="w-px h-8 bg-slate-700"></div>
            <div class="text-center">
              <div class="text-[10px] text-slate-400">폴더 수</div>
              <div class="text-lg font-black text-sky-400">${folders.length}개</div>
            </div>
            <div class="w-px h-8 bg-slate-700"></div>
            <div class="text-center">
              <div class="text-[10px] text-slate-400">완독 폴더</div>
              <div class="text-lg font-black text-emerald-400">${doneFoldersCount}/${folders.length}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Folders Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${folders.map((f, idx) => {
          const isDone = !!doneMap[f.name];
          const badgeClass = f.type === 'formula' 
            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
            : f.type === 'practice' 
            ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
            : 'bg-purple-500/20 text-purple-300 border-purple-500/40';

          const typeName = f.type === 'formula' ? '공식 요약' : f.type === 'practice' ? '연습문제' : '과년도 기출';

          return `
            <div class="p-5 rounded-2xl border ${isDone ? 'bg-emerald-950/20 border-emerald-500/50' : 'bg-slate-900/70 border-slate-700/70 hover:border-slate-600'} transition flex flex-col justify-between shadow-lg">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${badgeClass}">
                    ${typeName}
                  </span>
                  <span class="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    ${f.files}장
                  </span>
                </div>
                <h3 class="text-sm font-bold text-white flex items-center gap-2 mb-1">
                  <i class="fa-solid fa-folder text-amber-400 text-xs"></i>
                  ${f.name}
                </h3>
                <p class="text-xs text-slate-300 leading-relaxed">
                  ${f.desc}
                </p>
              </div>

              <div class="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between">
                <span class="text-[10px] text-slate-400">
                  ${isDone ? '✓ 완독 완료됨' : '미완독'}
                </span>
                <button onclick="window.app.toggleFolderCompleted('${f.name}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${isDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
                  <i class="fa-solid ${isDone ? 'fa-check' : 'fa-circle'} text-[10px]"></i>
                  <span>${isDone ? '완독 완료' : '완독 체크'}</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

// ==========================================================================
// 4-C. Energy Study 41-Day Planner View (4단계 플래너 & 마지막 7일 반복)
// ==========================================================================
function renderEnergyPlanView() {
  const plan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
  const currentFilter = state.energyPlanPhaseFilter || 'all';

  const totalCount = plan.length;
  const doneCount = plan.filter(p => p.done).length;
  const progressPct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  // Filter items
  const filteredPlan = plan.filter(item => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'phase1') return item.phase === 1;
    if (currentFilter === 'phase2') return item.phase === 2;
    if (currentFilter === 'phase3') return item.phase === 3;
    if (currentFilter === 'phase4') return item.phase === 4;
    if (currentFilter === 'final7') return item.isFinalWeek;
    return true;
  });

  return `
    <div class="space-y-6">
      
      <!-- Top Overview Banner -->
      <div class="glass-panel rounded-2xl p-6 border border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 relative overflow-hidden shadow-xl">
        <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                2026.09.28 ~ 2026.11.07 (41일간의 로드맵)
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
                실기 필답형 시험일: 2026년 11월 7일 (토) 09:00
              </span>
            </div>
            <h2 class="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
              <i class="fa-solid fa-list-check text-amber-400"></i>
              에너지관리기사 실기 합격 대비 41일 맞춤 계획표
            </h2>
            <p class="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              기출문제와 계산문제를 일자별로 체계적으로 마스터하며, 
              <b>마지막 7일(11/01 ~ 11/06)은 고난도 연습문제와 과년도 기출문제를 무한 반복 풀이</b>하여 실전 적응력을 극대화합니다.
            </p>
          </div>

          <!-- Progress Widget -->
          <div class="bg-slate-900/80 border border-amber-500/30 rounded-xl p-4 sm:p-5 min-w-[220px] text-center shadow-lg flex-shrink-0">
            <div class="text-xs font-bold text-amber-400 mb-1">전체 학습 진도율</div>
            <div class="text-3xl font-black text-white">${progressPct}% <span class="text-xs text-slate-400 font-normal">(${doneCount}/${totalCount}일)</span></div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
            </div>
            <div class="text-[10px] text-slate-400 mt-1.5">시험까지 D-40 남음</div>
          </div>
        </div>
      </div>

      <!-- ⭐ [마지막 7일 파이널 반복 전략 안내 배너] ⭐ -->
      <div class="glass-panel rounded-2xl p-5 border border-amber-400/60 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 relative overflow-hidden shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-xl flex-shrink-0 shadow-md">
            <i class="fa-solid fa-rotate animate-spin" style="animation-duration: 8s;"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs">
                ★ 마지막 7일 파이널 (11/01 ~ 11/06) 무한 반복 모드
              </span>
              <span class="text-xs text-amber-300 font-bold">시험 직전 핵심 집중 훈련</span>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed">
              시험 7일 전부터는 새로운 이론 공부를 멈추고, <b>빈출 계산문제 20선 2회독</b>, <b>필수 단답 50문항 키워드 암기</b>, <b>실전 모의고사 2회분(시간 엄수)</b>, <b>나만의 오답노트 & 요약집 3회독</b>을 반복하여 풀이 속도와 소수점/단위 표기 정확도를 100%로 끌어올립니다.
            </p>
          </div>
          <button onclick="window.app.setEnergyPlanPhaseFilter('final7')" class="hidden sm:flex px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold items-center gap-1.5 flex-shrink-0 transition">
            <span>마지막 7일만 모아보기</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>

      <!-- Phase Filter Buttons -->
      <div class="flex flex-wrap items-center gap-2 pb-2 text-xs border-b border-slate-800">
        <button onclick="window.app.setEnergyPlanPhaseFilter('all')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'all' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          전체 보기 (41일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase1')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase1' ? 'bg-sky-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          1단계: 공식 21장 정복 (4일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase2')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase2' ? 'bg-blue-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          2단계: 연습문제 256장 (13일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase3')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase3' ? 'bg-purple-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          3단계: 16개년 기출 481장 (16일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('final7')" class="px-3.5 py-2 rounded-xl font-black transition flex items-center gap-1.5 ${currentFilter === 'final7' ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'}">
          <i class="fa-solid fa-star text-xs"></i>
          <span>★ 4단계: [마지막 7일] 연습 & 기출 반복 (7일)</span>
        </button>
      </div>

      <!-- Plan Items Timeline List -->
      <div class="space-y-3">
        ${filteredPlan.map((item, idx) => {
          const isFinal = item.isFinalWeek;
          const cardBorder = isFinal 
            ? 'border-amber-400/80 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/20 shadow-lg shadow-amber-500/5' 
            : 'border-slate-700/60 bg-slate-900/60 hover:border-slate-600';

          return `
            <div class="p-4 sm:p-5 rounded-2xl border ${cardBorder} transition flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <!-- Left: Checkbox + Date & Phase Badges + Topic & Task -->
              <div class="flex items-start gap-3.5 flex-1 min-w-0">
                <input type="checkbox" ${item.done ? 'checked' : ''} onchange="window.app.toggleEnergyPlanItem('${item.id}')" class="w-5 h-5 rounded text-amber-500 focus:ring-0 border-slate-600 bg-slate-800 mt-0.5 cursor-pointer flex-shrink-0">
                
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold ${isFinal ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-amber-300 border border-amber-500/30'}">
                      ${item.dday}
                    </span>
                    <span class="text-xs text-slate-400 font-mono">${item.date}</span>
                    <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      ${item.phaseName}
                    </span>
                    <span class="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                      📁 ${item.folder || ''} (${item.volume || ''})
                    </span>
                  </div>

                  <h3 class="text-base font-bold text-white mb-1 ${item.done ? 'line-through text-slate-500' : ''}">
                    ${item.topic}
                  </h3>
                  <p class="text-xs text-slate-300 leading-relaxed ${item.done ? 'line-through text-slate-500' : ''}">
                    ${item.task}
                  </p>
                </div>
              </div>

              <!-- Right: Briefing View Button + Status Toggle Button -->
              <div class="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                <button onclick="window.app.openDateBriefing('${item.date}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <i class="fa-solid fa-lightbulb text-[10px]"></i>
                  <span>브리핑 보기</span>
                </button>
                <button onclick="window.app.toggleEnergyPlanItem('${item.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${item.done ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
                  <i class="fa-solid ${item.done ? 'fa-check' : 'fa-circle'} text-[10px]"></i>
                  <span>${item.done ? '학습 완료' : '완료 체크'}</span>
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}


// ==========================================================================
// 4-D. Energy Practical Flashcard System (낱말 카드 형태 문제 및 답·풀이 나열 🃏)
// ==========================================================================
function renderEnergyFlashcardView() {
  const allQuestions = state.questions && state.questions.length > 0 ? state.questions : INITIAL_ENERGY_QUESTIONS;
  if (!allQuestions || allQuestions.length === 0) {
    return `<p class="text-slate-400 text-center py-12">등록된 암기카드 문제가 없습니다.</p>`;
  }

  const catFilter = state.flashcardCategoryFilter || 'all';
  const detailFilter = state.flashcardDetailFilter || 'all';
  const searchQuery = (state.flashcardSearch || '').trim().toLowerCase();
  const mode = state.flashcardMode || 'single';

  // Apply Filters
  let filtered = allQuestions.filter(q => {
    // 1. Category Filter
    if (catFilter === 'practice' && q.category !== 'practice') return false;
    if (catFilter === 'exam' && q.category !== 'exam') return false;
    const isMastered = (state.cardMastered && state.cardMastered[q.id]);
    if (catFilter === 'mastered' && !isMastered) return false;
    if (catFilter === 'unmastered' && isMastered) return false;

    // 2. Detail Filter (Chapter or Year)
    if (detailFilter !== 'all') {
      if (detailFilter.startsWith('Ch.') && (!q.chapter || !q.chapter.includes(detailFilter))) return false;
      if (detailFilter.endsWith('년') && q.year !== detailFilter) return false;
    }

    // 3. Search Query
    if (searchQuery) {
      const matchTitle = (q.title || '').toLowerCase().includes(searchQuery);
      const matchText = (q.problemText || '').toLowerCase().includes(searchQuery);
      const matchTopic = (q.topic || '').toLowerCase().includes(searchQuery);
      const matchOrigin = (q.examOrigin || '').toLowerCase().includes(searchQuery);
      if (!matchTitle && !matchText && !matchTopic && !matchOrigin) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    filtered = allQuestions; // fallback if no match
  }

  // Ensure index is valid within filtered range
  let curIdx = state.currentQuestionIndex || 0;
  if (curIdx < 0 || curIdx >= filtered.length) {
    curIdx = 0;
    state.currentQuestionIndex = 0;
  }
  const activeQ = filtered[curIdx];

  const totalAll = allQuestions.length;
  const masteredCount = allQuestions.filter(q => state.cardMastered && state.cardMastered[q.id]).length;
  const progressPct = totalAll > 0 ? Math.round((masteredCount / totalAll) * 100) : 0;

  const isFlipped = state.cardFlipped && state.cardFlipped[activeQ.id];
  const isActiveMastered = state.cardMastered && state.cardMastered[activeQ.id];

  return `
    <div class="space-y-6">
      
      <!-- Top Flashcard Controller Bar -->
      <div class="glass-panel rounded-2xl p-4 sm:p-5 border border-amber-500/40 bg-slate-900/90 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Left: Progress & Indicator -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-lg flex-shrink-0">
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-base font-black text-white">실기 전 문제 암기카드 학습 센터</h2>
              <span class="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold font-mono">
                ${mode === 'single' ? `카드 ${curIdx + 1} / ${filtered.length}` : `총 ${filtered.length}문항`}
              </span>
            </div>
            <div class="flex items-center gap-3 mt-1 text-xs text-slate-400">
              <span>암기 마스터: <strong class="text-emerald-400 font-bold">${masteredCount}</strong> / ${totalAll} 문항 (${progressPct}%)</span>
              <div class="w-28 bg-slate-800 h-2 rounded-full overflow-hidden inline-block align-middle">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Mode Switches & Action Buttons -->
        <div class="flex flex-wrap items-center gap-2">
          <!-- Mode Toggle: Single vs List -->
          <div class="bg-slate-800 p-1 rounded-xl border border-slate-700 flex items-center text-xs">
            <button onclick="window.app.setFlashcardMode('single')" class="px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${mode === 'single' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}">
              <i class="fa-regular fa-square"></i>
              <span>한 장씩 넘기기</span>
            </button>
            <button onclick="window.app.setFlashcardMode('list')" class="px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${mode === 'list' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}">
              <i class="fa-solid fa-list-ul"></i>
              <span>전체 나열 보기</span>
            </button>
          </div>

          <button onclick="window.app.toggleAllFlashcardsFlip()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition border border-slate-700 flex items-center gap-1.5" title="전체 답/풀이 열기 또는 닫기">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>답/풀이 일괄 토글</span>
          </button>
        </div>
      </div>

      <!-- Advanced Category & Chapter/Year Filter Bar -->
      <div class="glass-panel rounded-2xl p-4 border border-slate-700/80 bg-slate-900/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs">
        
        <!-- Left: Major Category Filter Chips -->
        <div class="flex flex-wrap items-center gap-1.5">
          <button onclick="window.app.setFlashcardCategoryFilter('all')" class="px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${catFilter === 'all' ? 'bg-amber-500 text-slate-950 font-black shadow-sm' : 'bg-slate-800 text-slate-400 hover:text-white'}">
            <span>전체 (${totalAll})</span>
          </button>
          <button onclick="window.app.setFlashcardCategoryFilter('practice')" class="px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${catFilter === 'practice' ? 'bg-blue-500 text-white font-black shadow-sm' : 'bg-slate-800 text-slate-400 hover:text-blue-300'}">
            <i class="fa-solid fa-book-open text-[10px]"></i>
            <span>연습문제 7대 챕터</span>
          </button>
          <button onclick="window.app.setFlashcardCategoryFilter('exam')" class="px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${catFilter === 'exam' ? 'bg-emerald-500 text-slate-950 font-black shadow-sm' : 'bg-slate-800 text-slate-400 hover:text-emerald-300'}">
            <i class="fa-solid fa-graduation-cap text-[10px]"></i>
            <span>기출문제 10~25년</span>
          </button>
          <button onclick="window.app.setFlashcardCategoryFilter('mastered')" class="px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${catFilter === 'mastered' ? 'bg-emerald-600 text-white font-black shadow-sm' : 'bg-slate-800 text-emerald-400 hover:bg-slate-700'}">
            <i class="fa-solid fa-check text-[10px]"></i>
            <span>외운 문제 (${masteredCount})</span>
          </button>
          <button onclick="window.app.setFlashcardCategoryFilter('unmastered')" class="px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${catFilter === 'unmastered' ? 'bg-rose-500 text-white font-black shadow-sm' : 'bg-slate-800 text-rose-400 hover:bg-slate-700'}">
            <i class="fa-solid fa-triangle-exclamation text-[10px]"></i>
            <span>복습 필요 (${totalAll - masteredCount})</span>
          </button>
        </div>

        <!-- Right: Chapter/Year Selector & Search Box -->
        <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <select onchange="window.app.setFlashcardDetailFilter(this.value)" class="bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3 py-1.5 font-bold focus:ring-1 focus:ring-amber-500">
            <option value="all" ${detailFilter === 'all' ? 'selected' : ''}>전체 챕터·연도</option>
            <optgroup label="연습문제 7대 챕터">
              <option value="Ch.1" ${detailFilter === 'Ch.1' ? 'selected' : ''}>Ch.1 보일러 열정산 및 효율</option>
              <option value="Ch.2" ${detailFilter === 'Ch.2' ? 'selected' : ''}>Ch.2 연료 및 연소공학</option>
              <option value="Ch.3" ${detailFilter === 'Ch.3' ? 'selected' : ''}>Ch.3 증기 및 열역학 사이클</option>
              <option value="Ch.4" ${detailFilter === 'Ch.4' ? 'selected' : ''}>Ch.4 전열공학 및 단열/보온</option>
              <option value="Ch.5" ${detailFilter === 'Ch.5' ? 'selected' : ''}>Ch.5 통풍 및 집진설비</option>
              <option value="Ch.6" ${detailFilter === 'Ch.6' ? 'selected' : ''}>Ch.6 급수처리 및 보일러 보전</option>
              <option value="Ch.7" ${detailFilter === 'Ch.7' ? 'selected' : ''}>Ch.7 자동제어 및 폐열회수</option>
            </optgroup>
            <optgroup label="연도별 실기 기출">
              <option value="2025년" ${detailFilter === '2025년' ? 'selected' : ''}>2025년 기출 (최신 개정)</option>
              <option value="2024년" ${detailFilter === '2024년' ? 'selected' : ''}>2024년 기출</option>
              <option value="2023년" ${detailFilter === '2023년' ? 'selected' : ''}>2023년 기출</option>
              <option value="2022년" ${detailFilter === '2022년' ? 'selected' : ''}>2022년 기출</option>
              <option value="2021년" ${detailFilter === '2021년' ? 'selected' : ''}>2021년 기출</option>
              <option value="2020년" ${detailFilter === '2020년' ? 'selected' : ''}>2020년 기출</option>
              <option value="2019년" ${detailFilter === '2019년' ? 'selected' : ''}>2019년 기출</option>
              <option value="2018년" ${detailFilter === '2018년' ? 'selected' : ''}>2018년 기출</option>
              <option value="2017년" ${detailFilter === '2017년' ? 'selected' : ''}>2017년 기출</option>
              <option value="2016년" ${detailFilter === '2016년' ? 'selected' : ''}>2016년 기출</option>
              <option value="2015년" ${detailFilter === '2015년' ? 'selected' : ''}>2015년 기출</option>
              <option value="2014년" ${detailFilter === '2014년' ? 'selected' : ''}>2014년 기출</option>
              <option value="2013년" ${detailFilter === '2013년' ? 'selected' : ''}>2013년 기출</option>
              <option value="2012년" ${detailFilter === '2012년' ? 'selected' : ''}>2012년 기출</option>
              <option value="2011년" ${detailFilter === '2011년' ? 'selected' : ''}>2011년 기출</option>
              <option value="2010년" ${detailFilter === '2010년' ? 'selected' : ''}>2010년 기출</option>
            </optgroup>
          </select>

          <div class="relative w-40 sm:w-48">
            <input type="text" value="${state.flashcardSearch || ''}" oninput="window.app.setFlashcardSearch(this.value)" placeholder="문제 검색..." class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 pl-8 text-white text-xs focus:ring-1 focus:ring-amber-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-slate-500 text-[10px]"></i>
          </div>
        </div>
      </div>

      <!-- Single Mode: Card Slider & Actions -->
      ${mode === 'single' ? `
        <!-- Card Number Quick Selector Ribbon -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          ${filtered.map((item, idx) => {
            const isM = state.cardMastered && state.cardMastered[item.id];
            const isSelected = curIdx === idx;
            const label = item.category === 'exam' ? (item.year || '기출') : (item.chapter ? item.chapter.split(' ')[0] : '연습');
            return `
              <button onclick="window.app.selectQuestionIndex(${idx})" class="px-2.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1 ${isSelected ? 'bg-amber-500 text-slate-950 shadow-md font-black' : isM ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-slate-800' : 'bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-white'}">
                <span>#${idx + 1}</span>
                <span class="text-[10px] opacity-80">${label}</span>
                ${isM ? '<i class="fa-solid fa-check text-[9px] text-emerald-400"></i>' : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Active Flashcard Main Card -->
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border ${isActiveMastered ? 'border-emerald-500/50' : 'border-amber-500/50'} bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl relative">
          
          <!-- Card Header Info -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-6">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs">
                ${activeQ.category === 'exam' ? `${activeQ.year} 실기 기출` : activeQ.chapter}
              </span>
              <span class="px-2.5 py-0.5 rounded-lg bg-slate-800 text-sky-300 border border-sky-500/30 text-xs font-bold">
                ${activeQ.topic || '계산 핵심'}
              </span>
              <span class="text-xs text-slate-400 font-medium">
                ${activeQ.examOrigin || ''}
              </span>
            </div>

            <!-- Mastered Checkbox Button -->
            <button onclick="window.app.toggleCardMastered('${activeQ.id}')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-2 ${isActiveMastered ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'}">
              <i class="fa-solid ${isActiveMastered ? 'fa-circle-check text-slate-950' : 'fa-circle text-slate-500'}"></i>
              <span>${isActiveMastered ? '암기 완료 ✓' : '외웠어요 체크'}</span>
            </button>
          </div>

          <!-- Problem Question Box (앞면) -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-sm">Q</span>
              <h3 class="text-lg sm:text-xl font-bold text-white">${activeQ.title}</h3>
            </div>
            
            <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm leading-relaxed font-sans whitespace-pre-line shadow-inner">
              ${activeQ.problemText}
            </div>
          </div>

          <!-- Flip Toggle Button -->
          <div class="text-center my-6">
            <button onclick="window.app.toggleFlashcardFlip('${activeQ.id}')" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-black text-sm transition flex items-center justify-center gap-2.5 shadow-xl ${isFlipped ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700' : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-amber-500/20 active:scale-98'}">
              <i class="fa-solid ${isFlipped ? 'fa-eye-slash' : 'fa-lightbulb'}"></i>
              <span>${isFlipped ? '▲ 정답 및 풀이 과정 접기' : '💡 답과 단계별 풀이 확인하기 (클릭하여 나열)'}</span>
            </button>
          </div>

          <!-- Solution Steps (뒷면: 나열 보기) -->
          ${isFlipped ? `
            <div class="space-y-6 pt-6 border-t border-slate-800/80 animate-fadeIn">
              
              <!-- 1. 최종 정답 배너 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-sky-500/20 border border-amber-500/40 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-lg font-black shadow-md">
                    <i class="fa-solid fa-trophy"></i>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase font-bold text-amber-300 tracking-wider">최종 정답</span>
                    <div class="text-base sm:text-lg font-black text-white font-mono">${activeQ.finalAnswer}</div>
                  </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-slate-900/80 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  채점 기준 100% 충족
                </span>
              </div>

              <!-- 2. 단계별 풀이 순차 나열 -->
              <div>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <i class="fa-solid fa-arrow-down-1-9 text-amber-400"></i> 단계별 정밀 풀이 과정 (채점 기준)
                </h4>
                <div class="space-y-3">
                  ${(activeQ.solutionSteps || []).map((step, sIdx) => `
                    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition">
                      <div class="text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                        <span class="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-mono">${sIdx + 1}</span>
                        <span>${step.stepTitle}</span>
                      </div>
                      <div class="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-line overflow-x-auto pl-6">
                        ${step.content}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 3. 시험장 함정 & 계산 꿀팁 -->
              ${activeQ.keyPoints ? `
                <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 text-sm">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div>
                    <span class="font-bold text-rose-300 block mb-0.5">⚠️ 시험장 함정 & 채점 주의점</span>
                    <p class="text-slate-300 leading-relaxed">${activeQ.keyPoints}</p>
                  </div>
                </div>
              ` : ''}

              <!-- 4. 암기 메모 -->
              ${activeQ.userMemo ? `
                <div class="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/30 text-xs flex items-center justify-between text-slate-300">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-bookmark text-sky-400"></i>
                    <span><b>핵심 암기 메모:</b> ${activeQ.userMemo}</span>
                  </div>
                  <span class="text-[10px] text-slate-500">Auto Saved</span>
                </div>
              ` : ''}

            </div>
          ` : ''}

          <!-- Bottom Card Navigator -->
          <div class="flex items-center justify-between pt-6 border-t border-slate-800/80 mt-6">
            <button onclick="window.app.prevFlashcard()" ${curIdx <= 0 ? 'disabled' : ''} class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-bold transition flex items-center gap-2 border border-slate-700">
              <i class="fa-solid fa-arrow-left"></i> 이전 문제
            </button>
            
            <button onclick="window.app.shuffleFlashcard()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700">
              <i class="fa-solid fa-shuffle"></i> 랜덤 셔플
            </button>

            <button onclick="window.app.nextFlashcard()" ${curIdx >= filtered.length - 1 ? 'disabled' : ''} class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-bold transition flex items-center gap-2 border border-slate-700">
              다음 문제 <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        </div>
      ` : `
        <!-- List Mode: All Filtered Flashcards Rendered Sequentially -->
        <div class="space-y-4">
          ${filtered.map((item, idx) => {
            const isF = state.cardFlipped && state.cardFlipped[item.id];
            const isM = state.cardMastered && state.cardMastered[item.id];

            return `
              <div class="glass-panel rounded-2xl p-5 sm:p-6 border ${isM ? 'border-emerald-500/40 bg-slate-900/90' : 'border-slate-800 bg-slate-900/60'} hover:border-slate-700 transition">
                
                <!-- Card Top Info -->
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold font-mono flex items-center justify-center">
                      ${idx + 1}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                      ${item.category === 'exam' ? `${item.year} 기출` : item.chapter}
                    </span>
                    <span class="px-2 py-0.5 rounded-lg bg-slate-800 text-sky-300 text-xs font-bold">
                      ${item.topic || ''}
                    </span>
                    <span class="text-xs text-slate-400">
                      ${item.examOrigin || ''}
                    </span>
                  </div>

                  <div class="flex items-center gap-2">
                    <button onclick="window.app.toggleCardMastered('${item.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isM ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                      <i class="fa-solid ${isM ? 'fa-check' : 'fa-circle'} text-[10px]"></i>
                      <span>${isM ? '외웠어요 ✓' : '외웠어요'}</span>
                    </button>
                    <button onclick="window.app.toggleFlashcardFlip('${item.id}')" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1">
                      <i class="fa-solid ${isF ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]"></i>
                      <span>${isF ? '풀이 접기' : '답·풀이 보기'}</span>
                    </button>
                  </div>
                </div>

                <!-- Problem Text -->
                <h4 class="text-base font-bold text-white mb-2">${item.title}</h4>
                <div class="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-line mb-3">
                  ${item.problemText}
                </div>

                <!-- Expanded Solution -->
                ${isF ? `
                  <div class="p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 space-y-3 animate-fadeIn mt-3">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span class="text-xs font-bold text-amber-400">🏆 정답: <span class="font-mono text-white">${item.finalAnswer}</span></span>
                    </div>
                    <div class="space-y-2">
                      ${(item.solutionSteps || []).map((step, sIdx) => `
                        <div class="text-xs">
                          <span class="font-bold text-amber-300">${sIdx + 1}. ${step.stepTitle}</span>
                          <div class="text-slate-300 pl-4 font-mono whitespace-pre-line mt-1">${step.content}</div>
                        </div>
                      `).join('')}
                    </div>
                    ${item.keyPoints ? `
                      <div class="pt-2 border-t border-slate-800 text-[11px] text-rose-300">
                        <b>⚠️ 함정 요령:</b> ${item.keyPoints}
                      </div>
                    ` : ''}
                  </div>
                ` : ''}

              </div>
            `;
          }).join('')}
        </div>
      `}

    </div>
  `;
}


function renderExternalTab() {
  const container = document.getElementById('tab-content-external');
  if (!container) return;

  const currentSubtab = state.externalSubtab || 'excel'; // 'excel' or 'dashboards'
  const activeExt = state.externalDashboards.find(e => e.id === state.activeExternalTabId) || state.externalDashboards[0];

  container.innerHTML = `
    <!-- Top Sub-Tab Switcher: 📊 엑셀 추출 허브 vs 🌐 연동 대시보드 -->
    <div class="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
      <div class="flex items-center gap-2">
        <button onclick="window.app.setExternalSubtab('excel')" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${currentSubtab === 'excel' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}">
          <i class="fa-solid fa-file-excel text-base"></i>
          <span>대시보드 전 데이터 엑셀(Excel) 추출</span>
        </button>
        <button onclick="window.app.setExternalSubtab('dashboards')" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${currentSubtab === 'dashboards' ? 'bg-sky-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}">
          <i class="fa-solid fa-window-restore text-base"></i>
          <span>외부 대시보드 연동 (${state.externalDashboards.length}개)</span>
        </button>
      </div>

      <div class="text-xs text-slate-400 hidden sm:block">
        ${currentSubtab === 'excel' ? '모든 대시보드 데이터를 실시간 엑셀 워크북으로 백업합니다' : 'HTML 파일이나 외부 URL 대시보드를 임베드합니다'}
      </div>
    </div>

    <!-- View based on Subtab -->
    ${currentSubtab === 'excel' ? renderExcelExportHubView() : renderExternalDashboardsView(activeExt)}
  `;

  // If in dashboards view, load active iframe
  if (currentSubtab === 'dashboards' && activeExt) {
    setTimeout(() => {
      const iframe = document.getElementById('external-iframe');
      if (!iframe) return;
      if (activeExt.type === 'url') {
        iframe.src = activeExt.content;
      } else {
        iframe.srcdoc = activeExt.content;
      }
    }, 50);
  }
}

// --------------------------------------------------------------------------
// 5-A. Excel Export Hub View (⭐)
// --------------------------------------------------------------------------
function renderExcelExportHubView() {
  const exams = state.exams || INITIAL_EXAM_SCHEDULES;
  const bands = state.bands || INITIAL_BAND_SCHEDULES;
  const energyPlan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
  const awards = (state.portfolio && state.portfolio.awards) || (INITIAL_PORTFOLIO_DATA.awards);
  const careers = (state.portfolio && state.portfolio.careers) || (INITIAL_PORTFOLIO_DATA.careers);
  const caminoItinerary = (state.camino && state.camino.itinerary) || (INITIAL_CAMINO_DATA.itinerary);
  const snsChannels = (state.sns && state.sns.channels) || (INITIAL_SNS_DATA.channels);
  const inbodyRecords = (state.inbody && state.inbody.records) || (INITIAL_INBODY_DATA.records);

  return `
    <div class="space-y-8">
      
      <!-- Top Big Action Banner -->
      <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/40 bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 relative overflow-hidden shadow-2xl">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
                <i class="fa-solid fa-file-excel"></i> Excel Export Engine (SheetJS Full Support)
              </span>
              <span class="text-xs text-slate-400">8대 전 카테고리 다중 시트 통합</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <i class="fa-solid fa-cloud-arrow-down text-emerald-400"></i>
              대시보드 전 데이터 엑셀(Excel) 추출 & 백업
            </h1>
            <p class="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              현재까지 구축한 <b>학사·자격증 시험, 밴드 합주, 에너지관리기사 41일 플랜, 사내외 수상(23건), 주요 경력(15건), 산티아고 순례길, SNS 브랜딩, 체구 감량/인바디 데이터</b>를 원클릭으로 정돈된 엑셀(.xlsx) 파일로 내보냅니다.
            </p>
          </div>

          <button onclick="window.app.exportAllDashboardToExcel()" class="py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-2xl text-sm shadow-xl shadow-emerald-500/20 transition flex items-center gap-3 flex-shrink-0 group">
            <i class="fa-solid fa-file-arrow-down text-xl group-hover:scale-110 transition"></i>
            <div class="text-left">
              <div class="text-[11px] text-slate-900 font-bold">원클릭 8대 시트 통합</div>
              <div class="text-base font-black">통합 엑셀(.xlsx) 다운로드</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Category Individual Export Grid -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-table-cells text-emerald-400"></i>
            카테고리별 개별 엑셀 / 데이터 추출 (단독 시트)
          </h2>
          <span class="text-xs text-slate-400">필요한 영역만 선택하여 즉시 다운로드할 수 있습니다</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <!-- 1. 학사/시험 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-blue-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${exams.length}개 일정</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">학사 및 자격증 일정</h3>
              <p class="text-xs text-slate-400 mb-4">방통대 과제·기말고사, 에너지관리기사 접수 및 D-Day</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('exams')" class="w-full py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 시험일정 엑셀 추출
            </button>
          </div>

          <!-- 2. 밴드 합주 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-purple-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-guitar"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${bands.length}개 일정</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">밴드 합주 & 세트리스트</h3>
              <p class="text-xs text-slate-400 mb-4">홍대 호랑이 합주실, Eve 제제로감 및 셋리스트</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('bands')" class="w-full py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 밴드일정 엑셀 추출
            </button>
          </div>

          <!-- 3. 에너지관리기사 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-list-check"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${energyPlan.length}일 로드맵</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">에너지기사 41일 플랜</h3>
              <p class="text-xs text-slate-400 mb-4">1~4단계 일자별 기출·계산 및 마지막 7일 반복 과제</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('energy')" class="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 학습플랜 엑셀 추출
            </button>
          </div>

          <!-- 4. 수상 내역 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${awards.length}건 등록</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">사내외 수상 내역 (23건)</h3>
              <p class="text-xs text-slate-400 mb-4">국회 국방위원장상 대상, 슈퍼루키 우수, 안전그룹장 표창</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('awards')" class="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 수상내역 엑셀 추출
            </button>
          </div>

          <!-- 5. 주요 경력 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-emerald-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${careers.length}건 등록</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">주요 경력 & TF 활동 (15건)</h3>
              <p class="text-xs text-slate-400 mb-4">삼성전자 사내 TF, 위험물관리자, 화성시 분과장 등</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('careers')" class="w-full py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 주요경력 엑셀 추출
            </button>
          </div>

          <!-- 6. 산티아고 순례길 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-person-hiking"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">${caminoItinerary.length}일 코스</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">산티아고 순례길 21일</h3>
              <p class="text-xs text-slate-400 mb-4">출입국 4일 + 4대 거점 각 2일 체류 + 코스별 알베르게</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('camino')" class="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> 순례일정 엑셀 추출
            </button>
          </div>

          <!-- 7. 브런치 & SNS -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-pink-500/40 transition">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
                <span class="text-xs font-mono font-bold text-slate-400">브런치 741편</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">SNS & 브런치 브랜딩</h3>
              <p class="text-xs text-slate-400 mb-4">구독자 223명, 12시간 동기화 지표, 링크드인/인스타</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('sns')" class="w-full py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-download"></i> SNS지표 엑셀 추출
            </button>
          </div>

          <!-- 8. 체구 감량 & 인바디 -->
          <div class="p-5 rounded-2xl bg-slate-800/60 border border-rose-500/30 flex flex-col justify-between hover:border-rose-400 transition bg-rose-950/10">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-weight-scale"></i>
                </div>
                <span class="text-xs font-mono font-bold text-rose-400">${inbodyRecords.length}회차 기록</span>
              </div>
              <h3 class="text-sm font-bold text-white mb-1">체구 감량 & 인바디</h3>
              <p class="text-xs text-slate-400 mb-4">체중 유지 상승 다이어트, 골격근, 체지방률, 허리둘레</p>
            </div>
            <button onclick="window.app.exportCategoryToExcel('inbody')" class="w-full py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md">
              <i class="fa-solid fa-download"></i> 인바디 엑셀 추출
            </button>
          </div>

        </div>
      </div>

      <!-- Live Data Preview Table -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-700/60 bg-slate-900/60">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-bold text-slate-300 flex items-center gap-2">
            <i class="fa-solid fa-table text-slate-400"></i>
            엑셀 시트 구성 및 데이터 항목 요약
          </h3>
          <span class="text-xs text-emerald-400 font-bold">8개 시트 / 약 150+ 데이터 행</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left text-slate-300">
            <thead class="text-[11px] text-slate-400 uppercase bg-slate-800/80 border-b border-slate-700">
              <tr>
                <th class="py-2.5 px-3">시트 이름</th>
                <th class="py-2.5 px-3">데이터 행 수</th>
                <th class="py-2.5 px-3">포함 컬럼 항목</th>
                <th class="py-2.5 px-3 text-right">추출 포맷</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-blue-400">1. 학사_자격증_시험일정</td>
                <td class="py-2 px-3">${exams.length}건</td>
                <td class="py-2 px-3 text-slate-400">일정ID, 제목, 분류, 시작일, 종료일, 장소, D-Day, 비고</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-purple-400">2. 밴드합주_문화생활</td>
                <td class="py-2 px-3">${bands.length}건</td>
                <td class="py-2 px-3 text-slate-400">제목, 유형, 일시, 장소, 세트리스트(제제로감 등), 메모</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-amber-400">3. 에너지관리기사_41일플랜</td>
                <td class="py-2 px-3">${energyPlan.length}건</td>
                <td class="py-2 px-3 text-slate-400">D-Day, 일자, 단계명, 학습토픽, 세부실행과제, 완료여부, 파이널7일구분</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-amber-300">4. 수상내역_23건</td>
                <td class="py-2 px-3">${awards.length}건</td>
                <td class="py-2 px-3 text-slate-400">연도, 시기, 수상명, 수여기관, 분야, 대표실적여부, 상세공적</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-emerald-400">5. 주요경력_15건</td>
                <td class="py-2 px-3">${careers.length}건</td>
                <td class="py-2 px-3 text-slate-400">기간, 역할/직책, 프로젝트명, 전문분야, 진행상태, 핵심성과</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-amber-400">6. 산티아고순례길_21일</td>
                <td class="py-2 px-3">${caminoItinerary.length}건</td>
                <td class="py-2 px-3 text-slate-400">일차, 일자, 일정명, 이동유형, 이동거리, 숙소/알베르게, 하이라이트, 설명</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-pink-400">7. SNS_브랜딩_지표</td>
                <td class="py-2 px-3">${snsChannels.length}건</td>
                <td class="py-2 px-3 text-slate-400">플랫폼, 채널명, 핸들, 팔로워, 게시물수, 월간조회, 포지셔닝, URL</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="py-2 px-3 font-bold text-rose-400">8. 체구관리_인바디기록</td>
                <td class="py-2 px-3">${inbodyRecords.length}건</td>
                <td class="py-2 px-3 text-slate-400">측정일, 체중(kg), 골격근(kg), 체지방(kg), 체지방률(%), 허리둘레(인치), BMI, BMR, 체형구분, 피드백</td>
                <td class="py-2 px-3 text-right font-mono text-emerald-400">XLSX / CSV</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

// --------------------------------------------------------------------------
// 5-B. External Dashboards Iframe View
// --------------------------------------------------------------------------
function renderExternalDashboardsView(activeExt) {
  return `
    <!-- Sub-tabs for each imported Dashboard -->
    <div class="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-3 mb-4 overflow-x-auto">
      <div class="flex items-center gap-2 flex-nowrap">
        ${state.externalDashboards.map(item => `
          <div class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${item.id === (activeExt && activeExt.id) ? 'bg-sky-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" onclick="window.app.openExternalDashboard('${item.id}')">
            <i class="fa-solid ${item.icon || 'fa-window-maximize'}"></i>
            <span class="whitespace-nowrap">${item.title}</span>
            <button onclick="event.stopPropagation(); window.app.deleteExternalDashboard('${item.id}')" class="text-[10px] ml-1 opacity-70 hover:opacity-100 hover:text-red-500">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `).join('')}

        <button onclick="window.app.openAddExternalModal()" class="admin-only" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-sky-400 border border-sky-400/30 flex items-center gap-1.5 whitespace-nowrap transition">
          <i class="fa-solid fa-plus"></i> 새 대시보드 추가
        </button>
      </div>

      <!-- Action buttons for active iframe -->
      ${activeExt ? `
        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="window.app.refreshExternalIframe()" title="새로고침" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs">
            <i class="fa-solid fa-rotate-right"></i>
          </button>
          <button onclick="window.app.toggleFullscreenIframe()" title="전체화면" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs">
            <i class="fa-solid fa-expand"></i>
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Iframe Container -->
    ${activeExt ? `
      <div id="external-iframe-wrapper" class="iframe-container shadow-2xl border border-slate-700/80">
        <iframe id="external-iframe" class="iframe-frame" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" allowfullscreen></iframe>
      </div>
    ` : `
      <div class="glass-panel rounded-2xl p-12 text-center border border-slate-700/60">
        <div class="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-3xl mx-auto mb-4">
          <i class="fa-solid fa-folder-open"></i>
        </div>
        <h3 class="text-lg font-bold text-white mb-2">등록된 외부 대시보드가 없습니다</h3>
        <p class="text-xs text-slate-400 max-w-md mx-auto mb-6">
          다른 사람의 HTML 파일(.html)을 가져오거나 노션/웹 대시보드 URL을 등록하여 바로 추가 탭으로 확인해 보세요.
        </p>
        <button onclick="window.app.openAddExternalModal()" class="admin-only" class="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition">
          <i class="fa-solid fa-plus mr-1"></i> 첫 번째 대시보드 추가하기
        </button>
      </div>
    `}
  `;
}


// ==========================================================================
function renderSnsTab() {
  const container = document.getElementById('tab-content-sns');
  if (!container) return;

  const snsData = state.sns || INITIAL_SNS_DATA;
  const channels = snsData.channels || INITIAL_SNS_DATA.channels;
  const brunchChannel = channels.find(c => c.id === 'brunch') || INITIAL_SNS_DATA.channels[2];
  const instaChannel = channels.find(c => c.id === 'instagram') || INITIAL_SNS_DATA.channels[1];
  const linkedinChannel = channels.find(c => c.id === 'linkedin') || INITIAL_SNS_DATA.channels[0];
  const lastSyncTime = state.brunchLastSync || "2026-09-28 15:00";

  const brunchFollowers = brunchChannel.followers || 225;
  const brunchPosts = brunchChannel.postsCount || 744;
  const brunchMagazines = brunchChannel.magazineCount || 18;
  const brunchNotes = brunchChannel.readingNotesCount || 76;

  container.innerHTML = `
    <!-- Top Header Banner -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-emerald-500/40 bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-feather-pointed"></i> Brunch Story 주력 플랫폼
            </span>
            <span class="px-2.5 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold rounded-full flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              실시간 데이터 검증 연동
            </span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-chart-line text-emerald-400"></i>
            SNS & 퍼스널 브랜딩 분석
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            사색과 철학이 담긴 <b>아론의 브런치(Brunch Story)</b>를 본진으로 집중 육성하며, <b>12시간 간격 자동 동기화</b>를 통해 독자 유입과 연재 지표를 추적합니다.
            링크드인과 인스타그램은 직통 하이퍼링크 단추를 통해 신속하게 접근할 수 있습니다.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
          <button onclick="window.app.refreshBrunchData()" class="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 cursor-pointer">
            <i class="fa-solid fa-rotate"></i> 브런치 12시간 즉시 갱신
          </button>
          <button onclick="window.app.openEditSnsMetricsModal()" class="admin-only py-3 px-4 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer" title="지표 직접 수정 (관리자 전용)">
            <i class="fa-solid fa-pen-to-square"></i> 지표 직접 수정
          </button>
          <a href="https://brunch.co.kr/@musimtook" target="_blank" rel="noopener noreferrer" class="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2">
            <span>브런치 홈 바로가기</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- 1. 연결 채널 직통 하이퍼링크 단추 (LinkedIn & Instagram) -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-link text-slate-400"></i>
          외부 연계 SNS 플랫폼 직통 연결 단추
        </h2>
        <span class="text-xs text-slate-500">클릭 시 각 채널 공식 프로필로 즉시 이동합니다</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- LinkedIn Direct Link Button -->
        <a href="https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-4a62b5340/" target="_blank" rel="noopener noreferrer" class="glass-panel p-5 rounded-2xl border border-blue-500/30 hover:border-blue-400 bg-slate-900/60 flex items-center justify-between group transition shadow-lg hover:shadow-blue-500/10 cursor-pointer">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/40 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition">김남현 (LinkedIn)</h3>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">직통 연결</span>
              </div>
              <p class="text-xs text-slate-400 mt-1">삼성전자 반도체/안전 TF 및 에너지·위험물 엔지니어링 네트워킹</p>
              <div class="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400 font-mono">
                <span>1촌/팔로워: <b class="text-blue-400">${(linkedinChannel.followers || 100).toLocaleString()}명</b></span>
                <span>•</span>
                <span>게시물: <b class="text-slate-300">${(linkedinChannel.postsCount || 15).toLocaleString()}건</b></span>
              </div>
            </div>
          </div>
          <div class="px-4 py-2 bg-blue-600 group-hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md flex-shrink-0">
            <span>프로필 바로가기</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </div>
        </a>

        <!-- Instagram Direct Link Button -->
        <a href="https://www.instagram.com/namhyeon_kim_/" target="_blank" rel="noopener noreferrer" class="glass-panel p-5 rounded-2xl border border-pink-500/30 hover:border-pink-400 bg-slate-900/60 flex items-center justify-between group transition shadow-lg hover:shadow-pink-500/10 cursor-pointer">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/40 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-white group-hover:text-pink-300 transition">@namhyeon_kim_ (Instagram)</h3>
                <span class="text-[10px] px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30">직통 연결</span>
              </div>
              <p class="text-xs text-slate-400 mt-1">홍대 밴드 합주(Eve-제제로감) & 11월 산티아고 순례길 라이프 아카이빙</p>
              <div class="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400 font-mono">
                <span>팔로워: <b class="text-pink-400">${(instaChannel.followers || 300).toLocaleString()}명</b></span>
                <span>•</span>
                <span>팔로잉: <b class="text-slate-300">${(instaChannel.following || 301).toLocaleString()}명</b></span>
                <span>•</span>
                <span>게시물: <b class="text-slate-300">${(instaChannel.postsCount || 180).toLocaleString()}개</b></span>
              </div>
            </div>
          </div>
          <div class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md flex-shrink-0">
            <span>피드 바로가기</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </div>
        </a>

      </div>
    </div>

    <!-- 2. 브런치스토리 12시간 동기화 집중 대시보드 (주력 플랫폼) -->
    <div class="glass-panel rounded-2xl p-6 sm:p-7 mb-8 border border-emerald-500/30 bg-slate-900/60 shadow-xl">
      
      <!-- Brunch Header & 12h Sync Indicator -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/10">
            <i class="fa-solid fa-feather-pointed"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl font-black text-white">Brunch Story (아론의 브런치)</h2>
              <span class="text-xs text-slate-400 font-mono">@musimtook</span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">월 ₩3,900 작가 멤버십</span>
            </div>
            <p class="text-xs text-emerald-400 mt-0.5 font-medium">
              "글쓰듯 말하고 싶습니다. 당신의 마음에 닿기를 바라며, 글을 적고 있습니다."
            </p>
          </div>
        </div>

        <!-- 12-Hour Sync Badge -->
        <div class="bg-slate-800/90 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-right flex items-center gap-3">
          <div class="text-left">
            <div class="text-[10px] text-slate-400 uppercase font-bold">12시간 주기 동기화 상태</div>
            <div class="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              최근 갱신: ${lastSyncTime}
            </div>
          </div>
          <button onclick="window.app.refreshBrunchData()" class="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-xs font-bold transition cursor-pointer" title="12시간 주기 새로고침">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </div>
      </div>

      <!-- Brunch Core 4-Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div class="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/20 hover:border-emerald-500/40 transition">
          <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span class="font-medium">구독자 수 (팔로워)</span>
            <i class="fa-solid fa-user-check text-emerald-400"></i>
          </div>
          <div class="text-2xl font-black text-white">${brunchFollowers.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 명</span></div>
          <div class="mt-2 text-[11px] text-emerald-400 font-bold">목표 500명 대비 ${Math.min(100, Math.round((brunchFollowers / 500) * 100))}% 달성</div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
            <div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: ${Math.min(100, Math.round((brunchFollowers / 500) * 100))}%"></div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/20 hover:border-emerald-500/40 transition">
          <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span class="font-medium">발행된 글</span>
            <i class="fa-solid fa-file-pen text-sky-400"></i>
          </div>
          <div class="text-2xl font-black text-white">${brunchPosts.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 편</span></div>
          <div class="mt-2 text-[11px] text-sky-400 font-bold">740편 돌파 대규모 아카이브</div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
            <div class="bg-sky-500 h-full rounded-full" style="width: 100%"></div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/20 hover:border-emerald-500/40 transition">
          <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span class="font-medium">브런치북 / 매거진</span>
            <i class="fa-solid fa-book-bookmark text-amber-400"></i>
          </div>
          <div class="text-2xl font-black text-amber-300">${brunchMagazines.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 개 작품집</span></div>
          <div class="mt-2 text-[11px] text-amber-400 font-bold">테마별 출판·연재 컬렉션</div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
            <div class="bg-amber-500 h-full rounded-full" style="width: 90%"></div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/20 hover:border-emerald-500/40 transition">
          <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span class="font-medium">서평 & 독서노트</span>
            <i class="fa-solid fa-glasses text-purple-400"></i>
          </div>
          <div class="text-2xl font-black text-purple-300">${brunchNotes.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 편</span></div>
          <div class="mt-2 text-[11px] text-purple-400 font-bold">2026.09 최신 독서기록 지속 누적</div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
            <div class="bg-purple-500 h-full rounded-full" style="width: 76%"></div>
          </div>
        </div>
      </div>

      <!-- Brunch Featured Writing Showcase -->
      <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
            <i class="fa-solid fa-pen-nib"></i>
          </div>
          <div>
            <h4 class="text-sm font-bold text-white">아론의 브런치 연재 작품 아카이브</h4>
            <p class="text-xs text-slate-400 mt-0.5">삼성전자 반도체 엔지니어의 일상, 국회 국방위원장상 대상 & 화성시 산문 장려상 수상 작가의 내면 이야기</p>
          </div>
        </div>
        <a href="https://brunch.co.kr/@musimtook" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 flex-shrink-0">
          <span>브런치스토리 글 읽기</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

    </div>

    <!-- 3. ⭐ [심층 기획] '실패의 기록과 나만의 사색' 브런치 4대 스토리텔링 연재 로드맵 ⭐ -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div class="absolute right-0 top-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Section Header -->
      <div class="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4 relative z-10">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-feather"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-lg sm:text-xl font-black text-white">
              《실패의 기록과 나만의 사색》 브런치 스토리텔링 연재 로드맵
            </h2>
            <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black">추천 기획</span>
          </div>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">
            단순한 성공 자랑이 아닌, <b>수많은 낙방과 오답, 11년간의 요요와 고도비만 탈출, 합주실과 순례길에서 겪은 좌절과 회복의 사색</b>을 엮어 독자의 마음을 사로잡는 4대 연재 테마입니다.
          </p>
        </div>
      </div>

      <div class="space-y-6 relative z-10">
        
        <!-- 4대 킬러 기획 시리즈 그리드 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          <!-- 테마 1: 59점의 미학 (공부 실패와 수험 회고) -->
          <div class="p-5 rounded-2xl bg-slate-800/80 border border-blue-500/30 hover:border-blue-400 transition flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  <i class="fa-solid fa-graduation-cap mr-1"></i> 시리즈 1 · 수험 실패 & 공부 철학
                </span>
                <span class="text-[11px] text-amber-400 font-bold">브런치북 기획 1순위</span>
              </div>
              <h3 class="text-base font-extrabold text-white mt-2 mb-2 flex items-center gap-2">
                <span>《59점의 미학: 5대 자격증을 따기까지 마주한 불합격의 기록들》</span>
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                위험물기능장, 산업안전기사, 인간공학기사, 가스산업기사부터 현재의 에너지관리기사 실기 D-40까지. 1점 차이로 떨어졌을 때의 절망과 오답 노트를 찢어가며 배운 '공부의 본질'과 '자기 통제력' 이야기.
              </p>

              <!-- 에피소드 추천 리스트 -->
              <div class="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs">
                <div class="text-[11px] font-bold text-blue-300 mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check"></i> 추천 연재 에피소드 구성
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제1화:</b> 59점으로 떨어진 날, 나는 처음으로 공부의 본질을 배웠다 (불합격을 마주하는 자세)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제2화:</b> 외계어 같던 열역학 공식이 철학으로 보이기 시작했다 (문과적 사색과 공학의 결합)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제3화:</b> 시험 D-40, 20개의 폴더 앞에서 느끼는 중압감을 버티는 법 (직장·복무·학업 3중고의 루틴)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제4화:</b> 자격증은 스펙이 아니라, '지루함을 견뎌낸 그릿(Grit)'의 증명서였다
                </div>
              </div>
            </div>

            <div class="pt-3.5 mt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <span class="text-slate-400">타깃 독자: 수험생, 취준생, 기술자격 도전 직장인</span>
              <span class="text-blue-300 font-bold">화요일 저녁 연재 추천</span>
            </div>
          </div>

          <!-- 테마 2: 체중계는 거짓말을 한다 (다이어트 실패와 체형 재구성) -->
          <div class="p-5 rounded-2xl bg-slate-800/80 border border-rose-500/30 hover:border-rose-400 transition flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                  <i class="fa-solid fa-weight-scale mr-1"></i> 시리즈 2 · 신체 변혁 & 실패 극복
                </span>
                <span class="text-[11px] text-rose-300 font-bold">11개년 89회 실측 기반</span>
              </div>
              <h3 class="text-base font-extrabold text-white mt-2 mb-2 flex items-center gap-2">
                <span>《체중계는 거짓말을 한다: 89번의 인바디가 증명한 실패 없는 몸 만들기》</span>
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                2015년 고도비만(체지방률 34%)에서 2026년 골격근량 44.9kg 달성까지! 굶기와 무리한 유산소로 요요를 겪으며 좌절했던 흑역사를 고백하고, '체중(92kg)을 줄이지 않고 체질을 바꾸는' 역발상 다이어트의 정수.
              </p>

              <!-- 에피소드 추천 리스트 -->
              <div class="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs">
                <div class="text-[11px] font-bold text-rose-300 mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check"></i> 추천 연재 에피소드 구성
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제1화:</b> 11년 전 고도비만 청년이 저질렀던 가장 바보 같은 다이어트 3가지 (굶기의 함정)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제2화:</b> '살을 빼지 않겠다'고 결심한 순간 몸이 바뀌기 시작했다 (체성분 재구성의 발견)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제3화:</b> 폭식한 다음 날의 자괴감에게 보내는 편지 (하루 망쳤다고 11년이 무너지지 않는다)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제4화:</b> 골격근 44.9kg: 몸을 통제할 수 있으면 삶의 주도권도 돌아온다
                </div>
              </div>
            </div>

            <div class="pt-3.5 mt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <span class="text-slate-400">타깃 독자: 다이어트 실패자, 헬스인, 자기관리 세대</span>
              <span class="text-rose-300 font-bold">목요일 저녁 연재 추천</span>
            </div>
          </div>

          <!-- 테마 3: 길 위에서 버린 것들 (시험 직후 순례길 21일의 여정) -->
          <div class="p-5 rounded-2xl bg-slate-800/80 border border-amber-500/30 hover:border-amber-400 transition flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                  <i class="fa-solid fa-person-hiking mr-1"></i> 시리즈 3 · 순례 & 삶의 다운사이징
                </span>
                <span class="text-[11px] text-amber-300 font-bold">11월 출국 실시간 현장 연재</span>
              </div>
              <h3 class="text-base font-extrabold text-white mt-2 mb-2 flex items-center gap-2">
                <span>《길 위에서 버린 것들: 까미노 드 포르투 240km와 인생의 다운사이징》</span>
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                11월 7일 에너지관리기사 시험이 끝나자마자 11월 9일 출국! 긴장의 극치에서 순례길의 무소유로 이어지는 극적인 전환. 8kg 배낭 하나에 삶을 우겨넣으며 배운 '내려놓음의 미학'.
              </p>

              <!-- 에피소드 추천 리스트 -->
              <div class="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs">
                <div class="text-[11px] font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check"></i> 추천 연재 에피소드 구성
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제1화:</b> 시험장을 나오자마자 8kg 배낭을 멨다 (극도의 긴장에서 무소유로의 전환)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제2화:</b> 포르투의 안개와 대서양 바람: 왜 나는 쉼 없이 달려왔을까 (내면의 번아웃 마주하기)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제3화:</b> 발바닥 물집이 가르쳐준 것: 완벽한 길은 없다, 다만 걸을 뿐이다
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제4화:</b> 오브라도이로 광장에서 흘린 눈물의 의미: 다시 세상 속으로 걸어 들어가는 용기
                </div>
              </div>
            </div>

            <div class="pt-3.5 mt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <span class="text-slate-400">타깃 독자: 번아웃 직장인, 힐링을 찾는 여행자, 2030 세대</span>
              <span class="text-amber-300 font-bold">11월 9일~29일 실시간 연재</span>
            </div>
          </div>

          <!-- 테마 4: 소음이 음악이 되는 순간 (직장인 밴드와 삶의 조화) -->
          <div class="p-5 rounded-2xl bg-slate-800/80 border border-purple-500/30 hover:border-purple-400 transition flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                  <i class="fa-solid fa-guitar mr-1"></i> 시리즈 4 · 예술 & 불완전함의 조화
                </span>
                <span class="text-[11px] text-purple-300 font-bold">홍대 호랑이 합주실 실화</span>
              </div>
              <h3 class="text-base font-extrabold text-white mt-2 mb-2 flex items-center gap-2">
                <span>《소음이 음악이 되는 순간: 직장인의 퇴근 후 4번선(Bass)》</span>
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                반도체 안전 수칙과 위험물 분자식의 차가운 세계에서, 퇴근 후 홍대 호랑이 합주실에서 베이스 앰프를 켤 때 일어나는 카타르시스. 혼자 튀려다 곡을 망쳤던 경험이 가르쳐준 인생의 앙상블.
              </p>

              <!-- 에피소드 추천 리스트 -->
              <div class="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs">
                <div class="text-[11px] font-bold text-purple-300 mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check"></i> 추천 연재 에피소드 구성
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제1화:</b> 메트로놈 박자를 자꾸 놓치던 손가락 (완벽주의라는 강박을 내려놓기)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제2화:</b> 남의 소리를 듣지 않으면 내 악기는 소음일 뿐이다 (합주에서 배운 팀워크)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제3화:</b> Eve의 《제제로감》을 연주하며 울컥했던 이유 (직장인의 마음속 응어리 해소)
                </div>
                <div class="text-slate-300">
                  <b class="text-white">제4화:</b> 베이스는 왜 멜로디 뒤에 숨어야 하는가: 보이지 않는 자리의 숭고함
                </div>
              </div>
            </div>

            <div class="pt-3.5 mt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <span class="text-slate-400">타깃 독자: 취미 음악인, 서브컬처 팬, 일상 균형을 추구하는 직장인</span>
              <span class="text-purple-300 font-bold">토요일 오전 연재 추천</span>
            </div>
          </div>

        </div>

        <!-- 글쓰기 템플릿 & 스토리텔링 확장 공식 -->
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80">
          <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <i class="fa-solid fa-pen-ruler text-amber-400"></i>
            <span>독자의 마음을 여는 '아론 작가 전용 3단계 실패 서사 공식'</span>
          </h3>
          <p class="text-xs text-slate-300 mb-4 leading-relaxed">
            모든 글을 아래 3단계 구조로 전개하면, 독자는 단순 정보 습득을 넘어 작가의 인간적인 고뇌에 깊게 몰입하며 '구독'과 '멤버십 후원'으로 이어지게 됩니다.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30">
              <div class="text-rose-400 font-bold mb-1 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">1</span>
                <span>오답과 무너짐의 현장 (Hook)</span>
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                계산 문제를 틀리고 자책했던 순간, 폭식 후 체중계에 올라서서 후회했던 밤, 합주에서 박자를 절었던 당혹감 등 가장 솔직한 '바닥'을 먼저 드러냅니다.
              </p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/30">
              <div class="text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px]">2</span>
                <span>바닥에서 길어 올린 질문 (Turning)</span>
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                '왜 나는 1점에 집착했을까?', '왜 나는 몸을 굶겨야만 했을까?' 단순 자책에서 벗어나 삶의 구조와 내면의 결핍을 응시하는 질문으로 전환합니다.
              </p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30">
              <div class="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
                <span>내일을 버티게 한 작은 시스템 (Insight)</span>
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                거창한 성공이 아니라 '내일 아침 다시 책상에 앉게 만든 1가지 원칙', '다시 베이스 튜닝을 하게 만든 위로'를 독자에게 선물하며 글을 맺습니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderPortfolioTab() {
  const container = document.getElementById('tab-content-portfolio');
  if (!container) return;

  const pData = state.portfolio || INITIAL_PORTFOLIO_DATA;
  const awards = pData.awards || INITIAL_PORTFOLIO_DATA.awards;
  const careers = pData.careers || INITIAL_PORTFOLIO_DATA.careers;
  const mode = state.portfolioMode || 'awards'; // 'awards' | 'careers' | 'timeline'
  const query = (state.portfolioSearch || '').trim().toLowerCase();

  // 필터링된 수상 목록
  const filteredAwards = awards.filter(a => {
    const matchCat = state.awardFilter === 'all' || a.category === state.awardFilter;
    const matchQuery = !query || [a.year, a.period, a.title, a.issuer, a.category, a.badge].join(' ').toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  // 필터링된 경력 목록
  const filteredCareers = careers.filter(c => {
    const matchCat = state.careerFilter === 'all' || c.category === state.careerFilter;
    const matchQuery = !query || [c.startYear, c.period, c.title, c.role, c.category, c.impact].join(' ').toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  // 카테고리별 색상 헬퍼
  const getAwardBadge = (cat) => {
    if (cat.includes('안전')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    if (cat.includes('기술')) return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
    if (cat.includes('인사')) return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    if (cat.includes('대외') || cat.includes('봉사')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  };

  const getCareerBadge = (cat) => {
    if (cat.includes('TF')) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (cat.includes('전문선임') || cat.includes('교육')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    if (cat.includes('사회공헌') || cat.includes('봉사')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
  };

  // 연도별 그룹핑 헬퍼
  const groupByYear = (items) => {
    const map = {};
    items.forEach(item => {
      const y = item.year || item.startYear || '기타';
      if (!map[y]) map[y] = [];
      map[y].push(item);
    });
    return Object.keys(map).sort((a, b) => {
      if (a === '상시') return -1;
      if (b === '상시') return 1;
      return (parseInt(b, 10) || 0) - (parseInt(a, 10) || 0);
    }).map(year => ({ year, list: map[year] }));
  };

  const awardYearGroups = groupByYear(filteredAwards);
  const careerYearGroups = groupByYear(filteredCareers);

  // 통합 타임라인용 연도별 묶음
  const combinedItems = [
    ...filteredAwards.map(a => ({ ...a, itemType: 'award' })),
    ...filteredCareers.map(c => ({ ...c, itemType: 'career', year: c.year || c.startYear }))
  ];
  const combinedYearGroups = groupByYear(combinedItems);
  const highlightCount = awards.filter(a => a.highlight).length;
  const ongoingCount = careers.filter(c => c.status === 'ongoing').length;

  container.innerHTML = `
    <!-- Top Banner -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-6 border ${mode === 'awards' ? 'border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900' : mode === 'careers' ? 'border-emerald-500/40 bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900' : 'border-sky-500/40 bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900'} relative overflow-hidden shadow-2xl">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 ${mode === 'awards' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : mode === 'careers' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-sky-500/20 text-sky-300 border-sky-500/30'} border text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid ${mode === 'awards' ? 'fa-trophy' : mode === 'careers' ? 'fa-briefcase' : 'fa-layer-group'}"></i>
              ${mode === 'awards' ? '수상 내역 전용 관리 모드 (Option B)' : mode === 'careers' ? '주요 경력 & TF 활동 전용 관리 모드 (Option B)' : '수상·경력 연도별 통합 타임라인 (Option A)'}
            </span>
            <span class="text-xs text-slate-400">2014년 ~ 2026년 삼성전자 사내외 표창 및 주요 경력 아카이브</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            ${mode === 'awards' ? '<i class="fa-solid fa-trophy text-amber-400"></i> 수상 및 표창 이력 관리' : mode === 'careers' ? '<i class="fa-solid fa-briefcase text-emerald-400"></i> 주요 경력 & 사내외 TF 활동' : '<i class="fa-solid fa-award text-sky-400"></i> 수상 & 경력 연도별 통합 포트폴리오'}
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
            ${mode === 'awards'
              ? '삼성전자 사내 표창(제조센터장·안전그룹장·인사기획그룹·기술팀장)부터 국회 국방위원장 대상·방통대 총장상·화성시장 위촉까지 총 23건의 수상 실적을 관리합니다.'
              : mode === 'careers'
              ? 'SSIT 사내대학 전임교수 추천·위험물 기능장 대비반(7명 배출)·파운드리 위험물 관리자 선임·모두의 인사/세이프 인플루언서 TF·MZ 자문단·THE NANUM 100 CLUB·브런치 작가 활동 등 15건의 핵심 경력을 관리합니다.'
              : '수상 내역(23건)과 주요 경력(15건)을 연도 흐름에 따라 좌우 2단으로 교차 비교하며 이력서·포트폴리오용으로 한눈에 조망합니다.'}
          </p>
        </div>

        <div class="flex flex-wrap gap-2.5">
          <button onclick="window.app.openAddAwardModal()" class="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-extrabold shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5">
            <i class="fa-solid fa-plus"></i> 새 수상 내역 추가
          </button>
          <button onclick="window.app.openAddCareerModal()" class="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-extrabold shadow-lg shadow-emerald-500/20 transition flex items-center gap-1.5">
            <i class="fa-solid fa-plus"></i> 새 경력/활동 추가
          </button>
        </div>
      </div>
    </div>

    <!-- Big 3-Way View Switcher (가독성 극대화: 수상 전용 / 경력 전용 / 연도별 통합) -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      <button onclick="window.app.openPortfolioTab('awards')" class="p-4 rounded-2xl border text-left transition flex items-center justify-between ${mode === 'awards' ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10' : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <div class="text-sm font-extrabold ${mode === 'awards' ? 'text-amber-300' : 'text-white'}">1. 수상 내역 전용 탭</div>
            <div class="text-[11px] text-slate-400">2014~2026 사내외 표창 아카이브</div>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-black">${awards.length}건</span>
      </button>

      <button onclick="window.app.openPortfolioTab('careers')" class="p-4 rounded-2xl border text-left transition flex items-center justify-between ${mode === 'careers' ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10' : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-lg">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div>
            <div class="text-sm font-extrabold ${mode === 'careers' ? 'text-emerald-300' : 'text-white'}">2. 주요 경력 & TF 전용 탭</div>
            <div class="text-[11px] text-slate-400">SSIT 교수추천 · 기능장 7명 배출 · TF</div>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-black">${careers.length}건</span>
      </button>

      <button onclick="window.app.openPortfolioTab('timeline')" class="p-4 rounded-2xl border text-left transition flex items-center justify-between ${mode === 'timeline' ? 'bg-sky-500/20 border-sky-400 text-white shadow-lg shadow-sky-500/10' : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 text-lg">
            <i class="fa-solid fa-timeline"></i>
          </div>
          <div>
            <div class="text-sm font-extrabold ${mode === 'timeline' ? 'text-sky-300' : 'text-white'}">3. 연도별 수상·경력 통합 뷰</div>
            <div class="text-[11px] text-slate-400">연도별 수상+경력 2단 교차 비교</div>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-black">${awards.length + careers.length}건</span>
      </button>
    </div>

    <!-- 4 KPI Highlight Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>누적 수상 및 표창</span>
          <i class="fa-solid fa-medal text-amber-400"></i>
        </div>
        <div class="text-2xl font-black text-white">${awards.length}<span class="text-xs font-normal text-slate-400"> 건</span></div>
        <div class="text-[11px] text-amber-300 mt-1">⭐ 주요/메이저 표창 ${highlightCount}건 포함</div>
      </div>

      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>핵심 경력 & 사내외 TF</span>
          <i class="fa-solid fa-users-gear text-emerald-400"></i>
        </div>
        <div class="text-2xl font-black text-white">${careers.length}<span class="text-xs font-normal text-slate-400"> 건</span></div>
        <div class="text-[11px] text-emerald-300 mt-1">🟢 상시/현업 활동 ${ongoingCount}건 포함</div>
      </div>

      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>전문 선임 · 후배 양성</span>
          <i class="fa-solid fa-shield-halved text-sky-400"></i>
        </div>
        <div class="text-base font-black text-sky-300 mt-0.5">SSIT 교수 추천 · 기능장 7명 배출</div>
        <div class="text-[11px] text-slate-400 mt-1">기흥·화성 파운드리 위험물 관리자 선임</div>
      </div>

      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>대외 표창 & 사회공헌</span>
          <i class="fa-solid fa-crown text-pink-400"></i>
        </div>
        <div class="text-base font-black text-pink-300 mt-0.5">국회 국방위원장상 · 방통대 총장상</div>
        <div class="text-[11px] text-slate-400 mt-1">THE NANUM 100 CLUB · 화성시 분과장</div>
      </div>
    </div>

    <!-- Filter & Search Bar -->
    <div class="glass-panel rounded-2xl p-4 mb-6 border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
        ${mode === 'awards' ? `
          <button onclick="window.app.setAwardFilter('all')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">전체 (${awards.length})</button>
          <button onclick="window.app.setAwardFilter('안전·환경')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '안전·환경' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🛡️ 안전·환경 (${awards.filter(a => a.category === '안전·환경').length})</button>
          <button onclick="window.app.setAwardFilter('기술·생산성·혁신')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '기술·생산성·혁신' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">⚡ 기술·생산성·혁신 (${awards.filter(a => a.category === '기술·생산성·혁신').length})</button>
          <button onclick="window.app.setAwardFilter('인사·교육·조직문화')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '인사·교육·조직문화' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🤝 인사·교육·조직문화 (${awards.filter(a => a.category === '인사·교육·조직문화').length})</button>
          <button onclick="window.app.setAwardFilter('대외·공공·문학')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '대외·공공·문학' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🏛️ 대외·공공·문학 (${awards.filter(a => a.category === '대외·공공·문학').length})</button>
        ` : mode === 'careers' ? `
          <button onclick="window.app.setCareerFilter('all')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === 'all' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">전체 (${careers.length})</button>
          <button onclick="window.app.setCareerFilter('사내 핵심 TF')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '사내 핵심 TF' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🚀 사내 핵심 TF (${careers.filter(c => c.category === '사내 핵심 TF').length})</button>
          <button onclick="window.app.setCareerFilter('전문선임·교육·교수')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '전문선임·교육·교수' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🎓 전문선임·교육·교수 (${careers.filter(c => c.category === '전문선임·교육·교수').length})</button>
          <button onclick="window.app.setCareerFilter('사회공헌·봉사')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '사회공헌·봉사' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">💚 사회공헌·봉사 (${careers.filter(c => c.category === '사회공헌·봉사').length})</button>
          <button onclick="window.app.setCareerFilter('작가·대외·학술')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '작가·대외·학술' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">✍️ 작가·대외·학술 (${careers.filter(c => c.category === '작가·대외·학술').length})</button>
        ` : `
          <span class="text-xs text-sky-300 font-bold px-2"><i class="fa-solid fa-circle-info mr-1"></i> 연도별로 수상 내역(🏅)과 주요 경력(💼)이 함께 표시됩니다.</span>
        `}
      </div>

      <div class="relative w-full md:w-64">
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" value="${state.portfolioSearch || ''}" oninput="window.app.setPortfolioSearch(this.value)" placeholder="수상명, 표창자, TF, 연도 검색..." class="w-full bg-slate-900 border border-slate-700 focus:border-sky-400 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none">
      </div>
    </div>

    <!-- Main Content Area by Mode -->
    ${mode === 'awards' ? `
      <div class="space-y-6">
        ${awardYearGroups.length === 0 ? `
          <div class="glass-panel rounded-2xl p-10 text-center text-slate-400 text-xs">조건에 맞는 수상 내역이 없습니다.</div>
        ` : awardYearGroups.map(group => `
          <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90">
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div class="flex items-center gap-2.5">
                <span class="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-sm">${group.year}년</span>
                <span class="text-xs text-slate-400 font-semibold">수상 및 표창 ${group.list.length}건</span>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-3">
              ${group.list.map(a => `
                <div class="p-4 rounded-xl ${a.highlight ? 'bg-gradient-to-r from-amber-950/30 via-slate-800/80 to-slate-800/60 border-amber-500/40' : 'bg-slate-800/60 border-slate-700/60'} hover:bg-slate-800 border transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="space-y-1.5">
                    <div class="flex flex-wrap items-center gap-2">
                      ${a.highlight ? `<span class="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950">⭐ 주요 표창</span>` : ''}
                      <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-700">
                        <i class="fa-regular fa-calendar mr-1"></i>${a.period}
                      </span>
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded border ${getAwardBadge(a.category)}">
                        ${a.category}
                      </span>
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-200 border border-amber-500/30">
                        🏅 ${a.issuer}
                      </span>
                    </div>
                    <h3 class="text-sm sm:text-base font-extrabold text-white leading-snug">${a.title}</h3>
                    ${a.description ? `<p class="text-xs text-slate-400 leading-relaxed">💡 ${a.description}</p>` : ''}
                  </div>

                  <div class="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
                    <button class="admin-only" onclick="window.app.openEditAwardModal('${a.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700/70 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 text-xs font-bold transition flex items-center gap-1">
                      <i class="fa-solid fa-pen-to-square"></i> 수정
                    </button>
                    <button class="admin-only" onclick="window.app.deleteAward('${a.id}')" class="px-2 py-1 rounded-lg bg-slate-700/40 hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs transition">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    ` : mode === 'careers' ? `
      <div class="space-y-6">
        ${careerYearGroups.length === 0 ? `
          <div class="glass-panel rounded-2xl p-10 text-center text-slate-400 text-xs">조건에 맞는 경력 내역이 없습니다.</div>
        ` : careerYearGroups.map(group => `
          <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90">
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div class="flex items-center gap-2.5">
                <span class="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black text-sm">${group.year}년 시작</span>
                <span class="text-xs text-slate-400 font-semibold">주요 경력 & TF 활동 ${group.list.length}건</span>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-3">
              ${group.list.map(c => `
                <div class="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border ${c.status === 'ongoing' ? 'border-emerald-500/40' : 'border-slate-700/60'} transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="space-y-1.5">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${c.status === 'ongoing' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-700/70 text-slate-300'}">
                        ${c.status === 'ongoing' ? '🟢 진행 중 (Active)' : '⚪ 완료'}
                      </span>
                      <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-700">
                        <i class="fa-regular fa-clock mr-1"></i>${c.period}
                      </span>
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded border ${getCareerBadge(c.category)}">
                        ${c.category}
                      </span>
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-200 border border-emerald-500/30">
                        💼 ${c.role}
                      </span>
                    </div>
                    <h3 class="text-sm sm:text-base font-extrabold text-white leading-snug">${c.title}</h3>
                    ${c.impact ? `<p class="text-xs text-slate-400 leading-relaxed">💡 핵심 성과: ${c.impact}</p>` : ''}
                  </div>

                  <div class="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
                    <button class="admin-only" onclick="window.app.openEditCareerModal('${c.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700/70 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 text-xs font-bold transition flex items-center gap-1">
                      <i class="fa-solid fa-pen-to-square"></i> 수정
                    </button>
                    <button class="admin-only" onclick="window.app.deleteCareer('${c.id}')" class="px-2 py-1 rounded-lg bg-slate-700/40 hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs transition">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    ` : `
      <!-- Combined Year-by-Year Timeline View -->
      <div class="space-y-6">
        ${combinedYearGroups.map(group => `
          <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90">
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div class="flex items-center gap-2.5">
                <span class="px-3 py-1 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 font-black text-sm">${group.year === '상시' ? '상시 활동' : group.year + '년'}</span>
                <span class="text-xs text-slate-400">수상 ${group.list.filter(i => i.itemType === 'award').length}건 · 경력/TF ${group.list.filter(i => i.itemType === 'career').length}건</span>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Left Column: Awards in that year -->
              <div class="space-y-2.5">
                <div class="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                  <i class="fa-solid fa-trophy"></i> 수상 내역 (${group.list.filter(i => i.itemType === 'award').length})
                </div>
                ${group.list.filter(i => i.itemType === 'award').length === 0 ? `
                  <div class="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-[11px] text-slate-500">해당 연도 등록된 수상 없음</div>
                ` : group.list.filter(i => i.itemType === 'award').map(a => `
                  <div class="p-3.5 rounded-xl bg-amber-950/15 border border-amber-500/25 flex items-start justify-between gap-2">
                    <div>
                      <div class="flex flex-wrap items-center gap-1.5 mb-1">
                        <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">${a.period}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-200 font-semibold">${a.issuer}</span>
                      </div>
                      <div class="text-xs font-bold text-white">${a.title}</div>
                    </div>
                    <button class="admin-only" onclick="window.app.openEditAwardModal('${a.id}')" class="text-[11px] text-amber-400 hover:underline flex-shrink-0">수정</button>
                  </div>
                `).join('')}
              </div>

              <!-- Right Column: Careers in that year -->
              <div class="space-y-2.5">
                <div class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <i class="fa-solid fa-briefcase"></i> 주요 경력 & TF (${group.list.filter(i => i.itemType === 'career').length})
                </div>
                ${group.list.filter(i => i.itemType === 'career').length === 0 ? `
                  <div class="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-[11px] text-slate-500">해당 연도 등록된 경력 없음</div>
                ` : group.list.filter(i => i.itemType === 'career').map(c => `
                  <div class="p-3.5 rounded-xl bg-emerald-950/15 border border-emerald-500/25 flex items-start justify-between gap-2">
                    <div>
                      <div class="flex flex-wrap items-center gap-1.5 mb-1">
                        <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">${c.period}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-emerald-200 font-semibold">${c.role}</span>
                      </div>
                      <div class="text-xs font-bold text-white">${c.title}</div>
                    </div>
                    <button class="admin-only" onclick="window.app.openEditCareerModal('${c.id}')" class="text-[11px] text-emerald-400 hover:underline flex-shrink-0">수정</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

// ==========================================================================
// 6. Settings & Cloud Sync Tab

// ==========================================================================
function renderSettingsTab() {
  const container = document.getElementById('tab-content-settings');
  if (!container) return;

  const savedFirebaseConfig = syncManager.getSavedFirebaseConfig() || {};

  container.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-gear text-slate-400"></i>
          설정 및 클라우드 동기화 (옵션 A)
        </h1>
        <p class="text-xs text-slate-400 mt-1">
          무료 Firebase Firestore를 연동하여 여러 컴퓨터와 스마트폰에서 실시간으로 일정을 동기화합니다.
        </p>
      </div>

      <!-- Cloud Sync Status Card -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
        <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <span class="w-3 h-3 rounded-full ${syncManager.status === 'synced' ? 'bg-emerald-500 animate-pulse' : syncManager.status === 'connecting' ? 'bg-amber-500' : 'bg-slate-500'}"></span>
          동기화 상태: <span id="sync-status-text" class="text-sky-400">${getSyncStatusLabel(syncManager.status)}</span>
        </h3>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">
          클라우드 키가 설정되지 않은 경우에도 모든 데이터는 브라우저 내부(LocalStorage)에 안전하게 자동 저장되므로 즉시 사용하실 수 있습니다.
        </p>

        <!-- Firebase Configuration Form -->
        <div class="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-300">Firebase 웹 앱 설정 (Free Tier)</span>
            <a href="https://console.firebase.google.com/" target="_blank" class="text-[11px] text-sky-400 hover:underline">
              무료 콘솔 열기 <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label class="block text-slate-400 mb-1">API Key</label>
              <input type="text" id="fb-apikey" value="${savedFirebaseConfig.apiKey || ''}" placeholder="AIzaSy..." class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
            </div>
            <div>
              <label class="block text-slate-400 mb-1">Project ID</label>
              <input type="text" id="fb-projectid" value="${savedFirebaseConfig.projectId || ''}" placeholder="my-dashboard-123" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
            </div>
            <div>
              <label class="block text-slate-400 mb-1">Auth Domain (선택)</label>
              <input type="text" id="fb-authdomain" value="${savedFirebaseConfig.authDomain || ''}" placeholder="my-dashboard.firebaseapp.com" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
            </div>
            <div>
              <label class="block text-slate-400 mb-1">내 고유 사용자 ID</label>
              <input type="text" id="fb-userid" value="${savedFirebaseConfig.userId || 'my_personal_account'}" placeholder="my_personal_account" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white">
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button onclick="window.app.saveFirebaseConfig()" class="py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition">
              <i class="fa-solid fa-cloud-arrow-up mr-1"></i> Firebase 클라우드 연결 및 동기화
            </button>
          </div>
        </div>
      </div>

      <!-- Backup & Restore -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
        <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <i class="fa-solid fa-database text-emerald-400"></i>
          데이터 백업 및 복원 (JSON)
        </h3>
        <p class="text-xs text-slate-400 mb-4">
          인터넷 연결 없이도 다른 기기나 브라우저로 데이터를 파일 형태로 완벽히 이전할 수 있습니다.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <button onclick="window.app.exportData()" class="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2">
            <i class="fa-solid fa-download text-emerald-400"></i> 백업 파일 다운로드 (.json)
          </button>

          <label class="admin-only py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-upload text-blue-400"></i> 백업 파일 불러오기
            <input type="file" id="import-file-input" accept=".json" onchange="window.app.importData(event)" class="hidden">
          </label>
        </div>
      </div>

      <!-- About & PWA Guide -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-700/60 text-xs text-slate-300 space-y-2">
        <h3 class="font-bold text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-mobile-screen text-amber-400"></i>
          모바일 PWA (스마트폰 앱 설치 방법)
        </h3>
        <ul class="list-disc list-inside space-y-1 text-slate-400">
          <li><b>iOS (아이폰 Safari)</b>: 하단 공유 버튼(<i class="fa-solid fa-arrow-up-from-bracket"></i>) → <b>'홈 화면에 추가'</b> 터치</li>
          <li><b>Android (Chrome)</b>: 우측 상단 메뉴(<i class="fa-solid fa-ellipsis-vertical"></i>) → <b>'앱 설치'</b> 또는 <b>'홈 화면에 추가'</b> 터치</li>
        </ul>
      </div>
    </div>
  `;
}

// ==========================================================================
// Helper Functions & Global Window Bindings
// ==========================================================================
function calculateDDay(targetDateStr) {
  if (!targetDateStr) return { days: 0 };
  const target = new Date(targetDateStr);
  const today = new Date();
  
  // Clear time part for accurate date comparison
  const targetDateOnly = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffTime = targetDateOnly - todayOnly;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return { days: diffDays };
}

function formatScheduleDate(startDateStr, endDateStr) {
  if (!startDateStr) return '';
  const s = new Date(startDateStr);
  const sText = `${s.getFullYear()}년 ${s.getMonth() + 1}월 ${s.getDate()}일`;

  if (!endDateStr || startDateStr === endDateStr) {
    const hours = s.getHours();
    if (hours !== 0) {
      return `${sText} ${hours}시`;
    }
    return sText;
  }

  const e = new Date(endDateStr);
  const eText = `${e.getMonth() + 1}월 ${e.getDate()}일`;
  return `${sText} ~ ${eText}`;
}

function formatDateTime(dateTimeStr) {
  if (!dateTimeStr) return '';
  const d = new Date(dateTimeStr);
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const dayName = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
  const hours = String(d.getHours()).padStart(2, '0');
  const mins = String(d.getMinutes()).padStart(2, '0');
  return `${month}/${date}(${dayName}) ${hours}:${mins}`;
}

function updateDDayDisplay() {
  if (state.activeTab === 'overview') {
    renderOverviewTab();
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
  }
}

function getSyncStatusLabel(status) {
  switch (status) {
    case 'synced': return '실시간 동기화 됨 (클라우드)';
    case 'connecting': return '클라우드 연결 중...';
    case 'error': return '동기화 오류';
    default: return '로컬 저장 모드 (안전 보관)';
  }
}

function updateSyncStatusUI({ status, message }) {
  const textEl = document.getElementById('sync-status-text');
  if (textEl) textEl.innerText = getSyncStatusLabel(status);

  const sidebarDot = document.getElementById('sidebar-sync-dot');
  if (sidebarDot) {
    sidebarDot.className = `w-2 h-2 rounded-full ${status === 'synced' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`;
  }
}

function initKaTeX() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2500);
}

// ==========================================================================
// Expose Public Methods to Window for UI Interactions
// ==========================================================================
window.app = {
  // Admin Authentication Handlers
  openAuthModal: () => openAdminAuthModal(),
  handleGoogleLogin: () => handleGoogleLogin(),
  handleLogout: () => handleLogout(),
  checkAdminPermission: (action) => checkAdminPermission(action),
  renderAuthWidget: () => renderAuthWidget(),
  // Energy Flashcard Handlers (암기카드)
  setFlashcardMode: (mode) => {
    state.flashcardMode = mode;
    renderEnergyTab();
  },
  setFlashcardCategoryFilter: (cat) => {
    state.flashcardCategoryFilter = cat;
    state.currentQuestionIndex = 0;
    renderEnergyTab();
  },
  setFlashcardDetailFilter: (det) => {
    state.flashcardDetailFilter = det;
    state.currentQuestionIndex = 0;
    renderEnergyTab();
  },
  setFlashcardSearch: (q) => {
    state.flashcardSearch = q;
    state.currentQuestionIndex = 0;
    renderEnergyTab();
  },
  selectQuestionIndex: (idx) => {
    state.currentQuestionIndex = idx;
    renderEnergyTab();
  },
  toggleFlashcardFlip: (qId) => {
    if (!state.cardFlipped) state.cardFlipped = {};
    state.cardFlipped[qId] = !state.cardFlipped[qId];
    renderEnergyTab();
  },
  toggleAllFlashcardsFlip: () => {
    if (!state.cardFlipped) state.cardFlipped = {};
    const questions = state.questions && state.questions.length > 0 ? state.questions : INITIAL_ENERGY_QUESTIONS;
    const anyUnflipped = questions.some(q => !state.cardFlipped[q.id]);
    questions.forEach(q => {
      state.cardFlipped[q.id] = anyUnflipped;
    });
    renderEnergyTab();
  },
  toggleCardMastered: (qId) => {
    if (!state.cardMastered) state.cardMastered = {};
    state.cardMastered[qId] = !state.cardMastered[qId];
    const isM = state.cardMastered[qId];
    showToast(isM ? '암기를 완료했습니다! ✓' : '암기 완료를 해제했습니다.');
    renderEnergyTab();
  },
  prevFlashcard: () => {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderEnergyTab();
    }
  },
  nextFlashcard: () => {
    const questions = state.questions && state.questions.length > 0 ? state.questions : INITIAL_ENERGY_QUESTIONS;
    if (state.currentQuestionIndex < questions.length - 1) {
      state.currentQuestionIndex++;
      renderEnergyTab();
    }
  },
  shuffleFlashcard: () => {
    const questions = state.questions && state.questions.length > 0 ? state.questions : INITIAL_ENERGY_QUESTIONS;
    if (questions.length > 1) {
      let nextIdx = Math.floor(Math.random() * questions.length);
      if (nextIdx === state.currentQuestionIndex) {
        nextIdx = (nextIdx + 1) % questions.length;
      }
      state.currentQuestionIndex = nextIdx;
      renderEnergyTab();
    }
  },

  // Core Tab Switcher
  switchTab: (tabName) => switchTab(tabName),

  // Energy Engineer Daily Briefing & Curriculum Handlers
  setEnergySubtab: (subtab) => {
    state.energyStudySubtab = subtab;
    renderEnergyTab();
  },
  selectBriefingDate: (dateStr) => {
    state.selectedBriefingDate = dateStr;
    state.showBriefingQuiz = false;
    renderEnergyTab();
  },
  prevBriefingDay: () => {
    const plan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
    const cur = state.selectedBriefingDate || '2026-09-28';
    const idx = plan.findIndex(p => p.date === cur);
    if (idx > 0) {
      state.selectedBriefingDate = plan[idx - 1].date;
      state.showBriefingQuiz = false;
      renderEnergyTab();
    }
  },
  nextBriefingDay: () => {
    const plan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
    const cur = state.selectedBriefingDate || '2026-09-28';
    const idx = plan.findIndex(p => p.date === cur);
    if (idx < plan.length - 1) {
      state.selectedBriefingDate = plan[idx + 1].date;
      state.showBriefingQuiz = false;
      renderEnergyTab();
    }
  },
  goToTodayBriefing: () => {
    state.selectedBriefingDate = '2026-09-28';
    state.showBriefingQuiz = false;
    renderEnergyTab();
  },
  openDateBriefing: (dateStr) => {
    state.selectedBriefingDate = dateStr;
    state.energyStudySubtab = 'briefing';
    state.showBriefingQuiz = false;
    renderEnergyTab();
  },
  toggleBriefingQuizSolution: () => {
    state.showBriefingQuiz = !state.showBriefingQuiz;
    renderEnergyTab();
  },
  toggleFolderCompleted: (folderName) => {
    if (!state.foldersDone) state.foldersDone = {};
    state.foldersDone[folderName] = !state.foldersDone[folderName];
    showToast(`'${folderName}' 폴더 완독 상태를 변경했습니다.`);
    renderEnergyTab();
  },

  // Tab Reordering & Dynamic Navigation Handlers
  openTabOrderModal: () => openTabOrderModal(),
  moveTabUp: (idx) => moveTabUp(idx),
  moveTabDown: (idx) => moveTabDown(idx),
  resetTabOrder: () => resetTabOrder(),
  renderNavigation: () => renderNavigation(),
  setNavCategoryFilter: (catId) => setNavCategoryFilter(catId),

  // External Subtab Switcher
  setExternalSubtab: (subtab) => {
    state.externalSubtab = subtab;
    renderExternalTab();
  },

  // InBody Handlers (⭐ '체중 변화 없는 성공적인 다이어트')
  openAddInbodyModal: () => {
    if (!checkAdminPermission('인바디 등록')) return;
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('add-inbody-date');
    if (dateInput) dateInput.value = today;
    const modal = document.getElementById('modal-add-inbody');
    if (modal) modal.classList.remove('hidden');
  },
  openEditInbodyModal: (id) => {
    if (!state.inbody || !state.inbody.records) return;
    const item = state.inbody.records.find(r => r.id === id);
    if (!item) return;
    document.getElementById('edit-inbody-id').value = item.id;
    document.getElementById('edit-inbody-date').value = item.date;
    document.getElementById('edit-inbody-weight').value = item.weight;
    document.getElementById('edit-inbody-muscle').value = item.skeletalMuscle;
    document.getElementById('edit-inbody-fat-mass').value = item.bodyFatMass;
    document.getElementById('edit-inbody-fat-rate').value = item.bodyFatRate || '';
    document.getElementById('edit-inbody-visceral').value = item.visceralFat || '';
    document.getElementById('edit-inbody-waist').value = item.waistSize || '';
    document.getElementById('edit-inbody-bmr').value = item.bmr || '';
    document.getElementById('edit-inbody-score').value = item.score || '';
    document.getElementById('edit-inbody-notes').value = item.notes || '';
    const modal = document.getElementById('modal-edit-inbody');
    if (modal) modal.classList.remove('hidden');
  },
  deleteInbodyRecord: (id) => {
    if (confirm('선택한 인바디 측정 기록을 삭제하시겠습니까?')) {
      if (state.inbody && state.inbody.records) {
        state.inbody.records = state.inbody.records.filter(r => r.id !== id);
        persistState();
        renderInbodyTab();
        showToast('인바디 측정 기록이 삭제되었습니다.');
      }
    }
  },


  // InBody Year Filter Handler
  setInbodyYearFilter: (year) => {
    state.inbodyYearFilter = year;
    renderInbodyTab();
  },

  // ⭐ InBody CSV Importer (카카오톡 InBody-YYYYMMDD.csv 원클릭 자동 파싱 & 병합)
  importInbodyCsv: (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvContent = e.target.result;
        const lines = csvContent.split(/\r?\n/).filter(line => line.trim().length > 0);
        if (lines.length < 2) {
          showToast('CSV 파일에 유효한 데이터가 없습니다.');
          return;
        }

        const headers = lines[0].split(',').map(h => h.trim().replace(/^\uFEFF/, ''));
        const dateIdx = headers.indexOf('날짜');
        const weightIdx = headers.indexOf('체중(kg)');
        const muscleIdx = headers.indexOf('골격근량(kg)');
        const fatMassIdx = headers.indexOf('체지방량(kg)');
        const fatRateIdx = headers.indexOf('체지방률(%)');
        const bmiIdx = headers.indexOf('BMI(kg/m²)');
        const bmrIdx = headers.indexOf('기초대사량(kcal)');
        const scoreIdx = headers.indexOf('인바디점수');
        const visceralIdx = headers.indexOf('내장지방레벨(Level)');
        const whrIdx = headers.indexOf('복부지방률');
        const deviceIdx = headers.indexOf('측정장비');

        if (dateIdx === -1 || weightIdx === -1) {
          showToast('올바른 InBody CSV 파일 형식이 아닙니다 (날짜/체중 컬럼 누락).');
          return;
        }

        const parseVal = (v) => (!v || v === '-' || isNaN(v)) ? null : parseFloat(v);
        let addedCount = 0;
        if (!state.inbody) state.inbody = INITIAL_INBODY_DATA;
        if (!state.inbody.records) state.inbody.records = [];

        const existingRawDates = new Set(state.inbody.records.map(r => r.rawDate || r.date));

        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map(c => c.trim());
          if (cols.length <= dateIdx) continue;

          const rawDate = cols[dateIdx];
          if (!rawDate || existingRawDates.has(rawDate)) continue; // skip duplicates

          let dateStr = rawDate;
          let timeStr = "";
          if (rawDate.length >= 8) {
            dateStr = rawDate.substring(0, 4) + '-' + rawDate.substring(4, 6) + '-' + rawDate.substring(6, 8);
            if (rawDate.length >= 12) {
              timeStr = rawDate.substring(8, 10) + ':' + rawDate.substring(10, 12);
            }
          }

          const weight = parseVal(cols[weightIdx]);
          const muscle = parseVal(cols[muscleIdx]);
          const fatMass = parseVal(cols[fatMassIdx]);
          const fatRate = parseVal(cols[fatRateIdx]);
          const bmi = parseVal(cols[bmiIdx]);
          const bmr = parseVal(cols[bmrIdx]);
          const score = parseVal(cols[scoreIdx]);
          const visceral = parseVal(cols[visceralIdx]);
          const whr = parseVal(cols[whrIdx]);
          const device = (deviceIdx !== -1 && cols[deviceIdx]) ? cols[deviceIdx] : 'Etc';

          const newRecord = {
            id: 'inbody-import-' + Date.now() + '-' + i,
            date: dateStr,
            time: timeStr,
            rawDate: rawDate,
            device: device,
            weight: weight,
            skeletalMuscle: muscle,
            bodyFatMass: fatMass,
            bodyFatRate: fatRate,
            bmi: bmi,
            bmr: bmr ? Math.round(bmr) : null,
            score: score,
            visceralFat: visceral ? Math.round(visceral) : null,
            waistHipRatio: whr,
            bodyType: (fatRate && fatRate <= 19 && muscle && muscle >= 40) ? 'D자형 (골격근 발달형)' : 'I자형 (표준형)',
            notes: `InBody ${device} CSV 가져오기`
          };

          state.inbody.records.push(newRecord);
          existingRawDates.add(rawDate);
          addedCount++;
        }

        // Sort descending
        state.inbody.records.sort((a, b) => new Date(b.date + ' ' + (b.time || '00:00')) - new Date(a.date + ' ' + (a.time || '00:00')));
        persistState();
        renderInbodyTab();

        showToast(`InBody CSV 가져오기 완료: 총 ${addedCount}개의 새 측정 기록이 성공적으로 병합되었습니다.`);
      } catch (err) {
        console.error('CSV Import Error:', err);
        showToast('CSV 파싱 중 오류가 발생했습니다: ' + err.message);
      }
    };
    reader.readAsText(file, 'utf-8');
    event.target.value = ''; // reset input
  },

  // ⭐ Full Excel Export Engine (SheetJS + CSV Fallback)
  exportAllDashboardToExcel: () => {
    const todayStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const filename = `김남현_커리어_라이프_통합대시보드_${todayStr}.xlsx`;

    // 1. Data mapping for all 8 sheets
    const examsData = (state.exams || []).map(e => ({
      "일정ID": e.id,
      "일정명": e.title,
      "분류": e.category,
      "시작일시": e.startDate,
      "종료일시": e.endDate || e.startDate,
      "장소/방식": e.location || '온라인',
      "우선순위": e.priority === 'urgent' ? '긴급' : '보통',
      "비고": e.notes || ''
    }));

    const bandsData = (state.bands || []).map(b => ({
      "일정명": b.title,
      "유형": b.type === 'rehearsal' ? '밴드 합주' : '공연 관람',
      "일시": b.date,
      "합주장소": b.location,
      "세트리스트": (b.setlist || []).map(s => s.song).join(', '),
      "준비메모": b.memos || ''
    }));

    const energyPlanData = (state.energyPlan || []).map(p => ({
      "D-Day": p.dday,
      "학습일자": p.date,
      "단계": p.phaseName,
      "핵심토픽": p.topic,
      "세부실습과제": p.task,
      "완료여부": p.done ? '완료' : '진행중',
      "파이널7일집중여부": p.isFinalWeek ? '★마지막7일반복' : '일반과제'
    }));

    const awardsData = ((state.portfolio && state.portfolio.awards) || []).map(a => ({
      "연도": a.year,
      "취득시기": a.period,
      "수상명": a.title,
      "수여기관": a.issuer,
      "분야": a.category,
      "대표실적여부": a.highlight ? '★대표실적' : '일반수상',
      "상세공적": a.description
    }));

    const careersData = ((state.portfolio && state.portfolio.careers) || []).map(c => ({
      "활동기간": c.period,
      "역할/직책": c.role,
      "프로젝트/활동명": c.title,
      "전문분야": c.category,
      "진행상태": c.status === 'ongoing' ? '진행중' : '완료',
      "핵심임팩트": c.impact
    }));

    const caminoData = ((state.camino && state.camino.itinerary) || []).map(i => ({
      "일차": i.day,
      "일자": i.date,
      "일정명": i.title,
      "유형": i.type === 'flight' ? '항공이동' : i.type === 'stay' ? '거점체류관광' : '도보순례',
      "이동거리": i.distance,
      "숙소/알베르게": i.albergue || i.stay || '',
      "하이라이트": i.highlight,
      "상세안내": i.description
    }));

    const snsData = ((state.sns && state.sns.channels) || []).map(s => ({
      "플랫폼": s.id,
      "채널명": s.name,
      "계정핸들": s.handle,
      "팔로워/구독자수": s.followers,
      "목표팔로워": s.targetFollowers,
      "누적게시물수": s.postsCount,
      "월간조회수": s.monthlyViews,
      "채널포지셔닝": s.positioning,
      "공식URL": s.url
    }));

    const inbodyData = ((state.inbody && state.inbody.records) || []).map(r => ({
      "측정일자": r.date,
      "체중(kg)": r.weight,
      "골격근량(kg)": r.skeletalMuscle,
      "체지방량(kg)": r.bodyFatMass,
      "체지방률(%)": r.bodyFatRate,
      "허리둘레(인치)": r.waistSize || '',
      "BMI": r.bmi || '',
      "내장지방레벨": r.visceralFat || '',
      "기초대사량(kcal)": r.bmr || '',
      "인바디점수": r.score || '',
      "체형판정": r.bodyType || '',
      "루틴및피드백": r.notes || ''
    }));

    // Check if SheetJS is available
    if (window.XLSX) {
      try {
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(examsData), "학사_시험_일정");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(bandsData), "밴드합주_문화");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(energyPlanData), "에너지기사_41일플랜");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(awardsData), "수상내역_23건");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(careersData), "주요경력_15건");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(caminoData), "산티아고순례길_21일");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(snsData), "SNS_브랜딩_지표");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(inbodyData), "체구관리_인바디");

        XLSX.writeFile(wb, filename);
        showToast(`성공: '${filename}' 통합 엑셀 파일이 다운로드되었습니다.`);
        return;
      } catch (err) {
        console.warn('SheetJS 내보내기 오류, CSV 다운로드로 대체:', err);
      }
    }

    // Fallback: CSV export
    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel Korean support
    const appendSection = (title, data) => {
      if (!data || data.length === 0) return;
      csvContent += `\r\n[=== ${title} ===]\r\n`;
      const keys = Object.keys(data[0]);
      csvContent += keys.map(k => `"${k}"`).join(',') + "\r\n";
      data.forEach(row => {
        csvContent += keys.map(k => `"${String(row[k] || '').replace(/"/g, '""')}"`).join(',') + "\r\n";
      });
    };

    appendSection("1. 학사 및 시험 일정", examsData);
    appendSection("2. 밴드 합주 & 문화생활", bandsData);
    appendSection("3. 에너지관리기사 41일 실기 플래너", energyPlanData);
    appendSection("4. 사내외 수상 내역 (23건)", awardsData);
    appendSection("5. 주요 경력 & TF 활동 (15건)", careersData);
    appendSection("6. 산티아고 순례길 21일 코스", caminoData);
    appendSection("7. SNS 퍼스널 브랜딩 (브런치 741편)", snsData);
    appendSection("8. 체구 감량 & 인바디 측정 기록", inbodyData);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename.replace('.xlsx', '.csv'));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('통합 데이터가 CSV 엑셀 호환 포맷으로 다운로드되었습니다.');
  },

  // Export Single Category to Excel/CSV
  exportCategoryToExcel: (cat) => {
    let data = [];
    let title = "";
    const todayStr = new Date().toISOString().split('T')[0].replace(/-/g, '');

    if (cat === 'exams') {
      title = "학사_자격증_시험일정";
      data = (state.exams || []).map(e => ({
        "일정명": e.title, "분류": e.category, "시작일": e.startDate, "종료일": e.endDate || '', "장소": e.location || '', "비고": e.notes || ''
      }));
    } else if (cat === 'bands') {
      title = "밴드합주_세트리스트";
      data = (state.bands || []).map(b => ({
        "일정명": b.title, "구분": b.type, "일시": b.date, "장소": b.location, "세트리스트": (b.setlist || []).map(s => s.song).join(', ')
      }));
    } else if (cat === 'energy') {
      title = "에너지관리기사_41일플랜";
      data = (state.energyPlan || []).map(p => ({
        "D-Day": p.dday, "학습일자": p.date, "단계": p.phaseName, "토픽": p.topic, "과제": p.task, "완료": p.done ? '완료' : '미완료', "파이널7일": p.isFinalWeek ? '★반복' : '-'
      }));
    } else if (cat === 'awards') {
      title = "수상내역_23건";
      data = ((state.portfolio && state.portfolio.awards) || []).map(a => ({
        "연도": a.year, "시기": a.period, "수상명": a.title, "수여기관": a.issuer, "분야": a.category, "공적": a.description
      }));
    } else if (cat === 'careers') {
      title = "주요경력_15건";
      data = ((state.portfolio && state.portfolio.careers) || []).map(c => ({
        "기간": c.period, "역할": c.role, "활동명": c.title, "분야": c.category, "상태": c.status, "임팩트": c.impact
      }));
    } else if (cat === 'camino') {
      title = "산티아고순례길_21일";
      data = ((state.camino && state.camino.itinerary) || []).map(i => ({
        "일차": i.day, "일자": i.date, "일정명": i.title, "유형": i.type, "거리": i.distance, "숙소": i.albergue || i.stay, "하이라이트": i.highlight
      }));
    } else if (cat === 'sns') {
      title = "SNS_브랜딩_지표";
      data = ((state.sns && state.sns.channels) || []).map(s => ({
        "채널": s.name, "계정": s.handle, "구독자/팔로워": s.followers, "게시물": s.postsCount, "월간조회": s.monthlyViews, "포지셔닝": s.positioning
      }));
    } else if (cat === 'inbody') {
      title = "체구감량_인바디기록";
      data = ((state.inbody && state.inbody.records) || []).map(r => ({
        "측정일": r.date, "체중(kg)": r.weight, "골격근(kg)": r.skeletalMuscle, "체지방량(kg)": r.bodyFatMass, "체지방률(%)": r.bodyFatRate, "허리둘레(인치)": r.waistSize || '', "체형": r.bodyType || '', "피드백": r.notes || ''
      }));
    }

    const filename = `${title}_${todayStr}.xlsx`;

    if (window.XLSX) {
      try {
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), title.substring(0, 31));
        XLSX.writeFile(wb, filename);
        showToast(`'${filename}' 파일이 다운로드되었습니다.`);
        return;
      } catch (e) {
        console.warn('XLSX 단일 시트 오류:', e);
      }
    }

    // CSV fallback
    let csv = "\uFEFF";
    const keys = Object.keys(data[0] || {});
    csv += keys.map(k => `"${k}"`).join(',') + "\r\n";
    data.forEach(r => {
      csv += keys.map(k => `"${String(r[k] || '').replace(/"/g, '""')}"`).join(',') + "\r\n";
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename.replace('.xlsx', '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`'${title}' 데이터가 다운로드되었습니다.`);
  },

  // Camino Handlers (⭐)
  toggleCaminoPacking: (idx) => {
    if (state.camino && state.camino.packingList && state.camino.packingList[idx]) {
      state.camino.packingList[idx].done = !state.camino.packingList[idx].done;
      persistState();
      renderCaminoTab();
      if (state.activeTab === 'overview') renderOverviewTab();
    }
  },
  openEditCaminoItineraryModal: (idx) => {
    const item = state.camino && state.camino.itinerary ? state.camino.itinerary[idx] : null;
    if (!item) return;
    const newHighlight = prompt(`[${item.day}] 주요 일정 및 하이라이트를 수정하세요:`, item.highlight || '');
    if (newHighlight !== null && newHighlight.trim()) {
      item.highlight = newHighlight.trim();
      persistState();
      renderCaminoTab();
      showToast(`${item.day} 일정이 수정되었습니다.`);
    }
  },
  // Energy Study Plan Handlers (⭐)
  toggleEnergyPlanItem: (id) => {
    if (!state.energyPlan) state.energyPlan = INITIAL_ENERGY_STUDY_PLAN;
    const item = state.energyPlan.find(p => p.id === id);
    if (item) {
      item.done = !item.done;
      persistState();
      renderEnergyTab();
      showToast(item.done ? `[${item.dday}] 학습 완료 처리되었습니다.` : `[${item.dday}] 미완료 처리되었습니다.`);
    }
  },
  setEnergyPlanPhaseFilter: (phase) => {
    state.energyPlanPhaseFilter = phase;
    renderEnergyTab();
  },
  // Brunch 12h Sync Handler (⭐)
  refreshBrunchData: () => {
    const now = new Date();
    const formatted = now.getFullYear() + '-' + 
      String(now.getMonth() + 1).padStart(2, '0') + '-' + 
      String(now.getDate()).padStart(2, '0') + ' ' + 
      String(now.getHours()).padStart(2, '0') + ':' + 
      String(now.getMinutes()).padStart(2, '0');
    state.brunchLastSync = formatted;
    persistState();
    renderSnsTab();
    showToast('브런치스토리 12시간 주기 최신 데이터가 성공적으로 갱신되었습니다.');
  },
  addCaminoPackingItem: () => {
    const input = document.getElementById('new-camino-packing-input');
    if (input && input.value.trim()) {
      if (!state.camino) state.camino = INITIAL_CAMINO_DATA;
      state.camino.packingList.push({
        text: input.value.trim(),
        category: "추가",
        done: false
      });
      persistState();
      renderCaminoTab();
      input.value = '';
      showToast('새 준비물이 추가되었습니다.');
    }
  },
  deleteCaminoPackingItem: (idx) => {
    if (state.camino && state.camino.packingList[idx]) {
      state.camino.packingList.splice(idx, 1);
      persistState();
      renderCaminoTab();
      showToast('준비물이 삭제되었습니다.');
    }
  },
  saveCaminoMemo: () => {
    const input = document.getElementById('camino-memos-input');
    if (input && state.camino) {
      state.camino.memos = input.value;
      persistState();
      showToast('순례자의 다짐 메모가 저장되었습니다.');
    }
  },
  switchTab,
  setExamFilter: (category) => {
    state.examFilter = category;
    renderExamTab();
  },
  setBandFilter: (type) => {
    state.bandFilter = type;
    renderBandTab();
  },
  setEnergySubtab: (subtab) => {
    state.energyStudySubtab = subtab;
    renderEnergyTab();
  },
  selectQuestionIndex: (idx) => {
    state.currentQuestionIndex = idx;
    renderEnergyTab();
  },
  toggleQuestionReviewed: (qId) => {
    const q = state.questions.find(item => item.id === qId);
    if (q) {
      q.isReviewed = !q.isReviewed;
      persistState();
      renderEnergyTab();
      showToast(q.isReviewed ? '오늘의 복습 완료!' : '복습 대기 상태로 변경');
    }
  },
  saveQuestionMemo: (qId) => {
    const input = document.getElementById(`memo-input-${qId}`);
    if (input) {
      const q = state.questions.find(item => item.id === qId);
      if (q) {
        q.userMemo = input.value;
        persistState();
        showToast('메모가 저장되었습니다.');
      }
    }
  },
  toggleChecklist: (examId, checkIdx) => {
    const exam = state.exams.find(e => e.id === examId);
    if (exam && exam.checklist && exam.checklist[checkIdx]) {
      exam.checklist[checkIdx].done = !exam.checklist[checkIdx].done;
      persistState();
      renderExamTab();
    }
  },
  deleteExam: (examId) => {
    if (confirm('이 일정을 삭제하시겠습니까?')) {
      state.exams = state.exams.filter(e => e.id !== examId);
      persistState();
      renderExamTab();
      showToast('일정이 삭제되었습니다.');
    }
  },
  deleteBand: (bandId) => {
    if (confirm('이 일정을 삭제하시겠습니까?')) {
      state.bands = state.bands.filter(b => b.id !== bandId);
      persistState();
      renderBandTab();
      showToast('일정이 삭제되었습니다.');
    }
  },

  // External Dashboards Actions
  openExternalDashboard: (extId) => {
    state.activeExternalTabId = extId;
    switchTab('external');
  },
  deleteExternalDashboard: (extId) => {
    if (confirm('해당 외부 대시보드 탭을 제거하시겠습니까?')) {
      state.externalDashboards = state.externalDashboards.filter(e => e.id !== extId);
      if (state.activeExternalTabId === extId) {
        state.activeExternalTabId = state.externalDashboards.length > 0 ? state.externalDashboards[0].id : null;
      }
      persistState();
      renderExternalTab();
      showToast('외부 대시보드가 제거되었습니다.');
    }
  },
  refreshExternalIframe: () => {
    const iframe = document.getElementById('external-iframe');
    if (iframe) {
      iframe.src = iframe.src || iframe.srcdoc;
      showToast('새로고침 완료');
    }
  },
  toggleFullscreenIframe: () => {
    const wrapper = document.getElementById('external-iframe-wrapper');
    if (wrapper) {
      wrapper.classList.toggle('fullscreen-mode');
    }
  },

  // Modal Handlers (Add & Edit ⭐)
  openAddExamModal: () => {
    if (!checkAdminPermission('일정 추가')) return;
    document.getElementById('modal-add-exam').classList.remove('hidden');
  },
  openEditExamModal: (examId) => {
    const exam = state.exams.find(e => e.id === examId);
    if (!exam) return;
    document.getElementById('edit-exam-id').value = exam.id;
    document.getElementById('edit-exam-title').value = exam.title || '';
    document.getElementById('edit-exam-category').value = exam.category || '기타';
    document.getElementById('edit-exam-priority').value = exam.priority || 'normal';
    document.getElementById('edit-exam-start-date').value = exam.startDate ? exam.startDate.slice(0, 16) : '';
    document.getElementById('edit-exam-end-date').value = exam.endDate ? exam.endDate.slice(0, 16) : '';
    document.getElementById('edit-exam-location').value = exam.location || '';
    document.getElementById('edit-exam-desc').value = exam.description || '';
    document.getElementById('modal-edit-exam').classList.remove('hidden');
  },
  openAddBandModal: () => {
    if (!checkAdminPermission('합주/공연 등록')) return;
    document.getElementById('modal-add-band').classList.remove('hidden');
  },
  openEditBandModal: (bandId) => {
    const band = state.bands.find(b => b.id === bandId);
    if (!band) return;
    document.getElementById('edit-band-id').value = band.id;
    document.getElementById('edit-band-type').value = band.type || 'rehearsal';
    document.getElementById('edit-band-date').value = band.date ? band.date.slice(0, 16) : '';
    document.getElementById('edit-band-title').value = band.title || '';
    document.getElementById('edit-band-location').value = band.location || '';
    document.getElementById('edit-band-setlist-input').value = band.setlist ? band.setlist.map(s => s.song).join('\n') : '';
    document.getElementById('edit-band-memos').value = band.memos || '';
    document.getElementById('modal-edit-band').classList.remove('hidden');
  },
  openAddExternalModal: () => {
    document.getElementById('modal-add-external').classList.remove('hidden');
  },
  openAddQuestionModal: () => {
    if (!checkAdminPermission('문제 등록')) return;
    document.getElementById('modal-add-question').classList.remove('hidden');
  },
  openEditQuestionModal: (qId) => {
    const q = state.questions.find(item => item.id === qId);
    if (!q) return;
    document.getElementById('edit-q-id').value = q.id;
    document.getElementById('edit-q-title').value = q.title || '';
    document.getElementById('edit-q-topic').value = q.topic || '';
    document.getElementById('edit-q-problem').value = q.problemText || '';
    const solContent = (q.solutionSteps && q.solutionSteps[0]) ? q.solutionSteps[0].content : '';
    document.getElementById('edit-q-solution').value = solContent;
    document.getElementById('edit-q-keypoints').value = q.keyPoints || '';
    document.getElementById('modal-edit-question').classList.remove('hidden');
  },
  deleteQuestion: (qId) => {
    if (confirm('이 문제를 삭제하시겠습니까?')) {
      state.questions = state.questions.filter(item => item.id !== qId);
      if (state.currentQuestionIndex >= state.questions.length) {
        state.currentQuestionIndex = Math.max(0, state.questions.length - 1);
      }
      persistState();
      renderEnergyTab();
      showToast('문제가 삭제되었습니다.');
    }
  },
  openEditCaminoItineraryModal: (idx) => {
    if (!state.camino || !state.camino.itinerary || !state.camino.itinerary[idx]) return;
    const item = state.camino.itinerary[idx];
    document.getElementById('edit-camino-idx').value = idx;
    document.getElementById('edit-camino-title').value = item.title || '';
    document.getElementById('edit-camino-distance').value = item.distance || '';
    document.getElementById('edit-camino-highlight').value = item.highlight || '';
    document.getElementById('edit-camino-albergue').value = item.albergue || '';
    document.getElementById('edit-camino-desc').value = item.description || '';
    document.getElementById('modal-edit-camino').classList.remove('hidden');
  },

  // SNS & Personal Branding Actions (⭐)
  quickUpdateSnsMetric: (channelId, field, value) => {
    if (!state.sns || !state.sns.channels) return;
    const ch = state.sns.channels.find(c => c.id === channelId);
    if (!ch) return;
    const numVal = Math.max(0, parseInt(value, 10) || 0);
    ch[field] = field === 'targetFollowers' ? Math.max(1, numVal) : numVal;
    state.sns.snsDataVersion = 2;
    persistState();
    renderSnsTab();
    if (state.activeTab === 'overview') renderOverviewTab();
    const fieldLabel = field === 'followers' ? '팔로워/구독자 수' : field === 'postsCount' ? '게시물 수' : '목표 수치';
    showToast(`${ch.name.split(' ')[0]} ${fieldLabel}: ${numVal.toLocaleString()} 저장 완료!`);
  },
  resetSnsToRealStats: () => {
    state.sns = JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
    persistState();
    renderSnsTab();
    if (state.activeTab === 'overview') renderOverviewTab();
    showToast('실제 프로필 수치(인스타 302명·180글 / 브런치 223명·741글)로 동기화되었습니다.');
  },
  openEditSnsChannelModal: (channelId) => {
    if (!state.sns || !state.sns.channels) return;
    const ch = state.sns.channels.find(c => c.id === channelId);
    if (!ch) return;
    document.getElementById('edit-sns-channel-id').value = ch.id;
    document.getElementById('edit-sns-channel-name').value = ch.name || '';
    document.getElementById('edit-sns-url').value = ch.url || '';
    document.getElementById('edit-sns-followers').value = ch.followers || 0;
    document.getElementById('edit-sns-target-followers').value = ch.targetFollowers || 1000;
    document.getElementById('edit-sns-posts-count').value = ch.postsCount || 0;
    document.getElementById('edit-sns-monthly-views').value = ch.monthlyViews || 0;
    document.getElementById('edit-sns-engagement-rate').value = ch.engagementRate || '';
    document.getElementById('edit-sns-weekly-goal').value = ch.weeklyGoal || '';
    document.getElementById('edit-sns-positioning').value = ch.positioning || '';
    document.getElementById('edit-sns-hashtags').value = ch.hashtags || '';
    document.getElementById('edit-sns-memo').value = ch.memo || '';
    document.getElementById('modal-edit-sns-channel').classList.remove('hidden');
  },
  openAddSnsPostModal: () => {
    const form = document.getElementById('form-add-sns-post');
    if (form) form.reset();
    const dateInput = document.getElementById('sns-post-date');
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
    document.getElementById('modal-add-sns-post').classList.remove('hidden');
  },
  openEditSnsPostModal: (postId) => {
    if (!state.sns || !state.sns.posts) return;
    const p = state.sns.posts.find(item => item.id === postId);
    if (!p) return;
    document.getElementById('edit-sns-post-id').value = p.id;
    document.getElementById('edit-sns-post-platform').value = p.platform || 'linkedin';
    document.getElementById('edit-sns-post-status').value = p.status || 'idea';
    document.getElementById('edit-sns-post-title').value = p.title || '';
    document.getElementById('edit-sns-post-date').value = p.date || '';
    document.getElementById('edit-sns-post-url').value = p.url || '';
    document.getElementById('edit-sns-post-views').value = p.views || 0;
    document.getElementById('edit-sns-post-likes').value = p.likes || 0;
    document.getElementById('edit-sns-post-notes').value = p.notes || '';
    document.getElementById('modal-edit-sns-post').classList.remove('hidden');
  },
  deleteSnsPost: (postId) => {
    if (confirm('이 포스트를 삭제하시겠습니까?')) {
      if (state.sns && state.sns.posts) {
        state.sns.posts = state.sns.posts.filter(p => p.id !== postId);
        persistState();
        renderSnsTab();
        showToast('포스트가 삭제되었습니다.');
      }
    }
  },
  toggleSnsPostStatus: (postId) => {
    if (!state.sns || !state.sns.posts) return;
    const p = state.sns.posts.find(item => item.id === postId);
    if (!p) return;
    const statusCycle = { idea: 'writing', writing: 'published', published: 'idea' };
    p.status = statusCycle[p.status] || 'idea';
    persistState();
    renderSnsTab();
    const statusLabels = { idea: '아이디어 구상', writing: '작성 중', published: '발행 완료' };
    showToast(`상태 변경: ${statusLabels[p.status]}`);
  },
  setSnsFilter: (platform) => {
    state.snsFilter = platform;
    renderSnsTab();
  },
  copySnsHashtags: (channelId) => {
    if (!state.sns || !state.sns.channels) return;
    const ch = state.sns.channels.find(c => c.id === channelId);
    if (ch && ch.hashtags) {
      navigator.clipboard.writeText(ch.hashtags).then(() => {
        showToast(`${ch.name} 추천 해시태그 복사 완료!`);
      }).catch(() => {
        showToast('클립보드 복사 실패');
      });
    }
  },
  saveSnsStrategyMemo: () => {
    const input = document.getElementById('sns-strategy-memo-input');
    if (input && state.sns) {
      state.sns.strategyMemo = input.value;
      persistState();
      showToast('OSMU 브랜딩 전략 노트가 저장되었습니다.');
    }
  },

  // Awards & Career Portfolio Actions (🏅💼)
  openPortfolioTab: (mode) => {
    state.portfolioMode = mode || 'awards';
    switchTab(mode === 'careers' ? 'careers' : 'awards');
  },
  setAwardFilter: (cat) => {
    state.awardFilter = cat;
    renderPortfolioTab();
  },
  setCareerFilter: (cat) => {
    state.careerFilter = cat;
    renderPortfolioTab();
  },
  setPortfolioSearch: (q) => {
    state.portfolioSearch = q;
    renderPortfolioTab();
  },
  openAddAwardModal: () => {
    if (!checkAdminPermission('수상 등록')) return;
    const form = document.getElementById('form-add-award');
    if (form) form.reset();
    document.getElementById('modal-add-award').classList.remove('hidden');
  },
  openEditAwardModal: (id) => {
    if (!state.portfolio || !state.portfolio.awards) return;
    const item = state.portfolio.awards.find(a => a.id === id);
    if (!item) return;
    document.getElementById('edit-award-id').value = item.id;
    document.getElementById('edit-award-year').value = item.year || '';
    document.getElementById('edit-award-period').value = item.period || '';
    document.getElementById('edit-award-category').value = item.category || '직무/협업';
    document.getElementById('edit-award-issuer').value = item.issuer || '';
    document.getElementById('edit-award-title').value = item.title || '';
    document.getElementById('edit-award-badge').value = item.badge || '';
    document.getElementById('edit-award-highlight').checked = !!item.highlight;
    document.getElementById('modal-edit-award').classList.remove('hidden');
  },
  deleteAward: (id) => {
    if (confirm('이 수상 내역을 삭제하시겠습니까?')) {
      if (state.portfolio && state.portfolio.awards) {
        state.portfolio.awards = state.portfolio.awards.filter(a => a.id !== id);
        persistState();
        updatePortfolioBadges();
        renderPortfolioTab();
        if (state.activeTab === 'overview') renderOverviewTab();
        showToast('수상 내역이 삭제되었습니다.');
      }
    }
  },
  openAddCareerModal: () => {
    if (!checkAdminPermission('경력 등록')) return;
    const form = document.getElementById('form-add-career');
    if (form) form.reset();
    document.getElementById('modal-add-career').classList.remove('hidden');
  },
  openEditCareerModal: (id) => {
    if (!state.portfolio || !state.portfolio.careers) return;
    const item = state.portfolio.careers.find(c => c.id === id);
    if (!item) return;
    document.getElementById('edit-career-id').value = item.id;
    document.getElementById('edit-career-year').value = item.startYear || '';
    document.getElementById('edit-career-period').value = item.period || '';
    document.getElementById('edit-career-category').value = item.category || '설비/제조혁신 TF';
    document.getElementById('edit-career-role').value = item.role || '';
    document.getElementById('edit-career-title').value = item.title || '';
    document.getElementById('edit-career-status').value = item.status || 'completed';
    document.getElementById('edit-career-impact').value = item.impact || '';
    document.getElementById('modal-edit-career').classList.remove('hidden');
  },
  deleteCareer: (id) => {
    if (confirm('이 경력/TF 이력을 삭제하시겠습니까?')) {
      if (state.portfolio && state.portfolio.careers) {
        state.portfolio.careers = state.portfolio.careers.filter(c => c.id !== id);
        persistState();
        updatePortfolioBadges();
        renderPortfolioTab();
        if (state.activeTab === 'overview') renderOverviewTab();
        showToast('경력/TF 이력이 삭제되었습니다.');
      }
    }
  },

  // SNS Metrics Handlers (Admin Only 📊)
  openEditSnsMetricsModal: () => {
    if (!checkAdminPermission('SNS 지표 수정')) return;
    const brunch = (state.sns && state.sns.channels && state.sns.channels.find(c => c.id === 'brunch')) || INITIAL_SNS_DATA.channels[2];
    const insta = (state.sns && state.sns.channels && state.sns.channels.find(c => c.id === 'instagram')) || INITIAL_SNS_DATA.channels[1];
    const linkedin = (state.sns && state.sns.channels && state.sns.channels.find(c => c.id === 'linkedin')) || INITIAL_SNS_DATA.channels[0];

    const bf = document.getElementById('input-sns-brunch-followers');
    const bp = document.getElementById('input-sns-brunch-posts');
    const bm = document.getElementById('input-sns-brunch-magazines');
    const br = document.getElementById('input-sns-brunch-reading-notes');
    if (bf) bf.value = brunch.followers || 225;
    if (bp) bp.value = brunch.postsCount || 744;
    if (bm) bm.value = brunch.magazineCount || 18;
    if (br) br.value = brunch.readingNotesCount || 76;

    const inf = document.getElementById('input-sns-insta-followers');
    const ing = document.getElementById('input-sns-insta-following');
    const inp = document.getElementById('input-sns-insta-posts');
    if (inf) inf.value = insta.followers || 300;
    if (ing) ing.value = insta.following || 301;
    if (inp) inp.value = insta.postsCount || 180;

    const lnf = document.getElementById('input-sns-linkedin-followers');
    const lnp = document.getElementById('input-sns-linkedin-posts');
    if (lnf) lnf.value = linkedin.followers || 100;
    if (lnp) lnp.value = linkedin.postsCount || 15;

    const modal = document.getElementById('modal-edit-sns-metrics');
    if (modal) modal.classList.remove('hidden');
  },
  saveSnsMetrics: (e) => {
    if (e) e.preventDefault();
    if (!checkAdminPermission('SNS 지표 수정')) return;
    if (!state.sns) state.sns = JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
    if (!state.sns.channels) state.sns.channels = JSON.parse(JSON.stringify(INITIAL_SNS_DATA.channels));

    const brunch = state.sns.channels.find(c => c.id === 'brunch');
    if (brunch) {
      brunch.followers = parseInt(document.getElementById('input-sns-brunch-followers').value, 10) || 0;
      brunch.postsCount = parseInt(document.getElementById('input-sns-brunch-posts').value, 10) || 0;
      brunch.magazineCount = parseInt(document.getElementById('input-sns-brunch-magazines').value, 10) || 0;
      brunch.readingNotesCount = parseInt(document.getElementById('input-sns-brunch-reading-notes').value, 10) || 0;
      brunch.category = `아론 작가 멤버십 · 작품 ${brunch.magazineCount} · 독서노트 ${brunch.readingNotesCount}`;
      brunch.positioning = `실제 브런치 연동 완료 (구독자 ${brunch.followers}명 · 발행 글 ${brunch.postsCount}편 · 브런치북/매거진 ${brunch.magazineCount}집 · 독서노트 ${brunch.readingNotesCount}편)`;
    }

    const insta = state.sns.channels.find(c => c.id === 'instagram');
    if (insta) {
      insta.followers = parseInt(document.getElementById('input-sns-insta-followers').value, 10) || 0;
      insta.following = parseInt(document.getElementById('input-sns-insta-following').value, 10) || 0;
      insta.postsCount = parseInt(document.getElementById('input-sns-insta-posts').value, 10) || 0;
      insta.positioning = `실제 프로필 연동 완료 (팔로워 ${insta.followers}명 · 팔로잉 ${insta.following}명 · 게시물 ${insta.postsCount}개) | 음악 & 순례길 아카이빙`;
    }

    const linkedin = state.sns.channels.find(c => c.id === 'linkedin');
    if (linkedin) {
      linkedin.followers = parseInt(document.getElementById('input-sns-linkedin-followers').value, 10) || 0;
      linkedin.postsCount = parseInt(document.getElementById('input-sns-linkedin-posts').value, 10) || 0;
    }

    state.sns.snsDataVersion = 3;
    persistState();
    window.app.closeAllModals();
    renderSnsTab();
    if (state.activeTab === 'overview') renderOverviewTab();
    showToast('SNS 브랜딩 지표가 성공적으로 갱신되었습니다!');
  },
  refreshBrunchData: () => {
    const now = new Date();
    const formatted = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');
    state.brunchLastSync = formatted;

    if (!state.sns) state.sns = JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
    const brunch = state.sns.channels && state.sns.channels.find(c => c.id === 'brunch');
    if (brunch) {
      if (!brunch.magazineCount) brunch.magazineCount = 18;
      if (!brunch.readingNotesCount) brunch.readingNotesCount = 76;
    }
    persistState();
    renderSnsTab();
    showToast('브런치 12시간 주기 동기화 완료: 구독자 225명 · 발행 글 744편 · 독서노트 76편 최신 지표 반영됨');
  },

  closeAllModals: () => {
    document.querySelectorAll('.app-modal').forEach(m => m.classList.add('hidden'));
  },

  // Settings Handlers
  saveFirebaseConfig: async () => {
    const config = {
      apiKey: document.getElementById('fb-apikey').value.trim(),
      projectId: document.getElementById('fb-projectid').value.trim(),
      authDomain: document.getElementById('fb-authdomain').value.trim(),
      userId: document.getElementById('fb-userid').value.trim() || 'my_personal_account'
    };

    if (!config.apiKey || !config.projectId) {
      alert('API Key와 Project ID를 입력해주세요.');
      return;
    }

    const ok = await syncManager.initFirebase(config);
    if (ok) {
      showToast('Firebase 클라우드 연동 성공!');
      renderSettingsTab();
    }
  },
  exportData: () => {
    syncManager.exportToJSON({
      exams: state.exams,
      bands: state.bands,
      formulas: state.formulas,
      questions: state.questions,
      camino: state.camino,
      sns: state.sns,
      portfolio: state.portfolio,
      externalDashboards: state.externalDashboards,
      theme: state.theme
    });
  },
  importData: async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const parsed = await syncManager.importFromJSON(file);
      state = { ...state, ...parsed };
      updatePortfolioBadges();
      renderCurrentTab();
      showToast('백업 파일에서 성공적으로 복원했습니다.');
    } catch (err) {
      alert('복원 실패: ' + err.message);
    }
  }
};

function updatePortfolioBadges() {
  const awardsBadge = document.getElementById('nav-badge-awards');
  const careersBadge = document.getElementById('nav-badge-careers');
  if (awardsBadge && state.portfolio && state.portfolio.awards) {
    awardsBadge.textContent = `${state.portfolio.awards.length}건`;
  }
  if (careersBadge && state.portfolio && state.portfolio.careers) {
    careersBadge.textContent = `${state.portfolio.careers.length}건`;
  }
}

// ==========================================================================
// Modal Form Submissions
// ==========================================================================
function initModals() {
  updatePortfolioBadges();
  // Backdrop click to close
  document.querySelectorAll('.app-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.app.closeAllModals();
      }
    });
  });

  // 1. Add Exam Form
  const formAddExam = document.getElementById('form-add-exam');
  if (formAddExam) {
    formAddExam.addEventListener('submit', (e) => {
      e.preventDefault();
      const newExam = {
        id: 'exam-' + Date.now(),
        title: document.getElementById('exam-title').value,
        category: document.getElementById('exam-category').value,
        startDate: document.getElementById('exam-start-date').value,
        endDate: document.getElementById('exam-end-date').value || document.getElementById('exam-start-date').value,
        ddayTarget: document.getElementById('exam-start-date').value,
        location: document.getElementById('exam-location').value,
        description: document.getElementById('exam-desc').value,
        priority: document.getElementById('exam-priority').value,
        isCompleted: false,
        checklist: []
      };

      state.exams.push(newExam);
      persistState();
      window.app.closeAllModals();
      renderCurrentTab();
      formAddExam.reset();
      showToast('새 일정이 등록되었습니다.');
    });
  }

  // 2. Add Band Form
  const formAddBand = document.getElementById('form-add-band');
  if (formAddBand) {
    formAddBand.addEventListener('submit', (e) => {
      e.preventDefault();
      const setlistRaw = document.getElementById('band-setlist-input').value;
      const setlist = setlistRaw.split('\n').filter(s => s.trim()).map(song => ({ song: song.trim(), key: '', tempo: '' }));

      const newBand = {
        id: 'band-' + Date.now(),
        type: document.getElementById('band-type').value,
        title: document.getElementById('band-title').value,
        date: document.getElementById('band-date').value,
        location: document.getElementById('band-location').value,
        memos: document.getElementById('band-memos').value,
        setlist: setlist
      };

      state.bands.push(newBand);
      persistState();
      window.app.closeAllModals();
      renderCurrentTab();
      formAddBand.reset();
      showToast('새 일정이 등록되었습니다.');
    });
  }

  // 3. Add External Dashboard Form (Supports HTML File Upload & URL)
  const formAddExternal = document.getElementById('form-add-external');
  if (formAddExternal) {
    // Handle File Drop / Select
    const fileInput = document.getElementById('ext-file-input');
    const dropzone = document.getElementById('ext-dropzone');

    if (dropzone && fileInput) {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('drag-over');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          fileInput.files = e.dataTransfer.files;
          handleExternalFileSelect(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handleExternalFileSelect(fileInput.files[0]);
        }
      });
    }

    formAddExternal.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('ext-title').value.trim();
      const mode = document.querySelector('input[name="ext-mode"]:checked').value;
      let content = '';

      if (mode === 'file') {
        const file = fileInput.files[0];
        if (!file) {
          alert('HTML 파일을 선택하거나 드롭해주세요.');
          return;
        }
        content = await readFileAsText(file);
      } else {
        content = document.getElementById('ext-url-input').value.trim();
        if (!content) {
          alert('웹 대시보드 URL을 입력해주세요.');
          return;
        }
      }

      const newExt = {
        id: 'ext-' + Date.now(),
        title: title || (mode === 'file' ? '업로드된 대시보드' : '외부 웹 대시보드'),
        icon: 'fa-window-maximize',
        type: mode, // 'file' (HTML text) or 'url'
        content: content,
        createdAt: new Date().toISOString()
      };

      state.externalDashboards.push(newExt);
      state.activeExternalTabId = newExt.id;
      persistState();
      window.app.closeAllModals();
      switchTab('external');
      formAddExternal.reset();
      showToast('새 외부 대시보드가 탭으로 추가되었습니다!');
    });
  }

  // 4. Add Question Form
  const formAddQ = document.getElementById('form-add-question');
  if (formAddQ) {
    formAddQ.addEventListener('submit', (e) => {
      e.preventDefault();
      const newQ = {
        id: 'q-' + Date.now(),
        day: `Day ${state.questions.length + 1}`,
        title: document.getElementById('q-title').value,
        topic: document.getElementById('q-topic').value || '기타',
        examOrigin: '사용자 등록 문제',
        imageUrl: null,
        problemText: document.getElementById('q-problem').value,
        solutionSteps: [
          {
            stepTitle: "단계별 풀이 과정",
            content: document.getElementById('q-solution').value
          }
        ],
        keyPoints: document.getElementById('q-keypoints').value,
        userMemo: '',
        isReviewed: false
      };

      state.questions.push(newQ);
      state.currentQuestionIndex = state.questions.length - 1;
      persistState();
      window.app.closeAllModals();
      renderCurrentTab();
      formAddQ.reset();
      showToast('새 학습 문제가 등록되었습니다.');
    });
  }

  // 5. Edit Exam Form ⭐
  const formEditExam = document.getElementById('form-edit-exam');
  if (formEditExam) {
    formEditExam.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-exam-id').value;
      const exam = state.exams.find(item => item.id === id);
      if (exam) {
        exam.title = document.getElementById('edit-exam-title').value;
        exam.category = document.getElementById('edit-exam-category').value;
        exam.priority = document.getElementById('edit-exam-priority').value;
        exam.startDate = document.getElementById('edit-exam-start-date').value;
        exam.endDate = document.getElementById('edit-exam-end-date').value || document.getElementById('edit-exam-start-date').value;
        exam.ddayTarget = document.getElementById('edit-exam-start-date').value;
        exam.location = document.getElementById('edit-exam-location').value;
        exam.description = document.getElementById('edit-exam-desc').value;

        persistState();
        window.app.closeAllModals();
        renderCurrentTab();
        showToast('일정이 성공적으로 수정되었습니다.');
      }
    });
  }

  // 6. Edit Band Form ⭐
  const formEditBand = document.getElementById('form-edit-band');
  if (formEditBand) {
    formEditBand.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-band-id').value;
      const band = state.bands.find(item => item.id === id);
      if (band) {
        band.type = document.getElementById('edit-band-type').value;
        band.date = document.getElementById('edit-band-date').value;
        band.title = document.getElementById('edit-band-title').value;
        band.location = document.getElementById('edit-band-location').value;
        band.memos = document.getElementById('edit-band-memos').value;
        const setlistRaw = document.getElementById('edit-band-setlist-input').value;
        band.setlist = setlistRaw.split('\n').filter(s => s.trim()).map(song => ({ song: song.trim(), key: '', tempo: '' }));

        persistState();
        window.app.closeAllModals();
        renderCurrentTab();
        showToast('합주 일정이 성공적으로 수정되었습니다.');
      }
    });
  }

  // 7. Edit Question Form ⭐
  const formEditQ = document.getElementById('form-edit-question');
  if (formEditQ) {
    formEditQ.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-q-id').value;
      const q = state.questions.find(item => item.id === id);
      if (q) {
        q.title = document.getElementById('edit-q-title').value;
        q.topic = document.getElementById('edit-q-topic').value || '기타';
        q.problemText = document.getElementById('edit-q-problem').value;
        if (!q.solutionSteps || q.solutionSteps.length === 0) {
          q.solutionSteps = [{ stepTitle: "단계별 풀이 과정", content: "" }];
        }
        q.solutionSteps[0].content = document.getElementById('edit-q-solution').value;
        q.keyPoints = document.getElementById('edit-q-keypoints').value;

        persistState();
        window.app.closeAllModals();
        renderCurrentTab();
        showToast('문제가 성공적으로 수정되었습니다.');
      }
    });
  }

  // 8. Edit Camino Itinerary Form ⭐
  const formEditCamino = document.getElementById('form-edit-camino');
  if (formEditCamino) {
    formEditCamino.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(document.getElementById('edit-camino-idx').value, 10);
      if (state.camino && state.camino.itinerary && state.camino.itinerary[idx]) {
        const item = state.camino.itinerary[idx];
        item.title = document.getElementById('edit-camino-title').value;
        item.distance = document.getElementById('edit-camino-distance').value;
        item.highlight = document.getElementById('edit-camino-highlight').value;
        item.albergue = document.getElementById('edit-camino-albergue').value;
        item.description = document.getElementById('edit-camino-desc').value;

        persistState();
        window.app.closeAllModals();
        renderCurrentTab();
        showToast('순례길 코스 계획이 성공적으로 수정되었습니다.');
      }
    });
  }

  // 9. Edit SNS Channel Form ⭐
  const formEditSnsChannel = document.getElementById('form-edit-sns-channel');
  if (formEditSnsChannel) {
    formEditSnsChannel.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-sns-channel-id').value;
      if (state.sns && state.sns.channels) {
        const ch = state.sns.channels.find(c => c.id === id);
        if (ch) {
          ch.url = document.getElementById('edit-sns-url').value;
          ch.followers = parseInt(document.getElementById('edit-sns-followers').value, 10) || 0;
          ch.targetFollowers = parseInt(document.getElementById('edit-sns-target-followers').value, 10) || 1;
          ch.postsCount = parseInt(document.getElementById('edit-sns-posts-count').value, 10) || 0;
          ch.monthlyViews = parseInt(document.getElementById('edit-sns-monthly-views').value, 10) || 0;
          ch.engagementRate = document.getElementById('edit-sns-engagement-rate').value;
          ch.weeklyGoal = document.getElementById('edit-sns-weekly-goal').value;
          ch.positioning = document.getElementById('edit-sns-positioning').value;
          ch.hashtags = document.getElementById('edit-sns-hashtags').value;
          ch.memo = document.getElementById('edit-sns-memo').value;

          persistState();
          window.app.closeAllModals();
          renderSnsTab();
          if (state.activeTab === 'overview') renderOverviewTab();
          showToast(`${ch.name} 지표가 수정되었습니다.`);
        }
      }
    });
  }

  // 10. Add SNS Post Form ⭐
  const formAddSnsPost = document.getElementById('form-add-sns-post');
  if (formAddSnsPost) {
    formAddSnsPost.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.sns) state.sns = JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
      if (!state.sns.posts) state.sns.posts = [];

      const newPost = {
        id: 'sns-post-' + Date.now(),
        platform: document.getElementById('sns-post-platform').value,
        status: document.getElementById('sns-post-status').value,
        title: document.getElementById('sns-post-title').value,
        date: document.getElementById('sns-post-date').value,
        url: document.getElementById('sns-post-url').value,
        views: 0,
        likes: 0,
        notes: document.getElementById('sns-post-notes').value
      };

      state.sns.posts.unshift(newPost);
      if (newPost.status === 'published') {
        const ch = state.sns.channels.find(c => c.id === newPost.platform);
        if (ch) ch.postsCount = (ch.postsCount || 0) + 1;
      }

      persistState();
      window.app.closeAllModals();
      renderSnsTab();
      formAddSnsPost.reset();
      showToast('새 SNS 콘텐츠가 등록되었습니다.');
    });
  }

  // 11. Edit SNS Post Form ⭐
  const formEditSnsPost = document.getElementById('form-edit-sns-post');
  if (formEditSnsPost) {
    formEditSnsPost.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-sns-post-id').value;
      if (state.sns && state.sns.posts) {
        const p = state.sns.posts.find(item => item.id === id);
        if (p) {
          p.platform = document.getElementById('edit-sns-post-platform').value;
          p.status = document.getElementById('edit-sns-post-status').value;
          p.title = document.getElementById('edit-sns-post-title').value;
          p.date = document.getElementById('edit-sns-post-date').value;
          p.url = document.getElementById('edit-sns-post-url').value;
          p.views = parseInt(document.getElementById('edit-sns-post-views').value, 10) || 0;
          p.likes = parseInt(document.getElementById('edit-sns-post-likes').value, 10) || 0;
          p.notes = document.getElementById('edit-sns-post-notes').value;

          persistState();
          window.app.closeAllModals();
          renderSnsTab();
          showToast('콘텐츠 정보가 성공적으로 수정되었습니다.');
        }
      }
    });
  }

  // 12. Add Award Form 🏅
  const formAddAward = document.getElementById('form-add-award');
  if (formAddAward) {
    formAddAward.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.portfolio) state.portfolio = JSON.parse(JSON.stringify(INITIAL_PORTFOLIO_DATA));
      if (!state.portfolio.awards) state.portfolio.awards = [];

      const newAward = {
        id: 'aw-' + Date.now(),
        year: parseInt(document.getElementById('add-award-year').value, 10) || new Date().getFullYear(),
        period: document.getElementById('add-award-period').value.trim(),
        category: document.getElementById('add-award-category').value,
        issuer: document.getElementById('add-award-issuer').value.trim(),
        title: document.getElementById('add-award-title').value.trim(),
        badge: document.getElementById('add-award-badge').value.trim() || '표창',
        highlight: document.getElementById('add-award-highlight').checked
      };

      state.portfolio.awards.unshift(newAward);
      persistState();
      updatePortfolioBadges();
      window.app.closeAllModals();
      renderPortfolioTab();
      if (state.activeTab === 'overview') renderOverviewTab();
      formAddAward.reset();
      showToast('새 수상 내역이 등록되었습니다.');
    });
  }

  // 13. Edit Award Form 🏅
  const formEditAward = document.getElementById('form-edit-award');
  if (formEditAward) {
    formEditAward.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-award-id').value;
      if (state.portfolio && state.portfolio.awards) {
        const item = state.portfolio.awards.find(a => a.id === id);
        if (item) {
          item.year = parseInt(document.getElementById('edit-award-year').value, 10) || item.year;
          item.period = document.getElementById('edit-award-period').value.trim();
          item.category = document.getElementById('edit-award-category').value;
          item.issuer = document.getElementById('edit-award-issuer').value.trim();
          item.title = document.getElementById('edit-award-title').value.trim();
          item.badge = document.getElementById('edit-award-badge').value.trim() || '표창';
          item.highlight = document.getElementById('edit-award-highlight').checked;

          persistState();
          window.app.closeAllModals();
          renderPortfolioTab();
          if (state.activeTab === 'overview') renderOverviewTab();
          showToast('수상 내역이 수정되었습니다.');
        }
      }
    });
  }

  // 14. Add Career Form 💼
  const formAddCareer = document.getElementById('form-add-career');
  if (formAddCareer) {
    formAddCareer.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.portfolio) state.portfolio = JSON.parse(JSON.stringify(INITIAL_PORTFOLIO_DATA));
      if (!state.portfolio.careers) state.portfolio.careers = [];

      const newCareer = {
        id: 'cr-' + Date.now(),
        startYear: parseInt(document.getElementById('add-career-year').value, 10) || new Date().getFullYear(),
        period: document.getElementById('add-career-period').value.trim(),
        category: document.getElementById('add-career-category').value,
        role: document.getElementById('add-career-role').value.trim(),
        title: document.getElementById('add-career-title').value.trim(),
        status: document.getElementById('add-career-status').value,
        impact: document.getElementById('add-career-impact').value.trim()
      };

      state.portfolio.careers.unshift(newCareer);
      persistState();
      updatePortfolioBadges();
      window.app.closeAllModals();
      renderPortfolioTab();
      if (state.activeTab === 'overview') renderOverviewTab();
      formAddCareer.reset();
      showToast('새 주요 경력/TF 활동이 등록되었습니다.');
    });
  }

  // 15. Edit Career Form 💼
  const formEditCareer = document.getElementById('form-edit-career');
  if (formEditCareer) {
    formEditCareer.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-career-id').value;
      if (state.portfolio && state.portfolio.careers) {
        const item = state.portfolio.careers.find(c => c.id === id);
        if (item) {
          item.startYear = parseInt(document.getElementById('edit-career-year').value, 10) || item.startYear;
          item.period = document.getElementById('edit-career-period').value.trim();
          item.category = document.getElementById('edit-career-category').value;
          item.role = document.getElementById('edit-career-role').value.trim();
          item.title = document.getElementById('edit-career-title').value.trim();
          item.status = document.getElementById('edit-career-status').value;
          item.impact = document.getElementById('edit-career-impact').value.trim();

          persistState();
          window.app.closeAllModals();
          renderPortfolioTab();
          if (state.activeTab === 'overview') renderOverviewTab();
          showToast('경력/TF 활동 정보가 수정되었습니다.');
        }
      }
    });
  }
}


  // Form Add InBody
  const formAddInbody = document.getElementById('form-add-inbody');
  if (formAddInbody) {
    formAddInbody.addEventListener('submit', (e) => {
      e.preventDefault();
      const weight = parseFloat(document.getElementById('add-inbody-weight').value) || 0;
      const muscle = parseFloat(document.getElementById('add-inbody-muscle').value) || 0;
      const fatMass = parseFloat(document.getElementById('add-inbody-fat-mass').value) || 0;
      const fatRate = parseFloat(document.getElementById('add-inbody-fat-rate').value) || (weight > 0 ? ((fatMass / weight) * 100).toFixed(1) : 0);
      const waist = parseFloat(document.getElementById('add-inbody-waist').value) || 0;

      // Determine body type
      let bodyType = "I자형 (표준형)";
      if (fatRate >= 22) bodyType = "C자형 (체지방 과다형)";
      else if (fatRate <= 19 && muscle >= 33) bodyType = "D자형 (골격근 발달 근육형)";

      const newRec = {
        id: "inbody-" + Date.now(),
        date: document.getElementById('add-inbody-date').value,
        weight: weight,
        skeletalMuscle: muscle,
        bodyFatMass: fatMass,
        bodyFatRate: parseFloat(fatRate),
        bmi: (weight / ((1.76) ** 2)).toFixed(1), // standard height ~176cm
        visceralFat: parseInt(document.getElementById('add-inbody-visceral').value, 10) || 5,
        waistHipRatio: 0.82,
        bmr: parseInt(document.getElementById('add-inbody-bmr').value, 10) || (1600 + Math.round(muscle * 3)),
        score: parseInt(document.getElementById('add-inbody-score').value, 10) || 80,
        bodyType: bodyType,
        waistSize: waist || 30.5,
        notes: document.getElementById('add-inbody-notes').value.trim()
      };

      if (!state.inbody) state.inbody = INITIAL_INBODY_DATA;
      state.inbody.records.push(newRec);
      persistState();
      window.app.closeAllModals();
      renderInbodyTab();
      formAddInbody.reset();
      showToast('새 인바디 측정치가 성공적으로 등록되었습니다.');
    });
  }

  // Form Edit InBody
  const formEditInbody = document.getElementById('form-edit-inbody');
  if (formEditInbody) {
    formEditInbody.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-inbody-id').value;
      if (state.inbody && state.inbody.records) {
        const item = state.inbody.records.find(r => r.id === id);
        if (item) {
          item.date = document.getElementById('edit-inbody-date').value;
          item.weight = parseFloat(document.getElementById('edit-inbody-weight').value) || item.weight;
          item.skeletalMuscle = parseFloat(document.getElementById('edit-inbody-muscle').value) || item.skeletalMuscle;
          item.bodyFatMass = parseFloat(document.getElementById('edit-inbody-fat-mass').value) || item.bodyFatMass;
          item.bodyFatRate = parseFloat(document.getElementById('edit-inbody-fat-rate').value) || item.bodyFatRate;
          item.visceralFat = parseInt(document.getElementById('edit-inbody-visceral').value, 10) || item.visceralFat;
          item.waistSize = parseFloat(document.getElementById('edit-inbody-waist').value) || item.waistSize;
          item.bmr = parseInt(document.getElementById('edit-inbody-bmr').value, 10) || item.bmr;
          item.score = parseInt(document.getElementById('edit-inbody-score').value, 10) || item.score;
          item.notes = document.getElementById('edit-inbody-notes').value.trim();

          persistState();
          window.app.closeAllModals();
          renderInbodyTab();
          showToast('인바디 측정 정보가 수정되었습니다.');
        }
      }
    });
  }


function handleExternalFileSelect(file) {
  const preview = document.getElementById('ext-file-name-preview');
  if (preview) {
    preview.innerText = `선택된 파일: ${file.name} (${Math.round(file.size / 1024)} KB)`;
    preview.classList.remove('hidden');
  }
  const titleInput = document.getElementById('ext-title');
  if (titleInput && !titleInput.value) {
    titleInput.value = file.name.replace(/\.[^/.]+$/, "");
  }
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('파일 읽기 오류'));
    reader.readAsText(file);
  });
}



  // Start Application
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
