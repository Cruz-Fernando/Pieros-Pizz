// View: Página de Menú
const MenuPageView = {
    /**
     * Renderiza el contenido completo de la página del menú
     * @returns {string} HTML de la página
     */
    render() {
        return `
            <section class="content-section active">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${RestaurantModel.logo}" alt="${RestaurantModel.name} Logo" style="max-width: 200px; margin-bottom: 10px;">
                </div>
                <h1>Nuestro Menú</h1>
                <p style="text-align: center; color: #666; margin-bottom: 30px;">Haz clic en cada categoría para ver nuestros productos</p>

                ${MenuAccordionView.renderAll()}
            </section>
        `;
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuPageView;
}
