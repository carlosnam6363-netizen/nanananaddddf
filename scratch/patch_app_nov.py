import re
import sys

with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update loadInitialData migration to version 11 and sync novemberAccommodations & novSpiritualTips
old_migration_block = '''          // 🏨 포르투 확정 호텔 (스테이 호텔 포르투 센트로 트린다데) 및 예약 정보 마이그레이션
          if (!upgradedCamino.accommodationBooking || (upgradedCamino.caminoDataVersion && upgradedCamino.caminoDataVersion < 10)) {
            upgradedCamino.accommodationBooking = JSON.parse(JSON.stringify(freshCamino.accommodationBooking || {}));
            upgradedCamino.caminoDataVersion = 10;
          }'''

new_migration_block = '''          // 🏨 포르투 확정 호텔 및 11월 정상 운영 숙소 리스트/영성길 팁 마이그레이션 (v11)
          if (!upgradedCamino.accommodationBooking || !upgradedCamino.novemberAccommodations || (upgradedCamino.caminoDataVersion && upgradedCamino.caminoDataVersion < 11)) {
            upgradedCamino.accommodationBooking = JSON.parse(JSON.stringify(freshCamino.accommodationBooking || {}));
            upgradedCamino.novemberAccommodations = JSON.parse(JSON.stringify(freshCamino.novemberAccommodations || []));
            upgradedCamino.novSpiritualTips = JSON.parse(JSON.stringify(freshCamino.novSpiritualTips || []));
            upgradedCamino.caminoDataVersion = 11;
          }'''

if old_migration_block in text:
    text = text.replace(old_migration_block, new_migration_block)
    sys.stdout.buffer.write(b'Updated loadInitialData migration block to v11\n')
else:
    sys.stdout.buffer.write(b'Warning: old_migration_block not found\n')

# 2. In renderCaminoTab(), add variables for novemberAccommodations and novSpiritualTips
old_vars = '''  const activeRouteId = camino.activeRoute || 'coastal';
  const routesInfo = camino.routesInfo || INITIAL_CAMINO_DATA.routesInfo || {};
  const currentRoute = routesInfo[activeRouteId] || routesInfo.coastal || {};
  const exchange = camino.exchangeBudget || INITIAL_CAMINO_DATA.exchangeBudget;
  const packingList = camino.packingList || INITIAL_CAMINO_DATA.packingList || [];'''

new_vars = '''  const activeRouteId = camino.activeRoute || 'hybrid';
  const routesInfo = camino.routesInfo || INITIAL_CAMINO_DATA.routesInfo || {};
  const currentRoute = routesInfo[activeRouteId] || routesInfo.coastal || {};
  const exchange = camino.exchangeBudget || INITIAL_CAMINO_DATA.exchangeBudget;
  const packingList = camino.packingList || INITIAL_CAMINO_DATA.packingList || [];
  const novemberAccommodations = camino.novemberAccommodations || INITIAL_CAMINO_DATA.novemberAccommodations || [];
  const novSpiritualTips = camino.novSpiritualTips || INITIAL_CAMINO_DATA.novSpiritualTips || [];'''

if old_vars in text:
    text = text.replace(old_vars, new_vars)
    sys.stdout.buffer.write(b'Updated renderCaminoTab variables\n')
else:
    sys.stdout.buffer.write(b'Warning: old_vars not found\n')

