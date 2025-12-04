// Splash Screen Controller

document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.querySelector('.splash-screen');

    if (splashScreen) {
        // Esperar a que termine la animación del logo (2.5s) más un pequeño delay
        setTimeout(function () {
            splashScreen.classList.add('fade-out');

            // Remover el splash screen del DOM después del fade out
            setTimeout(function () {
                splashScreen.remove();
                // Permitir scroll en el body
                document.body.style.overflow = '';
            }, 500); // Duración del fade out
        }, 2500); // Duración de la animación del logo
    }
});
