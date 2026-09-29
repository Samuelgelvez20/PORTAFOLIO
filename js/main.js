/**
 * Portafolio de Samuel David Gelvez Rodríguez
 * main.js - Control de interactividad (Idioma y navegación)
 */

// Diccionario de Traducciones (Español / Inglés)
const translations = {
  es: {
    "nav-about": "Sobre Mí",
    "nav-objectives": "Objetivos",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "hero-greeting": "Hola, soy",
    "hero-title": "Técnico en Desarrollo de Software | Desarrollador Full-Stack en Formación",
    "hero-description": "Preparándome para mi primera oportunidad profesional, desarrollando aplicaciones eficientes y accesibles.",
    "hero-cta-projects": "Ver Proyectos",
    "hero-cta-contact": "Contactar",
    "about-heading": "Sobre Mí",
    "about-title": "Diseñando soluciones desde el código",
    "about-p1": "Soy Técnico en Desarrollo de Software y sigo mi formación en Campuslands, con interés real en el desarrollo Full Stack. Desarrollo interfaces web con HTML5, CSS3 y JavaScript, trabajo en Java con Swing y Maven, y diseño bases de datos relacionales en PostgreSQL y MySQL con PL/pgSQL. Automatizo procesos con n8n, uso Git y GitHub para el control de versiones y Docker para reproducir entornos de desarrollo. Sigo aprendiendo de forma continua para asumir proyectos cada vez más completos.",
    "about-card-education-title": "Formación",
    "about-card-education-subtitle1": "Técnico en Desarrollo de Software",
    "about-card-education-place1": "Campuslands (Floridablanca) • En curso • 2026",
    "about-card-education-subtitle2": "Bachiller",
    "about-card-education-place2": "Instituto Promoción Social (IPS Piedecuesta) • 2025",
    "about-card-skills-title": "Destrezas Personales",
    "about-card-skills-list": "Empatía • Disciplina • Creatividad • Adaptabilidad • Responsabilidad",
    "about-card-languages-title": "Idiomas",
    "about-card-languages-list1": "Español — Nativo",
    "about-card-languages-list2": "Inglés — B2",
    "offer-title": "Qué puedo ofrecer",
    "offer-intro": "Esto es lo que puedo aportar en un proyecto:",
    "offer-1-title": "Desarrollo web frontend",
    "offer-1-desc": "Interfaces responsive y accesibles construidas con HTML5, CSS3 y JavaScript, sin frameworks.",
    "offer-2-title": "Desarrollo con Java",
    "offer-2-desc": "Aplicaciones de escritorio en Java con Swing y Maven, y desarrollo backend con el framework Spring.",
    "offer-3-title": "Bases de datos",
    "offer-3-desc": "Diseño e implementación de bases de datos relacionales en PostgreSQL y MySQL: esquemas, funciones, procedimientos, triggers y vistas.",
    "offer-4-title": "Automatización con n8n",
    "offer-4-desc": "Flujos de trabajo automatizados que conectan servicios y aplicaciones mediante n8n.",
    "offer-5-title": "Versiones y entornos de desarrollo",
    "offer-5-desc": "Repositorios en Git y GitHub y entornos reproducibles con Docker y Docker Compose.",
    "offer-6-title": "Proyectos de principio a fin",
    "offer-6-desc": "Proyectos académicos y personales: desde el modelo de datos y la lógica hasta la interfaz y su documentación.",
    "objectives-heading": "Objetivos",
    "objectives-title": "Proyección de Crecimiento",
    "objectives-subtitle": "Mi camino hacia la madurez técnica y el desarrollo profesional.",
    "objectives-short-title": "Corto Plazo",
    "objectives-short-desc": "Obtener mi primer rol profesional como desarrollador web, aportando conocimientos en tecnologías frontend y lógica backend básica, consolidando buenas prácticas.",
    "objectives-medium-title": "Mediano Plazo",
    "objectives-medium-desc": "Consolidarme como desarrollador Full Stack, dominando el diseño de bases de datos relacionales en MySQL y participando en integraciones más complejas.",
    "objectives-long-title": "Largo Plazo",
    "objectives-long-desc": "Liderar arquitecturas de sistemas, participar en proyectos de gran escala o de código abierto, y guiar a otros desarrolladores compartiendo conocimientos.",
    "skills-heading": "Habilidades",
    "skills-title-heading": "Stack Técnico",
    "skills-subtitle": "Tecnologías y herramientas con las que trabajo día a día.",
    "skills-frontend-title": "Frontend",
    "skills-frontend-desc": "Desarrollo interfaces web modernas, responsivas y accesibles.",
    "skills-programming-title": "Programación",
    "skills-programming-desc": "Construcción de lógica de aplicación y scripts en Java, Python y JavaScript.",
    "skills-database-title": "Bases de Datos",
    "skills-database-desc": "Diseño, modelado y consultas en bases de datos relacionales con PostgreSQL, PL/pgSQL y MySQL.",
    "skills-frameworks-title": "Backend / Frameworks",
    "skills-frameworks-desc": "Desarrollo backend en Java con el framework Spring.",
    "skills-tools-title": "Herramientas y Entorno",
    "skills-tools-desc": "Control de versiones, entornos de desarrollo reproducibles y terminal Linux.",
    "skills-automation-title": "Automatizaciones",
    "skills-automation-desc": "Automatización de procesos, integraciones entre servicios y flujos de trabajo mediante n8n.",
    "skills-soft-title": "Destrezas Personales",
    "skills-soft-desc": "Cualidades personales y de comunicación para la colaboración efectiva.",
    "soft-badge-team": "Trabajo en equipo",
    "soft-badge-comm": "Comunicación",
    "soft-badge-responsibility": "Responsabilidad",
    "soft-badge-learning": "Aprendizaje continuo",
    "soft-badge-problem": "Resolución de problemas",
    "projects-heading": "Proyectos Destacados",
    "projects-title-heading": "Lo que he construido",
    "projects-subtitle": "Una selección de proyectos que demuestran mis habilidades técnicas y creativas.",
    "project-f1-title": "F1 Simulator",
    "project-f1-desc": "Simulador de sesiones de clasificación de Fórmula 1 desarrollado en Java: gestión de circuitos, pilotos, equipos y vehículos, con simulación concurrente y persistencia en PostgreSQL.",
    "project-sst-title": "Gestión SST-PESV",
    "project-sst-desc": "Base de datos relacional multi-tenant en PostgreSQL para la gestión de Salud y Seguridad en el Trabajo y Seguridad Vial, con funciones y procedimientos PL/pgSQL, triggers y vistas materializadas orquestadas con Docker Compose.",
    "project-bank-title": "Acmebank Web",
    "project-bank-desc": "Portal de autogestión bancaria con registro, inicio de sesión, consignaciones, retiros y pagos de servicios, construido con HTML5, CSS3 y JavaScript y con los datos guardados en el navegador (localStorage / sessionStorage).",
    "project-piccolo-title": "Pizzeria Don Piccolo",
    "project-piccolo-desc": "Base de datos relacional en MySQL/MariaDB que cubre el proceso de venta de pizzas: clientes, catálogo, pedidos, repartidores y pagos, con funciones, procedimientos almacenados, triggers y vistas.",
    "project-sica-title": "SICA-ZonaAcme",
    "project-sica-desc": "Aplicación de escritorio en Java con interfaz Swing sobre PostgreSQL, con control de acceso basado en roles (RBAC) y auditoría de operaciones, gestionada con Maven.",
    "project-ecommerce-title": "E-commerce App",
    "project-ecommerce-desc": "Frontend mobile-first para una tienda de ropa desarrollado con HTML5 y CSS3 nativo: catálogo con búsqueda y categorías, páginas de detalle de producto y checkout.",
    "btn-github": "Ver repositorio",
    "project-repo-pending": "URL del repositorio pendiente",
    "contact-heading": "Contacto",
    "contact-title-heading": "¿Preparado para trabajar juntos?",
    "contact-p": "Actualmente me encuentro en busca de proyectos y de mi primera oportunidad laboral. Si tienes una propuesta o quieres conversar, no dudes en escribirme.",
    "contact-email-btn": "Enviar correo",
    "contact-github-btn": "Ver perfil",
    "contact-linkedin-btn": "Ver perfil",
    "contact-cv-download": "Descargar CV",
    "footer-text": "Diseñado y desarrollado por Samuel David Gelvez Rodríguez.",
  },
  en: {
    "nav-about": "About Me",
    "nav-objectives": "Objectives",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-greeting": "Hi, I am",
    "hero-title": "Software Development Technician | Full-Stack Developer in Training",
    "hero-description": "Preparing for my first professional opportunity, building efficient and accessible web applications.",
    "hero-cta-projects": "View Projects",
    "hero-cta-contact": "Contact Me",
    "about-heading": "About Me",
    "about-title": "Designing solutions through code",
    "about-p1": "I am a Software Development Technician currently continuing my training at Campuslands, with a genuine interest in Full Stack development. I build web interfaces with HTML5, CSS3 and JavaScript, work with Java using Swing and Maven, and design relational databases in PostgreSQL and MySQL with PL/pgSQL. I automate processes with n8n, use Git and GitHub for version control, and Docker to reproduce development environments. I keep learning continuously to take on increasingly complete projects.",
    "about-card-education-title": "Education",
    "about-card-education-subtitle1": "Software Development Technician",
    "about-card-education-place1": "Campuslands (Floridablanca) • In progress • 2026",
    "about-card-education-subtitle2": "High School Graduate",
    "about-card-education-place2": "Instituto Promoción Social (IPS Piedecuesta) • 2025",
    "about-card-skills-title": "Soft Skills",
    "about-card-skills-list": "Empathy • Discipline • Creativity • Adaptability • Responsibility",
    "about-card-languages-title": "Languages",
    "about-card-languages-list1": "Spanish — Native",
    "about-card-languages-list2": "English — B2",
    "offer-title": "What I can offer",
    "offer-intro": "This is what I can bring to a project:",
    "offer-1-title": "Frontend web development",
    "offer-1-desc": "Responsive and accessible interfaces built with HTML5, CSS3 and JavaScript, without frameworks.",
    "offer-2-title": "Java development",
    "offer-2-desc": "Desktop applications in Java with Swing and Maven, and backend development with the Spring framework.",
    "offer-3-title": "Databases",
    "offer-3-desc": "Design and implementation of relational databases in PostgreSQL and MySQL: schemas, functions, procedures, triggers and views.",
    "offer-4-title": "Automation with n8n",
    "offer-4-desc": "Automated workflows that connect services and applications through n8n.",
    "offer-5-title": "Version control and development environments",
    "offer-5-desc": "Repositories in Git and GitHub and reproducible environments with Docker and Docker Compose.",
    "offer-6-title": "End-to-end projects",
    "offer-6-desc": "Academic and personal projects: from the data model and logic to the interface and its documentation.",
    "objectives-heading": "Objectives",
    "objectives-title": "Growth Projection",
    "objectives-subtitle": "My pathway toward technical maturity and continuous professional development.",
    "objectives-short-title": "Short Term",
    "objectives-short-desc": "Secure my first professional web developer role, contributing knowledge in frontend technologies and basic backend logic, while consolidating development best practices.",
    "objectives-medium-title": "Medium Term",
    "objectives-medium-desc": "Consolidate my role as a Full Stack developer, mastering relational database design in MySQL and participating in more complex integrations.",
    "objectives-long-title": "Long Term",
    "objectives-long-desc": "Lead systems architectures, participate in large-scale or open-source projects, and mentor other developers by sharing knowledge.",
    "skills-heading": "Skills",
    "skills-title-heading": "Tech Stack",
    "skills-subtitle": "Technologies and tools I work with every day.",
    "skills-frontend-title": "Frontend",
    "skills-frontend-desc": "Building modern, responsive, and accessible web user interfaces.",
    "skills-programming-title": "Programming",
    "skills-programming-desc": "Building application logic and scripts with Java, Python and JavaScript.",
    "skills-database-title": "Databases",
    "skills-database-desc": "Design, modeling and queries in relational databases using PostgreSQL, PL/pgSQL and MySQL.",
    "skills-frameworks-title": "Backend / Frameworks",
    "skills-frameworks-desc": "Backend development in Java with the Spring framework.",
    "skills-tools-title": "Tools & Environment",
    "skills-tools-desc": "Version control, reproducible development environments, and the Linux terminal.",
    "skills-automation-title": "Automation",
    "skills-automation-desc": "Process automation, service integrations, and workflows using n8n.",
    "skills-soft-title": "Soft Skills",
    "skills-soft-desc": "Interpersonal and communication qualities for effective collaboration.",
    "soft-badge-team": "Teamwork",
    "soft-badge-comm": "Communication",
    "soft-badge-responsibility": "Responsibility",
    "soft-badge-learning": "Continuous Learning",
    "soft-badge-problem": "Problem Solving",
    "projects-heading": "Featured Projects",
    "projects-title-heading": "What I've Built",
    "projects-subtitle": "A selection of projects that showcase my technical and creative skills.",
    "project-f1-title": "F1 Simulator",
    "project-f1-desc": "Formula 1 qualifying simulator built in Java: management of circuits, drivers, teams and cars, with concurrent simulation and PostgreSQL persistence.",
    "project-sst-title": "SST-PESV Management",
    "project-sst-desc": "Multi-tenant relational database in PostgreSQL for occupational health and safety (SST) and road safety (PESV) management, with PL/pgSQL functions and procedures, triggers and materialized views orchestrated with Docker Compose.",
    "project-bank-title": "Acmebank Web",
    "project-bank-desc": "Self-service banking portal with sign-up, login, deposits, withdrawals and utility payments, built with HTML5, CSS3 and JavaScript, storing data in the browser (localStorage / sessionStorage).",
    "project-piccolo-title": "Pizzeria Don Piccolo",
    "project-piccolo-desc": "Relational database in MySQL/MariaDB covering the pizza sales process: customers, catalog, orders, delivery drivers and payments, with functions, stored procedures, triggers and views.",
    "project-sica-title": "SICA-ZonaAcme",
    "project-sica-desc": "Desktop application in Java with a Swing interface on PostgreSQL, featuring role-based access control (RBAC) and operation auditing, managed with Maven.",
    "project-ecommerce-title": "E-commerce App",
    "project-ecommerce-desc": "Mobile-first frontend for a clothing store built with native HTML5 and CSS3: catalog with search and categories, product detail pages and checkout.",
    "btn-github": "View Repository",
    "project-repo-pending": "Repository URL pending",
    "contact-heading": "Contact",
    "contact-title-heading": "Ready to work together?",
    "contact-p": "I am currently looking for projects and my first job opportunity. If you have a proposal or want to chat, feel free to drop me a line.",
    "contact-email-btn": "Send Email",
    "contact-github-btn": "View Profile",
    "contact-linkedin-btn": "View Profile",
    "contact-cv-download": "Download CV",
    "footer-text": "Designed and developed by Samuel David Gelvez Rodríguez.",
  }
};

