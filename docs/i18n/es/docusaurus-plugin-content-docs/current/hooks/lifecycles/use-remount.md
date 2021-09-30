---
sidebar_position: 2
---

# useRemount

## Para que se necesita

Si necesita volver a montar manualmente su componente. Esto puede resultar útil cuando necesite actualizar los datos de un componente, independientemente de su estado.

## Ventajas

Para implementar esta característica, se utilizan las características básicas de React, que está garantizado para funcionar en todas las versiones y en cualquier aplicación realizada en React.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // Botón para volver a montar el componente
  <Button onClick={onRemount}>Remontar componente</Button>
  
  // Necesita agregar a la propiedad clave
  <ComponentToRemount key={key} />
};
```

Cuando se hace clic en el botón, **ComponentToRemount** se volverá a montar.

Las siguientes funciones están disponibles para su funcionamiento:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| key | number | Devuelve el estado inicial de la clave. |
| onRemount | () => void | Función para cambiar el estado de la llave. |
