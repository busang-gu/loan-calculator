/* 부상구 내집마련 대출 계산기 — 서비스워커 (오프라인 캐시)
   정책/코드 수정 후 재배포 시 CACHE 버전을 올리면 사용자 기기에서 자동 갱신됩니다. */
const CACHE = "busangu-loan-v2";  // '26.8.9 정책 갱신 — 버전 올려야 기존 설치자 기기에 반영됨
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit || fetch(e.request).catch(() => caches.match("./index.html"))
    )
  );
});
