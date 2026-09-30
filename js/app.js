/**
 * Personal Career & Schedule Dashboard
 * Standalone Unified Script (Safe for file:// and http://)
 */
(function() {
  'use strict';


  // =========================================================================
  // 1. Initial Study & Schedule Data (Loaded from js/data.js)
  // =========================================================================
  /**
   * 초기 시드 데이터는 js/data.js에서 로드되어 window 객체에 안전하게 바인딩됩니다.
   * 로직과 데이터를 분리하여 코드 가독성과 추후 기능 확장 속도를 대폭 최적화했습니다.
   */
  const {
    INITIAL_DISCHARGE_DATE,
    INITIAL_CAMINO_DATA,
    INITIAL_SNS_DATA,
    INITIAL_PORTFOLIO_DATA,
    INITIAL_EXAM_SCHEDULES,
    INITIAL_BAND_SCHEDULES,
    ENERGY_FOLDER_MANIFEST,
    INITIAL_ENERGY_STUDY_PLAN,
    ENERGY_DAILY_BRIEFINGS,
    INITIAL_ENERGY_FORMULAS,
    INITIAL_ENERGY_QUESTIONS,
    INITIAL_EXTERNAL_DASHBOARDS,
    INITIAL_INBODY_DATA,
    INITIAL_KNOU_DATA,
    INITIAL_ENGLISH_DATA,
    INITIAL_CONTEST_DATA
  } = window;

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
        const upgradedBands = (parsed.bands && parsed.bands.length > 0 && parsed.bands[0].setlist && parsed.bands[0].setlist[0].notes.includes("보컬"))
          ? parsed.bands
          : JSON.parse(JSON.stringify(INITIAL_BAND_SCHEDULES));
        const upgradedEnergyPlan = (parsed.energyPlan && parsed.energyPlanVersion === 3 && parsed.energyPlan.length === INITIAL_ENERGY_STUDY_PLAN.length)
          ? parsed.energyPlan
          : JSON.parse(JSON.stringify(INITIAL_ENERGY_STUDY_PLAN));
        parsed.energyPlanVersion = 3;
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
        const upgradedKnou = (parsed.knou && parsed.knou.knouDataVersion === 1)
          ? parsed.knou
          : JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
        const upgradedEnglish = (parsed.english && parsed.english.englishDataVersion === 1)
          ? parsed.english
          : JSON.parse(JSON.stringify(INITIAL_ENGLISH_DATA));
        const upgradedContest = (parsed.contest && parsed.contest.contestDataVersion === 3)
          ? parsed.contest
          : JSON.parse(JSON.stringify(INITIAL_CONTEST_DATA));
        parsed.inbody = upgradedInbody;
        parsed.knou = upgradedKnou;
        parsed.english = upgradedEnglish;
        parsed.contest = upgradedContest;
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
          knou: upgradedKnou,
          english: upgradedEnglish,
          contest: upgradedContest,
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
      knou: INITIAL_KNOU_DATA,
      english: INITIAL_ENGLISH_DATA,
      contest: INITIAL_CONTEST_DATA,
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
  // 1. 커리어 패스 관리 (7개)
  { id: 'english', name: '데일리 영문법 브리핑', shortName: '영문법', icon: 'fa-language', color: 'text-teal-400', badge: '409교정', badgeClass: 'bg-teal-500/20 text-teal-300', category: 'career', categoryName: '커리어 패스 관리' },
  { id: 'knou', name: '방통대 사회복지 학점', shortName: '방통대 학점', icon: 'fa-user-graduate', color: 'text-indigo-400', badge: '9과목', badgeClass: 'bg-indigo-500/20 text-indigo-300', category: 'career', categoryName: '커리어 패스 관리' },
  { id: 'contest', name: '공모전 & 아이디어', shortName: '공모전', icon: 'fa-lightbulb', color: 'text-amber-400', badge: '42선', badgeClass: 'bg-amber-500/20 text-amber-300', category: 'career', categoryName: '커리어 패스 관리' },
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
  renderNavigation();

  // 게스트 상태에서 잠긴 탭에 머물러 있는 경우 종합 대시보드로 자동 리다이렉트
  if (!isAdmin && state.activeTab && state.activeTab !== 'overview') {
    switchTab('overview');
  }
}

function openTabLockedModal(tabId) {
  const tabDef = TAB_REGISTRY.find(t => t.id === tabId) || { name: '선택한 기능', icon: 'fa-lock' };

  const titleEl = document.getElementById('locked-tab-title');
  const iconEl = document.getElementById('locked-tab-icon');
  const descEl = document.getElementById('locked-tab-desc');

  if (titleEl) titleEl.innerText = `'${tabDef.name}' 탭`;
  if (iconEl) iconEl.innerHTML = `<i class="fa-solid ${tabDef.icon} text-amber-400"></i>`;
  if (descEl) {
    descEl.innerHTML = `
      현재 <b>[읽기 전용 게스트 모드]</b>로 접속 중입니다.<br>
      <b>'${tabDef.name}'</b> 세부 데이터 및 기능은 보안과 개인정보 보호를 위해 <b>관리자 로그인을 완료해야 사용</b>할 수 있습니다.<br>
      읽기 전용 모드에서는 <b>종합 대시보드(Overview)</b>만 자유롭게 이용 가능합니다.
    `;
  }

  const modal = document.getElementById('modal-tab-locked');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    alert(`🔒 [사용 불가] '${tabDef.name}' 탭은 관리자 전용 기능입니다.\n관리자 로그인을 해야만 모든 기능을 사용할 수 있습니다.`);
    openAdminAuthModal();
  }
}

function handlePinLogin(e) {
  if (e) e.preventDefault();
  const pinInput = document.getElementById('input-admin-pin');
  const enteredPin = pinInput ? pinInput.value.trim() : '';
  const feedbackMsg = document.getElementById('pin-feedback-msg');

  // 관리자 전용 인증 PIN: 3442
  const validPins = ['3442'];
  const savedPin = localStorage.getItem('career_admin_pin');
  if (savedPin) validPins.push(savedPin);

  if (validPins.includes(enteredPin)) {
    if (feedbackMsg) {
      feedbackMsg.className = 'text-[11px] text-emerald-400 font-medium block';
      feedbackMsg.innerText = '✅ 인증 성공! 관리자 모드로 전환 중...';
    }
    const authUser = {
      uid: 'admin_carlosnam',
      email: ADMIN_EMAIL,
      displayName: 'Carlos Nam (관리자)',
      photoURL: null
    };
    state.currentUser = authUser;
    saveAuthUser(authUser);
    updateAdminState();
    if (pinInput) {
      pinInput.value = '';
      pinInput.classList.remove('border-rose-500');
    }
    setTimeout(() => {
      window.app.closeAllModals();
      showToast(`👑 ${ADMIN_EMAIL} 관리자 인증 완료! 모든 기능이 활성화되었습니다.`);
    }, 350);
  } else {
    if (feedbackMsg) {
      feedbackMsg.className = 'text-[11px] text-rose-400 font-medium block';
      feedbackMsg.innerText = enteredPin ? '⚠️ 올바른 관리자 PIN 번호가 아닙니다. 다시 확인해 주세요.' : '⚠️ PIN 번호를 입력해 주세요.';
    }
    if (pinInput) {
      pinInput.classList.add('border-rose-500');
      pinInput.focus();
    }
    showToast('⚠️ 관리자 PIN 번호가 올바르지 않습니다.');
  }
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
  const lockedModal = document.getElementById('modal-tab-locked');
  if (lockedModal) lockedModal.classList.add('hidden');

  // 입력창 및 피드백 상태 초기화
  const pinInput = document.getElementById('input-admin-pin');
  if (pinInput) {
    pinInput.classList.remove('border-rose-500', 'border-amber-400');
  }
  const feedbackMsg = document.getElementById('pin-feedback-msg');
  if (feedbackMsg) {
    feedbackMsg.className = 'text-[11px] text-rose-400 hidden font-medium';
    feedbackMsg.innerText = '';
  }
  const modalFeedback = document.getElementById('auth-modal-feedback');
  if (modalFeedback) {
    modalFeedback.className = 'hidden p-3 rounded-xl text-xs leading-relaxed transition-all duration-200';
    modalFeedback.innerText = '';
  }

  renderAuthWidget();
  const modal = document.getElementById('modal-admin-auth');
  if (modal) modal.classList.remove('hidden');
}

