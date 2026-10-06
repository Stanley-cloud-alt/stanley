var V="zhushan-v1",F=["./", "index.html", "layer1.html", "layer2.html", "layer3.html", "qr.html", "style.css", "progress.js", "layer.js", "manifest.json", "icon-192.png", "images/burger.jpg", "images/roll.jpg", "images/pudding.jpg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request).then(function(r){var n=fetch(e.request).then(function(x){var y=x.clone();caches.open(V).then(function(c){c.put(e.request,y)});return x}).catch(function(){return r});return r||n}))});
