
(function(){
  const input = document.querySelector('[data-search]');
  const items = [...document.querySelectorAll('[data-nav-item]')];
  if(!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    items.forEach(a => {
      const t = (a.getAttribute('data-title')||'').toLowerCase();
      a.style.display = t.includes(q) ? '' : 'none';
    });
  });
})();
