document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPagePath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPagePath || (currentPagePath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});


