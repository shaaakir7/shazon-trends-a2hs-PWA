self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('shirts-store').then(function (cache) {
      return cache.addAll([
        '/21/rough1/',
        '/21/rough1/index.html',
        '/21/rough1/index.js',
        '/21/rough1/style.css',
        '/21/rough1/images/hm1.webp',
        '/21/rough1/images/hm2.webp',
        '/21/rough1/images/hm4.webp',
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
