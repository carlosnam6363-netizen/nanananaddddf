// ==========================================
// 1. Initial Study & Schedule Data
// ==========================================
/**
 * 초기 데이터 정의 (학사/시험 일정, 밴드/문화 일정, 에너지관리기사 기출 및 공식, 샘플 외부 대시보드)
 */

// 1. 사용자 등록 8개 핵심 학사 & 자격증 일정
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


// ==========================================
// 2. Cloud Sync & Storage Manager
// ==========================================
/**
 * Cloud Sync & Local Storage Module
 * - LocalStorage 자동 저장 및 오프라인 우선 보장
 * - Firebase Firestore 실시간 양방향 동기화 (옵션 A)
 * - JSON 백업 내보내기 / 복원 기능
 */

// study data imported

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
        return {
          exams: parsed.exams || INITIAL_EXAM_SCHEDULES,
          bands: parsed.bands || INITIAL_BAND_SCHEDULES,
          formulas: parsed.formulas || INITIAL_ENERGY_FORMULAS,
          questions: parsed.questions || INITIAL_ENERGY_QUESTIONS,
          externalDashboards: parsed.externalDashboards || INITIAL_EXTERNAL_DASHBOARDS,
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


// ==========================================
// 3. Application Controllers & Navigation
// ==========================================
/**
 * Main Application Logic
 * - State Management
 * - Responsive Navigation & Tabs
 * - D-Day Engine
 * - Exam, Band, Energy Study, and External Dashboards Controllers
 */

// sync manager imported

// Global App State
let state = {
  exams: [],
  bands: [],
  formulas: [],
  questions: [],
  externalDashboards: [],
  theme: 'dark',
  activeTab: 'overview',
  activeExternalTabId: null,
  examFilter: 'all',
  bandFilter: 'all',
  energyStudySubtab: 'daily', // 'daily', 'formulas', 'upload'
  currentQuestionIndex: 0
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load data from LocalStorage / Defaults
  const initialData = syncManager.loadInitialData();
  state = { ...state, ...initialData };

  if (state.externalDashboards.length > 0 && !state.activeExternalTabId) {
    state.activeExternalTabId = state.externalDashboards[0].id;
  }

  // 2. Setup Cloud Sync Listeners
  syncManager.onStatusChange(updateSyncStatusUI);
  syncManager.onDataChange((remoteData) => {
    state.exams = remoteData.exams || state.exams;
    state.bands = remoteData.bands || state.bands;
    state.formulas = remoteData.formulas || state.formulas;
    state.questions = remoteData.questions || state.questions;
    state.externalDashboards = remoteData.externalDashboards || state.externalDashboards;
    renderCurrentTab();
    showToast('클라우드에서 최신 데이터를 동기화했습니다.');
  });

  // 3. Initialize Firebase if saved config exists
  syncManager.initFirebase();

  // 4. Apply Theme
  applyTheme(state.theme);

  // 5. Setup Event Handlers & Nav
  initNavigation();
  initModals();
  initKaTeX();

  // 6. Initial Render
  switchTab(state.activeTab);

  // 7. Auto refresh D-Day timer every minute
  setInterval(updateDDayDisplay, 60000);

  // 8. Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW fail', err));
  }
});

