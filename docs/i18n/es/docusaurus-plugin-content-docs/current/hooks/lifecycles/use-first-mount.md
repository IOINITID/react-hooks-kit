---
sidebar_position: 3
---

# useFirstMount

## Para que se necesita

Este gancho le permite determinar si el renderizado del componente en el que se llama es el primero, o si ya se han producido nuevos renderizados. Básicamente, puede ser útil para ejecutar código una vez en un componente, independientemente de sus representaciones posteriores.

## Ventajas

Este gancho proporciona una bandera simple para determinar si el componente se representa primero o no. Conserva su valor independientemente de las nuevas representaciones de componentes.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // Código de componente...
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| isFirstMount | boolean | Devuelve el primer renderizado del componente o no. |
