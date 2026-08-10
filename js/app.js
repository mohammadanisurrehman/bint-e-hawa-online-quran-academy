const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.cssText += open ? '' : 'position:absolute;top:64px;left:0;right:0;background:#F3EDDD;flex-direction:column;padding:20px 32px;gap:18px;border-bottom:1px solid rgba(28,43,39,0.14);';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));