---
sidebar_position: 4
---

# useMount

## A quoi a-t-il besoin pour

Ce hook vous permet d'exécuter du code lorsque le composant est monté.

## Avantages

Vous permet d'utiliser facilement l'état de montage d'un composant et d'exécuter du code à ce moment.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // Un message s'affichera dans la console lorsque le composant sera monté
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| callback | () => void | Fonction à exécuter. |
