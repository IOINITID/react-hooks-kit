---
sidebar_position: 2
---

# useToggle

## Para que se necesita

Este gancho le permite administrar fácilmente dos estados para cambiar o interactuar con elementos.

## Ventajas

Con este gancho, no creará código repetitivo innecesario en sus proyectos. Además, no cree un estado adicional dentro de su componente.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // Componente de interruptor
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

También puede establecer el estado inicial del conmutador:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // Componente de interruptor
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Esto activará el interruptor de forma predeterminada.

Las siguientes funciones están disponibles para trabajar con el estado del interruptor:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| isEnabled | boolean | Devuelve el estado de encendido de un interruptor. |
| onToggle | () => void | Cambia el estado al contrario. |
