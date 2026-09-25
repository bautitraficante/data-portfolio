// --------------------------------------------------
// MENÚ PARA CELULAR
// --------------------------------------------------

const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
    navigationLinks.classList.toggle("active");
});

navigationLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigationLinks.classList.remove("active");
    });
});


// --------------------------------------------------
// AÑO AUTOMÁTICO
// --------------------------------------------------

const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();


// --------------------------------------------------
// TRADUCCIONES
// --------------------------------------------------

const translations = {
    es: {
        navHome: "Inicio",
        navProjects: "Proyectos",
        navAbout: "Sobre mí",
        navTools: "Herramientas",
        navContact: "Contacto",

        heroEyebrow: "DATA ANALYSIS · PYTHON · SQL",
        heroTitle: "Uso datos para entender <span>problemas reales.</span>",
        heroIntroduction: `
            Soy <strong>Bautista Traficante</strong>, estudiante de
            Ciencia de Datos con experiencia en marketing y comunicación.
            Desarrollo proyectos que transforman datos en información
            clara, útil y fácil de interpretar.
        `,
        viewProjects: "Ver proyectos",
        github: "GitHub ↗",
        photoRole: "Data Science<br>Student",

        portfolio: "PORTFOLIO",
        featuredProject: "Proyectos destacados",
        portfolioDescription: `
            Proyectos completos: desde los datos originales
            hasta el análisis, las conclusiones y su publicación.
        `,

        projectIndex: "01 — SPORTS ANALYTICS",
        projectSummary: `
            Análisis de la carga y el bienestar de un equipo
            ficticio de hockey femenino durante ocho semanas.
        `,

        problem: "Problema",
        problemDescription: `
            Comprender cómo varía la carga y el estado
            de las jugadoras después de cada sesión.
        `,

        process: "Proceso",
        processDescription: `
            Generación, limpieza, validación, análisis
            exploratorio, SQL y visualización.
        `,

        result: "Resultado",
        resultDescription: `
            Dashboard interactivo con filtros,
            indicadores y análisis por jugadora.
        `,

        records: "registros",
        players: "jugadoras",
        weeks: "semanas",

        viewDashboard: "Ver dashboard ↗",
        viewCode: "Ver código en GitHub →",

        netflixIndex: "02 — CONTENT ANALYTICS",
        netflixSummary: "Análisis de más de 500.000 registros semanales para estudiar permanencia, liderazgo y alcance internacional.",
        netflixProblem: "Problema",
        netflixProblemDescription: "Identificar qué películas y series dominaron el Top 10 y cómo cambian los resultados entre países.",
        netflixProcess: "Proceso",
        netflixProcessDescription: "Limpieza, validación, agrupaciones por título y país, análisis exploratorio y visualización.",
        netflixResult: "Resultado",
        netflixResultDescription: "Cinco preguntas respondidas y un dashboard interactivo con filtros y gráficos explorables.",
        netflixRecords: "registros",
        netflixCountries: "países",
        netflixQuestions: "preguntas",
        netflixViewDashboard: "Ver dashboard ↗",
        netflixViewCode: "Ver código en GitHub →",
        aiDisclosure: "Dashboard desarrollado con asistencia de inteligencia artificial.",

        nextProject: "PRÓXIMO PROYECTO",
        development: "Actualmente en desarrollo",
        developmentDescription: `
            Nuevo análisis utilizando Python y SQL.
        `,

        aboutLabel: "SOBRE MÍ",
        aboutTitle: "Datos, análisis y comunicación.",
        aboutLead: `
            Me interesa utilizar los datos para entender problemas,
            encontrar patrones y convertir información compleja en
            decisiones claras.
        `,
        aboutFirst: `
            Actualmente estudio la Licenciatura en Ciencia de Datos
            y desarrollo proyectos con Python, SQL y herramientas de
            visualización. Mi objetivo es construir soluciones que
            combinen análisis, interpretación y aplicación práctica.
        `,
        aboutSecond: `
            También cuento con experiencia en marketing digital,
            contenido y comunicación. Esta experiencia me permite
            presentar los resultados de forma clara, comprensible
            y orientada a las necesidades de cada proyecto.
        `,
        marketingPortfolio: "Ver mi portfolio de marketing →",

        stack: "STACK",
        tools: "Herramientas",
        toolsDescription: `
            Tecnologías que estoy utilizando en mis proyectos
            de análisis de datos.
        `,

        languages: "Lenguajes",
        analysis: "Análisis",
        visualization: "Visualización",
        applications: "Herramientas",

        contactLabel: "CONTACTO",
        contactTitle: "Construyamos algo con datos.",
        contactDescription: `
            Estoy desarrollando mi experiencia en Data Science y abierto
            a oportunidades, colaboraciones y nuevos proyectos.
        `,

        backTop: "Volver arriba ↑"
    },

    en: {
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About",
        navTools: "Tools",
        navContact: "Contact",

        heroEyebrow: "DATA ANALYSIS · PYTHON · SQL",
        heroTitle: "I use data to understand <span>real problems.</span>",
        heroIntroduction: `
            I'm <strong>Bautista Traficante</strong>, a Data Science
            student with experience in marketing and communication.
            I develop projects that transform data into clear,
            useful and understandable information.
        `,
        viewProjects: "View projects",
        github: "GitHub ↗",
        photoRole: "Data Science<br>Student",

        portfolio: "PORTFOLIO",
        featuredProject: "Featured projects",
        portfolioDescription: `
            Complete projects: from the original data to analysis,
            conclusions and publication.
        `,

        projectIndex: "01 — SPORTS ANALYTICS",
        projectSummary: `
            Analysis of the workload and wellbeing of a fictional
            women's hockey team over eight weeks.
        `,

        problem: "Problem",
        problemDescription: `
            Understanding how workload and player readiness
            change after each session.
        `,

        process: "Process",
        processDescription: `
            Data generation, cleaning, validation,
            exploratory analysis, SQL and visualization.
        `,

        result: "Result",
        resultDescription: `
            Interactive dashboard with filters,
            indicators and player-level analysis.
        `,

        records: "records",
        players: "players",
        weeks: "weeks",

        viewDashboard: "View dashboard ↗",
        viewCode: "View code on GitHub →",

        netflixIndex: "02 — CONTENT ANALYTICS",
        netflixSummary: "Analysis of more than 500,000 weekly records to study persistence, leadership and international reach.",
        netflixProblem: "Problem",
        netflixProblemDescription: "Identifying which films and series dominated the Top 10 and how results differ across countries.",
        netflixProcess: "Process",
        netflixProcessDescription: "Cleaning, validation, title and country aggregations, exploratory analysis and visualization.",
        netflixResult: "Result",
        netflixResultDescription: "Five answered questions and an interactive dashboard with filters and explorable charts.",
        netflixRecords: "records",
        netflixCountries: "countries",
        netflixQuestions: "questions",
        netflixViewDashboard: "View dashboard ↗",
        netflixViewCode: "View code on GitHub →",
        aiDisclosure: "Dashboard developed with artificial intelligence assistance.",

        nextProject: "NEXT PROJECT",
        development: "Currently in development",
        developmentDescription: `
            A new analysis using Python and SQL.
        `,

        aboutLabel: "ABOUT ME",
        aboutTitle: "Data, analysis and communication.",
        aboutLead: `
            I use data to understand problems, identify patterns
            and transform complex information into clear decisions.
        `,
        aboutFirst: `
            I am currently pursuing a Bachelor's Degree in Data Science
            and developing projects with Python, SQL and visualization
            tools. My goal is to build solutions that combine analysis,
            interpretation and practical application.
        `,
        aboutSecond: `
            I also have experience in digital marketing, content
            and communication. This enables me to present results
            clearly and adapt them to each project's needs.
        `,
        marketingPortfolio: "View my marketing portfolio →",

        stack: "STACK",
        tools: "Tools",
        toolsDescription: `
            Technologies I currently use in my
            data analysis projects.
        `,

        languages: "Languages",
        analysis: "Analysis",
        visualization: "Visualization",
        applications: "Tools",

        contactLabel: "CONTACT",
        contactTitle: "Let's build something with data.",
        contactDescription: `
            I am building my experience in Data Science and am open
            to opportunities, collaborations and new projects.
        `,

        backTop: "Back to top ↑"
    },

    it: {
        navHome: "Home",
        navProjects: "Progetti",
        navAbout: "Su di me",
        navTools: "Strumenti",
        navContact: "Contatti",

        heroEyebrow: "DATA ANALYSIS · PYTHON · SQL",
        heroTitle: "Uso i dati per comprendere <span>problemi reali.</span>",
        heroIntroduction: `
            Sono <strong>Bautista Traficante</strong>, studente di
            Data Science con esperienza nel marketing e nella comunicazione.
            Sviluppo progetti che trasformano i dati in informazioni
            chiare, utili e facili da interpretare.
        `,
        viewProjects: "Vedi i progetti",
        github: "GitHub ↗",
        photoRole: "Data Science<br>Student",

        portfolio: "PORTFOLIO",
        featuredProject: "Progetti in evidenza",
        portfolioDescription: `
            Progetti completi: dai dati originali all'analisi,
            alle conclusioni e alla pubblicazione.
        `,

        projectIndex: "01 — SPORTS ANALYTICS",
        projectSummary: `
            Analisi del carico e del benessere di una squadra
            femminile di hockey fittizia durante otto settimane.
        `,

        problem: "Problema",
        problemDescription: `
            Comprendere come cambiano il carico e lo stato
            delle giocatrici dopo ogni sessione.
        `,

        process: "Processo",
        processDescription: `
            Generazione, pulizia e validazione dei dati,
            analisi esplorativa, SQL e visualizzazione.
        `,

        result: "Risultato",
        resultDescription: `
            Dashboard interattiva con filtri,
            indicatori e analisi per giocatrice.
        `,

        records: "registri",
        players: "giocatrici",
        weeks: "settimane",

        viewDashboard: "Vedi la dashboard ↗",
        viewCode: "Vedi il codice su GitHub →",

        netflixIndex: "02 — CONTENT ANALYTICS",
        netflixSummary: "Analisi di oltre 500.000 registri settimanali per studiare permanenza, leadership e portata internazionale.",
        netflixProblem: "Problema",
        netflixProblemDescription: "Identificare quali film e serie hanno dominato la Top 10 e come cambiano i risultati tra i Paesi.",
        netflixProcess: "Processo",
        netflixProcessDescription: "Pulizia, validazione, aggregazioni per titolo e Paese, analisi esplorativa e visualizzazione.",
        netflixResult: "Risultato",
        netflixResultDescription: "Cinque domande con risposta e una dashboard interattiva con filtri e grafici esplorabili.",
        netflixRecords: "registri",
        netflixCountries: "Paesi",
        netflixQuestions: "domande",
        netflixViewDashboard: "Vedi la dashboard ↗",
        netflixViewCode: "Vedi il codice su GitHub →",
        aiDisclosure: "Dashboard sviluppata con l'assistenza dell'intelligenza artificiale.",

        nextProject: "PROSSIMO PROGETTO",
        development: "Attualmente in sviluppo",
        developmentDescription: `
            Una nuova analisi utilizzando Python e SQL.
        `,

        aboutLabel: "SU DI ME",
        aboutTitle: "Dati, analisi e comunicazione.",
        aboutLead: `
            Mi interessa utilizzare i dati per comprendere problemi,
            identificare schemi e trasformare informazioni complesse
            in decisioni chiare.
        `,
        aboutFirst: `
            Attualmente studio per la Laurea in Data Science
            e sviluppo progetti con Python, SQL e strumenti di
            visualizzazione. Il mio obiettivo è creare soluzioni che
            combinino analisi, interpretazione e applicazione pratica.
        `,
        aboutSecond: `
            Ho anche esperienza nel marketing digitale, nei contenuti
            e nella comunicazione. Questo mi permette di presentare
            i risultati in modo chiaro e adatto alle esigenze
            di ogni progetto.
        `,
        marketingPortfolio: "Vedi il mio portfolio di marketing →",

        stack: "STACK",
        tools: "Strumenti",
        toolsDescription: `
            Tecnologie che utilizzo nei miei
            progetti di analisi dei dati.
        `,

        languages: "Linguaggi",
        analysis: "Analisi",
        visualization: "Visualizzazione",
        applications: "Strumenti",

        contactLabel: "CONTATTI",
        contactTitle: "Costruiamo qualcosa con i dati.",
        contactDescription: `
            Sto sviluppando la mia esperienza nella Data Science
            e sono aperto a opportunità, collaborazioni e nuovi progetti.
        `,

        backTop: "Torna all'inizio ↑"
    }
};


