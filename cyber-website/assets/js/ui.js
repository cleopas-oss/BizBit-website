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

/* Sidebar Navigation Functionality */
(function SidebarNavigation() {
    try {
        const sidebar = document.getElementById("sidebar");
        const toggleBtn = document.getElementById("toggle-btn");
        const mainContent = document.getElementById("main-content");
        const sidebarOverlay = document.getElementById("sidebar-overlay");
        
        // Toggle sidebar
        if (toggleBtn && sidebar && mainContent) {
            toggleBtn.addEventListener("click", function() {
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    sidebar.classList.toggle("open");
                    sidebarOverlay.classList.toggle("active");
                    document.body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "";
                } else {
                    sidebar.classList.toggle("closed");
                    mainContent.classList.toggle("full");
                }
            });
        }
        
        // Close sidebar when clicking overlay (mobile)
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener("click", function() {
                sidebar.classList.remove("open");
                sidebarOverlay.classList.remove("active");
                document.body.style.overflow = "";
            });
        }
        
        // Handle dropdown buttons in sidebar
        const dropdownBtns = document.querySelectorAll(".sidebar .dropdown-btn");
        
        dropdownBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                // Close other dropdowns
                dropdownBtns.forEach(function(otherBtn) {
                    if (otherBtn !== btn) {
                        otherBtn.classList.remove("active");
                        const otherDropdown = otherBtn.nextElementSibling;
                        if (otherDropdown) {
                            otherDropdown.style.display = "none";
                        }
                    }
                });
                
                // Toggle current dropdown
                btn.classList.toggle("active");
                const dropdown = btn.nextElementSibling;
                if (dropdown) {
                    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                }
                
                // Update ARIA attributes
                const isActive = btn.classList.contains("active");
                btn.setAttribute("aria-expanded", isActive);
            });
            
            // Keyboard support
            btn.addEventListener("keydown", function(e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    btn.click();
                }
            });
        });
        
        // Handle window resize
        window.addEventListener("resize", function() {
            const isMobile = window.innerWidth <= 768;
            
            if (!isMobile) {
                // Desktop: remove mobile classes
                sidebar.classList.remove("open");
                sidebarOverlay.classList.remove("active");
                document.body.style.overflow = "";
            } else {
                // Mobile: ensure sidebar is closed by default
                if (!sidebar.classList.contains("open")) {
                    sidebar.classList.remove("closed");
                    mainContent.classList.remove("full");
                }
            }
        });
        
        // Set active link based on current page
        function setActiveLink() {
            const currentPath = window.location.pathname;
            const sidebarLinks = document.querySelectorAll('.sidebar .nav-links a');
            
            sidebarLinks.forEach(function(link) {
                link.classList.remove('active');
                
                // Check if link href matches current path
                const linkPath = new URL(link.href).pathname;
                if (linkPath === currentPath || (currentPath === '/' && linkPath.includes('index.html'))) {
                    link.classList.add('active');
                    
                    // If it's a dropdown item, also expand the parent dropdown
                    const parentDropdown = link.closest('.dropdown-container');
                    if (parentDropdown) {
                        const dropdownBtn = parentDropdown.previousElementSibling;
                        if (dropdownBtn && dropdownBtn.classList.contains('dropdown-btn')) {
                            dropdownBtn.classList.add('active');
                            parentDropdown.style.display = 'block';
                        }
                    }
                }
            });
        }
        
        // Set active link on page load
        setActiveLink();
        
    } catch (err) {
        console && console.warn && console.warn('Sidebar navigation init error', err);
    }
})();

/* Enhanced Active Page Highlighting */
(function ActivePageHighlighting() {
    try {
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll(".nav-links a").forEach(link => {
            const linkHref = link.getAttribute("href");
            if (linkHref === currentPage || 
                (currentPage === "" && linkHref === "index.html") ||
                (currentPage === "/" && linkHref === "/index.html")) {
                link.classList.add("active");
            }
        });
    } catch (err) {
        console && console.warn && console.warn('Active page highlighting error', err);
    }
})();

/* Mobile Auto-Collapse Behavior */
(function MobileAutoCollapse() {
    try {
        // Auto-collapse sidebar when a link is clicked (mobile view)
        const sidebarLinks = document.querySelectorAll(".nav-links a");
        const sidebar = document.getElementById("sidebar");
        const toggleBtn = document.getElementById("toggle-btn");
        const sidebarOverlay = document.getElementById("sidebar-overlay");

        sidebarLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains("open")) {
                    sidebar.classList.remove("open");
                    if (sidebarOverlay) {
                        sidebarOverlay.classList.remove("active");
                    }
                    if (toggleBtn) {
                        toggleBtn.setAttribute("aria-expanded", "false");
                    }
                    // Restore body scroll
                    document.body.style.overflow = "";
                }
            });
        });
    } catch (err) {
        console && console.warn && console.warn('Mobile auto-collapse init error', err);
    }
})();

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
