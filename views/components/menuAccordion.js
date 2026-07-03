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
     * Obtiene el título limpio de una categoría (sin emoji)
     * @param {Object} category
     * @returns {string}
     */
    getCategoryTitle(category) {
        return category.name.replace(category.icon, '').trim();
    },

    /**
     * Cuenta los items de una categoría
     * @param {Object} category
     * @returns {number}
     */
    countItems(category) {
        let count = category.items ? category.items.length : 0;
        if (category.subsections) {
            category.subsections.forEach(sub => {
                count += sub.items ? sub.items.length : 0;
            });
        }
        return count;
    },

    /**
     * Renderiza una categoría completa con acordeón
     * @param {Object} category - Objeto de categoría del menú
     * @returns {string} HTML de la categoría
     */
    renderCategory(category) {
        return `
            <div class="menu-accordion" id="accordion-${category.id}">
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
        const title = this.getCategoryTitle(category);
        const count = this.countItems(category);

        return `
            <button class="accordion-header" onclick="MenuController.toggleAccordion('${category.id}')" aria-expanded="false">
                <div class="accordion-header__main">
                    <span class="accordion-header__icon">${category.icon}</span>
                    <div class="accordion-header__text">
                        <span class="accordion-header__title">${title}</span>
                        <span class="accordion-header__meta">${count} ${count === 1 ? 'opción' : 'opciones'}</span>
                    </div>
                </div>
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
        let content = `<div class="accordion-content" id="${category.id}">`;

        const hasNotices = category.miniNotice || category.info;
        if (hasNotices) {
            content += '<div class="menu-notices">';
            if (category.miniNotice) {
                content += `<p class="mini-notice">${category.miniNotice}</p>`;
            }
            if (category.info) {
                const infoClass = category.showSizeLegend ? 'size-info' : 'category-notice';
                content += `<p class="${infoClass}">${category.info}</p>`;
                if (category.showSizeLegend) {
                    content += `
                        <div class="size-legend">
                            <span class="legend-item legend-pequena">Pequeña (8″)</span>
                            <span class="legend-item legend-mediana">Mediana (12″)</span>
                            <span class="legend-item legend-grande">Grande (16″)</span>
                        </div>
                    `;
                }
            }
            content += '</div>';
        }

        if (category.image) {
            content += `
                <div class="category-showcase">
                    <img src="${category.image}" alt="${this.getCategoryTitle(category)}" loading="lazy">
                </div>
            `;
        }

        if (category.items && category.items.length > 0) {
            content += '<div class="menu-items-grid">';
            content += category.items.map(item => this.renderMenuItem(item)).join('\n');
            content += '</div>';
        }

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
            <article class="menu-item">
                <h3>${item.name}</h3>
        `;

        if (item.description) {
            itemHTML += `<p>${item.description}</p>`;
        }

        if (item.prices) {
            itemHTML += '<div class="price-grid">';
            if (item.prices.pequena) {
                itemHTML += `
                    <div class="price-cell price-pequena">
                        <span class="price-size">Pequeña</span>
                        <span class="price-inch">8″</span>
                        <span class="price-value">${item.prices.pequena.toLocaleString('es-CO')}</span>
                    </div>`;
            }
            if (item.prices.mediana) {
                itemHTML += `
                    <div class="price-cell price-mediana">
                        <span class="price-size">Mediana</span>
                        <span class="price-inch">12″</span>
                        <span class="price-value">${item.prices.mediana.toLocaleString('es-CO')}</span>
                    </div>`;
            }
            if (item.prices.grande) {
                itemHTML += `
                    <div class="price-cell price-grande">
                        <span class="price-size">Grande</span>
                        <span class="price-inch">16″</span>
                        <span class="price-value">${item.prices.grande.toLocaleString('es-CO')}</span>
                    </div>`;
            }
            itemHTML += '</div>';
        } else if (item.price) {
            itemHTML += `<div class="price-single">${item.price.toLocaleString('es-CO')}</div>`;
        }

        itemHTML += '</article>';
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

        if (subsection.info) {
            html += `<p class="portion-notice">${subsection.info}</p>`;
        }

        html += '<div class="menu-items-grid">';
        html += subsection.items.map(item => this.renderMenuItem(item)).join('\n');
        html += '</div></div>';

        return html;
    },

    /**
     * Renderiza la navegación rápida por categorías
     * @returns {string} HTML de la nav
     */
    renderQuickNav() {
        const categories = MenuModel.getAllCategories();
        return categories.map(category => {
            const title = this.getCategoryTitle(category);
            return `<button class="menu-quick-nav__btn" onclick="MenuController.jumpToCategory('${category.id}')">${category.icon} ${title}</button>`;
        }).join('\n');
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuAccordionView;
}
