// main.js - small, focused, and well-commented


// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', function(){
// Mobile menu toggle
const toggle = document.getElementById('mobile-toggle');
if(toggle){
toggle.addEventListener('click', function(){
// find or create a mobile nav and toggle a class
// keep it simple: toggle an 'open' class on body
document.body.classList.toggle('nav-open');
});
}


// Example: front-end validation for contact form
const contactForm = document.querySelector('#contact-form');
if(contactForm){
contactForm.addEventListener('submit', function(e){
// Basic validation: check required fields
const name = contactForm.querySelector('[name="name"]').value.trim();
const email = contactForm.querySelector('[name="email"]').value.trim();
if(!name || !email){
e.preventDefault();
alert('Please enter your name and email');
}
// Note: do not rely on client-side validation for security later.
});
}
});

/* Particles.js initialization and hero entrance animations */
(function(){
	// Run after the document is loaded
	document.addEventListener('DOMContentLoaded', function(){
		// Initialize particles.js if available
			if(window.particlesJS){
				try{
					// Determine user preferences and device capabilities
					var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
					var isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || (window.innerWidth && window.innerWidth < 768);

					// Base configuration (reduced for performance)
					// Desktop: 30 particles, speed 1
					var baseConfig = {
						particles: {
							number: { value: 30 }, // reduced from 60
							color: { value: "#00aaff" },
							shape: { type: "circle" },
							opacity: { value: 0.6 },
							size: { value: 3 },
							line_linked: {
								enable: true,
								distance: 150,
								color: "#00aaff",
								opacity: 0.3,
								width: 1
							},
							move: {
								enable: true,
								speed: 1, // reduced from 2
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out"
							}
						},
						interactivity: {
							detect_on: "canvas",
							events: {
								onhover: { enable: true, mode: "grab" },
								onclick: { enable: true, mode: "push" }
							},
							modes: {
								grab: { distance: 140, line_linked: { opacity: 0.5 } },
								push: { particles_nb: 4 }
							}
						},
						retina_detect: true
					};

					// Reduce motion: disable particles by setting count to 0 and stop movement
					if(prefersReduced){
						baseConfig.particles.number.value = 0;
						baseConfig.particles.move.enable = false;
						baseConfig.interactivity.events.onhover.enable = false;
						baseConfig.interactivity.events.onclick.enable = false;
					} else if(isMobile){
						// Mobile: lower particle count and speed for performance
						baseConfig.particles.number.value = 28;
						baseConfig.particles.move.speed = 0.9;
						baseConfig.particles.line_linked.distance = 90;
					}

					// Initialize with the computed configuration
					particlesJS("particles-js", baseConfig);
				}catch(err){
					console.warn('particlesJS failed to initialize', err);
				}
			}

		// Simple entrance for hero overlay
		const overlay = document.querySelector('.overlay');
		if(overlay){
			overlay.classList.add('animate-fade-in');
		}
	});
})();
