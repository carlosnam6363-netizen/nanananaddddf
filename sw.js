// Updated Service Worker - Network First & Clear Old Cache
const CACHE_NAME = 'career-dashboard-cache-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 네트워크 우선 (Network-First) 전략: 항상 최신 파일을 먼저 받아오고 실패 시에만 캐시 사용
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(e.request);
      })
  );
});
