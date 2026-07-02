// Configuration
const CONFIG = {
    SLIDE_DURATION: 10000,      // 10 seconds
    CLOCK_UPDATE_INTERVAL: 1000 // 1 second
};

// Initialize elements
const clockElement = document.getElementById('clock');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

/**
 * Updates the clock display
 */
function updateClock() {
    if (!clockElement) return;

    clockElement.textContent =
        new Date().toLocaleString();
}

/**
 * Displays the next slide
 */
function nextSlide() {

    if (slides.length <= 1) {
        return;
    }

    slides[currentSlide].classList.remove('active');

    currentSlide =
        (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
}

/**
 * Initialize slideshow
 */
function initialize() {

    if (!clockElement) {
        console.warn('Clock element not found');
    }

    if (slides.length === 0) {
        console.error('No slides found');
        return;
    }

    // Ensure first slide is active
    slides.forEach((slide, index) => {
        slide.classList.toggle(
            'active',
            index === 0
        );
    });

    updateClock();

    setInterval(
        updateClock,
        CONFIG.CLOCK_UPDATE_INTERVAL
    );

    if (slides.length > 1) {
        setInterval(
            nextSlide,
            CONFIG.SLIDE_DURATION
        );
    }
}

if (document.readyState === 'loading') {
    document.addEventListener(
        'DOMContentLoaded',
        initialize
    );
} else {
    initialize();
}
