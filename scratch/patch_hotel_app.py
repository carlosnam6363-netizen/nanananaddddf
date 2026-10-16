import re
import sys

with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update loadInitialData to migrate accommodationBooking and update legacy Porto hotel names if needed
old_migration = '''        // 1. Camino: 사용자 메모, 호텔, 비용, 체크리스트 영구 보존
        let upgradedCamino = parsed.camino;
        if (!upgradedCamino) {
          upgradedCamino = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
        } else {
          const freshCamino = INITIAL_CAMINO_DATA;
          Object.keys(freshCamino).forEach(k => {
            if (upgradedCamino[k] === undefined) {
              upgradedCamino[k] = JSON.parse(JSON.stringify(freshCamino[k]));
            }
          });
        }'''

new_migration = '''        // 1. Camino: 사용자 메모, 호텔, 비용, 체크리스트 영구 보존
        let upgradedCamino = parsed.camino;
        if (!upgradedCamino) {
          upgradedCamino = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
        } else {
          const freshCamino = INITIAL_CAMINO_DATA;
          Object.keys(freshCamino).forEach(k => {
            if (upgradedCamino[k] === undefined) {
              upgradedCamino[k] = JSON.parse(JSON.stringify(freshCamino[k]));
            }
          });

          // 🏨 포르투 확정 호텔 (스테이 호텔 포르투 센트로 트린다데) 및 예약 정보 마이그레이션
          if (!upgradedCamino.accommodationBooking || (upgradedCamino.caminoDataVersion && upgradedCamino.caminoDataVersion < 10)) {
            upgradedCamino.accommodationBooking = JSON.parse(JSON.stringify(freshCamino.accommodationBooking || {}));
            upgradedCamino.caminoDataVersion = 10;
          }

          // 구버전 호텔('우마 포베이루스')이 남아있다면 새 확정 호텔로 갱신
          const updateHotelIfLegacy = (item) => {
            if (item && (item.hotel === '우마 포베이루스 (Porto)' || item.albergue === '우마 포베이루스 (Porto)' || item.stay === '우마 포베이루스 (Porto)')) {
              item.hotel = '스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)';
              item.albergue = item.hotel;
              item.stay = item.hotel;
            }
          };

          if (Array.isArray(upgradedCamino.itinerary)) {
            if (upgradedCamino.itinerary[0]) updateHotelIfLegacy(upgradedCamino.itinerary[0]);
            if (upgradedCamino.itinerary[1]) updateHotelIfLegacy(upgradedCamino.itinerary[1]);
          }

          if (upgradedCamino.routesInfo) {
            Object.keys(upgradedCamino.routesInfo).forEach(rKey => {
              const r = upgradedCamino.routesInfo[rKey];
              if (r && Array.isArray(r.itinerary)) {
                if (r.itinerary[0]) updateHotelIfLegacy(r.itinerary[0]);
                if (r.itinerary[1]) updateHotelIfLegacy(r.itinerary[1]);
              }
            });
          }

          // 패킹리스트의 포르투 호텔 비용 갱신 (132,615원)
          if (Array.isArray(upgradedCamino.packingList)) {
            const portoPack = upgradedCamino.packingList.find(p => p.id === 'pack-stay-porto');
            if (portoPack) {
              portoPack.item = '포르투 호텔 2박 (11/11~13 스테이 호텔 포르투 센트로 트린다데 결제완료)';
              portoPack.text = portoPack.item;
              portoPack.cost = '₩132,615';
              portoPack.costKrw = 132615;
              portoPack.done = true;
              portoPack.note = '트립닷컴 결제완료(₩132,615 / 현장 도시세 €12 별도). 예약번호 1400829745971821, PIN 7999. 트린다데역 인근 2박 연박';
            }
          }
        }'''

if old_migration in text:
    text = text.replace(old_migration, new_migration)
    print('Updated loadInitialData migration!')
else:
    print('Warning: old_migration not matched!')

# 2. Update updateCaminoHotel to also update active route's itinerary
old_update_hotel = '''function updateCaminoHotel(idx, val) {
  if (!state.camino) state.camino = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
  if (state.camino.itinerary && state.camino.itinerary[idx]) {
    state.camino.itinerary[idx].albergue = val;
    state.camino.itinerary[idx].stay = val;
    persistState();
    showToast(`🏨 Day ${idx + 1} 숙소/알베르게가 저장되었습니다: ${val}`);
  }
}'''

