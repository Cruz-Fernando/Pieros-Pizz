# 🍕 Piero's Pizza - Sitio Web

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)](https://www.w3.org/Style/CSS/)
[![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)](https://html.spec.whatwg.org/)

## Futuras Mejoras

- Ser mas responsive
- 

Sitio web oficial de Piero's Pizza - "La mejor pizza de Colombia". Proyecto desarrollado con arquitectura MVC (Model-View-Controller) para garantizar código limpio, modular y fácil de mantener.

## 📋 Descripción

Piero's Pizza es un sitio web moderno y responsive que permite a los clientes:
- Ver el menú completo con más de 60 productos
- Verificar el estado del restaurante (Abierto/Cerrado) en tiempo real
- Realizar pedidos mediante WhatsApp
- Consultar información sobre horarios, ubicación y contacto

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Premium**: Interfaz moderna con gradientes dorados y rojos
- **Animaciones Elegantes**: Brillos (sparkles) aleatorios, pulsos dorados, efectos de hover
- **Totalmente Responsive**: Adaptado para móviles, tablets y desktop
- **Menú Lateral Deslizante**: Navegación intuitiva con efecto slide

### 🛠️ Funcionalidades
- **Widget de Estado**: Indica si el restaurante está abierto o cerrado según horario de Colombia
- **Menú Dinámico**: Acordeones interactivos con categorías de productos
- **Botón WhatsApp**: Enlace directo para hacer pedidos con animación brillante
- **Sistema de Precios**: Precios múltiples (S/M/L) para pizzas, precios únicos para otros items

### 🏗️ Arquitectura
- **Patrón MVC**: Separación clara entre datos, presentación y lógica
- **Código Modular**: 15 archivos organizados por responsabilidad
- **CSS Modular**: Variables CSS, estilos componentizados
- **Componentes Reutilizables**: Sidebar, widgets, acordeones generados dinámicamente

## 🗂️ Estructura del Proyecto

```
Piero's_Pizza/
├── 📁 models/                      # Capa de Datos (Model)
│   ├── menu.js                    # Datos del menú (6 categorías, 60+ items)
│   └── restaurant.js              # Info del restaurante, horarios, contacto
│
├── 📁 views/                       # Capa de Presentación (View)
│   ├── 📁 components/             # Componentes reutilizables
│   │   ├── sidebar.js            # Menú lateral de navegación
│   │   ├── statusWidget.js       # Widget Abierto/Cerrado
│   │   └── menuAccordion.js      # Acordeones del menú
│   └── 📁 pages/                  # Vistas de páginas
│       ├── home.js               # Vista de inicio
│       └── menu.js               # Vista del menú
│
├── 📁 controllers/                 # Capa de Lógica (Controller)
│   ├── navigationController.js   # Control de navegación y menú móvil
│   ├── menuController.js         # Control de acordeones
│   └── statusController.js       # Control de estado y horarios
│
├── 📁 styles/                      # Estilos CSS Modulares
│   ├── main.css                  # Estilos base, variables, animaciones
│   ├── components.css            # Estilos de componentes
│   └── responsive.css            # Media queries para responsive
│
├── 📁 js/                          # JavaScript Principal
│   ├── app.js                    # Punto de entrada, inicializa la app
│   └── utils.js                  # Funciones utilitarias (sparkles, formato)
│
├── 📁 img/                         # Imágenes y recursos
│   ├── logo.png
│   ├── pizza_real.png
│   └── panzerotti_jamon.png
│
├── 📄 index.html                   # Página de inicio
├── 📄 menu.html                    # Página del menú
├── 📄 contacto.html                # Página de contacto
├── 📄 nosotros.html                # Página "Quiénes Somos"
├── 📄 horarios.html                # Página de horarios
├── 📄 ubicacion.html               # Página de ubicación
│
└── 📄 README.md                    # Este archivo
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir Directamente (Recomendado para Desarrollo)

1. **Simplemente abre** `index.html` en tu navegador favorito:
   ```
   Doble clic en index.html
   ```

2. **O arrastra** el archivo `index.html` a tu navegador

### Opción 2: Con Live Server (Recomendado para Testing)

Si usas VS Code:

1. Instala la extensión **Live Server**
2. Click derecho en `index.html`
3. Selecciona **"Open with Live Server"**
4. El sitio se abrirá en `http://localhost:5500`

### Opción 3: Con HTTP Server Simple

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx http-server -p 8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos, animaciones, gradientes |
| **JavaScript ES6** | Lógica, MVC, manipulación del DOM |
| **SVG** | Ícono de WhatsApp |
| **LocaleString API** | Formato de precios en pesos colombianos |
| **Date API** | Verificación de horarios con zona horaria |

## 🏛️ Arquitectura MVC

### Model (Datos)
Los modelos gestionan todos los datos de la aplicación:
- **MenuModel**: Categorías, items, precios, descripciones
- **RestaurantModel**: Horarios, contacto, métodos de verificación

### View (Presentación)
Las vistas renderizan HTML dinámicamente:
- **Componentes**: Sidebar, StatusWidget, MenuAccordion
- **Páginas**: HomeView, MenuPageView

### Controller (Lógica)
Los controladores manejan la interacción usuario-aplicación:
- **NavigationController**: Toggle menú, overlay, eventos móvil
- **MenuController**: Expansión/colapso de acordeones
- **StatusController**: Actualización automática del estado

### Flujo de Datos

```
Usuario → Controller → Model → View → DOM
         ↑                              ↓
         └──────── Event Listeners ─────┘
```

## 📱 Responsive Design

El sitio se adapta a diferentes tamaños de pantalla:

- **📱 Móvil** (≤ 768px): Menú hamburguesa, layout vertical
- **📱 Tablet** (769px - 1024px): Grid 2 columnas
- **💻 Desktop** (> 1024px): Layout completo
- **🖥️ Desktop XL** (> 1400px): Contenido centrado con max-width

## 🎯 Próximos Pasos Recomendados

Ahora que el proyecto tiene una arquitectura sólida MVC, se puede:

### 📈 Mejoras de Funcionalidad
1. **Agregar más páginas dinámicamente** usando los componentes existentes
2. **Implementar un carrito de compras** siguiendo el patrón MVC
3. **Agregar filtros al menú** (por precio, categoría, popularidad)
4. **Sistema de búsqueda** para encontrar productos rápidamente
5. **Galería de imágenes** con lightbox para cada producto

### 🛒 E-commerce
6. **Crear un sistema de pedidos integrado** con WhatsApp Web API
7. **Formulario de pedidos** con selección de productos y cantidades
8. **Calculadora de total** con precios dinámicos
9. **Validación de pedidos** antes de enviar por WhatsApp
10. **Historial de pedidos** guardado en LocalStorage

### 🎨 Mejoras de UX/UI
11. **Modo Oscuro/Claro** con toggle persistente
12. **Animaciones de entrada** con Intersection Observer
13. **Loading states** para mejor feedback visual
14. **Toast notifications** para acciones del usuario
15. **Agregar reviews/testimonios** de clientes

### 🔧 Optimizaciones Técnicas
16. **Lazy loading** de imágenes para mejor performance
17. **Service Worker** para funcionalidad offline
18. **Minificación** de CSS y JavaScript
19. **Optimización de imágenes** (WebP, compresión)
20. **SEO mejorado** con meta tags y Open Graph

### 🚀 Escalabilidad
21. **Migrar a un framework** (React, Vue, Svelte) manteniendo la estructura MVC
22. **Implementar TypeScript** para type safety
23. **Sistema de build** con Webpack o Vite
24. **Testing** con Jest o Vitest
25. **Backend con Node.js/Express** para gestión de pedidos real

### 📊 Analytics y Marketing
26. **Google Analytics** para tracking de visitantes
27. **Facebook Pixel** para remarketing
28. **Newsletter** con suscripción por email
29. **Cupones de descuento** dinámicos
30. **Programa de lealtad** con puntos

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles/main.css`:

```css
:root {
    --color-primary: #ff6b6b;        /* Color principal (rojo) */
    --color-secondary: #1a472a;      /* Color secundario (verde) */
    --color-gold: #DAA520;           /* Color dorado */
    --color-whatsapp: #25D366;       /* Color WhatsApp */
}
```

### Modificar el Menú

Edita `models/menu.js`:

```javascript
{
    name: 'Nueva Pizza',
    description: 'Deliciosa pizza nueva',
    prices: { 
        pequena: 35000, 
        mediana: 45000, 
        grande: 60000 
    }
}
```

### Actualizar Horarios

Edita `models/restaurant.js`:

```javascript
schedule: {
    openingHour: 17,  // 5:00 PM
    closingHour: 22,  // 10:00 PM
    timezone: "America/Bogota"
}
```

## 📞 Información de Contacto

- **WhatsApp**: +57 3046327574
- **Horario**: Lunes a Domingo, 5:00 PM - 10:00 PM
- **Ubicación**: Colombia

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollo

### Estructura de Commits Recomendada

```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato, punto y coma faltantes, etc
refactor: refactorización del código
test: agregar tests
chore: actualizar dependencias
```

### Convenciones de Código

- **JavaScript**: ES6+, camelCase para variables/funciones
- **CSS**: BEM naming, variables CSS para colores
- **HTML**: Semántico, atributos en español
- **Archivos**: lowercase con guiones bajos

## 🤝 Contribución

¿Quieres contribuir al proyecto? ¡Genial!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🙏 Agradecimientos

- Diseño inspirado en las mejores pizzerías italianas
- Iconos de emoji nativos para mejor compatibilidad
- Paleta de colores basada en los colores tradicionales italiano

## 📚 Recursos Adicionales

- [Documentación de MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript ES6 Features](https://github.com/lukehoban/es6features)
- [Responsive Web Design](https://web.dev/responsive-web-design-basics/)

---

**Desarrollado con ❤️ y 🍕 - Piero's Pizza © 2025**
