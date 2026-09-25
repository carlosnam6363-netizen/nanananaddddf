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
const INITIAL_CAMINO_DATA = {
  title: "산티아고 순례길 트레킹 (Camino de Santiago)",
  startDate: "2026-11-07",
  endDate: "2026-11-09",
  ddayTarget: "2026-11-07",
  route: "사리아(Sarria) ~ 산티아고 데 콤포스텔라",
  totalDistance: "약 45~55 km (3일 하이라이트 구간)",
  status: "준비 중",
  packingList: [
    { text: "크레덴샬(순례자 여권) & 가리비 껍데기", category: "필수/서류", done: false },
    { text: "발목 지지용 트레킹화 (길들인 신발)", category: "의류/신발", done: false },
    { text: "30L~35L 경량 순례자 배낭", category: "장비", done: false },
    { text: "메리노울 트레킹 양말 (3켤레)", category: "의류/신발", done: false },
    { text: "바셀린 & 콤피드(물집 방지 패치)", category: "위생/약품", done: false },
    { text: "방수 판초 우의 & 배낭 레인커버", category: "의류/신발", done: false },
    { text: "트레킹 폴(스틱) & 무릎 보호대", category: "장비", done: false },
    { text: "초경량 침낭 라이너 (알베르게 숙박용)", category: "장비", done: false },
    { text: "해외 결제 카드(트래블로그) & 현금 약간", category: "필수/서류", done: false },
    { text: "유럽 eSIM/유심 & 대용량 보조배터리", category: "전자기기", done: false }
  ],
  itinerary: [
    {
      day: "Day 1 (11/07)",
      date: "2026-11-07",
      title: "에너지관리기사 시험 종료 후 순례길 출발",
      distance: "약 15 km",
      description: "오전 9시 자격증 시험을 후회 없이 끝마치고, 가벼워진 마음으로 순례길 출발지로 이동. 첫 크레덴샬 스탬프를 찍고 갈리시아 지방의 상쾌한 공기 속에서 첫 알베르게로 향합니다.",
      albergue: "사리아 / 포르토마린 인근 공립 알베르게",
      highlight: "새로운 챕터의 시작! 부엔 카미노(Buen Camino)!"
    },
    {
      day: "Day 2 (11/08)",
      date: "2026-11-08",
      title: "유칼립투스 숲길과 아기자기한 마을 트레킹",
      distance: "약 22 km",
      description: "노란색 조개껍데기 화살표를 따라 묵묵히 걸으며 생각 정리하기. 중간 스페인 마을의 작은 바(Bar)에서 따뜻한 카페 콘 레체와 또르띠야로 꿀맛 같은 휴식을 즐깁니다.",
      albergue: "팔라스 데 레이 / 아르수아 인근 알베르게",
      highlight: "나 자신과 마주하는 고요하고 평화로운 시간"
    },
    {
      day: "Day 3 (11/09)",
      date: "2026-11-09",
      title: "산티아고 대성당 광장 입성 & 완주",
      distance: "약 18 km",
      description: "최종 목적지인 산티아고 데 콤포스텔라 대성당 앞 오브라도이로 광장에 도착. 배낭을 내려놓고 푸른 하늘을 바라보며 벅찬 감동을 만끽하고, 순례자 사무소에서 완주증을 발급받습니다.",
      albergue: "산티아고 시내 부티크 호텔 / 호스텔",
      highlight: "완주의 희열 & 성당 앞 광장에서 느끼는 벅찬 감동"
    }
  ],
  memos: "에너지관리기사 시험 직후 지친 심신을 리셋하고 인생의 새로운 챕터를 준비하는 나만의 성찰 트레킹.\n'부엔 카미노(Buen Camino)!'를 마음에 품고 욕심 없이 한 걸음씩 걷기."
};

