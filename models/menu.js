// Model: Datos del Menú — según carta PIEROS PIZZA 25x35.pdf
const MenuModel = {
    categories: [
        {
            id: 'pizzas-tradicionales',
            parentArea: 'pizzas',
            name: '🍕 Pizzas Tradicionales',
            icon: '🍕',
            info: 'Pequeña (8″) · Mediana (12″) · Grande (16″)',
            miniNotice: '🍕 Todas las pizzas MINI (6 porciones) cuestan $28.000',
            showSizeLegend: true,
            image: 'img/pizza_real.png',
            items: [
                { name: 'Bolognesa', description: 'Carne molida, pepperoni y salsa de la casa', prices: { pequena: 36000, mediana: 46000, grande: 67000 } },
                { name: 'Pollo Piña Anchoas', description: 'Mezcla de pollo, piña y anchoas', prices: { pequena: 36000, mediana: 46000, grande: 67000 } },
                { name: 'Pollo Piña', description: 'Pollo con piña', prices: { pequena: 36000, mediana: 46000, grande: 67000 } },
                { name: 'Maíz, Tocineta y Pollo', description: 'Maíz, tocineta y pollo', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones frescos', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Cebolla y Pepperoni', description: 'Cebolla con pepperoni', prices: { pequena: 33000, mediana: 43000, grande: 67000 } },
                { name: 'Salami, Champiñones y Salchicha', description: 'Salami, champiñones y salchicha', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Tomate', description: 'Tomate fresco', prices: { pequena: 35000, mediana: 45000, grande: 65000 } },
                { name: 'Chorizo', description: 'Chorizo y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 65000 } },
                { name: 'Champiñones, Pollo y Anchoas', description: 'Champiñones, pollo y anchoas', prices: { pequena: 37000, mediana: 47000, grande: 70000 } },
                { name: 'Napolitana', description: 'Tomate, mozzarella, anchoas y orégano', prices: { pequena: 37000, mediana: 52000, grande: 72000 } },
                { name: 'Piña y Jamón', description: 'Piña con jamón', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Bocadillo', description: 'Bocadillo guayabo y mozzarella', prices: { pequena: 30000, mediana: 40000, grande: 58000 } },
                { name: 'Vegetariana', description: 'Vegetales frescos selectos', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Hawaiana', description: 'Jamón, piña y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 68000 } },
                { name: 'Jamón', description: 'Jamón y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 68000 } },
                { name: 'Marinera 1', description: 'Pollo, maíz y camarón', prices: { pequena: 35000, mediana: 45000, grande: 70000 } },
                { name: 'Marinera 2', description: 'Pollo, champiñones y camarón', prices: { pequena: 35000, mediana: 45000, grande: 70000 } },
                { name: 'Tocineta, Salami y Pollo', description: 'Tocineta, salami y pollo', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Tomate, Anchoas y Tocineta', description: 'Tomate, anchoas y tocineta', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Chorizo, Tomate y Orégano', description: 'Chorizo, tomate y orégano', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo', description: 'Pollo y mozzarella', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo, Jamón y Champiñones', description: 'Pollo, jamón y champiñones', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo y Chorizo', description: 'Pollo y chorizo', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo, Jamón y Piña', description: 'Pollo, jamón y piña', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Pollo, Jamón y Chorizo', description: 'Pollo, jamón y chorizo', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Romana', description: 'Ajo, anchoas, tomate, champiñones y tocineta', prices: { pequena: 45000, mediana: 55000, grande: 70000 } },
                { name: 'Salami, Champiñones y Tomate', description: 'Salami, champiñones y tomate', prices: { pequena: 38000, mediana: 48000, grande: 70000 } },
                { name: 'Mexicana 1', description: 'Pollo, maíz y camarón', prices: { pequena: 35000, mediana: 45000, grande: 70000 } },
                { name: 'Mexicana 2', description: 'Carne molida, pimentón, cebolla guisada, Doritos y cilantro', prices: { pequena: 35000, mediana: 45000, grande: 70000 } },
                { name: 'Cebolla, Pepperoni y Tomate', description: 'Cebolla, pepperoni y tomate', prices: { pequena: 36000, mediana: 46000, grande: 67000 } },
                { name: 'Pollo, Piña y Tocineta', description: 'Pollo, piña y tocineta', prices: { pequena: 37000, mediana: 47000, grande: 68000 } },
                { name: 'Jamón, Anchoas y Pollo', description: 'Jamón, anchoas y pollo', prices: { pequena: 37000, mediana: 47000, grande: 68000 } }
            ]
        },
        {
            id: 'pizzas-especiales',
            parentArea: 'pizzas',
            name: '⭐ Pizzas Especiales',
            icon: '⭐',
            info: 'Pequeña (8″) · Mediana (12″) · Grande (16″)',
            miniNotice: '🍕 Todas las pizzas MINI (6 porciones) cuestan $28.000',
            showSizeLegend: true,
            items: [
                { name: 'Piero\'s Especial', description: 'Jamón, salchicha, pollo, pepperoni, salami y chorizo', prices: { pequena: 40000, mediana: 50000, grande: 70000 } },
                { name: 'Diputado', description: 'Pimentas, aceitunas verdes, tocineta y cebolla', prices: { pequena: 40000, mediana: 50000, grande: 70000 } },
                { name: 'Alcalde', description: 'Tomate, salami, cebolla, champiñones y anchoas', prices: { pequena: 40000, mediana: 50000, grande: 70000 } },
                { name: 'Tropical', description: 'Anchoas, piña, cerezas y brevas', prices: { pequena: 40000, mediana: 50000, grande: 70000 } },
                { name: 'Piero\'s + Piña', description: 'Especial Piero\'s con piña', prices: { pequena: 43000, mediana: 53000, grande: 73000 } },
                { name: 'Piero\'s + Pimentón', description: 'Especial Piero\'s con pimentón', prices: { pequena: 43000, mediana: 53000, grande: 73000 } },
                { name: 'Piero\'s Super Especial de Verduras', description: 'Carnes, verduras y anchoas', prices: { pequena: 40000, mediana: 50000, grande: 70000 } }
            ]
        },
        {
            id: 'porciones-pizza',
            parentArea: 'pizzas',
            name: '🍰 Porciones de Pizza (1 porción)',
            icon: '🍰',
            info: 'Sabores tradicionales $7.000 · Sabores especiales $8.000',
            items: [
                { name: 'Porción Tradicional', description: 'Sabores comunes del menú', price: 7000 },
                { name: 'Porción Especial', description: 'Sabores especiales del menú', price: 8000 }
            ]
        },
        {
            id: 'lasagna',
            parentArea: 'italiano',
            name: '🍝 Lasagna',
            icon: '🍝',
            image: 'img/lasagna_pollo.png',
            items: [
                { name: 'Lasagna Piero\'s', description: 'Carne bolognesa (especialidad de la casa)', price: 18000 },
                { name: 'Champiñones, Tocineta y Pollo', description: 'Champiñones, tocineta y pollo', price: 20000 }
            ]
        },
        {
            id: 'panzerotti',
            parentArea: 'italiano',
            name: '🥟 Panzerotti',
            icon: '🥟',
            image: 'img/panzerotti_jamon.png',
            items: [
                { name: 'Italiano', description: 'Jamón, tomate, queso y orégano', price: 17000 },
                { name: 'Romano', description: 'Tomate, anchoas, queso y orégano', price: 17000 },
                { name: 'Trifásico', description: 'Pollo, jamón, pepperoni y queso', price: 17000 },
                { name: 'Pollo', description: 'Relleno de pollo', price: 17000 },
                { name: 'Vegetariano', description: 'Tomate, cebolla, pimentón, apio y champiñones', price: 17000 },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones', price: 17000 },
                { name: 'Hawaiano', description: 'Jamón, piña y queso', price: 16000 },
                { name: 'Jamón y Queso', description: 'Jamón y queso mozzarella', price: 15000 }
            ]
        },
        {
            id: 'crepes',
            parentArea: 'italiano',
            name: '🥞 Crepes',
            icon: '🥞',
            info: 'En salsa blanca con queso gratinado',
            items: [
                { name: 'Pollo con Champiñones', description: 'Pollo y champiñones', price: 28000 },
                { name: 'Hawaiano', description: 'Jamón, queso y piña', price: 27000 },
                { name: 'Vegetariano', description: 'Pimenton cebolla brocoli aceituna coliflor y champiñones', price: 27000 },
                { name: 'Pollo, Jamón y Champiñones', description: 'Pollo, jamón y champiñones', price: 28000 },
                { name: 'Lomito de Res', description: 'Lomito de res', price: 28000 },
                { name: 'Mexicano', description: 'Maíz, carne, chorizo picante, cebolla y pimentón', price: 30000 },
                { name: 'Especial', description: 'Camarones, pollo y champiñones', price: 30000 }
            ]
        },
        {
            id: 'cannelloni',
            parentArea: 'italiano',
            name: '🍽️ Cannelloni',
            icon: '🍽️',
            items: [
                { name: 'Cannelloni de Carne y Pollo', price: 28000 },
                { name: 'Cannelloni Florentina', price: 28000 },
                { name: 'Cannelloni Champiñones', price: 28000 },
                { name: 'Cannelloni Champiñones, Tocineta y Pollo', price: 29000 },
                { name: 'Cannelloni de Espinaca y Queso', price: 25000 }
            ]
        },
        {
            id: 'espaguetis',
            parentArea: 'italiano',
            name: '🍝 Espaguetis',
            icon: '🍝',
            items: [
                { name: 'Napolitano', description: 'Salsa napolitana con cuadritos de tomate y mozzarella', price: 18000 },
                { name: 'Al burro', description: 'Mantequilla y queso parmesano', price: 27000 },
                { name: 'Al olio', description: 'Salsa a base de ajo y aceite de oliva', price: 27000 },
                { name: 'Al pesto', description: 'Salsa a base de albahaca en aceite de oliva, ajo y queso parmesano', price: 27000 },
                { name: 'Carbonara', description: 'Huevos batidos con tocineta frita y queso parmesano', price: 27000 },
                { name: 'Bolognesa', description: 'Salsa napolitana, carne molida y queso parmesano', price: 27000 },
                { name: 'Putanesca', description: 'Salsa napolitana, tocineta, ajo, aceitunas negras y queso parmesano', price: 27000 },
                { name: 'Arribialta (Arrabbiata)', description: 'Salsa napolitana, tocineta, ajo, peperoncino picante y albahaca', price: 27000 },
                { name: 'A la divola (Diavola)', description: 'Salsa bolognesa con dos huevos fritos y salsa de ají picante', price: 27000 },
                { name: 'Mediterránea', description: 'Camarones, champiñones y salsa napolitana', price: 27000 }
            ]
        },
        {
            id: 'comida-rapida',
            parentArea: 'italiano',
            name: '🍔 Hamburguesas & Perros',
            icon: '🍔',
            subsections: [
                {
                    title: '🍔 Hamburguesas',
                    info: '🍟 Incluye papas francesas',
                    items: [
                        { name: 'Hamburguesa Piero\'s', description: 'Especialidad de la casa', price: 18000 },
                        { name: 'Hamburguesa Mixta', description: 'Carne y pollo', price: 22000 },
                        { name: 'Hamburguesa Trifásica', description: 'Carne, pollo y cerdo', price: 25000 }
                    ]
                },
                {
                    title: '🌭 Perros Calientes',
                    info: '🍟 Incluye papas francesas · Salchicha adicional $6.000',
                    items: [
                        { name: 'Perro Americano', description: 'Perro caliente estilo americano', price: 18000 },
                        { name: 'Perro Alemán', description: 'Salchicha alemana', price: 20000 }
                    ]
                }
            ]
        }
    ],

    getAllCategories() {
        return this.categories;
    },

    getCategoryById(id) {
        return this.categories.find(cat => cat.id === id);
    },

    getCategoryItems(categoryId) {
        const category = this.getCategoryById(categoryId);
        return category ? category.items : [];
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuModel;
}
