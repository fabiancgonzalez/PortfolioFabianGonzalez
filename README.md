# 🚀 Portfolio Profesional - Fabián González

Portfolio moderno y responsivo desarrollado con HTML5, CSS3 y JavaScript vanilla. Diseñado para mostrar habilidades, proyectos y certificaciones como Desarrollador Full Stack.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsivo**: Adaptado para todos los dispositivos (móvil, tablet, desktop)
- 🍔 **Menú Hamburguesa**: Navegación móvil intuitiva
- 🎯 **Scroll Suave**: Navegación fluida entre secciones
- 🌟 **Animaciones CSS**: Efectos visuales atractivos
- 🎭 **Intersection Observer**: Animaciones al hacer scroll
- ⚡ **Optimizado**: Código limpio y rendimiento optimizado
- 🔝 **Botón Scroll-Up**: Regreso rápido al inicio

## 📁 Estructura del Proyecto

```
PortfolioFabianGonzalez/
│
├── index.html                          # Página principal
├── styles.css                          # Estilos CSS
├── script.js                           # Funcionalidad JavaScript
├── README.md                           # Documentación
│
├── CV_Fabian_Gonzalez/                # Curriculum Vitae
│   ├── SP_CV_FABIAN_CEFERINO_GONZALEZ.pdf
│   └── EN_CV FABIAN_CEFERINO_GONZALEZ.pdf
│
├── DiplomasObtenidos/                 # Certificaciones
│   ├── Certificado Angular.pdf
│   ├── Certificado React JS.pdf
│   ├── Certificado Node JS.pdf
│   ├── .NET GONZALEZ_FABIAN_CEFERINO.pdf
│   ├── DIPLOMA SQL SERVER, VISUAL STUDIO 2006.pdf
│   ├── Certificado Full-Stack Developer Profesional.pdf
│   ├── Práctica de python.pdf
│   ├── QA AUTOMATION FABIAN GONZÁLEZ.pdf
│   └── UTN_TecnicoProgramacion.pdf
│
├── ProyectosGithub/
│   └── RepositorioGithub.txt
│
└── InstitucionesEstudios/
```

## 🎯 Secciones del Portfolio

### 1. **Hero / Inicio**
- Presentación principal con animación
- Botones de acción (Contacto y Descarga CV)
- Enlaces a redes sociales

### 2. **Sobre Mí**
- Descripción profesional
- Estadísticas (Diplomas, Proyectos, Tecnologías)

### 3. **Educación**
- Formación académica
- Universidad Tecnológica Nacional (UTN)

### 4. **Diplomas & Certificaciones**
- 9+ certificaciones profesionales
- Enlaces directos a cada diploma
- Tecnologías: Angular, React, Node.js, .NET, SQL Server, Python, QA

### 5. **Tecnologías**
- Stack Frontend: Angular, React, HTML5, CSS3, JavaScript
- Stack Backend: Java, C#, .NET, Node.js
- Bases de Datos: SQL Server
- Herramientas: Git, Visual Studio, QA Automation

### 6. **Proyectos**
- Showcase de proyectos destacados
- Enlace a GitHub
- Descripción y tecnologías utilizadas

### 7. **Contacto**
- Email
- LinkedIn
- GitHub
- Descarga de CV

## 🚀 Instalación y Uso

### Opción 1: Abrir Directamente
1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en tu navegador preferido

### Opción 2: Con Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. El portfolio se abrirá automáticamente en tu navegador

### Opción 3: Con Python
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción 4: Con Node.js
```bash
# Instala http-server globalmente
npm install -g http-server

# Ejecuta en la carpeta del proyecto
http-server

# Abre la URL que se muestra en la consola
```

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #6366f1;        /* Color principal */
    --primary-alt: #4f46e5;          /* Color alternativo */
    --title-color: #1e293b;          /* Color títulos */
    --text-color: #475569;           /* Color texto */
    --body-color: #f8fafc;           /* Color fondo */
}
```

### Contenido
Edita el archivo `index.html` para modificar:
- Información personal
- Descripción profesional
- Proyectos
- Enlaces sociales
- Datos de contacto

### Fuentes
Cambia la fuente en `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700&display=swap');
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 350px

## 🌟 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos, Flexbox, Grid
- **JavaScript ES6+**: Interactividad
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía (Poppins)

## ⚡ Características Técnicas

### JavaScript
- ✅ Menú móvil responsivo
- ✅ Navegación con scroll suave
- ✅ Active link en navegación
- ✅ Animaciones con Intersection Observer
- ✅ Botón scroll-up
- ✅ Animación de typing en título
- ✅ Contador animado
- ✅ Partículas de fondo
- ✅ Preloader
- ✅ Optimización con debounce

### CSS
- ✅ Variables CSS
- ✅ Animaciones y transiciones
- ✅ Efectos hover
- ✅ Sistema de grid responsivo
- ✅ Flexbox
- ✅ Media queries
- ✅ Sombras y gradientes

## 📝 Cómo Actualizar tu Información

### 1. Datos Personales
Busca en `index.html` y actualiza:
```html
<h1 class="home__title">
    Hola, soy <span class="title-accent">Tu Nombre</span>
</h1>
```

### 2. Enlaces Sociales
Actualiza los href en:
```html
<a href="https://github.com/tuusuario" target="_blank">
<a href="https://linkedin.com/in/tuperfil" target="_blank">
<a href="mailto:tuemail@ejemplo.com">
```

### 3. Proyectos
Edita la sección de proyectos en `index.html`:
```html
<div class="project__card">
    <h3 class="project__title">Tu Proyecto</h3>
    <p class="project__description">Descripción</p>
    <!-- ... -->
</div>
```

### 4. CV
Reemplaza los archivos PDF en la carpeta `CV_Fabian_Gonzalez/` con tus propios CV

## 🔧 Solución de Problemas

### Los iconos no se muestran
Verifica tu conexión a internet o descarga Font Awesome localmente

### Las animaciones no funcionan
Asegúrate de que JavaScript está habilitado en tu navegador

### El menú móvil no se abre
Verifica que `script.js` esté correctamente vinculado en el HTML

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar, modificar y distribuir este código.

## 👤 Autor

**Fabián Ceferino González**

- 🌐 GitHub: [@fabiancgonzalez](https://github.com/fabiancgonzalez)
- 💼 LinkedIn: [Fabián González](https://www.linkedin.com/in/fabian-gonzalez)
- 📧 Email: fabian.gonzalez@email.com

## 🤝 Contribuciones

Las contribuciones, issues y feature requests son bienvenidas. No dudes en revisar la página de issues.

## ⭐ Agradecimientos

- Font Awesome por los iconos
- Google Fonts por la tipografía
- Inspiración de la comunidad de desarrolladores

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- 📧 Email: fabian.gonzalez@email.com
- 💼 LinkedIn: https://www.linkedin.com/in/fabian-gonzalez
- 🐙 GitHub: https://github.com/fabiancgonzalez

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Desarrollado con ❤️ por Fabián González**
