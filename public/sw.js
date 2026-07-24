// Service Worker for Loc Troi Next PWA & Push Notifications
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Default network fetch pass-through
});

// Push Notification Listener (សម្រាប់ផ្ញើសារជូនដំណឹងទៅទូរសព្ទ)
self.addEventListener('push', (event) => {
  let data = {
    title: "ឡុក ត្រើយ កម្ពុជា - Loc Troi Cambodia",
    body: "មានដំណឹងថ្មីអំពីបច្ចេកទេសកសិកម្ម និងផលិតផល!",
    url: "/kh"
  };

  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: "/photo/logo%20loctroi%206.png",
    badge: "/photo/logo%20loctroi%206.png",
    vibrate: [100, 50, 100],
    data: {
      url: data.url || "/kh"
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification Click Action (ពេលកសិករចុចលើ Notification វានឹងបើក App ភ្លាមៗ)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/kh';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
