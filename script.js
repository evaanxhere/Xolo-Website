window.onload = function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";  // Show only the current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();
};