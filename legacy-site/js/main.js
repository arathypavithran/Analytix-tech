/**
 * ANALYTIX BSS - MAIN APPLICATION LOGIC
 * Framer-Motion Pure Code Canvas Hero & Interactive SPA Router
 */

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initHeader();
  initMobileNav();
  initHeroInteractive3D();
  initHomepageAmbientMotion();
  initCardSpotlight();
  initAccordions();
  initStatsCounter();
  initScrollReveal();
  initContactForm();
  initBlogFilters();
});

/* ==========================================================================
   0. SCROLL REVEAL VIEWPORT CHECKER
   ========================================================================== */
function checkScrollReveal() {
  const activeView = document.querySelector('.page-view.active');
  if (!activeView) return;

  const reveals = activeView.querySelectorAll('.reveal:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)');
  const vHeight = window.innerHeight || document.documentElement.clientHeight || 800;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= vHeight + 60 && rect.bottom >= -50) {
      el.classList.add('visible');
    }
  });
}

/* ==========================================================================
   1. ROUTER & VIEW SWITCHER
   ========================================================================== */
function initRouter() {
  const views = document.querySelectorAll('.page-view');
  
  function handleRoute() {
    let hash = window.location.hash || '#home';
    hash = hash.split('?')[0];

    let targetView = document.querySelector(hash);
    if (!targetView) {
      targetView = document.querySelector('#home');
      hash = '#home';
    }

    views.forEach(view => view.classList.remove('active'));
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });

    document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav a').forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Make sure elements on newly active view are revealed immediately
    checkScrollReveal();
    requestAnimationFrame(checkScrollReveal);
    setTimeout(checkScrollReveal, 50);
    setTimeout(checkScrollReveal, 150);
    setTimeout(checkScrollReveal, 350);

    // On non-home views, reveal all elements so subpages are never blank
    if (hash !== '#home') {
      const subpageReveals = targetView.querySelectorAll('.reveal, .reveal-right, .reveal-scale');
      subpageReveals.forEach((el, idx) => {
        setTimeout(() => el.classList.add('visible'), Math.min(idx * 30, 200));
      });
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

/* ==========================================================================
   2. CINEMATIC 3D INTERACTIVE PARALLAX HERO ENGINE
   - 6 Visual Depth Layers (0.02, 0.04, 0.07, 0.12, 0.20, 0.28)
   - Smooth requestAnimationFrame() LERP interpolation
   - Simultaneous automatic floating + mouse-responsive physics
   - Desktop full parallax, Tablet 50% scale, Mobile floating only
   - Accessibility & prefers-reduced-motion support
   ========================================================================== */
function initHeroInteractive3D() {
  const heroSection = document.getElementById('heroBannerSection');
  if (!heroSection) return;

  const layers = heroSection.querySelectorAll('.hero-layer');
  const particlesCanvas = document.getElementById('heroParticlesCanvas');
  const featureTabs = heroSection.querySelectorAll('.feature-tab-btn');
  const textSteps = heroSection.querySelectorAll('.feature-text-step');

  // Parallax physics variables
  let targetParallaxX = 0;
  let targetParallaxY = 0;
  let currentParallaxX = 0;
  let currentParallaxY = 0;

  // Reduced motion query check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Feature Tab Step Switcher
  featureTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const stepVal = tab.getAttribute('data-step');
      
      featureTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      textSteps.forEach(step => {
        if (step.getAttribute('data-step') === stepVal) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    });
  });

  // Device Responsive Tracking
  function getDeviceIntensity() {
    const width = window.innerWidth;
    if (width < 768) return 0; // Mobile: Disable mouse parallax
    if (width < 1024) return 0.5; // Tablet: 50% intensity
    return 1.0; // Desktop: Full intensity
  }

  // Mouse Move Event Listener over Hero Section
  heroSection.addEventListener('mousemove', (e) => {
    if (prefersReducedMotion) return;
    const intensity = getDeviceIntensity();
    if (intensity === 0) return;

    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Relative mouse position normalized (-1 to +1)
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    // Mouse RIGHT -> Move LEFT (-X), Mouse DOWN -> Move UP (-Y)
    targetParallaxX = -normX * 80 * intensity;
    targetParallaxY = -normY * 60 * intensity;
  });

  // Mouse Leave -> Smoothly return to center base position
  heroSection.addEventListener('mouseleave', () => {
    targetParallaxX = 0;
    targetParallaxY = 0;
  });

  // Particle Constellation Background Canvas
  let particles = [];
  let pCtx = null;
  if (particlesCanvas) {
    pCtx = particlesCanvas.getContext('2d');

    function resizeParticles() {
      particlesCanvas.width = heroSection.offsetWidth || window.innerWidth;
      particlesCanvas.height = heroSection.offsetHeight || 600;
    }

    resizeParticles();
    window.addEventListener('resize', resizeParticles);

    // Create 45 ambient glowing particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * (particlesCanvas.width || 800),
        y: Math.random() * (particlesCanvas.height || 600),
        radius: Math.random() * 2 + 0.8,
        color: i % 3 === 0 ? 'rgba(6, 182, 212, ' : (i % 2 === 0 ? 'rgba(167, 139, 250, ' : 'rgba(37, 99, 235, '),
        alpha: Math.random() * 0.5 + 0.25,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.45 - 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  // Animation Loop with requestAnimationFrame() LERP
  function animate(now) {
    if (!prefersReducedMotion) {
      // Smooth LERP (Linear Interpolation) with 0.06 factor for liquid physics feel
      const lerpFactor = 0.06;
      currentParallaxX += (targetParallaxX - currentParallaxX) * lerpFactor;
      currentParallaxY += (targetParallaxY - currentParallaxY) * lerpFactor;

      const deviceIntensity = getDeviceIntensity();

      // Apply transform translate3d to each depth layer
      layers.forEach(layer => {
        const strength = parseFloat(layer.getAttribute('data-parallax') || '0.1');
        
        if (deviceIntensity === 0) {
          layer.style.transform = `translate3d(0px, 0px, 0px)`;
        } else {
          const moveX = (currentParallaxX * strength * 2.2).toFixed(2);
          const moveY = (currentParallaxY * strength * 2.2).toFixed(2);
          layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
        }
      });
    }

    // Render Canvas Particle Constellation
    if (pCtx && particlesCanvas && !prefersReducedMotion) {
      pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulsePhase += p.pulseSpeed;

        const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.25;

        if (p.y < -10) p.y = particlesCanvas.height + 10;
        if (p.x < -10) p.x = particlesCanvas.width + 10;
        if (p.x > particlesCanvas.width + 10) p.x = -10;

        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        pCtx.fillStyle = `${p.color}${Math.max(0.1, Math.min(0.85, currentAlpha))})`;
        pCtx.fill();
      });
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/* ==========================================================================
   3. HEADER & STICKY BEHAVIOR
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   5. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  if (!toggleBtn || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (backdrop) backdrop.addEventListener('click', closeNav);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

/* ==========================================================================
   6. ACCORDION FAQ
   ========================================================================== */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const items = acc.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        items.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent) otherContent.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });
}

