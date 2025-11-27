// View Component: Menu Accordion (Acordeón del Menú)
const MenuAccordionView = {
    /**
     * Renderiza todos los acordeones del menú
     * @returns {string} HTML de todos los acordeones
     */
    renderAll() {
        const categories = MenuModel.getAllCategories();
        return categories.map(category => this.renderCategory(category)).join('\n\n');
    },

    /**
     * Renderiza una categoría completa con acordeón
     * @param {Object} category - Objeto de categoría del menú
     * @returns {string} HTML de la categoría
     */
    renderCategory(category) {
        return `
            <div class="menu-accordion">
                ${this.renderHeader(category)}
                ${this.renderContent(category)}
            </div>
        `;
    },

    /**
     * Renderiza el header del acordeón
     * @param {Object} category - Objeto de categoría
     * @returns {string} HTML del header
     */
    renderHeader(category) {
        return `
            <button class="accordion-header" onclick="MenuController.toggleAccordion('${category.id}')">
                <span>${category.name}</span>
                <span class="accordion-icon">▼</span>
            </button>
        `;
    },

    /**
     * Renderiza el contenido del acordeón
     * @param {Object} category - Objeto de categoría
     * @returns {string} HTML del contenido
     */
    renderContent(category) {
        let content = `
            <div class="accordion-content" id="${category.id}">
                <div style="text-align: center; margin-bottom: 15px;">
                    <img src="${RestaurantModel.logo}" alt="Logo" style="max-width: 120px; opacity: 0.9;">
                </div>
        `;

        // Info de tamaños si existe
        if (category.info) {
            content += `<p class="size-info">${category.info}</p>`;
        }

        // Imagen de categoría si existe
        if (category.image) {
            content += `
                <div style="text-align: center; margin: 20px 0;">
                    <img src="${category.image}" alt="${category.name}" style="max-width: 300px; border-radius: 10px;">
                </div>
            `;
        }

        // Items principales
        if (category.items && category.items.length > 0) {
            content += '<div class="menu-items-grid">';
            content += category.items.map(item => this.renderMenuItem(item)).join('\n');
            content += '</div>';
        }

        // Subsecciones si existen
        if (category.subsections && category.subsections.length > 0) {
            content += category.subsections.map(subsection => this.renderSubsection(subsection)).join('\n');
        }

        content += '</div>';
        return content;
    },

    /**
     * Renderiza un item del menú
     * @param {Object} item - Objeto del item
     * @returns {string} HTML del item
     */
    renderMenuItem(item) {
        let itemHTML = `
            <div class="menu-item">
                <h3>${item.name}</h3>
        `;

        if (item.description) {
            itemHTML += `<p>${item.description}</p>`;
        }

        // Precios múltiples (para pizzas)
        if (item.prices) {
            itemHTML += '<div class="prices">';
            if (item.prices.pequena) itemHTML += `<span>Pequeña: $${item.prices.pequena.toLocaleString('es-CO')}</span>`;
            if (item.prices.mediana) itemHTML += `<span>Mediana: $${item.prices.mediana.toLocaleString('es-CO')}</span>`;
            if (item.prices.grande) itemHTML += `<span>Grande: $${item.prices.grande.toLocaleString('es-CO')}</span>`;
            itemHTML += '</div>';
        }
        // Precio único
        else if (item.price) {
            itemHTML += `<div class="price-single">$${item.price.toLocaleString('es-CO')}</div>`;
        }

        itemHTML += '</div>';
        return itemHTML;
    },

    /**
     * Renderiza una subsección del menú
     * @param {Object} subsection - Objeto de subsección
     * @returns {string} HTML de la subsección
     */
    renderSubsection(subsection) {
        let html = '<div class="menu-subsection">';

        if (subsection.title) {
            html += `<h4>${subsection.title}</h4>`;
        }

        html += '<div class="menu-items-grid">';
        html += subsection.items.map(item => this.renderMenuItem(item)).join('\n');
        html += '</div></div>';

        return html;
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuAccordionView;
}
