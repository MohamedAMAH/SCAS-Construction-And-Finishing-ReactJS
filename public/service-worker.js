// service-worker.js
const SCAS_CACHE = 'scas-cache';

// Basic files to cache immediately
const CORE_FILES = [
  // '/',
  // '/index.html'
];

// When service worker is installed
self.addEventListener('install', (event) => {
  // Wait until this operation is complete
  event.waitUntil(
    // Open our cache
    caches.open(SCAS_CACHE)
      .then((cache) => {
        return cache.addAll(CORE_FILES);
      })
  );
});

// Handle fetch events (when browser requests a resource)
self.addEventListener('fetch', (event) => {
  // Only process GET requests
  if (event.request.method !== 'GET') return;
  
  // Check if this is an image request
  const isImage = event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/);
  
  // Only cache images and core files
  if (isImage || CORE_FILES.includes(new URL(event.request.url).pathname)) {
    event.respondWith(
      // First, try to find it in the cache
      caches.match(event.request)
        .then((cachedResponse) => {
          // If it's in cache, return the cached version
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Not in cache, get from network
          return fetch(event.request)
            .then((response) => {
              // Don't cache if response is not valid
              if (!response || response.status !== 200) {
                return response;
              }
              
              // Clone the response (because it can only be used once)
              const responseToCache = response.clone();
              
              // Add the response to cache for next time
              caches.open(SCAS_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              
              // Return the response
              return response;
            });
        })
    );
  }
});