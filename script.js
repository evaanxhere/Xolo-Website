document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.querySelector("a[href='#explore']");
    const exploreSection = document.getElementById("explore");

    if (exploreButton && exploreSection) {
        exploreButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link action
            
            // Toggle visibility instead of just setting it to 'block'
            if (exploreSection.style.display === "none" || exploreSection.style.display === "") {
                exploreSection.style.display = "block";
                exploreSection.scrollIntoView({ behavior: "smooth" });
            } else {
                exploreSection.style.display = "none"; // Hide again if clicked twice
            }
        });
    }
});