// --------------------------------------------------
// ELEMENTOS QUE CAMBIAN DE IDIOMA
// --------------------------------------------------

const translatedElements = {
    navHome: ".nav-links li:nth-child(1) a",
    navProjects: ".nav-links li:nth-child(2) a",
    navAbout: ".nav-links li:nth-child(3) a",
    navTools: ".nav-links li:nth-child(4) a",
    navContact: ".nav-links li:nth-child(5) a",

    heroEyebrow: ".hero-copy > .eyebrow",
    heroTitle: ".hero-copy h1",
    heroIntroduction: ".hero-introduction",
    viewProjects: ".hero-buttons .button-primary",
    github: ".hero-buttons .button-secondary",
    photoRole: ".photo-label p",

    portfolio: "#proyectos .section-header .eyebrow",
    featuredProject: "#proyectos .section-header h2",
    portfolioDescription: "#proyectos .section-header > p",

    projectIndex: ".project-hockey .project-index",
    projectSummary: ".project-hockey .project-summary",

    problem: ".project-hockey .project-details > div:nth-child(1) span",
    problemDescription: ".project-hockey .project-details > div:nth-child(1) p",

    process: ".project-hockey .project-details > div:nth-child(2) span",
    processDescription: ".project-hockey .project-details > div:nth-child(2) p",

    result: ".project-hockey .project-details > div:nth-child(3) span",
    resultDescription: ".project-hockey .project-details > div:nth-child(3) p",

    records: ".project-hockey .project-numbers > div:nth-child(1) span",
    players: ".project-hockey .project-numbers > div:nth-child(2) span",
    weeks: ".project-hockey .project-numbers > div:nth-child(3) span",

    viewDashboard: ".project-hockey .project-buttons .button-primary",
    viewCode: ".project-hockey .project-buttons .text-link",

    netflixIndex: ".project-netflix .project-index",
    netflixSummary: ".project-netflix .project-summary",
    netflixProblem: ".project-netflix .project-details > div:nth-child(1) span",
    netflixProblemDescription: ".project-netflix .project-details > div:nth-child(1) p",
    netflixProcess: ".project-netflix .project-details > div:nth-child(2) span",
    netflixProcessDescription: ".project-netflix .project-details > div:nth-child(2) p",
    netflixResult: ".project-netflix .project-details > div:nth-child(3) span",
    netflixResultDescription: ".project-netflix .project-details > div:nth-child(3) p",
    netflixRecords: ".project-netflix .project-numbers > div:nth-child(1) span",
    netflixCountries: ".project-netflix .project-numbers > div:nth-child(2) span",
    netflixQuestions: ".project-netflix .project-numbers > div:nth-child(3) span",
    netflixViewDashboard: ".project-netflix .project-buttons .button-primary",
    netflixViewCode: ".project-netflix .project-buttons .text-link",
    aiDisclosure: ".project-netflix .ai-disclosure",

    nextProject: ".future-project div p",
    development: ".future-project div h3",
    developmentDescription: ".future-project > p",

    aboutLabel: ".about-title .eyebrow",
    aboutTitle: ".about-title h2",
    aboutLead: ".about-content .about-lead",
    aboutFirst: ".about-content > p:nth-of-type(2)",
    aboutSecond: ".about-content > p:nth-of-type(3)",
    marketingPortfolio: ".about-content .text-link",

    stack: "#habilidades .section-header .eyebrow",
    tools: "#habilidades .section-header h2",
    toolsDescription: "#habilidades .section-header > p",

    languages: ".skills-list article:nth-child(1) h3",
    analysis: ".skills-list article:nth-child(2) h3",
    visualization: ".skills-list article:nth-child(3) h3",
    applications: ".skills-list article:nth-child(4) h3",

    contactLabel: ".contact-section .eyebrow",
    contactTitle: ".contact-section h2",
    contactDescription: ".contact-section > p:not(.eyebrow)",

    backTop: ".footer a"
};


// --------------------------------------------------
// CAMBIO DE IDIOMA
// --------------------------------------------------

const languageButtons = document.querySelectorAll(".language-button");

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    Object.entries(translatedElements).forEach(([key, selector]) => {
        const element = document.querySelector(selector);

        if (element) {
            element.innerHTML = selectedTranslations[key];
        }
    });

    document.documentElement.lang = language;

    languageButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });

    localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

const savedLanguage =
    localStorage.getItem("portfolio-language") || "es";

changeLanguage(savedLanguage);



