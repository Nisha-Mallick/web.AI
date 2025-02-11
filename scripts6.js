const searchBar = document.getElementById("search-bar");
const cards = document.querySelectorAll(".career-card, .resource-card");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    cards.forEach(card => {
        const text = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
    });
});
