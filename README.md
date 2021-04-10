# Première application avec Parcel
[Parcel](https://fr.parceljs.org/)

[https://www.youtube.com/watch?v=8rD9amRSOQY&t=103s](https://www.youtube.com/watch?v=8rD9amRSOQY&t=103s)
## Initialisation du projet
```
npm init -y
```
## Installation des dépendances
```
npm i -D parcel-bundler sass @babel/core @babel/plugin-transform-runtime @babel/runtime-corejs2
```
## Configuration de Babel
Créer un fichier `.babelrc` à la racine du projet.

Insérer le code suivant.
```json
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2,
        "regenerator": true,
      }
    ]
  ]
}
```
## Créer les script
Dans le fichier `package.json` créer les scripts `dev` et `build`
```json
"scripts": {
    "dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000",
    "build": "parcel build public/index.html --out-dir dist --public-url ./"
  },
```
Lors de chaque lancement, les dossiers `development` et `.cache` seront supprimés et recréés.
## Lancer le projet
```
npm run dev
```
## Arrêter le serveur
```
CTRL + C
```
## Construire le projet
Le projet sera construit dans le dossier `build`.
```
npm run build
```
## Installer Axios
[Axios](https://axios-http.com/)
```
npm i axios
```
## Problème
En cas de problème de `Uncaught ReferenceError: regeneratorRuntime is not defined`

[Voir ce site](https://flaviocopes.com/parcel-regeneratorruntime-not-defined/)
