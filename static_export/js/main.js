document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const languageBtn = document.querySelector('.language-btn');
    const contactForm = document.getElementById('contact-form');
    
    // Handle scroll event for navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        
        // Animate hamburger to X
        const bars = this.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
        
        if (mobileMenu.classList.contains('open')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            
            // Reset hamburger icon
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Language switcher
    languageBtn.addEventListener('click', function() {
        const currentLang = this.textContent;
        if (currentLang === 'EN') {
            window.location.href = 'index_en.html';
        } else {
            window.location.href = 'index.html';
        }
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const policy = document.getElementById('policy').checked;
            
            if (!name || !email || !message || !policy) {
                alert('Bitte füllen Sie alle Pflichtfelder aus.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                return;
            }
            
            // In a real environment, this would be sent to a server
            // For this static version, we'll just show a success message
            alert('Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.section-header, .founder-card, .service-card, .case-study-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});