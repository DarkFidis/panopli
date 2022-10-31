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

- Switcher sur la nouvelle base à créer puis créer un utilisateur de la base :

```shell
use mydb
db.createUser({ user: 'client', pwd: 'clientPassword', roles: [{ role: 'readWrite', db: 'dbName'}]})
```

> On réutilise ici les crédentials du client Mongo qui ont servi à lancer le service `api`

- Pour seed la database, se connecter à la console du conteneur `panopli-backend` puis lancer la commande NPM : 

```shell
npm run seed
```

### Minikube (Kubernetes)

#### Pré-requis

- Minikube installé

- Ingress Nginx controller installé : 

```shell
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
```

- Add-on Ingress de Minikube activé : 

```shell
minikube addons enable ingress
```

#### Setup

_Etape 1 : Configuration de l'environnement_

Préciser les variables d'environnement pour lancer le pod de la base Mongo dans le fichier `k8s/db-pod.yml`:

```yaml
env:
  - name: MONGO_INITDB_ROOT_USERNAME
    value: root
  - name: MONGO_INITDB_ROOT_PASSWORD
    value: password
```

Remplacer la valeur des clés `value` par ce que vous voulez

Idem pour la configuration du serveur backend, dans le fichier `k8s/server.yml` : 

```yaml
- name: MONGO_USER
  value: clientPoc
- name: MONGO_PASSWORD
  value: password
```

> Ne pas modifier la valeur de `MONGO_HOST` sauf si vous changez le nom du service relatif à Mongo (`k8s/db-service.yml`)

Aller dans le folder `devops` et lancer la commande 

```shell
kubectl apply -f k8s/
```

_Etape 2 : Configuration de Mongo_

Pour pouvoir configurer la base Mongo, il faut se connecter au shell du Pod de celle-ci : 

```shell
kubectl exec --stdin --tty mongodb -- /bin/bash
```

puis, une fois dans le terminal du conteneur : 

```shell
mongosh
```

Ensuite s'authentifier avec les credentials de l'admin précisés lors du lancement du Pod (dans `k8s/db-pod.yml`) :

```shell
use admin
db.auth({ user: 'root', pwd: 'Secr3t!'})
```

Switcher sur la nouvelle base à créer puis créer un utilisateur de la base :

```shell
use mydb
db.createUser({ user: 'client', pwd: 'clientPassword', roles: [{ role: 'readWrite', db: 'dbName'}]})
```

> On réutilise ici les crédentials du client Mongo qui ont servi à lancer le Pod du serveur backend (dans `k8s/server.yml`)

_Etape 3 : Redémarrage du Pod backend et seed_

Pour redémarrer le serveur backend, supprimer le Pod et le recréer : 

```shell
kubectl delete pod panopli-back
kubectl apply -f k8s/server.yml
```

> On peut vérifier si le serveur backend s'est correctement connecté à Mongo en consultant les logs : 

```shell
kubectl logs panopli-back -c panopli-back
```

```shell
[2022-10-30T18:44:32.955+0000] [DEBUG] [Panopli-local] - initializing web-server
[2022-10-30T18:44:32.958+0000] [DEBUG] [Panopli-local] - web-server initialized
[2022-10-30T18:44:32.996+0000] [INFO] [Panopli-local] - Connected
[2022-10-30T18:44:32.997+0000] [INFO] [Panopli-local] - service mongo-client started
[2022-10-30T18:44:32.999+0000] [INFO] [Panopli-local] - web server ready : http://127.0.0.1:5000 …
[2022-10-30T18:44:32.999+0000] [INFO] [Panopli-local] - service web-server started
[2022-10-30T18:44:32.999+0000] [INFO] [Panopli-local] - /!\ to stop worker : kill -s SIGTERM 1
```

Une fois la connexion établie, on peut lancer le seed de la base : 

```shell
kubectl exec panopli-back -c panopli-back -- npm run seed
```

_Etape 4 : Se rendre sur l'app_

Pour pouvoir consulter l'app, il faut récupérer l'IP du contrôleur Ingress : 

```shell
kubectl get ingress
```

Copier l'IP obtenue dans le navigateur

Enjoy !





