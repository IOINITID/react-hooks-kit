---
sidebar_position: 1
---

# useRenderCount

## A quoi a-t-il besoin pour

L'utilisation de ce hook peut vous aider à développer de nouveaux composants, à suivre les rendus et à optimiser le processus. Donc aussi pour améliorer ce qui a déjà été écrit.

## Avantages

Il est fait pour une vue rapide du nombre de rendus. Des outils comme [**Profiler**](https://ru.reactjs.org/docs/profiler.html) prennent un peu plus de temps et de compétences, mais donnent une image complète.

Si vous avez besoin de vérifier rapidement les performances d'un composant, voici ce qui peut vous aider. Sinon, il est recommandé d'utiliser des outils de test de performances plus avancés tels que [**Profiler**](https://reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) et d'autres.

## Comment commencer à utiliser

Pour commencer à utiliser ce hook, vous devez l'importer dans votre projet:

Après cela, vous pouvez utiliser la variable **renderCount** pour la sortie sur la console.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // Code de composant...
};
```

Par défaut, **useRenderCount** renvoie le nombre de rendus dans la variable **renderCount**.

Il existe des options pour passer des paramètres pour des informations plus détaillées et une facilité de développement ou de débogage.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // Code de composant...
};
```

Dans ce cas, **useRenderCount** renverra une chaîne indiquant le composant et le nombre de ses rendus. Il s'agit d'une meilleure vue pour le débogage des problèmes de performances.
