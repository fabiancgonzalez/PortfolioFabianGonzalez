/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

const translations = {
    es: {
        'meta.title': 'Fabián Ceferino González Monier | Desarrollador Full Stack',
        'meta.description': 'Portfolio de Fabián Ceferino González Monier - Desarrollador Full Stack',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.education': 'Educación',
        'nav.skills': 'Tecnologías',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'home.greeting': 'Hola, soy',
        'home.name': 'Fabian Ceferino Gonzalez',
        'home.subtitle': 'Desarrollador Full Stack',
        'home.description': 'Apasionado por la tecnología y orientado al detalle, especializado en crear soluciones eficientes con Java, C#, .NET, Angular, React y Node.js',
        'home.ctaContact': 'Contáctame',
        'home.cvEs': 'CV Español',
        'home.cvEn': 'CV English',
        'home.scroll': 'Deslizar abajo',
        'about.title': 'Sobre Mí',
        'about.subtitle': 'Mi Introducción',
        'about.description1': 'Soy <strong>Full Stack Developer</strong> con experiencia en el <strong>sector tecnológico y logístico</strong>, apasionado por transformar <strong>procesos complejos</strong> en <strong>soluciones de software claras y eficientes</strong>.',
        'about.description2': 'Trabajo con <strong>Angular</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>.NET</strong>, <strong>Python</strong>, <strong>SQL Server</strong> y <strong>MySQL</strong>, tanto en <strong>frontend</strong> como en <strong>backend</strong>. También en <strong>QA Automation</strong>, asegurando la <strong>calidad del software</strong> en cada etapa del desarrollo.',
        'about.description3': 'A lo largo de mi trayectoria gestioné <strong>sistemas críticos de inventario y cadena de suministro</strong> para <strong>más de 15 proveedores clave</strong>, logrando <strong>más del 95% de cumplimiento</strong> con estándares <strong>ISO 9002</strong> y reduciendo <strong>discrepancias de stock</strong> mediante <strong>análisis de datos</strong> y <strong>reportes personalizados</strong>.',
        'about.metrics.certs': 'Diplomas & Certificaciones',
        'about.metrics.projects': 'Proyectos Completados',
        'about.metrics.skills': 'Tecnologías Dominadas',
        'education.title': 'Educación',
        'education.subtitle': 'Mi Formación Académica',
        'education.degree': 'Tecnicatura en Programación',
        'education.description': 'Formación sólida en fundamentos de programación, desarrollo de software, bases de datos y arquitectura de sistemas. Proyectos prácticos con Java, C#, .NET y SQL Server.',
        'diplomas.title': 'Diplomas & Certificaciones',
        'diplomas.subtitle': 'Mi Desarrollo Profesional',
        'diplomas.angular': 'Framework frontend moderno',
        'diplomas.angularAdvanced': 'Certificación avanzada en Angular',
        'diplomas.react': 'Biblioteca JavaScript para UI',
        'diplomas.node': 'Entorno de ejecución JavaScript',
        'diplomas.dotnet': 'Desarrollo con Microsoft .NET',
        'diplomas.sql': 'Gestión de bases de datos',
        'diplomas.fullstack': 'Desarrollo integral profesional',
        'diplomas.python': 'Práctica de programación Python',
        'diplomas.qa': 'Testing automatizado',
        'diplomas.utn': 'Universidad Tecnológica Nacional',
        'common.viewCertificate': 'Ver Certificado',
        'skills.title': 'Tecnologías',
        'skills.subtitle': 'Stack Tecnológico',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.tools': 'Database & Tools',
        'level.advanced': 'Avanzado',
        'level.intermediate': 'Intermedio',
        'projects.title': 'Proyectos',
        'projects.subtitle': 'Mi Trabajo Reciente',
        'projects.englishApp.title': 'App practicar Ingles',
        'projects.englishApp.description': 'Aplicacion para practicar Ingles Conversando con la IA.',
        'projects.englishApp.link': 'Ver fabiantalkenglish',
        'projects.tiendas.title': 'Tiendas Fernandez',
        'projects.tiendas.description': 'E-commerce para productos de almacén y quesos artesanales.',
        'projects.tiendas.link': 'Ver Tiendas Fernandez',
        'projects.renovared.title': 'Renovared',
        'projects.renovared.description': 'Plataforma para conectar recicladores, cooperativas y emprendedores.',
        'projects.renovared.link': 'Ver Renovared',
        'projects.cheese.title': 'Tienda Quesos',
        'projects.cheese.description': 'E-commerce especializado en quesos artesanales.',
        'projects.cheese.link': 'Ver Tienda Quesos',
        'projects.translate.title': 'Traducime (Vercel)',
        'projects.translate.description': 'Traducción en tiempo real con streaming de audio y texto.',
        'projects.translate.link': 'Ver Traducime',
        'projects.aliadaa.title': 'Aliadaa',
        'projects.aliadaa.description': 'Plataforma web Venta Stickers proyecto Aliadaa.',
        'projects.aliadaa.link': 'Ver Aliadaa',
        'projects.tag.education': 'Educación',
        'projects.tag.translation': 'Traducción',
        'projects.tag.ai': 'IA',
        'projects.tag.landing': 'Landing',
        'contact.title': 'Contacto',
        'contact.subtitle': 'Ponte en Contacto',
        'contact.heading': 'Hablemos de tu próximo proyecto',
        'contact.description': 'Estoy disponible para oportunidades freelance o posiciones full-time. ¿Tienes un proyecto en mente? ¡Hablemos!',
        'contact.sendEmail': 'Enviar Email',
        'contact.sendMessage': 'Enviar Mensaje',
        'contact.viewProfile': 'Ver Perfil',
        'contact.viewRepos': 'Ver Repositorios',
        'contact.cvTitle': 'Curriculum Vitae',
        'contact.cvDesc': 'Descarga mi CV en español o inglés',
        'contact.cvEs': 'CV Español',
        'contact.cvEn': 'CV English',
        'footer.description': 'Desarrollador Full Stack',
        'footer.about': 'Sobre Mí',
        'footer.skills': 'Tecnologías',
        'footer.projects': 'Proyectos',
        'footer.apps': 'Mis Aplicaciones',
        'footer.copy': '© 2025 Fabian Ceferino Gonzalez. Todos los derechos reservados.',
        'language.aria': 'Cambiar idioma',
        'alerts.formSuccess': '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
        'alerts.formRequired': 'Por favor, completa todos los campos.',
        'console.hello': '¡Hola! 👋',
        'console.call': '¿Te gusta lo que ves? ¡Hablemos!'
    },
    en: {
        'meta.title': 'Fabián Ceferino González Monier | Full Stack Developer',
        'meta.description': 'Portfolio of Fabián Ceferino González Monier - Full Stack Developer',
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.education': 'Education',
        'nav.skills': 'Technologies',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'home.greeting': 'Hi, I am',
        'home.name': 'Fabian Ceferino Gonzalez',
        'home.subtitle': 'Full Stack Developer',
        'home.description': 'Passionate about technology and detail-oriented, specialized in building efficient solutions with Java, C#, .NET, Angular, React and Node.js',
        'home.ctaContact': 'Contact Me',
        'home.cvEs': 'Spanish CV',
        'home.cvEn': 'English CV',
        'home.scroll': 'Scroll Down',
        'about.title': 'About Me',
        'about.subtitle': 'My Introduction',
        'about.description1': 'I am a <strong>Full Stack Developer</strong> with experience in the <strong>technology and logistics sector</strong>, passionate about transforming <strong>complex processes</strong> into <strong>clear and efficient software solutions</strong>.',
        'about.description2': 'I work with <strong>Angular</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>.NET</strong>, <strong>Python</strong>, <strong>SQL Server</strong> and <strong>MySQL</strong>, in both <strong>frontend</strong> and <strong>backend</strong>. I also work in <strong>QA Automation</strong>, ensuring <strong>software quality</strong> at every development stage.',
        'about.description3': 'Throughout my career, I managed <strong>critical inventory and supply chain systems</strong> for <strong>more than 15 key suppliers</strong>, achieving <strong>over 95% compliance</strong> with <strong>ISO 9002</strong> standards and reducing <strong>stock discrepancies</strong> through <strong>data analysis</strong> and <strong>custom reporting</strong>.',
        'about.metrics.certs': 'Diplomas & Certifications',
        'about.metrics.projects': 'Completed Projects',
        'about.metrics.skills': 'Mastered Technologies',
        'education.title': 'Education',
        'education.subtitle': 'My Academic Background',
        'education.degree': 'Programming Technician Degree',
        'education.description': 'Strong training in programming fundamentals, software development, databases and systems architecture. Practical projects with Java, C#, .NET and SQL Server.',
        'diplomas.title': 'Diplomas & Certifications',
        'diplomas.subtitle': 'My Professional Development',
        'diplomas.angular': 'Modern frontend framework',
        'diplomas.angularAdvanced': 'Advanced Angular certification',
        'diplomas.react': 'JavaScript library for UI',
        'diplomas.node': 'JavaScript runtime environment',
        'diplomas.dotnet': 'Development with Microsoft .NET',
        'diplomas.sql': 'Database management',
        'diplomas.fullstack': 'Professional full-stack development',
        'diplomas.python': 'Python programming practice',
        'diplomas.qa': 'Automated testing',
        'diplomas.utn': 'National Technological University',
        'common.viewCertificate': 'View Certificate',
        'skills.title': 'Technologies',
        'skills.subtitle': 'Tech Stack',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.tools': 'Database & Tools',
        'level.advanced': 'Advanced',
        'level.intermediate': 'Intermediate',
        'projects.title': 'Projects',
        'projects.subtitle': 'My Recent Work',
        'projects.englishApp.title': 'English Practice App',
        'projects.englishApp.description': 'Application to practice English by talking with AI.',
        'projects.englishApp.link': 'View fabiantalkenglish',
        'projects.tiendas.title': 'Tiendas Fernandez',
        'projects.tiendas.description': 'E-commerce for grocery products and artisanal cheeses.',
        'projects.tiendas.link': 'View Tiendas Fernandez',
        'projects.renovared.title': 'Renovared',
        'projects.renovared.description': 'Platform connecting recyclers, cooperatives and entrepreneurs.',
        'projects.renovared.link': 'View Renovared',
        'projects.cheese.title': 'Cheese Store',
        'projects.cheese.description': 'E-commerce specialized in artisanal cheeses.',
        'projects.cheese.link': 'View Cheese Store',
        'projects.translate.title': 'Traducime (Vercel)',
        'projects.translate.description': 'Real-time translation with audio and text streaming.',
        'projects.translate.link': 'View Traducime',
        'projects.aliadaa.title': 'Aliadaa',
        'projects.aliadaa.description': 'Web platform for Aliadaa stickers sales project.',
        'projects.aliadaa.link': 'View Aliadaa',
        'projects.tag.education': 'Education',
        'projects.tag.translation': 'Translation',
        'projects.tag.ai': 'AI',
        'projects.tag.landing': 'Landing',
        'contact.title': 'Contact',
        'contact.subtitle': 'Get In Touch',
        'contact.heading': 'Let us talk about your next project',
        'contact.description': 'I am available for freelance opportunities or full-time positions. Do you have a project in mind? Let us talk!',
        'contact.sendEmail': 'Send Email',
        'contact.sendMessage': 'Send Message',
        'contact.viewProfile': 'View Profile',
        'contact.viewRepos': 'View Repositories',
        'contact.cvTitle': 'Curriculum Vitae',
        'contact.cvDesc': 'Download my CV in Spanish or English',
        'contact.cvEs': 'Spanish CV',
        'contact.cvEn': 'English CV',
        'footer.description': 'Full Stack Developer',
        'footer.about': 'About Me',
        'footer.skills': 'Technologies',
        'footer.projects': 'Projects',
        'footer.apps': 'My Apps',
        'footer.copy': '© 2025 Fabian Ceferino Gonzalez. All rights reserved.',
        'language.aria': 'Switch language',
        'alerts.formSuccess': 'Thanks for your message! I will get back to you soon.',
        'alerts.formRequired': 'Please complete all fields.',
        'console.hello': 'Hello! 👋',
        'console.call': 'Like what you see? Let us talk!'
    }
};

