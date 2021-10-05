---
sidebar_position: 2
---

# useTimeout

## A quoi a-t-il besoin pour

Si vous devez exécuter le code après un certain temps, ce hook vous sera utile.

## Avantages

Ce hook permet d'utiliser un moyen plus pratique d'appeler des fonctions après un certain temps. Il implémente également des méthodes pour effacer le temporisateur.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // Le code sera exécuté dans 5 secondes
 
   // Code de composant...
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de |  La description |
| :---: | :---: | :---: |
| callback | () => void | Fonction à appeler. |
| timeout | number | Timeout pour l'exécution de la fonction. |
