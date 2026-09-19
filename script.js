const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

const navLinks = document.querySelectorAll('[data-nav]');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => spyObserver.observe(section));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();