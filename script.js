// Entrance animation for each section/line
window.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('header > *, section > *, .project-block, .exp-block, .skill-block');
    fadeEls.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, 120 * i);
    });
  });
  
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      }
    });
  });
  
  // Modal accessibility: focus trap and return focus
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('shown.bs.modal', function () {
      this.querySelector('button, [tabindex]:not([tabindex="-1"])').focus();
    });
  });
  
  // Subtle cursor-based radial gradient background effect
  const body = document.body;
  const bg = document.createElement('div');
  bg.style.position = 'fixed';
  bg.style.top = 0;
  bg.style.left = 0;
  bg.style.width = '100vw';
  bg.style.height = '100vh';
  bg.style.pointerEvents = 'none';
  bg.style.zIndex = 0;
  bg.style.transition = 'background 0.3s';
  bg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bg);
  
  function updateGradient(e) {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    bg.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(56,183,195,0.12) 0%, transparent 70%)`;
  }
  window.addEventListener('mousemove', updateGradient);
  window.addEventListener('touchmove', e => {
    if (e.touches && e.touches[0]) {
      updateGradient(e.touches[0]);
    }
  });
  
  // Keyboard navigation for modals (Bootstrap handles most, but ensure ESC closes)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.show');
      if (openModal) {
        const modalInstance = bootstrap.Modal.getInstance(openModal);
        modalInstance.hide();
      }
    }
  });
  