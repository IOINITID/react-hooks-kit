---
sidebar_position: 5
---

# useUnmount

## A quoi a-t-il besoin pour

Ce hook vous permet d'exécuter du code lorsque le composant est démonté.

## Avantages

Vous permet d'utiliser facilement l'état non monté du composant et d'exécuter le code à ce moment-là.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // Un message s'affichera dans la console lorsque le composant sera démonté
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| callback | () => void | Fonction à exécuter. |
