const cacheName = "naijasmarttools-cache";

self.addEventListener("install", event => {
event.waitUntil(
caches.open(cacheName).then(cache => {
return cache.addAll([
"/",
"/tools/index.html",
"/tools/pos.html",
"/tools/loan.html",
"/css/style.css"
]);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
