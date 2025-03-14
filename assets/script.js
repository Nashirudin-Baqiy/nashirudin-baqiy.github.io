document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a navigation link
    const navItems = document.querySelectorAll('.nav-links li a');
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
                    top: targetElement.offsetTop - 70, // Adjust based on your fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsibilities hide/unhide
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const jobCards = document.querySelectorAll('.job-card');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const responsibilities = this.nextElementSibling;
            const jobCard = this.closest('.job-card');

            if (responsibilities.style.display === 'none' || responsibilities.style.display === '') {
                // Hide all job cards
                jobCards.forEach(card => {
                    card.style.display = 'none';
                });
                // Show the selected job card and its responsibilities
                jobCard.style.display = 'block';
                jobCard.classList.add('expanded');
                responsibilities.style.display = 'block';
                this.textContent = 'Hide Responsibilities';
            } else {
                // Show all job cards and hide the responsibilities
                jobCards.forEach(card => {
                    card.style.display = 'block';
                    card.classList.remove('expanded');
                });
                responsibilities.style.display = 'none';
                this.textContent = 'Show Responsibilities';
            }
        });
    });

    // Reveal animations on scroll
    function revealElements() {
        const sections = document.querySelectorAll('section');

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

    // Optional: Header scroll effect
    const header = document.querySelector('header');

    function scrollHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', scrollHeader);
});