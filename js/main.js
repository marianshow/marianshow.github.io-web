 const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.lightbox-close');

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








    // Seleccionamos tu botón original y el overlay
    const menuBtn = document.querySelector('.menu-btn');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        navOverlay.classList.toggle('active');
        // Evita que la página haga scroll mientras el menú está abierto
        document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : 'auto';
    }

    // Al hacer clic en tu botón de 3 líneas, se abre/cierra el menú
    menuBtn.addEventListener('click', toggleMenu);

    // Cierra el menú automáticamente al hacer clic en cualquier opción
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
