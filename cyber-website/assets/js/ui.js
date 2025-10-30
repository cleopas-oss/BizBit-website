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

/* Bizbit WhatsApp button behavior (namespaced) */
(function BizbitWhatsApp(){
    try {
        var wa = document.getElementById('bizbit-wa');
        if (!wa) return;

        // ensure it's keyboard accessible (anchor is naturally focusable)
        wa.setAttribute('aria-haspopup', 'true');

        // support Enter and Space to activate
        wa.addEventListener('keydown', function (e) {
            var k = e.key || e.keyCode;
            if (k === 'Enter' || k === ' ' || k === 13 || k === 32) {
                e.preventDefault();
                // emulate click
                wa.click();
            }
        });

        // Optional: small runtime check — if running on mobile, ensure the href uses wa.me (already present)
        // No further runtime changes to preserve the static href attribute and allow analytics elsewhere.
    } catch (err) {
        // fail silently — don't break the rest of the site's JS
        // eslint-disable-next-line no-console
        console && console.warn && console.warn('Bizbit WA init error', err);
    }
})();
