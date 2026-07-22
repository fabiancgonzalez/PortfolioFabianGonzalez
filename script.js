const header = document.querySelector('.header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contact-form');
const certModal = document.getElementById('cert-modal');
const openCertificates = document.getElementById('open-certificates');
const closeCertificates = document.getElementById('close-certificates');
const bookingModal = document.getElementById('booking-modal');
const bookingButtons = document.querySelectorAll('#book-call-button, #book-call-button-hero');
const bookingForm = document.getElementById('booking-form');
const bookingClose = document.getElementById('close-booking');
const bookingCancel = document.getElementById('booking-cancel');
const languageToggle = document.getElementById('language-toggle');
const currentYear = document.getElementById('current-year');

const emailTo = 'ceferinomonier@gmail.com';
const whatsappUrl = 'https://wa.me/5493513729188';
const googleCalendarId = 'cc35a9b832a241da2f3e622e332c7cc4c040d4bfba39277e921e113791ef0035@group.calendar.google.com';
const bookingStartHour = 8;
const bookingEndHour = 18;
const bookingSlotMinutes = 30;
const LANGUAGE_STORAGE_KEY = 'selected-language';

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'es';

const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
};

const setTextAt = (elements, index, value) => {
    if (elements[index]) {
        elements[index].textContent = value;
    }
};

