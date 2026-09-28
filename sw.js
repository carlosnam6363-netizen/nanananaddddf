// Self-Unregistering Service Worker
// 강제 새로고침(Ctrl+Shift+R)이 필요했던 근본 원인(캐시 점유)을 브라우저에서 영구 제거합니다.

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        clients.forEach((client) => {
          if (client.url && 'navigate' in client) {
            client.navigate(client.url);
          }
        });
      })
  );
});

// 어떤 요청도 가로채거나 캐시하지 않고 항상 네트워크로 통과시킵니다.
self.addEventListener('fetch', (e) => {
  return;
});
