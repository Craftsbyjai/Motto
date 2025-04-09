// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggle = document.getElementById("darkModeToggle");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");

    // Load from localStorage (remember user preference)
    const savedTheme = localStorage.getItem("motto-dark-mode");
    if (savedTheme === "enabled") {
        body.classList.add("dark-mode");
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    }

    // Toggle function
    toggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        // Swap icons
        moonIcon.style.display = isDark ? "none" : "inline";
        sunIcon.style.display = isDark ? "inline" : "none";

        // Save preference
        localStorage.setItem("motto-dark-mode", isDark ? "enabled" : "disabled");
    });
});
