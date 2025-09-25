document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPagePath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if it's the homepage or another page
        if (linkPath === currentPagePath || (currentPagePath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});

