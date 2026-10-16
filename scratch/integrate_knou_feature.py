import json
import re

# 32 user rows
user_rows = [
    # 25년 2학기 (7과목 - 완료 19학점)
    {"id": "cp-01", "semester": "25년 2학기", "name": "평생교육프로그램개발론", "swReq": False, "swOpt": False, "leReq": "O (필수)", "leOpt": "", "major": "", "general": 3, "status": "done", "note": "대면 수업"},
    {"id": "cp-02", "semester": "25년 2학기", "name": "평생교육경영론", "swReq": False, "swOpt": False, "leReq": "O (필수)", "leOpt": "", "major": "", "general": 3, "status": "done", "note": ""},
    {"id": "cp-03", "semester": "25년 2학기", "name": "사례관리론 (전공, 2학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "done", "note": "대면 수업"},
    {"id": "cp-04", "semester": "25년 2학기", "name": "지역사회복지론(대면, 전공, 2학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "done", "note": "대면 수업"},
    {"id": "cp-05", "semester": "25년 2학기", "name": "여성복지론 (전공, 2학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "done", "note": ""},
    {"id": "cp-06", "semester": "25년 2학기", "name": "인간행동과 사회환경", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": 3, "status": "done", "note": "사회복지학과 개설로 신청"},
    {"id": "cp-07", "semester": "25년 2학기", "name": "원격 교육의 이해", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": 1, "status": "done", "note": ""},

    # 26년 1학기 (7과목)
    {"id": "cp-08", "semester": "26년 1학기", "name": "평생교육론", "swReq": False, "swOpt": False, "leReq": "O (필수)", "leOpt": "", "major": "", "general": 3, "status": "", "note": "대면 수업"},
    {"id": "cp-09", "semester": "26년 1학기", "name": "평생교육방법론", "swReq": False, "swOpt": False, "leReq": "O (필수)", "leOpt": "", "major": "", "general": 3, "status": "", "note": "대면 수업"},
    {"id": "cp-10", "semester": "26년 1학기", "name": "노인교육론", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "O  (선택1)", "major": "", "general": 3, "status": "", "note": ""},
    {"id": "cp-11", "semester": "26년 1학기", "name": "사회복지(학)개론 (전공, 1학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": "대면 수업"},
    {"id": "cp-12", "semester": "26년 1학기", "name": "사회복지법제와 실천 (전공, 1학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-13", "semester": "26년 1학기", "name": "사회복지실천기술론 (전공, 1학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": "대면 수업"},
    {"id": "cp-14", "semester": "26년 1학기", "name": "사회복지행정론 (일반, 1학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": 3, "status": "", "note": ""},

    # 26년 2학기 (9과목)
    {"id": "cp-15", "semester": "26년 2학기", "name": "사회복지실천론 (일반, 2학기)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": 3, "status": "", "note": "사회복지학과 개설로 신청"},
    {"id": "cp-16", "semester": "26년 2학기", "name": "교육사회학", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "O (선택1)", "major": "", "general": 3, "status": "", "note": ""},
    {"id": "cp-17", "semester": "26년 2학기", "name": "사회복지와 문화다양성 (전공, 2학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-18", "semester": "26년 2학기", "name": "복지국가론(전공, 2학기) => 가족상담및치료 ==> 사회문제론", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": "과목 열리는지 체크"},
    {"id": "cp-19", "semester": "26년 2학기", "name": "사회복지정책론", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-20", "semester": "26년 2학기", "name": "사회복지조사론*", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": "사회복지사 & 평생교육사 중복인정"},
    {"id": "cp-21", "semester": "26년 2학기", "name": "+ 1학점짜리 ai 활용 교육", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": "", "status": "", "note": ""},
    {"id": "cp-22", "semester": "26년 2학기", "name": "평생교육실습 (학기 초) (실습과정, 학점 은행 등록 필수 ) (4주, 160시간 이상 실습)", "swReq": False, "swOpt": False, "leReq": "O (필수)", "leOpt": "", "major": 0, "general": 0, "status": "", "note": "별도 기관에서 이수 후 학점 인정 등록할 것"},
    {"id": "cp-23", "semester": "26년 2학기", "name": "+인간행동과사회환경 재수강", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": "", "status": "", "note": ""},

    # 27년 1학기 (6과목)
    {"id": "cp-24", "semester": "27년 1학기", "name": "사회복지와 인권 (전공, 1학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-25", "semester": "27년 1학기", "name": "사회복지현장실습 (160시간 이상 실습, 세미나 3회)", "swReq": True, "swOpt": False, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": "방통대 등록 후 별도 기관에서 이수"},
    {"id": "cp-26", "semester": "27년 1학기", "name": "사회복지윤리와 철학 (전공, 1학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-27", "semester": "27년 1학기", "name": "장애인복지론 (전공,1학기)", "swReq": False, "swOpt": True, "leReq": "", "leOpt": "", "major": 3, "general": "", "status": "", "note": ""},
    {"id": "cp-28", "semester": "27년 1학기", "name": "재수강 or 평생교육사 이수과목 대비", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": "", "status": "", "note": ""},
    {"id": "cp-29", "semester": "27년 1학기", "name": "재수강 or 평생교육사 이수과목 대비", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "", "major": "", "general": "", "status": "", "note": ""},

    # 기존 이수 과목 or 유사 인정 과목 (3과목)
    {"id": "cp-30", "semester": "기존 이수 과목 or 유사 인정 과목", "name": "상담심리학 (선택2)", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "O (선택2)", "major": "", "general": "", "status": "", "note": "학점은행 수행 완료"},
    {"id": "cp-31", "semester": "기존 이수 과목 or 유사 인정 과목", "name": "기업교육론 (선택 2기술경영 유사 과목 확인)", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "O (선택2)", "major": "", "general": "", "status": "", "note": "25/10/01 ~ 08 이내 유사과목 사전심의 진행"},
    {"id": "cp-32", "semester": "기존 이수 과목 or 유사 인정 과목", "name": "교육조사방법론 (선택 2, 사회복지조사론 유사과목 인정)", "swReq": False, "swOpt": False, "leReq": "", "leOpt": "O (선택2)", "major": "", "general": "", "status": "", "note": "(선택 2, 사회복지조사론 유사과목 인정)"}
]

plan_dict = {
    "planVersion": 2,
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
    "rows": user_rows
}

plan_js = "// =========================================================================\n" \
          "// 방송대 학점관리: 사회복지사·평생교육사·방통대 학점 이수 계획표 (편집 가능)\n" \
          "// =========================================================================\n" \
          "const INITIAL_KNOU_CREDIT_PLAN = " + json.dumps(plan_dict, ensure_ascii=False, indent=2) + ";\n\n"

# 1. Patch js/data.js
with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Insert plan_js right before INITIAL_KNOU_DATA
target_knou_comment = "// 14. 국립 한국방송통신대학교 (KNOU) 사회복지학과 학점 및 수강 관리 데이터"
if target_knou_comment in data_content:
    data_content = data_content.replace(target_knou_comment, plan_js + target_knou_comment)
else:
    print("Warning: target_knou_comment not found in data.js")

# In INITIAL_KNOU_DATA, update knouDataVersion to 3 and add creditPlan
old_knou_data = """const INITIAL_KNOU_DATA = {
  knouDataVersion: 2,"""
new_knou_data = """const INITIAL_KNOU_DATA = {
  knouDataVersion: 3,
  creditPlan: INITIAL_KNOU_CREDIT_PLAN,"""

data_content = data_content.replace(old_knou_data, new_knou_data)

# Export global.INITIAL_KNOU_CREDIT_PLAN
old_export = "global.INITIAL_KNOU_DATA = INITIAL_KNOU_DATA;"
new_export = "global.INITIAL_KNOU_DATA = INITIAL_KNOU_DATA;\n  global.INITIAL_KNOU_CREDIT_PLAN = INITIAL_KNOU_CREDIT_PLAN;"
data_content = data_content.replace(old_export, new_export)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)
print("js/data.js updated with INITIAL_KNOU_CREDIT_PLAN.")

# 2. Patch js/app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app_content = f.read()

# In loadInitialData, upgrade knou to version 3 with 32 rows
old_knou_load = """        const upgradedKnou = (parsed.knou && parsed.knou.knouDataVersion === 2)
          ? parsed.knou
          : JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));"""

new_knou_load = """        const upgradedKnou = (parsed.knou && parsed.knou.knouDataVersion === 3 && parsed.knou.creditPlan && Array.isArray(parsed.knou.creditPlan.rows) && parsed.knou.creditPlan.rows.length >= 32)
          ? parsed.knou
          : (() => {
              const fresh = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
              fresh.knouDataVersion = 3;
              fresh.creditPlan = JSON.parse(JSON.stringify(INITIAL_KNOU_CREDIT_PLAN));
              if (parsed.knou) {
                if (parsed.knou.courses) {
                  parsed.knou.courses.forEach(oldCourse => {
                    const match = fresh.courses.find(c => c.id === oldCourse.id);
                    if (match) {
                      match.progress = oldCourse.progress;
                      match.midtermStatus = oldCourse.midtermStatus;
                    }
                  });
                }
                if (parsed.knou.creditPlan && Array.isArray(parsed.knou.creditPlan.rows)) {
                  parsed.knou.creditPlan.rows.forEach(oldRow => {
                    const match = fresh.creditPlan.rows.find(r => r.id === oldRow.id || (r.name && oldRow.name && r.name.trim() === oldRow.name.trim()));
                    if (match) {
                      if (oldRow.status) match.status = oldRow.status;
                      if (oldRow.note) match.note = oldRow.note;
                    }
                  });
                }
              }
              return fresh;
            })();"""

app_content = app_content.replace(old_knou_load, new_knou_load)

# Add jump button in renderKnouTab header
old_knou_jump = """          <!-- Quick Actions -->
          <div class="flex items-center gap-2 self-start lg:self-auto">
            <a href="https://ep.knou.ac.kr" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700/80 shadow-sm cursor-pointer">
              <i class="fa-solid fa-arrow-up-right-from-square text-indigo-400"></i>
              <span>방송대 맞춤정보 바로가기</span>
            </a>
          </div>"""

new_knou_jump = """          <!-- Quick Actions -->
          <div class="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <a href="#knou-credit-plan" class="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-lg cursor-pointer">
              <i class="fa-solid fa-table-list"></i>
              <span>학점 이수 계획표 (32과목)</span>
            </a>
            <a href="https://ep.knou.ac.kr" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700/80 shadow-sm cursor-pointer">
              <i class="fa-solid fa-arrow-up-right-from-square text-indigo-400"></i>
              <span>방송대 맞춤정보 바로가기</span>
            </a>
          </div>"""

app_content = app_content.replace(old_knou_jump, new_knou_jump)

# Insert renderKnouCreditPlanSection call into renderKnouTab right after 4-Grid KPI cards
target_kpi_end = """        <!-- KPI 4 -->
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
      </div>"""

new_kpi_end = target_kpi_end + """\n\n      <!-- 📋 학점 이수 계획표 (사회복지사·평생교육사·방통대) -->\n      ${renderKnouCreditPlanSection()}"""

app_content = app_content.replace(target_kpi_end, new_kpi_end)

# Functions for credit plan
credit_plan_funcs = '''
// --------------------------------------------------------------------------
// 📋 사회복지사·평생교육사·방통대 학점 이수 계획표 (32과목 관리 엔진)
// --------------------------------------------------------------------------
function getKnouCreditPlan() {
  if (!state.knou) state.knou = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
  if (!state.knou.creditPlan || !state.knou.creditPlan.rows || state.knou.creditPlan.rows.length < 32) {
    state.knou.creditPlan = JSON.parse(JSON.stringify(window.INITIAL_KNOU_CREDIT_PLAN || INITIAL_KNOU_CREDIT_PLAN));
  }
  return state.knou.creditPlan;
}

function escCp(v) {
  return String(v === undefined || v === null ? '' : v)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function computeKnouCreditTotals(plan) {
  const rows = plan.rows || [];
  const num = v => (v === '' || v === null || v === undefined || isNaN(parseFloat(v))) ? 0 : parseFloat(v);
  const t = { swReq: 0, swOpt: 0, leReq: 0, leOpt: 0, majorRows: 0, generalRows: 0, doneCredits: 0, progressCredits: 0, planCredits: 0 };
  rows.forEach(r => {
    if (r.swReq) t.swReq++;
    if (r.swOpt) t.swOpt++;
    if (String(r.leReq || '').trim()) t.leReq++;
    if (String(r.leOpt || '').trim()) t.leOpt++;
    const m = num(r.major), g = num(r.general);
    t.majorRows += m; t.generalRows += g;
    if (r.status === 'done') t.doneCredits += m + g;
    else if (r.status === 'progress') t.progressCredits += m + g;
    else t.planCredits += m + g;
  });
  t.major = t.majorRows + num(plan.priorMajor);
  t.general = t.generalRows + num(plan.priorGeneral);
  t.total = t.major + t.general;
  t.doneWithPrior = t.doneCredits + num(plan.priorMajor) + num(plan.priorGeneral);
  return t;
}

function renderKnouCreditPlanSection() {
  const plan = getKnouCreditPlan();
  const t = computeKnouCreditTotals(plan);
  const q = plan.passQual || {};
  const target = plan.totalTarget || 130;
  const rows = plan.rows || [];
  const semesters = plan.semesters || [];
  const donePct = Math.min(100, Math.round((t.doneWithPrior / target) * 100));
  const plannedPct = Math.min(100, Math.round((t.total / target) * 100));

  const cell = 'py-1.5 px-1.5 border border-slate-700/60 align-middle';
  const inp = 'w-full bg-slate-900/80 border border-slate-700 focus:border-indigo-400 rounded px-1.5 py-1 text-[11px] text-slate-100 focus:outline-none';
  const passCls = (val, need) => (need === undefined || need === '' ? 'text-slate-200' : (val >= need ? 'text-emerald-300' : 'text-rose-300'));
  const passIcon = (val, need) => (need === undefined || need === '' ? '' : (val >= need ? '<i class="fa-solid fa-circle-check ml-1"></i>' : `<span class="ml-1 text-[10px]">(-${need - val})</span>`));

  const semesterBlocks = semesters.map(sem => {
    const semRows = rows.filter(r => r.semester === sem);
    const semCredits = semRows.reduce((a, r) => a + (parseFloat(r.major) || 0) + (parseFloat(r.general) || 0), 0);
    const span = semRows.length + 1;
    const semCell = `
      <td rowspan="${span}" class="${cell} bg-indigo-950/40 min-w-[120px] align-top">
        <input type="text" value="${escCp(sem)}" onchange="window.app.renameKnouPlanSemester('${escCp(sem).replace(/'/g, "\\'")}', this.value)" class="${inp} font-bold text-indigo-200 mb-1.5">
        <div class="text-[10px] text-slate-400 mb-1.5 font-medium">${semRows.length}과목 · ${semCredits}학점</div>
        <div class="flex flex-wrap gap-1">
          <button onclick="window.app.addKnouPlanRow('${escCp(sem).replace(/'/g, "\\'")}')" class="px-1.5 py-0.5 rounded bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-200 border border-indigo-500/30 text-[10px] font-bold cursor-pointer transition"><i class="fa-solid fa-plus"></i> 과목</button>
          <button onclick="window.app.deleteKnouPlanSemester('${escCp(sem).replace(/'/g, "\\'")}')" class="px-1.5 py-0.5 rounded bg-rose-500/10 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-[10px] cursor-pointer transition" title="학기 삭제"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>`;
    const rowHtml = semRows.map((r, i) => `
      <tr class="hover:bg-slate-800/40 transition ${r.status === 'done' ? 'bg-emerald-950/20' : r.status === 'progress' ? 'bg-amber-950/20' : ''}">
        ${i === 0 ? semCell : ''}
        <td class="${cell} min-w-[220px]">
          <div class="flex items-center gap-1.5">
            ${r.status === 'done' ? '<i class="fa-solid fa-check text-emerald-400 text-xs"></i>' : r.status === 'progress' ? '<i class="fa-regular fa-clock text-amber-400 text-xs"></i>' : ''}
            <input type="text" value="${escCp(r.name)}" onchange="window.app.updateKnouPlanCell('${r.id}','name',this.value)" class="${inp} font-medium ${r.status === 'done' ? 'text-emerald-200' : ''}">
          </div>
        </td>
        <td class="${cell} text-center"><input type="checkbox" ${r.swReq ? 'checked' : ''} onchange="window.app.updateKnouPlanCell('${r.id}','swReq',this.checked)" class="w-4 h-4 accent-sky-500 cursor-pointer"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.swOpt ? 'checked' : ''} onchange="window.app.updateKnouPlanCell('${r.id}','swOpt',this.checked)" class="w-4 h-4 accent-sky-500 cursor-pointer"></td>
        <td class="${cell} min-w-[80px]"><input type="text" value="${escCp(r.leReq)}" placeholder="-" onchange="window.app.updateKnouPlanCell('${r.id}','leReq',this.value)" class="${inp} text-center text-purple-200 font-semibold"></td>
        <td class="${cell} min-w-[90px]"><input type="text" value="${escCp(r.leOpt)}" placeholder="-" onchange="window.app.updateKnouPlanCell('${r.id}','leOpt',this.value)" class="${inp} text-center text-purple-200 font-semibold"></td>
        <td class="${cell} min-w-[54px]"><input type="number" min="0" max="30" value="${escCp(r.major)}" onchange="window.app.updateKnouPlanCell('${r.id}','major',this.value)" class="${inp} text-center font-mono font-bold text-sky-300"></td>
        <td class="${cell} min-w-[54px]"><input type="number" min="0" max="30" value="${escCp(r.general)}" onchange="window.app.updateKnouPlanCell('${r.id}','general',this.value)" class="${inp} text-center font-mono font-bold text-slate-300"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.status === 'progress' ? 'checked' : ''} onchange="window.app.setKnouPlanStatus('${r.id}','progress',this.checked)" class="w-4 h-4 accent-amber-500 cursor-pointer" title="진행 중 체크"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.status === 'done' ? 'checked' : ''} onchange="window.app.setKnouPlanStatus('${r.id}','done',this.checked)" class="w-4 h-4 accent-emerald-500 cursor-pointer" title="이수 완료 체크"></td>
        <td class="${cell} min-w-[180px]"><input type="text" value="${escCp(r.note)}" placeholder="메모/비고" onchange="window.app.updateKnouPlanCell('${r.id}','note',this.value)" class="${inp} text-slate-300"></td>
        <td class="${cell} text-center"><button onclick="window.app.deleteKnouPlanRow('${r.id}')" class="text-slate-500 hover:text-rose-400 cursor-pointer px-1 transition" title="과목 삭제"><i class="fa-solid fa-xmark"></i></button></td>
      </tr>`).join('');
    const emptyRow = semRows.length === 0
      ? `<tr>${semCell}<td colspan="11" class="${cell} text-center text-[11px] text-slate-500">등록된 과목이 없습니다. [+ 과목]을 눌러 추가하세요.</td></tr>`
      : '';
    return emptyRow || (rowHtml + `<tr class="h-0"></tr>`);
  }).join('');

  const pqInput = (key) => `<input type="number" min="0" value="${escCp(q[key])}" onchange="window.app.updateKnouPlanMeta('passQual.${key}', this.value)" class="${inp} text-center font-mono text-amber-200">`;

  return `
    <div id="knou-credit-plan" class="glass-panel rounded-2xl p-5 sm:p-6 border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/15 to-slate-900 shadow-xl mb-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold flex items-center gap-1">
              <i class="fa-solid fa-graduation-cap"></i> 사회복지사 2급 (18과목)
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center gap-1">
              <i class="fa-solid fa-award"></i> 평생교육사 2급 (10과목)
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
              방통대 총 ${target}학점 이상 (계획 ${t.total}학점)
            </span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <i class="fa-solid fa-table-list text-indigo-400"></i>
            사회복지사 · 평생교육사 · 방통대 학점 통합 이수 관리표
          </h2>
          <p class="text-xs text-slate-300 mt-1">
            25년 2학기 완료 과목부터 27년 1학기 및 기존 인정 과목까지 모든 칸을 자유롭게 수정·체크 관리할 수 있으며, TOTAL 및 PASS QUAL이 실시간 연동됩니다.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="window.app.resetKnouPlan()" class="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer transition shadow-lg flex items-center gap-1.5" title="제공해주신 32과목 표 데이터로 복원"><i class="fa-solid fa-rotate-left"></i> 기본 32과목 표 채우기</button>
          <button onclick="window.app.addKnouPlanSemester()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer transition flex items-center gap-1.5"><i class="fa-solid fa-plus text-indigo-400"></i> 학기 추가</button>
          <button onclick="window.app.exportKnouPlanCsv()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer transition flex items-center gap-1.5"><i class="fa-solid fa-file-csv text-emerald-400"></i> CSV 저장</button>
        </div>
      </div>

      <!-- 요약 카드 -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
          <div class="text-[11px] text-slate-400">방통대 계획 총 학점</div>
          <div class="text-xl font-black font-mono ${t.total >= target ? 'text-emerald-300' : 'text-rose-300'}">${t.total} <span class="text-xs text-slate-500">/ ${target}</span></div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden"><div class="h-full bg-indigo-400" style="width:${plannedPct}%"></div></div>
        </div>
        <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
          <div class="text-[11px] text-slate-400">이수 완료 (기존 인정 포함)</div>
          <div class="text-xl font-black font-mono text-emerald-300">${t.doneWithPrior}학점</div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden"><div class="h-full bg-emerald-400" style="width:${donePct}%"></div></div>
        </div>
        <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
          <div class="text-[11px] text-slate-400">진행 중 / 계획</div>
          <div class="text-xl font-black font-mono text-amber-300">${t.progressCredits} <span class="text-xs text-slate-500">/ ${t.planCredits}학점</span></div>
        </div>
        <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
          <div class="text-[11px] text-slate-400">자격 요건 (사복 필수·선택 / 평교 필수·선택)</div>
          <div class="text-sm font-black font-mono mt-1">
            <span class="${passCls(t.swReq, q.swReq)}">${t.swReq}/${q.swReq ?? '-'}</span> ·
            <span class="${passCls(t.swOpt, q.swOpt)}">${t.swOpt}/${q.swOpt ?? '-'}</span> ·
            <span class="${passCls(t.leReq, q.leReq)}">${t.leReq}/${q.leReq ?? '-'}</span> ·
            <span class="${passCls(t.leOpt, q.leOpt)}">${t.leOpt}/${q.leOpt ?? '-'}</span>
          </div>
        </div>
      </div>

      <!-- 편집 표 -->
      <div class="overflow-x-auto rounded-xl border border-slate-800 custom-scrollbar">
        <table class="w-full min-w-[1150px] text-xs text-slate-200 border-collapse">
          <thead>
            <tr class="bg-slate-950 text-slate-300 text-[11px]">
              <th rowspan="2" class="${cell}">학기 구분</th>
              <th rowspan="2" class="${cell}">과목 명</th>
              <th colspan="2" class="${cell} text-sky-300">사회복지사</th>
              <th colspan="2" class="${cell} text-purple-300">평생교육사</th>
              <th colspan="4" class="${cell} text-indigo-300">방통대 학점 (총 ${target} 학점 이상)</th>
              <th rowspan="2" class="${cell}">비고</th>
              <th rowspan="2" class="${cell} w-8"></th>
            </tr>
            <tr class="bg-slate-950/90 text-slate-400 text-[10px]">
              <th class="${cell}">필수</th>
              <th class="${cell}">선택</th>
              <th class="${cell}">필수</th>
              <th class="${cell}">선택<br>(각각 1개 이상)</th>
              <th class="${cell}">전공</th>
              <th class="${cell}">교양 or<br>일반 선택</th>
              <th class="${cell}">진행 중</th>
              <th class="${cell}">완료</th>
            </tr>
          </thead>
          <tbody>
            ${semesterBlocks}
          </tbody>
          <tfoot class="text-[11px] font-bold">
            <tr class="bg-slate-900/90">
              <td colspan="6" class="${cell} text-right text-slate-400">기존 인정 학점 (편입·학점은행 등) ➔</td>
              <td class="${cell}"><input type="number" min="0" value="${escCp(plan.priorMajor)}" onchange="window.app.updateKnouPlanMeta('priorMajor', this.value)" class="${inp} text-center font-mono text-sky-200 font-bold"></td>
              <td class="${cell}"><input type="number" min="0" value="${escCp(plan.priorGeneral)}" onchange="window.app.updateKnouPlanMeta('priorGeneral', this.value)" class="${inp} text-center font-mono text-sky-200 font-bold"></td>
              <td colspan="4" class="${cell} text-[10px] text-slate-500 font-normal">표 과목 외에 이미 인정받은 학점을 입력하면 TOTAL에 합산됩니다.</td>
            </tr>
            <tr class="bg-indigo-950/50 text-white">
              <td colspan="2" class="${cell} text-center tracking-widest font-black">TOTAL</td>
              <td class="${cell} text-center font-mono ${passCls(t.swReq, q.swReq)} font-bold">${t.swReq}${passIcon(t.swReq, q.swReq)}</td>
              <td class="${cell} text-center font-mono ${passCls(t.swOpt, q.swOpt)} font-bold">${t.swOpt}${passIcon(t.swOpt, q.swOpt)}</td>
              <td class="${cell} text-center font-mono ${passCls(t.leReq, q.leReq)} font-bold">${t.leReq}${passIcon(t.leReq, q.leReq)}</td>
              <td class="${cell} text-center font-mono ${passCls(t.leOpt, q.leOpt)} font-bold">${t.leOpt}${passIcon(t.leOpt, q.leOpt)}</td>
              <td class="${cell} text-center font-mono ${passCls(t.major, q.major)} font-bold">${t.major}${passIcon(t.major, q.major)}</td>
              <td class="${cell} text-center font-mono ${passCls(t.general, q.general)} font-bold">${t.general}${passIcon(t.general, q.general)}</td>
              <td class="${cell} text-center font-mono text-amber-300 font-bold">${t.progressCredits}</td>
              <td class="${cell} text-center font-mono text-emerald-300 font-bold">${t.doneCredits}</td>
              <td colspan="2" class="${cell} text-center font-mono ${t.total >= target ? 'text-emerald-300' : 'text-rose-300'} font-black">총 ${t.total} / ${target}학점</td>
            </tr>
            <tr class="bg-slate-950/80 text-amber-200">
              <td colspan="2" class="${cell} text-center tracking-widest font-black">PASS QUAL</td>
              <td class="${cell}">${pqInput('swReq')}</td>
              <td class="${cell}">${pqInput('swOpt')}</td>
              <td class="${cell}">${pqInput('leReq')}</td>
              <td class="${cell}">${pqInput('leOpt')}</td>
              <td class="${cell}">${pqInput('major')}</td>
              <td class="${cell}">${pqInput('general')}</td>
              <td colspan="4" class="${cell} text-[10px] text-slate-500 font-normal">합격 기준(최소 요건)을 수정할 수 있습니다. 충족 시 TOTAL이 초록색으로 표시됩니다.</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p class="text-[10px] text-slate-500 mt-2 sm:hidden"><i class="fa-solid fa-arrows-left-right mr-1"></i>표를 좌우로 밀어 전체 항목을 확인하세요.</p>
    </div>
  `;
}

function knouPlanSave(msg) {
  persistState();
  renderKnouTab();
  if (msg) showToast(msg);
}

function updateKnouPlanCell(rowId, field, value) {
  const plan = getKnouCreditPlan();
  const row = (plan.rows || []).find(r => r.id === rowId);
  if (!row) return;
  if (field === 'major' || field === 'general') {
    row[field] = value === '' ? '' : Math.max(0, parseFloat(value) || 0);
  } else {
    row[field] = value;
  }
  knouPlanSave();
}

function setKnouPlanStatus(rowId, status, checked) {
  const plan = getKnouCreditPlan();
  const row = (plan.rows || []).find(r => r.id === rowId);
  if (!row) return;
  row.status = checked ? status : '';
  knouPlanSave(checked ? (status === 'done' ? `✅ '${row.name}' 이수 완료` : `⏳ '${row.name}' 진행 중`) : null);
}

function updateKnouPlanMeta(path, value) {
  const plan = getKnouCreditPlan();
  const v = value === '' ? '' : Math.max(0, parseFloat(value) || 0);
  if (path.startsWith('passQual.')) {
    if (!plan.passQual) plan.passQual = {};
    plan.passQual[path.split('.')[1]] = v;
  } else {
    plan[path] = v;
  }
  knouPlanSave();
}

function addKnouPlanRow(semester) {
  const plan = getKnouCreditPlan();
  plan.rows.push({ id: 'cp-' + Date.now(), semester, name: '', swReq: false, swOpt: false, leReq: '', leOpt: '', major: '', general: '', status: '', note: '' });
  knouPlanSave(`'${semester}'에 새 과목 행이 추가되었습니다.`);
}

function deleteKnouPlanRow(rowId) {
  const plan = getKnouCreditPlan();
  const row = plan.rows.find(r => r.id === rowId);
  if (!row || !confirm(`'${row.name || '해당 과목'}'을 삭제할까요?`)) return;
  plan.rows = plan.rows.filter(r => r.id !== rowId);
  knouPlanSave('과목이 삭제되었습니다.');
}

function addKnouPlanSemester() {
  const name = prompt('추가할 새 학기명을 입력하세요 (예: 27년 2학기):');
  if (!name || !name.trim()) return;
  const plan = getKnouCreditPlan();
  const clean = name.trim();
  if (plan.semesters.includes(clean)) { showToast('이미 존재하는 학기명입니다.'); return; }
  plan.semesters.push(clean);
  knouPlanSave(`'${clean}' 학기가 추가되었습니다.`);
}

function renameKnouPlanSemester(oldName, newName) {
  newName = (newName || '').trim();
  const plan = getKnouCreditPlan();
  if (!newName || newName === oldName) return;
  if (plan.semesters.includes(newName)) { showToast('이미 존재하는 학기명입니다.'); renderKnouTab(); return; }
  plan.semesters = plan.semesters.map(s => s === oldName ? newName : s);
  plan.rows.forEach(r => { if (r.semester === oldName) r.semester = newName; });
  knouPlanSave('학기명이 변경되었습니다.');
}

function deleteKnouPlanSemester(name) {
  const plan = getKnouCreditPlan();
  const cnt = plan.rows.filter(r => r.semester === name).length;
  if (!confirm(`'${name}' 학기와 소속 과목 ${cnt}개를 모두 삭제할까요?`)) return;
  plan.semesters = plan.semesters.filter(s => s !== name);
  plan.rows = plan.rows.filter(r => r.semester !== name);
  knouPlanSave('학기가 삭제되었습니다.');
}

function resetKnouPlan() {
  if (!confirm('학점 이수 계획표를 제공해주신 32과목 기본 표 데이터로 채우고 초기화하시겠습니까?')) return;
  state.knou.creditPlan = JSON.parse(JSON.stringify(window.INITIAL_KNOU_CREDIT_PLAN || INITIAL_KNOU_CREDIT_PLAN));
  knouPlanSave('32과목 기본 학점 이수 계획표가 복원되었습니다. ✅');
}

function exportKnouPlanCsv() {
  const plan = getKnouCreditPlan();
  const t = computeKnouCreditTotals(plan);
  const q = plan.passQual || {};
  const target = plan.totalTarget || 130;
  let csv = "\\uFEFF학기 구분,과목 명,사회복지사 필수,사회복지사 선택,평생교육사 필수,평생교육사 선택,전공,교양 or 일반 선택,진행 중,완료,비고\\r\\n";
  (plan.rows || []).forEach(r => {
    csv += [
      `"${(r.semester || '').replace(/"/g, '""')}"`,
      `"${(r.name || '').replace(/"/g, '""')}"`,
      r.swReq ? 'O' : '',
      r.swOpt ? 'O' : '',
      `"${(r.leReq || '').replace(/"/g, '""')}"`,
      `"${(r.leOpt || '').replace(/"/g, '""')}"`,
      r.major !== '' && r.major !== undefined ? r.major : '',
      r.general !== '' && r.general !== undefined ? r.general : '',
      r.status === 'progress' ? 'O' : '',
      r.status === 'done' ? 'O' : '',
      `"${(r.note || '').replace(/"/g, '""')}"`
    ].join(',') + "\\r\\n";
  });
  csv += `기존 인정 학점,,,,,,"${plan.priorMajor || 0}","${plan.priorGeneral || 0}",,,\\r\\n`;
  csv += `TOTAL,,${t.swReq},${t.swOpt},${t.leReq},${t.leOpt},${t.major},${t.general},${t.progressCredits},${t.doneCredits},"총 ${t.total} / ${target}학점"\\r\\n`;
  csv += `PASS QUAL,,${q.swReq || ''},${q.swOpt || ''},${q.leReq || ''},${q.leOpt || ''},${q.major || ''},${q.general || ''},,,\\r\\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `방통대_학점이수계획표_32과목_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('학점 이수 계획표 CSV 파일이 다운로드되었습니다.');
}
'''

# Place credit_plan_funcs right before renderExamTab
marker_exam_tab = "// ==========================================================================\nfunction renderExamTab() {"
if marker_exam_tab in app_content:
    app_content = app_content.replace(marker_exam_tab, credit_plan_funcs + "\n\n" + marker_exam_tab)
else:
    print("Warning: marker_exam_tab not found in app.js")

# In window.app, expose the new handlers
target_window_knou = "  updateKnouSimulator: (cId, scoreType, val) => updateKnouSimulator(cId, scoreType, val),"
new_window_knou = """  updateKnouSimulator: (cId, scoreType, val) => updateKnouSimulator(cId, scoreType, val),
  updateKnouPlanCell: (id, f, v) => updateKnouPlanCell(id, f, v),
  setKnouPlanStatus: (id, s, c) => setKnouPlanStatus(id, s, c),
  updateKnouPlanMeta: (p, v) => updateKnouPlanMeta(p, v),
  addKnouPlanRow: (sem) => addKnouPlanRow(sem),
  deleteKnouPlanRow: (id) => deleteKnouPlanRow(id),
  addKnouPlanSemester: () => addKnouPlanSemester(),
  renameKnouPlanSemester: (o, n) => renameKnouPlanSemester(o, n),
  deleteKnouPlanSemester: (n) => deleteKnouPlanSemester(n),
  resetKnouPlan: () => resetKnouPlan(),
  exportKnouPlanCsv: () => exportKnouPlanCsv(),"""

app_content = app_content.replace(target_window_knou, new_window_knou)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_content)
print("js/app.js updated with knou credit plan section and handlers.")
