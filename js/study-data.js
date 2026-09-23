/**
 * 초기 데이터 정의 (학사/시험 일정, 밴드/문화 일정, 에너지관리기사 기출 및 공식, 샘플 외부 대시보드)
 */

// 1. 사용자 등록 8개 핵심 학사 & 자격증 일정
export const INITIAL_EXAM_SCHEDULES = [
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
export const INITIAL_BAND_SCHEDULES = [
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
export const INITIAL_ENERGY_FORMULAS = [
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
export const INITIAL_ENERGY_QUESTIONS = [
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
export const INITIAL_EXTERNAL_DASHBOARDS = [
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
