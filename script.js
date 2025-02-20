document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Change slide every 5 seconds
    setInterval(showNextSlide, 5000);

    // Ensure the first slide is visible on load
    slides[0].classList.add("active");
});