// Controller: Estado del Restaurante
const StatusController = {
    updateInterval: null,

    /**
     * Inicializa el controlador de estado
     */
    init() {
        // Verificar estado inicial
        this.updateStatus();

        // Actualizar el estado cada minuto
        this.updateInterval = setInterval(() => {
            this.updateStatus();
        }, 60000); // 60000 ms = 1 minuto
    },

    /**
     * Actualiza el widget de estado
     */
    updateStatus() {
        StatusWidgetView.update();
    },

    /**
     * Detiene las actualizaciones automáticas
     */
    stop() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatusController;
}
