var CACHE_NAME = 'saglicakla-v1';
var urlsToCache = [
    './index.html',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
    // Manifest dosyanızda belirttiğiniz ikonların yollarını buraya ekleyin.
    // Örnek:
    './icon-192x192.png',
    './icon-512x512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
