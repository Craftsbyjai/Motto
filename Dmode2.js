// darkmode.js

// Runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('darkMode') === 'enabled';

    // Apply dark mode based on saved preference
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Update the icons accordingly
    toggleIcons(isDark);
});

// Function to toggle dark mode on button click
function toggleDarkMode() {
    const isNowDark = document.body.classList.toggle('dark-mode');

    // Save preference in localStorage
    localStorage.setItem('darkMode', isNowDark ? 'enabled' : 'disabled');

    // Update moon/sun icon display
    toggleIcons(isNowDark);
}

// Update the visibility of moon and sun icons
function toggleIcons(isDark) {
    const moon = document.getElementById('moonIcon');
    const sun = document.getElementById('sunIcon');

    if (moon && sun) {
        moon.style.display = isDark ? 'none' : 'inline-block';
        sun.style.display = isDark ? 'inline-block' : 'none';
    }
}

// Add event listener to the dark mode toggle icon (if it exists)
document.querySelector('.darkModeToggle')?.addEventListener('click', toggleDarkMode);
