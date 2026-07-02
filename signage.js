// Configuration
const CONFIG = {
    SLIDE_DURATION: 10000,      // 10 seconds
    CLOCK_UPDATE_INTERVAL: 1000 // 1 second
};

// Initialize elements
const clockElement = document.getElementById('clock');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Validate required elements exist
if (!clockElement) {
    console.error('Error: Clock element not found');
}
if (slides.length === 0) {
    console.error('Error: No slides found');
}

/**
 * Updates the clock display with current date and time
 */
function updateClock() {
    if (clockElement) {
        clockElement.textContent = new Date().toLocaleString();
    }
}

/**
 * Advances to the next slide
 */
function nextSlide() {
    if (slides.length === 0) return;

    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide (use modulo for cleaner wrapping)
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Start clock updates
setInterval(updateClock, CONFIG.CLOCK_UPDATE_INTERVAL);
updateClock(); // Call immediately to avoid 1-second delay

// Start slideshow
setInterval(nextSlide, CONFIG.SLIDE_DURATION);
