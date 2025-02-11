const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const paperCards = document.querySelectorAll(".paper-card");

// Search functionality
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    paperCards.forEach(card => {
        const paperTitle = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = paperTitle.includes(query) ? "block" : "none";
    });
});

// Category filter functionality
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    paperCards.forEach(card => {
        const cardCategory = card.dataset.category;
        card.style.display = category === "all" || cardCategory === category ? "block" : "none";
    });
});
