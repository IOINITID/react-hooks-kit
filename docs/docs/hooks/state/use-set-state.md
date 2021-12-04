---
sidebar_position: 3
---

# useSetState

## What is it needed for

This hook provides a functional counterpart to the setState method from React class components. It helps to use an object with many fields as a state, and change only the required field in a convenient way.

## Advantages

Convenience of working with the state of a component that contains many states, but implemented using a hook. Allows you to get rid of a lot of boilerplate code.

## How to start using

To start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useSetState } from 'react-hooks-kit';

const Component = () => {
  const { state, setState } = useSetState({ type: 'text', data: 'some text' });

  // State before changes
  console.log(state); // { type: 'text', data: 'some text' }

  // Button component
  <button onClick={() => setState({ data: 'some updated text' })}>Update the data</button>

  // State after changes
  console.log(state); // { type: 'text', data: 'some updated text' }
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| state | T, unknown | Returns the state of the component. |
| setState | () => void | A function that sets a new state. |
