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
// Immediately apply saved theme on page load
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
    setButton('dark');
  } else {
    setButton('light');
  }
})();

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  const theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  setButton(theme);
}

// update the button’s text & class
function setButton(theme) {
  const btn = document.querySelector('button.theme-toggle');
  if (!btn) return;
  if (theme === 'light') {
    btn.textContent = 'Dark';
    btn.classList.remove('dark');
    btn.classList.add('light');
  } else {
    btn.textContent = 'Light';
    btn.classList.remove('light');
    btn.classList.add('dark');
  }
}


