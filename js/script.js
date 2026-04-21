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

function setFieldState(input, errorEl, message) {
  if (message) {
    input.classList.add('input-error');
    input.classList.remove('input-ok');
    errorEl.textContent = message;
  } else {
    input.classList.remove('input-error');
    input.classList.add('input-ok');
    errorEl.textContent = '';
  }
}

function validateForm() {
  const nombre  = document.getElementById('nombre');
  const email   = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  let valid = true;

  if (!nombre.value.trim()) {
    setFieldState(nombre, document.getElementById('error-nombre'), 'El nombre es obligatorio.');
    valid = false;
  } else {
    setFieldState(nombre, document.getElementById('error-nombre'), '');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    setFieldState(email, document.getElementById('error-email'), 'El correo es obligatorio.');
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    setFieldState(email, document.getElementById('error-email'), 'Ingresa un correo válido.');
    valid = false;
  } else {
    setFieldState(email, document.getElementById('error-email'), '');
  }

  if (!mensaje.value.trim()) {
    setFieldState(mensaje, document.getElementById('error-mensaje'), 'El mensaje no puede estar vacío.');
    valid = false;
  } else {
    setFieldState(mensaje, document.getElementById('error-mensaje'), '');
  }

  return valid;
}

if (form) {
  // Validar campo al perder el foco (feedback inmediato)
  ['nombre', 'email', 'mensaje'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('blur', validateForm);
    el.addEventListener('input', () => {
      if (el.classList.contains('input-error')) validateForm();
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    feedback.textContent = '✅ Mensaje enviado. Te responderemos pronto.';
    form.reset();
    ['nombre', 'email', 'mensaje'].forEach(id => {
      const el = document.getElementById(id);
      el.classList.remove('input-ok', 'input-error');
    });
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
