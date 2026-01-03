const CACHE_NAME = 'apothecary-v1';
const assets = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './gamedata.js',
  './assets/background.png' // Add your main assets here
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});