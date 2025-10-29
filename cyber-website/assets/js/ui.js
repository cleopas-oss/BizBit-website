// ui.js
// Handles UI components and effects

// Example: Modal functionality
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Example: Theme switcher
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Expose functions globally
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleTheme = toggleTheme;
