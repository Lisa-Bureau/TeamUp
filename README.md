# 🏀 TeamUp

Plus besoin d'attendre que tout le monde soit dispo ou d'annuler une partie faute de joueurs. TeamUp connecte en quelques clics les sportifs qui veulent jouer avec ceux qui cherchent à compléter leur équipe.

Propose ton activité, trouve tes joueurs, lancez la partie. C'est aussi simple que ça.

Que tu sois seul et en quête d'une équipe, ou en groupe avec une place à remplir, TeamUp te met en relation avec des joueurs motivés près de chez toi — sans inscription dans un club, sans contrainte.

C'est aussi l'occasion d'essayer de nouveaux sports, de sortir de ta routine et d'élargir ton cercle grâce à la meilleure des excuses : jouer ensemble.

## 🚀 Fonctionnalités
- **Gestion des activités** : créez et gérez facilement vos activités.
- **Recherche et filtrage** : trouvez facilement des activités en fonction de différents critères tels que le sport, la ville, la date, ...
- **Authentification des utilisateurs** : système de connexion et d'inscription sécurisé avec authentification et autorisation.
- **Communication en temps réel** : participez à des conversations et des discussions avec d'autres utilisateurs grâce à la fonctionnalité de messagerie instantanée.
- **Notifications par mail** : envoyez automatiquement par mail vos invitations pour une activité ou recevez la réponse à votre demande de participation.
- **Conception responsive** : profitez d'une expérience utilisateur fluide sur différents appareils et tailles d'écran.
- **Gestion des erreurs** : système robuste de gestion des erreurs et de notification pour garantir une expérience utilisateur fluide.

## 🛠️ Stack Technique
- **Frontend**: React, React Router, React Responsive, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentification**: JSON Web Tokens (JWT)
- **API**: RESTful API

## 📦 Installation & Utilisation

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.
3. Exécutez la commande `npm install`.
4. Créez des fichiers d'environnement (`.env`) dans les répertoires `server` et `client` : vous pouvez copier les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).

### Commandes de Base

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |

### Structure des Dossiers

```plaintext
my-project/
│
├── server/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── item/
│   │   │   │   ├── itemActions.ts
│   │   │   │   └── itemRepository.ts
│   │   │   └── ...
│   │   ├── services/
│   │   ├── types/
│   │   │   └── express/
│   │   │     └── index.d.ts
│   │   ├── app.ts
│   │   ├── main.ts
│   │   └── router.ts
│   ├── database/
│   │   ├── fixtures/
│   │   ├── client.ts
│   │   └── schema.sql
│   ├── tests/
│   ├── .env
│   └── .env.sample
│
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   ├── pages/
    │   ├── styles/
    │   ├── theme/
    │   ├── types/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── router.tsx
    ├── .env
    └── .env.sample
```

### Mettre en place la base de données

**Créer et remplir le fichier `.env`** dans le dossier `server` :

```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USER=not_root
DB_PASSWORD=password
DB_NAME=my_database
```

## 📸 Screenshots
<img width="401" height="798" alt="Capture d’écran 2026-02-20 à 17 02 22" src="https://github.com/user-attachments/assets/2901d766-a704-44a9-9854-cf0b4cf9256e" /><img width="394" height="793" alt="Capture d’écran 2026-02-20 à 17 02 47" src="https://github.com/user-attachments/assets/32758cb4-86ca-4516-a58b-0f5167b88f84" /><img width="400" height="797" alt="Capture d’écran 2026-02-20 à 17 03 16" src="https://github.com/user-attachments/assets/1b29c146-5f03-4526-a3c0-38c0ebf54037" /><img width="401" height="797" alt="Capture d’écran 2026-02-20 à 17 04 29" src="https://github.com/user-attachments/assets/9559b0a8-8436-46c3-8c31-1b426dca722f" /><img width="400" height="797" alt="Capture d’écran 2026-02-20 à 17 05 56" src="https://github.com/user-attachments/assets/e3103eda-9c25-41c8-a0fe-794b746e2819" /><img width="403" height="796" alt="Capture d’écran 2026-02-20 à 17 05 05" src="https://github.com/user-attachments/assets/6ffabab3-eaf0-4cde-8529-161047eb92fa" />
<img width="1351" height="793" alt="Capture d’écran 2026-02-20 à 17 12 21" src="https://github.com/user-attachments/assets/36ebb27d-29b7-421f-a46d-a624682b6806" />


## 👥 Équipe
- Thomas RIEU : https://github.com/RieuThomas
- Solomon KALANDADZE : https://github.com/SolomonKa
- Serah ABIJO : https://github.com/abijoserah
- Xavier THIEULEUX : https://github.com/pitbull3333
- Lisa BUREAU : https://github.com/Lisa-Bureau

## 📬 Contact

Si vous avez des questions ou des suggestions, n'hésitez pas à me contacter :

bureau.lisa03@gmail.com
