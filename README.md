# Test technique Panopli

## Déploiement

### En local

#### Pré-requis

**Base Mongo**

Vous devez disposer d'une base de données Mongo opérationelle contenant une base vide (exemple : `mybase`)

Il faut ensuite préciser le nom de votre base et le host de Mongo dans la config du projet `backend`, dans le fichier `backend/config/default.yml` à l'intérieur du namespace
`mongo`

> Si vous souhaitez utiliser une base de test, il faut préciser son nom dans le fichier `backend/config/test.yml`

Ensuite, il faut préciser le nom du client Mongo, le host et son mot de passe comme variables d'environnement dans le fichier `backend/.envrc.local`, respectivement `MONGO_USER`
`MONGO_HOST` et `MONGO_PASSWORD`

> Ne pas oublier de lancer la commande `direnv allow` à la racine du projet `backend` pour prendre en compte les changements dans `.envrc.local`

**Seed**

Pour seed la base de données, lancer le script à la racine du folder `backend`

```shell
npm run seed
```

> A ne lancer qu'une fois sinon il y aura des doublons

#### Lancement du backend

A la racine du folder `backend`, lancer le script 

```shell
npm run start
```

#### Lancement du frontend

A la racine du folder `frontend`, lancer le script

```shell
yarn dev
```

ou bien

```shell
yarn build
yarn start
```

### Docker

#### Pré-requis:

**Admin Mongo**

Avant de lancer le déploiement, il faut préciser les credentials pour le conteneur Mongo. Ce sont les variables d'environnement utilisées pour le service `db` 
dans le fichier `devops/docker/docker-compose.yml` : 

- `MONGO_INITDB_ROOT_USERNAME` : admin

- `MONGO_INITDB_ROOT_PASSWORD` : mot de passe de l'admin

**Client Mongo**

Les credentials du client Mongo sont utilisés pour lancer le service `api` : 

- `MONGO_USER` : client

- `MONGO_PASSWORD` : mot de passe du client



#### Lancement

Pour lancer le déploiement via Docker, aller dans le folder `devops/docker`, puis lancer la commande

```shell
docker-compose up -d
```

#### Configuration de Mongo

- Se connecter en mode interactif sur le conteneur de Mongo : 

```shell
docker exec -it panopli-db sh
```

- Lancer le shell Mongo dans le conteneur puis s'authentifier avec les credentials de l'admin précisés lors du lancement du conteneur : 

```shell
mongo
use admin
db.auth({ user: 'root', pwd: 'Secr3t!'})
```

- Créer un utilisateur de la base :

```shell
db.createUser({ user: 'client', pwd: 'clientPassword', roles: [{ role: 'readWrite', db: 'dbName'}]})
```

> On réutilise ici les crédentials du client Mongo qui ont servi à lancer le service `api`




