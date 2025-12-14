/**
 * Policy Pages JavaScript
 * Handles theme switching, smooth scrolling, and interactions
 */

(function() {
    'use strict';

    // ===========================
    // Theme Management
    // ===========================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Get theme from URL parameter, localStorage, or system preference
    function getPreferredTheme() {
        // Check for URL parameter first (e.g., ?theme=dark or ?theme=light)
        const urlParams = new URLSearchParams(window.location.search);
        const themeParam = urlParams.get('theme');
        if (themeParam === 'dark' || themeParam === 'light') {
            return themeParam;
        }
        
        // Then check localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Finally, use system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Set theme
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    // Initialize theme
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    
    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            
            // Add animation class
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ===========================
    // Smooth Scroll for TOC Links
    // ===========================
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80; // Offset for fixed elements
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveTOCLink(link);
            }
        });
    });

    // ===========================
    // Active TOC Link Highlighting
    // ===========================
    function updateActiveTOCLink(activeLink) {
        tocLinks.forEach(link => {
            link.style.color = '';
            link.style.fontWeight = '';
        });
        
        if (activeLink) {
            activeLink.style.color = 'var(--accent-primary)';
            activeLink.style.fontWeight = '600';
        }
    }

    // Intersection Observer for active section detection
    const sections = document.querySelectorAll('.policy-section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.toc-list a[href="#${id}"]`);
                updateActiveTOCLink(correspondingLink);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ===========================
    // Back to Top Functionality
    // ===========================
    let backToTopButton;
    
    function createBackToTopButton() {
        backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.className = 'back-to-top';
        backToTopButton.setAttribute('aria-label', 'Back to top');
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--accent-primary);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
            z-index: 999;
        `;
        
        document.body.appendChild(backToTopButton);
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    createBackToTopButton();
    
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // ===========================
    // External Links
    // ===========================
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // ===========================
    // Print Optimization
    // ===========================
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections if any
        console.log('Preparing page for print...');
    });

    // ===========================
    // Performance Monitoring
    // ===========================
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
            }
        });
    }

    // ===========================
    // Copy to Clipboard (for code blocks if any)
    // ===========================
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.textContent = 'Copy';
            button.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                padding: 4px 12px;
                font-size: 0.85rem;
                background: var(--accent-primary);
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            `;
            
            const pre = block.parentElement;
            pre.style.position = 'relative';
            pre.appendChild(button);
            
            button.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
            });
        });
    }
    
    addCopyButtons();

    // ===========================
    // Keyboard Navigation
    // ===========================
    document.addEventListener('keydown', (e) => {
        // Escape key closes modals or returns to top
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // ===========================
    // Loading Animation Complete
    // ===========================
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    });

})();
