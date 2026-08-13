// script.js — mobile nav toggle + active section tracking

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const tabs = document.getElementById('tabs');
  const tabLinks = tabs ? tabs.querySelectorAll('.tab') : [];
  const sections = document.querySelectorAll('main.pane .block');

  // --- Mobile hamburger menu ---
  if (menuToggle && tabs) {
    menuToggle.addEventListener('click', () => {
      const isOpen = tabs.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu after tapping a nav link (mobile)
    tabLinks.forEach(link => {
      link.addEventListener('click', () => {
        tabs.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Active tab highlighting on scroll ---
  if (sections.length && tabLinks.length) {
    const setActive = (id) => {
      tabLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.tab === id);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }
});
