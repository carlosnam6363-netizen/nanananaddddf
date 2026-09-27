// Network-First Service Worker (항상 최신 GitHub 배포본을 우선 로드하고 오프라인 시에만 캐시 사용)
const CACHE_NAME = 'career-dashboard-network-first-v3';

self.addEventListener('install', (e) => {
  // 새 서비스 워커 즉시 활성화 대기열 통과
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // 기존 구버전 캐시(career-dashboard-cache-v1 등) 전량 삭제하여 Ctrl+Shift+R 없이도 즉시 반영
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (
    e.request.url.includes('firebase') ||
    e.request.url.includes('googleapis') ||
    e.request.url.startsWith('chrome-extension')
  ) {
    return;
  }

  // Network-First 전략: 온라인일 때는 무조건 서버(GitHub Pages)의 최신 파일을 가져옴 (no-cache)
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200 && networkRes.type === 'basic') {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, resClone);
          });
        }
        return networkRes;
      })
      .catch(() => {
        // 오프라인 상태일 때만 캐시된 파일 반환
        return caches.match(e.request).then((cachedRes) => {
          if (cachedRes) return cachedRes;
          if (e.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
