// Model: Datos del Menú
const MenuModel = {
    categories: [
        {
            id: 'pizzas',
            name: '🍕 Pizzas',
            icon: '🍕',
            info: 'Pequeña (8″) · Mediana (12″) · Grande (16″)',
            miniNotice: '🍕 Todas las pizzas MINI (6 porciones) cuestan $28.000',
            image: 'img/pizza_real.png',
            items: [
                { name: 'Vegetariana', description: 'Pimentón, cebolla, brócoli, aceituna, coliflor y champiñones', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Napolitana', description: 'Tomate, mozzarella, anchoas y orégano', prices: { pequena: 30000, mediana: 40000, grande: 52000 } },
                { name: 'Bocadillo y Piña', description: 'Bocadillo guayabo con piña', prices: { pequena: 30000, mediana: 40000, grande: 52000 } },
                { name: 'Tomate y Anchoas', description: 'Tomate fresco con anchoas', prices: { pequena: 30000, mediana: 40000, grande: 52000 } },
                { name: 'Chorizo', description: 'Chorizo y mozzarella', prices: { pequena: 30000, mediana: 40000, grande: 58000 } },
                { name: 'Maíz y Pollo', description: 'Maíz tierno con pollo', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Salami y Champiñones', description: 'Salami con champiñones frescos', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Cebolla y Pepperoni', description: 'Cebolla con pepperoni', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Jamón y Anchoas', description: 'Jamón con anchoas selectas', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones frescos', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Pollo y Anchoas', description: 'Pollo con anchoas', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Pollo y Bocadillo', description: 'Pollo con bocadillo guayabo', prices: { pequena: 30000, mediana: 40000, grande: 52000 } },
                { name: 'Pollo y Piña', description: 'Pollo con piña', prices: { pequena: 35000, mediana: 45000, grande: 67000 } },
                { name: 'Pollo, Piña y Anchoas', description: 'Pollo, piña y anchoas', prices: { pequena: 36000, mediana: 46000, grande: 67000 } },
                { name: 'Pollo y Aceitunas', description: 'Pollo con aceitunas', prices: { pequena: 37000, mediana: 47000, grande: 67000 } },
                { name: 'Tocineta', description: 'Tocineta crujiente y mozzarella', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Piña y Anchoas', description: 'Piña con anchoas', prices: { pequena: 33000, mediana: 43000, grande: 65000 } },
                { name: 'Champiñones, Pollo y Anchoas', description: 'Champiñones, pollo y anchoas', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Uvas Pasas y Tocineta', description: 'Uvas pasas con tocineta', prices: { pequena: 35000, mediana: 45000, grande: 65000 } },
                { name: 'Tomate, Anchoas y Tocineta', description: 'Tomate, anchoas y tocineta', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Pollo y Chorizo', description: 'Pollo con chorizo', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Jamón y Tocineta', description: 'Jamón con tocineta', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Pollo, Jamón y Piña', description: 'Pollo, jamón y piña', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Pollo, Jamón y Champiñones', description: 'Pollo, jamón y champiñones', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Salami, Champiñones y Salchicha', description: 'Salami, champiñones y salchicha', prices: { pequena: 37000, mediana: 47000, grande: 67000 } },
                { name: 'Anchoas y Champiñones', description: 'Anchoas con champiñones', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Pepperoni y Champiñones', description: 'Pepperoni con champiñones', prices: { pequena: 33000, mediana: 43000, grande: 55000 } },
                { name: 'Maíz y Tocineta', description: 'Maíz tierno con tocineta', prices: { pequena: 37000, mediana: 47000, grande: 65000 } },
                { name: 'Queso', description: 'Queso mozzarella premium', prices: { pequena: 30000, mediana: 40000, grande: 55000 } },
                { name: 'Champiñones', description: 'Champiñones frescos y mozzarella', prices: { pequena: 33000, mediana: 43000, grande: 60000 } },
                { name: 'Jamón', description: 'Jamón y mozzarella', prices: { pequena: 30000, mediana: 40000, grande: 55000 } },
                { name: 'Hawaiana', description: 'Jamón, piña y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 67000 } },
                { name: 'Bocadillo', description: 'Bocadillo guayabo y mozzarella', prices: { pequena: 30000, mediana: 40000, grande: 55000 } }
            ],
            subsections: [
                {
                    title: '🍰 Porciones de Pizza (1 porción)',
                    info: 'Sabores tradicionales $7.000 · Sabores especiales $8.000',
                    items: [
                        { name: 'Porción Tradicional', description: 'Sabores comunes del menú', price: 7000 },
                        { name: 'Porción Especial', description: 'Sabores especiales del menú', price: 8000 }
                    ]
                }
            ]
        },
        {
            id: 'lasagna',
            name: '🍝 Lasagna',
            icon: '🍝',
            items: [
                { name: 'Lasagna Piero\'s', description: 'Boloñesa, jamón, pollo, mozzarella y parmesano (1/2 porción $18.000)', price: 25000 },
                { name: 'Lasagna Italiana', description: 'Bechamel, mozzarella y parmesano (1/2 porción $18.000)', price: 25000 },
                { name: 'Lasagna Pollo y Champiñones', description: 'En salsa blanca (1/2 porción $18.000)', price: 25000 },
                { name: 'Lasagna Champiñones, Tocineta y Pollo', description: 'En salsa blanca (1/2 porción $18.000)', price: 25000 }
            ]
        },
        {
            id: 'espagueti',
            name: '🍝 Espagueti',
            icon: '🍝',
            items: [
                { name: 'Napolitano', description: 'Ajo, salsa de tomate y albahaca', price: 25000 },
                { name: 'Con Champiñones', description: 'Champiñones, mantequilla y parmesano', price: 25000 },
                { name: 'Al Olio', description: 'Salsa a base de ajo y aceite de oliva', price: 25000 },
                { name: 'Boloñesa', description: 'Salsa con carne molida y albahaca', price: 27000 },
                { name: 'Carbonara', description: 'Tocineta frita y queso parmesano', price: 27000 },
                { name: 'Putanesca', description: 'Tomate, tocineta, champiñones, aceituna negra y parmesano', price: 27000 },
                { name: 'Rabiatá', description: 'Tomate, tocineta, picante y parmesano', price: 27000 },
                { name: 'Al Chef', description: 'Tomate, bechamel, champiñones, jamón y parmesano', price: 27000 },
                { name: 'Contadinela', description: 'Napolitana, arveja, zanahoria, perejil y parmesano', price: 27000 },
                { name: 'Al Pesto', description: 'Albahaca, aceite de oliva, ajo y parmesano', price: 27000 },
                { name: 'Melanzana', description: 'Berenjena, champiñones, albahaca, tomate y mozzarella', price: 27000 },
                { name: 'Divola', description: 'Boloñesa con dos huevos fritos y ají picante', price: 27000 },
                { name: 'Mediterránea', description: 'Camarones, champiñones y salsa napolitana', price: 28000 }
            ]
        },
        {
            id: 'panzerotti',
            name: '🥟 Panzerotti',
            icon: '🥟',
            image: 'img/panzerotti_jamon.png',
            items: [
                { name: 'Italiano', description: 'Jamón, tomate, queso y orégano', price: 16000 },
                { name: 'Romano', description: 'Tomate, anchoas, queso y orégano', price: 16000 },
                { name: 'Hawaiano', description: 'Jamón, piña y queso', price: 16000 },
                { name: 'Trifásico', description: 'Pollo, jamón, queso y cebolla', price: 18000 },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones', price: 17000 },
                { name: 'Jamón y Queso', description: 'Jamón y queso mozzarella', price: 15000 }
            ]
        },
        {
            id: 'crepes',
            name: '🥞 Crepes',
            icon: '🥞',
            items: [
                { name: 'Pollo con Champiñones', description: 'Pollo y champiñones en crepe', price: 27000 },
                { name: 'Hawaiano', description: 'Jamón, queso y piña', price: 27000 },
                { name: 'Vegetariano', description: 'Pimentón, cebolla, brócoli, aceituna, coliflor y champiñones', price: 27000 },
                { name: 'Pollo, Jamón y Champiñones', description: 'Tres ingredientes clásicos', price: 28000 },
                { name: 'Lomito de Res', description: 'Lomito de res en crepe', price: 28000 },
                { name: 'Mexicano', description: 'Carne molida, maíz, tocineta, chip de tortilla y picante', price: 30000 },
                { name: 'Especial', description: 'Camarones, pollo y champiñones', price: 30000 }
            ]
        },
        {
            id: 'pasta-rellena',
            name: '🍽️ Cannelloni & Ravioli',
            icon: '🍽️',
            subsections: [
                {
                    title: 'Cannelloni',
                    items: [
                        { name: 'Cannelloni de Carne y Pollo', price: 27000 },
                        { name: 'Cannelloni Florentina', price: 25000 },
                        { name: 'Cannelloni de Pollo y Champiñones', price: 25000 },
                        { name: 'Cannelloni de Champiñones, Tocineta y Pollo', price: 25000 },
                        { name: 'Cannelloni de Espinaca y Queso', price: 27000 }
                    ]
                },
                {
                    title: 'Ravioli',
                    items: [
                        { name: 'Ravioli de Carne', price: 25000 },
                        { name: 'Ravioli de Espinaca y Queso', price: 25000 }
                    ]
                }
            ]
        },
        {
            id: 'comida-rapida',
            name: '🍔 Hamburguesas & Perros',
            icon: '🍔',
            subsections: [
                {
                    title: '🍔 Hamburguesas',
                    items: [
                        { name: 'Hamburguesa Piero\'s', description: 'Verduras, carne, jamón, queso, papas a la francesa y salsas', price: 16000 }
                    ]
                },
                {
                    title: '🌭 Perros',
                    items: [
                        { name: 'Perro Piero\'s', description: 'Salchicha alemana, queso, papitas, papas a la francesa y salsas', price: 14000 }
                    ]
                }
            ]
        }
    ],

    // Métodos para obtener datos
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

// Exportar el modelo para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuModel;
}
