const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const tutorialCards = document.querySelectorAll(".tutorial-card");

// Search functionality
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    tutorialCards.forEach(card => {
        const tutorialTitle = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = tutorialTitle.includes(query) ? "block" : "none";
    });
});

// Category filter functionality
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    tutorialCards.forEach(card => {
        const cardCategory = card.dataset.category;
        card.style.display = category === "all" || cardCategory === category ? "block" : "none";
    });
});