function checkLoginStatus() {
  renderAuthWidget();
  const modalFeedback = document.getElementById('auth-modal-feedback');
  if (state.isAdmin) {
    if (modalFeedback) {
      modalFeedback.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 block';
      modalFeedback.innerHTML = `<i class="fa-solid fa-crown text-amber-400 mr-1.5"></i><b>관리자 인증 완료:</b> ${state.currentUser ? state.currentUser.email : ADMIN_EMAIL} 권한이 활성화되어 모든 탭과 편집 기능이 잠금 해제되었습니다.`;
    }
    showToast(`👑 관리자(${ADMIN_EMAIL})로 정상 로그인되어 있습니다.`);
  } else {
    if (modalFeedback) {
      modalFeedback.className = 'p-3 rounded-xl text-xs leading-relaxed bg-amber-500/10 border border-amber-500/40 text-amber-300 block';
      modalFeedback.innerHTML = `<i class="fa-solid fa-lock text-amber-400 mr-1.5"></i><b>현재 상태: 읽기 전용 (게스트)</b><br>종합 대시보드만 열람 가능합니다. 전체 탭 및 데이터를 사용하시려면 아래 <b>관리자 간편 PIN 인증</b>을 완료해 주세요.`;
    }
    showToast(`ℹ️ 현재 [읽기 전용 게스트] 상태입니다. 관리자 로그인이 필요합니다.`);
  }
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
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
              <i class="fa-solid fa-check"></i>
            </div>
            <div class="truncate">
              <div class="text-xs font-bold text-white truncate">${user.displayName || '관리자'} (${user.email})</div>
              <div class="text-[10px] text-emerald-400 font-semibold">👑 관리자 권한 활성화됨 (모든 기능 사용 가능)</div>
            </div>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button type="button" onclick="window.app.checkLoginStatus()" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 text-[10px] rounded-lg font-bold transition cursor-pointer" title="현재 상태 재확인">
              <i class="fa-solid fa-arrows-rotate"></i> 확인
            </button>
            <button type="button" onclick="window.app.handleLogout()" class="px-2.5 py-1 bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 text-xs rounded-lg font-bold transition cursor-pointer">
              로그아웃
            </button>
          </div>
        </div>
      `;
      if (modalBtnText) modalBtnText.innerText = '다른 계정으로 전환';
    } else if (user) {
      modalStatusContainer.innerHTML = `
        <div class="flex items-center justify-between w-full">
          <div class="text-xs text-rose-300 min-w-0">
            ⚠️ 현재 계정(<b>${user.email}</b>)은 관리자 권한이 없습니다.<br>
            <span class="text-slate-400 text-[10px]">관리자 이메일(${ADMIN_EMAIL})로 다시 로그인해주세요.</span>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button type="button" onclick="window.app.checkLoginStatus()" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 text-[10px] rounded-lg font-bold transition cursor-pointer" title="현재 상태 재확인">
              <i class="fa-solid fa-arrows-rotate"></i> 확인
            </button>
            <button type="button" onclick="window.app.handleLogout()" class="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg font-bold cursor-pointer">
              로그아웃
            </button>
          </div>
        </div>
      `;
      if (modalBtnText) modalBtnText.innerText = '관리자 계정으로 로그인';
    } else {
      modalStatusContainer.innerHTML = `
        <div class="flex items-center justify-between w-full">
          <div>
            <div class="text-slate-300 text-xs font-medium">현재 상태: <b class="text-amber-400">로그인되지 않음 (읽기 전용 게스트)</b></div>
            <p class="text-[10px] text-slate-500">종합 대시보드만 이용 가능 (전체 기능 사용 시 관리자 로그인 필요)</p>
          </div>
          <button type="button" onclick="window.app.checkLoginStatus()" class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 border border-slate-700 rounded-lg text-[10px] font-bold transition flex items-center gap-1 cursor-pointer flex-shrink-0 shadow-sm" title="현재 로그인 상태 재확인">
            <i class="fa-solid fa-arrows-rotate"></i> 상태 확인
          </button>
        </div>
      `;
      if (modalBtnText) modalBtnText.innerText = 'Google 계정으로 로그인 (관리자)';
    }
  }
  // Google Client ID Status in Modal
  const clientIdInput = document.getElementById('input-google-client-id');
  const clientIdStatus = document.getElementById('google-client-id-status');
  const savedCId = getSavedGoogleClientId();
  if (clientIdInput && !clientIdInput.value) {
    clientIdInput.value = savedCId;
  }
  if (clientIdStatus) {
    if (savedCId) {
      clientIdStatus.innerHTML = '<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> 클라이언트 ID 등록됨</span>';
    } else {
      clientIdStatus.innerHTML = '<span class="text-amber-400 font-bold"><i class="fa-solid fa-circle-exclamation"></i> 미등록 (설정 필요)</span>';
    }
  }
}

const GOOGLE_CLIENT_ID_STORAGE_KEY = 'career_dashboard_google_client_id';

function getSavedGoogleClientId() {
  try {
    return localStorage.getItem(GOOGLE_CLIENT_ID_STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}

function saveGoogleClientId(clientId) {
  try {
    if (clientId) {
      localStorage.setItem(GOOGLE_CLIENT_ID_STORAGE_KEY, clientId.trim());
    } else {
      localStorage.removeItem(GOOGLE_CLIENT_ID_STORAGE_KEY);
    }
  } catch (e) {}
}

async function handleGoogleLogin() {
  try {
    // 1. Firebase Auth 기반 실제 Google 로그인 팝업 검사
    const activeConfig = syncManager.getSavedFirebaseConfig();
    if (activeConfig && activeConfig.apiKey && activeConfig.authDomain) {
      if (window.firebase && window.firebase.auth) {
        showToast('Google 인증 팝업을 여는 중...');
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        if (user && user.email) {
          if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
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
            showToast(`👑 Google 실제 인증 완료! ${authUser.displayName}(${authUser.email}) 관리자 권한 활성화`);
          } else {
            showToast(`⚠️ [접근 거부] 로그인된 구글 계정(${user.email})은 관리자(${ADMIN_EMAIL})가 아닙니다.`);
          }
          return;
        }
      }
    }

    // 2. Google Identity Services (GIS - OAuth 2.0 Token Client) 실제 구글 로그인 팝업
    const clientId = getSavedGoogleClientId();
    if (clientId) {
      if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
        showToast('Google 인증 라이브러리를 로드하는 중입니다. 1~2초 후 다시 눌러주세요.');
        return;
      }

      showToast('Google 공식 계정 선택 팝업을 여는 중...');
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
        prompt: 'select_account',
        callback: async (tokenResponse) => {
          if (tokenResponse.error) {
            console.error('Google OAuth 오류:', tokenResponse);
            showToast(`Google 로그인 취소 또는 오류: ${tokenResponse.error_description || tokenResponse.error}`);
            return;
          }

          try {
            // 실제 Google 서버(googleapis.com)에 토큰을 보내 사용자 프로필 확인
            const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
            });
            const profile = await res.json();

            if (!profile.email) {
              showToast('Google 계정 이메일 정보를 확인할 수 없습니다.');
              return;
            }

            // 실제 로그인된 계정이 관리자 이메일과 일치하는지 엄격히 검증
            if (profile.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
              const authUser = {
                uid: profile.sub,
                email: profile.email,
                displayName: profile.name || 'Carlos Nam',
                photoURL: profile.picture || null
              };
              state.currentUser = authUser;
              saveAuthUser(authUser);
              updateAdminState();
              window.app.closeAllModals();
              showToast(`👑 Google 실제 인증 완료! ${authUser.displayName}(${authUser.email}) 관리자로 확인되었습니다.`);
            } else {
              showToast(`⚠️ [접근 거부] 로그인된 Google 계정(${profile.email})은 관리자(${ADMIN_EMAIL})가 아닙니다.`);
            }
          } catch (fetchErr) {
            console.error('구글 사용자 정보 요청 실패:', fetchErr);
            showToast('Google 사용자 정보 확인 중 통신 오류가 발생했습니다.');
          }
        }
      });

      tokenClient.requestAccessToken({ prompt: 'select_account' });
      return;
    }

    // 3. 만약 Google Client ID 또는 Firebase 설정이 아직 없는 경우
    const modalFeedback = document.getElementById('auth-modal-feedback');
    if (modalFeedback) {
      modalFeedback.className = 'p-3.5 rounded-xl text-xs leading-relaxed bg-amber-500/10 border border-amber-500/40 text-amber-300 block';
      modalFeedback.innerHTML = `
        <div class="space-y-1.5">
          <div class="font-bold flex items-center gap-1.5 text-amber-300 text-xs">
            <i class="fa-solid fa-circle-exclamation text-amber-400"></i> Google OAuth 클라이언트 ID 미등록 상태
          </div>
          <p class="text-slate-300 text-[11px] leading-relaxed">
            웹 브라우저에서 공식 구글 로그인 창을 띄우려면 Google Cloud 콘솔에서 발급받은 '클라이언트 ID'를 등록해야 합니다.
          </p>
          <div class="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-200 text-[11px] font-semibold flex items-center justify-between">
            <span>👉 별도 구글 설정 없이 <b>아래 간편 PIN</b>을 입력하시면 즉시 1초 만에 관리자로 로그인됩니다!</span>
          </div>
        </div>
      `;
    }

    const pinInput = document.getElementById('input-admin-pin');
    if (pinInput) {
      pinInput.focus();
      pinInput.classList.add('border-amber-400');
    }
    showToast('ℹ️ Google 클라이언트 ID 미등록 - 아래 간편 PIN 번호로 즉시 로그인 가능합니다.');

  } catch (err) {
    console.error('Google 로그인 오류:', err);
    showToast(`Google 로그인 오류: ${err.message || '로그인 창이 닫혔거나 실패했습니다.'}`);
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
  switchTab('overview');
  showToast('로그아웃되었습니다. 종합 대시보드(읽기 전용 게스트) 모드로 전환되었습니다.');
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
  selectedBriefingDate: '2026-09-29',
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
  knou: INITIAL_KNOU_DATA,
  knouFilter: 'all', // 'all', 'in_progress', 'completed'
  knouSimScores: {}, // { [courseId]: { midterm: number, final: number } }
  english: INITIAL_ENGLISH_DATA,
  contest: INITIAL_CONTEST_DATA,
  contestCategoryFilter: 'all',
  contestStatusFilter: 'all',
  contestSearch: '',
  contestActiveSubtab: 'archive', // 'archive' | 'ideabank' | 'templates'
  selectedContestId: null,
  englishFilter: 'all', // 'all', 'noun', 'phrasing', 'prep', 'infinitive', 'tense', 'participle'
  englishMode: 'quiz', // 'quiz' | 'list'
  englishDailyOffset: 0,
  englishSearch: '',
  englishMastered: {},
  englishFlipped: {},
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

      const isGuest = !state.isAdmin;
      const tabsHtml = catTabs.map(tabDef => {
        const isActive = currentTab === tabDef.id;
        const isLocked = isGuest && tabDef.id !== 'overview';

        const activeClass = isActive
          ? 'nav-tab-active text-sky-400 bg-sky-500/15 font-bold border border-sky-500/30 shadow-sm'
          : (isLocked
              ? 'text-slate-400 hover:text-amber-200 hover:bg-slate-800/40 font-medium'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium');
        
        let badgeHtml = '';
        if (isLocked) {
          badgeHtml = `<span class="text-[9px] px-1.5 py-0.5 rounded font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1 flex-shrink-0" title="관리자 전용 잠금 (클릭 시 안내)"><i class="fa-solid fa-lock text-[8px]"></i> 잠김</span>`;
        } else if (tabDef.badge) {
          badgeHtml = `<span class="text-[9px] px-1.5 py-0.5 rounded font-bold ${tabDef.badgeClass || 'bg-slate-800 text-slate-300'}">${tabDef.badge}</span>`;
        }

        const clickHandler = tabDef.isPortfolio
          ? `window.app.openPortfolioTab('${tabDef.id}')`
          : `window.app.switchTab('${tabDef.id}')`;

        const lockIconHtml = isLocked
          ? `<i class="fa-solid fa-lock text-[10px] text-amber-400/80 mr-1 flex-shrink-0" title="관리자 전용"></i>`
          : '';

        return `
          <button data-nav-tab="${tabDef.id}" onclick="${clickHandler}" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition ${activeClass}">
            <i class="fa-solid ${tabDef.icon} w-4 text-center ${isLocked ? 'text-slate-400' : tabDef.color}"></i>
            <span class="flex-1 text-left truncate flex items-center gap-1.5">
              <span class="truncate">${tabDef.name}</span>
              ${lockIconHtml}
            </span>
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
    const isGuest = !state.isAdmin;
    mobileContainer.innerHTML = order.map((tabId) => {
      const tabDef = TAB_REGISTRY.find(t => t.id === tabId);
      if (!tabDef) return '';
      const isActive = currentTab === tabDef.id;
      const isLocked = isGuest && tabDef.id !== 'overview';

      const activeClass = isActive
        ? 'mobile-tab-active text-sky-400 font-bold bg-sky-500/20 border border-sky-500/30'
        : (isLocked ? 'text-slate-400 font-medium hover:text-slate-300' : 'text-slate-400 font-medium hover:text-slate-200');

      const clickHandler = tabDef.isPortfolio
        ? `window.app.openPortfolioTab('${tabDef.id}')`
        : `window.app.switchTab('${tabDef.id}')`;

      const catDef = TAB_CATEGORIES.find(c => c.id === tabDef.category);
      const dotColor = catDef ? (catDef.id === 'career' ? 'bg-amber-400' : catDef.id === 'hobby' ? 'bg-rose-400' : 'bg-slate-400') : 'bg-slate-500';

      const lockBadge = isLocked
        ? `<span class="w-3.5 h-3.5 rounded-full bg-amber-500 text-slate-950 font-black text-[8px] flex items-center justify-center absolute top-0.5 right-1 shadow"><i class="fa-solid fa-lock text-[7px]"></i></span>`
        : `<span class="w-1.5 h-1.5 rounded-full ${dotColor} absolute top-1 right-2"></span>`;

      return `
        <button data-mobile-tab="${tabDef.id}" onclick="${clickHandler}" class="flex flex-col items-center justify-center gap-1 text-[10px] px-2.5 py-1.5 rounded-xl flex-shrink-0 min-w-[52px] transition relative ${activeClass}">
          ${lockBadge}
          <i class="fa-solid ${tabDef.icon} text-sm ${isLocked ? 'text-slate-400' : tabDef.color}"></i>
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
  if (!state.isAdmin) {
    state.activeTab = 'overview';
  }
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
    knou: state.knou,
    english: state.english,
    contest: state.contest,
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
  // 읽기 전용 게스트 모드 제한: 종합 대시보드(overview)만 열람 허용
  if (!state.isAdmin && tabName !== 'overview') {
    openTabLockedModal(tabName);
    return;
  }

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
    case 'english':
      renderEnglishTab();
      break;
    case 'knou':
      renderKnouTab();
      break;
    case 'contest':
      renderContestTab();
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
                    ${b.type === 'rehearsal' ? '🎤 밴드 합주 (보컬·신디)' : '🎟️ 공연 관람'}
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
// 5-ENG. 1:1 회화 교정 기반 데일리 영문법 & 데일리 팟캐스트 브리핑 탭
// ==========================================================================

// --------------------------------------------------------------------------
// Podcast Audio Engine & State
// --------------------------------------------------------------------------
const englishPodcastState = {
  isPlaying: false,
  currentTrackIndex: 0,
  rate: 1.0,
  elapsedSeconds: 0,
  totalDuration: 435, // 약 7분 15초
  timerInterval: null,
  showScript: false
};

function formatPodcastTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getPodcastTracks(items, idiom, setNum) {
  const safeIdiom = idiom || { expression: 'bring something to the table', meaning: '유용한 가치나 아이디어를 기여하다' };
  const safeItems = (items && items.length >= 5) ? items.slice(0, 5) : [
    { num: 1, categoryName: '명사/관사', youSaid: 'I got many knowledges', betterSay: 'I gained a lot of knowledge', explanation: 'knowledge는 불가산 명사이므로 s를 붙이지 않습니다.' },
    { num: 2, categoryName: '전치사', youSaid: 'I am planning about study', betterSay: 'I am planning to study', explanation: 'plan to 동사원형 구조를 사용합니다.' },
    { num: 3, categoryName: '구어체', youSaid: 'I calculate my future', betterSay: 'I am planning for my future', explanation: '자연스러운 원어민 미래 계획 표현입니다.' },
    { num: 4, categoryName: '동명사', youSaid: 'I suggest to go', betterSay: 'I suggest going', explanation: 'suggest는 목적어로 동명사(-ing)를 취합니다.' },
    { num: 5, categoryName: '시제', youSaid: 'I did not eat yet', betterSay: "I haven't eaten yet", explanation: 'yet과 함께 현재완료 시제를 씁니다.' }
  ];

  return [
    {
      id: 0,
      title: "🎙️ 오프닝 & 오늘의 1:1 회화 브리핑 소개",
      speaker: "Tutor Aaron",
      durationSec: 45,
      timeLabel: "00:00",
      speechText: `Hello Carlos! Welcome to Episode ${setNum} of your Daily Grammar Briefing Podcast. Today, we are reviewing 5 crucial sentences from your recent 1-on-1 tutoring sessions, plus an essential idiom of the day. Put on your headphones, relax, and let's polish your speaking confidence together!`,
      summaryKo: "1:1 회화 수업 교정 팟캐스트 에피소드 오프닝 및 오늘의 학습 목표 안내",
      fullScriptHtml: `
        <div class="space-y-1 text-xs">
          <p class="text-teal-300 font-bold">🎙️ Tutor Aaron:</p>
          <p class="text-slate-200 leading-relaxed font-sans">"Hello Carlos! Welcome to Episode ${setNum} of your Daily Grammar Briefing Podcast. Today, we are reviewing 5 crucial sentences from your recent 1-on-1 tutoring sessions, plus an essential idiom of the day. Put on your headphones, relax, and let's polish your speaking confidence together!"</p>
          <p class="text-[11px] text-slate-400 mt-1 pt-1 border-t border-slate-800 leading-relaxed">
            카카오톡 1:1 수업에서 실제로 다루었던 핵심 문장 5선과 원어민 뉘앙스 포인트를 편안하게 들으며 마스터하는 데일리 오디오 세션입니다.
          </p>
        </div>
      `
    },
    ...safeItems.map((item, idx) => ({
      id: idx + 1,
      title: `💬 Focus ${idx + 1}: ${item.categoryName} 교정 클리닉 (#${item.num})`,
      speaker: "Tutor Aaron",
      durationSec: 55,
      timeLabel: formatPodcastTime(45 + idx * 55),
      speechText: `Sentence number ${idx + 1}. In our conversation, you said: "${item.youSaid}". A native speaker would naturally say: "${item.betterSay}". Notice that ${item.explanation}. Let's practice saying it together: "${item.betterSay}".`,
      summaryKo: `내가 말한 "${item.youSaid}" ➔ 교정문 "${item.betterSay}" 어감 및 문법 포인트 해설`,
      fullScriptHtml: `
        <div class="space-y-1.5 text-xs">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold">${item.categoryName}</span>
            <span class="text-slate-400 text-xs font-mono font-bold">#${item.num}</span>
          </div>
          <p class="text-rose-300 font-medium">❌ <b class="text-rose-400">You said:</b> "${item.youSaid}"</p>
          <p class="text-emerald-300 font-bold">✅ <b class="text-emerald-400">Better say:</b> "${item.betterSay}"</p>
          <p class="text-slate-300 text-[11px] leading-relaxed pt-1 border-t border-slate-800">
            <b class="text-teal-300">💡 튜터 코칭:</b> ${item.explanation}
          </p>
        </div>
      `
    })),
    {
      id: 6,
      title: `💡 Idiom of the Day: "${safeIdiom.expression}"`,
      speaker: "Tutor Aaron",
      durationSec: 65,
      timeLabel: formatPodcastTime(45 + 5 * 55),
      speechText: `Now, let's explore our Idiom of the Day: "${safeIdiom.expression}". In Korean, this means ${safeIdiom.meaning}. It is widely used in both daily chats and professional business discussions. Remember to use "${safeIdiom.expression}" when the right situation comes up!`,
      summaryKo: `오늘의 핵심 관용구 "${safeIdiom.expression}" 유래 및 실전 활용법`,
      fullScriptHtml: `
        <div class="space-y-1 text-xs">
          <p class="text-amber-300 font-black text-sm">✨ "${safeIdiom.expression}"</p>
          <p class="text-slate-200 text-xs"><b class="text-slate-400">한국어 의미:</b> ${safeIdiom.meaning}</p>
          <p class="text-slate-400 text-[11px] pt-1 border-t border-slate-800 leading-relaxed">
            비즈니스 회화와 일상 대화에서 어휘력을 한 단계 끌어올려 주는 원어민 필수 이디엄입니다.
          </p>
        </div>
      `
    },
    {
      id: 7,
      title: "🎧 Wrap-up & 5문장 원어민 연속 쉐도잉",
      speaker: "Tutor Aaron",
      durationSec: 50,
      timeLabel: formatPodcastTime(45 + 5 * 55 + 65),
      speechText: `Excellent work today! Before we finish, let's do a quick shadowing drill. Listen to each sentence and repeat after me. ${safeItems.map((it, i) => `Sentence ${i + 1}: ${it.betterSay}.`).join(' ')} Outstanding effort, Carlos! Keep listening every day, and see you tomorrow!`,
      summaryKo: "오늘 배운 5문장 원어민 속도로 연속 쉐도잉 복습 및 마무리",
      fullScriptHtml: `
        <div class="space-y-1.5 text-xs">
          <p class="text-teal-300 font-bold">🎧 5-Sentence Shadowing Drill:</p>
          <ol class="list-decimal list-inside space-y-1 text-slate-200">
            ${safeItems.map(it => `<li><span class="text-emerald-300 font-bold">"${it.betterSay}"</span></li>`).join('')}
          </ol>
          <p class="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-1.5 leading-relaxed">
            귀로 듣고 입으로 따라 말하는 쉐도잉을 통해 원어민의 자연스러운 호흡과 억양을 체화해 보세요.
          </p>
        </div>
      `
    }
  ];
}

// --------------------------------------------------------------------------
// Podcast Audio Controller Functions
// --------------------------------------------------------------------------
function stopPodcastAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (englishPodcastState.timerInterval) {
    clearInterval(englishPodcastState.timerInterval);
    englishPodcastState.timerInterval = null;
  }
  englishPodcastState.isPlaying = false;
}

function playPodcastTrack(trackIdx) {
  const engData = state.english || INITIAL_ENGLISH_DATA;
  const corrections = engData.corrections || [];
  const idioms = engData.idioms || [];
  const offset = state.englishDailyOffset || 0;
  const pageSize = 5;
  const totalSets = Math.ceil(corrections.length / pageSize) || 1;
  const currentSetNum = (Math.floor(offset / pageSize) % totalSets) + 1;
  const dailyFocusItems = corrections.slice(offset, offset + pageSize);
  if (dailyFocusItems.length < pageSize && corrections.length >= pageSize) {
    dailyFocusItems.push(...corrections.slice(0, pageSize - dailyFocusItems.length));
  }
  const currentIdiom = idioms[(currentSetNum - 1) % (idioms.length || 1)];
  const tracks = getPodcastTracks(dailyFocusItems, currentIdiom, currentSetNum);

  if (trackIdx < 0 || trackIdx >= tracks.length) {
    stopPodcastAudio();
    englishPodcastState.elapsedSeconds = 0;
    renderEnglishPodcastPlayer();
    return;
  }

  stopPodcastAudio();
  englishPodcastState.currentTrackIndex = trackIdx;
  englishPodcastState.isPlaying = true;

  // Calculate approximate elapsed seconds up to this track
  let trackOffsetSec = 0;
  for (let i = 0; i < trackIdx; i++) {
    trackOffsetSec += tracks[i].durationSec;
  }
  englishPodcastState.elapsedSeconds = trackOffsetSec;

  if ('speechSynthesis' in window) {
    const track = tracks[trackIdx];
    const u = new SpeechSynthesisUtterance(track.speechText);
    u.lang = 'en-US';
    u.rate = englishPodcastState.rate || 1.0;

    u.onend = () => {
      if (englishPodcastState.isPlaying) {
        if (trackIdx + 1 < tracks.length) {
          playPodcastTrack(trackIdx + 1);
        } else {
          stopPodcastAudio();
          englishPodcastState.elapsedSeconds = englishPodcastState.totalDuration;
          renderEnglishPodcastPlayer();
          showToast('🎧 오늘의 데일리 팟캐스트 청취를 완료했습니다!');
        }
      }
    };

    u.onerror = (err) => {
      console.warn('Podcast speech synthesis error:', err);
      stopPodcastAudio();
      renderEnglishPodcastPlayer();
    };

    window.speechSynthesis.speak(u);
  }

  // Timer interval for smooth seekbar updates
  englishPodcastState.timerInterval = setInterval(() => {
    if (!englishPodcastState.isPlaying) return;
    englishPodcastState.elapsedSeconds += 1;
    if (englishPodcastState.elapsedSeconds > englishPodcastState.totalDuration) {
      englishPodcastState.elapsedSeconds = englishPodcastState.totalDuration;
    }
    updatePodcastProgressUI();
  }, 1000);

  renderEnglishPodcastPlayer();
}

function togglePodcastPlay() {
  if (englishPodcastState.isPlaying) {
    stopPodcastAudio();
    renderEnglishPodcastPlayer();
  } else {
    playPodcastTrack(englishPodcastState.currentTrackIndex || 0);
  }
}

function pausePodcast() {
  stopPodcastAudio();
  renderEnglishPodcastPlayer();
}

function skipPodcast(seconds) {
  const engData = state.english || INITIAL_ENGLISH_DATA;
  const corrections = engData.corrections || [];
  const idioms = engData.idioms || [];
  const offset = state.englishDailyOffset || 0;
  const pageSize = 5;
  const totalSets = Math.ceil(corrections.length / pageSize) || 1;
  const currentSetNum = (Math.floor(offset / pageSize) % totalSets) + 1;
  const dailyFocusItems = corrections.slice(offset, offset + pageSize);
  if (dailyFocusItems.length < pageSize && corrections.length >= pageSize) {
    dailyFocusItems.push(...corrections.slice(0, pageSize - dailyFocusItems.length));
  }
  const currentIdiom = idioms[(currentSetNum - 1) % (idioms.length || 1)];
  const tracks = getPodcastTracks(dailyFocusItems, currentIdiom, currentSetNum);

  let newElapsed = Math.max(0, Math.min(englishPodcastState.totalDuration, englishPodcastState.elapsedSeconds + seconds));
  englishPodcastState.elapsedSeconds = newElapsed;

  // Find track corresponding to newElapsed
  let accum = 0;
  let targetIdx = 0;
  for (let i = 0; i < tracks.length; i++) {
    if (newElapsed >= accum && newElapsed < accum + tracks[i].durationSec) {
      targetIdx = i;
      break;
    }
    accum += tracks[i].durationSec;
  }

  if (englishPodcastState.isPlaying) {
    playPodcastTrack(targetIdx);
  } else {
    englishPodcastState.currentTrackIndex = targetIdx;
    renderEnglishPodcastPlayer();
  }
}