const applyLanguage = (lang) => {
    currentLanguage = lang === 'en' ? 'en' : 'es';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);

    const isEnglish = currentLanguage === 'en';

    document.documentElement.lang = currentLanguage;
    document.body.classList.toggle('lang-en', isEnglish);

    document.title = isEnglish
        ? 'Fabián González | Software and Micro-SaaS for businesses'
        : 'Fabián González | Software y Micro-SaaS para negocios';

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', isEnglish
            ? 'Landing page for software and Micro-SaaS to automate processes, scale sales and book consultations.'
            : 'Landing page de software y Micro-SaaS para automatizar procesos, escalar ventas y agendar consultorías.');
    }

    if (languageToggle) {
        languageToggle.setAttribute('aria-label', isEnglish ? 'Switch language' : 'Cambiar idioma');
    }

    const navLabels = isEnglish
        ? ['Home', 'Services', 'Success Cases', 'Why me', 'Contact']
        : ['Inicio', 'Servicios', 'Casos de Éxito', 'Por qué yo', 'Contacto'];
    navLinks.forEach((link, index) => {
        if (navLabels[index]) {
            link.textContent = navLabels[index];
        }
    });

    setText('#book-call-button', isEnglish ? 'Book consultation' : 'Agendar consultoría');
    setText('#book-call-button-hero', isEnglish ? 'Book Free Consultation' : 'Agendar Consultoría Gratuita');

    setText('.hero .section__eyebrow', isEnglish ? 'Commercial landing for software services' : 'Landing comercial para servicios de software');
    setText('.hero__copy h1', isEnglish
        ? 'I build the software that automates your business and multiplies your revenue.'
        : 'Construyo el software que automatiza tu negocio y multiplica tus ingresos.');
    setText('.hero__subtitle', isEnglish
        ? 'I develop custom web applications, Micro-SaaS solutions and scalable architectures ready for today’s market.'
        : 'Desarrollo aplicaciones web a medida, soluciones Micro-SaaS y arquitecturas escalables preparadas para el mercado actual.');
    const heroNotes = document.querySelectorAll('.hero__notes span');
    if (heroNotes[0]) heroNotes[0].innerHTML = `<i class="fas fa-bolt"></i>${isEnglish ? 'MVPs and Micro-SaaS' : 'MVPs y Micro-SaaS'}`;
    if (heroNotes[1]) heroNotes[1].innerHTML = `<i class="fas fa-chart-line"></i>${isEnglish ? 'Operational automation' : 'Automatización operativa'}`;
    if (heroNotes[2]) heroNotes[2].innerHTML = `<i class="fas fa-brain"></i>${isEnglish ? 'AI integration' : 'Integración con IA'}`;
    setText('.hero__panel-label', isEnglish ? 'Commercial focus' : 'Enfoque comercial');
    setText('.hero__panel-content h2', isEnglish ? 'From the idea to the system that sells, automates and scales.' : 'De la idea al sistema que vende, automatiza y escala.');
    setTextAt(document.querySelectorAll('.hero__bullet-list li'), 0, isEnglish ? 'Architectures ready to grow without rebuilding the product.' : 'Arquitecturas listas para crecer sin rehacer el producto.');
    setTextAt(document.querySelectorAll('.hero__bullet-list li'), 1, isEnglish ? 'Operational flows that reduce friction and errors.' : 'Flujos operativos que reducen fricción y errores.');
    setTextAt(document.querySelectorAll('.hero__bullet-list li'), 2, isEnglish ? 'Clear interfaces that convert visits into calls.' : 'Interfaces claras para convertir visitas en llamadas.');
    setTextAt(document.querySelectorAll('.hero__panel-foot strong'), 0, isEnglish ? 'Stack' : 'Stack');
    setTextAt(document.querySelectorAll('.hero__panel-foot span'), 0, isEnglish ? 'React, Angular, .NET, Node.js' : 'React, Angular, .NET, Node.js');
    setTextAt(document.querySelectorAll('.hero__panel-foot strong'), 1, isEnglish ? 'Delivery' : 'Entrega');
    setTextAt(document.querySelectorAll('.hero__panel-foot span'), 1, isEnglish ? 'Real product, business first' : 'Producto real, enfoque en negocio');

    setText('.services .section__eyebrow', isEnglish ? 'Services' : 'Servicios');
    setText('.services .section__title', isEnglish ? 'Solutions designed to sell, automate and grow.' : 'Soluciones diseñadas para vender, automatizar y crecer.');
    setText('.services .section__subtitle', isEnglish ? 'Bento grid built around business impact.' : 'Bento grid comercial con foco en impacto.');

    const serviceCards = document.querySelectorAll('.service-card');
    const serviceCopy = isEnglish ? [
        {
            title: 'MVP and Micro-SaaS Development',
            description: 'Fast frontend with Angular or React and robust backend with .NET or Node.js to validate the market without sacrificing scalability.',
            bullets: ['Fast product launch', 'Monetization-ready architecture', 'Base ready to iterate']
        },
        {
            title: 'Process and Logistics Automation',
            description: 'Inventory optimization, stock discrepancy reduction and API integrations for more reliable operations.',
            bullets: ['Synced inventory', 'Fewer manual errors', 'Integration with external systems']
        },
        {
            title: 'AI Integration',
            description: 'Conversational solutions, real-time audio/text streaming and AI translation for smarter experiences.',
            bullets: ['Conversational assistants', 'Real-time streaming', 'AI translation and support']
        }
    ] : [
        {
            title: 'Desarrollo de MVPs y Micro-SaaS',
            description: 'Frontend rápido con Angular o React y backend robusto con .NET o Node.js para validar mercado sin sacrificar escalabilidad.',
            bullets: ['Lanzamiento veloz de producto', 'Arquitectura preparada para monetizar', 'Base técnica lista para iterar']
        },
        {
            title: 'Automatización de Procesos y Logística',
            description: 'Optimización de inventarios, reducción de discrepancias de stock e integraciones API para operaciones más confiables.',
            bullets: ['Inventario sincronizado', 'Menos errores manuales', 'Integración con sistemas externos']
        },
        {
            title: 'Integración de Inteligencia Artificial',
            description: 'Soluciones conversacionales, streaming de audio/texto en tiempo real y traducción con IA para experiencias más inteligentes.',
            bullets: ['Asistentes conversacionales', 'Streaming en tiempo real', 'Traducción y soporte asistido']
        }
    ];

    serviceCards.forEach((card, index) => {
        const copy = serviceCopy[index];
        if (!copy) return;
        const heading = card.querySelector('h3');
        const description = card.querySelector('p');
        if (heading) {
            heading.textContent = copy.title;
        }
        if (description) {
            description.textContent = copy.description;
        }
        const bullets = card.querySelectorAll('li');
        bullets.forEach((bullet, bulletIndex) => {
            if (copy.bullets[bulletIndex]) bullet.textContent = copy.bullets[bulletIndex];
        });
    });

    setText('.cases .section__eyebrow', isEnglish ? 'Success cases' : 'Casos de éxito');
    setText('.cases .section__title', isEnglish ? 'Real products presented as product, not as code.' : 'Productos reales presentados como producto, no como código.');
    setText('.cases .section__subtitle', isEnglish ? 'Each card shows the screen, context and live demo.' : 'Cada tarjeta muestra pantalla, contexto y demo viva.');

    const caseCards = document.querySelectorAll('.case-card');
    const caseCopy = isEnglish ? [
        {
            tag: 'AI translation SaaS',
            title: 'Traducime',
            description: 'Low-latency audio streaming infrastructure that reduces operating costs in manual translation.',
            bullets: ['Problem: slow manual processes', 'Solution: real-time conversational flow', 'Impact: faster and scalable experience'],
            button: 'View Live Demo'
        },
        {
            tag: 'High-conversion e-commerce platforms',
            title: 'Tiendas Fernández',
            description: 'Automated payment gateways and synced inventory that improve sales conversion.',
            bullets: ['Problem: scattered catalogs and manual stock', 'Solution: clear purchase flow', 'Impact: less friction and more sales'],
            button: 'View Live Demo'
        },
        {
            tag: 'High-conversion e-commerce platforms',
            title: 'Tienda Quesos',
            description: 'Automated payment gateways and synced inventory that improve sales conversion.',
            bullets: ['Problem: manual stock and split experience', 'Solution: specialized store with simple checkout', 'Impact: clearer path to conversion'],
            button: 'View Live Demo'
        },
        {
            tag: 'Conversational Micro-SaaS with AI',
            title: 'App Practicar Inglés',
            description: 'Optimized architecture with advanced LLM integrations for interactive learning experiences at scale.',
            bullets: ['Problem: little interactivity', 'Solution: AI-assisted conversation', 'Impact: stronger retention and practice'],
            button: 'View Live Demo'
        },
        {
            tag: 'Social impact and recycling platform',
            title: 'Renovared',
            description: 'Platform that connects recyclers, cooperatives and entrepreneurs with a clear workflow to coordinate and scale operations.',
            bullets: ['Problem: fragmented and invisible operations', 'Solution: connection and management platform', 'Impact: more coordination and traceability'],
            button: 'View Live Demo'
        },
        {
            tag: 'Landing and digital product sales',
            title: 'Aliadaa',
            description: 'Web platform for stickers and digital products focused on conversion and commercial presentation.',
            bullets: ['Problem: poorly structured digital offer', 'Solution: optimized sales landing', 'Impact: better presentation and commercial focus'],
            button: 'View Live Demo'
        }
    ] : [
        {
            tag: 'SaaS de traducción con IA',
            title: 'Traducime',
            description: 'Infraestructura de streaming de audio de baja latencia que reduce costos operativos en traducción manual.',
            bullets: ['Problema: procesos manuales lentos', 'Solución: flujo conversacional en tiempo real', 'Impacto: experiencia más rápida y escalable'],
            button: 'Ver Demo En Vivo'
        },
        {
            tag: 'Plataformas e-commerce de alta conversión',
            title: 'Tiendas Fernández',
            description: 'Implementación de pasarelas de pago automatizadas e inventarios sincronizados que optimizan la conversión de ventas.',
            bullets: ['Problema: catálogos dispersos y stock manual', 'Solución: e-commerce con flujo de compra claro', 'Impacto: menos fricción y más ventas'],
            button: 'Ver Demo En Vivo'
        },
        {
            tag: 'Plataformas e-commerce de alta conversión',
            title: 'Tienda Quesos',
            description: 'Implementación de pasarelas de pago automatizadas e inventarios sincronizados que optimizan la conversión de ventas.',
            bullets: ['Problema: stock manual y experiencia dispersa', 'Solución: tienda especializada con compra simple', 'Impacto: más claridad para convertir visitas en ventas'],
            button: 'Ver Demo En Vivo'
        },
        {
            tag: 'Micro-SaaS conversacional con IA',
            title: 'App Practicar Inglés',
            description: 'Arquitectura optimizada con integraciones de modelos LLM avanzados para experiencias de aprendizaje interactivas a gran escala.',
            bullets: ['Problema: aprendizaje poco interactivo', 'Solución: conversación asistida por IA', 'Impacto: mayor retención y práctica continua'],
            button: 'Ver Demo En Vivo'
        },
        {
            tag: 'Plataforma de impacto social y reciclaje',
            title: 'Renovared',
            description: 'Plataforma para conectar recicladores, cooperativas y emprendedores con un flujo claro para coordinar y escalar operaciones.',
            bullets: ['Problema: operaciones fragmentadas y poco visibles', 'Solución: plataforma de conexión y gestión', 'Impacto: más coordinación y trazabilidad'],
            button: 'Ver Demo En Vivo'
        },
        {
            tag: 'Landing y venta de productos digitales',
            title: 'Aliadaa',
            description: 'Plataforma web para venta de stickers y productos digitales con enfoque directo en conversión y presentación comercial.',
            bullets: ['Problema: oferta digital poco estructurada', 'Solución: landing de venta optimizada', 'Impacto: mejor presentación y foco comercial'],
            button: 'Ver Demo En Vivo'
        }
    ];

    caseCards.forEach((card, index) => {
        const copy = caseCopy[index];
        if (!copy) return;
        const textBlocks = card.querySelectorAll('.case-card__content > p');
        setTextAt(textBlocks, 0, copy.tag);
        setTextAt(textBlocks, 1, copy.description);
        setTextAt(card.querySelectorAll('h3'), 0, copy.title);
        card.querySelectorAll('.case-card__impact li').forEach((bullet, bulletIndex) => {
            if (copy.bullets[bulletIndex]) bullet.textContent = copy.bullets[bulletIndex];
        });
        card.querySelectorAll('.button--block').forEach((button) => {
            button.textContent = copy.button;
        });
    });

    setText('.why .section__eyebrow', isEnglish ? 'Why work with me' : 'Por qué trabajar conmigo');
    setText('.why .section__title', isEnglish ? 'I turn complex operations into clear, measurable and profitable software.' : 'Transformo operaciones complejas en software claro, medible y rentable.');
    setText('.why .section__subtitle', isEnglish ? 'Technical experience focused on business impact.' : 'Experiencia técnica con foco en impacto de negocio.');
    setTextAt(document.querySelectorAll('.metric-card strong'), 0, isEnglish ? '+15 suppliers' : '+15 proveedores');
    setTextAt(document.querySelectorAll('.metric-card span'), 0, isEnglish ? 'managed in critical inventory and supply chain systems.' : 'gestionados en sistemas críticos de inventario y cadena de suministro.');
    setTextAt(document.querySelectorAll('.metric-card strong'), 1, isEnglish ? '95% ISO 9002' : '95% ISO 9002');
    setTextAt(document.querySelectorAll('.metric-card span'), 1, isEnglish ? 'compliance with international quality standards.' : 'cumplimiento con estándares internacionales de calidad.');
    setTextAt(document.querySelectorAll('.metric-card strong'), 2, isEnglish ? 'Fewer discrepancies' : 'Menos discrepancias');
    setTextAt(document.querySelectorAll('.metric-card span'), 2, isEnglish ? 'reduction proven with data analysis and custom reports.' : 'reducción comprobada mediante analítica de datos y reportes personalizados.');
    setText('.why__label', isEnglish ? 'Positioning' : 'Posicionamiento');
    setText('.why__card h3', isEnglish ? 'One goal: make your software generate revenue or save money.' : 'Una sola meta: que tu software mueva ingresos o ahorre dinero.');
    setText('.why__card p', isEnglish ? 'I work the solution from the business to the interface, not the other way around. That speeds decisions, reduces rework and improves product adoption.' : 'Trabajo la solución desde el negocio hacia la interfaz, no al revés. Eso acelera decisiones, reduce retrabajo y mejora la adopción del producto.');
    setText('#open-certificates', isEnglish ? 'View technical certifications' : 'Ver certificaciones técnicas');

    setText('.contact .section__eyebrow', isEnglish ? 'Contact' : 'Contacto');
    setText('.contact .section__title', isEnglish ? 'Tell me about your project and I will respond with a concrete proposal.' : 'Cuéntame tu proyecto y te respondo con una propuesta concreta.');
    setText('.contact .section__subtitle', isEnglish ? 'Clean form, no friction and WhatsApp always visible.' : 'Formulario limpio, sin fricción y con WhatsApp siempre visible.');
    setText('#linkedin-pill span', 'LinkedIn');
    setText('#cv-download-es span', isEnglish ? 'Download Spanish CV' : 'Descargar CV Español');
    setText('#cv-download-en span', isEnglish ? 'Download English CV' : 'Descargar CV English');
    const contactLabels = document.querySelectorAll('.contact-form label span');
    setTextAt(contactLabels, 0, isEnglish ? 'Name' : 'Nombre');
    setTextAt(contactLabels, 1, isEnglish ? 'Business email' : 'Email de Negocios');
    setTextAt(contactLabels, 2, isEnglish ? 'Tell me about your project/SaaS' : 'Cuéntame sobre tu proyecto/SaaS');
    const contactInputs = document.querySelectorAll('#name, #email, #message');
    if (contactInputs[0]) contactInputs[0].placeholder = isEnglish ? 'Your name' : 'Tu nombre';
    if (contactInputs[1]) contactInputs[1].placeholder = isEnglish ? 'you@company.com' : 'tuempresa@correo.com';
    if (contactInputs[2]) contactInputs[2].placeholder = isEnglish ? 'Tell me what you want to automate, sell or scale.' : 'Cuéntame qué quieres automatizar, vender o escalar.';
    const contactSubmit = document.querySelector('#contact-form button[type="submit"]');
    if (contactSubmit) contactSubmit.innerHTML = `<i class="fas fa-paper-plane"></i>${isEnglish ? 'Send inquiry' : 'Enviar consulta'}`;
    setText('.contact-form__hint', isEnglish ? 'You can also write on WhatsApp if you prefer an immediate response.' : 'También puedes escribir por WhatsApp si prefieres una respuesta inmediata.');

    setText('footer strong', 'Fabián González');
    setText('footer p', isEnglish ? 'Software for businesses, automation and Micro-SaaS.' : 'Software para negocios, automatización y Micro-SaaS.');
    const footerCopy = document.querySelector('.footer__copy');
    if (footerCopy) {
        footerCopy.innerHTML = isEnglish
            ? '© <span id="current-year"></span> Fabián González. All rights reserved.'
            : '© <span id="current-year"></span> Fabián González. Todos los derechos reservados.';
    }

    setText('#cert-modal-title', isEnglish ? 'Technical certifications' : 'Certificaciones técnicas');
    setText('.cert-modal .section__eyebrow', isEnglish ? 'Certifications' : 'Certificaciones');

    setText('#booking-modal-title', isEnglish ? 'Reserve a spot in my calendar' : 'Reserva un espacio en mi calendario');
    setText('.booking-modal__availability', isEnglish ? 'Availability: Mon-Fri · 08:00 to 18:00 · 30 minute slots' : 'Consultas disponibles: Lun-Vie · 08:00 a 18:00 · bloques de 30 min');
    const bookingLabels = document.querySelectorAll('.booking-modal__grid label > span');
    setTextAt(bookingLabels, 0, isEnglish ? 'Name' : 'Nombre');
    setTextAt(bookingLabels, 1, isEnglish ? 'Business email' : 'Email de negocios');
    setTextAt(bookingLabels, 2, isEnglish ? 'Date' : 'Fecha');
    setTextAt(bookingLabels, 3, isEnglish ? 'Time' : 'Hora');
    setTextAt(bookingLabels, 4, isEnglish ? 'Duration' : 'Duración');
    setTextAt(bookingLabels, 5, isEnglish ? 'Summary' : 'Resumen');
    const bookingInputs = document.querySelectorAll('#booking-name, #booking-email, #booking-notes');
    if (bookingInputs[0]) bookingInputs[0].placeholder = isEnglish ? 'Your name' : 'Tu nombre';
    if (bookingInputs[1]) bookingInputs[1].placeholder = isEnglish ? 'you@company.com' : 'tuempresa@correo.com';
    if (bookingInputs[2]) bookingInputs[2].placeholder = isEnglish ? 'Briefly tell me what you want to automate or launch.' : 'Cuéntame brevemente qué quieres automatizar o lanzar.';
    const bookingOptions = document.querySelectorAll('#booking-duration option');
    setTextAt(bookingOptions, 0, isEnglish ? '30 minutes' : '30 minutos');
    setTextAt(bookingOptions, 1, isEnglish ? '45 minutes' : '45 minutos');
    setTextAt(bookingOptions, 2, isEnglish ? '60 minutes' : '60 minutos');
    setText('#booking-cancel', isEnglish ? 'Cancel' : 'Cancelar');
    setText('#booking-submit', isEnglish ? 'Create event in Google Calendar' : 'Crear evento en Google Calendar');

    const bookingTimeElement = document.getElementById('booking-time');
    if (bookingTimeElement) {
        populateBookingSlots();
        bookingTimeElement.value = '10:00';
    }
};

