// ============ AOS INIT ============
AOS.init({ duration: 800, once: true, offset: 60 });

// ============ LOADER ============
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 400);
});

// ============ YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ NAVBAR SCROLL STATE ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // scroll top button
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 500);

  // active nav link highlighting
  let current = '';
  document.querySelectorAll('section, header').forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// ============ MOBILE NAV TOGGLE ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.querySelector('i').classList.add('fa-bars');
    navToggle.querySelector('i').classList.remove('fa-xmark');
  });
});

// ============ DARK MODE TOGGLE ============
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('portfolio-theme', theme);
}

const savedTheme = localStorage.getItem('portfolio-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

// ============ TYPING ANIMATION ============
const typedTextEl = document.getElementById('typed-text');
const roles = ['Aspiring Data Analyst', 'Data Engineer Enthusiast', 'GenAI/LLM Explorer', 'Python & SQL Practitioner'];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  typedTextEl.textContent = current.substring(0, charIndex);

  let speed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === current.length) {
    speed = 1600;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }
  setTimeout(typeLoop, speed);
}
typeLoop();

// ============ ANIMATED COUNTERS ============
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      let count = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => {
        count += step;
        if (count >= target) {
          el.textContent = target;
        } else {
          el.textContent = count;
          requestAnimationFrame(() => setTimeout(tick, 30));
        }
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNumbers.forEach(el => counterObserver.observe(el));

// ============ SKILL BARS ============
const barFills = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = `${el.getAttribute('data-level')}%`;
      barObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
barFills.forEach(el => barObserver.observe(el));

// ============ PROJECT FILTERING ============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      const match = filter === 'all' || card.getAttribute('data-category') === filter;
      card.classList.toggle('hide', !match);
    });
  });
});

// ============ SCROLL TO TOP ============
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ CONTACT FORM (front-end only) ============
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thanks for reaching out! Connect this form to a backend or a service like Formspree to receive messages.';
  contactForm.reset();
});
