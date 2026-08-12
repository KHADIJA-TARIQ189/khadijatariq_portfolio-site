// script.js — tiny, dependency-free interactivity

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.block');
  const tabsNav = document.getElementById('tabs');
  const menuToggle = document.getElementById('menuToggle');

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    const isOpen = tabsNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu after choosing a tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabsNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Highlight the active tab based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
});
