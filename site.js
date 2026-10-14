// Meteor City | shared behavior
const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

const mb = document.querySelector('.menu-btn');
if (mb){
  const links = document.querySelector('nav.links');
  mb.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    mb.setAttribute('aria-expanded', open);
    mb.textContent = open ? 'Close' : 'Menu';
  });
}

const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Sentinel visitor telemetry → Meteor City hub (meteor-admin). Client beacon only; the hub trusts it by Origin, so no secret. Fire-and-forget; never blocks the page. */
(function () {
  try {
    var hub = 'https://meteor-admin.pages.dev';
    var body = JSON.stringify({
      project: 'meteor.city', kind: 'client',
      path: location.pathname + location.search,
      ref: document.referrer || '', ua: navigator.userAgent, al: navigator.language || '',
    });
    if (navigator.sendBeacon) navigator.sendBeacon(hub + '/i', new Blob([body], { type: 'text/plain;charset=UTF-8' }));
    else fetch(hub + '/i', { method: 'POST', body: body, headers: { 'content-type': 'text/plain' }, keepalive: true, mode: 'no-cors' }).catch(function () {});
  } catch (e) { /* never break the page */ }
})();