new_update_hotel = '''function updateCaminoHotel(idx, val) {
  if (!state.camino) state.camino = JSON.parse(JSON.stringify(INITIAL_CAMINO_DATA));
  const activeRouteId = state.camino.activeRoute || 'hybrid';
  const routesInfo = state.camino.routesInfo || INITIAL_CAMINO_DATA.routesInfo || {};
  const currentRoute = routesInfo[activeRouteId] || routesInfo.coastal || {};

  // 1. 현재 선택된 활성 코스의 itinerary에 반영
  if (currentRoute && currentRoute.itinerary && currentRoute.itinerary[idx]) {
    currentRoute.itinerary[idx].hotel = val;
    currentRoute.itinerary[idx].albergue = val;
    currentRoute.itinerary[idx].stay = val;
  }
  // 2. 최상위 itinerary에도 동기화
  if (state.camino.itinerary && state.camino.itinerary[idx]) {
    state.camino.itinerary[idx].hotel = val;
    state.camino.itinerary[idx].albergue = val;
    state.camino.itinerary[idx].stay = val;
  }
  persistState();
  showToast(`🏨 Day ${idx + 1} 숙소/알베르게가 저장되었습니다: ${val}`);
}'''

if old_update_hotel in text:
    text = text.replace(old_update_hotel, new_update_hotel)
    print('Updated updateCaminoHotel!')
else:
    print('Warning: old_update_hotel not matched!')

