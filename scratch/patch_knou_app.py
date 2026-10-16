import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update loadState() knouDataVersion 3 -> 4 and grade preservation
old_load_knou = '''        const upgradedKnou = (parsed.knou && parsed.knou.knouDataVersion === 3 && parsed.knou.creditPlan && Array.isArray(parsed.knou.creditPlan.rows) && parsed.knou.creditPlan.rows.length >= 32)
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
            })();'''

new_load_knou = '''        const upgradedKnou = (parsed.knou && parsed.knou.knouDataVersion === 4 && parsed.knou.creditPlan && Array.isArray(parsed.knou.creditPlan.rows) && parsed.knou.creditPlan.rows.length >= 32)
          ? parsed.knou
          : (() => {
              const fresh = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
              fresh.knouDataVersion = 4;
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
                      if (oldRow.grade !== undefined && oldRow.grade !== '') match.grade = oldRow.grade;
                      if (oldRow.major !== undefined && oldRow.major !== '') match.major = oldRow.major;
                      if (oldRow.general !== undefined && oldRow.general !== '') match.general = oldRow.general;
                    } else {
                      fresh.creditPlan.rows.push(oldRow);
                    }
                  });
                }
              }
              return fresh;
            })();'''

if old_load_knou in code:
    code = code.replace(old_load_knou, new_load_knou)
    print("loadState upgradedKnou replaced successfully.")
else:
    print("WARNING: old_load_knou not found exactly.")

# 2. Replace knou credit plan section implementation
start_marker = "// --------------------------------------------------------------------------\n// 📋 사회복지사·평생교육사·방통대 학점 이수 계획표 (32과목 관리 엔진)\n// --------------------------------------------------------------------------"
end_marker = "// ==========================================================================\nfunction renderExamTab() {"

idx_start = code.find(start_marker)
idx_end = code.find(end_marker)

if idx_start == -1 or idx_end == -1:
    print(f"ERROR: Could not find markers: start={idx_start}, end={idx_end}")
    exit(1)

