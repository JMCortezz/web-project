 // Show or hide the back-to-top button
 window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTop.classList.add('visible');
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.remove('visible');
        backToTop.classList.add('hidden');
    }
});

// Scroll to the top when the button is clicked
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