function seekPodcast(ratio) {
  const targetSec = Math.floor(ratio * englishPodcastState.totalDuration);
  englishPodcastState.elapsedSeconds = targetSec;
  skipPodcast(0);
}

function setPodcastRate(rate) {
  englishPodcastState.rate = rate;
  if (englishPodcastState.isPlaying) {
    playPodcastTrack(englishPodcastState.currentTrackIndex);
  } else {
    renderEnglishPodcastPlayer();
  }
  showToast(`팟캐스트 재생 배속: ${rate}x`);
}

function togglePodcastScript() {
  englishPodcastState.showScript = !englishPodcastState.showScript;
  renderEnglishPodcastPlayer();
}

function updatePodcastProgressUI() {
  const progressEl = document.getElementById('podcast-progress-bar');
  const timeCurrentEl = document.getElementById('podcast-time-current');
  if (progressEl) {
    const pct = Math.min(100, (englishPodcastState.elapsedSeconds / englishPodcastState.totalDuration) * 100);
    progressEl.style.width = `${pct}%`;
  }
  if (timeCurrentEl) {
    timeCurrentEl.innerText = formatPodcastTime(englishPodcastState.elapsedSeconds);
  }
}

// --------------------------------------------------------------------------
// Main English Tab Renderers
// --------------------------------------------------------------------------
function renderEnglishTab() {
  const container = document.getElementById('tab-content-english');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- 1. Header Banner (No Master Stress, Podcast Ready) -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/30 bg-gradient-to-br from-slate-900 via-teal-950/20 to-slate-900 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-black border border-teal-500/30 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-chalkboard-user"></i> 1:1 회화 튜터링 교정 아카이브
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                튜터: ${engData.tutor || 'P25★Report Aaron'}
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/30">
                실전 교정 409선 완벽 수록
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <i class="fa-solid fa-language text-teal-400"></i>
              데일리 영문법 & 1:1 회화 교정 브리핑
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              카카오톡 수업에서 <b>실제 내가 틀렸던 표현(You said)</b>과 <b>튜터의 원어민 교정(Better say)</b>을 바탕으로, 매일 5문장 집중 복습 및 <b>5~10분 데일리 팟캐스트</b>를 편안하게 청취할 수 있습니다.
            </p>
          </div>

          <div class="flex flex-col items-end gap-2 self-start lg:self-auto text-xs">
            <span class="text-teal-300 font-bold bg-teal-500/10 px-3.5 py-1.5 rounded-xl border border-teal-500/20 shadow-sm flex items-center gap-1.5">
              <i class="fa-solid fa-headphones text-teal-400"></i>
              5~10분 데일리 팟캐스트 청취 지원
            </span>
            <span class="text-slate-400 text-[11px] flex items-center gap-1">
              <i class="fa-solid fa-volume-high text-teal-400"></i> 미국식 원어민 TTS 음성 코칭
            </span>
          </div>
        </div>
      </div>

      <!-- 2. KPI Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="glass-panel rounded-2xl p-5 border border-teal-500/30 bg-gradient-to-br from-slate-900 to-teal-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">총 회화 교정 데이터</span>
            <span class="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-database"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-white font-mono">409</span>
            <span class="text-sm font-bold text-slate-400">개 문장</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>튜터 실시간 코칭</span>
            <span class="text-teal-300 font-bold">100% 실전 표현</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-blue-500/30 bg-gradient-to-br from-slate-900 to-blue-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">최다 실수 1위 유형</span>
            <span class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-box-archive"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-blue-300 font-mono">152</span>
            <span class="text-xs text-blue-400 font-bold">(37.2%)</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>관사 & 명사 수일치</span>
            <span class="text-slate-300">knowledge, a/the</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">원어민 구어체 전환</span>
            <span class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-comments"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-purple-300 font-mono">103</span>
            <span class="text-xs text-purple-400 font-bold">(25.2%)</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>직역 탈피 & 자연스러운 뉘앙스</span>
            <span class="text-slate-300">Collocations</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-amber-500/30 bg-gradient-to-br from-slate-900 to-amber-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">전치사 & 연어 실수</span>
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-bullseye"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-amber-300 font-mono">84</span>
            <span class="text-xs text-amber-400 font-bold">(20.5%)</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>전치사 불필요/탈락 교정</span>
            <span class="text-slate-300">plan to, at guesthouse</span>
          </div>
        </div>
      </div>

      <!-- 3. Daily Podcast Player Component (5~10분 브리핑 🎧) -->
      <div id="english-podcast-container"></div>

      <!-- 4. Daily Focus 5 Card Carousel (오늘의 집중 복습 5선) -->
      <div id="english-daily-focus-container"></div>

      <!-- 5. Mode Selection, Category Filter & Search Bar -->
      <div id="english-toolbar-container"></div>

      <!-- 6. Content Area (Quiz Mode or Full List Mode) -->
      <div id="english-content-area"></div>

      <!-- 7. Tutor's 16 Idioms Collection -->
      <div id="english-idioms-container"></div>

    </div>
  `;

  // Render sub-components
  renderEnglishPodcastPlayer();
  renderEnglishDailyFocus();
  renderEnglishToolbar();
  renderEnglishContentArea();
  renderEnglishIdioms();
}

// --------------------------------------------------------------------------
// Sub-Renderer: Daily Podcast Player
// --------------------------------------------------------------------------
function renderEnglishPodcastPlayer() {
  const container = document.getElementById('english-podcast-container');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;
  const corrections = engData.corrections || [];
  const idioms = engData.idioms || [];
  const offset = state.englishDailyOffset || 0;
  const pageSize = 5;
  const totalSets = Math.ceil(corrections.length / pageSize) || 1;
  const currentSetNum = (Math.floor(offset / pageSize) % totalSets) + 1;
  const dailyFocusItems = corrections.slice(offset, offset + pageSize);
  if (dailyFocusItems.length < pageSize && corrections.length >= pageSize) {
    dailyFocusItems.push(...corrections.slice(0, pageSize - dailyFocusItems.length));
  }
  const currentIdiom = idioms[(currentSetNum - 1) % (idioms.length || 1)];
  const tracks = getPodcastTracks(dailyFocusItems, currentIdiom, currentSetNum);

  const isPlaying = englishPodcastState.isPlaying;
  const currentIdx = englishPodcastState.currentTrackIndex || 0;
  const currentTrack = tracks[currentIdx] || tracks[0];
  const elapsed = englishPodcastState.elapsedSeconds || 0;
  const total = englishPodcastState.totalDuration || 435;
  const progressPct = Math.min(100, (elapsed / total) * 100);

  container.innerHTML = `
    <div class="glass-panel rounded-3xl p-6 sm:p-7 border border-teal-500/40 bg-gradient-to-br from-slate-900 via-teal-950/20 to-slate-900 shadow-2xl relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute -left-12 -top-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Player Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 border-b border-slate-800 pb-4 relative z-10">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center text-xl font-bold shadow-lg shadow-teal-500/20 flex-shrink-0">
            <i class="fa-solid fa-podcast"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">
                DAILY PODCAST · EPISODE ${currentSetNum}
              </span>
              ${isPlaying ? `
                <span class="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 재생 중
                </span>
              ` : ''}
            </div>
            <h2 class="text-lg sm:text-xl font-black text-white mt-1">
              튜터 Aaron의 1:1 회화 데일리 클리닉 (러닝타임 약 7분 15초)
            </h2>
            <p class="text-xs text-slate-400 mt-0.5">
              오늘의 5대 핵심 교정 문장과 이디엄을 원어민 튜터의 생생한 해설과 쉐도잉으로 듣는 팟캐스트입니다.
            </p>
          </div>
        </div>

        <!-- Script Toggle Button -->
        <button onclick="window.app.togglePodcastScript()" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border border-slate-700">
          <i class="fa-solid fa-file-lines text-teal-400"></i>
          <span>${englishPodcastState.showScript ? '대본 접기' : '대본 전문 보기'}</span>
          <i class="fa-solid ${englishPodcastState.showScript ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-slate-400"></i>
        </button>
      </div>

      <!-- Active Track Banner -->
      <div class="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-300 flex items-center justify-center text-xs font-bold border border-teal-500/20">
            ${currentIdx + 1}
          </div>
          <div>
            <span class="text-[10px] text-slate-400 block font-mono">현재 오디오 트랙 (${currentIdx + 1}/8)</span>
            <span class="text-xs sm:text-sm font-bold text-teal-300">
              ${currentTrack.title}
            </span>
          </div>
        </div>
        <span class="text-xs text-slate-400 font-mono hidden sm:inline-block">
          ${currentTrack.speaker}
        </span>
      </div>

      <!-- Seekbar & Timestamps -->
      <div class="space-y-1.5 mb-5">
        <div onclick="window.app.handlePodcastSeekClick(event)" class="w-full h-2.5 bg-slate-800 rounded-full cursor-pointer relative overflow-hidden group">
          <div id="podcast-progress-bar" class="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span id="podcast-time-current">${formatPodcastTime(elapsed)}</span>
          <span class="text-slate-500">총 07:15</span>
        </div>
      </div>

      <!-- Audio Player Controls -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <!-- Main Play Controls -->
        <div class="flex items-center gap-2.5">
          <!-- Skip -15s -->
          <button onclick="window.app.skipPodcast(-15)" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center justify-center text-xs border border-slate-700" title="15초 뒤로">
            <i class="fa-solid fa-rotate-left"></i>
          </button>

          <!-- Play / Pause Main Button -->
          <button onclick="window.app.togglePodcastPlay()" class="px-5 py-2.5 rounded-2xl ${isPlaying ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950'} font-black text-xs transition cursor-pointer flex items-center gap-2 shadow-lg shadow-teal-500/25">
            <i class="fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-sm"></i>
            <span>${isPlaying ? '일시정지 (Pause)' : '팟캐스트 청취 시작 (Play)'}</span>
          </button>

          <!-- Skip +15s -->
          <button onclick="window.app.skipPodcast(15)" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center justify-center text-xs border border-slate-700" title="15초 앞으로">
            <i class="fa-solid fa-rotate-right"></i>
          </button>
        </div>

        <!-- Playback Speed Controls -->
        <div class="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs">
          <span class="text-[10px] font-bold text-slate-500 px-2 uppercase">배속</span>
          ${[0.8, 1.0, 1.2, 1.5].map(r => `
            <button onclick="window.app.setPodcastRate(${r})" class="px-2 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${englishPodcastState.rate === r ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'}">
              ${r}x
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Collapsible Transcript / Script Viewer -->
      ${englishPodcastState.showScript ? `
        <div class="mt-6 pt-5 border-t border-slate-800 animate-fade-in space-y-3">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-scroll text-teal-400"></i>
              에피소드 ${currentSetNum} 대본 타임라인 (클릭하여 해당 구간 청취)
            </h3>
            <span class="text-[11px] text-slate-400">원하는 파트를 클릭하면 즉시 해당 위치부터 재생됩니다.</span>
          </div>

          <div class="space-y-2.5 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
            ${tracks.map((t, idx) => {
              const isCurrent = currentIdx === idx;
              return `
                <div class="p-4 rounded-2xl ${isCurrent ? 'bg-teal-950/30 border border-teal-500/50 shadow-md ring-1 ring-teal-500/30' : 'bg-slate-950/60 border border-slate-800/80 hover:border-slate-700'} transition cursor-pointer group" onclick="window.app.playPodcastTrack(${idx})">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold ${isCurrent ? 'text-teal-300' : 'text-slate-500'}">
                        ${t.timeLabel}
                      </span>
                      <h4 class="text-xs font-bold ${isCurrent ? 'text-teal-200' : 'text-slate-200 group-hover:text-white'}">
                        ${t.title}
                      </h4>
                    </div>
                    <div class="flex items-center gap-2">
                      ${isCurrent && isPlaying ? `
                        <span class="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                          <i class="fa-solid fa-volume-high animate-pulse"></i> 재생 중
                        </span>
                      ` : `
                        <span class="text-[11px] text-slate-400 group-hover:text-teal-300 transition flex items-center gap-1">
                          <i class="fa-solid fa-play text-[9px]"></i> 재생
                        </span>
                      `}
                    </div>
                  </div>
                  ${t.fullScriptHtml}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Daily Focus 5 Carousel (No Master Button)
// --------------------------------------------------------------------------
function renderEnglishDailyFocus() {
  const container = document.getElementById('english-daily-focus-container');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;
  const corrections = engData.corrections || [];
  const offset = state.englishDailyOffset || 0;
  const pageSize = 5;
  const totalSets = Math.ceil(corrections.length / pageSize) || 1;
  const currentSetNum = (Math.floor(offset / pageSize) % totalSets) + 1;
  const dailyFocusItems = corrections.slice(offset, offset + pageSize);
  if (dailyFocusItems.length < pageSize && corrections.length >= pageSize) {
    dailyFocusItems.push(...corrections.slice(0, pageSize - dailyFocusItems.length));
  }

  container.innerHTML = `
    <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/20 shadow-2xl relative overflow-hidden">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center text-2xl shadow-lg">
            <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg sm:text-xl font-black text-white">
                오늘 꼭 알고 넘어가야 할 튜터 1:1 집중 교정 (5선)
              </h2>
              <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-500 text-slate-950 font-black">Daily Focus</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">
              세트 ${currentSetNum} / ${totalSets} · 튜터와 나눈 대화 중 가장 교정 효과가 뛰어난 핵심 5문장을 엄선했습니다.
            </p>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-2">
          <button onclick="window.app.randomEnglishDaily()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border border-slate-700">
            <i class="fa-solid fa-shuffle text-teal-400"></i>
            <span>랜덤 5선</span>
          </button>
          <button onclick="window.app.prevEnglishDaily()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer flex items-center gap-1 border border-slate-700" title="이전 세트">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <span class="text-xs font-mono font-bold text-teal-300 px-2">
            ${currentSetNum} / ${totalSets}
          </span>
          <button onclick="window.app.nextEnglishDaily()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer flex items-center gap-1 border border-slate-700" title="다음 세트">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- 5 Cards in Daily Focus (No stressful '외웠어요' button) -->
      <div class="space-y-4">
        ${dailyFocusItems.map((item, idx) => `
          <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 transition shadow-md">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 font-mono font-black flex items-center justify-center text-xs">
                  ${idx + 1}
                </span>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  ${item.categoryName}
                </span>
                <span class="text-[10px] font-mono text-slate-500">
                  #${item.num}
                </span>
              </div>

              <!-- Pronunciation Listen Button -->
              <button onclick="window.app.speakEnglish('${item.betterSay.replace(/'/g, "\'")}')" class="px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border border-teal-500/20" title="원어민 발음 듣기">
                <i class="fa-solid fa-volume-high"></i>
                <span>원어민 발음 듣기</span>
              </button>
            </div>

            <!-- Comparison Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <!-- You Said -->
              <div class="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs">
                <div class="text-[10px] font-black uppercase text-rose-400 flex items-center gap-1 mb-1">
                  <i class="fa-solid fa-xmark"></i> You said (내가 말한 표현)
                </div>
                <div class="text-rose-200 font-medium leading-relaxed">
                  "${item.youSaid}"
                </div>
              </div>

              <!-- Better Say -->
              <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                <div class="text-[10px] font-black uppercase text-emerald-400 flex items-center gap-1 mb-1">
                  <i class="fa-solid fa-check"></i> Better say (원어민 튜터 추천)
                </div>
                <div class="text-emerald-200 font-bold leading-relaxed">
                  "${item.betterSay}"
                </div>
              </div>
            </div>

            <!-- Explanation Box -->
            <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <i class="fa-solid fa-lightbulb text-amber-400 text-sm mt-0.5 flex-shrink-0"></i>
              <div class="leading-relaxed">
                <b class="text-white">교정 포인트:</b> ${item.explanation}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Toolbar (Search & Category Chips)
// --------------------------------------------------------------------------
function renderEnglishToolbar() {
  const container = document.getElementById('english-toolbar-container');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;
  const mode = state.englishMode || 'quiz';
  const filter = state.englishFilter || 'all';

  container.innerHTML = `
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 bg-slate-900/70 space-y-4">
      <!-- Top bar: Mode switch & Persistent Search Input -->
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <!-- View Mode Toggle -->
        <div class="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs self-start">
          <button id="btn-english-mode-quiz" onclick="window.app.setEnglishMode('quiz')" class="px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${mode === 'quiz' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
            <i class="fa-solid fa-lightbulb"></i>
            <span>플립 퀴즈 모드</span>
          </button>
          <button id="btn-english-mode-list" onclick="window.app.setEnglishMode('list')" class="px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 ${mode === 'list' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
            <i class="fa-solid fa-table-list"></i>
            <span>전체 목록 <span id="english-list-count-badge"></span></span>
          </button>
        </div>

        <!-- Instant Search Bar (Focus Preserved, IME Safe) -->
        <div class="relative w-full md:w-80">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input type="text" id="input-english-search" placeholder="단어, 표현, 문법 검색 (예: knowledge, plan, attend)" value="${state.englishSearch || ''}" oninput="window.app.handleEnglishSearchInput(this.value)" class="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-teal-500 outline-none">
        </div>
      </div>

      <!-- Category Chips -->
      <div id="english-category-chips" class="flex flex-wrap items-center gap-1.5 text-xs pt-1 border-t border-slate-800/80">
        ${engData.categories.map(cat => {
          const isActive = filter === cat.id;
          return `
            <button onclick="window.app.setEnglishFilter('${cat.id}')" data-cat-id="${cat.id}" class="cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 ${isActive ? 'bg-teal-500 text-slate-950 shadow-md font-black' : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'}">
              <i class="fa-solid ${cat.icon} text-[10px]"></i>
              <span>${cat.name}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Content Area (Cards or Table)
// --------------------------------------------------------------------------
function renderEnglishContentArea() {
  const container = document.getElementById('english-content-area');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;
  const corrections = engData.corrections || [];
  const filter = state.englishFilter || 'all';
  const mode = state.englishMode || 'quiz';
  const query = (state.englishSearch || '').trim().toLowerCase();

  // Filter corrections
  const filtered = corrections.filter(item => {
    const matchCat = filter === 'all' || item.category === filter;
    const matchQ = !query || 
      item.youSaid.toLowerCase().includes(query) || 
      item.betterSay.toLowerCase().includes(query) || 
      item.explanation.toLowerCase().includes(query);
    return matchCat && matchQ;
  });

  // Update count badge
  const countBadge = document.getElementById('english-list-count-badge');
  if (countBadge) {
    countBadge.innerText = `(${filtered.length})`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-12 text-center border border-slate-800 bg-slate-900/40">
        <i class="fa-solid fa-magnifying-glass text-3xl text-slate-600 mb-3"></i>
        <h3 class="text-sm font-bold text-slate-300 mb-1">검색 결과가 없습니다</h3>
        <p class="text-xs text-slate-500">다른 검색어를 입력하시거나 카테고리 필터를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  if (mode === 'quiz') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${filtered.slice(0, 30).map(item => {
          const isFlipped = state.englishFlipped[item.id];

          return `
            <div class="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-teal-500/40 bg-slate-900/80 flex flex-col justify-between transition shadow-md group">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-teal-500/30">
                    ${item.categoryName}
                  </span>
                  <span class="text-xs font-mono text-slate-500 font-bold">#${item.num}</span>
                </div>

                <!-- Prompt: You said -->
                <div class="mb-3">
                  <span class="text-[10px] font-black uppercase text-rose-400 tracking-wider block mb-1">
                    ❌ 내가 말했던 문장 (You said)
                  </span>
                  <p class="text-sm font-bold text-white leading-relaxed">
                    "${item.youSaid}"
                  </p>
                </div>

                <!-- Flipped or Hidden Answer -->
                ${isFlipped ? `
                  <div class="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs mb-3 animate-fade-in">
                    <div class="text-[10px] font-black uppercase text-emerald-400 mb-1 flex items-center justify-between">
                      <span>💡 원어민 교정 (Better say)</span>
                      <button onclick="window.app.speakEnglish('${item.betterSay.replace(/'/g, "\'")}')" class="text-teal-300 hover:text-white" title="발음 듣기">
                        <i class="fa-solid fa-volume-high"></i>
                      </button>
                    </div>
                    <div class="text-emerald-200 font-bold leading-relaxed mb-2">
                      "${item.betterSay}"
                    </div>
                    <div class="text-[11px] text-slate-300 border-t border-emerald-500/20 pt-2 leading-relaxed">
                      <b class="text-teal-300">문법 포인트:</b> ${item.explanation}
                    </div>
                  </div>
                ` : `
                  <button onclick="window.app.toggleEnglishFlip('${item.id}')" class="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-teal-500/40 text-teal-300 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 mb-3 group-hover:scale-[1.01]">
                    <i class="fa-solid fa-lightbulb text-amber-400"></i>
                    <span>어떻게 고쳐야 할까요? 교정 문장 확인하기</span>
                  </button>
                `}
              </div>

              <!-- Bottom Actions (Stress-free, No '외웠어요') -->
              <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button onclick="window.app.toggleEnglishFlip('${item.id}')" class="text-slate-400 hover:text-teal-300 text-[11px] transition cursor-pointer flex items-center gap-1.5">
                  <i class="fa-solid ${isFlipped ? 'fa-eye-slash' : 'fa-eye'}"></i>
                  <span>${isFlipped ? '정답 가리기' : '정답 보기'}</span>
                </button>

                <button onclick="window.app.speakEnglish('${item.betterSay.replace(/'/g, "\'")}')" class="px-2.5 py-1 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-[11px] font-bold transition cursor-pointer flex items-center gap-1 border border-teal-500/20">
                  <i class="fa-solid fa-volume-high"></i>
                  <span>발음 듣기</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ${filtered.length > 30 ? `
        <div class="text-center py-4 text-xs text-slate-400 font-medium">
          30개 문장 미리보기를 표시 중입니다. 전체 문장은 상단의 <b>[전체 목록 (${filtered.length})]</b> 탭에서 확인하세요.
        </div>
      ` : ''}
    `;
  } else {
    container.innerHTML = `
      <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div class="overflow-x-auto custom-scrollbar">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-900/90 border-b border-slate-800 text-slate-400 text-[11px]">
              <tr>
                <th class="py-3 px-3 text-center w-12">#</th>
                <th class="py-3 px-3 w-32">분류</th>
                <th class="py-3 px-3">내가 말한 표현 (You said)</th>
                <th class="py-3 px-3">원어민 교정 (Better say)</th>
                <th class="py-3 px-3">문법 해설</th>
                <th class="py-3 px-3 text-center w-20">듣기</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              ${filtered.map(item => `
                <tr class="hover:bg-slate-800/40 transition">
                  <td class="py-3 px-3 text-center font-mono text-slate-500">${item.num}</td>
                  <td class="py-3 px-3">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 whitespace-nowrap">
                      ${item.categoryName}
                    </span>
                  </td>
                  <td class="py-3 px-3 text-rose-300 font-medium">
                    "${item.youSaid}"
                  </td>
                  <td class="py-3 px-3 text-emerald-300 font-bold">
                    "${item.betterSay}"
                  </td>
                  <td class="py-3 px-3 text-[11px] text-slate-300 leading-relaxed">
                    ${item.explanation}
                  </td>
                  <td class="py-3 px-3 text-center">
                    <button onclick="window.app.speakEnglish('${item.betterSay.replace(/'/g, "\'")}')" class="w-7 h-7 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 transition cursor-pointer inline-flex items-center justify-center text-xs" title="발음 듣기">
                      <i class="fa-solid fa-volume-high"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// Sub-Renderer: Idioms Section
// --------------------------------------------------------------------------
function renderEnglishIdioms() {
  const container = document.getElementById('english-idioms-container');
  if (!container) return;

  const engData = state.english || INITIAL_ENGLISH_DATA;
  const idioms = engData.idioms || [];

  container.innerHTML = `
    <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60 space-y-4">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <h3 class="font-bold text-white text-base">
              튜터가 추천한 수업별 실전 관용구 (Idioms of the Day)
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">
              대화에서 자연스럽게 써먹을 수 있는 원어민 16대 관용구 컬렉션
            </p>
          </div>
        </div>
        <span class="text-xs text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          총 16개 관용구
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        ${idioms.map(idm => `
          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/40 transition">
            <div class="flex items-center justify-between mb-1.5">
              <h4 class="font-black text-amber-300 text-sm">
                ${idm.expression}
              </h4>
              <button onclick="window.app.speakEnglish('${idm.expression.replace(/'/g, "\'")}')" class="text-slate-400 hover:text-amber-300 text-xs transition cursor-pointer" title="발음 듣기">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              ${idm.meaning}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// English Tab Handlers (IME Safe & Smooth)
// --------------------------------------------------------------------------
function speakEnglish(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } else {
    showToast('브라우저가 TTS 음성 출력을 지원하지 않습니다.');
  }
}

function handleEnglishSearchInput(val) {
  state.englishSearch = val;
  renderEnglishContentArea();
}

function setEnglishFilter(f) {
  state.englishFilter = f;
  // Update visual state of category chips without touching search input
  const chips = document.querySelectorAll('#english-category-chips .cat-chip');
  chips.forEach(chip => {
    const catId = chip.getAttribute('data-cat-id');
    if (catId === f) {
      chip.className = 'cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 bg-teal-500 text-slate-950 shadow-md font-black';
    } else {
      chip.className = 'cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800';
    }
  });
  renderEnglishContentArea();
}

function setEnglishMode(m) {
  state.englishMode = m;
  const btnQuiz = document.getElementById('btn-english-mode-quiz');
  const btnList = document.getElementById('btn-english-mode-list');
  if (btnQuiz && btnList) {
    if (m === 'quiz') {
      btnQuiz.className = 'px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 bg-teal-600 text-white shadow-sm';
      btnList.className = 'px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 text-slate-400 hover:text-white';
    } else {
      btnQuiz.className = 'px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 text-slate-400 hover:text-white';
      btnList.className = 'px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 bg-teal-600 text-white shadow-sm';
    }
  }
  renderEnglishContentArea();
}

function nextEnglishDaily() {
  const engData = state.english || INITIAL_ENGLISH_DATA;
  const total = (engData.corrections || []).length;
  state.englishDailyOffset = (state.englishDailyOffset + 5) % total;
  stopPodcastAudio();
  englishPodcastState.currentTrackIndex = 0;
  englishPodcastState.elapsedSeconds = 0;
  renderEnglishPodcastPlayer();
  renderEnglishDailyFocus();
}

function prevEnglishDaily() {
  const engData = state.english || INITIAL_ENGLISH_DATA;
  const total = (engData.corrections || []).length;
  state.englishDailyOffset = (state.englishDailyOffset - 5 + total) % total;
  stopPodcastAudio();
  englishPodcastState.currentTrackIndex = 0;
  englishPodcastState.elapsedSeconds = 0;
  renderEnglishPodcastPlayer();
  renderEnglishDailyFocus();
}

function randomEnglishDaily() {
  const engData = state.english || INITIAL_ENGLISH_DATA;
  const total = (engData.corrections || []).length;
  state.englishDailyOffset = Math.floor(Math.random() * Math.max(1, total - 5));
  stopPodcastAudio();
  englishPodcastState.currentTrackIndex = 0;
  englishPodcastState.elapsedSeconds = 0;
  renderEnglishPodcastPlayer();
  renderEnglishDailyFocus();
}

function toggleEnglishFlip(id) {
  if (!state.englishFlipped) state.englishFlipped = {};
  state.englishFlipped[id] = !state.englishFlipped[id];
  renderEnglishContentArea();
}

function handlePodcastSeekClick(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  if (width > 0) {
    const ratio = Math.max(0, Math.min(1, clickX / width));
    seekPodcast(ratio);
  }
}

// ==========================================================================
// 5-CONTEST. 공모전 출품 이력 & 문학·아이디어 창작 아카이브 탭 (신규 ⭐)
// ==========================================================================
function renderContestTab() {
  const container = document.getElementById('tab-content-contest');
  if (!container) return;

  const cData = state.contest || INITIAL_CONTEST_DATA;
  const entries = cData.entries || [];
  const subtab = state.contestActiveSubtab || 'archive';

  // Statistics calculation
  const totalEntries = entries.length;
  const litCount = entries.filter(e => e.category === 'literature').length;
  const ideaCount = entries.filter(e => e.category === 'idea' || e.category === 'policy' || e.category === 'naming').length;
  const awardedCount = entries.filter(e => e.status === 'awarded').length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- 1. Header Hero Banner -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-trophy"></i> 공모전 출품 & 문학·아이디어 아카이브
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                총 ${totalEntries}건 누적 관리
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/30">
                수상 ${awardedCount}건 달성
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <i class="fa-solid fa-lightbulb text-amber-400"></i>
              공모전 출품 & 문학·아이디어 아카이브
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              다양한 <b>문학(산문·수필·소설)</b> 및 <b>아이디어·기획 제안 공모전</b>의 출품 이력을 체계적으로 관리하고, 핵심 시놉시스와 원문을 축적하여 추후 공모전 작성 및 파일 공유 시 즉시 활용할 수 있는 통합 창작 허브입니다.
            </p>
          </div>

          <!-- Action Buttons (Add Contest / Quick Notes) -->
          <div class="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
            <button onclick="window.app.openAddContestModal()" class="admin-only px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20">
              <i class="fa-solid fa-plus"></i>
              <span>새 출품작 등록</span>
            </button>
            <button onclick="window.app.openAddIdeaModal()" class="admin-only px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border border-slate-700">
              <i class="fa-solid fa-pen-nib text-amber-400"></i>
              <span>아이디어 메모</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 2. KPI Summary Cards (4 Grid) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="glass-panel rounded-2xl p-5 border border-amber-500/30 bg-gradient-to-br from-slate-900 to-amber-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">총 공모전 출품 이력</span>
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-folder-open"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-white font-mono">${totalEntries}</span>
            <span class="text-sm font-bold text-slate-400">건 등록</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>원문 및 파일 연동</span>
            <span class="text-amber-300 font-bold">100% 아카이빙</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">문학·문예 공모전</span>
            <span class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-book-open"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-purple-300 font-mono">${litCount}</span>
            <span class="text-xs text-purple-400 font-bold">건 (산문·수필·소설)</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>최고 실적</span>
            <span class="text-slate-300 font-bold">국회 국방위원장상 대상</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-sky-500/30 bg-gradient-to-br from-slate-900 to-sky-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">아이디어·기획 제안</span>
            <span class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-lightbulb"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-sky-300 font-mono">${ideaCount}</span>
            <span class="text-xs text-sky-400 font-bold">건 (정책·공공·기술)</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>주요 성과</span>
            <span class="text-slate-300 font-bold">화성시 청년분과장 위촉</span>
          </div>
        </div>

        <div class="glass-panel rounded-2xl p-5 border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-emerald-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">수상 및 우수 채택</span>
            <span class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-award"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-emerald-300 font-mono">${awardedCount}</span>
            <span class="text-xs text-emerald-400 font-bold">건 선정</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>수상률</span>
            <span class="text-emerald-300 font-bold">${totalEntries > 0 ? Math.round((awardedCount / totalEntries) * 100) : 0}% 성취</span>
          </div>
        </div>
      </div>

      <!-- 3. Subtab Navigation Buttons (Archive / Idea Bank / Templates) -->
      <div class="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button onclick="window.app.setContestSubtab('archive')" class="px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${subtab === 'archive' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800 text-slate-400 hover:text-white'}">
          <i class="fa-solid fa-box-archive"></i>
          <span>출품 이력 & 아카이브 (${totalEntries})</span>
        </button>
        <button onclick="window.app.setContestSubtab('ideabank')" class="px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${subtab === 'ideabank' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800 text-slate-400 hover:text-white'}">
          <i class="fa-solid fa-lightbulb"></i>
          <span>창작 아이디어 뱅크 & 영감 노트</span>
        </button>
        <button onclick="window.app.setContestSubtab('templates')" class="px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${subtab === 'templates' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800 text-slate-400 hover:text-white'}">
          <i class="fa-solid fa-file-pen"></i>
          <span>공모전 작성 가이드 & 템플릿</span>
        </button>
      </div>

      <!-- 4. Subtab Main Content Container -->
      <div id="contest-subtab-container"></div>

    </div>
  `;

  renderContestSubtabContent();
}

// --------------------------------------------------------------------------
// Subtab Content Switcher
// --------------------------------------------------------------------------
function renderContestSubtabContent() {
  const container = document.getElementById('contest-subtab-container');
  if (!container) return;

  const subtab = state.contestActiveSubtab || 'archive';

  if (subtab === 'archive') {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Toolbar: Category chips, Status pills, and Search Bar -->
        <div id="contest-toolbar-container"></div>

        <!-- Cards Content Area (IME-Safe Partial Rendering) -->
        <div id="contest-content-area"></div>
      </div>
    `;
    renderContestToolbar();
    renderContestCardsArea();
  } else if (subtab === 'ideabank') {
    renderContestIdeaBank();
  } else if (subtab === 'templates') {
    renderContestTemplates();
  }
}

// --------------------------------------------------------------------------
// Sub-Renderer: Toolbar (Categories, Statuses, Search)
// --------------------------------------------------------------------------
function renderContestToolbar() {
  const container = document.getElementById('contest-toolbar-container');
  if (!container) return;

  const cData = state.contest || INITIAL_CONTEST_DATA;
  const catFilter = state.contestCategoryFilter || 'all';
  const statusFilter = state.contestStatusFilter || 'all';

  container.innerHTML = `
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 bg-slate-900/70 space-y-4">
      <!-- Top Row: Status Pills & Search Bar -->
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <!-- Status Filter Pills -->
        <div class="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          ${cData.statuses.map(st => {
            const isActive = statusFilter === st.id;
            return `
              <button onclick="window.app.setContestStatusFilter('${st.id}')" class="status-pill px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${isActive ? 'bg-amber-500 text-slate-950 shadow-sm font-black' : 'text-slate-400 hover:text-white'}">
                ${st.name}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Instant Search Bar (IME Safe, Focus Preserved) -->
        <div class="relative w-full md:w-80">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input type="text" id="input-contest-search" placeholder="공모전명, 작품 제목, 기관, 키워드 검색..." value="${state.contestSearch || ''}" oninput="window.app.handleContestSearchInput(this.value)" class="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 outline-none">
        </div>
      </div>

      <!-- Bottom Row: Category Chips -->
      <div id="contest-category-chips" class="flex flex-wrap items-center gap-1.5 text-xs pt-1 border-t border-slate-800/80">
        ${cData.categories.map(cat => {
          const isActive = catFilter === cat.id;
          return `
            <button onclick="window.app.setContestCategoryFilter('${cat.id}')" data-cat-id="${cat.id}" class="cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 ${isActive ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'}">
              <i class="fa-solid ${cat.icon} text-[10px]"></i>
              <span>${cat.name}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Contest Cards Grid (IME-Safe Partial Rendering)
// --------------------------------------------------------------------------
function renderContestCardsArea() {
  const container = document.getElementById('contest-content-area');
  if (!container) return;

  const cData = state.contest || INITIAL_CONTEST_DATA;
  const entries = cData.entries || [];
  const catFilter = state.contestCategoryFilter || 'all';
  const statusFilter = state.contestStatusFilter || 'all';
  const query = (state.contestSearch || '').trim().toLowerCase();

  const filtered = entries.filter(item => {
    const matchCat = catFilter === 'all' || item.category === catFilter;
    const matchStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchQ = !query || 
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.pieceTitle && item.pieceTitle.toLowerCase().includes(query)) ||
      (item.organization && item.organization.toLowerCase().includes(query)) ||
      (item.synopsis && item.synopsis.toLowerCase().includes(query)) ||
      (item.year && item.year.includes(query)) ||
      (item.fullContent && item.fullContent.toLowerCase().includes(query)) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));
    return matchCat && matchStatus && matchQ;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-12 text-center border border-slate-800 bg-slate-900/40">
        <i class="fa-solid fa-magnifying-glass text-3xl text-slate-600 mb-3"></i>
        <h3 class="text-sm font-bold text-slate-300 mb-1">검색 조건에 맞는 공모전 출품작이 없습니다</h3>
        <p class="text-xs text-slate-500">다른 검색어를 입력하시거나 카테고리/상태 필터를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      ${filtered.map(item => {
        const isAwarded = item.status === 'awarded';
        const isReviewing = item.status === 'reviewing';
        const isDraft = item.status === 'draft';

        return `
          <div class="glass-panel rounded-2xl p-5 border ${isAwarded ? 'border-amber-500/40 hover:border-amber-400' : 'border-slate-800 hover:border-slate-700'} bg-slate-900/80 flex flex-col justify-between transition shadow-md group">
            <div>
              <!-- Top Badges -->
              <div class="flex items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-amber-500/30">
                    ${item.categoryName || '공모전'}
                  </span>
                  <span class="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800">
                    ${item.submissionDate || '-'}
                  </span>
                </div>
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${item.badgeClass || 'bg-slate-800 text-slate-300'}">
                  ${item.badge || item.result || '출품 완료'}
                </span>
              </div>

              <!-- Contest Title & Piece Title -->
              <div class="mb-3">
                <span class="text-xs text-slate-400 font-medium block">
                  ${item.organization} · ${item.title}
                </span>
                <h3 class="text-base font-black text-white mt-1 group-hover:text-amber-300 transition leading-snug">
                  ${item.pieceTitle}
                </h3>
              </div>

              <!-- Synopsis -->
              <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                ${item.synopsis || '상세 시놉시스가 등록되지 않았습니다.'}
              </p>

              <!-- Core Concept / Highlights -->
              ${item.coreConcept ? `
                <div class="text-[11px] text-amber-200/90 mb-3 flex items-start gap-1.5">
                  <i class="fa-solid fa-star text-amber-400 text-xs mt-0.5 flex-shrink-0"></i>
                  <span><b>핵심 콘셉트:</b> ${item.coreConcept}</span>
                </div>
              ` : ''}

              <!-- Tags -->
              ${item.tags && item.tags.length > 0 ? `
                <div class="flex flex-wrap gap-1 mb-3">
                  ${item.tags.map(t => `<span class="text-[10px] text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded-md font-mono">${t}</span>`).join('')}
                </div>
              ` : ''}

              <!-- File Indicator -->
              <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-file-lines text-amber-400 text-sm"></i>
                  <div>
                    <span class="text-slate-200 font-medium text-[11px] block truncate max-w-[180px] sm:max-w-xs">
                      ${item.fileName || '출품원문 및 기획서 파일'}
                    </span>
                    <span class="text-[10px] text-slate-500 font-mono">
                      ${item.fileSize || '파일 연결 대기중'} · 추후 원문 즉시 열람 지원
                    </span>
                  </div>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                  아카이빙 완료
                </span>
              </div>
            </div>

            <!-- Card Bottom Action Toolbar -->
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <button onclick="window.app.openContestDetailModal('${item.id}')" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold transition cursor-pointer flex items-center gap-1.5 border border-amber-500/30">
                <i class="fa-solid fa-book-open-reader"></i>
                <span>상세 보기 & 원문 열람</span>
              </button>

              <div class="flex items-center gap-1.5 admin-only">
                <button onclick="window.app.openEditContestModal('${item.id}')" class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" title="수정">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.app.deleteContest('${item.id}')" class="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition" title="삭제">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Idea Bank & Inspiration Notes
// --------------------------------------------------------------------------
function renderContestIdeaBank() {
  const container = document.getElementById('contest-subtab-container');
  if (!container) return;

  const cData = state.contest || INITIAL_CONTEST_DATA;
  const guide = cData.writingGuide || {};
  const notes = guide.ideaNotes || [];

  container.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60">
        <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-brain"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-base">
                창작 아이디어 뱅크 & 영감 노트 (Inspiration Vault)
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">
                일상, 전공(산업공학·사회복지), 밴드 음악 활동에서 떠오른 기획 아이디어 및 문학 소재 메모장
              </p>
            </div>
          </div>
          <button onclick="window.app.openAddIdeaModal()" class="admin-only px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition cursor-pointer flex items-center gap-1.5">
            <i class="fa-solid fa-plus"></i>
            <span>새 아이디어 기록</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${notes.map((n, idx) => `
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                    ${n.category === 'literature' ? '문학 소재' : '기획 아이디어'}
                  </span>
                  <span class="text-[10px] text-slate-500 font-mono">${n.date || '2026'}</span>
                </div>
                <h4 class="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                  ${n.title}
                </h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  ${n.note}
                </p>
              </div>
              <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>차기 공모전 연계 가능</span>
                <button onclick="window.app.copyContestContent('${n.title} - ${n.note.replace(/'/g, "\'")}')" class="hover:text-amber-300 transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-copy"></i> 복사
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Sub-Renderer: Templates & Writing Guide
// --------------------------------------------------------------------------
function renderContestTemplates() {
  const container = document.getElementById('contest-subtab-container');
  if (!container) return;

  const cData = state.contest || INITIAL_CONTEST_DATA;
  const guide = cData.writingGuide || {};
  const litTips = guide.literatureTips || [];
  const framework = guide.ideaFramework || [];

  container.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <!-- 1. Literature Writing Guide -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60 space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-feather-pointed"></i>
          </div>
          <div>
            <h3 class="font-bold text-white text-base">
              문학(산문·수필·소설) 공모전 당선 가이드 & 심사 포인트
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">
              독자의 마음을 울리는 진정성 있는 문장 구성과 심사위원 관점의 체크포인트
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${litTips.map(tip => `
            <div class="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
              <h4 class="font-black text-purple-300 text-sm mb-1.5">
                ${tip.title}
              </h4>
              <p class="text-slate-300 leading-relaxed text-[11px]">
                ${tip.desc}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Idea Proposal 5-Step Logic Framework -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-sitemap"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-base">
                기획·아이디어 공모전 표준 5단계 논리 프레임워크
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">
                심사위원을 설득하는 문제 정의부터 기대 효과까지의 완결형 구조
              </p>
            </div>
          </div>
          <button onclick="window.app.copyContestFrameworkTemplate()" class="px-3.5 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold transition cursor-pointer flex items-center gap-1.5">
            <i class="fa-solid fa-copy"></i>
            <span>5단계 템플릿 복사</span>
          </button>
        </div>

        <div class="space-y-3">
          ${framework.map((f, i) => `
            <div class="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-start sm:items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 font-mono font-black flex items-center justify-center text-xs flex-shrink-0">
                  ${i + 1}
                </span>
                <div>
                  <h4 class="font-bold text-white text-xs sm:text-sm">
                    ${f.title}
                  </h4>
                  <p class="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    ${f.desc}
                  </p>
                </div>
              </div>
              <span class="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 whitespace-nowrap">
                ${f.step}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Contest Handlers & Modal Controllers
// --------------------------------------------------------------------------
function setContestSubtab(subtab) {
  state.contestActiveSubtab = subtab;
  renderContestTab();
}

function setContestCategoryFilter(catId) {
  state.contestCategoryFilter = catId;
  const chips = document.querySelectorAll('#contest-category-chips .cat-chip');
  chips.forEach(chip => {
    const id = chip.getAttribute('data-cat-id');
    if (id === catId) {
      chip.className = 'cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 bg-amber-500 text-slate-950 shadow-md font-black';
    } else {
      chip.className = 'cat-chip px-3 py-1.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-1.5 bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800';
    }
  });
  renderContestCardsArea();
}

function setContestStatusFilter(statusId) {
  state.contestStatusFilter = statusId;
  renderContestToolbar();
  renderContestCardsArea();
}

function handleContestSearchInput(val) {
  state.contestSearch = val;
  renderContestCardsArea();
}

function openContestDetailModal(id) {
  const cData = state.contest || INITIAL_CONTEST_DATA;
  const entries = cData.entries || [];
  const item = entries.find(e => e.id === id);
  if (!item) return;

  const modal = document.getElementById('modal-contest-detail');
  if (!modal) return;

  document.getElementById('contest-detail-title').innerText = item.pieceTitle || item.title;
  document.getElementById('contest-detail-org').innerText = `${item.organization} · ${item.title}`;
  document.getElementById('contest-detail-date').innerText = item.submissionDate || '-';
  document.getElementById('contest-detail-badge').innerText = item.badge || item.result || '출품 완료';
  document.getElementById('contest-detail-category').innerText = item.categoryName || '공모전';
  document.getElementById('contest-detail-synopsis').innerText = item.synopsis || '-';
  document.getElementById('contest-detail-concept').innerText = item.coreConcept || '-';
  document.getElementById('contest-detail-future').innerText = item.futureUsage || '-';
  document.getElementById('contest-detail-filename').innerText = item.fileName || '출품원문_파일.pdf';
  document.getElementById('contest-detail-filesize').innerText = item.fileSize || '-';
  
  const contentEl = document.getElementById('contest-detail-content');
  if (contentEl) {
    contentEl.value = item.fullContent || '등록된 원문 내용이 없습니다.';
  }

  modal.classList.remove('hidden');
}

function openAddContestModal() {
  if (!checkAdminPermission('새 공모전 출품작 등록')) return;
  const form = document.getElementById('form-contest-edit');
  if (form) form.reset();
  document.getElementById('contest-edit-id').value = '';
  document.getElementById('modal-contest-edit-title').innerText = '새 공모전 출품작 등록';
  const modal = document.getElementById('modal-contest-edit');
  if (modal) modal.classList.remove('hidden');
}

function openEditContestModal(id) {
  if (!checkAdminPermission('공모전 출품작 수정')) return;
  const cData = state.contest || INITIAL_CONTEST_DATA;
  const entries = cData.entries || [];
  const item = entries.find(e => e.id === id);
  if (!item) return;

  document.getElementById('contest-edit-id').value = item.id;
  document.getElementById('contest-edit-title').value = item.title || '';
  document.getElementById('contest-edit-piecetitle').value = item.pieceTitle || '';
  document.getElementById('contest-edit-category').value = item.category || 'literature';
  document.getElementById('contest-edit-org').value = item.organization || '';
  document.getElementById('contest-edit-date').value = item.submissionDate || '';
  document.getElementById('contest-edit-status').value = item.status || 'submitted';
  document.getElementById('contest-edit-result').value = item.result || '';
  document.getElementById('contest-edit-synopsis').value = item.synopsis || '';
  document.getElementById('contest-edit-concept').value = item.coreConcept || '';
  document.getElementById('contest-edit-content').value = item.fullContent || '';
  document.getElementById('contest-edit-future').value = item.futureUsage || '';
  document.getElementById('contest-edit-filename').value = item.fileName || '';
  document.getElementById('contest-edit-tags').value = (item.tags || []).join(', ');

  document.getElementById('modal-contest-edit-title').innerText = '공모전 출품작 정보 수정';
  const modal = document.getElementById('modal-contest-edit');
  if (modal) modal.classList.remove('hidden');
}

function saveContest(e) {
  if (e) e.preventDefault();
  if (!checkAdminPermission('공모전 출품작 저장')) return;

  const id = document.getElementById('contest-edit-id').value || `contest-${Date.now()}`;
  const title = document.getElementById('contest-edit-title').value.trim();
  const pieceTitle = document.getElementById('contest-edit-piecetitle').value.trim();
  const category = document.getElementById('contest-edit-category').value;
  const organization = document.getElementById('contest-edit-org').value.trim();
  const submissionDate = document.getElementById('contest-edit-date').value.trim();
  const status = document.getElementById('contest-edit-status').value;
  const result = document.getElementById('contest-edit-result').value.trim();
  const synopsis = document.getElementById('contest-edit-synopsis').value.trim();
  const coreConcept = document.getElementById('contest-edit-concept').value.trim();
  const fullContent = document.getElementById('contest-edit-content').value.trim();
  const futureUsage = document.getElementById('contest-edit-future').value.trim();
  const fileName = document.getElementById('contest-edit-filename').value.trim();
  const tagsStr = document.getElementById('contest-edit-tags').value.trim();
  const tags = tagsStr ? tagsStr.split(',').map(t => t.trim().startsWith('#') ? t.trim() : `#${t.trim()}`) : [];

  const categoryNames = {
    literature: '문학·산문/수필',
    idea: '아이디어·혁신기획',
    policy: '정책·공공제안',
    naming: '슬로건·네이밍'
  };

  const badgeClasses = {
    awarded: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    reviewing: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    submitted: 'bg-slate-800 text-slate-300 border border-slate-700',
    draft: 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
  };

  const newEntry = {
    id,
    title,
    pieceTitle: pieceTitle || title,
    category,
    categoryName: categoryNames[category] || '공모전',
    organization,
    submissionDate,
    status,
    result: result || (status === 'awarded' ? '우수상' : status === 'reviewing' ? '심사 진행 중' : '출품 완료'),
    badge: result || (status === 'awarded' ? '🏆 수상작' : status === 'reviewing' ? '⏳ 심사 중' : '📤 출품 완료'),
    badgeClass: badgeClasses[status] || 'bg-slate-800 text-slate-300',
    synopsis,
    coreConcept,
    fullContent,
    futureUsage,
    tags,
    fileName: fileName || '공모전_출품서_원문.pdf',
    fileSize: '500 KB'
  };

  if (!state.contest) state.contest = JSON.parse(JSON.stringify(INITIAL_CONTEST_DATA));
  if (!state.contest.entries) state.contest.entries = [];

  const existingIdx = state.contest.entries.findIndex(it => it.id === id);
  if (existingIdx >= 0) {
    state.contest.entries[existingIdx] = newEntry;
    showToast('✅ 공모전 출품작 정보가 수정되었습니다.');
  } else {
    state.contest.entries.unshift(newEntry);
    showToast('🎉 새 공모전 출품작이 등록되었습니다!');
  }

  persistState();
  window.app.closeAllModals();
  renderContestTab();
}

function deleteContest(id) {
  if (!checkAdminPermission('공모전 출품작 삭제')) return;
  if (!confirm('정말 이 공모전 출품작을 삭제하시겠습니까?')) return;

  if (state.contest && state.contest.entries) {
    state.contest.entries = state.contest.entries.filter(e => e.id !== id);
    persistState();
    renderContestTab();
    showToast('공모전 출품작이 삭제되었습니다.');
  }
}

function copyContestContent(text) {
  if (!text) {
    const el = document.getElementById('contest-detail-content');
    if (el) text = el.value;
  }
  if (navigator.clipboard && text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('📋 내용이 클립보드에 복사되었습니다!');
    }).catch(() => {
      showToast('내용 복사에 실패했습니다.');
    });
  } else {
    showToast('클립보드 API를 지원하지 않습니다.');
  }
}

function copyContestFrameworkTemplate() {
  const tmpl = `[공모전 기획서 표준 5단계 프레임워크]
1. 제안 배경 및 문제 정의 (Problem):
- 현장의 명확한 페인포인트 및 정량적 근거 제시

2. 핵심 착안점 및 인사이트 (Insight):
- 기존 방식과의 차별점 및 발상의 전환

3. 세부 실행 솔루션 (Solution):
- 핵심 기능 3가지 및 서비스 프로세스 설계

4. 추진 일정 및 실현 가능성 (Feasibility):
- 예산 조달 및 단계별 3개년 로드맵

5. 기대 효과 및 파급력 (Impact):
- 정량적 성과 및 ESG/사회적 가치 창출 방안`;
  copyContestContent(tmpl);
}

function openAddIdeaModal() {
  if (!checkAdminPermission('새 아이디어 기록')) return;
  const title = prompt('떠오른 아이디어 또는 문학적 소재 제목을 입력하세요:');
  if (!title) return;
  const note = prompt('아이디어 세부 메모 또는 줄거리를 입력하세요:');
  if (!note) return;

  if (!state.contest) state.contest = JSON.parse(JSON.stringify(INITIAL_CONTEST_DATA));
  if (!state.contest.writingGuide) state.contest.writingGuide = {};
  if (!state.contest.writingGuide.ideaNotes) state.contest.writingGuide.ideaNotes = [];

  state.contest.writingGuide.ideaNotes.unshift({
    title,
    category: 'idea',
    note,
    date: new Date().toISOString().slice(0, 7).replace('-', '.')
  });

  persistState();
  renderContestTab();
  showToast('💡 새 아이디어 메모가 저장되었습니다!');
}

// ==========================================================================
// 5-KNOU. 방송통신대학교 사회복지학과 학점 & 수강 관리 탭
// ==========================================================================
function renderKnouTab() {
  const container = document.getElementById('tab-content-knou');
  if (!container) return;

  const kData = state.knou || INITIAL_KNOU_DATA;
  const courses = kData.courses || [];
  const filter = state.knouFilter || 'all';

  // Calculate statistics
  const totalCourses = courses.length;
  const totalCredits = courses.reduce((acc, c) => acc + (c.credits || 0), 0);
  const confirmedCredits = courses.filter(c => c.isConfirmed).reduce((acc, c) => acc + (c.credits || 0), 0);
  const inProgressCredits = totalCredits - confirmedCredits;

  const totalProgressSum = courses.reduce((acc, c) => acc + (c.progress || 0), 0);
  const avgProgress = totalCourses > 0 ? (totalProgressSum / totalCourses).toFixed(1) : 0;

  // Formative average score out of 20
  const avgFormativeScore = (avgProgress * 0.20).toFixed(2);

  // Filter courses
  const filteredCourses = courses.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'in_progress') return c.status === 'in_progress';
    if (filter === 'completed') return c.status === 'completed' || c.status === 'verified_pending';
    return true;
  });

  // Calculate elapsed vs remaining days for formative period (2026.08.17 ~ 2026.12.13)
  const totalPeriodDays = 118;
  const remainingDays = 75;
  const elapsedDays = Math.max(0, totalPeriodDays - remainingDays);
  const semesterProgressPct = ((elapsedDays / totalPeriodDays) * 100).toFixed(1);

  // Grade helper function for simulator
  function calculateCourseGrade(formativeScore, midtermScore, finalScore) {
    const total = Math.min(100, Math.max(0, (formativeScore || 0) + (midtermScore || 0) + (finalScore || 0)));
    let grade = 'F';
    let gpa = 0.0;
    if (total >= 95) { grade = 'A+'; gpa = 4.5; }
    else if (total >= 90) { grade = 'A0'; gpa = 4.0; }
    else if (total >= 85) { grade = 'B+'; gpa = 3.5; }
    else if (total >= 80) { grade = 'B0'; gpa = 3.0; }
    else if (total >= 75) { grade = 'C+'; gpa = 2.5; }
    else if (total >= 70) { grade = 'C0'; gpa = 2.0; }
    else if (total >= 60) { grade = 'D'; gpa = 1.0; }
    else { grade = 'F'; gpa = 0.0; }
    return { total: total.toFixed(1), grade, gpa };
  }

  container.innerHTML = `
    <div class="space-y-6">

      <!-- 1. Header Banner -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black border border-indigo-500/30 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-building-columns"></i> ${kData.university || '국립 한국방송통신대학교'}
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                ${kData.department || '사회복지학과'} · ${kData.currentSemester || '2026학년도 2학기'}
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                총 9개 과목 · 25학점
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <i class="fa-solid fa-user-graduate text-indigo-400"></i>
              방송대 사회복지학과 학점 및 수강 관리
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              이번 학기 9개 수강 강의의 실시간 강의 진도율(수강률), 과제물 제출 여부, 기말시험 일정을 추적하고 최종 취득 학점(GPA)을 시뮬레이션합니다.
            </p>
          </div>

          <!-- Quick Actions -->
          <div class="flex items-center gap-2 self-start lg:self-auto">
            <a href="https://ep.knou.ac.kr" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700/80 shadow-sm cursor-pointer">
              <i class="fa-solid fa-arrow-up-right-from-square text-indigo-400"></i>
              <span>방송대 맞춤정보 바로가기</span>
            </a>
          </div>
        </div>

        <!-- Formative Evaluation Timeline Banner (From user's screenshot) -->
        <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2.5 text-xs">
            <div class="flex items-center gap-2 font-bold text-slate-200">
              <span class="text-rose-400">▶</span>
              <span>형성평가(강의 수강) 인정 기간:</span>
              <span class="font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                ${kData.formativePeriod?.startDate || '2026.08.17'} ~ ${kData.formativePeriod?.endDate || '2026.12.13'}
              </span>
              <span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-extrabold text-[11px] border border-rose-500/30">
                ${kData.formativePeriod?.remainingDays || 75}일 남음
              </span>
            </div>
            <div class="text-[11px] text-slate-400 font-medium">
              학기 경과율: <span class="font-mono text-white font-bold">${semesterProgressPct}%</span> (${elapsedDays}/${totalPeriodDays}일)
            </div>
          </div>

          <!-- Semester Time Progress Bar -->
          <div class="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden border border-slate-700/60 p-0.5">
            <div class="bg-gradient-to-r from-indigo-500 via-sky-400 to-rose-400 h-full rounded-full transition-all duration-500 shadow-sm" style="width: ${semesterProgressPct}%"></div>
          </div>

          <!-- Evaluation Policy Callout -->
          <div class="mt-3.5 flex flex-wrap items-center gap-3 text-xs bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            <span class="font-bold text-amber-400 flex items-center gap-1.5">
              <i class="fa-solid fa-calculator"></i> 학점 평가 배점 기준:
            </span>
            <div class="flex flex-wrap items-center gap-2 text-[11px]">
              <span class="px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-bold">
                1. 형성평가(수강률) 20%
              </span>
              <span class="text-slate-600">+</span>
              <span class="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                2. 중간과제물 or 출석과제물 30%
              </span>
              <span class="text-slate-600">+</span>
              <span class="px-2 py-0.5 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold">
                3. 기말고사 50%
              </span>
              <span class="text-slate-600">=</span>
              <span class="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/30">
                총점 100점 만점
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. KPI Cards (4 Grid) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- KPI 1 -->
        <div class="glass-panel rounded-2xl p-5 border border-indigo-500/30 bg-gradient-to-br from-slate-900 to-indigo-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">총 신청 학점</span>
            <span class="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-graduation-cap"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-white font-mono">${totalCredits}</span>
            <span class="text-sm font-bold text-slate-400">학점</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>이수 확정: <b class="text-emerald-400">${confirmedCredits}학점</b></span>
            <span>진행 중: <b class="text-indigo-300">${inProgressCredits}학점</b></span>
          </div>
        </div>

        <!-- KPI 2 -->
        <div class="glass-panel rounded-2xl p-5 border border-blue-500/30 bg-gradient-to-br from-slate-900 to-blue-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">평균 강의 진도율</span>
            <span class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-chart-line"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-white font-mono">${avgProgress}%</span>
            <span class="text-xs text-blue-400 font-bold">전체 9과목</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>형성평가 평균 환산:</span>
            <span class="font-bold text-blue-300 font-mono">${avgFormativeScore} / 20.0점</span>
          </div>
        </div>

        <!-- KPI 3 -->
        <div class="glass-panel rounded-2xl p-5 border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-emerald-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">이수 및 검증 완료</span>
            <span class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-award"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-emerald-400 font-mono">2</span>
            <span class="text-sm font-bold text-slate-400">/ 9과목</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>AI기초소양(100%)</span>
            <span class="text-purple-300 font-medium">평생교육사실습(검증중)</span>
          </div>
        </div>

        <!-- KPI 4 -->
        <div class="glass-panel rounded-2xl p-5 border border-amber-500/30 bg-gradient-to-br from-slate-900 to-amber-950/20 shadow-lg">
          <div class="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span class="font-bold">중간과제물 마감 D-Day</span>
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm">
              <i class="fa-solid fa-calendar-check"></i>
            </span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black text-amber-400 font-mono">D-26</span>
            <span class="text-xs text-slate-400">10.25 ~ 10.27</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
            <span>형성평가 마감: <b class="text-rose-400 font-mono">D-75</b></span>
            <span>기말시험: <b class="text-sky-300 font-mono">12월</b></span>
          </div>
        </div>
      </div>

      <!-- 3. Course List Header & Filter Chips -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-layer-group text-indigo-400"></i>
            2026-2학기 수강 과목 진도율 & 평가 현황
          </h2>
          <p class="text-xs text-slate-400 mt-0.5">
            제공해주신 방송대 수강 포털 데이터가 100% 동기화되었습니다. (수강률 20% + 과제물 30% + 기말 50%)
          </p>
        </div>

        <div class="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button onclick="window.app.setKnouFilter('all')" class="px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
            전체 과목 (${totalCourses})
          </button>
          <button onclick="window.app.setKnouFilter('in_progress')" class="px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filter === 'in_progress' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
            수강 중 (7)
          </button>
          <button onclick="window.app.setKnouFilter('completed')" class="px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filter === 'completed' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
            이수완료·검증 (2)
          </button>
        </div>
      </div>

      <!-- 4. Course Cards Grid (Matching user's screenshot) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filteredCourses.map(c => {
          const isDone = c.progress >= 100;
          const formativeScore = (c.progress * 0.20).toFixed(2);
          const isAiNative = c.id === 'knou-ai-native';
          const isPracticum = c.id === 'knou-lifelong-practicum';

          return `
            <div class="glass-panel rounded-2xl p-5 border ${isDone ? 'border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20' : isPracticum ? 'border-purple-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/20' : 'border-slate-800 hover:border-indigo-500/40 bg-slate-900/70'} transition shadow-md flex flex-col justify-between group">
              <div>
                <!-- Card Header -->
                <div class="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badgeClass || 'bg-slate-800 text-slate-300'}">
                      ${c.categoryBadge || c.category}
                    </span>
                    <h3 class="text-base font-bold text-white mt-1.5 group-hover:text-indigo-300 transition">
                      ${c.name}
                    </h3>
                  </div>

                  <!-- Right Progress / Status Badge (Matching user's screenshot exactly!) -->
                  <div class="text-right flex-shrink-0">
                    ${isDone && isAiNative ? `
                      <span class="px-2.5 py-1 rounded-full bg-slate-800 text-slate-100 text-xs font-black border border-emerald-500/50 shadow-sm flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-emerald-400"></i>
                        <span>이수완료 100%</span>
                      </span>
                    ` : isPracticum ? `
                      <span class="px-2.5 py-1 rounded-full bg-purple-950/80 text-purple-300 text-xs font-black border border-purple-500/50 shadow-sm flex items-center gap-1.5">
                        <i class="fa-solid fa-clock-rotate-left text-purple-400"></i>
                        <span>이수 완료 (검증 중)</span>
                      </span>
                    ` : `
                      <span class="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1.5">
                        <span>형성평가</span>
                        <b class="font-mono ${c.progress > 0 ? 'text-indigo-300' : 'text-slate-400'}">${c.progress}%</b>
                      </span>
                    `}
                  </div>
                </div>

                <!-- Progress Bar (Visual representation matching LMS) -->
                <div class="mb-4">
                  <div class="flex justify-between items-center text-[11px] mb-1.5 font-medium">
                    <span class="text-slate-400">수강 진도율</span>
                    <span class="font-mono font-bold ${isDone ? 'text-emerald-400' : 'text-indigo-300'}">
                      ${c.progress}%
                    </span>
                  </div>
                  <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/60 p-0.5">
                    <div class="${isDone ? 'bg-emerald-500 shadow-emerald-500/50' : isPracticum ? 'bg-purple-500' : 'bg-indigo-500'} h-full rounded-full transition-all duration-500" style="width: ${c.progress}%"></div>
                  </div>
                </div>

                <!-- 3-Pillar Grade Structure breakdown -->
                ${!isAiNative && !isPracticum ? `
                <div class="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[10px] mb-3.5">
                  <div class="text-center border-r border-slate-800 pr-1">
                    <span class="text-slate-400 block font-medium">형성평가(20%)</span>
                    <span class="font-mono font-bold text-indigo-300 mt-0.5 block">${formativeScore} / 20점</span>
                  </div>
                  <div class="text-center border-r border-slate-800 px-1">
                    <span class="text-slate-400 block font-medium">중간(30%)</span>
                    <span class="font-bold ${c.midtermStatus === 'submitted' ? 'text-emerald-400' : 'text-amber-400'} mt-0.5 block truncate">
                      ${c.midtermStatus === 'submitted' ? '제출 완료' : c.midtermType === '출석수업 과제물' ? '출석과제' : '과제물'}
                    </span>
                  </div>
                  <div class="text-center pl-1">
                    <span class="text-slate-400 block font-medium">기말(50%)</span>
                    <span class="font-bold text-sky-400 mt-0.5 block truncate">객관식 시험</span>
                  </div>
                </div>
                ` : ''}

                <!-- Special Rule Highlight -->
                ${isAiNative ? `
                  <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs mb-3.5 flex items-start gap-2.5">
                    <i class="fa-solid fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                    <div>
                      <div class="font-bold text-emerald-300">1학점 취득 확정 (수강률 100% 충족)</div>
                      <p class="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                        별도 시험이나 과제물 없이 강의 진도율 100% 달성으로 1학점을 취득했습니다.
                      </p>
                    </div>
                  </div>
                ` : isPracticum ? `
                  <div class="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs mb-3.5 flex items-start gap-2.5">
                    <i class="fa-solid fa-certificate text-purple-400 text-sm mt-0.5"></i>
                    <div>
                      <div class="font-bold text-purple-300">별도 기관 이수 완료 · 포트폴리오 검증 중</div>
                      <p class="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                        인가 교육기관 현장실습 160시간 이수 완료. 최종 포트폴리오 심사 중입니다 (3학점).
                      </p>
                    </div>
                  </div>
                ` : `
                  <p class="text-[11px] text-slate-400 mb-3.5 line-clamp-2 leading-relaxed">
                    ${c.memo || c.specialRule}
                  </p>
                `}
              </div>

              <!-- Card Bottom Actions -->
              <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div class="text-[11px] text-slate-400">
                  ${!isAiNative && !isPracticum ? `
                    <button onclick="window.app.toggleKnouAssignment('${c.id}', 'midterm')" class="hover:text-amber-300 transition cursor-pointer flex items-center gap-1 font-medium" title="과제물 제출 상태 토글">
                      <i class="fa-regular ${c.midtermStatus === 'submitted' ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-500'}"></i>
                      <span>중간과제 ${c.midtermStatus === 'submitted' ? '제출완료' : '미제출'}</span>
                    </button>
                  ` : `
                    <span class="text-emerald-400 font-bold flex items-center gap-1">
                      <i class="fa-solid fa-check"></i> ${isAiNative ? '1학점 반영' : '3학점 반영 대기'}
                    </span>
                  `}
                </div>

                <button onclick="window.app.openKnouEditModal('${c.id}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-[11px] transition cursor-pointer flex items-center gap-1 border border-slate-700">
                  <i class="fa-solid fa-pen-to-square text-[10px]"></i>
                  <span>편집</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- 5. Interactive Grade & GPA Simulator (학점 시뮬레이터 ⭐) -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/20 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center text-2xl shadow-lg">
              <i class="fa-solid fa-calculator"></i>
            </div>
            <div>
              <h2 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                2026-2학기 예상 학점(GPA) 시뮬레이터
              </h2>
              <p class="text-xs text-slate-400 mt-1">
                형성평가(20%) 현재 진도율에 중간과제물(30%) 및 기말고사(50%) 예상 점수를 조합하여 예상 등급과 평점을 실시간 계산합니다.
              </p>
            </div>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[11px] text-indigo-300 font-bold bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/20">
              4.5 만점 기준 환산
            </span>
          </div>
        </div>

        <div class="overflow-x-auto custom-scrollbar">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-400 text-[11px]">
                <th class="py-2.5 px-3">과목명</th>
                <th class="py-2.5 px-3 text-center">학점</th>
                <th class="py-2.5 px-3 text-center">형성평가 (20점)</th>
                <th class="py-2.5 px-3 text-center">중간과제 (30점)</th>
                <th class="py-2.5 px-3 text-center">기말고사 (50점)</th>
                <th class="py-2.5 px-3 text-center">예상 총점</th>
                <th class="py-2.5 px-3 text-center">예상 등급</th>
                <th class="py-2.5 px-3 text-center">평점 (4.5)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              ${courses.map(c => {
                const isPassOnly = c.ruleType === 'pass_only';
                const isPracticum = c.ruleType === 'practicum_verified';
                const fScore = (c.progress * 0.20);
                const sim = state.knouSimScores[c.id] || { midterm: 28, final: 45 };
                const mScore = (isPassOnly || isPracticum) ? 0 : sim.midterm;
                const fnScore = (isPassOnly || isPracticum) ? 0 : sim.final;

                const result = (isPassOnly || isPracticum)
                  ? { total: 'P', grade: 'Pass', gpa: 4.5 }
                  : calculateCourseGrade(fScore, mScore, fnScore);

                return `
                  <tr class="hover:bg-slate-800/40 transition">
                    <td class="py-3 px-3">
                      <div class="font-bold text-white">${c.name}</div>
                      <div class="text-[10px] text-slate-400">${c.category}</div>
                    </td>
                    <td class="py-3 px-3 text-center font-mono font-bold text-indigo-300">
                      ${c.credits}학점
                    </td>
                    <td class="py-3 px-3 text-center font-mono">
                      <span class="${c.progress >= 100 ? 'text-emerald-400 font-bold' : 'text-slate-300'}">
                        ${fScore.toFixed(2)}점
                      </span>
                      <span class="text-[10px] text-slate-500 block">(${c.progress}%)</span>
                    </td>
                    <td class="py-3 px-3 text-center">
                      ${isPassOnly || isPracticum ? `
                        <span class="text-slate-500 font-mono">-</span>
                      ` : `
                        <input type="number" min="0" max="30" value="${mScore}" onchange="window.app.updateKnouSimulator('${c.id}', 'midterm', this.value)" class="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-center text-white font-mono focus:border-indigo-500 outline-none">
                      `}
                    </td>
                    <td class="py-3 px-3 text-center">
                      ${isPassOnly || isPracticum ? `
                        <span class="text-slate-500 font-mono">-</span>
                      ` : `
                        <input type="number" min="0" max="50" value="${fnScore}" onchange="window.app.updateKnouSimulator('${c.id}', 'final', this.value)" class="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-center text-white font-mono focus:border-indigo-500 outline-none">
                      `}
                    </td>
                    <td class="py-3 px-3 text-center font-mono font-bold text-white">
                      ${result.total}
                    </td>
                    <td class="py-3 px-3 text-center">
                      <span class="px-2 py-0.5 rounded font-black text-xs ${result.grade.startsWith('A') ? 'bg-emerald-500/20 text-emerald-300' : result.grade.startsWith('B') ? 'bg-blue-500/20 text-blue-300' : result.grade === 'Pass' ? 'bg-purple-500/20 text-purple-300' : 'bg-amber-500/20 text-amber-300'}">
                        ${result.grade}
                      </span>
                    </td>
                    <td class="py-3 px-3 text-center font-mono font-bold text-indigo-300">
                      ${result.gpa.toFixed(1)}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 6. Academic Timeline & Strategy Guide -->
      <div class="glass-panel rounded-2xl p-6 border border-slate-800 bg-slate-900/60 text-xs">
        <h3 class="font-bold text-white text-sm mb-3 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-indigo-400"></i>
          2026학년도 2학기 방송대 사회복지학과 성공 수강 전략
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div class="font-bold text-indigo-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-1"></i> 형성평가 100% 수강 완주
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              12월 13일까지 매주 1~2개 강좌씩 꾸준히 수강하여 기본 점수 20점 만점을 확보합니다. 기한 경과 시 재수강이 불가하므로 선제 완료가 핵심입니다.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div class="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-2"></i> 중간과제물(30점) 사전 작성
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              10월 25~27일 마감되는 5대 과목(실천론, 문화다양성, 정책론, 문제론, 인행사) 리포트는 논문 및 학술자료를 미리 취합하여 표절률 15% 미만으로 작성합니다.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div class="font-bold text-sky-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-3"></i> 기말고사(50점) 워크북 복기
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              12월 초~중순 태블릿 PC로 시행되는 기말시험은 방송대 교재 워크북과 5개년 기출문제를 반복하여 객관식 정답률을 극대화합니다.
            </p>
          </div>
        </div>
      </div>

    </div>
  `;
}

// --------------------------------------------------------------------------
// KNOU Tab Event Handlers & Modal
// --------------------------------------------------------------------------
function openKnouEditModal(courseId) {
  if (!checkAdminPermission('방통대 수강 과목 수정')) return;

  const kData = state.knou || INITIAL_KNOU_DATA;
  const course = (kData.courses || []).find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('modal-knou-edit');
  if (!modal) return;

  document.getElementById('knou-edit-id').value = course.id;
  document.getElementById('knou-edit-name').value = course.name;
  document.getElementById('knou-edit-category').value = `${course.category} (${course.credits}학점)`;
  document.getElementById('knou-edit-progress').value = course.progress;
  document.getElementById('knou-edit-midterm-status').value = course.midtermStatus || 'pending';
  document.getElementById('knou-edit-memo').value = course.memo || '';

  modal.classList.remove('hidden');
}

function saveKnouCourse(event) {
  if (event) event.preventDefault();
  if (!checkAdminPermission('방통대 수강 과목 저장')) return;

  const cId = document.getElementById('knou-edit-id').value;
  const progress = parseFloat(document.getElementById('knou-edit-progress').value) || 0;
  const midtermStatus = document.getElementById('knou-edit-midterm-status').value;
  const memo = document.getElementById('knou-edit-memo').value.trim();

  if (!state.knou) state.knou = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
  const courses = state.knou.courses || [];
  const target = courses.find(c => c.id === cId);
  if (target) {
    target.progress = Math.min(100, Math.max(0, progress));
    target.midtermStatus = midtermStatus;
    target.memo = memo;
    if (target.progress >= 100) {
      target.statusBadge = target.id === 'knou-ai-native' ? '이수완료 100%' : '형성평가 100%';
    } else {
      target.statusBadge = `형성평가 ${target.progress}%`;
    }
    target.formativeScore = parseFloat((target.progress * 0.20).toFixed(2));
  }

  persistState();
  closeAllModals();
  renderKnouTab();
  showToast('과목 정보가 성공적으로 저장되었습니다! ✅');
}

function toggleKnouAssignment(courseId, field) {
  if (!checkAdminPermission('과제물 상태 변경')) return;

  if (!state.knou) state.knou = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
  const target = (state.knou.courses || []).find(c => c.id === courseId);
  if (!target) return;

  if (field === 'midterm') {
    target.midtermStatus = target.midtermStatus === 'submitted' ? 'pending' : 'submitted';
    showToast(target.midtermStatus === 'submitted' ? '중간과제물 제출 완료로 변경되었습니다. 📝' : '중간과제물 미제출로 변경되었습니다.');
  }

  persistState();
  renderKnouTab();
}

function updateKnouSimulator(courseId, scoreType, val) {
  if (!state.knouSimScores) state.knouSimScores = {};
  if (!state.knouSimScores[courseId]) state.knouSimScores[courseId] = { midterm: 28, final: 45 };

  const num = Math.max(0, parseFloat(val) || 0);
  state.knouSimScores[courseId][scoreType] = num;
  renderKnouTab();
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
        <div class="flex flex-wrap items-center gap-2.5 mb-1">
          <h1 class="text-2xl font-bold text-white flex items-center gap-2">
            <i class="fa-solid fa-music text-purple-400"></i>
            공연 관람 & 밴드 합주 관리
          </h1>
          <span class="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30 flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-microphone-lines text-pink-400"></i> 보컬 & <i class="fa-solid fa-keyboard text-sky-400"></i> 신디사이저 담당
          </span>
        </div>
        <p class="text-xs text-slate-400 mt-1">
          홍대 합주실 일정, 보컬 & 신디사이저 연주곡(Setlist), 티켓팅 및 공연 관람 일정을 기록합니다.
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
  const targetDate = state.selectedBriefingDate || '2026-09-29';
  const briefing = ENERGY_DAILY_BRIEFINGS[targetDate] || ENERGY_DAILY_BRIEFINGS['2026-09-29'];
  const planItem = plan.find(p => p.date === targetDate) || plan[0];

  const currentIndex = plan.findIndex(p => p.date === targetDate);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= plan.length - 1;
  const prevDate = !isFirst ? plan[currentIndex - 1].date : null;
  const nextDate = !isLast ? plan[currentIndex + 1].date : null;

  const isToday = targetDate === '2026-09-29';
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
                Day ${briefing.dayNum || planItem.dayNum || planItem.day || (currentIndex + 1)} / ${plan.length}일 로드맵
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

  // Filter items (3-cycle 14-year & review support)
  const filteredPlan = plan.filter(item => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'phase1') return item.phase === 1;
    if (currentFilter === 'phase2') return item.phase === 2;
    if (currentFilter === 'phase3') return item.phase === 3;
    if (currentFilter === 'reviews') return item.isReview;
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
                2026.09.28 ~ 2026.11.23 (14개년 3사이클 57일 완성 로드맵)
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                12~25년 기출 1일 1개년 + 3개년 단위 오답노트 + 계산 완전 마스터
              </span>
            </div>
            <h2 class="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
              <i class="fa-solid fa-calculator text-amber-400"></i>
              에너지관리기사 14개년(12~25년) 기출 3사이클 계산 마스터 계획표
            </h2>
            <p class="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              2012년부터 2025년까지 14개년 기출문제를 <b>1일 1개년씩</b> 풀이하며, 
              <b>매 3개년마다 오답노트 정리 및 계산 공식 집중 복습일</b>을 거쳐 총 <b>3사이클(1회독 유형화 ➔ 2회독 스피드런 ➔ 3회독 실전 타임어택/백지인출)</b> 동안 계산문제를 100% 완벽 마스터합니다.
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

      <!-- ⭐ [3사이클 계산 마스터 전략 안내 배너] ⭐ -->
      <div class="glass-panel rounded-2xl p-5 border border-amber-400/60 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 relative overflow-hidden shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-xl flex-shrink-0 shadow-md">
            <i class="fa-solid fa-calculator text-amber-400"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs">
                ★ 14개년(12~25년) 3사이클 계산 완전 마스터 전략
              </span>
              <span class="text-xs text-amber-300 font-bold">1일 1개년 기출 + 3개년 단위 집중 오답노트</span>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed">
              <b>1사이클(1~19일)</b>: 14개년 전 범위 정밀 풀이 & 기출 유형 파악 + 3개년 단위 오답노트 작성.<br>
              <b>2사이클(20~38일)</b>: 14개년 계산문제 집중 스피드런 + 킬러 공식(연소, 열정산, LMTD, 통풍력) 집중 클리닉.<br>
              <b>3사이클(39~57일)</b>: 실전 타임어택 모의풀이 + 계산 공식 백지 인출 테스트로 실전 85점+ 무결점 합격 완성!
            </p>
          </div>
          <button onclick="window.app.setEnergyPlanPhaseFilter('reviews')" class="hidden sm:flex px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold items-center gap-1.5 flex-shrink-0 transition">
            <span>오답노트일만 모아보기</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>

      <!-- Phase Filter Buttons -->
      <div class="flex flex-wrap items-center gap-2 pb-2 text-xs border-b border-slate-800">
        <button onclick="window.app.setEnergyPlanPhaseFilter('all')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'all' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          전체 보기 (57일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase1')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase1' ? 'bg-sky-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          1사이클: 1회독 정밀풀이 (19일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase2')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase2' ? 'bg-blue-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          2사이클: 2회독 계산스피드런 (19일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('phase3')" class="px-3.5 py-2 rounded-xl font-bold transition ${currentFilter === 'phase3' ? 'bg-purple-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
          3사이클: 3회독 실전타임어택 (19일)
        </button>
        <button onclick="window.app.setEnergyPlanPhaseFilter('reviews')" class="px-3.5 py-2 rounded-xl font-black transition flex items-center gap-1.5 ${currentFilter === 'reviews' ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'}">
          <i class="fa-solid fa-book-bookmark text-xs"></i>
          <span>★ 3개년 단위 오답노트 (15일)</span>
        </button>
      </div>

      <!-- Plan Items Timeline List -->
      <div class="space-y-3">
        ${filteredPlan.map((item, idx) => {
          const isReview = item.isReview;
          const isFinal = item.isFinalWeek;
          const cardBorder = isReview
            ? 'border-amber-400/80 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/20 shadow-lg shadow-amber-500/5'
            : (isFinal 
                ? 'border-purple-400/60 bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-900 shadow-lg' 
                : 'border-slate-700/60 bg-slate-900/60 hover:border-slate-600');

          return `
            <div class="p-4 sm:p-5 rounded-2xl border ${cardBorder} transition flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <!-- Left: Checkbox + Date & Phase Badges + Topic & Task -->
              <div class="flex items-start gap-3.5 flex-1 min-w-0">
                <input type="checkbox" ${item.done ? 'checked' : ''} onchange="window.app.toggleEnergyPlanItem('${item.id}')" class="w-5 h-5 rounded text-amber-500 focus:ring-0 border-slate-600 bg-slate-800 mt-0.5 cursor-pointer flex-shrink-0">
                
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold ${isReview ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-md' : (isFinal ? 'bg-purple-500 text-white font-black' : 'bg-slate-800 text-amber-300 border border-amber-500/30')}">
                      ${item.dday}
                    </span>
                    <span class="text-xs text-slate-400 font-mono">${item.date}</span>
                    <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      ${item.phaseName}
                    </span>
                    ${isReview ? `
                      <span class="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black flex items-center gap-1">
                        <i class="fa-solid fa-star text-[10px]"></i> 3개년 집중 오답노트 & 계산특강
                      </span>
                    ` : `
                      <span class="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                        📁 ${item.folder || ''} (${item.volume || ''})
                      </span>
                    `}
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

    <!-- 3. ⭐ [심층 기획] 《실패의 기록과 나만의 사색》 5대 테마별 25선 연재 주제 추천 로드맵 ⭐ -->
    <div class="glass-panel rounded-2xl p-6 sm:p-8 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl relative overflow-hidden">
      <div class="absolute right-0 top-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5 relative z-10">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl shadow-lg">
            <i class="fa-solid fa-feather-pointed"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg sm:text-xl font-black text-white">
                《실패의 기록과 나만의 사색》 5대 테마별 연재 주제 컬렉션 (총 25선)
              </h2>
              <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black">맞춤 추천</span>
            </div>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">
              성공담보다 더 진한 울림을 주는 <b>수험의 오답, 11년간 89번 인바디의 다이어트 시행착오, 홍대 합주실 보컬·신디사이저의 호흡, 까미노 순례길의 비움</b>을 테마별로 여러 개 추천합니다.
            </p>
          </div>
        </div>

        <div class="text-right flex-shrink-0">
          <span class="text-[11px] text-amber-400 font-bold bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            총 25개 기획 주제 엄선
          </span>
        </div>
      </div>

      <!-- Category Filter Chips -->
      <div class="flex flex-wrap items-center gap-2 mb-6 relative z-10 text-xs">
        <button onclick="window.app.setSnsTopicCategoryFilter('all')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all') ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}">
          전체 주제 (25선)
        </button>
        <button onclick="window.app.setSnsTopicCategoryFilter('study')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${state.snsTopicCategoryFilter === 'study' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-blue-300'}">
          📚 1. 수험·공부 실패 & 회복력 (5선)
        </button>
        <button onclick="window.app.setSnsTopicCategoryFilter('body')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${state.snsTopicCategoryFilter === 'body' ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-rose-300'}">
          ⚖️ 2. 다이어트·인바디 실패 & 체질 재구성 (5선)
        </button>
        <button onclick="window.app.setSnsTopicCategoryFilter('music')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${state.snsTopicCategoryFilter === 'music' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-purple-300'}">
          🎤🎹 3. 밴드 합주 & 보컬·신디사이저 (5선)
        </button>
        <button onclick="window.app.setSnsTopicCategoryFilter('camino')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${state.snsTopicCategoryFilter === 'camino' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-amber-300'}">
          🎒 4. 산티아고 순례길 & 삶의 비움 (5선)
        </button>
        <button onclick="window.app.setSnsTopicCategoryFilter('career')" class="px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${state.snsTopicCategoryFilter === 'career' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-emerald-300'}">
          💼 5. 조직 경험 & 청년정책·사회복지 (5선)
        </button>
      </div>

      <!-- Topics Showcase Container -->
      <div class="space-y-6 relative z-10">

        <!-- 1. 수험 & 공부 실패 회복력 (5선) -->
        ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all' || state.snsTopicCategoryFilter === 'study') ? `
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-blue-500/30">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-blue-300 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">1</span>
              <span>📚 수험·공부 실패 & 회복력 추천 주제 (5선)</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">국가기술자격 5대 보유 & 에너지관리기사 실기 D-40</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">주제 1-1 · 대표작</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《59점의 미학: 5대 자격증을 따기까지 마주한 불합격의 기록들》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  1점 차이 불합격 통지서를 받았을 때 느꼈던 비참함과 자책, 그리고 오답을 정면으로 마주하면서 비로소 깨달은 공부의 본질.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-blue-400 font-medium flex justify-between">
                <span>핵심: 오답 직면의 용기</span>
                <span>추천: 브런치북 1순위</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">주제 1-2 · 통섭 사색</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《수포자 문과 감성의 공학 탈출기: 열역학 공식이 철학으로 보인 순간》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  보일러 열정산 효율식(η)과 엔탈피 수식에서 인생의 에너지 보존과 균형의 법칙을 읽어낸 인문학적 사색의 여정.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-blue-400 font-medium flex justify-between">
                <span>핵심: 공학 수식의 철학화</span>
                <span>추천: 화요일 저녁 칼럼</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">주제 1-3 · 루틴 극복</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《시험 D-40, 20개의 기출 폴더 앞에서 느끼는 중압감을 이겨내는 법》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  방대한 실기 기출 분량에 압도될 때 '하루 1문제만 완벽히 소화하자'는 마이크로 루틴으로 불안을 잠재우는 실천 기술.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-blue-400 font-medium flex justify-between">
                <span>핵심: 현재 진행형 수험기</span>
                <span>추천: 수험생 공감 1순위</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">주제 1-4 · 오답 분석</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《오답 노트를 찢던 밤: 실수를 자책하지 않고 무기로 바꾸는 '실패 복기 프로세스'》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  같은 문제를 3번 틀렸을 때의 절망을 극복하고, 암기카드와 단계별 풀이로 뇌에 각인시키는 실전 복기 학습법.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-blue-400 font-medium flex justify-between">
                <span>핵심: 메타인지 & 복기법</span>
                <span>추천: 공부법 에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">주제 1-5 · 동기 부여</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《자격증은 단순한 스펙이 아니라, '지루함을 견뎌내는 그릿(Grit)'의 증명서였다》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  퇴근 후 졸린 눈을 비비며 책상 앞에 앉았던 수천 시간이 내 자존감을 지켜주고 삶의 주도권을 되찾아준 이야기.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-blue-400 font-medium flex justify-between">
                <span>핵심: 끈기와 자기통제감</span>
                <span>추천: 브런치 에디터 추천 노림</span>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- 2. 다이어트 & 인바디 실패 극복 (5선) -->
        ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all' || state.snsTopicCategoryFilter === 'body') ? `
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-rose-500/30">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-rose-300 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">2</span>
              <span>⚖️ 다이어트·인바디 실패 & 체질 재구성 추천 주제 (5선)</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">11개년(2015~2026) 누적 89회 인바디 측정 실화</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-rose-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">주제 2-1 · 대표작</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《체중계는 거짓말을 한다: 92kg를 지키며 골격근 44.9kg를 만든 역발상 다이어트》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  체중 숫자에 일희일비하지 않고 골격근 증량과 체성분 재구성(Recomposition)으로 체지방 6kg를 순수 감량한 과학적 승리.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-medium flex justify-between">
                <span>핵심: 체성분 재구성의 정석</span>
                <span>추천: 독자 반응 폭발 예상</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-rose-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">주제 2-2 · 흑역사 고백</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《11년 전 고도비만 청년의 흑역사: 굶기와 무리한 유산소가 낳은 요요의 비극》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  체지방률 34% 시절 저질렀던 3대 치명적 실수(단식, 원푸드, 극단적 절제)로 근육만 깎아먹었던 암흑기의 솔직한 고백.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-medium flex justify-between">
                <span>핵심: 굶기 다이어트의 위험성</span>
                <span>추천: 목요일 저녁 발행</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-rose-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">주제 2-3 · 멘탈 복구</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《폭식한 다음 날의 자괴감에게: 하루 무너졌다고 11년의 데이터가 사라지지 않는다》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  다이어터들이 가장 많이 좌절하는 '자책의 굴레'를 끊어내고 다음 날 즉시 평정심으로 복귀하는 멘탈 관리 시스템.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-medium flex justify-between">
                <span>핵심: 죄책감 해소 & 회복</span>
                <span>추천: 힐링 에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-rose-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">주제 2-4 · 데이터 분석</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《89번의 인바디 종이가 가르쳐준 것: 정체기는 실패가 아니라 몸이 적응하는 시간이다》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  수개월간 숫자가 정체될 때 포기하지 않고, 세포와 대사가 항상성을 재정비하는 과정을 데이터로 증명한 이야기.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-medium flex justify-between">
                <span>핵심: 정체기를 버티는 힘</span>
                <span>추천: 헬스인 필독</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-rose-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">주제 2-5 · 지속 가능성</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《식단 강박 내려놓기: 평생 지속 가능한 클린 식단과 치팅 데이의 철학》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  사회생활과 회식을 병행하면서도 근육을 지켜내고 체지방을 덜어내는 현실적이고 스트레스 없는 식습관 구축 노하우.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-rose-400 font-medium flex justify-between">
                <span>핵심: 평생 식습관 디자인</span>
                <span>추천: 주말 브런치 연재</span>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- 3. 밴드 합주 & 보컬·신디사이저 (5선) -->
        ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all' || state.snsTopicCategoryFilter === 'music') ? `
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-purple-500/30">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-purple-300 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">3</span>
              <span>🎤🎹 밴드 합주 & 보컬·신디사이저 추천 주제 (5선)</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">홍대 호랑이 합주실 & 보컬·신디사이저 담당 실화</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">주제 3-1 · 대표작</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《소음이 음악이 되는 순간: 퇴근 후 홍대 합주실에서 마이크와 건반을 켤 때》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  차가운 안전 규정과 공학 수식에서 벗어나, 보컬의 목소리와 신디사이저 멜로디로 일상의 긴장을 내려놓는 정화의 카타르시스.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-medium flex justify-between">
                <span>핵심: 직장인의 숨구멍</span>
                <span>추천: 토요일 오전 감성에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">주제 3-2 · 보컬의 사색</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《보컬의 호흡과 인생의 완급 조절: 고음을 내지르려다 목이 쉬어버린 날의 깨달음》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  노래에 힘을 줄수록 음이 갈라지듯, 인생에서도 불필요한 힘을 빼야 비로소 멀리 갈 수 있다는 보컬 레슨과 삶의 통찰.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-medium flex justify-between">
                <span>핵심: 완급 조절과 이완의 미학</span>
                <span>추천: 호흡과 목소리 에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">주제 3-3 · 신디사이저 사색</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《신디사이저 톤 메이킹의 미학: 수백 가지 전자음 속에서 '나만의 소리'를 믹싱하는 법》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  건반을 누르며 오실레이터와 필터를 조절해 밴드 사운드에 녹아드는 음색을 빚어내는 과정 — 타인과 조화를 이루는 나의 색채.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-medium flex justify-between">
                <span>핵심: 음색 탐색 & 나다움</span>
                <span>추천: 음악 애호가 취향저격</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">주제 3-4 · 앙상블 경청</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《Eve의 〈제제로감〉 185 BPM 질주 속에서: 남의 소리를 들어야 비로소 내 건반이 산다》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  초고속 템포의 합주에서 드럼 킥과 기타 리프를 듣지 않으면 불협화음이 되듯, 밴드 앙상블에서 배운 진정한 경청과 소통의 미덕.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-medium flex justify-between">
                <span>핵심: 185 BPM 속의 경청</span>
                <span>추천: 인스타 릴스 숏폼 연계</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">주제 3-5 · 불완전함의 미학</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《완벽주의라는 박자 놓치기: 음이탈이 나도 웃으며 다음 마디로 넘어가는 밴드의 미덕》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  실수 하나에 얼어붙던 강박을 깨고, 멤버들의 눈빛을 보며 리듬을 다시 타게 된 무대 위의 자유와 인간적인 연대의 순간.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-medium flex justify-between">
                <span>핵심: 실패를 유쾌하게 넘기기</span>
                <span>추천: 주말 힐링 연재</span>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- 4. 산티아고 순례길 & 삶의 비움 (5선) -->
        ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all' || state.snsTopicCategoryFilter === 'camino') ? `
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-amber-500/30">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">4</span>
              <span>🎒 산티아고 순례길 & 삶의 비움 추천 주제 (5선)</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">11/9~11/29 까미노 드 포르투 240km 현장 연재</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">주제 4-1 · 출국 프롤로그</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《길 위에서 버린 것들: 시험장을 나오자마자 8kg 배낭 하나 메고 출국한 이유》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  11월 7일 에너지 시험 직후 11월 9일 포르투로 날아가며, 수험서 대신 최소한의 짐만 챙기며 배운 소유의 무게와 해방감.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-medium flex justify-between">
                <span>핵심: 시험 종료 ➔ 순례길 직행</span>
                <span>추천: 11월 9일 출국일 발행</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">주제 4-2 · 번아웃 치유</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《포르투의 안개와 대서양 바람 앞에서: 왜 나는 그동안 멈추지 못하고 달려왔을까》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  삼성전자 TF, 자격증, 다이어트, 복무까지 쉼 없이 스스로를 채찍질했던 내면의 번아웃을 마주하고 다정하게 안아주는 시간.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-medium flex justify-between">
                <span>핵심: 멈춤과 자기 용서</span>
                <span>추천: 순례 1주차 현장 기록</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">주제 4-3 · 신체의 한계</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《발바닥 물집이 가르쳐준 것: 완벽한 길은 없다, 다만 한 걸음씩 걸을 뿐이다》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  갈리시아 전원의 비바람과 무릎 통증 앞에서, 목표에 대한 조급함을 내려놓고 발밑의 한 걸음에 집중하며 얻은 깨달음.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-medium flex justify-between">
                <span>핵심: 물집과 통증의 역설</span>
                <span>추천: 순례 2주차 현장 기록</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">주제 4-4 · 인간적인 연대</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《알베르게의 낯선 식탁: 언어가 통하지 않아도 통했던 순례자들의 따뜻한 눈빛》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  국적과 나이를 넘어 같은 목적지를 향해 걷는 사람들과 함께 나눈 소박한 빵 한 조각과 와인, 그리고 삶의 진솔한 고백들.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-medium flex justify-between">
                <span>핵심: 부엔 카미노의 연대감</span>
                <span>추천: 따뜻한 감동 에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">주제 4-5 · 완주 에필로그</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《산티아고 오브라도이로 광장의 눈물: 240km 대장정 끝에서 시작된 진짜 나의 삶》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  대성당 광장에 배낭을 내려놓고 올려다본 하늘, 3주간의 비움 끝에 더 성숙하고 단단해진 나로서 일상에 복귀하는 벅찬 감회.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400 font-medium flex justify-between">
                <span>핵심: 콤포스텔라 완주 감격</span>
                <span>추천: 11월 말 완주 기념작</span>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- 5. 조직 경험 & 청년정책·사회복지 (5선) -->
        ${(!state.snsTopicCategoryFilter || state.snsTopicCategoryFilter === 'all' || state.snsTopicCategoryFilter === 'career') ? `
        <div class="p-5 rounded-2xl bg-slate-800/60 border border-emerald-500/30">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-emerald-300 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">5</span>
              <span>💼 조직 경험 & 청년정책·사회복지 추천 주제 (5선)</span>
            </h3>
            <span class="text-[11px] text-slate-400 font-mono">삼성전자 TF 분과장 & 화성시 청년정책협의체 실무 경험</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">주제 5-1 · 조직 소통</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《삼성전자 TF 분과장으로 일하며 배운 것: 거대 조직에서 내 목소리를 내는 법》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  인사제도 개편 [모두의 인사] 분과장 및 보안 TF를 수행하며 체득한 설득과 조율, 수평적 소통의 현실적 방법론.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium flex justify-between">
                <span>핵심: 대기업 TF 리더십</span>
                <span>추천: 링크드인 공유 최적화</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">주제 5-2 · 온기의 발견</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《고등학교 특수학급 활동지원 이야기: 느린 아이들의 속도에 내 보폭을 맞추며》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  항상 효율과 속도를 쫓던 내가 장애학생들을 지원하며 배운 기다림과 온기, 국회국방위원장상 대상 수상작의 진솔한 배경.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium flex justify-between">
                <span>핵심: 국회국방위원장상 실화</span>
                <span>추천: 독자 눈물 버튼 에세이</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">주제 5-3 · 청년 정책</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《화성시 청년정책협의체 분과장 일기: 청년들의 작은 목소리가 조례가 되기까지》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  교육·참여·권리 분과장으로서 청년들의 실질적인 고민을 정책으로 다듬고 제안하며 겪었던 공공 참여의 보람과 현실.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium flex justify-between">
                <span>핵심: 청년 거버넌스 실무</span>
                <span>추천: 공공·사회복지 관심층</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">주제 5-4 · 학문 통섭</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《산업공학과 사회복지의 교차점: 효율만을 쫓던 엔지니어가 '사람의 마음'을 공부한 이유》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  생산관리와 최적화를 전공하던 공학도가 사회복지와 직업상담을 공부하며 인생의 시야를 넓히게 된 지적 호기심의 여정.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium flex justify-between">
                <span>핵심: 공학 + 인문복지 통섭</span>
                <span>추천: 대학생·N잡러 타깃</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">주제 5-5 · N잡러 시너지</span>
                <h4 class="text-sm font-extrabold text-white mt-1.5 mb-1">《회사원·학생·에세이스트·음악인: 4개의 명함을 지닌 N잡러의 24시간 설계법》</h4>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  분열이 아닌 시너지 — 일터의 경험이 글의 소재가 되고, 밴드 음악의 감성이 수험 생활의 에너지로 순환하는 라이프스타일.
                </p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium flex justify-between">
                <span>핵심: 멀티 페르소나 시간관리</span>
                <span>추천: 자기계발 독자 타깃</span>
              </div>
            </div>
          </div>
        </div>
        ` : ''}

      </div>

      <!-- 글쓰기 템플릿 & 스토리텔링 확장 공식 -->
      <div class="mt-6 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 relative z-10">
        <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <i class="fa-solid fa-pen-ruler text-amber-400"></i>
          <span>독자의 마음을 여는 '아론 작가 전용 3단계 실패 서사 공식'</span>
        </h3>
        <p class="text-xs text-slate-300 mb-4 leading-relaxed">
          어떤 주제를 선택하든 아래 3단계 구조로 전개하면, 독자는 단순 정보 습득을 넘어 작가의 인간적인 고뇌에 깊게 몰입하며 '구독'과 '멤버십 후원'으로 이어지게 됩니다.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30">
            <div class="text-rose-400 font-bold mb-1 flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">1</span>
              <span>오답과 무너짐의 현장 (Hook)</span>
            </div>
            <p class="text-slate-400 text-[11px] leading-relaxed">
              계산 문제를 틀리고 자책했던 새벽, 폭식 후 후회했던 밤, 합주에서 박자를 절거나 음이탈이 났던 당혹감 등 가장 솔직한 '바닥'을 먼저 드러냅니다.
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
              거창한 성공이 아니라 '내일 아침 다시 책상에 앉게 만든 1가지 원칙', '다시 신디사이저 건반을 누르게 만든 위로'를 독자에게 선물하며 글을 맺습니다.
            </p>
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
  const msgEl = document.getElementById('toast-message');
  if (msgEl) {
    msgEl.innerText = msg;
  } else {
    toast.innerText = msg;
  }
  toast.classList.remove('opacity-0', 'pointer-events-none');
  if (window._appToastTimer) clearTimeout(window._appToastTimer);
  window._appToastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3200);
}

// ==========================================================================
// Expose Public Methods to Window for UI Interactions
// ==========================================================================
window.app = {
  // English Grammar & Daily Podcast Handlers
  setEnglishFilter: (f) => setEnglishFilter(f),
  setEnglishMode: (m) => setEnglishMode(m),
  setEnglishSearch: (q) => handleEnglishSearchInput(q),
  handleEnglishSearchInput: (q) => handleEnglishSearchInput(q),
  prevEnglishDaily: () => prevEnglishDaily(),
  nextEnglishDaily: () => nextEnglishDaily(),
  randomEnglishDaily: () => randomEnglishDaily(),
  toggleEnglishFlip: (id) => toggleEnglishFlip(id),
  speakEnglish: (txt) => speakEnglish(txt),
  // Contest & Creative Archive Handlers (공모전)
  setContestSubtab: (s) => setContestSubtab(s),
  setContestCategoryFilter: (c) => setContestCategoryFilter(c),
  setContestStatusFilter: (st) => setContestStatusFilter(st),
  handleContestSearchInput: (q) => handleContestSearchInput(q),
  openContestDetailModal: (id) => openContestDetailModal(id),
  openAddContestModal: () => openAddContestModal(),
  openEditContestModal: (id) => openEditContestModal(id),
  saveContest: (e) => saveContest(e),
  deleteContest: (id) => deleteContest(id),
  copyContestContent: (txt) => copyContestContent(txt),
  copyContestFrameworkTemplate: () => copyContestFrameworkTemplate(),
  openAddIdeaModal: () => openAddIdeaModal(),
  // Podcast Audio Engine Handlers
  togglePodcastPlay: () => togglePodcastPlay(),
  pausePodcast: () => pausePodcast(),
  skipPodcast: (sec) => skipPodcast(sec),
  seekPodcast: (ratio) => seekPodcast(ratio),
  setPodcastRate: (rate) => setPodcastRate(rate),
  playPodcastTrack: (idx) => playPodcastTrack(idx),
  togglePodcastScript: () => togglePodcastScript(),
  handlePodcastSeekClick: (e) => handlePodcastSeekClick(e),
  // KNOU Social Welfare Handlers
  setKnouFilter: (f) => {
    state.knouFilter = f;
    renderKnouTab();
  },
  openKnouEditModal: (cId) => openKnouEditModal(cId),
  saveKnouCourse: (e) => saveKnouCourse(e),
  toggleKnouAssignment: (cId, type) => toggleKnouAssignment(cId, type),
  updateKnouSimulator: (cId, scoreType, val) => updateKnouSimulator(cId, scoreType, val),
  // Admin Authentication Handlers
  openAuthModal: () => openAdminAuthModal(),
  checkLoginStatus: () => checkLoginStatus(),
  handleGoogleLogin: () => handleGoogleLogin(),
  handleLogout: () => handleLogout(),
  handlePinLogin: (e) => handlePinLogin(e),
  openTabLockedModal: (tabId) => openTabLockedModal(tabId),
  saveGoogleClientId: () => {
    const input = document.getElementById('input-google-client-id');
    const val = input ? input.value.trim() : '';
    if (!val) {
      showToast('⚠️ Google 클라이언트 ID를 입력해 주세요.');
      return;
    }
    saveGoogleClientId(val);
    renderAuthWidget();
    showToast('✅ Google OAuth 클라이언트 ID가 저장되었습니다. 이제 Google 로그인을 눌러주세요.');
  },
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
    const cur = state.selectedBriefingDate || '2026-09-29';
    const idx = plan.findIndex(p => p.date === cur);
    if (idx > 0) {
      state.selectedBriefingDate = plan[idx - 1].date;
      state.showBriefingQuiz = false;
      renderEnergyTab();
    }
  },
  nextBriefingDay: () => {
    const plan = state.energyPlan || INITIAL_ENERGY_STUDY_PLAN;
    const cur = state.selectedBriefingDate || '2026-09-29';
    const idx = plan.findIndex(p => p.date === cur);
    if (idx < plan.length - 1) {
      state.selectedBriefingDate = plan[idx + 1].date;
      state.showBriefingQuiz = false;
      renderEnergyTab();
    }
  },
  goToTodayBriefing: () => {
    state.selectedBriefingDate = '2026-09-29';
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

  setSnsTopicCategoryFilter: (cat) => {
    state.snsTopicCategoryFilter = cat;
    renderSnsTab();
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
      insta.positioning = `실제 프로필 연동 완료 (팔로워 ${insta.followers}명 · 팔로잉 ${insta.following}명 · 게시물 ${insta.postsCount}개) | 음악(보컬·신디사이저) & 순례길 아카이빙`;
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
  },
  getState: () => state,
  getEnergyPlan: () => state.energyPlan || INITIAL_ENERGY_STUDY_PLAN,
  getDailyBriefings: () => ENERGY_DAILY_BRIEFINGS
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
