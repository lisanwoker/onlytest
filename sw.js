const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/sw.js"
];

// ✅ Service Worker 설치 (파일 캐싱)
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// ✅ 네트워크 요청 가로채서 캐시 제공
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});