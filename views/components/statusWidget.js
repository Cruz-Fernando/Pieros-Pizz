// View Component: Status Widget (Widget de Estado Abierto/Cerrado)
const StatusWidgetView = {
    /**
     * Renderiza el widget de estado completo
     * @returns {string} HTML del widget
     */
    render() {
        const status = RestaurantModel.getStatus();

        return `
            <div class="status-widget" id="statusWidget">
                <h3>Horario de Atención</h3>
                ${this.renderIndicator(status)}
                <p class="status-hours">${RestaurantModel.schedule.displayText}</p>
            </div>
        `;
    },

    /**
     * Renderiza el indicador de estado
     * @param {Object} status - Objeto con información del estado
     * @returns {string} HTML del indicador
     */
    renderIndicator(status) {
        return `
            <div class="status-indicator ${status.statusClass}" id="statusIndicator">
                <span class="status-icon" id="statusIcon">${status.statusIcon}</span>
                <span class="status-text" id="statusText">${status.statusText}</span>
            </div>
        `;
    },

    /**
     * Actualiza el widget de estado (sin re-renderizar todo)
     */
    update() {
        const status = RestaurantModel.getStatus();
        const indicator = document.getElementById('statusIndicator');
        const icon = document.getElementById('statusIcon');
        const text = document.getElementById('statusText');

        if (indicator && icon && text) {
            // Remover clases anteriores
            indicator.classList.remove('open', 'closed');

            // Agregar nueva clase
            indicator.classList.add(status.statusClass);

            // Actualizar contenido
            icon.textContent = status.statusIcon;
            text.textContent = status.statusText;
        }
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatusWidgetView;
}
