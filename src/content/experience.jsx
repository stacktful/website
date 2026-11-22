/* Experience section. `jobs` lists the work experience, most recent first; each job is one card.
   - `title` is "<project name> — <description>"; the card shows the name in bold.
   - `start` and `end` are "YYYY-MM" (formatted per language); `end: null` means ongoing.
   - `highlight` is one achievement-focused sentence about the project; the keywords go in `stack`.
   - Texts are written as { en, nl, fr } (see src/i18n/localize.js). */
const jobs = [
  {
    role: { en: "AI Engineer", nl: "AI Engineer", fr: "Ingénieur IA" },
    company: "Alliander",
    title: {
      en:
        "Voltix Agent — Internal Python package for building and deploying AI Agents within " +
        "Alliander IT landscape",
      nl:
        "Voltix Agent — Interne Python-package voor het bouwen en uitrollen van AI-agents binnen " +
        "het IT-landschap van Alliander",
      fr:
        "Voltix Agent — Package Python interne pour concevoir et déployer des agents IA au sein " +
        "du paysage IT d’Alliander",
    },
    city: "Arnhem",
    country: "NL",
    url: "https://www.alliander.com/en",
    start: "2026-01",
    end: null,
    highlight: {
      en:
        "Building Alliander’s in-house framework for agentic AI from architecture to deployment, " +
        "turning prototyped use cases into production-ready agents and driving adoption across " +
        "the organization through demos, a shared catalogue of agent skills and hands-on " +
        "training.",
      nl:
        "Bouwen aan het eigen framework van Alliander voor agentic AI, van architectuur tot " +
        "deployment, waarbij geprototypete use cases uitgroeien tot productieklare agents en de " +
        "adoptie binnen de organisatie wordt aangejaagd met demo’s, een gedeelde catalogus van " +
        "agent-skills en hands-on trainingen.",
      fr:
        "Développement du framework interne d’Alliander pour l’IA agentique, de l’architecture " +
        "au déploiement, en transformant des cas d’usage prototypés en agents prêts pour la " +
        "production et en favorisant son adoption dans toute l’organisation grâce à des " +
        "démonstrations, un catalogue partagé de compétences pour agents et des formations " +
        "pratiques.",
    },
    stack: [
      "Python",
      "PydanticAI",
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "AWS",
      "Snowflake",
      "Atlan",
      "CI/CD",
      "SonarQube",
      "Dynatrace",
      "Git",
      "GitHub",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: { en: "Software Engineer", nl: "Software Engineer", fr: "Ingénieur logiciel" },
    company: "Bol.com",
    title: {
      en:
        "Project StA — Python-based discrete event simulation of warehouse processes for " +
        "logistics optimization",
      nl:
        "Project StA — Discrete-event-simulatie in Python van magazijnprocessen voor logistieke " +
        "optimalisatie",
      fr:
        "Project StA — Simulation à événements discrets en Python des processus d’entrepôt pour " +
        "l’optimisation logistique",
    },
    city: "Utrecht",
    country: "NL",
    url: "https://over.bol.com/en/",
    start: "2025-06",
    end: "2025-12",
    highlight: {
      en:
        "Delivered a highly configurable discrete event simulation of bol.com’s warehouse " +
        "processes, designed with logistics experts and optimized to run large, complex " +
        "scenarios fast enough to support data-driven logistics decisions.",
      nl:
        "Leverde een zeer configureerbare discrete-event-simulatie van de magazijnprocessen van " +
        "bol.com op, samen met logistieke experts ontworpen en geoptimaliseerd om grote, " +
        "complexe scenario’s snel genoeg door te rekenen voor datagedreven logistieke " +
        "beslissingen.",
      fr:
        "Livraison d’une simulation à événements discrets hautement configurable des processus " +
        "d’entrepôt de bol.com, conçue avec des experts logistiques et optimisée pour exécuter " +
        "rapidement des scénarios vastes et complexes, au service de décisions logistiques " +
        "fondées sur les données.",
    },
    stack: [
      "Python",
      "SimPy",
      "SQLAlchemy",
      "PostgreSQL",
      "SQL",
      "Google Cloud",
      "BigQuery",
      "Looker Studio",
      "CI/CD",
      "Git",
      "GitLab",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: { en: "DevOps Engineer", nl: "DevOps Engineer", fr: "Ingénieur DevOps" },
    company: "Louwman Group",
    title: {
      en:
        "Trimbel® — cloud-native platform for car dealerships to manage their inventory and " +
        "sales",
      nl: "Trimbel® — cloud-native platform voor autodealers om hun voorraad en verkoop te beheren",
      fr:
        "Trimbel® — plateforme cloud-native permettant aux concessionnaires automobiles de gérer " +
        "leur stock et leurs ventes",
    },
    city: "Den Haag",
    country: "NL",
    url: "https://www.louwmangroup.com",
    start: "2025-01",
    end: "2025-06",
    highlight: {
      en:
        "Laid the platform’s cloud foundation by setting up its Azure Infrastructure-as-Code " +
        "with Terraform and automated CI/CD pipelines in Azure DevOps.",
      nl:
        "Legde het cloudfundament van het platform door de Azure-infrastructuur als code op te " +
        "zetten met Terraform, samen met geautomatiseerde CI/CD-pipelines in Azure DevOps.",
      fr:
        "Mise en place des fondations cloud de la plateforme, avec une infrastructure Azure en " +
        "Infrastructure-as-Code via Terraform et des pipelines CI/CD automatisés dans Azure " +
        "DevOps.",
    },
    stack: ["Azure", "Terraform", "CI/CD", "Git", "GitHub", "Azure DevOps", "Agile", "Scrum"],
  },
  {
    role: { en: "Software Engineer", nl: "Software Engineer", fr: "Ingénieur logiciel" },
    company: "ACT Commodities",
    title: {
      en:
        "Talos — cloud-native ecosystem of distributed, event-driven apps handling regulatory " +
        "reporting of ACT’s trading activities",
      nl:
        "Talos — cloud-native ecosysteem van gedistribueerde, event-driven apps voor de " +
        "regulatoire rapportage van ACT’s handelsactiviteiten",
      fr:
        "Talos — écosystème cloud-native d’applications distribuées et event-driven gérant le " +
        "reporting réglementaire des activités de trading d’ACT",
    },
    city: "Amsterdam",
    country: "NL",
    url: "https://www.actcommodities.com",
    start: "2024-06",
    end: "2024-12",
    highlight: {
      en:
        "Kept ACT’s daily regulatory reporting of trading activities accurate and compliant by " +
        "optimizing its event-driven cloud functions, automating manual reporting steps and " +
        "correcting inaccurate historical reports.",
      nl:
        "Hield de dagelijkse regulatoire rapportage van ACT’s handelsactiviteiten correct en " +
        "compliant door de event-driven cloudfuncties te optimaliseren, handmatige " +
        "rapportagestappen te automatiseren en onjuiste historische rapportages te corrigeren.",
      fr:
        "Maintien d’un reporting réglementaire quotidien exact et conforme des activités de " +
        "trading d’ACT, grâce à l’optimisation de ses fonctions cloud event-driven, à " +
        "l’automatisation des étapes manuelles et à la correction de rapports historiques " +
        "erronés.",
    },
    stack: [
      "Python",
      "PostgreSQL",
      "Azure",
      "Pytest",
      "CI/CD",
      "Git",
      "GitHub",
      "Jira",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: { en: "Backend Engineer", nl: "Backend Engineer", fr: "Ingénieur backend" },
    company: "WhiteSpace",
    title: {
      en:
        "AIM® — cloud-native multi-tenant web application (SaaS) for AI-driven well trajectory " +
        "optimization and planning",
      nl:
        "AIM® — cloud-native multi-tenant webapplicatie (SaaS) voor AI-gestuurde optimalisatie " +
        "en planning van boorputtrajecten",
      fr:
        "AIM® — application web cloud-native multi-tenant (SaaS) pour l’optimisation et la " +
        "planification de trajectoires de puits par IA",
    },
    city: "Den Haag",
    country: "NL",
    url: "https://www.whitespacesolutions.eu",
    start: "2024-01",
    end: "2024-06",
    highlight: {
      en:
        "Restored the REST API’s long-broken data import and export, improved its data models " +
        "and decoupled the optimization microservices from the database, freeing algorithm " +
        "developers to focus on their algorithms.",
      nl:
        "Herstelde de al lang defecte data-import en -export van de REST API, verbeterde de " +
        "datamodellen en ontkoppelde de optimalisatie-microservices van de database, zodat " +
        "algoritmeontwikkelaars zich op hun algoritmes konden richten.",
      fr:
        "Remise en service de l’import et de l’export de données de la REST API, cassés depuis " +
        "longtemps, amélioration des modèles de données et découplage des microservices " +
        "d’optimisation vis-à-vis de la base de données, permettant aux développeurs " +
        "d’algorithmes de se concentrer sur leurs algorithmes.",
    },
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Alembic",
      "Docker",
      "Google Cloud",
      "Pytest",
      "CI/CD",
      "Git",
      "GitHub",
      "OpenAPI",
      "Swagger",
      "Notion",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: {
      en: "Lead Software Engineer",
      nl: "Lead Software Engineer",
      fr: "Ingénieur logiciel principal",
    },
    company: "Ebitwise",
    title: {
      en:
        "DashWise® — cloud-native multi-tenant web application (SaaS) presenting real-time " +
        "financial dashboard for start-ups",
      nl:
        "DashWise® — cloud-native multi-tenant webapplicatie (SaaS) met een realtime financieel " +
        "dashboard voor start-ups",
      fr:
        "DashWise® — application web cloud-native multi-tenant (SaaS) offrant un tableau de bord " +
        "financier en temps réel aux start-ups",
    },
    city: "Amsterdam",
    country: "NL",
    url: "https://www.ebitwise.nl",
    start: "2022-06",
    end: "2023-12",
    highlight: {
      en:
        "Led the end-to-end build of the product, from React UI and Flask API to the automated " +
        "ETL pipeline feeding its dashboards, Terraform-managed Google Cloud infrastructure and " +
        "CI/CD, while setting up the team’s automated Agile workflow.",
      nl:
        "Leidde de volledige bouw van het product, van React-UI en Flask-API tot de " +
        "geautomatiseerde ETL-pipeline achter de dashboards, met Terraform beheerde Google " +
        "Cloud-infrastructuur en CI/CD, en zette daarnaast de geautomatiseerde Agile-werkwijze " +
        "van het team op.",
      fr:
        "Pilotage de la construction complète du produit, de l’UI React et de l’API Flask au " +
        "pipeline ETL automatisé qui alimente les tableaux de bord, en passant par " +
        "l’infrastructure Google Cloud gérée avec Terraform et le CI/CD, ainsi que par la mise " +
        "en place du workflow Agile automatisé de l’équipe.",
    },
    stack: [
      "Python",
      "Flask",
      "ReactJS",
      "JavaScript",
      "Docker",
      "Google Cloud",
      "BigQuery",
      "Terraform",
      "Pytest",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "ClickUp",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: { en: "Software Engineer", nl: "Software Engineer", fr: "Ingénieur logiciel" },
    company: "Avonic",
    title: {
      en:
        "CamDirector® — AI-driven multiple camera system for automated lecture recordings with " +
        "'teacher tracking'",
      nl:
        "CamDirector® — AI-gestuurd multicamerasysteem voor geautomatiseerde collegeopnames met " +
        "‘teacher tracking’",
      fr:
        "CamDirector® — système multicaméra piloté par IA pour l’enregistrement automatisé de " +
        "cours, avec suivi de l’enseignant",
    },
    city: "Delft",
    country: "NL",
    url: "https://www.avonic.com",
    start: "2021-01",
    end: "2022-10",
    highlight: {
      en:
        "Rebuilt the system’s web application with improved UX and a clean, modular " +
        "architecture, made its teacher-tracking software faster and more efficient, and raised " +
        "the team’s engineering standards through code reviews, mentoring and a streamlined " +
        "Agile workflow.",
      nl:
        "Herbouwde de webapplicatie van het systeem met een betere UX en een schone, modulaire " +
        "architectuur, maakte de teacher-tracking-software sneller en efficiënter, en tilde de " +
        "engineeringstandaard van het team naar een hoger niveau met code reviews, begeleiding " +
        "van junioren en een gestroomlijnde Agile-werkwijze.",
      fr:
        "Refonte de l’application web du système avec une UX améliorée et une architecture " +
        "propre et modulaire, accélération du logiciel de suivi de l’enseignant, et élévation " +
        "des standards d’ingénierie de l’équipe grâce aux revues de code, à l’accompagnement des " +
        "juniors et à un workflow Agile optimisé.",
    },
    stack: [
      "Python",
      "Flask",
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "OpenCV",
      "WebSockets",
      "Pytest",
      "Linux",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Jira",
      "Agile",
      "Scrum",
    ],
  },
  {
    role: { en: "Software Engineer", nl: "Software Engineer", fr: "Ingénieur logiciel" },
    company: "Fleet Cleaner",
    title: {
      en:
        "FLS Localization — Localization system for ship-hull-cleaning robot based on Forward " +
        "Looking Sonar (FLS) images",
      nl:
        "FLS-lokalisatie — Lokalisatiesysteem voor een scheepsrompreinigingsrobot op basis van " +
        "Forward Looking Sonar (FLS)-beelden",
      fr:
        "Localisation FLS — Système de localisation pour un robot de nettoyage de coques de " +
        "navires, basé sur des images de sonar frontal (Forward Looking Sonar, FLS)",
    },
    city: "Delft",
    country: "NL",
    url: "https://www.fleetcleaner.com",
    start: "2018-12",
    end: "2020-12",
    highlight: {
      en:
        "Delivered a proof of concept with centimeter-level accuracy, building line detection, " +
        "target tracking and localization pipelines from scratch with computer vision on sonar " +
        "images.",
      nl:
        "Leverde een proof-of-concept op met nauwkeurigheid op centimeterniveau en bouwde " +
        "daarvoor vanaf nul pipelines voor lijndetectie, target tracking en lokalisatie met " +
        "computer vision op sonarbeelden.",
      fr:
        "Livraison d’une preuve de concept d’une précision centimétrique, avec des pipelines de " +
        "détection de lignes, de suivi de cibles et de localisation développés de zéro par " +
        "vision par ordinateur sur des images sonar.",
    },
    stack: ["Python", "OpenCV", "NumPy", "Cython", "Git", "GitHub", "Jira", "Agile", "Scrum"],
  },
  {
    role: {
      en: "Software Engineer (R&D)",
      nl: "Software Engineer (R&D)",
      fr: "Ingénieur logiciel (R&D)",
    },
    company: "Nippon Electric Company",
    title: {
      en:
        "Project MIDoT® — IoT device for topical audio indexing via Micro Identifier " +
        "Dot-on-Things (MIDoT®) technology",
      nl:
        "Project MIDoT® — IoT-apparaat voor thematische audio-indexering via Micro Identifier " +
        "Dot-on-Things (MIDoT®)-technologie",
      fr:
        "Project MIDoT® — objet connecté (IoT) pour l’indexation audio thématique grâce à la " +
        "technologie Micro Identifier Dot-on-Things (MIDoT®)",
    },
    city: "Tokyo",
    country: "JP",
    url: "https://www.nec.com",
    start: "2018-05",
    end: "2018-11",
    highlight: {
      en:
        "Built a working proof-of-concept device from scratch, spanning 3D-printed mechanics, " +
        "electronics, embedded software and real-time pattern recognition, and presented it at " +
        "the IEEE 5th World Forum on IoT 2019.",
      nl:
        "Bouwde vanaf nul een werkend proof-of-concept-apparaat, van 3D-geprinte mechaniek en " +
        "elektronica tot embedded software en realtime patroonherkenning, en presenteerde het op " +
        "het IEEE 5th World Forum on IoT 2019.",
      fr:
        "Construction, en partant de zéro, d’un prototype fonctionnel couvrant mécanique " +
        "imprimée en 3D, électronique, logiciel embarqué et reconnaissance de motifs en temps " +
        "réel, présenté au 5e IEEE World Forum on IoT 2019.",
    },
    stack: [
      "Python",
      "OpenCV",
      "NumPy",
      "Arduino",
      "C++",
      "SolidWorks",
      "3D Printing",
      "Circuit Design",
      "Sensors",
      "IoT",
    ],
  },
];

const experience = {
  title: { en: "Experience", nl: "Ervaring", fr: "Expérience" },
  presentLabel: { en: "Present", nl: "Heden", fr: "Aujourd’hui" },
  previousJobLabel: {
    en: "Previous (more recent) job",
    nl: "Vorige (recentere) functie",
    fr: "Poste précédent (plus récent)",
  },
  nextJobLabel: {
    en: "Next (older) job",
    nl: "Volgende (oudere) functie",
    fr: "Poste suivant (plus ancien)",
  },
  jobs: jobs,
};

export default experience;
