document.addEventListener("DOMContentLoaded", () => {
    // Explore Button Functionality
    const exploreButton = document.getElementById("explore-btn");
    const exploreSection = document.getElementById("explore");

    if (exploreButton && exploreSection) {
        exploreButton.addEventListener("click", (event) => {
            event.preventDefault();

            if (exploreSection.style.display === "none" || exploreSection.style.display === "") {
                exploreSection.style.display = "block";
                exploreSection.scrollIntoView({ behavior: "smooth" });
            } else {
                exploreSection.style.display = "none";
            }
        });
    }

    // Slideshow Functionality
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