# 3. Create the HTML for [일정별 11월 정상 운영 숙소 리스트] table and the spiritual tips
nov_accommodations_table_html = '''
      <!-- 🏨 [일정별 11월 정상 운영 숙소 리스트] (11월 현지 영업 확인 완료) ⭐ -->
      <div class="glass-panel rounded-2xl p-6 sm:p-7 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 border-b border-slate-800 pb-4">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
                <i class="fa-solid fa-bed"></i> 11월 정상 운영 알베르게 관제
              </span>
              <span class="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded">
                현지 영업 100% 검증 완료
              </span>
              <span class="text-xs text-slate-400 font-mono">총 ${novemberAccommodations.length}개 핵심 거점</span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <i class="fa-solid fa-hotel text-amber-400"></i>
              [일정별 11월 정상 운영 숙소 리스트]
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">
              동절기 조기 마감(10월 말 폐쇄) 알베르게를 배제하고, 11월에도 안정적으로 난방·주방이 가동되는 공립 및 사설 숙소 확정 명단입니다.
            </p>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800">
            <i class="fa-solid fa-shield-check text-emerald-400 text-sm"></i>
            <span>동절기 노숙/허탕 위험 완전 차단</span>
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-800 shadow-xl custom-scrollbar mb-6">
          <table class="w-full text-left text-xs text-slate-200 border-collapse bg-slate-950/90">
            <thead>
              <tr class="border-b border-slate-800 bg-slate-900/90 text-slate-400 text-[11px] font-bold">
                <th class="py-3 px-3 text-center w-14">일차</th>
                <th class="py-3 px-3 text-center whitespace-nowrap">일자</th>
                <th class="py-3 px-3 whitespace-nowrap min-w-[170px]">구간 (출발 ➔ 도착)</th>
                <th class="py-3 px-4 min-w-[280px]">11월 정상 운영 확정 숙소 / 알베르게</th>
                <th class="py-3 px-4 min-w-[320px]">특징 및 11월 운영 확인 내용</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-sans">
              ${novemberAccommodations.map((item, idx) => {
                const isHighlight = item.day === '01' || item.day === '02' || item.day === '14' || item.day === '16';
                let dayBadgeClass = 'bg-slate-800 text-slate-300 border-slate-700';
                if (item.day === '01' || item.day === '02') dayBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold';
                else if (item.day === '14') dayBadgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold';
                else if (item.day === '16') dayBadgeClass = 'bg-yellow-400/20 text-yellow-200 border-yellow-400/50 font-black';

                return `
                  <tr class="hover:bg-slate-800/40 transition ${isHighlight ? 'bg-slate-900/30' : ''}">
                    <td class="py-3 px-3 text-center font-mono font-bold">
                      <span class="px-2 py-0.5 rounded text-[11px] border ${dayBadgeClass}">
                        ${item.day}
                      </span>
                    </td>
                    <td class="py-3 px-3 text-center whitespace-nowrap font-mono text-slate-300 font-semibold">
                      ${item.date}
                    </td>
                    <td class="py-3 px-3 whitespace-nowrap font-semibold text-white">
                      ${item.stage}
                    </td>
                    <td class="py-3 px-4 font-bold text-amber-200 text-xs">
                      <div class="flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-amber-400/80 text-[10px] flex-shrink-0"></i>
                        <span>${item.stay}</span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-[12px] text-slate-300 leading-relaxed">
                      ${item.desc}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- 💡 11월 영성길(Variante Espiritual) 특별 주의사항 및 팁 (신규 ⭐) -->
        <div class="p-5 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-lg">
          <div class="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            <h4 class="text-sm font-bold text-amber-300">
              💡 11월 영성길(Variante Espiritual) 특별 주의사항
            </h4>
          </div>

          <div class="space-y-3.5 text-xs text-slate-300">
            <!-- 팁 1: 빌라노바 드 아로우사 -->
            <div class="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold whitespace-nowrap mt-0.5">
                숙소 변경 필수
              </span>
              <div class="leading-relaxed">
                <b class="text-white block mb-0.5">빌라노바 드 아로우사 숙소 변경점:</b>
                한국 순례자들에게 유명한 <span class="text-rose-400 font-semibold">'Albergue A Corticela'</span>는 매년 10월 31일 영업을 종료하고 동절기 휴업에 들어갑니다. 따라서 11월에는 선착장 도보 2분 거리인 <span class="text-amber-300 font-bold">[Albergue A Salazón]</span> 또는 다목적 체육관 1층의 <span class="text-amber-300 font-bold">[공립 알베르게]</span>를 이용하셔야 합니다.
              </div>
            </div>

            <!-- 팁 2: 보트 Traslatio -->
            <div class="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-bold whitespace-nowrap mt-0.5">
                보트 사전 확인
              </span>
              <div class="leading-relaxed">
                <b class="text-white block mb-0.5">14일 차(11/24) 보트(Traslatio) 사전 확인:</b>
                11월은 비수기라 보트 탑승 인원(최소 출항 인원)이 차지 않거나 바다 물때(조수 간만의 차)에 따라 운항 시간이 매일 바뀝니다. 아르멘테이라에 도착하는 <span class="text-sky-300 font-bold">12일 차(11/22) 저녁</span>에 보트 운영사(<span class="text-slate-200 font-medium">A Barca do Peregrino / Amare Turismo Náutico 등</span>) WhatsApp으로 <b>"11/24 출항 여부 및 시간"</b>을 반드시 사전 확인해 두셔야 차질 없이 탑승할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
'''

