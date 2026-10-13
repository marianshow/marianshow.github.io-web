document.addEventListener("DOMContentLoaded", () => {
    // --- LIGHTBOX ---
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (modal && modalImg && closeBtn) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = img.src;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target !== modalImg) {
                modal.style.display = 'none';
            }
        });
    }

    // --- MENÚ RESPONSIVE / OVERLAY ---
    const menuBtn = document.querySelector('.menu-btn');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && navOverlay) {
        function toggleMenu() {
            menuBtn.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : 'auto';
        }

        menuBtn.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navOverlay.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
});