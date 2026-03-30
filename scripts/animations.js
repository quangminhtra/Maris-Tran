document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    'header, section, .skill-block, .exp-block, .project-block'
  );

  revealTargets.forEach((element) => element.classList.add('reveal'));

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
    return;
  }

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

