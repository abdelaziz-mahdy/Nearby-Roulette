# Nearby Roulette Marketing Website - Technical Architecture


## 🏗️ Project Overview

**Product**: Nearby Roulette - Location-based discovery app with roulette-style place selection
**Marketing Goal**: 5-slide elevator pitch website showcasing app value proposition
**Tech Stack**: Pure HTML5/CSS3/JavaScript (no frameworks for maximum performance)
**Target Audience**: Potential users, investors, and app store visitors

## 📁 Directory Structure

```
marketing-site/
├── index.html                 # Main HTML file (single-page application)
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── components.css    # Component-specific styles
│   │   ├── animations.css    # CSS animations and transitions
│   │   └── responsive.css    # Media queries and responsive design
│   ├── js/
│   │   ├── main.js          # Main application logic
│   │   ├── slideController.js # Slide navigation and state management
│   │   ├── animations.js     # Animation controllers
│   │   └── accessibility.js  # Accessibility features
│   ├── images/
│   │   ├── hero/            # Hero section images
│   │   ├── features/        # Feature demonstration screenshots
│   │   ├── ui/              # App UI screenshots
│   │   └── icons/           # SVG icons and logos
│   └── fonts/
│       └── [local fonts if needed]
├── README.md
└── deployment/
    ├── .htaccess            # Apache configuration
    ├── robots.txt           # SEO crawling rules
    └── sitemap.xml          # SEO sitemap
```

## 🎨 HTML Semantic Structure

### Core HTML Architecture:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- SEO Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nearby Roulette - Discover Adventure Around You</title>
    <meta name="description" content="Spin to discover amazing places nearby! Nearby Roulette makes local exploration fun with roulette-style place discovery.">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Nearby Roulette - Discover Adventure Around You">
    <meta property="og:description" content="Spin to discover amazing places nearby!">
    <meta property="og:image" content="./assets/images/og-image.jpg">
    <meta property="og:url" content="https://nearbyroulette.app">
    
    <!-- Preload Critical Resources -->
    <link rel="preload" href="./assets/css/main.css" as="style">
    <link rel="preload" href="./assets/js/main.js" as="script">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="./assets/css/main.css">
</head>

<body>
    <!-- Accessibility Skip Link -->
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen" aria-hidden="true">
        <div class="spinner"></div>
    </div>
    
    <!-- Main Navigation -->
    <nav class="main-nav" role="navigation" aria-label="Slide navigation">
        <div class="nav-container">
            <div class="logo">
                <img src="./assets/images/logo.svg" alt="Nearby Roulette">
            </div>
            <div class="slide-indicators" role="tablist">
                <button role="tab" aria-selected="true" aria-controls="slide-1">Problem</button>
                <button role="tab" aria-selected="false" aria-controls="slide-2">Solution</button>
                <button role="tab" aria-selected="false" aria-controls="slide-3">Features</button>
                <button role="tab" aria-selected="false" aria-controls="slide-4">Market</button>
                <button role="tab" aria-selected="false" aria-controls="slide-5">CTA</button>
            </div>
            <div class="nav-controls">
                <button id="theme-toggle" aria-label="Toggle dark/light theme">🌙</button>
            </div>
        </div>
    </nav>
    
    <!-- Main Content Container -->
    <main id="main" class="slides-container" role="main">
        
        <!-- Slide 1: Problem Statement -->
        <section id="slide-1" class="slide active" role="tabpanel" aria-labelledby="slide-1-title">
            <div class="slide-content">
                <h1 id="slide-1-title">The Local Discovery Problem</h1>
                <div class="problem-visual">
                    <!-- Animated illustration of confusion/indecision -->
                </div>
                <div class="content-text">
                    <h2>"What should I do nearby?"</h2>
                    <ul class="problem-points">
                        <li>Decision paralysis with too many choices</li>
                        <li>Same boring routine places</li>
                        <li>Missing hidden gems in your area</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- Slide 2: Solution -->
        <section id="slide-2" class="slide" role="tabpanel" aria-labelledby="slide-2-title">
            <div class="slide-content">
                <h1 id="slide-2-title">Spin Your Way to Adventure</h1>
                <div class="solution-demo">
                    <div class="phone-mockup">
                        <img src="./assets/images/ui/roulette-wheel.png" alt="Nearby Roulette spinning wheel interface">
                    </div>
                    <div class="solution-text">
                        <h2>Let fate decide your next adventure!</h2>
                        <p>Nearby Roulette eliminates choice paralysis by gamifying local discovery.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Slide 3: Key Features -->
        <section id="slide-3" class="slide" role="tabpanel" aria-labelledby="slide-3-title">
            <div class="slide-content">
                <h1 id="slide-3-title">Powerful Features</h1>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🎯</div>
                        <h3>Smart Filtering</h3>
                        <p>Distance, price, category filters</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">❤️</div>
                        <h3>Favorites System</h3>
                        <p>Save and revisit great discoveries</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Adventure Analytics</h3>
                        <p>Track your exploration journey</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎨</div>
                        <h3>Custom Themes</h3>
                        <p>Personalize your experience</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Slide 4: Market Opportunity -->
        <section id="slide-4" class="slide" role="tabpanel" aria-labelledby="slide-4-title">
            <div class="slide-content">
                <h1 id="slide-4-title">Market Opportunity</h1>
                <div class="market-stats">
                    <div class="stat-card">
                        <h3>$180B</h3>
                        <p>Local commerce market size</p>
                    </div>
                    <div class="stat-card">
                        <h3>78%</h3>
                        <p>Users want local discovery tools</p>
                    </div>
                    <div class="stat-card">
                        <h3>Growing</h3>
                        <p>Post-pandemic local exploration trend</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Slide 5: Call to Action -->
        <section id="slide-5" class="slide" role="tabpanel" aria-labelledby="slide-5-title">
            <div class="slide-content">
                <h1 id="slide-5-title">Start Your Adventure Today</h1>
                <div class="cta-section">
                    <div class="app-preview">
                        <img src="./assets/images/ui/app-preview.png" alt="Nearby Roulette app screens">
                    </div>
                    <div class="download-links">
                        <h2>Download Nearby Roulette</h2>
                        <div class="store-buttons">
                            <a href="#" class="store-button ios" aria-label="Download on the App Store">
                                <img src="./assets/images/app-store-badge.svg" alt="Download on the App Store">
                            </a>
                            <a href="#" class="store-button android" aria-label="Get it on Google Play">
                                <img src="./assets/images/google-play-badge.svg" alt="Get it on Google Play">
                            </a>
                        </div>
                        <div class="contact-info">
                            <p>Questions? Contact us at <a href="mailto:hello@nearbyroulette.app">hello@nearbyroulette.app</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
    
    <!-- Slide Navigation Controls -->
    <div class="slide-controls" role="navigation" aria-label="Slide controls">
        <button id="prev-slide" class="nav-button" aria-label="Previous slide">‹</button>
        <button id="next-slide" class="nav-button" aria-label="Next slide">›</button>
    </div>
    
    <!-- Progress Indicator -->
    <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="5">
        <div class="progress-fill"></div>
    </div>
    
    <!-- Keyboard Instructions (Hidden by default) -->
    <div id="keyboard-help" class="keyboard-help" aria-live="polite">
        <p>Use arrow keys or space/enter to navigate slides</p>
    </div>
    
    <!-- Scripts -->
    <script src="./assets/js/slideController.js"></script>
    <script src="./assets/js/animations.js"></script>
    <script src="./assets/js/accessibility.js"></script>
    <script src="./assets/js/main.js"></script>
