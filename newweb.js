document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.trim();
    if (query) {
        alert(`Searching for "${query}"...`); // Replace with actual search functionality
    } else {
        alert("Please enter a search term!");
    }
});
