// Función para alternar el menú lateral en móvil
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuButton = document.querySelector('.menu-toggle');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    // Ocultar/mostrar el botón de menú
    if (sidebar.classList.contains('active')) {
        menuButton.classList.add('hidden');
    } else {
        menuButton.classList.remove('hidden');
    }
}

// Función para verificar si el restaurante está abierto
function checkRestaurantStatus() {
    // Obtener hora actual en Colombia (UTC-5)
    const now = new Date();
    const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

    const currentHour = colombiaTime.getHours();
    const currentMinute = colombiaTime.getMinutes();

    // Horario: 5:00 PM (17:00) - 10:00 PM (22:00) todos los días
    const openingHour = 17; // 5 PM
    const closingHour = 22; // 10 PM

    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const openingTimeInMinutes = openingHour * 60;
    const closingTimeInMinutes = closingHour * 60;

    const isOpen = currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes;

    // Actualizar el DOM
    const statusIndicator = document.getElementById('statusIndicator');
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');

    if (statusIndicator && statusIcon && statusText) {
        if (isOpen) {
            statusIndicator.classList.remove('closed');
            statusIndicator.classList.add('open');
            statusIcon.textContent = '✔';
            statusText.textContent = 'Abierto Ahora';
        } else {
            statusIndicator.classList.remove('open');
            statusIndicator.classList.add('closed');
            statusIcon.textContent = '✘';
            statusText.textContent = 'Cerrado';
        }
    }
}

// Cerrar el menú al hacer clic en un enlace (móvil)
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            const menuButton = document.querySelector('.menu-toggle');

            // Cerrar el menú en dispositivos móviles
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                menuButton.classList.remove('hidden');
            }
        });
    });

    // Verificar estado del restaurante al cargar la página
    checkRestaurantStatus();

    // Actualizar el estado cada minuto
    setInterval(checkRestaurantStatus, 60000); // 60000 ms = 1 minuto
});