languageToggle?.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'es' ? 'en' : 'es');
});

const setMenuState = (isOpen) => {
    navMenu.classList.toggle('is-open', isOpen);
    navToggle?.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
};

const closeMenu = () => setMenuState(false);

navToggle?.addEventListener('click', () => {
    const isOpen = !navMenu.classList.contains('is-open');
    setMenuState(isOpen);
});

navClose?.addEventListener('click', closeMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));

const getHeaderOffset = () => {
    const headerHeight = header?.offsetHeight || 0;
    return headerHeight + 16;
};

const scrollToTarget = (target) => {
    const top = Math.max(target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset(), 0);
    window.scrollTo({ top, behavior: 'smooth' });
};

document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    scrollToTarget(target);
});

const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.18,
    rootMargin: '0px 0px -80px 0px'
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((element) => observer.observe(element));

const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${sectionId}`;
            link.classList.toggle('active', isActive);
        });
    });
}, {
    threshold: 0.5,
    rootMargin: '-40% 0px -45% 0px'
});

sections.forEach((section) => activeLinkObserver.observe(section));

const updateHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 16);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

openCertificates?.addEventListener('click', () => {
    if (typeof certModal?.showModal === 'function') {
        certModal.showModal();
    }
});

closeCertificates?.addEventListener('click', () => {
    certModal?.close();
});

const openBookingModal = () => {
    if (typeof bookingModal?.showModal === 'function') {
        bookingModal.showModal();
    }
};

bookingButtons.forEach((button) => {
    button.addEventListener('click', openBookingModal);
});

bookingClose?.addEventListener('click', () => {
    bookingModal?.close();
});

bookingCancel?.addEventListener('click', () => {
    bookingModal?.close();
});

bookingModal?.addEventListener('click', (event) => {
    const rect = bookingModal.getBoundingClientRect();
    const isBackdropClick = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );

    if (isBackdropClick) {
        bookingModal.close();
    }
});

const toGoogleCalendarDate = (value, timeValue) => {
    const [year, month, day] = value.split('-').map(Number);
    const [hours, minutes] = timeValue.split(':').map(Number);
    const date = new Date(year, month - 1, day, hours, minutes, 0);
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
};

const formatBookingTime = (hours, minutes) => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const isWeekendDate = (value) => {
    if (!value) return false;
    const date = new Date(`${value}T00:00:00`);
    const day = date.getDay();
    return day === 0 || day === 6;
};

const nextBusinessDate = (fromDate = new Date()) => {
    const date = new Date(fromDate);
    date.setDate(date.getDate() + 1);

    while (date.getDay() === 0 || date.getDay() === 6) {
        date.setDate(date.getDate() + 1);
    }

    return date.toISOString().slice(0, 10);
};

const populateBookingSlots = () => {
    const bookingTime = document.getElementById('booking-time');
    if (!bookingTime) return;

    bookingTime.innerHTML = '';

    for (let hours = bookingStartHour; hours < bookingEndHour; hours += 1) {
        for (let minutes = 0; minutes < 60; minutes += bookingSlotMinutes) {
            if (hours === bookingEndHour && minutes > 0) {
                continue;
            }

            if (hours === bookingEndHour && minutes === 0) {
                continue;
            }

            if (hours === bookingEndHour - 1 && minutes === 30) {
                const option = document.createElement('option');
                option.value = formatBookingTime(hours, minutes);
                option.textContent = formatBookingTime(hours, minutes);
                bookingTime.appendChild(option);
                continue;
            }

            if (hours < bookingEndHour - 1 || minutes === 0) {
                const option = document.createElement('option');
                option.value = formatBookingTime(hours, minutes);
                option.textContent = formatBookingTime(hours, minutes);
                bookingTime.appendChild(option);
            }
        }
    }
};

bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('booking-name')?.value.trim();
    const email = document.getElementById('booking-email')?.value.trim();
    const date = document.getElementById('booking-date')?.value;
    const time = document.getElementById('booking-time')?.value;
    const duration = Number(document.getElementById('booking-duration')?.value || 30);
    const notes = document.getElementById('booking-notes')?.value.trim();

    if (!name || !email || !date || !time || !notes) {
        window.alert(currentLanguage === 'en'
            ? 'Complete name, email, date, time and summary to create the event.'
            : 'Completa nombre, email, fecha, hora y resumen para crear el evento.');
        return;
    }

    if (isWeekendDate(date)) {
        window.alert(currentLanguage === 'en'
            ? 'No consultations are available on Saturday or Sunday. Choose a business day.'
            : 'No hay consultas disponibles sábado ni domingo. Elegí un día hábil.');
        return;
    }

    const start = toGoogleCalendarDate(date, time);
    const endDate = new Date(`${date}T${time}:00`);
    endDate.setMinutes(endDate.getMinutes() + duration);

    const startMinutes = Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);
    const endMinutes = endDate.getHours() * 60 + endDate.getMinutes();
    const latestAllowedMinutes = bookingEndHour * 60;

    if (startMinutes < bookingStartHour * 60 || endMinutes > latestAllowedMinutes) {
        window.alert(currentLanguage === 'en'
            ? 'Choose a time between 08:00 and 18:00 in 30-minute slots.'
            : 'Elegí un horario entre 08:00 y 18:00 con bloques de 30 minutos.');
        return;
    }

    const end = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const subject = encodeURIComponent(`Consultoría gratuita con ${name}`);
    const details = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nProyecto:\n${notes}`);
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${subject}&dates=${start}/${end}&details=${details}&src=${encodeURIComponent(googleCalendarId)}&ctz=America%2FArgentina%2FBuenos_Aires`;

    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
    bookingModal?.close();
});

certModal?.addEventListener('click', (event) => {
    const rect = certModal.getBoundingClientRect();
    const isBackdropClick = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );

    if (isBackdropClick) {
        certModal.close();
    }
});

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
        window.alert(currentLanguage === 'en'
            ? 'Complete name, email and message before sending.'
            : 'Completa nombre, email y mensaje antes de enviar.');
        return;
    }

    const subject = encodeURIComponent(`Nuevo contacto comercial de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nProyecto:\n${message}`);
    const mailto = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
});

window.addEventListener('load', () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const now = new Date();
    const bookingDate = document.getElementById('booking-date');
    const bookingTime = document.getElementById('booking-time');

    if (bookingDate) {
        bookingDate.value = nextBusinessDate(now);
        bookingDate.addEventListener('change', () => {
            if (isWeekendDate(bookingDate.value)) {
                window.alert('Sábado y domingo están bloqueados. Elegí un día hábil.');
                bookingDate.value = nextBusinessDate(new Date(bookingDate.value));
            }
        });
    }

    if (bookingTime) {
        populateBookingSlots();
        bookingTime.value = '10:00';
    }
});

applyLanguage(currentLanguage);
