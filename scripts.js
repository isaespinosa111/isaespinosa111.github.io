// scripts.js

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
    });
});

// Add zoom effect on image hover
const photoPlaceholders = document.querySelectorAll('.photo-placeholder');

photoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('mouseover', () => {
        placeholder.style.transform = 'scale(1.05)';
        placeholder.style.transition = 'transform 0.3s ease';
    });

    placeholder.addEventListener('mouseout', () => {
        placeholder.style.transform = 'scale(1)';
    });
});

// Placeholder for additional functionality
console.log("Website scripts loaded. Add interactivity as needed.");
