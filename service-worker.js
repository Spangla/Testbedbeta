self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("monster-mix-beta-v1").then((cache) => {
      return cache.addAll([
        "/monster-mix-beta/",
        "/monster-mix-beta/index.html",
        "/monster-mix-beta/style.css",
        "/monster-mix-beta/script.js",
        "/monster-mix-beta/icon-192-beta.png",
        "/monster-mix-beta/icon-512-beta.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
