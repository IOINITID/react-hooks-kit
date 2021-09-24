---
sidebar_position: 2
---

# useToggle

## What is it needed for

This hook makes it easy to manage two states for switching or interacting with elements.

## Advantages

Using this hook, you will not create unnecessary boilerplate code in your projects. Also, don't create additional state inside your component.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // Switch component
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

You can also set the initial state for the switch:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // Switch component
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

This will turn the switch on by default.

The following functions are available for working with the switch state:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| isEnabled | boolean | Returns the on state of a switch. |
| onToggle | () => void | Toggles the state to the opposite. |
