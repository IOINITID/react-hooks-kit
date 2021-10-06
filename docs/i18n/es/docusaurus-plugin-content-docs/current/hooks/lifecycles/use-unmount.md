---
sidebar_position: 5
---

# useUnmount

## Para que se necesita

Este gancho le permite ejecutar código cuando el componente está desmontado.

## Ventajas

Le permite usar fácilmente el estado desmontado del componente y ejecutar el código en ese momento.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // Se mostrará un mensaje en la consola cuando se desmonte el componente
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| callback | () => void | Función a ejecutar. |
