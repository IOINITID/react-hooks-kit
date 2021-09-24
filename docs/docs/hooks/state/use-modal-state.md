---
sidebar_position: 1
---

# useModalState

## What is it needed for

You can use it to manage the state of your modals faster and more flexibly. Both our own and ready-made libraries.

## Advantages

When we write modals, a lot of boilerplate code is generated, for example, to create states for working with a modal window, we need to write something like this:

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Button component
  <Button onClick={onOpen}>Open modal window</Button>

  // Modal window component
  <Modal isOpen={isOpen} onClose={onClose}>
    // Component code...
  </Modal>
};
```

From the example above, you can see how much needs to be written to manage a single state. By using **useModalState**, you don't need to write extra code or create extra states inside your component.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // Button component
  <Button onClick={onOpen}>Open modal window</Button>

   // Modal window component
  <Modal isOpen={isOpen} onClose={onClose}>
   // Component code...
  </Modal>
};
```

You can also set the initial state for the modal window:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // Button component
  <Button onClick={onOpen}>Open modal window</Button>

   // Modal window component
  <Modal isOpen={isOpen} onClose={onClose}>
   // Component code...
  </Modal>
};
```

This will open it by default.

The following functions are available for working with the state of the modal window:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| isOpen | boolean | Returns the open state of the modal window. |
| onOpen | () => void | Function for opening a modal window. |
| onClose | () => void | Function to close the modal window. |
| onToggle | () => void | Toggles the state of the modal to the opposite. |
