---
sidebar_position: 1
---

# useFetch

## Para que se necesita

Este enlace es para enviar solicitudes y recibir datos a través de la API. Proporciona una mejor recuperación de datos, estado de carga y posibles errores.

## Ventajas

Este gancho se implementó utilizando la [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), lo que nos permitió no usar dependencias de terceros como [Axios](https://axios-http.com) y otras bibliotecas. También ayuda a deshacerse del código repetitivo que manejará los estados de solicitud.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

El parámetro **opciones** es opcional.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| loading | boolean | Devuelve el estado de la carga de datos. |
| error | boolean | Devuelve el estado de error. |
| data | T, undefined | Devuelve los datos de la solicitud. |
