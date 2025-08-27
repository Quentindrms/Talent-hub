export type Announce = {
    id: number,
    title: string,
    description: string,
    bodytext: string,
    skills: string,
    type: string,
    start_date: Date,
    salary: number,
    salary_unit: string,
    password: string
}

/** Données de base générée par IA */

export const PostedAnnounce: Announce[] = [
    {
        id: 1,
        title: "Développeur Frontend React",
        description: "Rejoignez notre équipe pour développer des interfaces web modernes.",
        bodytext: "Nous recherchons un développeur frontend passionné pour concevoir et améliorer nos applications web en React.js. Vous travaillerez en étroite collaboration avec l’équipe produit et design afin de proposer des interfaces performantes et intuitives. Une expérience avec TypeScript et la consommation d’API REST est un plus.",
        skills: "React.js, TypeScript, API REST",
        type: "CDI",
        start_date: new Date("2025-09-01"),
        salary: 40000,
        salary_unit: "€/an",
        password: "frontend2025"
    },
    {
        id: 2,
        title: "Chef de Projet Digital",
        description: "Pilotez des projets digitaux innovants dans une entreprise dynamique.",
        bodytext: "En tant que chef de projet digital, vous serez responsable de la gestion et du suivi de projets web et mobiles. Vous coordonnerez les équipes, assurerez la relation client et veillerez au respect des délais et budgets. Une bonne connaissance des outils de gestion de projet et des environnements digitaux est attendue.",
        skills: "Gestion de projet, Web, Mobile, Coordination",
        type: "CDI",
        start_date: new Date("2025-10-01"),
        salary: 45000,
        salary_unit: "€/an",
        password: "chefprojet2025"
    },
    {
        id: 3,
        title: "Data Analyst",
        description: "Analysez et valorisez les données pour accompagner la prise de décision.",
        bodytext: "Vous serez chargé de collecter, analyser et interpréter les données pour fournir des rapports et recommandations stratégiques. Maîtrise de Python, Power BI et des outils de data visualisation requise. Vous travaillerez en lien direct avec les équipes métiers pour répondre à leurs besoins d’analyse.",
        skills: "Python, Power BI, Data Visualisation",
        type: "CDI",
        start_date: new Date("2025-09-15"),
        salary: 38000,
        salary_unit: "€/an",
        password: "data2025"
    },
    {
        id: 4,
        title: "Administrateur Systèmes et Réseaux",
        description: "Assurez la disponibilité et la sécurité de notre infrastructure IT.",
        bodytext: "Votre mission sera de garantir le bon fonctionnement, la sécurité et la maintenance de l’infrastructure informatique. Vous interviendrez sur des environnements Linux et Windows, assurerez le support aux utilisateurs et participerez à la mise en place de solutions de sécurité.",
        skills: "Linux, Windows, Sécurité, Support utilisateurs",
        type: "CDI",
        start_date: new Date("2025-09-20"),
        salary: 42000,
        salary_unit: "€/an",
        password: "admin2025"
    },
    {
        id: 5,
        title: "UX/UI Designer",
        description: "Concevez des expériences utilisateurs intuitives et attractives.",
        bodytext: "Nous recherchons un UX/UI Designer créatif pour concevoir des interfaces web et mobiles ergonomiques. Vous participerez à toutes les étapes du design, de la recherche utilisateur à la réalisation de maquettes sur Figma. Sensibilité à l’ergonomie et à l’accessibilité requise.",
        skills: "Figma, UX, UI, Ergonomie web",
        type: "CDI",
        start_date: new Date("2025-10-05"),
        salary: 37000,
        salary_unit: "€/an",
        password: "uxui2025"
    }
]