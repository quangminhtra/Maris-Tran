document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('a.nav-link[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (!sections.length) return;

  const setActiveLink = () => {
    let activeId = sections[0].id;
    const offset = window.scrollY + 140;

    sections.forEach((section) => {
      if (section.offsetTop <= offset) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
});
