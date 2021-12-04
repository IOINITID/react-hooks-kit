---
sidebar_position: 2
---

# useGeolocation

## A quoi a-t-il besoin pour

Ce crochet est conçu pour fonctionner confortablement avec l'API de géolocalisation dans le navigateur. Il fournit un moyen plus facile d'obtenir des données de localisation.

## Avantages

L'utilisation de ce crochet vous permet de vous débarrasser d'une grande quantité de code passe-partout, d'obtenir des données toutes faites sur la géolocalisation, l'état de chargement de ces données, ainsi que les erreurs qui se sont produites.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Données:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Le paramètre **options** est facultatif.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Données:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Les fonctions suivantes sont disponibles pour le fonctionnement:

## Options

| Nom | Type de | La description |
| :---: | :---: | :---: |
| loading | boolean | Renvoie l'état de chargement lors de la demande de géolocalisation. |
| error | PositionError, undefined | Renvoie le statut d'erreur lors de la demande de géolocalisation. |
| position | Position, undefined | Renvoie les données de géolocalisation. |
