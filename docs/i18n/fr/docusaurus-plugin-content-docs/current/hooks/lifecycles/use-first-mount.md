---
sidebar_position: 3
---

# useFirstMount

## A quoi a-t-il besoin pour

Ce hook permet de déterminer si le rendu du composant dans lequel il est appelé est le premier, ou si de nouveaux rendus ont déjà eu lieu. Fondamentalement, cela peut être utile pour exécuter du code une fois dans un composant, quels que soient ses rendus ultérieurs.

## Avantages

Ce hook fournit un indicateur simple pour déterminer si le composant est rendu en premier ou non. Il conserve sa valeur quel que soit le rendu des nouveaux composants.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // Code de composant...
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| isFirstMount | boolean | Renvoie ou non le premier rendu du composant. |
