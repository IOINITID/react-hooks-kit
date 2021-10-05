---
sidebar_position: 2
---

# useTimeout

## Para que se necesita

Si necesita ejecutar el código después de cierto tiempo, entonces este gancho será útil.

## Ventajas

Este gancho ayuda a utilizar una forma más conveniente de llamar a funciones después de un tiempo determinado. También implementa métodos para borrar el temporizador.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // El código se ejecutará en 5 segundos.
 
   // Código de componente...
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| callback | () => void | Función para llamar. |
| timeout | number | Tiempo de espera para la ejecución de la función. |
