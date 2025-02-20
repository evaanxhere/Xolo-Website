document.addEventListener("DOMContentLoaded", () => {
    // Existing slideshow code (keep it as is)
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(showNextSlide, 5000);
    slides[0].classList.add("active");

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const productCard = e.target.closest(".product-card");
            alert(`Added ${productCard.querySelector("h3").textContent} to cart!`);
            // You can enhance this with a real cart system later
        });
    });
});