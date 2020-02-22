const bpf = "bfp_0.0.1.4";

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/__/firebase/init.js",
    "/__/firebase/7.8.2/firebase-app.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    "https://www.w3schools.com/lib/w3.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(bfp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
