export type Announce = {
    id: number,
    title: string,
    summary: string, 
    text: string
}

export const PostedAnnounce: Announce[] = [
    {
        id: 1,
        title: "Développeur Front-End",
        summary: "Rejoignez notre équipe pour développer des interfaces web modernes.",
        text: "Nous recherchons un développeur front-end maîtrisant React.js et TypeScript. Expérience avec les API REST appréciée. Télétravail possible."
    },
    {
        id: 2,
        title: "Chef de Projet Digital",
        summary: "Pilotez des projets digitaux innovants dans une entreprise dynamique.",
        text: "Vous serez responsable de la gestion de projets web et mobile, de la coordination des équipes et du respect des délais. Expérience exigée."
    },
    {
        id: 3,
        title: "Data Analyst",
        summary: "Analysez et valorisez les données pour accompagner la prise de décision.",
        text: "Missions : collecte, traitement et visualisation de données. Maîtrise de Python et Power BI souhaitée. CDI à pourvoir immédiatement."
    },
    {
        id: 4,
        title: "Administrateur Systèmes et Réseaux",
        summary: "Assurez la disponibilité et la sécurité de notre infrastructure IT.",
        text: "Gestion des serveurs Linux/Windows, support utilisateurs, mise en place de solutions de sécurité. Expérience de 2 ans minimum."
    },
    {
        id: 5,
        title: "UX/UI Designer",
        summary: "Concevez des expériences utilisateurs intuitives et attractives.",
        text: "Création de wireframes, prototypes et maquettes. Bonne connaissance de Figma et des principes d’ergonomie web."
    }
]