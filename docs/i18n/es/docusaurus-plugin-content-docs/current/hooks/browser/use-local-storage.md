---
sidebar_position: 1
---

# useLocalStorage

## Para que se necesita

Este gancho le permite administrar el almacenamiento local a través de la API del navegador. Es posible leer, escribir nuevos y eliminar valores del almacenamiento local.

## Ventajas

Con este enlace, puede leer datos de manera conveniente por clave y escribir nuevos valores en el almacenamiento local. Dado que todos los datos se almacenan en el almacenamiento local como cadenas, este gancho ya contiene el análisis de estos valores de la cadena.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // Imprime el valor predeterminado en la consola
  console.log(value); // undefined

  // Componente de botón
  // Agrega valor a localStorage
  <button onClick={() => setValue({ mode: 'light' })}>Agregar tema</button>

  // Imprime el nuevo valor en la consola
  console.log(value); // { mode: 'light' }
}
```

También puede establecer el estado inicial de la clave en el almacenamiento local:
El parámetro **initialValue** es opcional.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime el valor predeterminado en la consola
  console.log(value); // { mode: 'light' }

  // Componente de botón
  // Agrega valor a localStorage
  <button onClick={() => setValue({ mode: 'dark' })}>Cambiar de tema</button>

  // Imprime el nuevo valor en la consola
  console.log(value); // { mode: 'dark' }
}
```

También es posible eliminar valores del almacenamiento local:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime el valor predeterminado en la consola
  console.log(value); // { mode: 'light' }

  // Componente de botón
  // Elimina valor de localStorage por clave
  <button onClick={() => removeValue('theme')}>Eliminar tema</button>

  // Imprime el nuevo valor en la consola
  console.log(value); // undefined
}
```

Al igual que en la API del navegador, se ha agregado la capacidad de borrar completamente el almacenamiento local:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Imprime el valor predeterminado en la consola
  console.log(value); // { mode: 'light' }

  // Componente de botón
  // Borra todos los valores de localStorage
  <button onClick={() => clearAllValues()}>Borrar almacenamiento local</button>

  // Imprime el nuevo valor en la consola
  console.log(value); // undefined
}
```

Las siguientes funciones están disponibles para trabajar con almacenamiento local:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| value | T, undefined | Devuelve el valor del almacenamiento local por clave. |
| setValue | T, unknown, undefined | Establece el valor del almacenamiento local. |
| removeValue | string | Elimina un valor del almacenamiento local por clave. |
| clearAllValues | () => void | Borra todos los valores de almacenamiento local. |
