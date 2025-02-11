const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const toolCards = document.querySelectorAll(".tool-card");

// Search functionality
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    toolCards.forEach(card => {
        const toolName = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = toolName.includes(query) ? "block" : "none";
    });
});

// Category filter functionality
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    toolCards.forEach(card => {
        const cardCategory = card.dataset.category;
        card.style.display = category === "all" || cardCategory === category ? "block" : "none";
    });
});
