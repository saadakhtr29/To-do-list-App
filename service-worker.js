const CACHE_NAME = 'todo-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/index.css',
    '/index.js',
    '/images/icon.png',
    '/images'
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});