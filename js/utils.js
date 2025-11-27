// Funciones Utilitarias
const Utils = {
    /**
     * Crea un elemento de brillo (sparkle) aleatorio
     */
    createSparkle() {
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
    },

    /**
     * Genera brillos aleatorios en intervalos aleatorios
     */
    generateRandomSparkles() {
        // Crear 1-2 brillos
        const count = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.createSparkle(), Math.random() * 1000);
        }

        // Programar el siguiente grupo de brillos en un intervalo aleatorio (3-8 segundos)
        const nextInterval = (Math.random() * 5000) + 3000;
        setTimeout(() => this.generateRandomSparkles(), nextInterval);
    },

    /**
     * Formatea un número como moneda colombiana
     * @param {number} amount - Cantidad a formatear
     * @returns {string} Cantidad formateada
     */
    formatCurrency(amount) {
        return `$${amount.toLocaleString('es-CO')}`;
    },

    /**
     * Obtiene el nombre de la página actual
     * @returns {string} Nombre de la página sin extensión
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop();
        return page.replace('.html', '') || 'index';
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
