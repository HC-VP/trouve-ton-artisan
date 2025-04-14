# Trouve Ton Artisan 

Projet réalisé dans le cadre de ma formation de développeur fullstack.  
Il s'agit de la partie **frontend** d’un site permettant aux habitants de la région **Auvergne-Rhône-Alpes** de trouver un artisan près de chez eux selon des consignes précises et une charte graphique déterminée.

---

## 🚀 Technologies utilisées

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Sass (SCSS)](https://sass-lang.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [MailDev](https://maildev.github.io/maildev/) (simulateur d’e-mails)
- [Express.js](https://expressjs.com/) + [Nodemailer](https://nodemailer.com/) (backend local pour envoi d’e-mails)

---

## 🎯 Fonctionnalités principales

- 🔍 **Recherche dynamique** par nom, spécialité ou ville
- 📂 Liste d’artisans filtrée par **catégorie**
- 👤 **Fiche artisan** complète avec bio, spécialité, ville, note
- 📬 **Formulaire de contact fonctionnel** avec envoie d'email simulé via **MailDev**
- 📱 **Header responsive** :
  - Icônes loupe + menu hamburger en version mobile et tablette
  - Barre de recherche + navigation classique en version desktop
- 🧭 Navigation fluide avec :
  - Page d’accueil
  - Page de résultats de recherche
  - Fiche artisan
  - Page 404 personnalisée
- 📜 Pages légales vierges, comme demandé dans les consignes :
  - Mentions légales
  - Données personnelles
  - Accessibilité
  - Cookies

---

## 🎨 Charte graphique respectée

- Couleur principale : `#00497c`
- Couleur secondaire : `#0074c7`
- Texte principal : `#384050`
- Toutes les couleurs par défaut de Bootstrap ont été remplacées
- Titres, boutons, liens, numéros d’étapes, etc. stylisés conformément à la charte de la région Auvergne-Rhône-Alpes

---

## 🔐 Sécurité – Mesures mises en place

Le projet intègre plusieurs bonnes pratiques de sécurité :

### 1. 🛡️ Protection contre XSS

Les données entrées dans les champs des formulaires (nom, objet, message) sont nettoyées avant d’être utilisées, via trim(), validation côté backend et encodage implicite en HTML via React.

Pourquoi :

Évite les attaques de type XSS (Cross Site Scripting) où un utilisateur injecterait du script dans une zone texte.

### 2. 📏 Validation des formulaires

Les champs ont un required, un type="text" ou textarea, et peuvent être limités en longueur via des attributs ou validations côté backend.

Pourquoi :

Évite les surcharges, les injections ou les entrées indésirables.


### 3. 🔐 CORS configuré

Le serveur utilise cors() dans server.js pour autoriser les requêtes uniquement depuis localhost:5173 en développement.

Pourquoi :

Évite les appels API non autorisés depuis des sites externes (attaque Cross-Origin).

### 4. 📬 Envoi d’e-mails sécurisé via un simulateur local (MailDev)

Le projet utilise MailDev pour simuler les envois d’e-mails sans passer par un vrai serveur SMTP.(aucune donnée transmise vers un vrai serveur)

Pourquoi : 

Évite toute fuite de données en environnement de développement. Aucune adresse réelle dans le code.

### 5. 🔒 Pas de données sensibles dans le dépôt
Pas de clé d’API, mot de passe ou e-mail réel
Backend local uniquement

Pourquoi :

Bonnes pratiques de gestion des secrets / données privées.

### 6. 🔗 Sécurisation des liens

Tous les liens vers des sites externes utilisent `target="_blank"` + `rel="noopener noreferrer"`

Pourquoi : 

Évite les failles de tab-nabbing (vol de contexte entre onglets).

---

## 🖥️ Instructions pour lancer le projet en local

### 1. Installer les dépendances


npm install

### 2. Lancer le frontend

npm run dev

### 3. Lancer MailDev

maildev
Accéder ensuite à http://localhost:1080

### 4. Lancer le backend (serveur de contact)

cd server
node server.js

### 5. Hébergement

Le site a été hébergé en ligne en utilisant Vercel, il est disponible ici : 

https://trouve-ton-artisan-nine.vercel.app

## Validation W3C

Le site a été testé avec les outils officiels du W3C :

- [HTML Validator](https://validator.w3.org/) : **Aucune erreur détectée**
- [CSS Validator](https://jigsaw.w3.org/css-validator/) : **Aucune erreur détectée**

 Voir les captures d’écran en annexe. (dossier captures)

## Captures d'écran

Les captures sont disponibles dans le dossier `/captures/` :

- Maquettes (desktop, mobile et tablette)
- Résultats W3C HTML et CSS
