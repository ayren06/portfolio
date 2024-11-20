
// Smooth scroll and active link highlighting
const navlinks = document.querySelectorAll('.navlinks li a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Check which section is in the viewport
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navlinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Add active class to the corresponding link
    const activeLink = document.querySelector('.navlinks li a[href="#${currentSection}"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

