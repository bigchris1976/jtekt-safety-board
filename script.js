let currentSlide = 0;
const slides = document.querySelectorAll(".carousel .slide");
const dots = document.querySelectorAll(".dot");
const slideCount = slides.length;
const interval = 10000; // 10 seconds
let autoSlideTimer;

function showSlide(index) {
    // Validate index
    if (index < 0 || index >= slideCount) {
        return;
    }
    
    // Update slides
    slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    
    // Update dots
    dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}

function currentSlideIndex(index) {
    showSlide(index);
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, interval);
}

// Initialize carousel when DOM is ready
function initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    
    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }
    
    showSlide(currentSlide);
    autoSlideTimer = setInterval(nextSlide, interval);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideTimer);
    });
    
    carousel.addEventListener('mouseleave', () => {
        resetAutoSlide();
    });
    
    // Pause on focus (keyboard navigation)
    slides.forEach((slide) => {
        slide.addEventListener('focus', () => {
            clearInterval(autoSlideTimer);
        }, true);
    });
    
    dots.forEach((dot) => {
        dot.addEventListener('focus', () => {
            clearInterval(autoSlideTimer);
        });
    });
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCarousel);
} else {
    initializeCarousel();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    clearInterval(autoSlideTimer);
});