</body>
</html>
```

## 🎨 CSS Architecture

### Design System Variables:
```css
:root {
  /* Color Palette */
  --primary-color: #6366f1;      /* Indigo - matches app branding */
  --secondary-color: #8b5cf6;    /* Purple */
  --accent-color: #f59e0b;       /* Amber */
  --success-color: #10b981;      /* Emerald */
  --warning-color: #f59e0b;      /* Amber */
  --error-color: #ef4444;        /* Red */
  
  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Dark Mode Colors */
  --dark-bg: #0f0f0f;
  --dark-surface: #1a1a1a;
  --dark-border: #2a2a2a;
  --dark-text: #e5e5e5;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;       /* 12px */
  --font-size-sm: 0.875rem;      /* 14px */
  --font-size-base: 1rem;        /* 16px */
  --font-size-lg: 1.125rem;      /* 18px */
  --font-size-xl: 1.25rem;       /* 20px */
  --font-size-2xl: 1.5rem;       /* 24px */
  --font-size-3xl: 1.875rem;     /* 30px */
  --font-size-4xl: 2.25rem;      /* 36px */
  --font-size-5xl: 3rem;         /* 48px */
  
  /* Spacing Scale */
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  
  /* Breakpoints */
  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1536px;
  
  /* Animation */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Z-Index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal: 1040;
  --z-popover: 1050;
  --z-tooltip: 1060;
}
```

### Responsive Breakpoint System:
```css
/* Mobile First Approach */

