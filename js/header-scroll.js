// Auto-hide header on scroll
let lastScrollTop = 0;
let scrollTimeout;
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Add shrink class when scrolled down
        if (currentScroll > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }

        // Hide/show header based on scroll direction
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down - hide header
            header.classList.add('hidden');
        } else {
            // Scrolling up - show header
            header.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

        // Auto-show header after 2 seconds of no scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            header.classList.remove('hidden');
        }, 2000);
    }, false);
}
