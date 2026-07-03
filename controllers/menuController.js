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
                header.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle el acordeón actual
        const header = content.previousElementSibling;
        const isOpen = content.classList.toggle('active');
        header.classList.toggle('active');
        header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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
        const header = content.previousElementSibling;
        content.classList.add('active');
        header.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
    },

    /**
     * Cierra todos los acordeones
     */
    closeAllAccordions() {
        const allContents = document.querySelectorAll('.accordion-content');
        const allHeaders = document.querySelectorAll('.accordion-header');

        allContents.forEach(item => item.classList.remove('active'));
        allHeaders.forEach(header => {
            header.classList.remove('active');
            header.setAttribute('aria-expanded', 'false');
        });
    },

    /**
     * Abre una categoría y hace scroll suave hasta ella
     * @param {string} id - ID de la categoría
     */
    jumpToCategory(id) {
        this.openAccordion(id);

        const accordion = document.getElementById(`accordion-${id}`);
        if (accordion) {
            setTimeout(() => {
                accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuController;
}
