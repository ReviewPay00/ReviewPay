/* ReviewPay Service Worker
   Objetivo: tornar o app instalável no celular (PWA) e permitir notificações
   locais (disparadas pela página enquanto o app está aberto/rodando).
   Observação honesta: sem servidor de push, não dá para notificar com o app
   totalmente fechado — por isso as notificações saem da própria página via
   registration.showNotification e ficam agendadas enquanto o app está vivo. */

const CACHE = 'reviewpay-v1';
const CORE = [
  './',
  './index.html',
  './tailwind.css',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE).catch(() => null))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') {
    return;
  }
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  // Navegação (abrir o app): rede primeiro, cai pro cache offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Demais assets: cache primeiro, atualiza em segundo plano.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

// A página pede pra mostrar uma notificação.
self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'show-notification') {
    const { title, options } = data;
    self.registration.showNotification(title, options || {});
  }
});

// Clicar na notificação foca/abre o app na seção de avaliações.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = event.notification.data && event.notification.data.url;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ('focus' in client) {
          client.postMessage({ type: 'notification-click', section: 'reviews' });
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(target || './index.html');
      }
      return null;
    })
  );
});
