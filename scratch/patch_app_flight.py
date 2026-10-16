import re

def patch_app():
    with open('js/app.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update loadInitialData for caminoDataVersion 6
    target_load = '''        const upgradedCamino = (parsed.camino && parsed.camino.caminoDataVersion === 4)
          ? parsed.camino
          : (() => {
              const fresh = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
              if (parsed.camino) {
                if (parsed.camino.memos) fresh.memos = parsed.camino.memos;
                if (Array.isArray(parsed.camino.packingList)) {
                  parsed.camino.packingList.forEach(oldItem => {
                    if (oldItem.done) {
                      const match = fresh.packingList.find(f => f.text === oldItem.text || (oldItem.text && f.text.startsWith(oldItem.text.slice(0, 10))));
                      if (match) match.done = true;
                    }
                  });
                }
              }
              return fresh;
            })();'''

    replacement_load = '''        const upgradedCamino = (parsed.camino && parsed.camino.caminoDataVersion === 6)
          ? parsed.camino
          : (() => {
              const fresh = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
              if (parsed.camino) {
                if (parsed.camino.memos) fresh.memos = parsed.camino.memos;
                if (parsed.camino.activeRoute) fresh.activeRoute = parsed.camino.activeRoute;
                if (Array.isArray(parsed.camino.packingList)) {
                  parsed.camino.packingList.forEach(oldItem => {
                    if (oldItem.done) {
                      const match = fresh.packingList.find(f => (f.id && f.id === oldItem.id) || f.text === oldItem.text || (oldItem.text && f.text && f.text.startsWith(oldItem.text.slice(0, 10))));
                      if (match) match.done = true;
                    }
                  });
                }
                if (Array.isArray(parsed.camino.itinerary)) {
                  parsed.camino.itinerary.forEach((oldItin, idx) => {
                    if (fresh.itinerary[idx] && (oldItin.albergue || oldItin.stay)) {
                      fresh.itinerary[idx].albergue = oldItin.albergue || oldItin.stay;
                      fresh.itinerary[idx].stay = oldItin.albergue || oldItin.stay;
                    }
                  });
                }
              }
              return fresh;
            })();'''

    if target_load in content:
        content = content.replace(target_load, replacement_load)
        print("Patched loadInitialData.")
    else:
        print("Warning: target_load not found")

    # 2. Add Flight Booking Card in renderCaminoTab
    # Let's insert it right after <!-- 1. Quick Info 4-Grid Cards -->
    quick_info_end = '''      <div class="glass-panel p-4 rounded-xl border border-purple-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>준비물 & 항공·숙박 합계</span>
          <i class="fa-solid fa-receipt text-purple-400"></i>
        </div>
        <div class="text-lg font-bold text-white">${packPercent}% (${donePacking}/${totalPacking})</div>
        <div class="text-[11px] text-purple-300 mt-1">항공·숙박비 예산 포함</div>
      </div>
    </div>'''

    flight_card_html = '''      <div class="glass-panel p-4 rounded-xl border border-purple-500/30 bg-slate-900/60">
        <div class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>준비물 & 항공·숙박 합계</span>
          <i class="fa-solid fa-receipt text-purple-400"></i>
        </div>
        <div class="text-lg font-bold text-white">${packPercent}% (${donePacking}/${totalPacking})</div>
        <div class="text-[11px] text-purple-300 mt-1">항공·숙박비 예산 포함</div>
      </div>
    </div>

    <!-- ✈️ 확정 출국 항공권 상세 예약 내역 카드 (트립닷컴 결제 완료: ₩477,357) -->
    <div class="glass-panel rounded-2xl p-6 sm:p-7 mb-8 border border-sky-500/40 bg-gradient-to-br from-slate-900 via-sky-950/25 to-slate-900 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check"></i> 예약 및 결제 완료 (신한카드)
            </span>
            <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold rounded">
              트립닷컴 (Trip.com)
            </span>
            <span class="text-xs text-slate-400 font-mono">
              결제일시: 2026.10.02 15:43
            </span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <i class="fa-solid fa-plane-departure text-sky-400"></i>
            출국 항공권: 서울/인천(ICN) ➔ 포르투(OPO) 상세 여정표
          </h2>
          <p class="text-xs text-slate-300 mt-1">
            중국동방항공(MU8604 · MU201) & 이지젯(U28525) 연계 편도 항공편 (경유 2회 · 총 소요 약 26시간 35분)
          </p>
        </div>

        <!-- Total Price Badge -->
        <div class="bg-slate-950/90 border border-sky-400/40 rounded-xl p-3.5 sm:p-4 text-right min-w-[210px] shadow-lg">
          <div class="text-[11px] font-bold text-slate-400">총 결제 완료 금액</div>
          <div class="text-2xl font-black text-emerald-300 font-mono tracking-tight">
            ₩477,357
          </div>
          <div class="text-[10px] text-sky-300/80 mt-0.5">성인 1인 편도 + 기내 수하물 포함</div>
        </div>
      </div>

      <!-- Flight Segments Stepper Timeline -->
      <div class="space-y-4 mb-6">
        
        <!-- Leg 1: 인천 -> 상하이 -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/30 transition">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-black font-mono">
                1구간
              </span>
              <span class="text-sm font-bold text-white">중국동방항공 MU8604</span>
              <span class="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">상하이항공 FM828 운항</span>
              <span class="text-xs text-slate-400 font-mono">Boeing 737-800</span>
            </div>
            <div class="text-xs font-mono text-sky-400 bg-sky-950/50 px-2.5 py-1 rounded border border-sky-800/50">
              <i class="fa-regular fa-clock mr-1"></i>2시간 25분 소요 · 스낵 제공
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <div>
              <div class="text-slate-400 text-[11px]">출발 (Departure)</div>
              <div class="text-white font-bold font-mono text-sm">11월 10일 (화) 18:25</div>
              <div class="text-sky-300 font-medium">서울/인천국제공항 (ICN) 제1터미널</div>
            </div>
            <div>
              <div class="text-slate-400 text-[11px]">도착 (Arrival)</div>
              <div class="text-white font-bold font-mono text-sm">11월 10일 (화) 19:50</div>
              <div class="text-sky-300 font-medium">상하이 푸동국제공항 (PVG) 제1터미널</div>
            </div>
          </div>
        </div>

        <!-- Layover 1: 상하이 야간 환승 -->
        <div class="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
          <div class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold flex-shrink-0">
            <i class="fa-solid fa-hourglass-half"></i>
          </div>
          <div class="flex-1">
            <span class="font-bold text-amber-300">상하이 푸동(PVG) 야간 환승: 6시간 대기 (19:50 ~ 01:50)</span>
            <span class="text-slate-300 ml-2">수하물 자동 연결(경유지 수취 불필요), 환승 라운지 및 야간 휴식</span>
          </div>
        </div>

        <!-- Leg 2: 상하이 -> 런던 -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/30 transition">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-black font-mono">
                2구간 (장거리 대형기)
              </span>
              <span class="text-sm font-bold text-white">중국동방항공 MU201</span>
              <span class="text-xs text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-700/50 font-mono">Boeing 787 드림라이너</span>
            </div>
            <div class="text-xs font-mono text-purple-300 bg-purple-950/50 px-2.5 py-1 rounded border border-purple-800/50">
              <i class="fa-regular fa-clock mr-1"></i>12시간 40분 소요 · 기내식 2회 제공
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <div>
              <div class="text-slate-400 text-[11px]">출발 (Departure)</div>
              <div class="text-white font-bold font-mono text-sm">11월 11일 (수) 01:50</div>
              <div class="text-purple-300 font-medium">상하이 푸동국제공항 (PVG) 제1터미널</div>
            </div>
            <div>
              <div class="text-slate-400 text-[11px]">도착 (Arrival)</div>
              <div class="text-white font-bold font-mono text-sm">11월 11일 (수) 06:30</div>
              <div class="text-purple-300 font-medium">런던 개트윅공항 (LGW) 북측 터미널 (North)</div>
            </div>
          </div>
        </div>

        <!-- Layover 2: 런던 환승 -->
        <div class="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-xs text-sky-200">
          <div class="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold flex-shrink-0">
            <i class="fa-solid fa-person-walking-luggage"></i>
          </div>
          <div class="flex-1">
            <span class="font-bold text-sky-300">런던 개트윅(LGW) 환승: 3시간 대기 (06:30 ~ 09:30)</span>
            <span class="text-slate-300 ml-2">개트윅 북측 터미널 이동 및 보안검색 (수하물 재위탁 여부 현장 확인)</span>
          </div>
        </div>

        <!-- Leg 3: 런던 -> 포르투 -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-emerald-500/30 hover:border-emerald-500/50 transition">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black font-mono">
                3구간 (최종 목적지 진입)
              </span>
              <span class="text-sm font-bold text-white">이지젯 (easyJet) U28525</span>
              <span class="text-xs text-slate-400 font-mono">Airbus A319</span>
              <span class="text-xs text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50 font-bold">휴대 수하물 포함</span>
            </div>
            <div class="text-xs font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-800/50">
              <i class="fa-regular fa-clock mr-1"></i>2시간 30분 소요
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <div>
              <div class="text-slate-400 text-[11px]">출발 (Departure)</div>
              <div class="text-white font-bold font-mono text-sm">11월 11일 (수) 09:30</div>
              <div class="text-emerald-300 font-medium">런던 개트윅공항 (LGW) 북측 터미널</div>
            </div>
            <div class="bg-emerald-950/40 p-2.5 rounded-md border border-emerald-500/30">
              <div class="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                <i class="fa-solid fa-flag-checkered"></i> 최종 도착 (Final Arrival)
              </div>
              <div class="text-emerald-300 font-black font-mono text-base">11월 11일 (수) 12:00 (낮 12시)</div>
              <div class="text-white font-bold">포르투 (OPO) 프랑시스쿠 사 카르네이루 공항</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Fare Breakdown & Arrival Benefit Banner -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
        <!-- Fare Breakdown -->
        <div class="lg:col-span-2 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs">
          <div class="font-bold text-slate-300 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-receipt text-sky-400"></i> 트립닷컴 결제 운임 상세 내역 (신한카드)
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
            <div class="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">기본 항공운임</span>
              <span class="text-white font-bold">₩188,100</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">세금 및 수수료</span>
              <span class="text-white font-bold">₩206,800</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">발권+수하물</span>
              <span class="text-white font-bold">₩88,400</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">특별 할인</span>
              <span class="text-emerald-400 font-bold">-₩5,943</span>
            </div>
          </div>
        </div>

        <!-- Afternoon Schedule Benefit -->
        <div class="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 flex flex-col justify-between">
          <div class="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-clock-rotate-left"></i> 11/11 도착 후 여유로운 오후 일정
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">
            낮 12:00 공항 도착 ➔ 메트로 이동 후 호텔 체크인(14:00) ➔ 포르투 대성당(Sé) 순례자 여권 수령 ➔ 마트 장보기까지 매우 여유 있게 마칠 수 있습니다.
          </p>
        </div>
      </div>
    </div>'''

    if quick_info_end in content:
        content = content.replace(quick_info_end, flight_card_html)
        print("Patched renderCaminoTab with flight booking card.")
    else:
        print("Warning: quick_info_end not found")

    # 3. Update Total Budget in renderCaminoTab Right Column
    old_budget_box = '''            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-plane text-blue-400 text-[11px]"></i> 왕복 항공권 소계</span>
              <span class="font-mono font-bold text-white">₩1,350,000</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-hotel text-emerald-400 text-[11px]"></i> 21박 숙박비 소계 (환전)</span>
              <span class="font-mono font-bold text-amber-300">€460 (₩690,000)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-utensils text-amber-400 text-[11px]"></i> 식비 및 현지 경비 (환전)</span>
              <span class="font-mono font-bold text-amber-300">€690 (₩1,035,000)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-shield-heart text-rose-400 text-[11px]"></i> 해외 여행자 보험 (상해·질병·도난)</span>
              <span class="font-mono font-bold text-rose-300">₩45,000</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-backpack text-purple-400 text-[11px]"></i> 장비·통신(eSIM)·기타 소계</span>
              <span class="font-mono font-bold text-purple-300">₩205,000</span>
            </div>
            <div class="pt-2.5 border-t border-slate-800 flex items-center justify-between">
              <span class="text-xs font-black text-white">총 예상 지출 합계</span>
              <span class="text-base font-black text-emerald-400 font-mono">약 ₩3,325,000</span>
            </div>'''

    new_budget_box = '''            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-plane text-emerald-400 text-[11px]"></i> 출국 항공권 (결제완료)</span>
              <span class="font-mono font-bold text-emerald-300">₩477,357</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-plane-arrival text-sky-400 text-[11px]"></i> 귀국 항공권 (12/01 편도 예상)</span>
              <span class="font-mono font-bold text-slate-300">₩750,000</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-hotel text-amber-400 text-[11px]"></i> 21박 숙박비 소계 (환전)</span>
              <span class="font-mono font-bold text-amber-300">€460 (₩690,000)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-utensils text-amber-400 text-[11px]"></i> 식비 및 현지 경비 (환전)</span>
              <span class="font-mono font-bold text-amber-300">€690 (₩1,035,000)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-shield-heart text-rose-400 text-[11px]"></i> 해외 여행자 보험 (상해·질병·도난)</span>
              <span class="font-mono font-bold text-rose-300">₩45,000</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-backpack text-purple-400 text-[11px]"></i> 장비·통신(eSIM)·기타 소계</span>
              <span class="font-mono font-bold text-purple-300">₩205,000</span>
            </div>
            <div class="pt-2.5 border-t border-slate-800 flex items-center justify-between">
              <span class="text-xs font-black text-white">총 예상 지출 합계</span>
              <span class="text-base font-black text-emerald-400 font-mono">약 ₩3,202,357</span>
            </div>'''

    if old_budget_box in content:
        content = content.replace(old_budget_box, new_budget_box)
        print("Patched Right Column budget box.")
    else:
        print("Warning: old_budget_box not found")

    # 4. Support togglePackingItem in window.app
    window_app_hook = '  updateCaminoHotel: (idx, val) => updateCaminoHotel(idx, val),'
    window_app_replacement = '''  updateCaminoHotel: (idx, val) => updateCaminoHotel(idx, val),
  togglePackingItem: (idOrIdx) => {
    if (!state.camino || !state.camino.packingList) return;
    let item = null;
    if (typeof idOrIdx === 'number') {
      item = state.camino.packingList[idOrIdx];
    } else {
      item = state.camino.packingList.find(p => p.id === idOrIdx) || state.camino.packingList[parseInt(idOrIdx, 10)];
    }
    if (item) {
      item.done = !item.done;
      persistState();
      renderCaminoTab();
      if (state.activeTab === 'overview') renderOverviewTab();
    }
  },'''

    if window_app_hook in content:
        content = content.replace(window_app_hook, window_app_replacement)
        print("Patched window.app.togglePackingItem.")
    else:
        print("Warning: window_app_hook not found")

    with open('js/app.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("js/app.js patched successfully.")

patch_app()
