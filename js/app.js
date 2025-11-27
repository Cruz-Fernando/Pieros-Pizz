// Aplicación Principal - Punto de Entrada MVC
const App = {
    /**
     * Inicializa la aplicación
     */
    init() {
        // Esperar a que el DOM esté completamente cargado
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeControllers();
            this.initializeEffects();
        });
    },

    /**
     * Inicializa todos los controladores
     */
    initializeControllers() {
        // Inicializar controlador de navegación
        NavigationController.init();

        // Inicializar controlador de estado (solo si existe el widget en la página)
        if (document.getElementById('statusWidget')) {
            StatusController.init();
        }

        // Inicializar controlador de menú (solo si existen acordeones en la página)
        if (document.querySelector('.accordion-header')) {
            MenuController.init();
        }
    },

    /**
     * Inicializa efectos visuales
     */
    initializeEffects() {
        // Iniciar generación de brillos aleatorios
        Utils.generateRandomSparkles();
    }
};

// Inicializar la aplicación
App.init();
