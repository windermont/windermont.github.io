document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateToggleButton(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateToggleButton(false);
    }
    
    // Show the toggle button after determining the initial state
    document.getElementById('theme-toggle').classList.remove('hidden');
    
    // Add click event to the theme toggle button
    document.getElementById('theme-toggle').addEventListener('click', function() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Update toggle button appearance
        const isDarkMode = document.body.classList.contains('dark-mode');
        updateToggleButton(isDarkMode);
        
        // Save preference to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});

// Function to update the toggle button icon/text
function updateToggleButton(isDarkMode) {
    const toggleButton = document.getElementById('theme-toggle');
    if (isDarkMode) {
        toggleButton.innerHTML = '☀️';
        toggleButton.title = 'Switch to light mode';
    } else {
        toggleButton.innerHTML = '🌙';
        toggleButton.title = 'Switch to dark mode';
    }
}