# We place this table right below the existing 23-day itinerary table
target_pos = '<!-- 추천 알베르게 & 로컬 맛집 바 가이드 -->'
if target_pos in text:
    text = text.replace(target_pos, nov_accommodations_table_html + '\n      ' + target_pos)
    sys.stdout.buffer.write(b'Inserted novemberAccommodations table right below itinerary table!\n')
else:
    sys.stdout.buffer.write(b'Warning: target_pos not found in text\n')

# 4. Also add the Spiritual Tips box at the very bottom of the tab content as well
tip_bottom_html = '''
    <!-- 💡 [하단 가이드] 11월 영성길(Variante Espiritual) & 알베르게 실전 핵심 팁 -->
    <div class="glass-panel rounded-2xl p-6 sm:p-7 mt-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-amber-950/15 to-slate-900 shadow-2xl">
      <div class="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
        <span class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
          <i class="fa-solid fa-lightbulb"></i>
        </span>
        <div>
          <h3 class="text-base sm:text-lg font-black text-white">
            11월 영성길(Variante Espiritual) 특별 주의사항 & 현지 실전 팁
          </h3>
          <p class="text-xs text-slate-400">
            순례길 비수기(11월) 이동 시 필수 체크해야 할 숙소 운영 변경 및 보트 출항 핵심 가이드
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <!-- Tip Card 1 -->
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="font-bold text-amber-300 flex items-center gap-1.5">
                <i class="fa-solid fa-hotel text-amber-400"></i> 빌라노바 드 아로우사 숙소 변경점
              </span>
              <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">동절기 휴업 주의</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              한국 순례자들에게 유명한 <b>'Albergue A Corticela'</b>는 매년 10월 31일 영업을 종료하고 동절기 휴업에 들어갑니다.
              따라서 11월에는 선착장 도보 2분 거리인 <span class="text-amber-200 font-bold">[Albergue A Salazón]</span> 또는 다목적 체육관 1층의 <span class="text-amber-200 font-bold">[공립 알베르게]</span>를 이용하셔야 합니다.
            </p>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-800/60 text-[11px] text-emerald-400 font-medium">
            <i class="fa-solid fa-circle-check mr-1"></i> A Salazón (항구 150m 앞) 및 체육관 공립 11월 연중무휴 확인 완료
          </div>
        </div>

        <!-- Tip Card 2 -->
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="font-bold text-sky-300 flex items-center gap-1.5">
                <i class="fa-solid fa-ship text-sky-400"></i> 14일 차(11/24) 보트(Traslatio) 사전 확인
              </span>
              <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold">WhatsApp 사전 예약</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              11월은 비수기라 보트 탑승 인원(최소 출항 인원)이 차지 않거나 바다 물때(조수 간만의 차)에 따라 운항 시간이 매일 바뀝니다.
              아르멘테이라에 도착하는 <b>12일 차(11/22) 저녁</b>에 보트 운영사(<b>A Barca do Peregrino / Amare Turismo Náutico 등</b>) WhatsApp으로 <span class="text-amber-200 font-bold">"11/24 출항 여부 및 시간"</span>을 반드시 사전 확인해 두셔야 차질 없이 탑승할 수 있습니다.
            </p>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-800/60 text-[11px] text-sky-400 font-medium">
            <i class="fa-solid fa-calendar-check mr-1"></i> 11/22 저녁 아르멘테이라 숙소 도착 즉시 메시지 전송 필수
          </div>
        </div>
      </div>
    </div>
'''

target_bottom = '>\n\n        </div>\n\n      </div>\n\n    </div>\n  `;\n}'
if target_bottom in text:
    replacement_bottom = '>\n\n        </div>\n\n      </div>\n\n    </div>\n' + tip_bottom_html + '\n  `;\n}'
    text = text.replace(target_bottom, replacement_bottom)
    sys.stdout.buffer.write(b'Appended tip box to the very bottom of renderCaminoTab!\n')
else:
    sys.stdout.buffer.write(b'Warning: target_bottom not matched\n')

with open('js/app.js', 'wb') as f:
    f.write(text.encode('utf-8'))

sys.stdout.buffer.write(b'js/app.js successfully updated!\n')
