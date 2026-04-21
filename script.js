/* ============================================================
   script.js — Instituto Lumina
   ============================================================ */

// ── Navbar: cambio de fondo al hacer scroll ──────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15,17,23,0.98)';
  } else {
    header.style.background = 'rgba(15,17,23,0.85)';
  }
});

// ── Menú hamburguesa (mobile) ────────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '5%';
  navLinks.style.background = '#1c2130';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderRadius = '12px';
  navLinks.style.gap = '16px';
});

// ── Formulario de contacto ────────────────────────────────────
const form = document.getElementById('contactoForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '✅ Mensaje enviado. Te responderemos pronto.';
    form.reset();
    setTimeout(() => { feedback.textContent = ''; }, 4000);
  });
}

// ── Animación de aparición al hacer scroll ───────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .hero-card, .valor, .info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
