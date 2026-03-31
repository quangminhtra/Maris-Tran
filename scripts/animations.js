document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.skill-block, .exp-block, .project-block');
  const revealTargets = [...sections, ...cards];
  const heroTargets = document.querySelectorAll('header > *');

  heroTargets.forEach((element) => element.classList.add('hero-stagger'));
  revealTargets.forEach((element) => element.classList.add('reveal'));

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroTargets.forEach((element) => element.classList.add('is-visible'));
    revealTargets.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  heroTargets.forEach((element, index) => {
    window.setTimeout(() => {
      element.classList.add('is-visible');
    }, 120 + index * 90);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
});