new_knou_section = '''// --------------------------------------------------------------------------
// 📋 사회복지사·평생교육사·방통대 학점 이수 계획표 (32과목 관리 및 성적·CRUD 엔진)
// --------------------------------------------------------------------------
const KNOU_GRADE_SCALE = {
  'A+': 4.5,
  'A0': 4.0,
  'A': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'B': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'C': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'D': 1.0,
  'F': 0.0,
  'P': 'P',
  'NP': 'NP'
};

function getKnouGradePoint(grade) {
  if (!grade) return null;
  const g = String(grade).trim().toUpperCase();
  if (g === 'P' || g === 'PASS') return 'P';
  if (g === 'NP') return 'NP';
  if (KNOU_GRADE_SCALE[g] !== undefined) return KNOU_GRADE_SCALE[g];
  const num = parseFloat(g);
  if (!isNaN(num) && num >= 0 && num <= 4.5) return num;
  return null;
}

function getKnouGradeClass(grade) {
  const g = String(grade || '').trim().toUpperCase();
  if (g === 'A+' || g === 'A0' || g === 'A') return 'text-emerald-300 font-bold';
  if (g === 'B+' || g === 'B0' || g === 'B') return 'text-sky-300 font-bold';
  if (g === 'C+' || g === 'C0' || g === 'C') return 'text-amber-300 font-semibold';
  if (g === 'D+' || g === 'D0' || g === 'D') return 'text-orange-400 font-semibold';
  if (g === 'F' || g === 'NP') return 'text-rose-400 font-bold';
  if (g === 'P') return 'text-purple-300 font-bold';
  return 'text-slate-400';
}

function getKnouCreditPlan() {
  if (!state.knou) state.knou = JSON.parse(JSON.stringify(INITIAL_KNOU_DATA));
  const defaultPlan = JSON.parse(JSON.stringify(window.INITIAL_KNOU_CREDIT_PLAN || INITIAL_KNOU_CREDIT_PLAN));
  if (!state.knou.creditPlan || !state.knou.creditPlan.rows || state.knou.creditPlan.rows.length < 32) {
    state.knou.creditPlan = defaultPlan;
  } else if ((state.knou.creditPlan.planVersion || 0) < 3) {
    state.knou.creditPlan.planVersion = 3;
    state.knou.creditPlan.rows.forEach(r => {
      if (r.grade === undefined) {
        const match = defaultPlan.rows.find(d => d.id === r.id || (d.name && r.name && d.name.trim() === r.name.trim()));
        r.grade = match && match.grade ? match.grade : (r.status === 'done' ? 'A0' : '');
      }
    });
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
  const t = {
    swReq: 0,
    swOpt: 0,
    leReq: 0,
    leOpt: 0,
    majorRows: 0,
    generalRows: 0,
    doneCredits: 0,
    progressCredits: 0,
    planCredits: 0,
    gpaCredits: 0,
    gpaPoints: 0,
    pCredits: 0,
    gradedCount: 0
  };

  rows.forEach(r => {
    if (r.swReq) t.swReq++;
    if (r.swOpt) t.swOpt++;
    if (String(r.leReq || '').trim()) t.leReq++;
    if (String(r.leOpt || '').trim()) t.leOpt++;
    const m = num(r.major), g = num(r.general);
    t.majorRows += m;
    t.generalRows += g;
    const credits = m + g;
    if (r.status === 'done') t.doneCredits += credits;
    else if (r.status === 'progress') t.progressCredits += credits;
    else t.planCredits += credits;

    // 성적 및 GPA 연산
    const gp = getKnouGradePoint(r.grade);
    if (gp === 'P') {
      t.pCredits += credits;
    } else if (typeof gp === 'number' && credits > 0) {
      t.gpaCredits += credits;
      t.gpaPoints += (credits * gp);
      t.gradedCount++;
    }
  });

  t.major = t.majorRows + num(plan.priorMajor);
  t.general = t.generalRows + num(plan.priorGeneral);
  t.total = t.major + t.general;
  t.doneWithPrior = t.doneCredits + num(plan.priorMajor) + num(plan.priorGeneral);
  t.gpa = t.gpaCredits > 0 ? (t.gpaPoints / t.gpaCredits).toFixed(2) : '0.00';

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
      <td rowspan="${span}" class="${cell} bg-indigo-950/40 min-w-[130px] align-top">
        <input type="text" value="${escCp(sem)}" onchange="window.app.renameKnouPlanSemester('${escCp(sem).replace(/'/g, "\\'")}', this.value)" class="${inp} font-bold text-indigo-200 mb-1.5" title="학기명 직접 수정">
        <div class="text-[10px] text-slate-400 mb-2 font-medium">${semRows.length}과목 · ${semCredits}학점</div>
        <div class="flex flex-col gap-1.5">
          <button onclick="window.app.addKnouPlanRow('${escCp(sem).replace(/'/g, "\\'")}')" class="w-full px-2 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 hover:text-white border border-indigo-500/40 text-[11px] font-bold cursor-pointer transition flex items-center justify-center gap-1 shadow-sm"><i class="fa-solid fa-plus text-[10px]"></i> 과목 추가</button>
          <button onclick="window.app.deleteKnouPlanSemester('${escCp(sem).replace(/'/g, "\\'")}')" class="w-full px-2 py-0.5 rounded bg-rose-500/10 hover:bg-rose-500/25 text-rose-300/80 hover:text-rose-200 border border-rose-500/20 text-[10px] cursor-pointer transition flex items-center justify-center gap-1" title="학기 삭제"><i class="fa-solid fa-trash text-[9px]"></i> 학기 삭제</button>
        </div>
      </td>`;
    const rowHtml = semRows.map((r, i) => `
      <tr class="hover:bg-slate-800/40 transition ${r.status === 'done' ? 'bg-emerald-950/20' : r.status === 'progress' ? 'bg-amber-950/20' : ''}">
        ${i === 0 ? semCell : ''}
        <td class="${cell} min-w-[210px]">
          <div class="flex items-center gap-1.5">
            ${r.status === 'done' ? '<i class="fa-solid fa-check text-emerald-400 text-xs shrink-0"></i>' : r.status === 'progress' ? '<i class="fa-regular fa-clock text-amber-400 text-xs shrink-0"></i>' : ''}
            <input type="text" data-row-id="${r.id}" value="${escCp(r.name)}" placeholder="과목명 입력" onchange="window.app.updateKnouPlanCell('${r.id}','name',this.value)" class="${inp} font-medium ${r.status === 'done' ? 'text-emerald-200' : ''}">
          </div>
        </td>
        <td class="${cell} text-center"><input type="checkbox" ${r.swReq ? 'checked' : ''} onchange="window.app.updateKnouPlanCell('${r.id}','swReq',this.checked)" class="w-4 h-4 accent-sky-500 cursor-pointer"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.swOpt ? 'checked' : ''} onchange="window.app.updateKnouPlanCell('${r.id}','swOpt',this.checked)" class="w-4 h-4 accent-sky-500 cursor-pointer"></td>
        <td class="${cell} min-w-[75px]"><input type="text" value="${escCp(r.leReq)}" placeholder="-" onchange="window.app.updateKnouPlanCell('${r.id}','leReq',this.value)" class="${inp} text-center text-purple-200 font-semibold"></td>
        <td class="${cell} min-w-[85px]"><input type="text" value="${escCp(r.leOpt)}" placeholder="-" onchange="window.app.updateKnouPlanCell('${r.id}','leOpt',this.value)" class="${inp} text-center text-purple-200 font-semibold"></td>
        <td class="${cell} min-w-[50px]"><input type="number" min="0" max="30" value="${escCp(r.major)}" onchange="window.app.updateKnouPlanCell('${r.id}','major',this.value)" class="${inp} text-center font-mono font-bold text-sky-300"></td>
        <td class="${cell} min-w-[50px]"><input type="number" min="0" max="30" value="${escCp(r.general)}" onchange="window.app.updateKnouPlanCell('${r.id}','general',this.value)" class="${inp} text-center font-mono font-bold text-slate-300"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.status === 'progress' ? 'checked' : ''} onchange="window.app.setKnouPlanStatus('${r.id}','progress',this.checked)" class="w-4 h-4 accent-amber-500 cursor-pointer" title="진행 중 체크"></td>
        <td class="${cell} text-center"><input type="checkbox" ${r.status === 'done' ? 'checked' : ''} onchange="window.app.setKnouPlanStatus('${r.id}','done',this.checked)" class="w-4 h-4 accent-emerald-500 cursor-pointer" title="이수 완료 체크"></td>
        <td class="${cell} min-w-[95px] text-center">
          <select onchange="window.app.updateKnouPlanGrade('${r.id}', this.value)" class="${inp} text-center font-bold ${getKnouGradeClass(r.grade)} cursor-pointer py-1">
            <option value="" ${!r.grade ? 'selected' : ''}>- 선택</option>
            <option value="A+" ${r.grade === 'A+' ? 'selected' : ''} class="text-emerald-300 bg-slate-900 font-bold">A+ (4.5)</option>
            <option value="A0" ${r.grade === 'A0' ? 'selected' : ''} class="text-emerald-400 bg-slate-900 font-bold">A0 (4.0)</option>
            <option value="B+" ${r.grade === 'B+' ? 'selected' : ''} class="text-sky-300 bg-slate-900 font-bold">B+ (3.5)</option>
            <option value="B0" ${r.grade === 'B0' ? 'selected' : ''} class="text-sky-400 bg-slate-900 font-bold">B0 (3.0)</option>
            <option value="C+" ${r.grade === 'C+' ? 'selected' : ''} class="text-amber-300 bg-slate-900">C+ (2.5)</option>
            <option value="C0" ${r.grade === 'C0' ? 'selected' : ''} class="text-amber-400 bg-slate-900">C0 (2.0)</option>
            <option value="D+" ${r.grade === 'D+' ? 'selected' : ''} class="text-orange-400 bg-slate-900">D+ (1.5)</option>
            <option value="D0" ${r.grade === 'D0' ? 'selected' : ''} class="text-orange-400 bg-slate-900">D0 (1.0)</option>
            <option value="F" ${r.grade === 'F' ? 'selected' : ''} class="text-rose-400 bg-slate-900 font-bold">F (0.0)</option>
            <option value="P" ${r.grade === 'P' ? 'selected' : ''} class="text-purple-300 bg-slate-900 font-bold">P (Pass)</option>
          </select>
        </td>
        <td class="${cell} min-w-[160px]"><input type="text" value="${escCp(r.note)}" placeholder="메모/비고" onchange="window.app.updateKnouPlanCell('${r.id}','note',this.value)" class="${inp} text-slate-300"></td>
        <td class="${cell} text-center min-w-[65px]">
          <button onclick="window.app.deleteKnouPlanRow('${r.id}')" class="px-2 py-1 rounded bg-rose-500/15 hover:bg-rose-500/35 text-rose-300 hover:text-rose-100 border border-rose-500/25 text-[11px] font-bold cursor-pointer transition flex items-center justify-center gap-1 mx-auto" title="'${escCp(r.name || '과목')}' 삭제">
            <i class="fa-solid fa-trash-can text-[10px]"></i> 삭제
          </button>
        </td>
      </tr>`).join('');
    const emptyRow = semRows.length === 0
      ? `<tr>${semCell}<td colspan="12" class="${cell} text-center text-[11px] text-slate-500 py-3">등록된 과목이 없습니다. <button onclick="window.app.addKnouPlanRow('${escCp(sem).replace(/'/g, "\\'")}')" class="text-indigo-400 hover:underline font-bold ml-1 cursor-pointer">[+ 과목 추가]</button>를 눌러 등록하세요.</td></tr>`
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
            25년 2학기 완료 과목부터 27년 1학기 및 기존 인정 과목까지 성적(등급/GPA), 학점, 과목 추가/삭제를 자유롭게 관리할 수 있으며, TOTAL 및 PASS QUAL이 실시간 연동됩니다.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="window.app.promptAddKnouCourse()" class="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold cursor-pointer transition shadow-lg flex items-center gap-1.5"><i class="fa-solid fa-plus-circle"></i> 과목 추가</button>
          <button onclick="window.app.resetKnouPlan()" class="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer transition shadow-lg flex items-center gap-1.5" title="제공해주신 32과목 표 데이터로 복원"><i class="fa-solid fa-rotate-left"></i> 기본 32과목 표 채우기</button>
          <button onclick="window.app.addKnouPlanSemester()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer transition flex items-center gap-1.5"><i class="fa-solid fa-plus text-indigo-400"></i> 학기 추가</button>
          <button onclick="window.app.exportKnouPlanCsv()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer transition flex items-center gap-1.5"><i class="fa-solid fa-file-csv text-emerald-400"></i> CSV 저장</button>
        </div>
      </div>

      <!-- 요약 카드 (5대 지표: 총 학점, 이수 완료, 진행/계획, 취득 GPA, 자격 요건) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 mb-4">
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
          <div class="text-[10px] text-slate-400 mt-1">진행 ${t.progressCredits}학점 · 계획 ${t.planCredits}학점</div>
        </div>
        <div class="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20 bg-emerald-950/10">
          <div class="text-[11px] text-emerald-400 font-medium flex items-center justify-between">
            <span>취득 누적 평점 (GPA)</span>
            <span class="text-[10px] text-slate-400">4.5 만점</span>
          </div>
          <div class="text-xl font-black font-mono text-emerald-300">${t.gpa} <span class="text-xs text-slate-500">/ 4.5</span></div>
          <div class="text-[10px] text-slate-400 mt-1 font-mono">평점반영 ${t.gpaCredits}학점 · Pass ${t.pCredits}학점</div>
        </div>
        <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 col-span-2 sm:col-span-1">
          <div class="text-[11px] text-slate-400">자격 요건 (사복 / 평교)</div>
          <div class="text-sm font-black font-mono mt-1">
            <span class="${passCls(t.swReq, q.swReq)}" title="사회복지사 필수">${t.swReq}/${q.swReq ?? '-'}</span> ·
            <span class="${passCls(t.swOpt, q.swOpt)}" title="사회복지사 선택">${t.swOpt}/${q.swOpt ?? '-'}</span> ·
            <span class="${passCls(t.leReq, q.leReq)}" title="평생교육사 필수">${t.leReq}/${q.leReq ?? '-'}</span> ·
            <span class="${passCls(t.leOpt, q.leOpt)}" title="평생교육사 선택">${t.leOpt}/${q.leOpt ?? '-'}</span>
          </div>
          <div class="text-[10px] text-slate-400 mt-1">사복 ${t.swReq + t.swOpt}과목 · 평교 ${t.leReq + t.leOpt}과목</div>
        </div>
      </div>

      <!-- 편집 표 -->
      <div class="overflow-x-auto rounded-xl border border-slate-800 custom-scrollbar">
        <table class="w-full min-w-[1200px] text-xs text-slate-200 border-collapse">
          <thead>
            <tr class="bg-slate-950 text-slate-300 text-[11px]">
              <th rowspan="2" class="${cell}">학기 구분</th>
              <th rowspan="2" class="${cell}">과목 명</th>
              <th colspan="2" class="${cell} text-sky-300">사회복지사</th>
              <th colspan="2" class="${cell} text-purple-300">평생교육사</th>
              <th colspan="4" class="${cell} text-indigo-300">방통대 학점 (총 ${target} 학점 이상)</th>
              <th rowspan="2" class="${cell} text-emerald-300 min-w-[95px]">성적 (등급)</th>
              <th rowspan="2" class="${cell}">비고</th>
              <th rowspan="2" class="${cell} w-16 text-center">관리</th>
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
              <td colspan="5" class="${cell} text-[10px] text-slate-500 font-normal">표 과목 외에 이미 인정받은 학점을 입력하면 TOTAL에 합산됩니다.</td>
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
              <td class="${cell} text-center font-mono text-emerald-300 font-black" title="성적 입력 과목 평균 평점">평균 ${t.gpa}</td>
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
              <td colspan="2" class="${cell} text-center text-[10px] text-slate-500">-</td>
              <td class="${cell} text-center text-[10px] text-emerald-400 font-mono">4.5 만점</td>
              <td colspan="2" class="${cell} text-[10px] text-slate-500 font-normal">합격 기준(최소 요건)을 수정할 수 있습니다. 충족 시 TOTAL이 초록색으로 표시됩니다.</td>
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

function updateKnouPlanGrade(rowId, grade) {
  const plan = getKnouCreditPlan();
  const row = (plan.rows || []).find(r => r.id === rowId);
  if (!row) return;
  row.grade = grade;
  if (grade && grade !== 'F' && grade !== 'NP' && !row.status) {
    row.status = 'done';
  }
  knouPlanSave(grade ? `✅ '${row.name || '과목'}' 성적이 '${grade}'(으)로 반영되었습니다.` : null);
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
  const newId = 'cp-' + Date.now();
  plan.rows.push({
    id: newId,
    semester,
    name: '',
    swReq: false,
    swOpt: false,
    leReq: '',
    leOpt: '',
    major: 3,
    general: '',
    grade: '',
    status: '',
    note: ''
  });
  knouPlanSave(`'${semester}'에 새 과목 행이 추가되었습니다.`);
  setTimeout(() => {
    const input = document.querySelector(`input[data-row-id="${newId}"]`);
    if (input) input.focus();
  }, 100);
}

function deleteKnouPlanRow(rowId) {
  const plan = getKnouCreditPlan();
  const row = plan.rows.find(r => r.id === rowId);
  const name = (row && row.name) ? row.name : '선택한 과목';
  if (!confirm(`'${name}' 과목을 정말 삭제하시겠습니까?`)) return;
  plan.rows = plan.rows.filter(r => r.id !== rowId);
  knouPlanSave(`'${name}' 과목이 삭제되었습니다.`);
}

function promptAddKnouCourse(defaultSemester) {
  const plan = getKnouCreditPlan();
  const semesters = plan.semesters || [];
  const semOptions = semesters.map(s => `<option value="${escCp(s)}" ${s === defaultSemester ? 'selected' : ''}>${escCp(s)}</option>`).join('');

  let modal = document.getElementById('modal-add-knou-course');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-add-knou-course';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="glass-panel w-full max-w-lg rounded-2xl border border-indigo-500/30 bg-slate-900/95 p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
        <h3 class="text-lg font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-book-medical text-emerald-400"></i>
          새 과목 추가
        </h3>
        <button onclick="window.app.closeAddKnouCourseModal()" class="text-slate-400 hover:text-white text-lg px-2 py-1 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <form id="form-add-knou-course" onsubmit="window.app.submitAddKnouCourse(event)" class="space-y-3.5">
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">학기 선택</label>
          <select id="add-course-semester" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
            ${semOptions}
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">과목명 <span class="text-rose-400">*</span></label>
          <input type="text" id="add-course-name" required placeholder="예: 프로그램개발과평가" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-sky-300 mb-1">사회복지사</label>
            <select id="add-course-sw" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400">
              <option value="none">해당 없음</option>
              <option value="req">필수 과목</option>
              <option value="opt">선택 과목</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-purple-300 mb-1">평생교육사</label>
            <select id="add-course-le" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-400">
              <option value="none">해당 없음</option>
              <option value="req">O (필수)</option>
              <option value="opt1">O (선택1)</option>
              <option value="opt2">O (선택2)</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">전공 학점</label>
            <input type="number" id="add-course-major" min="0" max="30" value="3" placeholder="3" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">교양/일선 학점</label>
            <input type="number" id="add-course-general" min="0" max="30" value="0" placeholder="0" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-emerald-300 mb-1">성적 (등급)</label>
            <select id="add-course-grade" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 font-bold">
              <option value="">- 선택 (미이수)</option>
              <option value="A+">A+ (4.5)</option>
              <option value="A0">A0 (4.0)</option>
              <option value="B+">B+ (3.5)</option>
              <option value="B0">B0 (3.0)</option>
              <option value="C+">C+ (2.5)</option>
              <option value="C0">C0 (2.0)</option>
              <option value="D+">D+ (1.5)</option>
              <option value="D0">D0 (1.0)</option>
              <option value="F">F (0.0)</option>
              <option value="P">P (Pass)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">이수 상태</label>
            <select id="add-course-status" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
              <option value="">계획/예정</option>
              <option value="progress">⏳ 진행 중</option>
              <option value="done">✅ 이수 완료</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">비고 / 메모</label>
          <input type="text" id="add-course-note" placeholder="예: 대면 수업, 출석 수업 등" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-400">
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
          <button type="button" onclick="window.app.closeAddKnouCourseModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer transition">취소</button>
          <button type="submit" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer transition shadow-lg flex items-center gap-1.5"><i class="fa-solid fa-plus"></i> 과목 추가</button>
        </div>
      </form>
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setTimeout(() => {
    const inp = document.getElementById('add-course-name');
    if (inp) inp.focus();
  }, 100);
}

function closeAddKnouCourseModal() {
  const modal = document.getElementById('modal-add-knou-course');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function submitAddKnouCourse(e) {
  if (e && e.preventDefault) e.preventDefault();
  const semester = document.getElementById('add-course-semester').value;
  const name = document.getElementById('add-course-name').value.trim();
  if (!name) {
    showToast('과목명을 입력해 주세요.');
    return;
  }
  const sw = document.getElementById('add-course-sw').value;
  const le = document.getElementById('add-course-le').value;
  const major = parseFloat(document.getElementById('add-course-major').value) || '';
  const general = parseFloat(document.getElementById('add-course-general').value) || '';
  const grade = document.getElementById('add-course-grade').value;
  let status = document.getElementById('add-course-status').value;
  if (!status && grade && grade !== 'F' && grade !== 'NP') status = 'done';
  const note = document.getElementById('add-course-note').value.trim();

  const plan = getKnouCreditPlan();
  const newRow = {
    id: 'cp-' + Date.now(),
    semester,
    name,
    swReq: sw === 'req',
    swOpt: sw === 'opt',
    leReq: le === 'req' ? 'O (필수)' : '',
    leOpt: le === 'opt1' ? 'O (선택1)' : (le === 'opt2' ? 'O (선택2)' : ''),
    major,
    general,
    grade,
    status,
    note
  };

  plan.rows.push(newRow);
  closeAddKnouCourseModal();
  knouPlanSave(`'${semester}'에 '${name}' 과목이 추가되었습니다. 🎉`);
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
  if (!confirm('학점 이수 계획표를 제공해주신 32과목 기본 표 데이터로 복원하시겠습니까?')) return;
  state.knou.creditPlan = JSON.parse(JSON.stringify(window.INITIAL_KNOU_CREDIT_PLAN || INITIAL_KNOU_CREDIT_PLAN));
  knouPlanSave('32과목 기본 학점 이수 계획표가 복원되었습니다. ✅');
}

function exportKnouPlanCsv() {
  const plan = getKnouCreditPlan();
  const t = computeKnouCreditTotals(plan);
  const q = plan.passQual || {};
  const target = plan.totalTarget || 130;
  let csv = "\\uFEFF학기 구분,과목 명,사회복지사 필수,사회복지사 선택,평생교육사 필수,평생교육사 선택,전공,교양 or 일반 선택,진행 중,완료,성적(등급),비고\\r\\n";
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
      `"${(r.grade || '').replace(/"/g, '""')}"`,
      `"${(r.note || '').replace(/"/g, '""')}"`
    ].join(',') + "\\r\\n";
  });
  csv += `기존 인정 학점,,,,,,"${plan.priorMajor || 0}","${plan.priorGeneral || 0}",,,,\r\n`;
  csv += `TOTAL,,${t.swReq},${t.swOpt},${t.leReq},${t.leOpt},${t.major},${t.general},${t.progressCredits},${t.doneCredits},"평균 ${t.gpa}","총 ${t.total} / ${target}학점"\r\n`;
  csv += `PASS QUAL,,${q.swReq || ''},${q.swOpt || ''},${q.leReq || ''},${q.leOpt || ''},${q.major || ''},${q.general || ''},,,"4.5 만점",\r\n`;

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
}'''