/* Base styles (mobile) */
.slide-content {
  padding: var(--space-4);
  min-height: 100vh;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .slide-content {
    padding: var(--space-8);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .slide-content {
    padding: var(--space-12);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
  .slide-content {
    padding: var(--space-16);
  }
}
```

## ⚙️ JavaScript Module Architecture

### Core Modules:

#### 1. SlideController Module (slideController.js):
```javascript
class SlideController {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 5;
    this.isAnimating = false;
    this.autoplayTimer = null;
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.updateProgressBar();
    this.setupIntersectionObserver();
  }
  
  bindEvents() {
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyNavigation.bind(this));
    
    // Touch/swipe events
    document.addEventListener('touchstart', this.handleTouchStart.bind(this));
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));
    
    // Button clicks
    document.getElementById('next-slide')?.addEventListener('click', () => this.nextSlide());
    document.getElementById('prev-slide')?.addEventListener('click', () => this.previousSlide());
    
    // Indicator clicks
    document.querySelectorAll('.slide-indicators button').forEach((btn, index) => {
      btn.addEventListener('click', () => this.goToSlide(index + 1));
    });
  }
  
  goToSlide(slideNumber) {
    if (this.isAnimating || slideNumber === this.currentSlide) return;
    
    this.isAnimating = true;
    const currentSlideEl = document.getElementById(`slide-${this.currentSlide}`);
    const nextSlideEl = document.getElementById(`slide-${slideNumber}`);
    
    // Animate transition
    this.animateSlideTransition(currentSlideEl, nextSlideEl, slideNumber > this.currentSlide);
    
    this.currentSlide = slideNumber;
    this.updateActiveStates();
    this.updateProgressBar();
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
  
  animateSlideTransition(current, next, isForward) {
    const direction = isForward ? 'translateX(-100%)' : 'translateX(100%)';
    const enterDirection = isForward ? 'translateX(100%)' : 'translateX(-100%)';
    
    // Animate out current slide
    current.style.transform = direction;
    current.classList.remove('active');
    
    // Prepare and animate in next slide
    next.style.transform = enterDirection;
    next.classList.add('active');
    
    requestAnimationFrame(() => {
      next.style.transform = 'translateX(0)';
    });
  }
}
```

#### 2. Animation Controller (animations.js):
```javascript
class AnimationController {
  constructor() {
    this.animations = new Map();
    this.setupScrollAnimations();
  }
  
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.triggerSlideAnimations(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.slide').forEach(slide => {
      observer.observe(slide);
    });
  }
  
  triggerSlideAnimations(slide) {
    const animatedElements = slide.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 100);
    });
  }
  
  // Roulette wheel animation for solution slide
  animateRouletteWheel() {
    const wheel = document.querySelector('.roulette-wheel');
    if (!wheel) return;
    
    wheel.style.transform = 'rotate(1440deg)'; // 4 full rotations
    wheel.style.transition = 'transform 2s cubic-bezier(0.23, 1, 0.32, 1)';
  }
}
```

#### 3. Accessibility Controller (accessibility.js):
```javascript
class AccessibilityController {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderAnnouncements();
    this.setupFocusManagement();
    this.setupReducedMotion();
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          window.slideController.nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          window.slideController.previousSlide();
          break;
        case 'Home':
          e.preventDefault();
          window.slideController.goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          window.slideController.goToSlide(5);
          break;
      }
    });
  }
  
  announceSlideChange(slideNumber, slideTitle) {
    const announcement = `Slide ${slideNumber} of 5: ${slideTitle}`;
    this.announce(announcement);
  }
  
  announce(message) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'assertive');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }
  
  setupReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }
  }
}
```

## 📱 Responsive Design Strategy

### Mobile-First Breakpoints:
- **Mobile**: 320px - 767px (base styles)
- **Tablet**: 768px - 1023px 
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### Performance Optimizations:
1. **Critical CSS inlining** for above-the-fold content
2. **Lazy loading** for images below the fold  
3. **Preload** critical resources
4. **Minification** of CSS/JS
5. **Image optimization** with WebP format + fallbacks
6. **Service Worker** for offline functionality (optional)

## 🎯 SEO Optimization

### Meta Tags Strategy:
```html
<meta name="description" content="Spin to discover amazing places nearby! Nearby Roulette makes local exploration fun with roulette-style place discovery.">
<meta name="keywords" content="local discovery, places nearby, location app, adventure finder, roulette places">
<meta name="author" content="Nearby Roulette Team">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Nearby Roulette - Discover Adventure Around You">
<meta property="og:description" content="Spin to discover amazing places nearby! Eliminate choice paralysis with our fun roulette-style local discovery app.">
<meta property="og:image" content="https://nearbyroulette.app/assets/images/og-image.jpg">
<meta property="og:url" content="https://nearbyroulette.app">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nearby Roulette - Discover Adventure Around You">
<meta name="twitter:description" content="Spin to discover amazing places nearby!">
<meta name="twitter:image" content="https://nearbyroulette.app/assets/images/twitter-card.jpg">
```

### Structured Data:
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Nearby Roulette",
  "description": "Discover amazing places nearby with roulette-style selection",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

## 🚀 Performance Targets

### Core Web Vitals Goals:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.5s

### Optimization Techniques:
1. **Critical CSS inlining** (≤ 14KB)
2. **Image optimization** (WebP with fallbacks)
3. **Font loading optimization** (font-display: swap)
4. **JavaScript code splitting**
5. **DNS prefetching** for external resources
6. **Resource hints** (preload, prefetch)

## 🔧 Build and Deployment

### Simple Build Process:
```bash
# Development server (optional)
python -m http.server 8000

# Production build (manual optimization)
# 1. Minify CSS/JS
# 2. Optimize images
# 3. Generate compressed versions (gzip/brotli)
```

### Deployment Options:
1. **Static hosting**: Netlify, Vercel, GitHub Pages
2. **CDN**: Cloudflare, AWS CloudFront
3. **Traditional hosting**: Any web server with HTTPS

This architecture provides a solid foundation for a high-performance, accessible, and SEO-optimized marketing website that effectively showcases the Nearby Roulette app's value proposition.