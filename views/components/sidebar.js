// View Component: Sidebar (Menú Lateral)
const SidebarView = {
    /**
     * Renderiza el sidebar completo
     * @param {string} currentPage - Página actual para marcar el enlace activo
     * @returns {string} HTML del sidebar
     */
    render(currentPage = 'index') {
        return `
            <aside class="sidebar">
                ${this.renderHeader()}
                ${this.renderNav(currentPage)}
            </aside>
        `;
    },

    /**
     * Renderiza el header del sidebar con logo
     * @returns {string} HTML del header
     */
    renderHeader() {
        return `
            <div class="sidebar-header">
                <img src="${RestaurantModel.logo}" alt="${RestaurantModel.name} Logo"
                    style="width: 100%; max-width: 200px; margin-bottom: 10px;">
                <p>${RestaurantModel.slogan}</p>
            </div>
        `;
    },

    /**
     * Renderiza la navegación del sidebar
     * @param {string} currentPage - Página actual
     * @returns {string} HTML de la navegación
     */
    renderNav(currentPage) {
        const navItems = [
            { page: 'index', icon: '🏠', label: 'Inicio' },
            { page: 'menu', icon: '📋', label: 'Menú' },
            { page: 'contacto', icon: '📞', label: 'Contáctanos' },
            { page: 'nosotros', icon: '👥', label: 'Quiénes Somos' },
            { page: 'horarios', icon: '🕐', label: 'Horarios' },
            { page: 'ubicacion', icon: '📍', label: 'Ubicación' }
        ];

        const navItemsHTML = navItems.map(item => {
            const activeClass = currentPage === item.page ? ' active' : '';
            return `<li><a href="${item.page}.html" class="nav-link${activeClass}">${item.icon} ${item.label}</a></li>`;
        }).join('\n                ');

        return `
            <nav>
                <ul>
                    ${navItemsHTML}
                </ul>
            </nav>
        `;
    },

    /**
     * Renderiza el botón de toggle del menú móvil
     * @returns {string} HTML del botón
     */
    renderMenuToggle() {
        return `<button class="menu-toggle" onclick="NavigationController.toggleMenu()">☰ Menú</button>`;
    },

    /**
     * Renderiza el overlay para móvil
     * @returns {string} HTML del overlay
     */
    renderOverlay() {
        return `<div class="overlay" onclick="NavigationController.toggleMenu()"></div>`;
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SidebarView;
}
