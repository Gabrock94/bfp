const BFP = "bfp_0.0.1.9";

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
    "/__/firebase/7.8.2/firebase-firestore.js"
]

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(BFP)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(assets);
                console.log('cache added');
                return x;
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