# 3. Add Accommodation Booking Card into renderCaminoTab()
hotel_card_html = '''
    <!-- 🏨 [포르투 2박 확정 숙소 안내 센터] (11/11 체크인 ~ 11/13 체크아웃 · 트립닷컴 결제 완료) ⭐ -->
    <div class="glass-panel rounded-2xl p-6 sm:p-7 mb-8 border border-amber-500/40 bg-gradient-to-br from-slate-900 via-amber-950/25 to-slate-900 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Hotel Banner Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check"></i> 포르투 호텔 2박 결제 완료 (예약 확정)
            </span>
            <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold rounded">
              트립닷컴 (Trip.com)
            </span>
            <span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded flex items-center gap-1">
              <i class="fa-solid fa-star text-amber-400 text-[10px]"></i> 3성급 · 트린다데 초역세권
            </span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <i class="fa-solid fa-hotel text-amber-400"></i>
            스테이 호텔 포르투 센트로 트린다데 (Stay Hotel Porto Centro Trindade)
          </h2>
          <p class="text-xs text-slate-300 mt-1">
            체크인: <b>2026.11.11 (수) 16:00 이후</b> | 체크아웃: <b>2026.11.13 (금) 12:00 이전</b> (객실 1개 × 2박 연박)
          </p>
        </div>

        <!-- Hotel Price Badge -->
        <div class="bg-slate-950/90 border border-amber-400/40 rounded-xl p-3.5 sm:p-4 text-right min-w-[230px] shadow-lg flex-shrink-0">
          <div class="text-[11px] font-bold text-slate-400">온라인 사전 결제액 (2박)</div>
          <div class="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
            ₩132,615
          </div>
          <div class="text-[10px] text-amber-400/90 mt-0.5 font-medium">현장 지불: 도시세 EUR 12.00 (호텔 결제)</div>
        </div>
      </div>

      <!-- Hotel Detail Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        
        <!-- Col 1: 예약 핵심 번호 & 위치 안내 -->
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-id-card-clip text-amber-400"></i> 예약 및 체크인 코드
            </span>
            <span class="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              확정서 지참
            </span>
          </div>

          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div class="text-[11px] text-slate-400">예약번호 (Booking No.)</div>
              <div class="text-sm font-mono font-bold text-amber-300 tracking-wider">1400829745971821</div>
            </div>

            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div class="text-[11px] text-slate-400">PIN 번호 (Secret)</div>
                <div class="text-sm font-mono font-bold text-rose-300 tracking-wider">7999</div>
              </div>
              <span class="text-[10px] text-slate-500">체크인 시 제시</span>
            </div>

            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div class="text-[11px] text-slate-400 mb-0.5">호텔 연락처 & 이메일</div>
              <div class="text-xs text-white font-mono flex items-center gap-1">
                <i class="fa-solid fa-phone text-slate-400 text-[10px]"></i> +351-220028060
              </div>
              <div class="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                stayhotelporto.3382sn6klwm30rt@htlpartner.trip.com
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2: 상세 요금 및 할인 명세 -->
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-receipt text-sky-400"></i> 요금 및 특가 할인 내역
            </span>
            <span class="text-[11px] text-sky-400 font-mono font-bold">최저가 보장제</span>
          </div>

          <div class="space-y-1.5 text-xs">
            <div class="flex justify-between py-1 text-slate-300 border-b border-slate-900">
              <span>객실 1개 × 2박 기본요금</span>
              <span class="font-mono text-white">₩172,656</span>
            </div>
            <div class="flex justify-between py-1 text-slate-300 border-b border-slate-900">
              <span>세금 및 서비스 비용 (부가세)</span>
              <span class="font-mono text-white">₩7,738</span>
            </div>
            <div class="flex justify-between py-1 text-emerald-400 border-b border-slate-900">
              <span>특별 할인</span>
              <span class="font-mono">-₩25,636</span>
            </div>
            <div class="flex justify-between py-1 text-emerald-400 border-b border-slate-900">
              <span>항공권 예약 회원 전용 혜택</span>
              <span class="font-mono">-₩18,041</span>
            </div>
            <div class="flex justify-between py-1 text-emerald-400 border-b border-slate-900">
              <span>3% 추가 할인 + 트립코인(990원)</span>
              <span class="font-mono">-₩5,092</span>
            </div>
            <div class="flex justify-between pt-1.5 font-bold text-amber-300 text-sm">
              <span>온라인 결제 완료액</span>
              <span class="font-mono">₩132,615</span>
            </div>
          </div>
        </div>

        <!-- Col 3: 호텔 위치 장점 및 순례길 준비 팁 -->
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-rose-400"></i> 숙소 위치 & 순례 동선
            </span>
            <span class="text-[11px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
              트린다데역 3분
            </span>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            <i class="fa-solid fa-map-pin text-rose-400 mr-1"></i> <b>주소:</b> R. de Gonçalo Cristóvão 111, 4000-408 Porto
          </p>

          <div class="space-y-1.5 text-[11px] text-slate-300">
            <div class="p-2 rounded bg-slate-900 border border-slate-800 flex items-start gap-1.5">
              <i class="fa-solid fa-train-subway text-sky-400 mt-0.5"></i>
              <span><b>공항 직통 연결:</b> 포르투 공항(OPO)에서 메트로 E선 승차 시 Trindade역까지 환승 없이 28분 만에 도착합니다.</span>
            </div>
            <div class="p-2 rounded bg-slate-900 border border-slate-800 flex items-start gap-1.5">
              <i class="fa-solid fa-certificate text-amber-400 mt-0.5"></i>
              <span><b>크레덴시알 수령:</b> 포르투 대성당 및 볼량 시장까지 도보 이동이 매우 편리하여 12일 준비가 수월합니다.</span>
            </div>
            <div class="p-2 rounded bg-slate-900 border border-slate-800 flex items-start gap-1.5">
              <i class="fa-solid fa-clock-rotate-left text-emerald-400 mt-0.5"></i>
              <span><b>취소 규정:</b> 2026년 11월 8일 23:59 전까지 무료 취소 가능</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer Policy Banner -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-bell-concierge text-amber-400"></i>
          <span>체크인 11/11 16:00 이후 · 체크아웃 11/13 12:00 이전 (리셉션 24시간 운영 / 픽업·샌딩 서비스 지원)</span>
        </div>
        <div class="text-[11px] text-amber-300 bg-amber-950/60 px-3 py-1 rounded-lg border border-amber-800/50 font-bold flex-shrink-0">
          <i class="fa-solid fa-coins mr-1"></i> 60 트립코인 적립 예정 (약 802원)
        </div>
      </div>
    </div>
'''

target_insert = '<!-- 2. 💶 11월 10일 ~ 12월 1일 오전 환전 예산 상세 카드 (신규 ⭐) -->'
if target_insert in text:
    text = text.replace(target_insert, hotel_card_html + '\n    ' + target_insert)
    print('Inserted Accommodation Booking Card into Camino Tab!')
else:
    print('Warning: target_insert not found!')

# Write back to js/app.js
with open('js/app.js', 'wb') as f:
    f.write(text.encode('utf-8'))

print('js/app.js updated successfully!')
