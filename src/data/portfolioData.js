export const portfolioData = {
  personal: {
    name: "Samuel David Gelvez Rodríguez",
    shortName: "SGR",
    titleEs: "Técnico en Desarrollo De Software | Desarrollador Backend Junior",
    titleEn: "Software Development Technician | Junior Backend Developer",
    location: "Piedecuesta / Bucaramanga, Santander • Colombia",
    availability: "Disponible para oportunidades presenciales y remotas",
    email: "samueldavidgelvezr@gmail.com",
    github: "https://github.com/Samuelgelvez20",
    linkedin: "https://www.linkedin.com/in/samuelgelvezdev/",
    avatar: "images/profile/perfil_img.webp",
    cvEs: "cv/CV_Samuel Gelvez_Desarrollador Backend.pdf",
    cvEn: "cv/CV_Samuel Gelvez_Junior Backend Developer.pdf",
    cvPendingUpdate: false,
  },

  translations: {
    es: {
      nav: {
        about: "Sobre Mí",
        objectives: "Objetivos",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        greeting: "Hola, soy",
        title: "Técnico en Desarrollo De Software",
        subtitle: "Desarrollador Backend Junior",
        description: "Formado en el ecosistema de Campuslands. Cuento con una sólida base técnica en ingeniería de software, arquitectura backend modular desacoplada con Java (Spring Boot) y Python (FastAPI), diseño de bases de datos relacionales (PostgreSQL, MySQL), principios SOLID, Arquitectura Hexagonal, concurrencia multihilo y entornos reproducibles con Docker sobre Linux.",
        ctaProjects: "Ver Proyectos Backend",
        ctaContact: "Contactar",
        badgeAvailable: "Disponible para roles presenciales & remotos",
        location: "Piedecuesta / Bucaramanga, Santander • Colombia",
      },
      about: {
        tagline: "Sobre Mí",
        title: "Ingeniería backend con arquitectura limpia, disciplina y rigor técnico",
        p1: "Desarrollador Backend Junior formado en el ecosistema de Campuslands. Cuento con una sólida base técnica en ingeniería de software, arquitectura backend modular desacoplada con Java (Spring Boot) y Python (FastAPI), y diseño de bases de datos relacionales (PostgreSQL, MySQL) con persistencia estructurada.",
        p2: "Enfocado en la excelencia de código mediante la aplicación rigurosa de principios SOLID, patrones de diseño (Arquitectura Hexagonal, Domain-Driven Design), concurrencia multihilo y estandarización de entornos con Docker en sistemas Linux. Destaco por mi pensamiento analítico, disciplina metódica para resolver problemas y comunicación asertiva para colaborar eficazmente en equipos ágiles.",
        educationTitle: "Educación & Formación",
        edu1Title: "Técnico Laboral en Desarrollo de Software",
        edu1Place: "Campuslands (Floridablanca, Santander) • Dic 2025 – Nov 2026",
        edu2Title: "Bachiller Académico",
        edu2Place: "Instituto Promoción Social (IPS Piedecuesta) • Graduado 2025",
        softSkillsTitle: "Competencias Clave & Valores",
        softSkillsList: "Resolución estructurada de problemas • Pensamiento crítico y analítico • Comunicación asertiva • Trabajo en equipo colaborativo (Git Flow / PRs) • Adaptabilidad y aprendizaje continuo • Gestión eficiente del tiempo",
        languagesTitle: "Idiomas",
        langNative: "Español — Nativo",
        langEnglish: "Inglés — B1 (Técnico y Conversacional)",
        offerTitle: "¿Qué valor puedo aportar a tu equipo de ingeniería?",
        offerIntro: "Competencias backend probadas y listas para impactar en proyectos reales:",
        offerItems: [
          {
            title: "Arquitecturas Modulares (Hexagonal & DDD)",
            desc: "Diseño desacoplado bajo Puertos y Adaptadores y Domain-Driven Design para garantizar total independencia de la lógica de negocio frente a bases de datos y frameworks."
          },
          {
            title: "Desarrollo Backend Empresarial (Java & Spring Boot)",
            desc: "Construcción de APIs RESTful robustas con Java 21, Spring Boot, inyección de dependencias, mapeo con JPA/Hibernate y JDBC optimizado."
          },
          {
            title: "APIs Asíncronas & Microservicios (Python & FastAPI)",
            desc: "APIs RESTful de alto rendimiento en FastAPI con validación estricta de esquemas en runtime con Pydantic v2, orquestación con LangChain y pruebas unitarias con Pytest."
          },
          {
            title: "Bases de Datos Relacionales (PostgreSQL & MySQL)",
            desc: "Diseño de modelos relacionales normalizados, control transaccional ACID, funciones y triggers en PL/pgSQL, migraciones con Flyway e indexación."
          },
          {
            title: "Concurrencia Multihilo & Procesamiento Paralelo",
            desc: "Gestión avanzada de subprocesos con ExecutorService, Callable, Thread Pools y sincronización de memoria compartida sin condiciones de carrera."
          },
          {
            title: "DevOps, Docker & Ecosistema Linux",
            desc: "Estandarización y reproducción de entornos backend mediante Docker, Docker Compose, automatización con scripts Bash y operación en sistemas Linux."
          }
        ]
      },
      objectives: {
        tagline: "Metas & Trayectoria",
        title: "Proyección Profesional",
        subtitle: "Un plan estratégico de evolución hacia la madurez y excelencia en ingeniería de software backend.",
        shortTitle: "Corto Plazo",
        shortDesc: "Insertarme en el mercado laboral como Desarrollador Backend Junior para aplicar mis competencias en Java/Spring Boot, Python/FastAPI y bases de datos relacionales en entornos de producción.",
        mediumTitle: "Mediano Plazo",
        mediumDesc: "Consolidarme como referente backend en el equipo, profundizando en arquitecturas orientadas a eventos, sistemas distribuidos, optimización de latencia y microservicios de alta concurrencia.",
        longTitle: "Largo Plazo",
        longDesc: "Evolucionar hacia roles de Arquitecto de Software Backend, diseñando infraestructuras escalables, resilientes y de alta disponibilidad para plataformas de impacto global.",
      },
      skills: {
        tagline: "Stack Técnico",
        title: "Habilidades & Tecnologías",
        subtitle: "Herramientas y estándares de ingeniería que domino y aplico en desarrollo backend.",
        categories: {
          backend: "Backend & Frameworks",
          databases: "Bases de Datos & Persistencia",
          architecture: "Arquitectura & Patrones",
          devops: "DevOps & Infraestructura",
          ai_tools: "Herramientas, IA & Testing",
          soft: "Competencias Profesionales",
        }
      },
      projects: {
        tagline: "Portafolio Backend",
        title: "Proyectos Destacados",
        subtitle: "Sistemas distribuidos, APIs RESTful, motores concurrentes y arquitecturas limpias construidas con rigor técnico.",
        filterAll: "Todos",
        filterJava: "Java & Spring Boot",
        filterPython: "Python & FastAPI / IA",
        repoBtn: "Ver Repositorio",
        demoBtn: "Demo en Vivo",
        noDemoYet: "Documentación API",
      },
      contact: {
        tagline: "Contacto",
        title: "¿Listo para construir sistemas robustos juntos?",
        description: "Me encuentro activamente en búsqueda de mi primera oportunidad laboral o pasantía como Desarrollador Backend Junior, disponible para roles presenciales y remotos.",
        copyEmail: "Copiar correo",
        emailCopied: "¡Copiado!",
        sendEmail: "Enviar correo",
        viewProfile: "Ver perfil",
        downloadCv: "Descargar CV Backend",
      },
      footer: {
        tagline: "Técnico en Desarrollo De Software / Desarrollador Backend Junior",
        rights: "Todos los derechos reservados.",
        backToTop: "Volver arriba",
      }
    },

    en: {
      nav: {
        about: "About Me",
        objectives: "Objectives",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I am",
        title: "Software Development Technician",
        subtitle: "Junior Backend Developer",
        description: "Trained through the high-performance program at Campuslands. Strong technical foundation in software engineering, decoupled modular backend architectures using Java (Spring Boot) and Python (FastAPI), relational database design (PostgreSQL, MySQL), SOLID principles, Hexagonal Architecture, multithreaded concurrency, and environment reproducibility with Docker on Linux systems.",
        ctaProjects: "View Backend Projects",
        ctaContact: "Get in Touch",
        badgeAvailable: "Open to in-person & remote roles",
        location: "Piedecuesta / Bucaramanga, Santander • Colombia",
      },
      about: {
        tagline: "About Me",
        title: "Backend software engineering driven by clean architecture, discipline and purpose",
        p1: "Junior Backend Developer trained through the high-performance program at Campuslands. Strong technical foundation in software engineering, decoupled modular backend architectures using Java (Spring Boot) and Python (FastAPI), and relational database design (PostgreSQL, MySQL) with structured persistence.",
        p2: "Dedicated to code excellence through the rigorous application of SOLID principles, design patterns (Hexagonal Architecture, Domain-Driven Design), multithreaded concurrency, and environment reproducibility with Docker on Linux systems. Recognized for analytical problem-solving, methodical discipline, and assertive communication to collaborate effectively in agile Scrum engineering teams.",
        educationTitle: "Education & Training",
        edu1Title: "Software Development Technician",
        edu1Place: "Campuslands (Floridablanca, Santander) • Dec 2025 – Nov 2026",
        edu2Title: "High School Diploma",
        edu2Place: "Instituto Promoción Social (IPS Piedecuesta) • Graduated 2025",
        softSkillsTitle: "Core Competencies & Values",
        softSkillsList: "Structured Problem Solving • Critical & Analytical Thinking • Assertive Communication • Collaborative Teamwork (Git Flow / PRs) • Adaptability & Continuous Learning • Efficient Time Management",
        languagesTitle: "Languages",
        langNative: "Spanish — Native",
        langEnglish: "English — B1 (Technical & Conversational)",
        offerTitle: "What value do I bring to your engineering team?",
        offerIntro: "Hands-on backend capabilities ready to make an immediate impact on real systems:",
        offerItems: [
          {
            title: "Modular Architectures (Hexagonal & DDD)",
            desc: "Decoupled domain modeling with Ports and Adapters and Domain-Driven Design, ensuring business logic independence from frameworks and relational databases."
          },
          {
            title: "Enterprise Backend (Java & Spring Boot)",
            desc: "Engineering high-reliability RESTful APIs with Java 21, Spring Boot, dependency injection, JPA/Hibernate ORM mapping, and optimized JDBC persistence."
          },
          {
            title: "Asynchronous APIs & Microservices (Python & FastAPI)",
            desc: "High-performance RESTful APIs built with FastAPI, strict runtime schema validation using Pydantic v2, LangChain pipelines, and Pytest suites."
          },
          {
            title: "Relational Databases (PostgreSQL & MySQL)",
            desc: "Normalized schema design, ACID transactions, stored procedures, PL/pgSQL triggers, audit logging, and automated migrations with Flyway."
          },
          {
            title: "Multithreaded Concurrency & Parallel Execution",
            desc: "Advanced thread management using ExecutorService, Callable, Thread Pools, and thread-safe shared memory synchronization without race conditions."
          },
          {
            title: "DevOps, Docker & Linux Environment",
            desc: "Standardizing development and deployment lifecycles with Docker, multi-container Docker Compose architectures, Bash scripts, and Linux servers."
          }
        ]
      },
      objectives: {
        tagline: "Roadmap & Vision",
        title: "Professional Growth",
        subtitle: "A strategic progression toward senior-level backend software engineering maturity.",
        shortTitle: "Short Term",
        shortDesc: "Join a high-performing engineering team as a Junior Backend Developer, applying core strengths in Java/Spring Boot, Python/FastAPI, and relational databases in production systems.",
        mediumTitle: "Medium Term",
        mediumDesc: "Deepen expertise in event-driven architectures, distributed systems, database query optimization, and high-concurrency microservices.",
        longTitle: "Long Term",
        longDesc: "Evolve into a Backend Software Architect, designing resilient, fault-tolerant, and horizontally scalable backends for mission-critical software platforms.",
      },
      skills: {
        tagline: "Tech Stack",
        title: "Skills & Technologies",
        subtitle: "Engineering tools, languages, and architectural patterns I apply in backend development.",
        categories: {
          backend: "Backend & Frameworks",
          databases: "Databases & Persistence",
          architecture: "Architecture & Patterns",
          devops: "DevOps & Infrastructure",
          ai_tools: "Tools, AI & Testing",
          soft: "Professional Competencies",
        }
      },
      projects: {
        tagline: "Backend Portfolio",
        title: "Featured Projects",
        subtitle: "Distributed architectures, RESTful APIs, concurrent engines, and domain-driven backends built with clean code standards.",
        filterAll: "All",
        filterJava: "Java & Spring Boot",
        filterPython: "Python & FastAPI / AI",
        repoBtn: "View Repository",
        demoBtn: "Live Demo",
        noDemoYet: "API Docs",
      },
      contact: {
        tagline: "Contact",
        title: "Let's build resilient backend systems together",
        description: "Actively seeking my first professional opportunity or internship as a Junior Backend Developer, available for on-site and remote roles.",
        copyEmail: "Copy email",
        emailCopied: "Copied!",
        sendEmail: "Send email",
        viewProfile: "View profile",
        downloadCv: "Download Backend CV",
      },
      footer: {
        tagline: "Software Development Technician / Junior Backend Developer",
        rights: "All rights reserved.",
        backToTop: "Back to top",
      }
    }
  },

  skillsData: [
    {
      categoryKey: "backend",
      skills: [
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "Python" },
        { name: "FastAPI" },
        { name: "Maven" },
        { name: "JDBC" },
        { name: "Hibernate" },
      ]
    },
    {
      categoryKey: "databases",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "JSON" },
        { name: "SQL" },
      ]
    },
    {
      categoryKey: "architecture",
      skills: [
        { name: "Arquitectura Hexagonal" },
        { name: "Domain-Driven Design (DDD)" },
        { name: "Principios SOLID" },
        { name: "Concurrencia / Multihilo" },
        { name: "Patrones de Diseño (GoF)" },
      ]
    },
    {
      categoryKey: "devops",
      skills: [
        { name: "Docker" },
        { name: "Docker Compose" },
        { name: "Linux" },
        { name: "Git" },
        { name: "GitHub" },
      ]
    },
    {
      categoryKey: "ai_tools",
      skills: [
        { name: "LangChain" },
        { name: "Pydantic" },
        { name: "Integración LLMs" },
        { name: "Pytest" },
      ]
    }
  ],

  projectsList: [
    {
      id: "renta-herramientas-construccion",
      category: "java",
      number: "01",
      image: "images/projects/RentaHerramientas.webp",
      repoUrl: "https://github.com/Samuelgelvez20/Plataforma-de-Renta-de-Herramientas-de-Construccion",
      demoUrl: null,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Maven", "Arquitectura Hexagonal"],
      es: {
        title: "Plataforma de Renta de Maquinaria y Construcción",
        description: "Diseño bajo Arquitectura Hexagonal (Puertos y Adaptadores) y principios DDD para garantizar la total independencia de la lógica de negocio frente a frameworks y bases de datos. Construcción de módulos transaccionales de inventario, cálculo de tarifas dinámicas, liquidación de averías y despliegue estandarizado en contenedores Docker.",
      },
      en: {
        title: "Construction Machinery & Equipment Rental Platform",
        description: "Architected using Hexagonal Architecture (Ports & Adapters) and DDD principles to ensure full business logic independence from frameworks and databases. Engineered transactional inventory modules, dynamic rate calculation, equipment damage settlement, and standardized Docker container deployment.",
      }
    },
    {
      id: "tribunal-bimmer",
      category: "python",
      number: "02",
      image: "images/projects/TribunalBimmer.webp",
      repoUrl: "https://github.com/Samuelgelvez20/Tribunal-Bimmer",
      demoUrl: null,
      tags: ["Python", "FastAPI", "Pydantic v2", "LangChain", "Docker", "Pytest", "SOLID"],
      es: {
        title: "Tribunal Bimmer — Sistema Analítico y Percepción con IA",
        description: "Implementación de una API RESTful de alto rendimiento en FastAPI con contratos de datos estrictos validados en tiempo de ejecución con Pydantic v2. Orquestación de pipelines con LangChain para clasificación semántica y análisis de percepción en tiempo real con modelos LLM y suite de pruebas con Pytest.",
      },
      en: {
        title: "Tribunal Bimmer — AI Perception & Analytics System",
        description: "Implemented a high-performance RESTful API with FastAPI enforcing strict data contracts validated at runtime using Pydantic v2. Orchestrated analytical pipelines with LangChain for real-time semantic classification and perception analysis with LLMs, covered by an automated Pytest test suite.",
      }
    },
    {
      id: "sica-zonaacme",
      category: "java",
      number: "03",
      image: "images/projects/SICA-ZonaAcme.webp",
      repoUrl: "https://github.com/Samuelgelvez20/SICA-ZonaAcme",
      demoUrl: null,
      tags: ["Java 21", "PostgreSQL", "Docker", "JDBC", "Maven", "Arquitectura Hexagonal"],
      es: {
        title: "SICA — Sistema Integrado de Control de Acceso (Zona Acme)",
        description: "Arquitectura desacoplada en Java 21 estructurada por Vertical Slices, gestionando control de acceso perimetral para un complejo corporativo de +30 empresas. Implementación de patrones de software: Observer para notificaciones de seguridad en tiempo real, Strategy para validaciones de ingreso y persistencia optimizada con JDBC sobre PostgreSQL en Docker.",
      },
      en: {
        title: "SICA — Enterprise Access Control System (Zona Acme)",
        description: "Decoupled Java 21 architecture organized into Vertical Slices, managing perimeter security and access control for an enterprise complex with 30+ corporate tenants. Implemented key design patterns: Observer for real-time guard notifications, Strategy for visitor entry validation rules, and optimized JDBC persistence on Dockerized PostgreSQL.",
      }
    },
    {
      id: "f1-simulator",
      category: "java",
      number: "04",
      image: "images/projects/F1-simulator.webp",
      repoUrl: "https://github.com/Samuelgelvez20/f1-simulator",
      demoUrl: null,
      tags: ["Java 21", "Concurrencia", "Multithreading", "ExecutorService", "PostgreSQL", "JDBC"],
      es: {
        title: "F1 Simulator — Motor de Concurrencia y Simulación Multihilo",
        description: "Simulador concurrente multihilo en Java 21 con procesamiento en paralelo (un hilo dedicado por monoplaza coordinados mediante ExecutorService e invokeAll), sincronización en memoria compartida sin condiciones de carrera, simulación climática con penalizaciones algorítmicas del 10% y persistencia relacional en PostgreSQL.",
      },
      en: {
        title: "F1 Simulator — Multithreading Concurrency Engine",
        description: "High-performance multithreaded simulation engine in Java 21 featuring parallel processing (dedicated thread per car coordinated via ExecutorService and invokeAll), thread-safe shared memory synchronization, dynamic weather penalty calculations, and PostgreSQL persistence.",
      }
    },
    {
      id: "cvlens-ai",
      category: "python",
      number: "05",
      image: "images/projects/CVLens-AI.webp",
      repoUrl: "https://github.com/Samuelgelvez20/CVLens-AI",
      demoUrl: null,
      tags: ["Python", "FastAPI", "LangChain", "Google Gemini", "Pydantic v2", "PostgreSQL", "Docker"],
      es: {
        title: "CVLens-AI — Motor de Análisis Curricular y Matching con LLMs",
        description: "Motor backend inteligente de procesamiento y evaluación concurrente de currículums en PDF (PyPDF2) asistido por modelos de lenguaje (Google Gemini con LangChain). Valida esquemas estructurados con Pydantic v2 bajo un modelo de ponderación algorítmica (experiencia 40%, habilidades 35%, educación 15%, coherencia 10%) con rankings persistidos en PostgreSQL y entorno Dockerizado.",
      },
      en: {
        title: "CVLens-AI — Resume Intelligence & ATS LLM Engine",
        description: "Intelligent backend engine for concurrent parsing and ATS evaluation of PDF resumes using LangChain and Google Gemini. Enforces structured output schemas with Pydantic v2 using weighted algorithmic scoring (experience 40%, skills 35%, education 15%, coherence 10%) with PostgreSQL persistence and Dockerized deployment.",
      }
    },
    {
      id: "campuslands-opscenter",
      category: "python",
      number: "06",
      image: "images/projects/Campuslands-OpsCenter.webp",
      repoUrl: "https://github.com/Samuelgelvez20/Campuslands-OpsCenter-",
      demoUrl: null,
      tags: ["Python 3.12", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Google Gemini SDK"],
      es: {
        title: "Campuslands OpsCenter — API Backend de Gestión Operativa & Triaje con IA",
        description: "Liderazgo de arquitectura backend y modelo de datos para la gestión operativa integral de campus bajo alta demanda. Implementa una API RESTful transaccional con SQLAlchemy y PostgreSQL para reserva de espacios y control de recursos tecnológicos sin colisiones, junto con un motor de triaje inteligente asistido por IA (Gemini) para clasificación automática de criticidad y bloqueo preventivo de áreas operativas.",
      },
      en: {
        title: "Campuslands OpsCenter — Operations API & AI Triaging Engine",
        description: "Backend architecture and data layer for campus operations management under high resource contention. Built with Python 3.12, FastAPI, and PostgreSQL with SQLAlchemy for collision-free room booking, paired with an automated Gemini AI triaging engine that classifies incident severity and executes preventive space lockouts.",
      }
    }
  ]
};
