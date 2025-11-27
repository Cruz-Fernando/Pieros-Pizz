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

// Función para crear brillos aleatorios
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Posición aleatoria en la pantalla
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    document.body.appendChild(sparkle);

    // Eliminar el brillo después de la animación
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Generar brillos aleatorios en intervalos aleatorios
function generateRandomSparkles() {
    // Crear 1-2 brillos
    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
        setTimeout(() => createSparkle(), Math.random() * 1000);
    }

    // Programar el siguiente grupo de brillos en un intervalo aleatorio (3-8 segundos)
    const nextInterval = (Math.random() * 5000) + 3000;
    setTimeout(generateRandomSparkles, nextInterval);
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

    // Iniciar generación de brillos aleatorios
    generateRandomSparkles();
});