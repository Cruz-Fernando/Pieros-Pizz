// Controller: Navegación
const NavigationController = {
    /**
     * Inicializa el controlador de navegación
     */
    init() {
        this.setupEventListeners();
    },

    /**
     * Configura los event listeners
     */
    setupEventListeners() {
        // Event listeners para los enlaces de navegación en móvil
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Cerrar el menú en dispositivos móviles
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });
    },

    /**
     * Alterna el menú lateral (abrir/cerrar)
     */
    toggleMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        const menuButton = document.querySelector('.menu-toggle');

        if (!sidebar || !overlay || !menuButton) return;

        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Ocultar/mostrar el botón de menú
        if (sidebar.classList.contains('active')) {
            menuButton.classList.add('hidden');
        } else {
            menuButton.classList.remove('hidden');
        }
    },

    /**
     * Cierra el menú lateral
     */
    closeMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        const menuButton = document.querySelector('.menu-toggle');

        if (!sidebar || !overlay || !menuButton) return;

        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuButton.classList.remove('hidden');
    },

    /**
     * Abre el menú lateral
     */
    openMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        const menuButton = document.querySelector('.menu-toggle');

        if (!sidebar || !overlay || !menuButton) return;

        sidebar.classList.add('active');
        overlay.classList.add('active');
        menuButton.classList.add('hidden');
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationController;
}