/* ==========================================================================
   7. GLOBAL HOMEPAGE AMBIENT MOTION & PARALLAX ENGINE
   - Full-Screen Floating Ambient Particles Canvas
   - Smooth Multi-Layer Parallax Scrolling on Background Orbs & Media
   - Seamless Infinite Motion Loop
   ========================================================================== */
function initHomepageAmbientMotion() {
  const canvas = document.getElementById('ambientGlobalCanvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Particle Atmosphere on Fixed Viewport Canvas (Ultra-lightweight 60-120fps)
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // 45 ambient floating particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: i % 3 === 0 ? 'rgba(6, 182, 212, ' : (i % 2 === 0 ? 'rgba(167, 139, 250, ' : 'rgba(124, 58, 237, '),
        alpha: Math.random() * 0.35 + 0.12,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.1,
        pulseSpeed: Math.random() * 0.015 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    function renderParticles() {
      if (prefersReducedMotion) return;
      
      const homeSection = document.getElementById('home');
      if (homeSection && homeSection.classList.contains('active')) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
          p.x += p.speedX;
          p.y += p.speedY;
          p.pulsePhase += p.pulseSpeed;

          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.18;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0.06, Math.min(0.65, currentAlpha))})`;
          ctx.fill();
        });
      }

      requestAnimationFrame(renderParticles);
    }

    requestAnimationFrame(renderParticles);
  }

  // 2. Parallax Scroll Physics Engine
  if (!prefersReducedMotion) {
    const orbs = document.querySelectorAll('.homepage-ambient-system .ambient-orb');
    const parallaxMedia = document.querySelectorAll('[data-parallax="0.06"]');
    let ticking = false;

    function updateParallax() {
      const homeSection = document.getElementById('home');
      if (!homeSection || !homeSection.classList.contains('active')) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY;

      orbs.forEach(orb => {
        const speed = parseFloat(orb.getAttribute('data-parallax-speed') || '0.04');
        const offsetY = -(scrollY * speed * 1.2).toFixed(1);
        orb.style.transform = `translate3d(0px, ${offsetY}px, 0px)`;
      });

      parallaxMedia.forEach(media => {
        const rect = media.getBoundingClientRect();
        const vCenter = window.innerHeight / 2;
        const offset = ((rect.top + rect.height / 2) - vCenter) * 0.05;
        const img = media.querySelector('img');
        if (img) {
          img.style.transform = `translate3d(0px, ${(-offset).toFixed(1)}px, 0px) scale(1.02)`;
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   8. CARD SPOTLIGHT INTERACTION (STRIPE/LINEAR STYLE MICRO-GLOW)
   ========================================================================== */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   9. STATS COUNTER ANIMATION WITH CUBIC EASING & STAGGER
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection || statNumbers.length === 0) return;

  let animated = false;

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function animateSingleStat(stat, delay) {
    const target = parseInt(stat.getAttribute('data-target'), 10);
    if (!target) return;
    const suffix = stat.getAttribute('data-suffix') || '';
    const duration = 1800; // ms

    setTimeout(() => {
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);
        const currentCount = Math.round(eased * target);

        stat.textContent = currentCount + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          stat.textContent = target + suffix;
        }
      }

      requestAnimationFrame(update);
    }, delay);
  }

  function triggerStatsIfVisible() {
    if (animated) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || 800) - 40 && rect.bottom >= 0) {
      animated = true;
      statNumbers.forEach((stat) => {
        const card = stat.closest('.stat-card');
        const delay = card ? parseInt(card.getAttribute('data-delay') || '0', 10) : 0;
        animateSingleStat(stat, delay);
      });
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach((stat) => {
          const card = stat.closest('.stat-card');
          const delay = card ? parseInt(card.getAttribute('data-delay') || '0', 10) : 0;
          animateSingleStat(stat, delay);
        });
      }
    });
  }, { threshold: 0.12 });

  observer.observe(statsSection);
  window.addEventListener('scroll', triggerStatsIfVisible, { passive: true });
  setTimeout(triggerStatsIfVisible, 350);
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER & VIEWPORT CHECKER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-right, .reveal-scale');
  if (revealElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Bind to scroll and resize for instantaneous responsive reveal
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkScrollReveal();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', checkScrollReveal, { passive: true });

  // Immediate and staggered checks on load
  checkScrollReveal();
  requestAnimationFrame(checkScrollReveal);
  setTimeout(checkScrollReveal, 60);
  setTimeout(checkScrollReveal, 200);
}

/* ==========================================================================
   9. BLOG FILTER & SEARCH
   ========================================================================== */
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-card-item');
  const searchInput = document.querySelector('#blogSearchInput');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        blogCards.forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      blogCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   10. CONTACT FORM INTERACTIVITY & VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  const statusDiv = document.querySelector('#formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !phone || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Message...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showStatus('Thank you for contacting Analytix BSS! Our team will get in touch with you shortly.', 'success');
      form.reset();
    }, 1200);
  });

  function showStatus(msg, type) {
    if (!statusDiv) return;
    statusDiv.className = `form-status ${type}`;
    statusDiv.textContent = msg;
    statusDiv.style.display = 'block';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
