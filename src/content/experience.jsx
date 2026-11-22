/* Experience section. `jobs` lists the work experience, most recent first; each job is one card.
   - `title` is "<project name> — <description>"; the card shows the name in bold.
   - `start` and `end` are "YYYY-MM" (formatted per language); `end: null` means ongoing.
   - Texts are written as { en, nl, fr } (see src/i18n/localize.js). */
const jobs = [
  {
    role: { en: "AI Engineer", nl: "AI Engineer", fr: "Ingénieur IA" },
    company: "Alliander",
    title: {
      en:
        "Voltix Agent — Internal Python package for building and deploying AI Agents within Alliander IT landscape",
      nl:
        "Voltix Agent — Interne Python-package voor het bouwen en uitrollen van AI-agents binnen het IT-landschap van Alliander",
      fr:
        "Voltix Agent — Package Python interne pour concevoir et déployer des agents IA au sein du paysage IT d’Alliander",
    },
    city: "Arnhem",
    country: "NL",
    url: "https://www.alliander.com/en",
    start: "2026-01",
    end: null,
    contributions: {
      en: [
        "Developing package including architectural design, implementation, testing, documentation and deployment.",
        "Prototyping Agentic AI use cases and demonstrating Voltix Agent’s capabilities to internal stakeholders.",
        "Creating comprehensive catalogue of Agent skills & instructions to improve workflow, productivity and code quality.",
        "Collaborating with cross-functional teams to integrate Voltix Agent into existing IT landscape.",
        "Providing training and support to internal developers on using Voltix Agent for building and deploying AI Agents.",
      ],
      nl: [
        "Ontwikkelen van het package, inclusief architectuurontwerp, implementatie, testen, documentatie en deployment.",
        "Prototypen van agentic-AI-use-cases en de mogelijkheden van Voltix Agent demonstreren aan interne stakeholders.",
        "Samenstellen van een uitgebreide catalogus van agent-skills en -instructies om workflow, productiviteit en codekwaliteit te verbeteren.",
        "Samenwerken met multidisciplinaire teams om Voltix Agent te integreren in het bestaande IT-landschap.",
        "Trainen en ondersteunen van interne developers bij het bouwen en uitrollen van AI-agents met Voltix Agent.",
      ],
      fr: [
        "Développement du package\u00A0: conception de l’architecture, implémentation, tests, documentation et déploiement.",
        "Prototypage de cas d’usage d’IA agentique et démonstration des capacités de Voltix Agent auprès des parties prenantes internes.",
        "Création d’un catalogue complet de compétences et d’instructions pour agents, afin d’améliorer le workflow, la productivité et la qualité du code.",
        "Collaboration avec des équipes pluridisciplinaires pour intégrer Voltix Agent dans le paysage IT existant.",
        "Formation et accompagnement des développeurs internes à la conception et au déploiement d’agents IA avec Voltix Agent.",
      ],
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
        "Project StA — Python-based discrete event simulation of warehouse processes for logistics optimization",
      nl:
        "Project StA — Discrete-event-simulatie in Python van magazijnprocessen voor logistieke optimalisatie",
      fr:
        "Project StA — Simulation à événements discrets en Python des processus d’entrepôt pour l’optimisation logistique",
    },
    city: "Utrecht",
    country: "NL",
    url: "https://over.bol.com/en/",
    start: "2025-06",
    end: "2025-12",
    contributions: {
      en: [
        "Developed highly configurable discrete event simulation software in Python to model and optimize warehouse processes.",
        "Collaborated with logistics experts to translate warehouse processes into accurate simulation models and scenarios.",
        "Optimized simulation performance and scalability to handle large datasets and complex scenarios, enabling faster insights and decision-making.",
      ],
      nl: [
        "Ontwikkelde zeer configureerbare discrete-event-simulatiesoftware in Python om magazijnprocessen te modelleren en te optimaliseren.",
        "Werkte samen met logistieke experts om magazijnprocessen te vertalen naar nauwkeurige simulatiemodellen en scenario’s.",
        "Optimaliseerde de prestaties en schaalbaarheid van de simulatie voor grote datasets en complexe scenario’s, voor snellere inzichten en besluitvorming.",
      ],
      fr: [
        "Développement d’un logiciel de simulation à événements discrets en Python, hautement configurable, pour modéliser et optimiser les processus d’entrepôt.",
        "Collaboration avec des experts logistiques pour traduire les processus d’entrepôt en modèles et scénarios de simulation fidèles.",
        "Optimisation des performances et de la scalabilité de la simulation pour traiter de grands jeux de données et des scénarios complexes, accélérant l’analyse et la prise de décision.",
      ],
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
        "Trimbel® — cloud-native platform for car dealerships to manage their inventory and sales",
      nl: "Trimbel® — cloud-native platform voor autodealers om hun voorraad en verkoop te beheren",
      fr:
        "Trimbel® — plateforme cloud-native permettant aux concessionnaires automobiles de gérer leur stock et leurs ventes",
    },
    city: "Den Haag",
    country: "NL",
    url: "https://www.louwmangroup.com",
    start: "2025-01",
    end: "2025-06",
    contributions: {
      en: [
        "Setting up platform's Infrastructure-as-Code (Terraform, Azure) and CI/CD pipeline (Azure DevOps).",
      ],
      nl: [
        "Opzetten van de Infrastructure-as-Code (Terraform, Azure) en CI/CD-pipeline (Azure DevOps) van het platform.",
      ],
      fr: [
        "Mise en place de l’Infrastructure-as-Code (Terraform, Azure) et du pipeline CI/CD (Azure DevOps) de la plateforme.",
      ],
    },
    stack: ["Azure", "Terraform", "CI/CD", "Git", "GitHub", "Azure DevOps", "Agile", "Scrum"],
  },
  {
    role: { en: "Software Engineer", nl: "Software Engineer", fr: "Ingénieur logiciel" },
    company: "ACT Commodities",
    title: {
      en:
        "Talos — cloud-native ecosystem of distributed, event-driven apps handling regulatory reporting of ACT’s trading activities",
      nl:
        "Talos — cloud-native ecosysteem van gedistribueerde, event-driven apps voor de regulatoire rapportage van ACT’s handelsactiviteiten",
      fr:
        "Talos — écosystème cloud-native d’applications distribuées et event-driven gérant le reporting réglementaire des activités de trading d’ACT",
    },
    city: "Amsterdam",
    country: "NL",
    url: "https://www.actcommodities.com",
    start: "2024-06",
    end: "2024-12",
    contributions: {
      en: [
        "Monitored and optimized event-driven regulatory reporting cloud functions, ensuring accurate and compliant daily trade activity submissions.",
        "Added automations to reporting workflows, reducing operational workload and manual intervention.",
        "Corrected inaccurate historical reports, enhancing data integrity and regulatory compliance.",
      ],
      nl: [
        "Monitorde en optimaliseerde event-driven cloudfuncties voor regulatoire rapportage, voor correcte en compliant dagelijkse rapportage van handelsactiviteiten.",
        "Voegde automatiseringen toe aan rapportageworkflows, wat de operationele werklast en handmatige handelingen verminderde.",
        "Corrigeerde onjuiste historische rapportages, wat de data-integriteit en regulatoire compliance verbeterde.",
      ],
      fr: [
        "Supervision et optimisation de fonctions cloud event-driven de reporting réglementaire, garantissant des déclarations quotidiennes exactes et conformes.",
        "Ajout d’automatisations aux workflows de reporting, réduisant la charge opérationnelle et les interventions manuelles.",
        "Correction de rapports historiques erronés, améliorant l’intégrité des données et la conformité réglementaire.",
      ],
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
        "AIM® — cloud-native multi-tenant web application (SaaS) for AI-driven well trajectory optimization and planning",
      nl:
        "AIM® — cloud-native multi-tenant webapplicatie (SaaS) voor AI-gestuurde optimalisatie en planning van boorputtrajecten",
      fr:
        "AIM® — application web cloud-native multi-tenant (SaaS) pour l’optimisation et la planification de trajectoires de puits par IA",
    },
    city: "Den Haag",
    country: "NL",
    url: "https://www.whitespacesolutions.eu",
    start: "2024-01",
    end: "2024-06",
    contributions: {
      en: [
        "Repaired REST API server’s long broken data import and export endpoints and improved data models.",
        "Decoupled backend optimization (micro)services from databases to ease workload of algorithm developers.",
      ],
      nl: [
        "Repareerde de al lang defecte import- en export-endpoints van de REST API-server en verbeterde de datamodellen.",
        "Ontkoppelde backend-optimalisatie-(micro)services van databases om de werklast van algoritmeontwikkelaars te verlichten.",
      ],
      fr: [
        "Réparation des endpoints d’import et d’export de données du serveur REST API, cassés depuis longtemps, et amélioration des modèles de données.",
        "Découplage des (micro)services d’optimisation backend et des bases de données, afin d’alléger la charge des développeurs d’algorithmes.",
      ],
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
        "DashWise® — cloud-native multi-tenant web application (SaaS) presenting real-time financial dashboard for start-ups",
      nl:
        "DashWise® — cloud-native multi-tenant webapplicatie (SaaS) met een realtime financieel dashboard voor start-ups",
      fr:
        "DashWise® — application web cloud-native multi-tenant (SaaS) offrant un tableau de bord financier en temps réel aux start-ups",
    },
    city: "Amsterdam",
    country: "NL",
    url: "https://www.ebitwise.nl",
    start: "2022-06",
    end: "2023-12",
    contributions: {
      en: [
        "Developed and built application across full stack (UI, API, database, infrastructure).",
        "Built automated ETL pipeline to create data consumed by dashboards.",
        "Created CI/CD pipeline including infrastructure-as-code.",
        "Set up and led Agile/Scrum automated workflows (ClickUp) and automated communication channels (Slack).",
      ],
      nl: [
        "Ontwikkelde en bouwde de applicatie over de volledige stack (UI, API, database, infrastructuur).",
        "Bouwde een geautomatiseerde ETL-pipeline die de data voor de dashboards aanmaakt.",
        "Zette een CI/CD-pipeline op, inclusief infrastructure-as-code.",
        "Zette geautomatiseerde Agile/Scrum-workflows (ClickUp) en communicatiekanalen (Slack) op en leidde deze.",
      ],
      fr: [
        "Développement et construction de l’application sur toute la stack (UI, API, base de données, infrastructure).",
        "Création d’un pipeline ETL automatisé produisant les données affichées dans les tableaux de bord.",
        "Mise en place du pipeline CI/CD, infrastructure-as-code comprise.",
        "Mise en place et pilotage de workflows Agile/Scrum automatisés (ClickUp) et de canaux de communication automatisés (Slack).",
      ],
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
        "CamDirector® — AI-driven multiple camera system for automated lecture recordings with 'teacher tracking'",
      nl:
        "CamDirector® — AI-gestuurd multicamerasysteem voor geautomatiseerde collegeopnames met ‘teacher tracking’",
      fr:
        "CamDirector® — système multicaméra piloté par IA pour l’enregistrement automatisé de cours, avec suivi de l’enseignant",
    },
    city: "Delft",
    country: "NL",
    url: "https://www.avonic.com",
    start: "2021-01",
    end: "2022-10",
    contributions: {
      en: [
        "(Re)built CamDirector's server-side rendered (SSR) application and improved UX design.",
        "Extensive refactoring to create clean, modular and decoupled software architecture.",
        "Optimised target tracking software, leading to faster and more efficient tracking performance.",
        "Performed code reviews and tutoring juniors on software engineering best practices.",
        "Improved team's Agile / Scrum workflow, incl. setting up project management workflows and automations.",
      ],
      nl: [
        "(Her)bouwde de server-side rendered (SSR) applicatie van CamDirector en verbeterde het UX-ontwerp.",
        "Uitgebreide refactoring tot een schone, modulaire en ontkoppelde softwarearchitectuur.",
        "Optimaliseerde de target-tracking-software, met snellere en efficiëntere tracking als resultaat.",
        "Voerde code reviews uit en begeleidde junioren in best practices voor software engineering.",
        "Verbeterde de Agile/Scrum-werkwijze van het team, incl. het opzetten van projectmanagementworkflows en automatiseringen.",
      ],
      fr: [
        "(Re)construction de l’application server-side rendered (SSR) de CamDirector et amélioration du design UX.",
        "Refactoring approfondi pour obtenir une architecture logicielle propre, modulaire et découplée.",
        "Optimisation du logiciel de suivi de cible, pour un suivi plus rapide et plus efficace.",
        "Revues de code et accompagnement des juniors sur les bonnes pratiques du génie logiciel.",
        "Amélioration du workflow Agile / Scrum de l’équipe, notamment par la mise en place de workflows de gestion de projet et d’automatisations.",
      ],
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
        "FLS Localization — Localization system for ship-hull-cleaning robot based on Forward Looking Sonar (FLS) images",
      nl:
        "FLS-lokalisatie — Lokalisatiesysteem voor een scheepsrompreinigingsrobot op basis van Forward Looking Sonar (FLS)-beelden",
      fr:
        "Localisation FLS — Système de localisation pour un robot de nettoyage de coques de navires, basé sur des images de sonar frontal (Forward Looking Sonar, FLS)",
    },
    city: "Delft",
    country: "NL",
    url: "https://www.fleetcleaner.com",
    start: "2018-12",
    end: "2020-12",
    contributions: {
      en: [
        "Delivered proof-of-concept for localization system enabling centimeter-level accuracy, based on target tracking by using computer vision in sonar images.",
        "Developed line detection, target tracking and localization pipelines from scratch.",
      ],
      nl: [
        "Leverde een proof-of-concept op voor een lokalisatiesysteem met nauwkeurigheid op centimeterniveau, gebaseerd op target tracking met computer vision in sonarbeelden.",
        "Ontwikkelde vanaf nul pipelines voor lijndetectie, target tracking en lokalisatie.",
      ],
      fr: [
        "Livraison d’une preuve de concept de système de localisation d’une précision centimétrique, basé sur le suivi de cibles par vision par ordinateur dans des images sonar.",
        "Développement, en partant de zéro, des pipelines de détection de lignes, de suivi de cibles et de localisation.",
      ],
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
        "Project MIDoT® — IoT device for topical audio indexing via Micro Identifier Dot-on-Things (MIDoT®) technology",
      nl:
        "Project MIDoT® — IoT-apparaat voor thematische audio-indexering via Micro Identifier Dot-on-Things (MIDoT®)-technologie",
      fr:
        "Project MIDoT® — objet connecté (IoT) pour l’indexation audio thématique grâce à la technologie Micro Identifier Dot-on-Things (MIDoT®)",
    },
    city: "Tokyo",
    country: "JP",
    url: "https://www.nec.com",
    start: "2018-05",
    end: "2018-11",
    contributions: {
      en: [
        "Prototyped device as proof-of-concept from scratch, covering hardware, electronics, embedded software and data processing.",
        "Designed and 3D-printed MIDoT® application mechanism, developed circuitry, and integrated sensors, camera and microphone.",
        "Created and tested control software integrating MIDoT® pattern recognition algorithm and real-time sensor data processing.",
        "Presented prototype and research findings in a conference paper at the IEEE 5th World Forum on IoT 2019.",
      ],
      nl: [
        "Bouwde vanaf nul een prototype van het apparaat als proof-of-concept, van hardware en elektronica tot embedded software en dataverwerking.",
        "Ontwierp en 3D-printte het MIDoT®-applicatiemechanisme, ontwikkelde de elektronica en integreerde sensoren, camera en microfoon.",
        "Ontwikkelde en testte besturingssoftware met het MIDoT®-patroonherkenningsalgoritme en realtime verwerking van sensordata.",
        "Presenteerde het prototype en de onderzoeksresultaten in een conferentiepaper op het IEEE 5th World Forum on IoT 2019.",
      ],
      fr: [
        "Prototypage de l’appareil en preuve de concept, en partant de zéro\u00A0: matériel, électronique, logiciel embarqué et traitement des données.",
        "Conception et impression 3D du mécanisme d’application MIDoT®, développement des circuits et intégration des capteurs, de la caméra et du microphone.",
        "Développement et test du logiciel de contrôle intégrant l’algorithme de reconnaissance de motifs MIDoT® et le traitement en temps réel des données capteurs.",
        "Présentation du prototype et des résultats de recherche dans un article de conférence au 5e IEEE World Forum on IoT 2019.",
      ],
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
