// Component: Botón Volver Arriba
const BackToTop = {
    init() {
        this.createButton();
        this.setupEventListeners();
    },

    createButton() {
        const button = document.createElement('button');
        button.id = 'backToTop';
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(button);
    },

    setupEventListeners() {
        const button = document.getElementById('backToTop');

        // Mostrar/Ocultar al hacer scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });

        // Acción de click
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BackToTop;
}
