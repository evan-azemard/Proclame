# Projet Proclame

Application web (React + Express) pensée pour proposer des proclamations bibliques immersives. Elle propose différents thèmes (comme la tristesse, la dépression, etc.) et offre pour chacun des proclamations et versets bibliques adaptés, afin d'encourager et d'accompagner les utilisateurs dans leurs moments difficiles.

Le dépôt est organisé en monorepo PNPM avec deux workspaces : `packages/client` (front) et `packages/server` (back).

## Prérequis

- Node.js 20+
- [pnpm 10](https://pnpm.io/installation)
- PostgreSQL 14+ (base accessible via `DATABASE_URL`)

## Installation

```powershell
pnpm install
```

## Configuration des variables d'environnement

1. Copier les fichiers d'exemple :

	```powershell
	cp packages\server\.env.example packages\server\.env
	```

2. Renseigner les valeurs :

	| Variable       | Description                                            |
	| -------------- | ------------------------------------------------------ |
	| `PORT`         | Port HTTP du back (ex. `3004`)                         |
	| `NODE_ENV`     | `dev`, `prod` ou `test`                                |
	| `ORIGIN`       | Origine autorisée pour CORS (ex. `http://localhost:3000`) |
	| `DATABASE_URL` | Connexion PostgreSQL (URI complète)                    |
	| `JWT_SECRET`   | Clé secrète utilisée pour signer les tokens JWT        |

## Commandes utiles

### À la racine

| Commande              | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| `pnpm dev`            | Démarre frontend + backend en parallèle                         |
| `pnpm dev:client`     | Démarre uniquement le client React (`packages/client`)          |
| `pnpm dev:server`     | Démarre uniquement l'API Express (`packages/server`)            |
| `pnpm build`          | Build complet (client + server)                                 |
| `pnpm build:client`   | Build du client (Vite)                                          |
| `pnpm build:server`   | Compilation TypeScript du serveur                               |
| `pnpm generate`       | Génère le schema/migrations Drizzle                             |
| `pnpm migrate`        | Applique les migrations sur la base configurée                  |

### Scripts frontend (`packages/client`)

```powershell
pnpm --filter client dev          # Dev server Vite
pnpm --filter client build        # Build production
pnpm --filter client preview      # Preview du build
pnpm --filter client lint         # ESLint
pnpm --filter client icons:normalize  # Normalise les icônes PNG
pnpm --filter client svg:png          # Convertit les SVG en PNG
```

### Scripts backend (`packages/server`)

```powershell
pnpm --filter server dev     # TSC watch + API avec tsx
pnpm --filter server build   # Compile en dist/
pnpm --filter server start   # Lance l'API sur le build compilé
```

## Arborescence simplifiée

```
packages/
  client/   -> Application React (Vite, TypeScript)
  server/   -> API Express (TypeScript, Drizzle ORM)
```

## Base de données

1. Générer les fichiers Drizzle après modification des schémas : `pnpm generate`
2. Appliquer les migrations : `pnpm migrate`

Les migrations se trouvent dans `packages/server/src/migrations`.

## Tests

- Frontend : scripts ESLint (`pnpm --filter client lint`).
- Backend : aucun test automatisé pour l'instant.

## Workflow de développement conseillé

1. Installer les dépendances : `pnpm install`
2. Configurer les `.env`
3. Lancer les migrations : `pnpm migrate`
4. Démarrer le monorepo : `pnpm dev`
5. Accéder au client sur `http://localhost:3000`, à l'API sur `http://localhost:<PORT>`

## Support & dépannage

- Erreur Drizzle « schema introuvable » : vérifier `packages/server/src/config/drizzle.ts` et la valeur de `DATABASE_URL`.
- Les requêtes POST/PUT renvoient 400 : confirmer que les cookies (`accessToken`) sont bien envoyés et que `ORIGIN` correspond à l’URL du client.