/**
 * Portafolio de Samuel David Gelvez Rodríguez
 * main.js - Control de interactividad (Idioma y navegación)
 */

// Diccionario de Traducciones (Español / Inglés)
const translations = {
  es: {
    // Navigation
    "nav-about": "Sobre Mí",
    "nav-objectives": "Objetivos",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    
    // Hero Section
    "hero-greeting": "Hola, soy",
    "hero-title": "Técnico en Desarrollo de Software | Desarrollador Full-Stack en Formación",
    "hero-description": "Preparándome para mi primera oportunidad profesional, desarrollando aplicaciones eficientes y accesibles.",
    "hero-cta-projects": "Ver Proyectos",
    "hero-cta-contact": "Contactar",

    // About Me Section
    "about-heading": "Sobre Mí",
    "about-title": "Diseñando soluciones desde el código",
    "about-p1": "Soy Técnico en Desarrollo de Software con un fuerte interés por el desarrollo Full Stack. Mi formación en Campuslands me ha permitido construir bases sólidas en tecnologías frontend (HTML, CSS, JavaScript) y experimentar con lógica backend utilizando Python. Me enfoco en escribir código limpio, semántico y accesible, buscando mi primera oportunidad en el sector tecnológico.",
    "about-card-education-title": "Formación",
    "about-card-education-subtitle1": "Técnico en Desarrollo de Software",
    "about-card-education-place1": "Campuslands (Floridablanca) • Ene - Dic - 2026",
    "about-card-education-subtitle2": "Bachiller",
    "about-card-education-place2": "Instituto Promoción Social (IPS Piedecuesta) • 2025",
    "about-card-skills-title": "Destrezas Personales",
    "about-card-skills-list": "Empatía • Disciplina • Creatividad • Adaptabilidad • Responsabilidad",
    "about-card-languages-title": "Idiomas",
    "about-card-languages-list1": "Español — Nativo",
    "about-card-languages-list2": "Inglés — B1",
    
    // Objectives Section
    "objectives-heading": "Objetivos",
    "objectives-title": "Proyección de Crecimiento",
    "objectives-subtitle": "Mi camino trazado hacia la madurez técnica y el desarrollo profesional continuo.",
    "objectives-short-title": "Corto Plazo",
    "objectives-short-desc": "Obtener mi primer rol profesional como desarrollador web, aportando conocimientos en tecnologías frontend y lógica backend básica, consolidando buenas prácticas.",
    "objectives-medium-title": "Mediano Plazo",
    "objectives-medium-desc": "Consolidarme como desarrollador Full Stack, dominando el diseño de bases de datos relacionales en MySQL y participando en integraciones más complejas.",
    "objectives-long-title": "Largo Plazo",
    "objectives-long-desc": "Liderar arquitecturas de sistemas, participar en proyectos de gran escala o de código abierto, y guiar a otros desarrolladores compartiendo conocimientos.",

    // Skills Section
    "skills-heading": "Habilidades",
    "skills-title": "Stack Técnico",
    "skills-title-heading": "Stack Técnico",
    "skills-subtitle": "Tecnologías y herramientas con las que trabajo día a día.",
    "skills-frontend-title": "Frontend",
    "skills-frontend-desc": "Desarrollo interfaces web modernas, responsivas y accesibles.",
    "skills-backend-title": "Backend",
    "skills-backend-desc": "Desarrollo de lógica de servidor y estructuración lógica de programas.",
    "skills-programming-title": "Programación",
    "skills-programming-desc": "Construcción de lógica backend, scripts y soluciones estructuradas en lenguajes de propósito general.",
    "skills-database-title": "Bases de Datos",
    "skills-database-desc": "Modelado, diseño y organización de datos en motores relacionales.",
    "skills-tools-title": "Herramientas",
    "skills-tools-desc": "Control de versiones, utilidades de editor de código y terminal Linux.",
    "skills-automation-title": "Automatizaciones",
    "skills-automation-desc": "Automatización de procesos, integraciones entre servicios, flujos de trabajo y asistentes automatizados mediante n8n.",
    "skills-learning-title": "Actualmente Aprendiendo",
    "skills-learning-desc": "Ampliando mis conocimientos en el ecosistema JavaScript moderno.",
    "skills-soft-title": "Destrezas Personales",
    "skills-soft-desc": "Cualidades personales y de comunicación para la colaboración efectiva.",
    "soft-badge-team": "Trabajo en equipo",
    "soft-badge-comm": "Comunicación",
    "soft-badge-problem": "Resolución de problemas",
    "soft-badge-learning": "Aprendizaje continuo",
    "soft-badge-adapt": "Adaptabilidad",
    "soft-badge-responsibility": "Responsabilidad",

    // Projects Section
    "projects-heading": "Proyectos Destacados",
    "projects-title-heading": "Lo que he construido",
    "projects-subtitle": "Una selección de proyectos que demuestran mis habilidades técnicas y creativas.",
    "project-bot-title": "Bot de Delivery para Cafetería",
    "project-bot-desc": "Aplicación de automatización desarrollada en n8n para la gestión de pedidos a domicilio en una cafetería local.",
    "project-ecommerce-title": "App de Ecommerce de Ropa",
    "project-ecommerce-desc": "Interfaz responsive enfocada en catálogo y visualización atractiva de artículos de moda.",
    "project-bank-title": "Sitio Web de Banco Ficticio",
    "project-bank-desc": "Maquetación estática de una sucursal bancaria virtual para experimentar con interfaces financieras limpias.",
    "project-pizzeria-title": "Base de Datos MySQL para Pizzería",
    "project-pizzeria-desc": "Modelado de base de datos relacional orientada al control de ingredientes, ventas y pedidos.",
    "project-tools-title": "Sistema de Préstamo de Herramientas Vecinal",
    "project-tools-desc": "Aplicación de consola en Python para coordinar y registrar el préstamo de herramientas en un vecindario.",
    
    // Buttons inside Projects
    "btn-github": "Ver repositorio",
    "btn-demo": "Demo",

    // Contact Section
    "contact-heading": "Contacto",
    "contact-title-heading": "¿Preparado para trabajar juntos?",
    "contact-subtitle": "¿Preparado para trabajar juntos?",
    "contact-p": "Actualmente me encuentro en busca de proyectos y de mi primera oportunidad laboral. Si tienes una propuesta o quieres conversar, no dudes en escribirme.",
    "contact-email-btn": "Enviar correo",
    "contact-github-btn": "Ver perfil",
    "contact-linkedin-btn": "Ver perfil",
    "contact-cv-download": "Descargar CV",

    // Footer
    "footer-text": "Diseñado y desarrollado por Samuel David Gelvez Rodríguez.",
  },
  en: {
    // Navigation
    "nav-about": "About Me",
    "nav-objectives": "Objectives",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    // Hero Section
    "hero-greeting": "Hi, I am",
    "hero-title": "Software Development Technician | Full-Stack Developer in Training",
    "hero-description": "Preparing for my first professional opportunity, building efficient and accessible web applications.",
    "hero-cta-projects": "View Projects",
    "hero-cta-contact": "Contact Me",

    // About Me Section
    "about-heading": "About Me",
    "about-title": "Designing solutions through code",
    "about-p1": "I am a Software Development Technician with a strong interest in Full Stack development. My training at Campuslands has allowed me to build solid foundations in frontend technologies (HTML, CSS, JavaScript) and experiment with backend logic using Python. I focus on writing clean, semantic, and accessible code, looking for my first opportunity in the tech sector.",
    "about-card-education-title": "Education",
    "about-card-education-subtitle1": "Software Development Technician",
    "about-card-education-place1": "Campuslands (Floridablanca) • Jan - Dec - 2026",
    "about-card-education-subtitle2": "High School Graduate",
    "about-card-education-place2": "Instituto Promoción Social (IPS Piedecuesta) • 2025",
    "about-card-skills-title": "Soft Skills",
    "about-card-skills-list": "Empathy • Discipline • Creativity • Adaptability • Responsibility",
    "about-card-languages-title": "Languages",
    "about-card-languages-list1": "Spanish — Native",
    "about-card-languages-list2": "English — B1",

    // Objectives Section
    "objectives-heading": "Objectives",
    "objectives-title": "Growth Projection",
    "objectives-subtitle": "My defined pathway toward technical maturity and continuous professional development.",
    "objectives-short-title": "Short Term",
    "objectives-short-desc": "Secure my first professional web developer role, contributing knowledge in frontend technologies and basic backend logic, while consolidating development best practices.",
    "objectives-medium-title": "Medium Term",
    "objectives-medium-desc": "Consolidate my role as a Full Stack developer, mastering relational database design in MySQL and participating in more complex integrations.",
    "objectives-long-title": "Long Term",
    "objectives-long-desc": "Lead systems architectures, participate in large-scale or open-source projects, and mentor other developers by sharing knowledge.",

    // Skills Section
    "skills-heading": "Skills",
    "skills-title": "Tech Stack",
    "skills-title-heading": "Tech Stack",
    "skills-subtitle": "Technologies and tools I work with every day.",
    "skills-frontend-title": "Frontend",
    "skills-frontend-desc": "Building modern, responsive, and accessible web user interfaces.",
    "skills-backend-title": "Backend",
    "skills-backend-desc": "Developing server logic and structured program architectures.",
    "skills-programming-title": "Programming",
    "skills-programming-desc": "Building backend logic, scripts, and structured solutions in general-purpose languages.",
    "skills-database-title": "Databases",
    "skills-database-desc": "Modeling, designing, and organizing data in relational engines.",
    "skills-tools-title": "Tools",
    "skills-tools-desc": "Version control, code editor utilities, and Linux terminal command line.",
    "skills-automation-title": "Automation",
    "skills-automation-desc": "Process automation, service integrations, workflows, and automated assistants using n8n.",
    "skills-learning-title": "Currently Learning",
    "skills-learning-desc": "Expanding my knowledge in the modern JavaScript ecosystem.",
    "skills-soft-title": "Soft Skills",
    "skills-soft-desc": "Interpersonal and communication qualities for effective collaboration.",
    "soft-badge-team": "Teamwork",
    "soft-badge-comm": "Communication",
    "soft-badge-problem": "Problem Solving",
    "soft-badge-learning": "Continuous Learning",
    "soft-badge-adapt": "Adaptability",
    "soft-badge-responsibility": "Responsibility",

    // Projects Section
    "projects-heading": "Featured Projects",
    "projects-title-heading": "What I've Built",
    "projects-subtitle": "A selection of projects that showcase my technical and creative skills.",
    "project-bot-title": "Delivery Bot for a Coffee Shop",
    "project-bot-desc": "Automation application developed in n8n for managing home delivery orders for a local coffee shop.",
    "project-ecommerce-title": "Clothing E-commerce App",
    "project-ecommerce-desc": "Responsive interface focusing on Catalog and attractive visualization of fashion items.",
    "project-bank-title": "Fictional Bank Website",
    "project-bank-desc": "Static layout of a virtual banking branch to experiment with clean financial interfaces.",
    "project-pizzeria-title": "MySQL Database for a Pizzeria",
    "project-pizzeria-desc": "Relational database modeling oriented towards managing ingredients, sales, and orders.",
    "project-tools-title": "Neighborhood Tool Lending System",
    "project-tools-desc": "Python console application to coordinate and register tool lending in a neighborhood.",

    // Buttons inside Projects
    "btn-github": "View Repository",
    "btn-demo": "Demo",

    // Contact Section
    "contact-heading": "Contact",
    "contact-title-heading": "Ready to work together?",
    "contact-subtitle": "Ready to work together?",
    "contact-p": "I am currently looking for projects and my first job opportunity. If you have a proposal or want to chat, feel free to drop me a line.",
    "contact-email-btn": "Send Email",
    "contact-github-btn": "View Profile",
    "contact-linkedin-btn": "View Profile",
    "contact-cv-download": "Download CV",

    // Footer
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
