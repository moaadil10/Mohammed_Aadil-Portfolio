/**
 * Main application logic
 * Handles dynamic content generation, navigation state,
 * and Intersection Observer animations.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Dynamic Project Loading --- */
    // This looks for the 'portfolioProjects' array loaded from 'projects.js'
    const projectGrid = document.getElementById('project-grid');
    
    if (projectGrid && typeof portfolioProjects !== 'undefined') {
        portfolioProjects.forEach((project, index) => {
            
            // Build the image component (or fallback if empty)
            let imageHTML = '';
            if (project.image && project.image.trim() !== '') {
                imageHTML = `<img src="${project.image}" alt="${project.title} screenshot" loading="lazy">`;
            } else {
                imageHTML = `<div class="project-fallback"><i class='bx bx-code-alt'></i></div>`;
            }

            // Build tech tags
            const techHTML = project.techStack.map(t => `<span>${t}</span>`).join('');

            // Build links
            let demoStr = project.demoLink && project.demoLink.trim() !== '' 
                ? `<a href="${project.demoLink}" target="_blank" aria-label="Demo of ${project.title}"><i class='bx bx-link-external'></i> Live Demo</a>` 
                : '';
                
            let githubStr = project.githubLink && project.githubLink.trim() !== '' 
                ? `<a href="${project.githubLink}" target="_blank" aria-label="Source code for ${project.title}"><i class='bx bxl-github'></i> Code</a>` 
                : '';

            // Assign a cascading stagger class (1, 2, or 3)
            let staggerClass = 'stagger-' + ((index % 3) + 1);

            // Construct Card
            const cardHTML = `
                <div class="project-card zoom-in ${staggerClass}">
                    <div class="project-image">
                        ${imageHTML}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                        <div class="project-tech">
                            ${techHTML}
                        </div>
                        <div class="project-links">
                            ${githubStr}
                            ${demoStr}
                        </div>
                    </div>
                </div>
            `;
            
            projectGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    } else if (projectGrid) {
        // Fallback error if projects.js failed to load
        projectGrid.innerHTML = `
            <p style="color: coral;">Error: Missing projects.js file. Make sure projects.js is included in the HTML before script.js.</p>
        `;
    }

    /* --- 2. Mobile Hamburger Menu --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('bx-menu', 'bx-x');
            } else {
                icon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.replace('bx-x', 'bx-menu');
            }
        });
    });

    /* --- 3. Sticky Navbar Shadow on Scroll --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- 4. Smooth Intersection Observer Animations (fade-up) --- */
    // Trigger animations when user scrolls down to elements
    const observerOptions = {
        threshold: 0.15, // trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    setTimeout(() => {
        document.querySelectorAll('.fade-up, .zoom-in').forEach(el => {
            scrollObserver.observe(el);
        });
    }, 100);

    /* --- 5. Dynamic Resume Button Rendering --- */
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        fetch('resume.pdf')
            .then(res => {
                if (res.ok) resumeBtn.style.display = 'inline-flex';
            })
            .catch(() => {});
    }

});
