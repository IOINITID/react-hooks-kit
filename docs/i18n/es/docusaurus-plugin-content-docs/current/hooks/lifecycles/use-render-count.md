---
sidebar_position: 1
---

# useRenderCount

## Para que se necesita

El uso de este enlace puede ayudarlo a desarrollar nuevos componentes, realizar un seguimiento de las representaciones y optimizar el proceso. Así también para mejorar lo que ya se ha escrito.

## Ventajas

Está hecho para ver rápidamente el número de renderizados. Herramientas como [**Profiler**](https://ru.reactjs.org/docs/profiler.html) requieren un poco más de tiempo y habilidades para trabajar, pero brindan una imagen completa.

Si necesita verificar rápidamente el rendimiento de un componente, esto es lo que puede ayudarlo. De lo contrario, se recomienda utilizar herramientas de prueba de rendimiento más avanzadas como [**Profiler**](https://reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) y otros.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

Después de eso, puede usar la variable **renderCount** para enviar la salida a la consola.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // Código de componente...
};
```

De forma predeterminada, **useRenderCount** devuelve el número de representaciones en la variable **renderCount**.

Hay opciones para pasar parámetros, para obtener información más detallada y facilitar el desarrollo o la depuración.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // Código de componente...
};
```

En este caso, **useRenderCount** devolverá una cadena que indica el componente y el número de sus representaciones. Esta es una mejor vista para depurar problemas de rendimiento.
