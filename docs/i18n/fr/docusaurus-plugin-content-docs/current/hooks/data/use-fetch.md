---
sidebar_position: 1
---

# useFetch

## A quoi a-t-il besoin pour

Ce hook permet d'envoyer des requêtes et de recevoir des données via l'API. Il offre une meilleure récupération des données, l'état de chargement et les erreurs possibles.

## Avantages

Ce hook a été implémenté à l'aide de [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), ce qui nous a permis de ne pas utiliser de dépendances tierces comme [Axios](https://axios-http.com) et d'autres bibliothèques. Cela aide également à se débarrasser du code passe-partout qui gérera les états de demande.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet :

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

Le paramètre **options** est facultatif.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement :

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| loading | boolean | Renvoie l'état de chargement des données. |
| error | boolean | Renvoie l'état d'erreur. |
| data | T, undefined | Renvoie les données de la requête. |
