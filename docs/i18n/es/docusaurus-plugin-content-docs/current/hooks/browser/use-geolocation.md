---
sidebar_position: 2
---

# useGeolocation

## Para que se necesita

Este gancho está diseñado para funcionar cómodamente con la API de geolocalización en el navegador. Proporciona una forma más sencilla de obtener datos de ubicación.

## Ventajas

El uso de este gancho le permite deshacerse de una gran cantidad de código repetitivo, obtener datos listos para usar sobre la geolocalización, el estado de carga de estos datos y los errores que se hayan producido.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Datos:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

El parámetro **options** es opcional.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Datos:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| loading | boolean | Devuelve el estado de carga al solicitar la geolocalización. |
| error | PositionError, undefined | Devuelve el estado de error al solicitar la geolocalización. |
| position | Position, undefined | Devuelve datos de geolocalización. |
