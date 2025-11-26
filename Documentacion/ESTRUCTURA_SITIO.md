# Estructura del Sitio Web - Piero's Pizza

## ✅ Cambios Realizados

El sitio web ha sido refactorizado de una **aplicación de página única (SPA)** a **múltiples páginas HTML** para mejor organización y mantenimiento.

## 📁 Archivos HTML

| Archivo | Descripción | URL |
|---------|-------------|-----|
| `index.html` | Página de inicio con bienvenida y llamado a la acción | `/` |
| `menu.html` | Menú completo (pizzas, porciones, panzerottis, lasagnas) | `/menu.html` |
| `contacto.html` | Información de contacto (teléfono, email, redes sociales) | `/contacto.html` |
| `nosotros.html` | Historia y valores de la empresa | `/nosotros.html` |
| `horarios.html` | Horarios de atención y servicios | `/horarios.html` |
| `ubicacion.html` | Dirección, mapa de Google Maps y botón para navegación | `/ubicacion.html` |

## 🎨 Archivos de Recursos

- **styles.css**: Estilos globales (se aplican a todas las páginas)
- **script.js**: JavaScript para menú móvil hamburguesa
- **img/**: Carpeta con todas las imágenes (logo, pizzas, etc.)

## 🔧 Funcionalidades

### Navegación
- **Desktop**: Sidebar fijo siempre visible a la izquierda
- **Mobile**: Menú hamburguesa que se despliega al hacer clic

### Características Especiales
- ✅ Widget de Google Maps integrado en la página de ubicación
- ✅ Botón "Abrir en Google Maps" para navegación directa
- ✅ Diseño responsive para todos los dispositivos
- ✅ Animaciones suaves y efectos hover
- ✅ CTA (Call-to-Action) con número de teléfono destacado

## 🚀 Cómo Navegar el Sitio

1. Abre `index.html` en tu navegador
2. Usa el menú lateral para navegar entre páginas
3. En móvil, haz clic en "☰ Menú" para abrir/cerrar el menú

## 📱 Responsive Design

- Desktop (>768px): Sidebar visible, contenido centrado
- Mobile (≤768px): Menú hamburguesa, contenido a pantalla completa

## 🔗 Navegación Entre Páginas

Cada página tiene el mismo sidebar con enlaces a:
- 🏠 Inicio
- 📋 Menú
- 📞 Contáctanos
- 👥 Quiénes Somos
- 🕐 Horarios
- 📍 Ubicación

## ✨ Próximos Pasos (Opcional)

- [ ] Agregar animaciones de transición entre páginas
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar sistema de pedidos online
- [ ] Integrar galería de fotos
