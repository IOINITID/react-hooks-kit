---
sidebar_position: 1
---

# useModalState

## Para que se necesita

Puede resultarle útil gestionar el estado de sus modales de forma más rápida y flexible. Bibliotecas tanto propias como prefabricadas.

## Ventajas

Cuando escribimos modales, se crea una gran cantidad de código repetitivo, por ejemplo, para crear estados para trabajar con una ventana modal, necesitamos escribir algo como esto:

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Componente de botón
  <Button onClick={onOpen}>Abrir ventana modal</Button>

  // Componente de ventana modal
  <Modal isOpen={isOpen} onClose={onClose}>
    // Código de componente...
  </Modal>
};
```

En el ejemplo anterior, puede ver cuánto necesita escribir para administrar un solo estado. Al usar **useModalState**, no necesita escribir código adicional o crear estados adicionales dentro de su componente.

## Cómo empezar a usar

Para comenzar a usar este gancho, debe importarlo a su proyecto:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // Componente de botón
  <Button onClick={onOpen}>Abrir ventana modal</Button>

   // Componente de ventana modal
  <Modal isOpen={isOpen} onClose={onClose}>
   // Código de componente...
  </Modal>
};
```

También puede establecer el estado inicial de la ventana modal:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // Componente de botón
  <Button onClick={onOpen}>Abrir ventana modal</Button>

   // Componente de ventana modal
  <Modal isOpen={isOpen} onClose={onClose}>
   // Código de componente...
  </Modal>
};
```

Esto lo abrirá por defecto.

Las siguientes funciones están disponibles para trabajar con el estado de la ventana modal:

## Opciones

| Nombre | Tipo de | Descripción |
| :---: | :---: | :---: |
| isOpen | boolean | Devuelve el estado abierto de la ventana modal. |
| onOpen | () => void | Función para abrir una ventana modal. |
| onClose | () => void | Función para cerrar la ventana modal. |
| onToggle | () => void | Alterna el estado del modal al opuesto. |
