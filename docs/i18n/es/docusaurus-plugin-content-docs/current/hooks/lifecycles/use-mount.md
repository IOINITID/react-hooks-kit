---
sidebar_position: 4
---

# useMount

## Para que se necesita

Este gancho le permite ejecutar código cuando el componente está montado.

## Ventajas

Le permite usar fácilmente el estado de montaje del componente y ejecutar el código en ese momento.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // Se mostrará un mensaje en la consola cuando se monte el componente
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| callback | () => void | Función a ejecutar. |
