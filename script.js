document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.querySelector("a[href='#explore']");
    const exploreSection = document.getElementById("explore");

    exploreButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default scrolling behavior
        exploreSection.style.display = "block"; // Show the Explore section
        exploreSection.scrollIntoView({ behavior: "smooth" }); // Scroll to it smoothly
    });
});