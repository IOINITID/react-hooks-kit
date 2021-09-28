---
sidebar_position: 1
---

# useLocalStorage

## De quoi a-t-il besoin pour

Ce hook vous permet de gérer le stockage local via l'API du navigateur. Il est possible de lire, d'écrire de nouvelles valeurs et de supprimer des valeurs du stockage local.

## Avantages

À l'aide de ce crochet, vous pouvez facilement lire les données par clé et écrire de nouvelles valeurs dans le stockage local. Étant donné que toutes les données sont stockées dans le stockage local sous forme de chaînes, ce hook contient déjà l'analyse de ces valeurs à partir de la chaîne.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // Imprime la valeur par défaut sur la console
  console.log(value); // undefined

  // Composant bouton
  // Ajoute de la valeur à localStorage
  <button onClick={() => setValue({ mode: 'light' })}>Ajouter un sujet</button>

  // Imprime la nouvelle valeur sur la console
  console.log(value); // { mode: 'light' }
}
```

Vous pouvez également définir l'état initial de la clé dans le stockage local:
Le paramètre **valeurinitiale** est facultatif.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime la valeur par défaut sur la console
  console.log(value); // { mode: 'light' }

  // Composant bouton
  // Ajoute de la valeur à localStorage
  <button onClick={() => setValue({ mode: 'dark' })}>Change le thème</button>

  // Imprime la nouvelle valeur sur la console
  console.log(value); // { mode: 'dark' }
}
```

Il est également possible de supprimer des valeurs du stockage local:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime la valeur par défaut sur la console
  console.log(value); // { mode: 'light' }

  // Composant bouton
  // Supprime la valeur de localStorage par clé
  <button onClick={() => removeValue('theme')}>Supprimer le sujet</button>

  // Imprime la nouvelle valeur sur la console
  console.log(value); // undefined
}
```

Comme dans l'API du navigateur, la possibilité d'effacer complètement le stockage local a été ajoutée:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime la valeur par défaut sur la console
  console.log(value); // { mode: 'light' }

  // Composant bouton
  // Efface toutes les valeurs de localStorage
  <button onClick={() => clearAllValues()}>Effacer le stockage local</button>

  // Imprime la nouvelle valeur sur la console
  console.log(value); // undefined
}
```

Les fonctions suivantes sont disponibles pour travailler avec le stockage local:

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| value | T, undefined | Renvoie la valeur du stockage local par clé. |
| setValue | T, unknown, undefined | Définit la valeur du stockage local. |
| removeValue | string | Supprime une valeur du stockage local par clé. |
| clearAllValues | () => void | Efface toutes les valeurs de stockage local. |
