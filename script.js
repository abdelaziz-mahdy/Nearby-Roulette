// Presentation Navigation System
class PresentationManager {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 4;
        this.slides = document.querySelectorAll('.slide');
        this.navDots = document.querySelectorAll('.nav-dot');
        this.progressFill = document.querySelector('.progress-fill');
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateProgress();
        this.startAutoProgress();
    }
    
    setupEventListeners() {
        // Navigation buttons
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevSlide());
        
        // Dot navigation
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevSlide();
            } else if (e.key >= '1' && e.key <= '5') {
                e.preventDefault();
                this.goToSlide(parseInt(e.key) - 1);
            }
        });
        
        // Touch/swipe support
        this.setupTouchEvents();
        
        // Pause auto-progress on interaction
        document.addEventListener('click', () => this.resetAutoProgress());
        document.addEventListener('keydown', () => this.resetAutoProgress());
    }
    
    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Only trigger if horizontal swipe is dominant
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            
            startX = 0;
            startY = 0;
        });
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        } else {
            // Loop back to first slide
            this.goToSlide(0);
        }
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        } else {
            // Loop to last slide
            this.goToSlide(this.totalSlides - 1);
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;
        
        this.isAnimating = true;
        
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        this.navDots[this.currentSlide].classList.remove('active');
        
        // Add prev class for exit animation
        if (index < this.currentSlide) {
            this.slides[this.currentSlide].classList.add('prev');
        }
        
        // Update current slide
        this.currentSlide = index;
        
        // Activate new slide
        setTimeout(() => {
            this.slides.forEach(slide => {
                slide.classList.remove('active', 'prev');
            });
            
            this.slides[this.currentSlide].classList.add('active');
            this.navDots[this.currentSlide].classList.add('active');
            
            this.updateProgress();
            this.triggerSlideAnimations();
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }, 50);
    }
    
    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    triggerSlideAnimations() {
        const currentSlideElement = this.slides[this.currentSlide];
        
        // Add specific animations based on slide content
        switch(this.currentSlide) {
            case 0:
                this.animateProblemSlide(currentSlideElement);
                break;
            case 1:
                this.animateSolutionSlide(currentSlideElement);
                break;
            case 2:
                this.animateMarketSlide(currentSlideElement);
                break;
            case 3:
                this.animateBusinessSlide(currentSlideElement);
                break;
            case 4:
                this.animateAskSlide(currentSlideElement);
                break;
        }
    }
    
    animateProblemSlide(slide) {
        const thoughtBubbles = slide.querySelectorAll('.thought-bubble');
        thoughtBubbles.forEach((bubble, index) => {
            bubble.style.animation = 'none';
            setTimeout(() => {
                bubble.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
            }, 100 + index * 200);
        });
    }
    
    animateSolutionSlide(slide) {
        const wheel = slide.querySelector('.roulette-wheel');
        if (wheel) {
            wheel.style.animation = 'none';
            setTimeout(() => {
                wheel.style.animation = 'spin 4s linear infinite';
            }, 300);
        }
    }
    
    animateMarketSlide(slide) {
        const bars = slide.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.animation = 'none';
            setTimeout(() => {
                bar.style.animation = `grow 1s ease-out ${index * 0.2}s forwards`;
            }, 200);
        });
    }
    
    animateBusinessSlide(slide) {
        const streams = slide.querySelectorAll('.stream');
        streams.forEach((stream, index) => {
            stream.style.opacity = '0';
            stream.style.transform = 'translateY(20px)';
            setTimeout(() => {
                stream.style.transition = 'all 0.6s ease';
                stream.style.opacity = '1';
                stream.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    animateAskSlide(slide) {
        const cards = slide.querySelectorAll('.projection-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, index * 150);
        });
    }
    
    startAutoProgress() {
        // Auto-progress disabled for better user control
        // this.autoProgressInterval = setInterval(() => {
        //     if (!this.isAnimating) {
        //         this.nextSlide();
        //     }
        // }, 15000); // 15 seconds per slide
    }
    
    resetAutoProgress() {
        clearInterval(this.autoProgressInterval);
        this.startAutoProgress();
    }
}

// Enhanced Roulette Wheel Animation
class RouletteWheel {
    constructor() {
        this.wheel = document.querySelector('.roulette-wheel');
        this.segments = document.querySelectorAll('.segment');
        this.isSpinning = false;
        
        if (this.wheel) {
            this.init();
        }
    }
    
    init() {
        // Add hover effects
        this.wheel.addEventListener('mouseenter', () => {
            if (!this.isSpinning) {
                this.wheel.style.animationPlayState = 'paused';
            }
        });
        
        this.wheel.addEventListener('mouseleave', () => {
            if (!this.isSpinning) {
                this.wheel.style.animationPlayState = 'running';
            }
        });
        
        // Add click to spin
        this.wheel.addEventListener('click', () => this.spinWheel());
    }
    
    spinWheel() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        const spins = 3 + Math.random() * 3; // 3-6 full rotations
        const finalAngle = Math.random() * 360;
        
        this.wheel.style.animation = 'none';
        this.wheel.style.transform = `rotate(${spins * 360 + finalAngle}deg)`;
        this.wheel.style.transition = 'transform 3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            this.wheel.style.transition = 'none';
            this.wheel.style.animation = 'spin 4s linear infinite';
            this.isSpinning = false;
        }, 3000);
    }
}