// 3대 SNS & 퍼스널 브랜딩 통합 관리 초기 데이터 (LinkedIn, Instagram, Brunch 실제 데이터 반영)
const INITIAL_SNS_DATA = {
  snsDataVersion: 2,
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
      memo: "링크드인은 비로그인 외부 조회 차단 정책이 적용되어 카드 내 숫자 칸에서 실제 1촌/팔로워 수를 클릭해 바로 입력·관리할 수 있습니다."
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
      followers: 302,
      targetFollowers: 500,
      postsCount: 180,
      weeklyGoal: "주 2회 피드/릴스 (밴드 합주, 산티아고 순례길, 일상 기록)",
      engagementRate: "6.8%",
      monthlyViews: 2800,
      positioning: "실제 프로필 연동 완료 (팔로워 302명 · 팔로잉 301명 · 게시물 180개) | 음악 & 순례길 아카이빙",
      hashtags: "#밴드합주 #산티아고순례길 #일상기록 #자기계발 #음악스타그램",
      memo: "실제 인스타그램 지표(팔로워 302명, 팔로잉 301명, 게시물 180개) 반영 완료 · 11월 산티아고 순례길 릴스 업로드 예정"
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
      category: "아론 작가 멤버십 · 작품 18 · 독서노트 75",
      followers: 223,
      targetFollowers: 500,
      postsCount: 741,
      weeklyGoal: "글쓰듯 말하고 싶습니다. 당신의 마음에 닿기를 바라며 연재",
      engagementRate: "9.2%",
      monthlyViews: 4500,
      positioning: "실제 브런치 연동 완료 (구독자 223명 · 발행 글 741편 · 브런치북/매거진 작품 18집 · 독서노트 75편)",
      hashtags: "#아론의브런치 #브런치작가멤버십 #에세이스트 #독서노트 #산티아고순례길",
      memo: "삼성전자 학생·회사원·에세이스트 '아론' | 국회국방위원장상 & 화성시 산문 장려상 수상 작가 아카이브"
    }
  ],
  posts: [
    {
      id: "sns-post-1",
      platform: "brunch",
      title: "[아론의 브런치] 741편의 에세이와 75편의 독서노트 연재 아카이브",
      status: "published",
      date: "2026-09-25",
      url: "https://brunch.co.kr/@musimtook",
      views: 1420,
      likes: 64,
      notes: "구독자 223명 · 작품 18개 · 아론 작가 멤버십 활발 운영 중"
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
      notes: "팔로워 302명 / 팔로잉 301명 네트워크 기반 합주 영상 및 순례길 하이라이트 공유"
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
  strategyMemo: "3대 채널 원소스 멀티유즈(OSMU) 운영 전략:\n1) 브런치스토리 (@musimtook · 구독자 223명 / 글 741편 / 독서노트 75편): 호흡이 긴 에세이 및 아론 작가 멤버십 칼럼 연재\n2) 인스타그램 (@namhyeon_kim_ · 팔로워 302명 / 게시물 180개): 음악 합주, 산티아고 순례길 현장 사진 및 숏폼 릴스 아카이빙\n3) 링크드인 (김남현): 삼성전자 TF 경험, 안전·에너지 기술자격, 화성시 청년정책협의체 분과장 활동 인사이트 공유"
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
const INITIAL_BAND_SCHEDULES = [
  {
    id: "band-1",
    type: "rehearsal", // rehearsal (합주) or performance (공연 관람)
    title: "정기 밴드 합주 (10월 1차)",
    date: "2026-10-04T16:00",
    location: "홍대 사운드스페이스 합주실 B룸",
    status: "scheduled",
    setlist: [
      { song: "한 페이지가 될 수 있게 (DAY6)", key: "D Major", tempo: "165 BPM", notes: "브릿지 솔로 싱코페이션 타이밍 집중" },
      { song: "스물다섯, 스물하나 (자우림)", key: "G Major", tempo: "92 BPM", notes: "2절 빌드업 다이내믹스 조절" },
      { song: "Hype Boy (Band Ver.)", key: "E Major", tempo: "120 BPM", notes: "인트로 베이스 그루브 & 드럼 킥 맞추기" }
    ],
    memos: "합주 15분 전 도착하여 튜닝 완료하기. 영상 녹화용 삼각대 지참."
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

// 3. 에너지관리기사 실기 핵심 공식 치트시트 & 데일리 기출 문제
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
    id: "q-1",
    day: "Day 1",
    title: "보일러 열효율 및 상당증발량 계산",
    topic: "열정산 / 효율",
    examOrigin: "실기 기출 빈출 1순위 (10점 배점형)",
    imageUrl: null, // 사용자가 사진 등록 가능
    problemText: `어느 보일러에서 시간당 250kg의 중유를 연소하여 압력 1.0 MPa(포화온도 179.9℃), 발생증기량 3,200 kg/h의 포화증기를 발생시키고 있다.
급수온도는 25℃이고, 중유의 저위발열량은 41,860 kJ/kg이다.
(단, 1.0 MPa 포화증기 엔탈피는 2,778 kJ/kg이고, 25℃ 물의 엔탈피는 105 kJ/kg, 기준 증발잠열은 2,257 kJ/kg이다.)
다음 물음에 답하시오.
1) 보일러의 열효율(%)을 구하시오.
2) 보일러의 상당증발량(kg/h)을 구하시오.`,
    solutionSteps: [
      {
        stepTitle: "1단계: 공식 확인 및 데이터 정리",
        content: `연료소비량 $G_f = 250 \\; kg/h$
실제증발량 $G_a = 3,200 \\; kg/h$
발생증기 엔탈피 $h_2 = 2,778 \\; kJ/kg$
급수 엔탈피 $h_1 = 105 \\; kJ/kg$
저위발열량 $H_l = 41,860 \\; kJ/kg$`
      },
      {
        stepTitle: "2단계: 1) 보일러 열효율(η) 계산",
        content: `$$\\eta = \\frac{G_a (h_2 - h_1)}{G_f \\times H_l} \\times 100$$
$$\\eta = \\frac{3,200 \\times (2,778 - 105)}{250 \\times 41,860} \\times 100$$
$$\\eta = \\frac{3,200 \\times 2,673}{10,465,000} \\times 100 = \\frac{8,553,600}{10,465,000} \\times 100 \\approx 81.734 \\; [\\%]$$
**정답: 81.73 %**`
      },
      {
        stepTitle: "3단계: 2) 상당증발량(Ge) 계산",
        content: `$$G_e = \\frac{G_a (h_2 - h_1)}{2,257}$$
$$G_e = \\frac{3,200 \\times (2,778 - 105)}{2,257} = \\frac{8,553,600}{2,257} \\approx 3,789.81 \\; [kg/h]$$
**정답: 3,789.81 kg/h**`
      }
    ],
    keyPoints: "★ 단위 주의: kJ 단위가 주어졌으므로 잠열은 539가 아니라 2,257 kJ/kg을 적용해야 감점을 피할 수 있습니다.",
    userMemo: "급수엔탈피 105 kJ/kg 빼먹지 말 것! (온도 x 비열)",
    isReviewed: true
  },
  {
    id: "q-2",
    day: "Day 2",
    title: "굴뚝 이론 통풍력 및 배기가스 밀도 계산",
    topic: "통풍장치",
    examOrigin: "실기 기출 유형 (6점)",
    imageUrl: null,
    problemText: `높이 45m의 굴뚝에서 외기 온도가 20℃이고, 배기가스의 평균 온도가 240℃이다.
표준상태(0℃, 1기압)에서 공기의 밀도는 1.293 kg/Nm³, 배기가스의 밀도는 1.340 kg/Nm³일 때, 굴뚝의 이론 통풍력(mmH2O)을 구하시오.`,
    solutionSteps: [
      {
        stepTitle: "1단계: 작동온도 상태의 외기 및 배기가스 밀도 산출",
        content: `$$\\gamma_a = 1.293 \\times \\frac{273}{273 + 20} = 1.293 \\times \\frac{273}{293} \\approx 1.2047 \\; [kg/m^3]$$
$$\\gamma_g = 1.340 \\times \\frac{273}{273 + 240} = 1.340 \\times \\frac{273}{513} \\approx 0.7131 \\; [kg/m^3]$$`
      },
      {
        stepTitle: "2단계: 이론 통풍력 공식 대입",
        content: `$$Z = H \\cdot (\\gamma_a - \\gamma_g) \\; [mmH_2O]$$
$$Z = 45 \\times (1.2047 - 0.7131) = 45 \\times 0.4916 \\approx 22.122 \\; [mmH_2O]$$
**정답: 22.12 mmH2O**`
      }
    ],
    keyPoints: "샤를의 법칙에 따른 온도 보정 (273 / 273+T) 원리를 완벽히 숙지해야 합니다.",
    userMemo: "외기밀도와 가스밀도가 각각 다르게 주어졌을 때는 간이공식(353) 대신 밀도 직접계산식을 써야 함!",
    isReviewed: false
  },
  {
    id: "q-3",
    day: "Day 3",
    title: "중유 연소 시 이론공기량 및 실제공기량",
    topic: "연소공학",
    examOrigin: "실기 기출 필수 (8점)",
    imageUrl: null,
    problemText: `탄소 85%, 수소 12%, 황 2%, 산소 1%의 조성을 가진 중유 1kg을 공기비(m) 1.25로 완전연소시킬 때, 다음을 구하시오.
1) 이론산소량 Oo (Nm³/kg)
2) 이론공기량 Ao (Nm³/kg)
3) 실제공기량 A (Nm³/kg)`,
    solutionSteps: [
      {
        stepTitle: "1단계: 이론산소량(Oo) 계산",
        content: `$$O_0 = 1.867 \\cdot C + 5.6 \\left( H - \\frac{O}{8} \\right) + 0.7 \\cdot S$$
$$O_0 = 1.867(0.85) + 5.6\\left(0.12 - \\frac{0.01}{8}\\right) + 0.7(0.02)$$
$$O_0 = 1.58695 + 5.6(0.11875) + 0.014 = 1.58695 + 0.665 + 0.014 = 2.26595 \\; [Nm^3/kg]$$
**정답: 2.27 Nm³/kg**`
      },
      {
        stepTitle: "2단계: 이론공기량(Ao) 계산",
        content: `$$A_0 = \\frac{O_0}{0.21} = \\frac{2.26595}{0.21} \\approx 10.7902 \\; [Nm^3/kg]$$
**정답: 10.79 Nm³/kg**`
      },
      {
        stepTitle: "3단계: 실제공기량(A) 계산",
        content: `$$A = m \\times A_0 = 1.25 \\times 10.7902 \\approx 13.4878 \\; [Nm^3/kg]$$
**정답: 13.49 Nm³/kg**`
      }
    ],
    keyPoints: "1.867(탄소), 5.6(수소), 0.7(황) 계수는 분자량(C:12, H2:2, S:32)과 22.4L 부피 환산에서 도출됩니다.",
    userMemo: "시험장에서 바로 튀어나올 수 있도록 계수 암기 필수!",
    isReviewed: false
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
  // 2. Cloud Sync & Storage Manager
  // =========================================================================
/**
 * Cloud Sync & Local Storage Module
 * - LocalStorage 자동 저장 및 오프라인 우선 보장
 * - Firebase Firestore 실시간 양방향 동기화 (옵션 A)
 * - JSON 백업 내보내기 / 복원 기능
 */

// [study-data imported]

const INITIAL_PORTFOLIO_DATA = {
  portfolioDataVersion: 1,
  awards: [
    { id: 'aw-2026-01', year: 2026, period: '2026.02', category: '봉사/공헌', issuer: '병무청장 표창', title: '모범 사회복무요원 표창장', badge: '병무청장 표창', highlight: true },
    { id: 'aw-2025-01', year: 2025, period: '2025.12', category: '봉사/공헌', issuer: '복지관장 표창', title: '모범 사회복무요원 표창장', badge: '기관장 표창', highlight: false },
    { id: 'aw-2024-02', year: 2024, period: '2024.06', category: '환경안전/보건', issuer: '사내 공모전', title: '작업중지권 숏폼 공모전 장려상', badge: '장려상', highlight: false },
    { id: 'aw-2024-01', year: 2024, period: '2024.05', category: '제조/모범/혁신', issuer: '메모리제조기술센터장 표창', title: '2024년 올해의 딜라이트 상 시상', badge: '센터장 표창', highlight: true },
    { id: 'aw-2023-03', year: 2023, period: '2023.12', category: '환경안전/보건', issuer: '메모리제조기술센터장 표창', title: '보건개선 우수사례 발표대회 최우수상', badge: '최우수상', highlight: true },
    { id: 'aw-2023-02', year: 2023, period: '2023.11', category: '기술/품질/학술', issuer: '제조&기술담당 부사장 표창', title: '제 22회 메모리 기술전 (환경안전 분야) 동상', badge: '부사장 표창 · 동상', highlight: true },
    { id: 'aw-2023-01', year: 2023, period: '2023.09', category: '환경안전/보건', issuer: '제조&기술담당 부사장 표창', title: '작업중지권 우수사례 포상 (최우수)', badge: '부사장 표창 · 최우수', highlight: true },
    { id: 'aw-2022-05', year: 2022, period: '2022.11', category: '환경안전/보건', issuer: '글로벌 제조&인프라총괄 부사장 표창', title: 'DS부문 환경안전인의 날 유공자 표창', badge: '총괄부사장 표창', highlight: true },
    { id: 'aw-2022-04', year: 2022, period: '2022.11', category: '기술/품질/학술', issuer: '제조&기술담당 부사장 표창', title: '제 21회 메모리 기술전 (환경안전 분야) 장려상', badge: '부사장 표창 · 장려상', highlight: true },
    { id: 'aw-2022-03', year: 2022, period: '2022.07', category: '직무/협업', issuer: 'D기술팀장 표창', title: '핵심가치 (고객우선 부문) 즉시상 시상', badge: 'D기술팀장 표창', highlight: false },
    { id: 'aw-2022-02', year: 2022, period: '2022.02 ~ 07', category: '제조/모범/혁신', issuer: '메모리제조기술센터장 표창', title: '모범사원상 연속 2회 추천 및 본인 시상', badge: '센터장 표창 (2회)', highlight: true },
    { id: 'aw-2022-01', year: 2022, period: '2022.01', category: '환경안전/보건', issuer: '사내 공모전', title: '안전 슬로건 공모전 동상', badge: '동상', highlight: false },
    { id: 'aw-2021-02', year: 2021, period: '2021.11', category: '기술/품질/학술', issuer: '글로벌 제조&인프라총괄 부사장 표창', title: 'DS부문 품질인의 날 분임조 우수상 (Best Practice상)', badge: '총괄부사장 표창 · BP상', highlight: true },
    { id: 'aw-2021-01', year: 2021, period: '2021.11', category: '환경안전/보건', issuer: '메모리제조기술센터장 표창', title: '안전문화 캠페인 우수부서 포상 금상 (대표 수상)', badge: '센터장 표창 · 금상', highlight: true },
    { id: 'aw-2020-06', year: 2020, period: '2020.11', category: '기술/품질/학술', issuer: '제조센터장 표창', title: '2020년 하반기 제안왕 시상 (최다 제안 등록)', badge: '제조센터장 표창 · 제안왕', highlight: true },
    { id: 'aw-2020-05', year: 2020, period: '2020.07', category: '환경안전/보건', issuer: '환경안전팀장 표창', title: '환경안전공모전 (웹툰 부문) 장려상', badge: '환경안전팀장 표창', highlight: false },
    { id: 'aw-2020-04', year: 2020, period: '2020.06', category: '직무/협업', issuer: '제조 시너지 PROJECT장 표창', title: '제조 시너지 P/J 협업 IDEA & 우수성과 공모전 (최다발굴 시상)', badge: '시너지 P/J장 표창', highlight: false },
    { id: 'aw-2020-03', year: 2020, period: '2020.06 ~ 2021.01', category: '환경안전/보건', issuer: '안전그룹장 표창', title: '기본지키기 서포터즈 1기 ~ 4기 연속 4회 시상', badge: '안전그룹장 표창 (4연속)', highlight: false },
    { id: 'aw-2020-02', year: 2020, period: '2020.04', category: '환경안전/보건', issuer: '환경안전팀장 표창', title: '환경안전공모전 (아이디어 부문) 은상', badge: '환경안전팀장 표창 · 은상', highlight: false },
    { id: 'aw-2020-01', year: 2020, period: '2020.02 ~ 2021.01', category: '직무/협업', issuer: 'D기술팀장 표창', title: 'D기술팀 DigNoel 상 4회 시상 추천 및 본인 시상', badge: 'D기술팀장 표창 (4회)', highlight: false },
    { id: 'aw-2018-01', year: 2018, period: '2018.07', category: '직무/협업', issuer: 'D기술팀장 표창', title: 'D기술팀 (Hidden Worker) 부문 즉시상 시상', badge: 'D기술팀장 표창', highlight: false },
    { id: 'aw-2016-01', year: 2016, period: '2016.01', category: '환경안전/보건', issuer: 'D기술팀장 표창', title: 'D기술팀 환경안전 부문 즉시상 시상', badge: 'D기술팀장 표창', highlight: false },
    { id: 'aw-2014-01', year: 2014, period: '2014.11', category: '제조/모범/혁신', issuer: '제조센터장 표창', title: '슈퍼루키 프로젝트 성과 발표회 우수 시상', badge: '제조센터장 표창', highlight: true }
  ],
  careers: [
    { id: 'cr-15', startYear: 2024, period: '2024.06 ~ 2024.10', category: '설비/제조혁신 TF', role: '기술팀 담당', title: '보전작업 mapping 및 설비 유지보수체계 고도화 TF (기술팀 담당)', status: 'completed', impact: '설비 보전작업 표준 매핑 및 유지보수 체계 고도화 수행' },
    { id: 'cr-14', startYear: 2024, period: '2024.04 ~ 2024.07', category: '환경안전/에너지', role: '기술팀 대표', title: '작업중지권 확대 적용 TF (기술팀 대표)', status: 'completed', impact: '현장 자율 안전 문화 확산 및 작업중지권 제도 안착 기여' },
    { id: 'cr-13', startYear: 2024, period: '2024.04 ~ 2024.08', category: '조직문화/협의체', role: '기술팀 위원', title: '화성 소통협의체 (한마음협의회 산하 조직) (기술팀 위원)', status: 'completed', impact: '화성 캠퍼스 임직원 소통 채널 운영 및 현안 개선' },
    { id: 'cr-12', startYear: 2024, period: '2024.03 ~ 현재', category: '환경안전/에너지', role: '기술팀 대표', title: '기술팀 에너지 절감 TF 활동 (기술팀 대표)', status: 'ongoing', impact: '설비 유틸리티·전력 절감 과제 발굴 및 에너지 효율화 추진' },
    { id: 'cr-11', startYear: 2024, period: '2024.02 ~ 현재', category: '설비/제조혁신 TF', role: '기술팀 대표', title: 'GEN.Pade 설비 대표 Engineer 활동 (기술팀 대표)', status: 'ongoing', impact: '차세대 설비 표준화 및 핵심 기술 엔지니어링 대표 수행' },
    { id: 'cr-10', startYear: 2024, period: '2024.01 ~ 현재', category: '환경안전/에너지', role: '기술팀 대표', title: '환경안전 개선 TF (중대재해 Zero, Smart 안전 파견 등) (기술팀 대표)', status: 'ongoing', impact: '중대재해 Zero 달성 및 스마트 안전 기술 현장 도입 리딩' },
    { id: 'cr-09', startYear: 2023, period: '2023.09 ~ 2024.02', category: '조직문화/협의체', role: '그룹 대표', title: '그룹 Change Agent (그룹 대표)', status: 'completed', impact: '그룹 조직문화 혁신 및 세대·직무 간 시너지 활성화 주도' },
    { id: 'cr-08', startYear: 2023, period: '2023.08 ~ 현재', category: '사내강사/리더십', role: '사내강사', title: 'DS부문 안전문화 사내강사 활동 (설비/공정 엔지니어 대상 안전 강의)', status: 'ongoing', impact: '설비·공정 엔지니어 맞춤형 실무 안전문화 교육 출강' },
    { id: 'cr-07', startYear: 2023, period: '2023.02 ~ 현재', category: '설비/제조혁신 TF', role: '그룹 대표', title: '그룹 자산담당자 (유휴설비 매각 및 이전 업무) (그룹 대표)', status: 'ongoing', impact: '그룹 내 유휴 설비 자산 최적화, 매각 및 거점 이전 총괄 관리' },
    { id: 'cr-06', startYear: 2023, period: '2023.02 ~ 현재', category: '설비/제조혁신 TF', role: '기술팀 대표', title: '제조기술센터 설비 이설 TF 활동 (화성 ↔ 평택) (기술팀 대표)', status: 'ongoing', impact: '화성↔평택 캠퍼스 간 핵심 반도체 설비 이설 기술팀 총괄 대응' },
    { id: 'cr-05', startYear: 2022, period: '2022.12 ~ 현재', category: '환경안전/에너지', role: '그룹 대표', title: '사업장 위험성평가 실무자 (그룹 대표)', status: 'ongoing', impact: '공정·작업별 유해위험요인 발굴 및 위험성 감소대책 수립' },
    { id: 'cr-04', startYear: 2022, period: '2022.10 ~ 2024.09', category: '환경안전/에너지', role: '기술팀 대표', title: '초순수(UPW) 절감 TF 활동 (기술팀 대표)', status: 'completed', impact: '반도체 공정 초순수(UPW) 절감 아이템 발굴 및 수자원 절약 달성' },
    { id: 'cr-03', startYear: 2022, period: '2022.02 ~ 현재', category: '환경안전/에너지', role: '그룹 대표', title: '부서 환경안전보조자 활동 (그룹 대표)', status: 'ongoing', impact: '부서 내 밀착형 환경안전 관리 및 상시 안전점검 체계 운영' },
    { id: 'cr-02', startYear: 2022, period: '2022.01 ~ 2022.11', category: '환경안전/에너지', role: '기술팀 대표', title: '제조기술센터 안전문화 1팀 1사례 TF 활동 (기술팀 대표)', status: 'completed', impact: '현장 체감형 안전문화 우수사례 발굴 및 센터 전파' },
    { id: 'cr-01', startYear: 2021, period: '2021.02 ~ 2023.09', category: '사내강사/리더십', role: '그룹 대표', title: '부서 신입사원 멘토 활동 (그룹 대표)', status: 'completed', impact: '신입 엔지니어 직무 온보딩 멘토링 및 조기 전력화 지원' }
  ]
};

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
        const upgradedSns = (parsed.sns && parsed.sns.snsDataVersion === 2)
          ? parsed.sns
          : JSON.parse(JSON.stringify(INITIAL_SNS_DATA));
        const upgradedPortfolio = (parsed.portfolio && parsed.portfolio.portfolioDataVersion === 1)
          ? parsed.portfolio
          : JSON.parse(JSON.stringify(INITIAL_PORTFOLIO_DATA));
        if (!parsed.sns || parsed.sns.snsDataVersion !== 2 || !parsed.portfolio || parsed.portfolio.portfolioDataVersion !== 1) {
          parsed.sns = upgradedSns;
          parsed.portfolio = upgradedPortfolio;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        }
        return {
          exams: parsed.exams || INITIAL_EXAM_SCHEDULES,
          bands: parsed.bands || INITIAL_BAND_SCHEDULES,
          formulas: parsed.formulas || INITIAL_ENERGY_FORMULAS,
          questions: parsed.questions || INITIAL_ENERGY_QUESTIONS,
          externalDashboards: parsed.externalDashboards || INITIAL_EXTERNAL_DASHBOARDS,
          dischargeDate: parsed.dischargeDate || INITIAL_DISCHARGE_DATE,
          camino: parsed.camino || INITIAL_CAMINO_DATA,
          sns: upgradedSns,
          portfolio: upgradedPortfolio,
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
      externalDashboards: INITIAL_EXTERNAL_DASHBOARDS,
      dischargeDate: INITIAL_DISCHARGE_DATE,
      camino: INITIAL_CAMINO_DATA,
      sns: INITIAL_SNS_DATA,
      portfolio: INITIAL_PORTFOLIO_DATA,
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

// Global App State
let state = {
  exams: [],
  bands: [],
  formulas: [],
  questions: [],
  externalDashboards: [],
  dischargeDate: INITIAL_DISCHARGE_DATE,
  camino: INITIAL_CAMINO_DATA,
  sns: INITIAL_SNS_DATA,
  portfolio: INITIAL_PORTFOLIO_DATA,
  portfolioMode: 'awards', // 'awards' | 'careers' | 'timeline'
  awardFilter: 'all',
  careerFilter: 'all',
  portfolioSearch: '',
  theme: 'dark',
  activeTab: 'overview',
  activeExternalTabId: null,
  examFilter: 'all',
  bandFilter: 'all',
  snsFilter: 'all',
  energyStudySubtab: 'daily', // 'daily', 'formulas', 'upload'
  currentQuestionIndex: 0
};

// ==========================================================================
// Initialization
// ==========================================================================
function initApp() {
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

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW fail', err));
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
  // Desktop Sidebar Nav Links
  document.querySelectorAll('[data-nav-tab]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tabName = btn.getAttribute('data-nav-tab');
      switchTab(tabName);
    });
  });

  // Mobile Bottom Nav Links
  document.querySelectorAll('[data-mobile-tab]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tabName = btn.getAttribute('data-mobile-tab');
      switchTab(tabName);
    });
  });

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

  // Update desktop navigation active state
  document.querySelectorAll('[data-nav-tab]').forEach((btn) => {
    if (btn.getAttribute('data-nav-tab') === tabName) {
      btn.classList.add('nav-tab-active', 'text-blue-500', 'font-semibold');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('nav-tab-active', 'text-blue-500', 'font-semibold');
      btn.classList.add('text-slate-400');
    }
  });

  // Update mobile navigation active state
  document.querySelectorAll('[data-mobile-tab]').forEach((btn) => {
    if (btn.getAttribute('data-mobile-tab') === tabName) {
      btn.classList.add('mobile-tab-active', 'text-sky-400');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('mobile-tab-active', 'text-sky-400');
      btn.classList.add('text-slate-400');
    }
  });

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
      title: '산티아고 순례길 트레킹 출발',
      targetDate: camino.startDate || '2026-11-07',
      endDate: camino.endDate || '2026-11-09',
      category: '순례/힐링',
      icon: 'fa-person-hiking',
      type: 'camino',
      tab: 'camino',
      location: '스페인 사리아'
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
            <span class="text-[11px] text-slate-400">11.07 ~ 11.09</span>
          </div>
          <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-person-hiking text-amber-400 text-lg"></i>
            <span>산티아고 순례길</span>
          </h2>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
            에너지 시험 직후 떠나는 나만의 성찰과 힐링. 스페인 갈리시아 길 걷기.
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
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">11/7 ~ 11/9</span>
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
            <button onclick="window.app.openAddExternalModal()" class="text-xs text-cyan-400 hover:text-cyan-300 font-bold">
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
function renderCaminoTab() {
  const container = document.getElementById('tab-content-camino');
  if (!container) return;

  const camino = state.camino || INITIAL_CAMINO_DATA;
  const ddayCamino = calculateDDay(camino.startDate);
  const totalPacking = camino.packingList ? camino.packingList.length : 0;
  const donePacking = camino.packingList ? camino.packingList.filter(p => p.done).length : 0;
  const packPercent = totalPacking > 0 ? Math.round((donePacking / totalPacking) * 100) : 0;

  container.innerHTML = `
    <!-- Tab Header Banner -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-compass"></i> 부엔 카미노 (Buen Camino)
            </span>
            <span class="text-xs text-slate-400">2026년 11월 7일 ~ 11월 9일 (3일간)</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-person-hiking text-amber-400"></i>
            산티아고 순례길 트레킹 (Camino de Santiago)
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            에너지관리기사 시험을 마친 직후, 지친 마음을 비우고 새로운 에너지를 채우는 나만의 순례길.
            노란 화살표를 따라 한 걸음씩 걷는 힐링과 사색의 여정입니다.
          </p>
        </div>

        <div class="bg-slate-800/90 border border-amber-400/40 rounded-xl p-4 sm:p-6 text-center min-w-[200px] shadow-lg">
          <div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">순례길 출발까지</div>
          <div class="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight">
            ${ddayCamino.days >= 0 ? `D-${ddayCamino.days}` : `D+${Math.abs(ddayCamino.days)}`}
          </div>
          <div class="text-xs text-slate-400 mt-1">
            ${ddayCamino.days >= 0 ? `약 ${Math.floor(ddayCamino.days / 7)}주 후 출발` : '여정 진행 중 / 완료'}
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content 2-Column: Itinerary vs Packing List -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left 2 Cols: 일자별 트레킹 코스 계획 -->
      <div class="lg:col-span-2 space-y-6">
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-route text-amber-400"></i>
              3일간의 일자별 트레킹 코스 & 알베르게 계획
            </h2>
            <span class="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
              총 거리: ${camino.totalDistance}
            </span>
          </div>

          <div class="space-y-4">
            ${camino.itinerary.map((item, idx) => `
              <div class="p-5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition relative">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                      ${item.day}
                    </span>
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
                  <span>숙소/알베르게: <b class="text-slate-200">${item.albergue}</b></span>
                </div>
              </div>
            `).join('')}
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
          <p class="text-[11px] text-slate-400 mt-2">
            💡 <b>순례길 팁</b>: 배낭 무게는 본인 몸무게의 10% 이내가 이상적입니다. 물집 방지를 위해 발가락 사이에 바셀린을 바르고 양말을 수시로 말려주세요.
          </p>
        </div>
      </div>

      <!-- Right 1 Col: 순례자 필수 준비물 체크리스트 (Packing Checklist) -->
      <div class="space-y-6">
        <div class="glass-panel rounded-2xl p-6 border border-amber-500/30">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-amber-400"></i>
              순례자 배낭 패킹 체크리스트
            </h3>
          </div>

          <!-- Progress Bar -->
          <div class="mb-4">
            <div class="flex justify-between text-xs text-slate-400 mb-1">
              <span>패킹 준비율</span>
              <span class="font-bold text-amber-400">${donePacking}/${totalPacking} (${packPercent}%)</span>
            </div>
            <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-300" style="width: ${packPercent}%"></div>
            </div>
          </div>

          <!-- Checklist items -->
          <div class="space-y-2 mb-4 max-h-[480px] overflow-y-auto pr-1">
            ${camino.packingList.map((item, idx) => `
              <div class="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40 flex items-center justify-between transition">
                <label class="flex items-center gap-2.5 text-xs text-slate-200 cursor-pointer flex-1 min-w-0">
                  <input type="checkbox" ${item.done ? 'checked' : ''} onchange="window.app.toggleCaminoPacking(${idx})" class="rounded text-amber-500 bg-slate-700 border-slate-600 focus:ring-0">
                  <span class="${item.done ? 'todo-checked' : ''} truncate">${item.text}</span>
                </label>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 ml-2 flex-shrink-0">${item.category}</span>
                <button onclick="window.app.deleteCaminoPackingItem(${idx})" class="text-slate-500 hover:text-red-400 text-xs ml-1.5 flex-shrink-0">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            `).join('')}
          </div>

          <!-- Add new item input -->
          <form onsubmit="event.preventDefault(); window.app.addCaminoPackingItem();" class="flex gap-2">
            <input type="text" id="new-camino-packing-input" placeholder="새 준비물 추가..." class="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400">
            <button type="submit" class="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs transition">
              추가
            </button>
          </form>
        </div>
      </div>

    </div>
  `;
}

