
const CACHE_NAME = 'monster-mix-beta-v2'; // bump this whenever assets change

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
       '/Monster Mix/',
        '/monster-mix-beta/index.html',
        '/monster-mix-beta/style.css',
        '/monster-mix-beta/script.js',
        '/monster-mix-beta/icon-192-beta.png',
        '/monster-mix-beta/icon-512-beta.png'
      ])
    )
  );
});
