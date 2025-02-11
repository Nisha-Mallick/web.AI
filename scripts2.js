const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const platformCards = document.querySelectorAll(".platform-card");

// Search functionality
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    platformCards.forEach(card => {
        const platformName = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = platformName.includes(query) ? "block" : "none";
    });
});

// Category filter functionality
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    platformCards.forEach(card => {
        const cardCategory = card.dataset.category;
        card.style.display = category === "all" || cardCategory === category ? "block" : "none";
    });
});