const LANGUAGE_STORAGE_KEY = 'selected-language';
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'es';
if (!translations[currentLanguage]) {
    currentLanguage = 'es';
}

let typingTimeout;
const startTypingAnimation = () => {
    const typingText = document.querySelector('.home__title .title-accent');
    if(!typingText) return;

    const text = typingText.textContent.trim();
    typingText.textContent = '';
    let i = 0;

    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            typingTimeout = setTimeout(typeWriter, 90);
        }
    };

    typingTimeout = setTimeout(typeWriter, 250);
};

const applyLanguage = (lang) => {
    const locale = translations[lang] ? lang : 'es';
    const dictionary = translations[locale];

    currentLanguage = locale;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);

    document.documentElement.lang = locale;
    document.body.classList.toggle('lang-en', locale === 'en');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const value = dictionary[key];
        if (!value) return;

        if (value.includes('<strong>') || value.includes('<span')) {
            element.innerHTML = value;
            return;
        }

        element.textContent = value;
    });

    document.title = dictionary['meta.title'];
    const descriptionMeta = document.getElementById('meta-description');
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', dictionary['meta.description']);
    }

    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.setAttribute('aria-label', dictionary['language.aria']);
        languageToggle.setAttribute('title', locale === 'en' ? 'English' : 'Español');
    }

    startTypingAnimation();
};

