# TalentHub

## Description du Projet

TalentHub est une application web conçue pour simplifier la publication et la consultation d'offres d'emploi et de missions. 
Elle permet aux utilisateurs de trouver des annonces ou de poster des annonces.

---

## Fonctionnalités

* **Consultation d'annonces:** La page d'accueil affiche les trois dernières annonces publiées. Une page dédiée "Les annonces" permet de voir toutes les annonces disponibles. Chaque annonce peut être consultée en détail via une URL unique (`/announce/view/:id`).
* **Publication d'annonces:** Une page "Déposer une annonce" permet de créer une nouvelle offre. Le formulaire de publication d'annonce est validé côté serveur pour s'assurer que les données respectent un schéma prédéfini, incluant le titre, la description, les compétences, le type de contrat, la date de début, le salaire, les informations de contact et un mot de passe.
* **Gestion des annonces:** Un mot de passe est nécessaire pour administrer l'annonce une fois publiée. ** (pas encore implémenté) **
* **Design Responsif:** Le site est conçu pour être adapté aux appareils mobiles et aux ordinateurs de bureau grâce à des fichiers SCSS spécifiques.

---

## Technologies Utilisées

* **Backend:**
    * **Express.js 5.1.0:** Framework web pour Node.js.
    * **TypeScript:** Langage de programmation pour le développement.
    * **tsx:** Exécute les fichiers TypeScript en ligne de commande.
    * **zod:** Bibliothèque de validation de schéma.
* **Frontend:**
    * **EJS:** Moteur de template pour générer le HTML des vues.
    * **Sass:** Préprocesseur CSS pour le style, compilé en CSS.

---

## Démarrer le Projet

Pour lancer le projet, assurez-vous d'avoir Node.js installé. Les scripts définis dans `package.json` sont les suivants:

* `npm install` : Installe toutes les dépendances du projet.
* `npm run dev` : Lance l'application en mode développement avec `tsx watch index.ts`.
* `npm start` : Démarre l'application.
* `npm run watch:css` : Compile les fichiers SCSS en CSS.

L'application est configurée pour écouter sur le port `3000`.

---

## Structure du Projet

Le projet est organisé comme suit:

* **`controllers/`**: Contient la logique de l'application.
* **`libs/`**: Contient les classes et les types de données (`Announce`, `Skills`).
* **`public/`**: Contient les fichiers statiques, y compris le CSS généré.
* **`routes/`**: Définit les routes de l'application (`/`, `/announces`, `/share-announce`, `/announce/view/:id`, `/announce/post`).
* **`src/`**: Contient le code source de l'application.
    * `data/`: Les données d'exemple.
    * `style/`: Les fichiers Sass.
    * `ts/`: Les fonctions TypeScript.
* **`views/`**: Contient les templates EJS pour les différentes pages et éléments.
