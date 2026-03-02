const CACHE_NAME = 'blink-v1';
const ASSETS = [
    '/blink-nfc-passport/',
    '/blink-nfc-passport/index.html',
    '/blink-nfc-passport/assets/index.js',
    '/blink-nfc-passport/assets/index.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
