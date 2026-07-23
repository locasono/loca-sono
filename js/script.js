document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const menu = document.querySelector('nav');
  const toggle = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section[id]');

  const closeMenu = () => {
    menu?.classList.remove('open');
    toggle?.classList.remove('active');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  menuLinks.forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
    header.style.boxShadow = window.scrollY > 30 ? '0 12px 35px rgba(0,0,0,.08)' : 'none';

    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    menuLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  }, { passive:true });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
});
