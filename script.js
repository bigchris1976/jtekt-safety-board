let currentSlide = 0;
const slides = document.querySelectorAll(".carousel .slides");
const dots = document.querySelectorAll(".dot");
const slideCount = slides.length;
const interval = 10000; // 10 seconds
let autoSlideTimer;

function showSlide(index) {
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
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

// Initialize
showSlide(currentSlide);
autoSlideTimer = setInterval(nextSlide, interval);

// Optional: Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideTimer);
});

carousel.addEventListener('mouseleave', () => {
    resetAutoSlide();
});