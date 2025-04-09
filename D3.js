// D3.js – Dark Mode Toggle Script

document.addEventListener("DOMContentLoaded", () => {
    const darkToggle = document.getElementById("darkModeToggle");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const body = document.body;

    // Optional: Restore saved mode
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    }

    darkToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const darkEnabled = body.classList.contains("dark-mode");
        moonIcon.style.display = darkEnabled ? "none" : "inline";
        sunIcon.style.display = darkEnabled ? "inline" : "none";

        // Save preference
        localStorage.setItem("darkMode", darkEnabled);
    });
});
