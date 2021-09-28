---
sidebar_position: 2
---

# useToggle

## De quoi a-t-il besoin pour

Ce hook permet de gérer facilement deux états pour basculer ou interagir avec des éléments.

## Avantages

En utilisant ce crochet, vous ne créerez pas de code passe-partout inutile dans vos projets. De plus, ne créez pas d'état supplémentaire dans votre composant.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // Composant de commutation
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Vous pouvez également définir l'état initial du commutateur:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // Composant de commutation
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Cela activera l'interrupteur par défaut.

Les fonctions suivantes sont disponibles pour travailler avec l'état de commutation:

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| isEnabled | boolean | Renvoie l'état activé d'un commutateur. |
| onToggle | () => void | Bascule l'état vers l'opposé. |
