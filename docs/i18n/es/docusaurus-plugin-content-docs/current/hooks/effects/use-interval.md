---
sidebar_position: 1
---

# useInterval

## Para que se necesita

Si necesita repetir la ejecución del código en un cierto intervalo, o una cierta cantidad de veces, entonces este gancho puede serle útil.

## Ventajas

El gancho es muy fácil de usar, solo necesita pasar una función para ejecutar y también puede especificar parámetros adicionales. También implementa métodos para borrar el temporizador.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // El código se ejecutará 3 veces, con un intervalo de 5 segundos.
 
   // Código de componente...
};
```

El parámetro **stop** es opcional.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // El código se ejecutará con un intervalo de 5 segundos.
 
   // Código de componente...
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| callback | () => void | Función para llamar. |
| interval | number | El intervalo para repetir la llamada a la función. |
| stop | number, undefined | El número de repeticiones. |