// Save state and push sync
function persistState() {
  syncManager.syncToCloud({
    exams: state.exams,
    bands: state.bands,
    formulas: state.formulas,
    questions: state.questions,
    externalDashboards: state.externalDashboards,
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

  const activeSection = document.getElementById(`tab-content-${tabName}`);
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
    case 'band':
      renderBandTab();
      break;
    case 'energy':
      renderEnergyTab();
      break;
    case 'external':
      renderExternalTab();
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

  // Find Energy Exam (Main Highlight)
  const energyExam = state.exams.find(e => e.title.includes('에너지관리기사')) || state.exams[0];
  const ddayInfo = energyExam ? calculateDDay(energyExam.ddayTarget || energyExam.startDate) : null;

  // Sort upcoming schedules by date
  const now = new Date();
  const sortedUpcoming = [...state.exams]
    .map(e => ({ ...e, ddayVal: calculateDDay(e.ddayTarget || e.startDate) }))
    .sort((a, b) => new Date(a.ddayTarget || a.startDate) - new Date(b.ddayTarget || b.startDate));

  // Upcoming Band
  const upcomingBands = [...state.bands]
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Current Daily Energy Question
  const dailyQ = state.questions[state.currentQuestionIndex] || state.questions[0];

  container.innerHTML = `
    <!-- Top Hero Banner: 에너지관리기사 D-Day Highlight -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-sky-500/30 bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold rounded-full flex items-center gap-1.5 urgent-pulse">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              최우선 목표 D-Day
            </span>
            <span class="text-xs text-slate-400">2026년 11월 7일 (토) 09:00</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-fire-flame-curved text-amber-400"></i>
            ${energyExam ? energyExam.title : '에너지관리기사 실기 시험'}
          </h1>
          <p class="text-sm text-slate-300 mt-2 max-w-xl">
            합격을 위한 필수 계산 공식 숙지와 기출 풀이를 매일 꾸준히 반복하세요.
          </p>
        </div>

        <!-- D-Day Counter Box -->
        <div class="bg-slate-800/90 border border-sky-400/40 rounded-xl p-4 sm:p-6 text-center min-w-[200px] shadow-lg">
          <div class="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">D-Day 카운트다운</div>
          <div class="text-3xl sm:text-4xl font-black ${ddayInfo && ddayInfo.days <= 30 ? 'text-red-400' : 'text-amber-400'} tracking-tight">
            ${ddayInfo ? (ddayInfo.days >= 0 ? `D-${ddayInfo.days}` : `D+${Math.abs(ddayInfo.days)}`) : 'D-DAY'}
          </div>
          <div class="text-xs text-slate-400 mt-1">
            ${ddayInfo && ddayInfo.days >= 0 ? `약 ${Math.floor(ddayInfo.days / 7)}주 남음` : '시험 종료'}
          </div>
          <button onclick="window.app.switchTab('energy')" class="mt-3 w-full py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-graduation-cap"></i> 오늘 문제 복습
          </button>
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
          <div class="text-xs text-slate-400">총 등록 학사/시험</div>
          <div class="text-xl font-bold text-white">${state.exams.length}건</div>
        </div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-slate-700/60 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-guitar"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">밴드 합주 & 문화</div>
          <div class="text-xl font-bold text-white">${state.bands.length}건</div>
        </div>
      </div>

      <div class="glass-panel p-4 rounded-xl border border-slate-700/60 flex items-center gap-4">
        <div class="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <div>
          <div class="text-xs text-slate-400">실기 학습 노트</div>
          <div class="text-xl font-bold text-white">${state.questions.length}문제</div>
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
      
      <!-- Left 2 Cols: 주요 일정 타임라인 -->
      <div class="lg:col-span-2 space-y-6">
        <div class="glass-panel rounded-2xl p-6 border border-slate-700/60">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-clock-rotate-left text-blue-400"></i>
              다가오는 주요 학사 및 시험 일정 (D-Day순)
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
        <div class="glass-panel rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-b from-slate-900 to-amber-950/20">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded">
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

          <button onclick="window.app.switchTab('energy')" class="w-full py-2.5 px-4 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2">
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

        <!-- 스마트폰 PWA 바로가기 팁 -->
        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-400">
          <div class="font-bold text-slate-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-mobile-screen-button text-sky-400"></i>
            스마트폰에서 앱처럼 사용하기
          </div>
          스마트폰 브라우저 메뉴에서 <b class="text-slate-200">'홈 화면에 추가'</b>를 누르면 별도 앱처럼 전체화면으로 이용하실 수 있습니다.
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
              <button onclick="window.app.deleteExam('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition">
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
            <button onclick="window.app.deleteBand('${item.id}')" class="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 transition">
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
          <span class="text-xs font-mono text-slate-400">${q.day}</span>
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

  // Modal Handlers
  openAddExamModal: () => {
    document.getElementById('modal-add-exam').classList.remove('hidden');
  },
  openAddBandModal: () => {
    document.getElementById('modal-add-band').classList.remove('hidden');
  },
  openAddExternalModal: () => {
    document.getElementById('modal-add-external').classList.remove('hidden');
  },
  openAddQuestionModal: () => {
    document.getElementById('modal-add-question').classList.remove('hidden');
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
      renderCurrentTab();
      showToast('백업 파일에서 성공적으로 복원했습니다.');
    } catch (err) {
      alert('복원 실패: ' + err.message);
    }
  }
};

// ==========================================================================
// Modal Form Submissions
// ==========================================================================
function initModals() {
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