// ==========================================================================
// 2. Exam & Academic Schedule Tab
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
              <button onclick="window.app.deleteExam('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition flex items-center gap-1">
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
            <button onclick="window.app.deleteBand('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition flex items-center gap-1">
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
function renderEnergyTab() {
  const container = document.getElementById('tab-content-energy');
  if (!container) return;

  const currentQ = state.questions[state.currentQuestionIndex] || state.questions[0];

  container.innerHTML = `
    <!-- Tab Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-graduation-cap text-amber-400"></i>
          에너지관리기사 실기 데일리 학습 노트
        </h1>
        <p class="text-xs text-slate-400 mt-1">
          계산 문제 풀이와 공식, 사진 첨부 및 AI 해설 정리를 데일리로 확인합니다.
        </p>
      </div>

      <!-- Sub-tabs: 데일리 문제 / 공식 모음 / AI 풀이 연동 안내 -->
      <div class="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs">
        <button onclick="window.app.setEnergySubtab('daily')" class="px-3 py-1.5 rounded-lg font-bold transition ${state.energyStudySubtab === 'daily' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:text-white'}">
          데일리 기출 풀이
        </button>
        <button onclick="window.app.setEnergySubtab('formulas')" class="px-3 py-1.5 rounded-lg font-bold transition ${state.energyStudySubtab === 'formulas' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:text-white'}">
          필수 공식 치트시트
        </button>
        <button onclick="window.app.setEnergySubtab('upload')" class="px-3 py-1.5 rounded-lg font-bold transition ${state.energyStudySubtab === 'upload' ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:text-white'}">
          문제 사진 & AI 풀이 연동
        </button>
      </div>
    </div>

    <!-- View based on Subtab -->
    ${state.energyStudySubtab === 'daily' ? renderDailyQuestionView(currentQ) : ''}
    ${state.energyStudySubtab === 'formulas' ? renderFormulasView() : ''}
    ${state.energyStudySubtab === 'upload' ? renderUploadGuidanceView() : ''}
  `;

  // Trigger KaTeX rendering for math formulas
  setTimeout(initKaTeX, 50);
}

