document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const container = document.querySelector(".container");

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        container.classList.add("dark-mode");
        themeToggleButton.classList.add("dark-mode");
    }

    themeToggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        container.classList.toggle("dark-mode");
        themeToggleButton.classList.toggle("dark-mode");
        
        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
