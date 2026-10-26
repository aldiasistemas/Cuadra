// Cuadra: guarda la app para que abra rápido y sin internet.
// Los datos de cada persona NO pasan por aquí: van directo a Supabase.
const CACHE = 'cuadra-v1';
const ARCHIVOS = ['app.html', 'config.js', 'manifest.json', 'marca.svg', 'icono-192.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;   // Supabase y fuentes: siempre en línea
  // Primero internet (para recibir actualizaciones); si no hay, la copia guardada.
  e.respondWith(fetch(e.request).then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
    .catch(() => caches.match(e.request)));
});
