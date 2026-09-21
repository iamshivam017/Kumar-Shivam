'use strict';

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');
const header = document.querySelector('[data-header]');
const desktopQuery = window.matchMedia('(min-width: 761px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  if (open) navigation.querySelector('a')?.focus();
}

menuButton.addEventListener('click', () => {
  const controls = menuButton.getAttribute('aria-controls');
  if (controls === navigation.id) setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

desktopQuery.addEventListener('change', event => {
  if (event.matches) setMenu(false);
});

document.querySelectorAll('.detail-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const projectLinks = [...document.querySelectorAll('.work-index a[href^="#"]')];
const indexedProjects = projectLinks
  .map(link => ({ link, project: document.querySelector(link.getAttribute('href')) }))
  .filter(item => item.project?.matches('[data-project]'));

function setActiveProject(activeLink) {
  indexedProjects.forEach(({ link }) => {
    const active = link === activeLink;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window && indexedProjects.length) {
  const projectObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveProject(indexedProjects.find(item => item.project === visible.target)?.link);
  }, { rootMargin: '-20% 0px -45%', threshold: [0.15, 0.35, 0.6] });
  indexedProjects.forEach(({ project }) => projectObserver.observe(project));
}

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 16);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