code = code[:idx_start] + new_knou_section + "\n\n" + code[idx_end:]

# 3. Update window.app bindings
old_bindings = '''  updateKnouPlanCell: (id, f, v) => updateKnouPlanCell(id, f, v),
  setKnouPlanStatus: (id, s, c) => setKnouPlanStatus(id, s, c),
  updateKnouPlanMeta: (p, v) => updateKnouPlanMeta(p, v),
  addKnouPlanRow: (sem) => addKnouPlanRow(sem),
  deleteKnouPlanRow: (id) => deleteKnouPlanRow(id),
  addKnouPlanSemester: () => addKnouPlanSemester(),
  renameKnouPlanSemester: (o, n) => renameKnouPlanSemester(o, n),
  deleteKnouPlanSemester: (n) => deleteKnouPlanSemester(n),
  resetKnouPlan: () => resetKnouPlan(),
  exportKnouPlanCsv: () => exportKnouPlanCsv(),'''

new_bindings = '''  updateKnouPlanCell: (id, f, v) => updateKnouPlanCell(id, f, v),
  updateKnouPlanGrade: (id, g) => updateKnouPlanGrade(id, g),
  setKnouPlanStatus: (id, s, c) => setKnouPlanStatus(id, s, c),
  updateKnouPlanMeta: (p, v) => updateKnouPlanMeta(p, v),
  promptAddKnouCourse: (sem) => promptAddKnouCourse(sem),
  closeAddKnouCourseModal: () => closeAddKnouCourseModal(),
  submitAddKnouCourse: (e) => submitAddKnouCourse(e),
  addKnouPlanRow: (sem) => addKnouPlanRow(sem),
  deleteKnouPlanRow: (id) => deleteKnouPlanRow(id),
  addKnouPlanSemester: () => addKnouPlanSemester(),
  renameKnouPlanSemester: (o, n) => renameKnouPlanSemester(o, n),
  deleteKnouPlanSemester: (n) => deleteKnouPlanSemester(n),
  resetKnouPlan: () => resetKnouPlan(),
  exportKnouPlanCsv: () => exportKnouPlanCsv(),'''

if old_bindings in code:
    code = code.replace(old_bindings, new_bindings)
    print("window.app bindings updated successfully.")
else:
    print("WARNING: old_bindings not found exactly.")

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("js/app.js patched successfully.")
