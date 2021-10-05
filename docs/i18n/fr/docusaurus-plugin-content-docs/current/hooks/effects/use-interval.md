---
sidebar_position: 1
---

# useInterval

## A quoi a-t-il besoin pour

Si vous devez répéter l'exécution du code à un certain intervalle, ou un certain nombre de fois, alors ce hook peut vous être utile.

## Avantages

Le hook est très simple à utiliser, il vous suffit de passer une fonction à exécuter, et vous pouvez également spécifier des paramètres supplémentaires. Il implémente également des méthodes pour effacer le temporisateur.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // Le code sera exécuté 3 fois, avec un intervalle de 5 secondes
 
   // Code de composant...
};
```

Le paramètre **stop** est facultatif.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // Le code sera exécuté avec un intervalle de 5 secondes
 
   // Code de composant...
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| callback | () => void | Fonction à appeler. |
| interval | number | L'intervalle pour répéter l'appel de fonction. |
| stop | number, undefined | Le nombre de répétitions. |
