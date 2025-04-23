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

// Immediately apply saved theme on page load
(function(){
  const link = document.getElementById('dark-theme');
  const saved = localStorage.getItem('theme') || 'light';
  link.disabled = (saved !== 'dark');
  setButton(saved);
})();

function toggleTheme() {
  const link = document.getElementById('dark-theme');
  link.disabled = !link.disabled;
  const theme = link.disabled ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  setButton(theme);
}

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
