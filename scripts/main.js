/* ============================================
   ZIGOAT PROJECT - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initScrollReveal();
  initPortfolioFilter();
  initContactForm();
});

// Preloader
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 500);
  });
}

// Navigation
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navMenu?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Scroll Reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }),
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  elements.forEach(el => observer.observe(el));
}

// Portfolio Filter
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? 'block' : 'none';
        card.style.opacity = match ? '1' : '0';
      });
    });
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  const waNumber = '628988124846'; // Ganti dengan nomor asli

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const msg = encodeURIComponent(
      `Halo Zigoat Project!\n\nNama: ${data.get('name')}\nEmail: ${data.get('email')}\n\nPesan:\n${data.get('message')}`
    );
    window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
    form.reset();
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
