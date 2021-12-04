---
sidebar_position: 3
---

# useSetState

## A quoi a-t-il besoin pour

Ce hook fournit une contrepartie fonctionnelle à la méthode setState des composants de la classe React. Il est utile d'utiliser un objet avec de nombreux champs comme état et de ne modifier que le champ requis de manière pratique.

## Avantages

Commodité de travailler avec l'état d'un composant qui contient de nombreux états, mais implémenté à l'aide d'un crochet. Vous permet de vous débarrasser de beaucoup de code passe-partout.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useSetState } from 'react-hooks-kit';

const Component = () => {
  const { state, setState } = useSetState({ type: 'text', data: 'some text' });

  // Etat avant modifications
  console.log(state); // { type: 'text', data: 'some text' }

  // Composant bouton
  <button onClick={() => setState({ data: 'some updated text' })}>Mettre à jour les données</button>

  // État après modifications
  console.log(state); // { type: 'text', data: 'some updated text' }
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| state | T, unknown | Renvoie l'état du composant. |
| setState | () => void | Une fonction qui définit un nouvel état. |
