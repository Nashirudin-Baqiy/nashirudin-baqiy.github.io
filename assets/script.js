document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const jobCards = document.querySelectorAll('.job-card');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    // Mobile Navigation Toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a navigation link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsibilities hide/unhide
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const responsibilities = this.nextElementSibling;
            const jobCard = this.closest('.job-card');
            const mediaQuery = window.matchMedia('(max-width: 992px)');

            if (responsibilities.style.display === 'none' || responsibilities.style.display === '') {
                jobCard.style.display = 'block';
                if (!mediaQuery.matches) {
                    jobCards.forEach(card => {
                        card.style.display = 'none';
                    });
                    jobCard.classList.add('expanded');
                }
                responsibilities.style.display = 'block';
                this.textContent = 'Hide Responsibilities';
            } else {
                if (!mediaQuery.matches) {
                    jobCards.forEach(card => {
                        card.style.display = 'block';
                        card.classList.remove('expanded');
                    });
                }
                responsibilities.style.display = 'none';
                this.textContent = 'Show Responsibilities';
            }
        });
    });

    // Reveal animations on scroll
    function revealElements() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);

    // Header scroll effect
    function scrollHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', scrollHeader);
});
