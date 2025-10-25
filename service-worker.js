
const CACHE_NAME = 'Testbedbeta'; // bump this whenever assets change

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
       '/Testbedbeta/',
        '/Testbedbeta/index.html',
        '/Testbedbeta/style.css',
        '/Testbedbeta/script.js',
        '/Testbedbeta/icon-192-beta.png',
        '/Testbedbeta/icon-512-beta.png'
      ])
    )
  );
});
