// ============================================================
// Service Worker - نسخة معدلة لتجنب أخطاء Chrome Extensions
// ============================================================

const CACHE_NAME = 'thanawya-plus-v1';

// الملفات المطلوب تخزينها مؤقتاً
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-512.jpg'
];

// ✅ تثبيت Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                // ✅ استخدام try/catch لتجنب أخطاء chrome-extension
                return cache.addAll(urlsToCache).catch(function(err) {
                    console.warn('⚠️ بعض الملفات لم يتم تخزينها:', err);
                    // نحاول تخزين الملفات واحداً واحداً
                    urlsToCache.forEach(function(url) {
                        try {
                            cache.add(url).catch(function() {});
                        } catch (e) {}
                    });
                });
            })
    );
});

// ✅ تفعيل Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// ✅ التعامل مع الطلبات - تجنب chrome-extension
self.addEventListener('fetch', function(event) {
    // ✅ تجاهل طلبات chrome-extension
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch(function() {
                    // في حالة عدم وجود شبكة
                });
            })
    );
});