function renderDailyQuestionView(q) {
  if (!q) return `<p class="text-slate-400 text-center py-12">등록된 문제가 없습니다.</p>`;

  return `
    <div class="space-y-6">
      <!-- Question Navigation Bar -->
      <div class="flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-xs">
        <div class="flex items-center gap-2 overflow-x-auto">
          ${state.questions.map((item, idx) => `
            <button onclick="window.app.selectQuestionIndex(${idx})" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.currentQuestionIndex === idx ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
              ${item.day} ${item.isReviewed ? '✓' : ''}
            </button>
          `).join('')}
        </div>

        <button onclick="window.app.toggleQuestionReviewed('${q.id}')" class="px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 flex-shrink-0 ${q.isReviewed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-700 text-slate-300'}">
          <i class="fa-solid fa-check"></i>
          <span>${q.isReviewed ? '오늘 복습 완료' : '복습 완료 체크'}</span>
        </button>
      </div>

      <!-- Problem Statement Card -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs">
              ${q.topic}
            </span>
            <span class="text-xs text-slate-400">${q.examOrigin}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-slate-400">${q.day}</span>
            <button onclick="window.app.openEditQuestionModal('${q.id}')" class="text-[11px] text-amber-300 hover:text-white px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/30 transition flex items-center gap-1">
              <i class="fa-solid fa-pen-to-square"></i> 문제 수정
            </button>
            <button onclick="window.app.deleteQuestion('${q.id}')" class="text-[11px] text-red-400 hover:text-red-300 px-2.5 py-1 rounded bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition flex items-center gap-1">
              <i class="fa-regular fa-trash-can"></i> 삭제
            </button>
          </div>
        </div>

        <h2 class="text-lg font-bold text-white mb-4">${q.title}</h2>

        ${q.imageUrl ? `
          <div class="mb-4 rounded-xl overflow-hidden border border-slate-700 max-h-96">
            <img src="${q.imageUrl}" alt="문제 사진" class="w-full object-contain bg-black/40">
          </div>
        ` : ''}

        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-line font-sans mb-4">
          ${q.problemText}
        </div>

        <!-- Key Points Badge -->
        ${q.keyPoints ? `
          <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300/90 leading-relaxed">
            <i class="fa-solid fa-lightbulb mr-1"></i> ${q.keyPoints}
          </div>
        ` : ''}
      </div>

      <!-- Step-by-Step AI Solution Card -->
      <div class="glass-panel rounded-2xl p-6 border border-sky-500/30 bg-gradient-to-br from-slate-900 to-sky-950/20">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-calculator text-sky-400"></i>
            단계별 계산 풀이 과정 및 정답
          </h3>
          <span class="text-xs px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
            수식 렌더링 (KaTeX)
          </span>
        </div>

        <div class="space-y-4">
          ${q.solutionSteps.map((step, sIdx) => `
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 class="text-xs font-bold text-sky-300 mb-2">${step.stepTitle}</h4>
              <div class="text-sm text-slate-200 leading-relaxed formula-math-content">
                ${step.content.replace(/\n/g, '<br>')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- User Memo Section -->
        <div class="mt-6 pt-4 border-t border-slate-700/50">
          <label class="block text-xs font-bold text-slate-400 mb-1.5">
            <i class="fa-regular fa-pen-to-square"></i> 내 오답 노트 / 복습 메모
          </label>
          <div class="flex gap-2">
            <input type="text" id="memo-input-${q.id}" value="${q.userMemo || ''}" placeholder="시험 전 반드시 외워야 할 주의사항을 적어두세요..." class="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400">
            <button onclick="window.app.saveQuestionMemo('${q.id}')" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-bold transition">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFormulasView() {
  return `
    <div class="space-y-4">
      <div class="p-4 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
        <span>실기 시험에 자주 출제되는 필수 핵심 공식 모음입니다.</span>
        <span class="text-amber-400 font-bold">총 ${state.formulas.length}개 공식</span>
      </div>

      <div class="grid grid-cols-1 gap-4">
        ${state.formulas.map(f => `
          <div class="glass-panel rounded-xl p-5 border border-slate-700/60 hover:border-sky-500/40 transition">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-sky-400 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                ${f.category}
              </span>
              <span class="text-xs text-slate-400">${f.name}</span>
            </div>

            <!-- Formula display -->
            <div class="my-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center text-white formula-math-content">
              $$${f.formula}$$
            </div>

            <p class="text-xs text-slate-400 leading-relaxed bg-slate-800/40 p-3 rounded-lg">
              ${f.description}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderUploadGuidanceView() {
  return `
    <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/30 max-w-2xl mx-auto">
      <div class="text-center mb-6">
        <div class="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl mx-auto mb-3">
          <i class="fa-solid fa-camera"></i>
        </div>
        <h2 class="text-xl font-bold text-white">사진 업로드 & AI 해답 생성 안내</h2>
        <p class="text-xs text-slate-300 mt-2 leading-relaxed">
          책이나 시험지에서 헷갈리는 계산 문제 사진을 올려주시면, AI가 단위 분석, 공식 적용, 단계별 해답과 설명 다이어그램을 정리하여 바로 이 학습 탭에 카드로 추가해 드립니다!
        </p>
      </div>

      <div class="space-y-4 mb-6 text-xs text-slate-300">
        <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
          <div>
            <b class="text-white">대화창에 사진 올리기</b>
            <p class="text-slate-400 mt-0.5">대화창(채팅창)에 문제 사진을 드래그하거나 붙여넣기(Ctrl+V)하여 전송해 주세요.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
          <div>
            <b class="text-white">AI 자동 분석 및 풀이 생성</b>
            <p class="text-slate-400 mt-0.5">AI가 문제의 공식과 풀이 과정을 LaTeX 수식 및 필요시 시각 설명 이미지로 명쾌하게 정리합니다.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
          <div>
            <b class="text-white">대시보드에 Day별 카드로 자동 탑재</b>
            <p class="text-slate-400 mt-0.5">정리된 문제가 학습 탭에 등록되어 스마트폰과 PC에서 매일 복습할 수 있게 됩니다.</p>
          </div>
        </div>
      </div>

      <!-- Quick manual question adder -->
      <button onclick="window.app.openAddQuestionModal()" class="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-sky-500/20 transition flex items-center justify-center gap-2">
        <i class="fa-solid fa-plus"></i> 직접 문제 카드 수동 추가하기
      </button>
    </div>
  `;
}

// ==========================================================================
// 5. External Dashboard 연동 탭 (⭐ 사용자가 요청한 핵심 기능)
// ==========================================================================
function renderExternalTab() {
  const container = document.getElementById('tab-content-external');
  if (!container) return;

  const activeExt = state.externalDashboards.find(e => e.id === state.activeExternalTabId) || state.externalDashboards[0];

  container.innerHTML = `
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

        <button onclick="window.app.openAddExternalModal()" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-sky-400 border border-sky-400/30 flex items-center gap-1.5 whitespace-nowrap transition">
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
        <button onclick="window.app.openAddExternalModal()" class="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition">
          <i class="fa-solid fa-plus mr-1"></i> 첫 번째 대시보드 추가하기
        </button>
      </div>
    `}
  `;

  // Render content into iframe safely
  if (activeExt) {
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

// ==========================================================================
// 5-B. SNS & 퍼스널 브랜딩 분석 탭 (⭐ 신규 추가)
// ==========================================================================
function renderSnsTab() {
  const container = document.getElementById('tab-content-sns');
  if (!container) return;

  const snsData = state.sns || INITIAL_SNS_DATA;
  const channels = snsData.channels || INITIAL_SNS_DATA.channels;
  const posts = snsData.posts || INITIAL_SNS_DATA.posts;

  // 필터링된 포스트 목록
  const filteredPosts = posts.filter(p => {
    if (state.snsFilter === 'all') return true;
    return p.platform === state.snsFilter;
  });

  // 통합 통계 계산
  const totalFollowers = channels.reduce((sum, ch) => sum + (Number(ch.followers) || 0), 0);
  const totalTargetFollowers = channels.reduce((sum, ch) => sum + (Number(ch.targetFollowers) || 0), 0);
  const totalGoalPercent = totalTargetFollowers > 0 ? Math.min(100, Math.round((totalFollowers / totalTargetFollowers) * 100)) : 0;
  const totalViews = channels.reduce((sum, ch) => sum + (Number(ch.monthlyViews) || 0), 0);
  const totalPostsCount = channels.reduce((sum, ch) => sum + (Number(ch.postsCount) || 0), 0);

  const ideaCount = posts.filter(p => p.status === 'idea').length;
  const writingCount = posts.filter(p => p.status === 'writing').length;
  const publishedCount = posts.filter(p => p.status === 'published').length;

  container.innerHTML = `
    <!-- Top Header Banner -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-pink-500/40 bg-gradient-to-r from-slate-900 via-pink-950/30 to-slate-900 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-share-nodes"></i> 퍼스널 브랜딩 허브
            </span>
            <span class="text-xs text-slate-400">LinkedIn · Instagram · Brunch Story 3대 채널 통합 관리</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-chart-line text-pink-400"></i>
            SNS & 퍼스널 브랜딩 분석
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            에너지관리·기후탐사 커리어(링크드인), 밴드 합주 & 산티아고 순례길 라이프(인스타그램), 깊이 있는 성찰 에세이(브런치)를 유기적으로 연결하고 성장 지표를 분석합니다.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
          <button onclick="window.app.resetSnsToRealStats()" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2" title="브런치(223명/741글)·인스타(302명/180글) 등 실제 프로필 기준값으로 동기화">
            <i class="fa-solid fa-rotate text-sky-400"></i> 실제 프로필 수치 동기화
          </button>
          <button onclick="window.app.openAddSnsPostModal()" class="py-3 px-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-pink-500/20 transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-plus"></i> 새 콘텐츠 기획 / 발행 등록
          </button>
        </div>
      </div>
    </div>

    <!-- 1. Overall Metrics Summary Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="glass-panel rounded-2xl p-5 border border-slate-700/60 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>총 팔로워 / 구독자</span>
          <i class="fa-solid fa-users text-pink-400"></i>
        </div>
        <div class="text-2xl font-black text-white">${totalFollowers.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 명</span></div>
        <div class="mt-2 flex items-center justify-between text-[11px] text-slate-400">
          <span>목표(${totalTargetFollowers.toLocaleString()}) 대비</span>
          <span class="font-bold text-pink-400">${totalGoalPercent}%</span>
        </div>
        <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full" style="width: ${totalGoalPercent}%"></div>
        </div>
      </div>

      <div class="glass-panel rounded-2xl p-5 border border-slate-700/60 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>월간 총 노출 / 조회수</span>
          <i class="fa-solid fa-eye text-sky-400"></i>
        </div>
        <div class="text-2xl font-black text-sky-300">${totalViews.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 회</span></div>
        <div class="mt-2 text-[11px] text-slate-400">
          3대 채널 합산 월간 도달수
        </div>
      </div>

      <div class="glass-panel rounded-2xl p-5 border border-slate-700/60 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>누적 총 게시물</span>
          <i class="fa-solid fa-layer-group text-amber-400"></i>
        </div>
        <div class="text-2xl font-black text-white">${totalPostsCount.toLocaleString()}<span class="text-xs text-slate-400 font-normal"> 개</span></div>
        <div class="mt-2 text-[11px] text-slate-400">
          브런치 741편 · 인스타 180편 등 총합
        </div>
      </div>

      <div class="glass-panel rounded-2xl p-5 border border-slate-700/60 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>콘텐츠 파이프라인</span>
          <i class="fa-solid fa-pen-nib text-emerald-400"></i>
        </div>
        <div class="text-sm font-bold text-slate-200 mt-1 flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 text-xs">아이디어 ${ideaCount}</span>
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs">작성 중 ${writingCount}</span>
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">발행 ${publishedCount}</span>
        </div>
        <div class="mt-2 text-[11px] text-slate-400">
          기획 중인 콘텐츠 총 ${posts.length}개
        </div>
      </div>
    </div>

    <!-- 2. 3대 채널별 심층 관리 카드 -->
    <div class="mb-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h2 class="text-lg font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-cubes text-pink-400"></i>
          3대 SNS 채널 프로필 & 성장 지표 관리
        </h2>
        <span class="text-xs text-pink-300 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-lg">
          💡 <b>빠른 수정</b>: 카드 안의 <b>팔로워/구독자</b> 및 <b>게시물 숫자 칸</b>을 직접 클릭해 즉시 변경하거나 [지표/전략 수정]을 누르세요.
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${channels.map(ch => {
          const goalPct = ch.targetFollowers > 0 ? Math.min(100, Math.round((ch.followers / ch.targetFollowers) * 100)) : 0;
          return `
            <div class="glass-panel rounded-2xl p-6 border ${ch.id === 'linkedin' ? 'border-blue-500/30' : ch.id === 'instagram' ? 'border-pink-500/30' : 'border-emerald-500/30'} flex flex-col justify-between relative group hover:border-slate-500 transition">
              <div>
                <!-- Channel Header -->
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg ${
                      ch.id === 'linkedin' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-blue-500/10' :
                      ch.id === 'instagram' ? 'bg-pink-600/20 text-pink-400 border border-pink-500/40 shadow-pink-500/10' :
                      'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 shadow-emerald-500/10'
                    }">
                      <i class="${ch.icon}"></i>
                    </div>
                    <div>
                      <h3 class="text-base font-bold text-white">${ch.name}</h3>
                      <p class="text-xs text-slate-400 font-mono">${ch.handle}</p>
                    </div>
                  </div>

                  <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition" title="새 창에서 프로필 열기">
                    <span>이동</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>

                <div class="mb-4">
                  <span class="text-[11px] px-2 py-0.5 rounded font-bold ${ch.badgeClass}">
                    ${ch.category}
                  </span>
                </div>

                <!-- Stats Progress Box (With Direct Inline Quick-Edit Inputs) -->
                <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 mb-4 space-y-3">
                  <div>
                    <div class="flex items-center justify-between text-xs mb-1.5">
                      <span class="text-slate-400 font-semibold">${ch.id === 'brunch' ? '구독자 (팔로워)' : ch.id === 'linkedin' ? '팔로워 / 1촌' : '팔로워'}</span>
                      <div class="flex items-center gap-1 text-white font-bold">
                        <input type="number" min="0" value="${ch.followers}" onchange="window.app.quickUpdateSnsMetric('${ch.id}', 'followers', this.value)" class="w-20 bg-slate-800 hover:bg-slate-700 focus:bg-slate-800 border border-slate-600 focus:border-pink-400 rounded-lg px-2 py-0.5 text-right text-sm font-black text-white focus:outline-none transition" title="클릭하여 실제 팔로워/구독자 수 바로 입력">
                        <span class="text-slate-400">/</span>
                        <input type="number" min="1" value="${ch.targetFollowers}" onchange="window.app.quickUpdateSnsMetric('${ch.id}', 'targetFollowers', this.value)" class="w-16 bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700 rounded-lg px-1.5 py-0.5 text-right text-xs text-slate-300 focus:outline-none transition" title="목표 팔로워 수 수정">
                        <span class="text-[11px] text-slate-400">명</span>
                      </div>
                    </div>
                    <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div class="${ch.id === 'linkedin' ? 'bg-blue-500' : ch.id === 'instagram' ? 'bg-pink-500' : 'bg-emerald-500'} h-full rounded-full transition-all duration-300" style="width: ${goalPct}%"></div>
                    </div>
                    <div class="text-[10px] text-right text-slate-400 mt-1">목표 달성률: <b>${goalPct}%</b></div>
                  </div>

                  <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center items-center">
                    <div>
                      <div class="text-[10px] text-slate-400 mb-0.5">${ch.id === 'brunch' ? '발행 글 수' : '총 게시물'}</div>
                      <div class="flex items-center justify-center gap-0.5">
                        <input type="number" min="0" value="${ch.postsCount}" onchange="window.app.quickUpdateSnsMetric('${ch.id}', 'postsCount', this.value)" class="w-16 bg-slate-800 hover:bg-slate-700 border border-slate-700 focus:border-pink-400 rounded px-1.5 py-0.5 text-center text-xs font-bold text-slate-100 focus:outline-none">
                        <span class="text-[10px] text-slate-400">개</span>
                      </div>
                    </div>
                    <div>
                      <div class="text-[10px] text-slate-400 mb-0.5">월간 조회</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5">${(ch.monthlyViews || 0).toLocaleString()}</div>
                    </div>
                    <div>
                      <div class="text-[10px] text-slate-400 mb-0.5">반응률</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5">${ch.engagementRate || '-'}</div>
                    </div>
                  </div>
                </div>

                <!-- Positioning & Goals -->
                <div class="space-y-2 text-xs mb-4">
                  <div class="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
                    <i class="fa-solid fa-bullseye text-amber-400 mt-0.5 w-4 text-center"></i>
                    <div>
                      <span class="text-slate-400 font-bold block text-[11px]">주간 목표:</span>
                      <span class="text-slate-200">${ch.weeklyGoal || '목표를 설정해주세요.'}</span>
                    </div>
                  </div>

                  <div class="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
                    <i class="fa-solid fa-compass text-sky-400 mt-0.5 w-4 text-center"></i>
                    <div>
                      <span class="text-slate-400 font-bold block text-[11px]">채널 포지셔닝:</span>
                      <span class="text-slate-300">${ch.positioning || '포지셔닝을 설정해주세요.'}</span>
                    </div>
                  </div>

                  ${ch.hashtags ? `
                    <div class="bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-slate-400 font-bold text-[11px]"><i class="fa-solid fa-hashtag text-pink-400"></i> 추천 해시태그:</span>
                        <button onclick="window.app.copySnsHashtags('${ch.id}')" class="text-[10px] text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1">
                          <i class="fa-regular fa-copy"></i> 복사
                        </button>
                      </div>
                      <p class="text-[11px] text-slate-300 font-mono leading-relaxed">${ch.hashtags}</p>
                    </div>
                  ` : ''}

                  ${ch.memo ? `
                    <div class="text-[11px] text-slate-400 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80 leading-relaxed">
                      💡 <b>운영 메모</b>: ${ch.memo}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Card Action -->
              <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                  <i class="fa-solid fa-link"></i> 프로필 열기
                </a>
                <button onclick="window.app.openEditSnsChannelModal('${ch.id}')" class="px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 text-xs font-bold transition flex items-center gap-1 border border-pink-500/30">
                  <i class="fa-solid fa-pen-to-square"></i> 지표/전략 수정
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 3. Content Pipeline & Tracker -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-slate-700/60">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-calendar-check text-pink-400"></i>
            콘텐츠 발행 파이프라인 & 성과 트래커
          </h2>
          <p class="text-xs text-slate-400 mt-1">아이디어 구상부터 작성, 발행 완료 및 조회수·반응수 성과를 체계적으로 기록합니다.</p>
        </div>

        <button onclick="window.app.openAddSnsPostModal()" class="py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md">
          <i class="fa-solid fa-plus"></i> 새 포스트 등록
        </button>
      </div>

      <!-- Filter Buttons -->
      <div class="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs border-b border-slate-800">
        <button onclick="window.app.setSnsFilter('all')" class="px-3 py-1.5 rounded-lg font-medium transition ${state.snsFilter === 'all' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
          전체 (${posts.length})
        </button>
        <button onclick="window.app.setSnsFilter('linkedin')" class="px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${state.snsFilter === 'linkedin' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
          <i class="fa-brands fa-linkedin"></i> LinkedIn (${posts.filter(p => p.platform === 'linkedin').length})
        </button>
        <button onclick="window.app.setSnsFilter('instagram')" class="px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${state.snsFilter === 'instagram' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
          <i class="fa-brands fa-instagram"></i> Instagram (${posts.filter(p => p.platform === 'instagram').length})
        </button>
        <button onclick="window.app.setSnsFilter('brunch')" class="px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${state.snsFilter === 'brunch' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">
          <i class="fa-solid fa-feather-pointed"></i> Brunch Story (${posts.filter(p => p.platform === 'brunch').length})
        </button>
      </div>

      <!-- Posts List -->
      <div class="space-y-3">
        ${filteredPosts.length === 0 ? `
          <div class="text-center py-10 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <p class="text-slate-400 text-xs mb-2">등록된 콘텐츠가 없습니다.</p>
            <button onclick="window.app.openAddSnsPostModal()" class="text-pink-400 text-xs font-bold hover:underline">
              + 첫 번째 콘텐츠 아이디어를 등록해 보세요
            </button>
          </div>
        ` : filteredPosts.map(p => {
          const platformLabel = p.platform === 'linkedin' ? 'LinkedIn' : p.platform === 'instagram' ? 'Instagram' : 'Brunch';
          const platformColor = p.platform === 'linkedin' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : p.platform === 'instagram' ? 'bg-pink-500/20 text-pink-400 border-pink-500/30' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
          const statusBadge = p.status === 'published' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : p.status === 'writing' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
          const statusText = p.status === 'published' ? '✅ 발행 완료' : p.status === 'writing' ? '✍️ 작성 중' : '💡 아이디어';

          return `
            <div class="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-[10px] px-2 py-0.5 rounded font-bold border ${platformColor}">
                    ${platformLabel}
                  </span>
                  <button onclick="window.app.toggleSnsPostStatus('${p.id}')" class="text-[10px] px-2 py-0.5 rounded font-bold border ${statusBadge} hover:opacity-80 transition" title="클릭하여 상태 변경">
                    ${statusText}
                  </button>
                  <span class="text-xs text-slate-400 font-mono"><i class="fa-regular fa-calendar mr-1"></i>${p.date || '날짜 미정'}</span>
                </div>

                <h3 class="text-sm font-bold text-white mb-1 leading-snug">${p.title}</h3>

                ${p.notes ? `
                  <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${p.notes}</p>
                ` : ''}

                ${p.url ? `
                  <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-[11px] text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 mt-1 truncate max-w-md">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i> ${p.url}
                  </a>
                ` : ''}
              </div>

              <!-- Performance & Actions -->
              <div class="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-700/60 flex-shrink-0">
                <div class="flex items-center gap-3 text-xs bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
                  <span title="조회수"><i class="fa-solid fa-eye text-sky-400 mr-1"></i>${(p.views || 0).toLocaleString()}</span>
                  <span title="좋아요/반응"><i class="fa-solid fa-heart text-pink-400 mr-1"></i>${(p.likes || 0).toLocaleString()}</span>
                </div>

                <div class="flex items-center gap-1.5">
                  <button onclick="window.app.openEditSnsPostModal('${p.id}')" class="text-xs text-pink-400 hover:text-pink-300 px-2.5 py-1 rounded bg-pink-500/10 hover:bg-pink-500/20 transition flex items-center gap-1">
                    <i class="fa-solid fa-pen-to-square"></i> 수정
                  </button>
                  <button onclick="window.app.deleteSnsPost('${p.id}')" class="text-xs text-red-400 hover:text-red-300 px-2 py-1 transition">
                    <i class="fa-regular fa-trash-can"></i> 삭제
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 4. Personal Branding Strategy Note (OSMU) -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/60">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-base font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-lightbulb text-amber-400"></i>
          원소스 멀티유즈(OSMU) 퍼스널 브랜딩 전략 노트
        </h3>
        <button onclick="window.app.saveSnsStrategyMemo()" class="px-4 py-1.5 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-xs font-bold transition">
          전략 저장
        </button>
      </div>
      <textarea id="sns-strategy-memo-input" rows="4" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white leading-relaxed focus:outline-none focus:border-pink-400">${snsData.strategyMemo || ''}</textarea>
      <p class="text-[11px] text-slate-400 mt-2">
        💡 <b>채널 연계 팁</b>: 브런치에 작성한 깊이 있는 글의 핵심 결론 3가지를 카드뉴스로 만들어 링크드인에 공유하고, 작성 과정의 비하인드 컷을 인스타그램 스토리에 올려 채널 간 유입을 극대화하세요.
      </p>
    </div>
  `;
}

// ==========================================================================
// 5-C. 수상 내역(23건) & 주요 경력(15건) 포트폴리오 탭 (⭐ 신규 추가)
// ==========================================================================
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
    if (cat.includes('환경안전')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    if (cat.includes('기술')) return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
    if (cat.includes('제조')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    if (cat.includes('봉사')) return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  };

  const getCareerBadge = (cat) => {
    if (cat.includes('환경안전')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    if (cat.includes('설비')) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (cat.includes('사내강사')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  };

  // 연도별 그룹핑 헬퍼
  const groupByYear = (items) => {
    const map = {};
    items.forEach(item => {
      const y = item.year || item.startYear || '기타';
      if (!map[y]) map[y] = [];
      map[y].push(item);
    });
    return Object.keys(map).sort((a, b) => (parseInt(b, 10) || 0) - (parseInt(a, 10) || 0))
      .map(year => ({ year, list: map[year] }));
  };

  const awardYearGroups = groupByYear(filteredAwards);
  const careerYearGroups = groupByYear(filteredCareers);

  // 통합 타임라인용 연도별 묶음
  const combinedItems = [
    ...filteredAwards.map(a => ({ ...a, itemType: 'award' })),
    ...filteredCareers.map(c => ({ ...c, itemType: 'career', year: c.startYear }))
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
            <span class="text-xs text-slate-400">2014년 ~ 2026년 삼성전자 사내 표창 및 주요 경력 아카이브</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            ${mode === 'awards' ? '<i class="fa-solid fa-trophy text-amber-400"></i> 수상 및 표창 이력 관리' : mode === 'careers' ? '<i class="fa-solid fa-briefcase text-emerald-400"></i> 주요 경력 & 사내 TF 활동' : '<i class="fa-solid fa-award text-sky-400"></i> 수상 & 경력 연도별 통합 포트폴리오'}
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
            ${mode === 'awards'
              ? '삼성전자 총괄부사장·부사장·센터장·기술팀장 표창 및 병무청장 표창까지 총 23건의 수상 실적을 연도별·분야별로 한눈에 관리합니다.'
              : mode === 'careers'
              ? '에너지 절감 TF·환경안전 개선 TF·초순수(UPW) 절감 TF·설비 이설 TF(화성↔평택)·DS부문 안전문화 사내강사 등 15건의 핵심 경력을 관리합니다.'
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
            <div class="text-[11px] text-slate-400">기술팀/그룹 대표 TF · 사내강사</div>
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
        <div class="text-[11px] text-emerald-300 mt-1">🟢 현업 진행 중(Active) ${ongoingCount}건</div>
      </div>

      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>환경안전 · 에너지 전문성</span>
          <i class="fa-solid fa-shield-halved text-sky-400"></i>
        </div>
        <div class="text-base font-black text-sky-300 mt-0.5">환경안전·에너지 특화</div>
        <div class="text-[11px] text-slate-400 mt-1">에너지절감·UPW절감·위험성평가·사내강사</div>
      </div>

      <div class="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-900/60">
        <div class="text-[11px] text-slate-400 flex items-center justify-between mb-1">
          <span>최고 훈격 및 대표 성과</span>
          <i class="fa-solid fa-crown text-pink-400"></i>
        </div>
        <div class="text-base font-black text-pink-300 mt-0.5">부사장 표창 5회 · 병무청장상</div>
        <div class="text-[11px] text-slate-400 mt-1">메모리 기술전 2연속 · 품질인의 날 BP상</div>
      </div>
    </div>

    <!-- Filter & Search Bar -->
    <div class="glass-panel rounded-2xl p-4 mb-6 border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
        ${mode === 'awards' ? `
          <button onclick="window.app.setAwardFilter('all')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">전체 (${awards.length})</button>
          <button onclick="window.app.setAwardFilter('환경안전/보건')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '환경안전/보건' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🛡️ 환경안전/보건 (${awards.filter(a => a.category === '환경안전/보건').length})</button>
          <button onclick="window.app.setAwardFilter('기술/품질/학술')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '기술/품질/학술' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">⚡ 기술/품질/학술 (${awards.filter(a => a.category === '기술/품질/학술').length})</button>
          <button onclick="window.app.setAwardFilter('제조/모범/혁신')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '제조/모범/혁신' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🏆 제조/모범/혁신 (${awards.filter(a => a.category === '제조/모범/혁신').length})</button>
          <button onclick="window.app.setAwardFilter('직무/협업')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '직무/협업' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🤝 직무/협업 (${awards.filter(a => a.category === '직무/협업').length})</button>
          <button onclick="window.app.setAwardFilter('봉사/공헌')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.awardFilter === '봉사/공헌' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">💚 봉사/공헌 (${awards.filter(a => a.category === '봉사/공헌').length})</button>
        ` : mode === 'careers' ? `
          <button onclick="window.app.setCareerFilter('all')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === 'all' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">전체 (${careers.length})</button>
          <button onclick="window.app.setCareerFilter('환경안전/에너지')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '환경안전/에너지' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🌿 환경안전/에너지 (${careers.filter(c => c.category === '환경안전/에너지').length})</button>
          <button onclick="window.app.setCareerFilter('설비/제조혁신 TF')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '설비/제조혁신 TF' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">⚙️ 설비/제조혁신 TF (${careers.filter(c => c.category === '설비/제조혁신 TF').length})</button>
          <button onclick="window.app.setCareerFilter('사내강사/리더십')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '사내강사/리더십' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">🎤 사내강사/리더십 (${careers.filter(c => c.category === '사내강사/리더십').length})</button>
          <button onclick="window.app.setCareerFilter('조직문화/협의체')" class="px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${state.careerFilter === '조직문화/협의체' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}">💬 조직문화/협의체 (${careers.filter(c => c.category === '조직문화/협의체').length})</button>
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
                  </div>

                  <div class="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
                    <button onclick="window.app.openEditAwardModal('${a.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700/70 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 text-xs font-bold transition flex items-center gap-1">
                      <i class="fa-solid fa-pen-to-square"></i> 수정
                    </button>
                    <button onclick="window.app.deleteAward('${a.id}')" class="px-2 py-1 rounded-lg bg-slate-700/40 hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs transition">
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
                    <button onclick="window.app.openEditCareerModal('${c.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700/70 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 text-xs font-bold transition flex items-center gap-1">
                      <i class="fa-solid fa-pen-to-square"></i> 수정
                    </button>
                    <button onclick="window.app.deleteCareer('${c.id}')" class="px-2 py-1 rounded-lg bg-slate-700/40 hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs transition">
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
      <!-- Mode 3: Combined Chronological Timeline -->
      <div class="space-y-6">
        ${combinedYearGroups.map(group => `
          <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800">
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div class="flex items-center gap-3">
                <span class="px-3.5 py-1 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 font-black text-base">${group.year}년</span>
                <span class="text-xs text-slate-400">
                  수상 <b>${group.list.filter(i => i.itemType === 'award').length}건</b> · 경력 <b>${group.list.filter(i => i.itemType === 'career').length}건</b>
                </span>
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
                    <button onclick="window.app.openEditAwardModal('${a.id}')" class="text-[11px] text-amber-400 hover:underline flex-shrink-0">수정</button>
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
                    <button onclick="window.app.openEditCareerModal('${c.id}')" class="text-[11px] text-emerald-400 hover:underline flex-shrink-0">수정</button>
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

          <label class="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer">
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
  // Camino Handlers (⭐)
  toggleCaminoPacking: (idx) => {
    if (state.camino && state.camino.packingList[idx]) {
      state.camino.packingList[idx].done = !state.camino.packingList[idx].done;
      persistState();
      renderCaminoTab();
      if (state.activeTab === 'overview') renderOverviewTab();
    }
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
