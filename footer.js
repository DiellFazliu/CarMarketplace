document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error("Back-to-top button not found.");
    }
});
