document.addEventListener("DOMContentLoaded", () => {
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
});
