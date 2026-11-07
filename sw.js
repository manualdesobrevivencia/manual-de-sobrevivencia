const C="manual-v4-20261107";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./app.js?v=20261107-0020","./manifest.webmanifest","./supabase-client.js"]))) });
self.addEventListener("activate",e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))])));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{let copy=r.clone();caches.open(C).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))) });
