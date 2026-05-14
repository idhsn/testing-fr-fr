// main.js
// Handles common UI elements

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle (if we implement a hamburger menu)
  // For now, we just ensure cart count is updated on load
  cart.updateCartCount();

  // Add subtle scroll effect to navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 34) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Theme Toggle Logic
  initTheme();

  // Exit Intent Popup Logic
  initExitIntent();

  // Initialize KPI Tracking
  initKPITracking();
});

// KPI Tracking Mock
function initKPITracking() {
  window.trackKPI = (eventCategory, eventAction, eventLabel = '', eventValue = 0) => {
    console.log(`%c[KPI TRACKED] ${eventCategory} - ${eventAction}`, 'color: #d4af37; font-weight: bold; background: #0a0a0a; padding: 2px 4px;', {
      Label: eventLabel,
      Value: eventValue,
      Timestamp: new Date().toISOString()
    });
  };

  // Auto-track page view
  trackKPI('Traffic', 'Page View', window.location.pathname);

  // Track Newsletter Signups
  document.addEventListener('submit', (e) => {
    if (e.target.closest('form')) {
      trackKPI('Lead Generation', 'Newsletter Signup', 'Email Captured');
    }
  });

  // Track Add to Cart (will be called in cart.js as well if needed, or by global click)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart-btn') || e.target.closest('.btn-primary')) {
      const btnText = e.target.textContent || '';
      trackKPI('Conversion', 'Primary Button Clicked', btnText.trim());
    }
  });
}

function initExitIntent() {
  // Only show once per session
  if (sessionStorage.getItem('exitIntentShown')) return;

  // Create the popup HTML
  const popupHtml = `
    <div class="exit-popup-overlay" id="exit-popup">
      <div class="exit-popup">
        <button class="exit-popup-close" id="close-exit-popup">&times;</button>
        <h2 style="font-size: 2rem; color: var(--color-gold); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 2px;">Wait! Before you go...</h2>
        <p style="margin-bottom: 2rem;">Unlock 10% off your entire order today. Don't leave your signature scent behind.</p>
        <form class="newsletter-form-hero" onsubmit="event.preventDefault(); alert('Code: JUZEY10 sent to your email!'); document.getElementById('exit-popup').classList.remove('active');">
          <input type="email" placeholder="Enter your email" required style="border: 1px solid var(--color-beige);">
          <button type="submit" class="btn-primary" style="padding: 1rem;">Unlock 10% Off</button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popupHtml);

  const overlay = document.getElementById('exit-popup');
  const closeBtn = document.getElementById('close-exit-popup');

  // Trigger when mouse leaves top of viewport
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
      overlay.classList.add('active');
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}

function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  if (themeToggles.length === 0) return;

  const currentTheme = localStorage.getItem('juzey_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const updateIcons = (theme) => {
    themeToggles.forEach(toggle => {
      const sun = toggle.querySelector('.sun-icon');
      const moon = toggle.querySelector('.moon-icon');
      if (sun && moon) {
        sun.style.display = theme === 'dark' ? 'block' : 'none';
        moon.style.display = theme === 'dark' ? 'none' : 'block';
      } else {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙'; // Fallback
      }
    });
  };
  updateIcons(currentTheme);

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('juzey_theme', newTheme);
      updateIcons(newTheme);
    });
  });
}

// Utility to format price
function formatPrice(price) {
  return `${price.toLocaleString()} DH`;
}
