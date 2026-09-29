# 🚀 개인 업무 및 커리어 대시보드 (Personal Career & Schedule Hub)

> **Live Production URL**: [https://carlosnam6363-netizen.github.io/nanananaddddf/](https://carlosnam6363-netizen.github.io/nanananaddddf/)  
> **Repository**: [https://github.com/carlosnam6363-netizen/nanananaddddf](https://github.com/carlosnam6363-netizen/nanananaddddf)

---

## 📌 1. 프로젝트 개요
수험/자격증(에너지관리기사 실기 암기카드 및 3사이클 57일 로드맵), 취미(홍대 밴드 합주 보컬·신디사이저, 산티아고 순례길, 체구 감량 인바디, SNS 브랜딩 25선), 경력/학사(소집해제 D-Day, 학점, 수상 내역)를 통합 관리하는 반응형 웹 대시보드입니다.

* **기술 스택**: 순수 HTML5 / Modern JavaScript (Vanilla) / Tailwind CSS (CDN) / FontAwesome 6 / KaTeX (수식 렌더링) / Firebase Compat SDK (Firestore & Google Auth) / Google Identity Services (GIS)
* **호환성**: 웹 서버(`http://`, `https://`) 및 로컬 단독 실행(`file:///`) 모두 100% 호환 (Zero-Build 환경)

---

## 📁 2. 최적화된 파일 아키텍처 (Architecture)

```text
career-dashboard/
├── index.html          # 메인 레이아웃, 사이드바, 헤더, 모달 다이얼로그 템플릿
├── css/
│   └── style.css       # 커스텀 테마, 글래스모피즘, 스크롤바, 애니메이션 스타일
├── js/
│   ├── data.js         # [NEW] 13대 시드 데이터 전담 파일 (5,767줄)
│   └── app.js          # [OPTIMIZED] 핵심 상태 관리, 탭 렌더러, 이벤트 핸들러 (7,162줄)
├── sw.js               # 브라우저 캐시 자동 소각 및 최신 빌드 자동 갱신 워커
├── manifest.json       # PWA 웹앱 매니페스트
└── README.md           # 프로젝트 구조 및 유지보수 가이드
```

### ⚡ 데이터와 로직의 분리 최적화 (`data.js` vs `app.js`)
기존 12,800줄에 달하던 단일 `app.js`를 **정적 시드 데이터(`js/data.js`)**와 **애플리케이션 비즈니스 로직(`js/app.js`)**으로 완전히 분리하여 유지보수성과 파일 로딩, AI/개발자 코드 분석 속도를 200% 이상 향상시켰습니다.

1. **`js/data.js` (시드 데이터 전담 모듈)**
   * `INITIAL_DISCHARGE_DATE`: 사회복무요원 소집해제 D-Day 기준일자
   * `INITIAL_CAMINO_DATA`: 산티아고 순례길 일정 및 패킹 리스트
   * `INITIAL_SNS_DATA`: 브런치스토리, 인스타그램, 링크드인 실제 지표
   * `INITIAL_PORTFOLIO_DATA`: 경력 사항, 학점, 수상 내역
   * `INITIAL_EXAM_SCHEDULES`: 8개 학사 및 국가기술자격 시험 일정
   * `INITIAL_BAND_SCHEDULES`: 홍대 호랑이 합주실 일정 및 셋리스트 (보컬 & 신디사이저 담당)
   * `ENERGY_FOLDER_MANIFEST` / `INITIAL_ENERGY_STUDY_PLAN`: 14개년 3사이클 57일 기출 커리큘럼
   * `ENERGY_DAILY_BRIEFINGS`: 40일 시험 D-Day 일일 핵심 브리핑
   * `INITIAL_ENERGY_FORMULAS`: 주요 열역학·보일러 공식집
   * `INITIAL_ENERGY_QUESTIONS`: 25선 실기 연습 & 기출 암기카드 데이터
   * `INITIAL_EXTERNAL_DASHBOARDS`: 외부 노션, 시트 연동 대시보드 목록
   * `INITIAL_INBODY_DATA`: 11년간 89회 누적 인바디 신체 측정 기록
    * `INITIAL_KNOU_DATA`: 국립 방송통신대학교 사회복지학과 2026-2학기 9개 과목 수강률(형성평가 20%), 과제물(30%), 기말고사(50%) 평가 및 평생교육사실습 데이터
    * `INITIAL_ENGLISH_DATA`: 카카오톡 1:1 회화 수업 409개 원어민 교정 데이터(You said vs Better say), 6대 취약 문법 유형(관사·수일치, 구어체·뉘앙스, 전치사·연어, 동명사·부정사, 시제, 분사), 튜터 추천 16대 핵심 이디엄(Idioms of the Day)

2. **`js/app.js` (비즈니스 로직 & UI 렌더러 전담)**
   * `SyncManager`: LocalStorage 오프라인 저장 및 Firebase Firestore 양방향 동기화
   * `Google Admin Auth & GIS`: Google Identity Services SDK 연동, 오직 `carlosnam6363@gmail.com`만 수정/작성 권한 활성화
   * `Tab Order & Category Navigation`: 탭 순서 커스텀 정렬 및 카테고리 필터링(취미 / 커리어 패스 / 기타)
   * `Guest Mode Restriction`: 비로그인/게스트 상태에서는 종합 대시보드(overview)만 열람 허용되며, 다른 탭 클릭 시 자물쇠 잠금 팝업(`modal-tab-locked`) 호출
   * `Tab Renderers`: 12개 탭 동적 렌더링 (`renderOverviewTab`, `renderEnglishTab`, `renderKnouTab`, `renderEnergyTab`, `renderBandTab`, `renderSnsTab` 등)
   * `English Features`: Daily Focus 5선, 플립 퀴즈 모드 & 전체 리스트 테이블 모드, Web Speech API 기반 원어민 TTS 발음 듣기, 마스터 체크, 6대 문법 카테고리 필터 및 실시간 검색
   * `window.app`: 전역 이벤트 핸들러 및 모달 제어 API

---

## 🔒 3. 권한 및 게스트 보호 가이드
* **관리자 계정**: `carlosnam6363@gmail.com`
* **접근 제어 정책**:
  * 구글 로그인 시 로그인한 이메일이 관리자 계정과 일치할 때만 `isAdmin = true` 활성화
  * 비관리자 또는 게스트 상태에서는 종합 대시보드(Overview)만 조회 가능하며, 시험/인바디/밴드/순례길 등 개인 탭 클릭 시 자물쇠 잠금 팝업(`modal-tab-locked`)이 표시됩니다.

---

## 🛠️ 4. 추후 개발 및 수정 팁
1. **문제/기출/일정 데이터 추가·수정**:
   * `js/data.js` 파일만 열어 해당 배열(`INITIAL_...`)에 객체를 추가/수정합니다.
2. **UI 탭 화면 및 기능 추가**:
   * `js/app.js` 내의 해당 `render...Tab()` 함수를 수정합니다.
3. **배포 시 캐시 버스팅**:
   * `index.html` 상단의 `APP_VER` 및 `script src="js/...js?v=..."` 버전 쿼리를 갱신하여 사용자의 브라우저 캐시를 즉각 무효화할 수 있습니다.
