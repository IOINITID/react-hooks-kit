---
sidebar_position: 3
---

# useSetState

## Para que se necesita

Este gancho proporciona una contraparte funcional al método setState de los componentes de la clase React. Es útil usar un objeto con muchos campos como estado y cambiar solo el campo requerido de una manera conveniente.

## Ventajas

Conveniencia de trabajar con el estado de un componente que contiene muchos estados, pero implementado mediante un gancho. Le permite deshacerse de una gran cantidad de código repetitivo.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useSetState } from 'react-hooks-kit';

const Component = () => {
  const { state, setState } = useSetState({ type: 'text', data: 'some text' });

  // Estado antes de cambios
  console.log(state); // { type: 'text', data: 'some text' }

  // Componente de botón
  <button onClick={() => setState({ data: 'some updated text' })}>Actualiza los datos</button>

  // Condición después de cambios
  console.log(state); // { type: 'text', data: 'some updated text' }
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| state | T, unknown | Devuelve el estado del componente. |
| setState | () => void | Una función que establece un nuevo estado. |