// Configuración de Idioma por Defecto (Español)
let currentLanguage = localStorage.getItem("portfolio-lang") || "es";

/**
 * Aplica las traducciones a los elementos con el atributo data-i18n
 * @param {string} lang - Código de idioma ('es' o 'en')
 */
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Si el elemento es un input/textarea con placeholder, traducimos el placeholder
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  const cvButton = document.getElementById("cv-download");

  if (cvButton) {
    cvButton.href =
      currentLanguage === "en"
        ? "cv/CV_SAMUELGELVEZ_ENGLISH.pdf"
        : "cv/CV_SAMUELGELVEZ.pdf";
  }

  // Actualizar el atributo lang del HTML para SEO y lectores de pantalla
  document.documentElement.setAttribute("lang", lang);

  // Marcar visualmente el botón de idioma activo
  updateLanguageButtons(lang);
}

/**
 * Actualiza el estado visual de los botones selectores de idioma
 * @param {string} activeLang 
 */
function updateLanguageButtons(activeLang) {
  const btnEs = document.getElementById("lang-btn-es");
  const btnEn = document.getElementById("lang-btn-en");
  
  if (btnEs && btnEn) {
    if (activeLang === "es") {
      btnEs.classList.add("active");
      btnEn.classList.remove("active");
      btnEs.setAttribute("aria-pressed", "true");
      btnEn.setAttribute("aria-pressed", "false");
    } else {
      btnEs.classList.remove("active");
      btnEn.classList.add("active");
      btnEs.setAttribute("aria-pressed", "false");
      btnEn.setAttribute("aria-pressed", "true");
    }
  }
}

