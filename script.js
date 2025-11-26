// Función para alternar el menú lateral en móvil
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Cerrar el menú al hacer clic en un enlace (móvil)
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');

            // Cerrar el menú en dispositivos móviles
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
});