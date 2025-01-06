document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error("Back-to-top button not found.");
    }
});