const languageToggleButton = document.getElementById('language-toggle');
if (languageToggleButton) {
    languageToggleButton.addEventListener('click', () => {
        const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
        applyLanguage(nextLanguage);
    });
}

applyLanguage(currentLanguage);

// Menu show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.querySelector('.header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if(window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if(window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(sectionsClass) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active');
            } else {
                sectionsClass.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all sections and cards
const observeElements = document.querySelectorAll(
    '.section, .about__box, .education__card, .diploma__card, .skills__content, .project__card, .contact__card'
);

observeElements.forEach(el => {
    el.setAttribute('data-aos', 'fade-up');
    observer.observe(el);
});

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if(target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*=============== PARTICLES BACKGROUND (Optional Enhancement) ===============*/
const createParticles = () => {
    const homeSection = document.querySelector('.home');
    if(!homeSection) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
    `;

    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }

    homeSection.style.position = 'relative';
    homeSection.insertBefore(particlesContainer, homeSection.firstChild);
};

// Initialize particles on load
window.addEventListener('load', createParticles);

/*=============== COUNTER ANIMATION ===============*/
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if(current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.about__box-title').forEach(counter => {
    counterObserver.observe(counter);
});

/*=============== FORM VALIDATION (If you add a contact form) ===============*/
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if(name && email && message) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert(translations[currentLanguage]['alerts.formSuccess']);
            
            // Reset form
            contactForm.reset();
        } else {
            alert(translations[currentLanguage]['alerts.formRequired']);
        }
    });
}

/*=============== THEME TOGGLE (Optional) ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    if(themeButton) {
        themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
    }
}

// Activate / deactivate the theme manually with the button
if(themeButton) {
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}

/*=============== LAZY LOADING IMAGES ===============*/
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

/*=============== CURSOR EFFECT (Optional Enhancement) ===============*/
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.5);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    display: none;
`;

document.body.appendChild(cursor);

// Show cursor only on larger screens
if(window.innerWidth > 768) {
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Enlarge cursor on interactive elements
    document.querySelectorAll('a, button, .nav__link').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

/*=============== PRELOADER ===============*/
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #6366f1;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    preloader.appendChild(spinner);
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Fade out preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

/*=============== CONSOLE MESSAGE ===============*/
console.log(`%c${translations[currentLanguage]['console.hello']}`, 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log(`%c${translations[currentLanguage]['console.call']}`, 'color: #475569; font-size: 16px;');
console.log('%cGitHub: https://github.com/fabiancgonzalez', 'color: #6366f1; font-size: 14px;');

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Debounce function for scroll events
const debounce = (func, wait = 10, immediate = true) => {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    scrollHeader();
    scrollUp();
    scrollActive();
}, 10));