// CTA Button Interactions
class CTAManager {
    constructor() {
        this.init();
    }
    
    init() {
        const ctaButtons = document.querySelectorAll('.cta-btn');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleCTAClick(e.target);
            });
        });
    }
    
    handleCTAClick(button) {
        const text = button.textContent.trim();
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Handle different CTA actions
        switch(text) {
            case 'Schedule Demo':
                this.showDemoModal();
                break;
            case 'View Pitch Deck':
                this.showPitchDeckModal();
                break;
        }
    }
    
    showDemoModal() {
        // In a real app, this would open a calendar booking widget
        alert('Demo scheduling functionality would be integrated here (e.g., Calendly, Acuity Scheduling)');
    }
    
    showPitchDeckModal() {
        // In a real app, this would open a PDF viewer or download
        alert('Pitch deck download/viewer would be integrated here');
    }
}

// Performance and Analytics
class AnalyticsManager {
    constructor() {
        this.slideViews = {};
        this.startTime = Date.now();
        this.init();
    }
    
    init() {
        // Track slide views
        this.trackSlideView(0);
        
        // Track user interactions
        document.addEventListener('click', (e) => {
            this.trackInteraction('click', e.target);
        });
        
        // Track keyboard usage
        document.addEventListener('keydown', (e) => {
            this.trackInteraction('keyboard', e.key);
        });
        
        // Track session duration
        window.addEventListener('beforeunload', () => {
            this.trackSessionDuration();
        });
    }
    
    trackSlideView(slideIndex) {
        if (!this.slideViews[slideIndex]) {
            this.slideViews[slideIndex] = {
                views: 0,
                timeSpent: 0,
                entryTime: Date.now()
            };
        }
        
        const slide = this.slideViews[slideIndex];
        slide.views++;
        slide.entryTime = Date.now();
        
        // Track time spent on previous slide
        if (this.currentSlideIndex !== undefined && this.currentSlideIndex !== slideIndex) {
            const prevSlide = this.slideViews[this.currentSlideIndex];
            if (prevSlide) {
                prevSlide.timeSpent += Date.now() - prevSlide.entryTime;
            }
        }
        
        this.currentSlideIndex = slideIndex;
        
        // In a real app, send to analytics service
        console.log('Slide view tracked:', { slideIndex, slideViews: this.slideViews });
    }
    
    trackInteraction(type, target) {
        const interaction = {
            type,
            target: target.toString(),
            timestamp: Date.now(),
            slide: this.currentSlideIndex
        };
        
        // In a real app, send to analytics service
        console.log('Interaction tracked:', interaction);
    }
    
    trackSessionDuration() {
        const duration = Date.now() - this.startTime;
        console.log('Session duration:', duration / 1000, 'seconds');
        console.log('Slide analytics:', this.slideViews);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    const presentation = new PresentationManager();
    const roulette = new RouletteWheel();
    const cta = new CTAManager();
    const analytics = new AnalyticsManager();
    
    // Override presentation slide change to track analytics
    const originalGoToSlide = presentation.goToSlide.bind(presentation);
    presentation.goToSlide = function(index) {
        analytics.trackSlideView(index);
        return originalGoToSlide(index);
    };
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Preload resources for smooth animations
    const preloadImages = () => {
        const images = ['gradient-bg.jpg']; // Add any image URLs you want to preload
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };
    
    preloadImages();
});

// Add fullscreen support
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Fullscreen not supported:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Add print support for presentation mode
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

// Performance optimization
const optimizeAnimations = () => {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
};

optimizeAnimations();