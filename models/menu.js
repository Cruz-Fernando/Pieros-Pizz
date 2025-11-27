// Model: Datos del Menú
const MenuModel = {
    categories: [
        {
            id: 'pizzas',
            name: '🍕 Pizzas',
            icon: '🍕',
            info: 'Disponibles en 3 tamaños: Pequeña | Mediana | Grande',
            image: 'img/pizza_real.png',
            items: [
                { name: 'Napolitana', description: 'Tomate, mozzarella, anchoas y orégano', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Italiana', description: 'Salsa especial con ingredientes italianos', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Romana', description: 'Especialidad romana', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Tricolor', description: 'Tres quesos selectos', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Hawaiana', description: 'Jamón, piña y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Pollo', description: 'Pollo y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Jamón', description: 'Jamón y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones frescos', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Champiñones', description: 'Champiñones frescos y mozzarella', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Vegetariana', description: 'Vegetales frescos selectos', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Pollo con Piñones', description: 'Pollo y piñones', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Salami y Champiñones', description: 'Salami con champiñones', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Anchoas y Champiñones', description: 'Anchoas con champiñones', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Pepperoni y Champiñones', description: 'Pepperoni con champiñones', prices: { pequena: 35000, mediana: 45000, grande: 60000 } },
                { name: 'Especial', description: 'Nuestra pizza especial de la casa', prices: { pequena: 35000, mediana: 45000, grande: 60000 } }
            ],
            subsections: [
                {
                    title: '🍰 Porciones de Pizza',
                    items: [
                        { name: 'Porción Individual', description: 'Cualquier variedad', price: 6000 }
                    ]
                }
            ]
        },
        {
            id: 'lasagna',
            name: '🍝 Lasagna',
            icon: '🍝',
            items: [
                { name: 'Lasagna Piero\'s', description: 'Carne bolognesa (especialidad)', price: 25000 },
                { name: 'Lasagna Italiana', description: 'Receta tradicional italiana', price: 25000 },
                { name: 'Lasagna Napolitana', description: 'Estilo napolitano', price: 27000 },
                { name: 'Lasagna Tricolor', description: 'Tres quesos especiales', price: 27000 },
                { name: 'Lasagna Hawaiana', description: 'Con jamón y piña', price: 27000 },
                { name: 'Lasagna Pollo', description: 'Con pollo desmenuzado', price: 27000 },
                { name: 'Lasagna Jamón', description: 'Con jamón especial', price: 27000 }
            ]
        },
        {
            id: 'espagueti',
            name: '🍝 Espagueti',
            icon: '🍝',
            items: [
                { name: 'Napolitano', description: 'Salsa napolitana tradicional', price: 25000 },
                { name: 'Boloñesa', description: 'Con carne boloñesa', price: 27000 },
                { name: 'Italiana', description: 'Receta italiana clásica', price: 27000 },
                { name: 'Carbonara', description: 'Con crema y tocineta', price: 27000 }
            ]
        },
        {
            id: 'panzerotti',
            name: '🥟 Panzerotti',
            icon: '🥟',
            image: 'img/panzerotti_jamon.png',
            items: [
                { name: 'Italiana', description: 'Relleno italiano tradicional', price: 16000 },
                { name: 'Romano', description: 'Especialidad romana', price: 16000 },
                { name: 'Tricolor', description: 'Tres quesos', price: 18000 },
                { name: 'Hawaiana', description: 'Jamón y piña', price: 18000 },
                { name: 'Pollo y Champiñones', description: 'Pollo con champiñones', price: 18000 },
                { name: 'Jamón', description: 'Jamón y queso', price: 18000 },
                { name: 'Queso', description: 'Queso mozzarella', price: 18000 },
                { name: 'Pollo', description: 'Relleno de pollo', price: 18000 },
                { name: 'Champiñones y Tocineta', description: 'Champiñones con tocineta', price: 18000 }
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
                        { name: 'Cannelloni Champiñones', price: 25000 },
                        { name: 'Cannelloni de Pollo', price: 25000 },
                        { name: 'Cannelloni de Espinaca y Queso', price: 27000 }
                    ]
                },
                {
                    title: 'Ravioli',
                    items: [
                        { name: 'Ravioli de Carne y Queso', price: 25000 },
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
                        { name: 'Hamburguesa Sencilla', price: 16000 },
                        { name: 'Hamburguesa Especial', price: 27000 }
                    ]
                },
                {
                    title: '🌭 Perros',
                    items: [
                        { name: 'Perro Sencillo', price: 14000 }
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
