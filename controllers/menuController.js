// Controller: Menú de Productos
const MenuController = {
    /**
     * Inicializa el controlador del menú
     */
    init() {
        // No requiere configuración inicial adicional
        // Los métodos se llaman directamente desde los eventos onclick
    },

    /**
     * Alterna un acordeón del menú
     * @param {string} id - ID del acordeón a alternar
     */
    toggleAccordion(id) {
        const content = document.getElementById(id);
        if (!content) return;

        const allContents = document.querySelectorAll('.accordion-content');
        const allHeaders = document.querySelectorAll('.accordion-header');

        // Cerrar todos los demás acordeones
        allContents.forEach(item => {
            if (item.id !== id) {
                item.classList.remove('active');
            }
        });

        allHeaders.forEach(header => {
            if (!header.nextElementSibling || header.nextElementSibling.id !== id) {
                header.classList.remove('active');
            }
        });

        // Toggle el acordeón actual
        content.classList.toggle('active');
        content.previousElementSibling.classList.toggle('active');
    },

    /**
     * Abre un acordeón específico
     * @param {string} id - ID del acordeón a abrir
     */
    openAccordion(id) {
        const content = document.getElementById(id);
        if (!content) return;

        // Cerrar todos los demás primero
        this.closeAllAccordions();

        // Abrir el seleccionado
        content.classList.add('active');
        content.previousElementSibling.classList.add('active');
    },

    /**
     * Cierra todos los acordeones
     */
    closeAllAccordions() {
        const allContents = document.querySelectorAll('.accordion-content');
        const allHeaders = document.querySelectorAll('.accordion-header');

        allContents.forEach(item => item.classList.remove('active'));
        allHeaders.forEach(header => header.classList.remove('active'));
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuController;
}
