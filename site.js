// Meteor City — shared behavior
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
