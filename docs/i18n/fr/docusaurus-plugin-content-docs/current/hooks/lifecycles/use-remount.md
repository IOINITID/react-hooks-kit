---
sidebar_position: 2
---

# useRemount

## De quoi a-t-il besoin pour

Si vous devez remonter manuellement votre composant. Cela peut être utile lorsque vous devez mettre à jour les données d'un composant, quel que soit son état.

## Avantages

Pour implémenter cette fonctionnalité, les fonctionnalités de base de React sont utilisées, ce qui garantit son fonctionnement sur toutes les versions et dans toutes les applications créées sur React.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // Bouton de remontage du composant
  <Button onClick={onRemount}>Remonter le composant</Button>
  
  // Vous devez ajouter à la propriété de clé
  <ComponentToRemount key={key} />
};
```

Lorsque le bouton est cliqué, le **ComponentToRemount** sera remonté.

Les fonctions suivantes sont disponibles pour le fonctionnement:

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| key | number | Renvoie l'état initial de la clé. |
| onRemount | () => void | Fonction pour changer l'état de la clé. |