/**
 * Inicialización al cargar el DOM
 */
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Iconos Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Aplicar traducciones iniciales
  applyTranslations(currentLanguage);

  // 1. Escuchadores de eventos para los botones de idioma
  const btnEs = document.getElementById("lang-btn-es");
  const btnEn = document.getElementById("lang-btn-en");

  if (btnEs) {
    btnEs.addEventListener("click", () => {
      currentLanguage = "es";
      localStorage.setItem("portfolio-lang", currentLanguage);
      applyTranslations(currentLanguage);
    });
  }

  if (btnEn) {
    btnEn.addEventListener("click", () => {
      currentLanguage = "en";
      localStorage.setItem("portfolio-lang", currentLanguage);
      applyTranslations(currentLanguage);
    });
  }

  // 2. Control del Menú Móvil (Hamburguesa)
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("open");
      document.body.classList.toggle("nav-lock"); // Prevenir scroll al abrir menú
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("open");
        document.body.classList.remove("nav-lock");
      });
    });

    // Cerrar menú con tecla Escape (Accesibilidad)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mainNav.classList.contains("open")) {
        navToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("open");
        document.body.classList.remove("nav-lock");
        navToggle.focus();
      }
    });
  }

  // 3. Scroll Spy (Intersection Observer) para Enlaces Activos
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".nav-links a");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "-25% 0px -55% 0px", // Activa el estado cuando la sección cruza el centro de la pantalla
    threshold: 0
  };

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        menuLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    scrollSpyObserver.observe(section);
  });

  // 4. Scroll Reveal (Efecto de aparición de secciones)
  const revealElements = document.querySelectorAll(".reveal");
  
  const revealObserverOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // Dejar de observar tras activarse
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
