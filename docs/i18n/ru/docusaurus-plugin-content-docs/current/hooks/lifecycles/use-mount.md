---
sidebar_position: 4
---

# useMount

## What is it needed for

This hook allows you to execute code when the component is mounted.

## Advantages

Allows you to easily use the mount state of a component and execute code at that moment.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // A message will be displayed in the console when the component is mounted
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| callback | () => void | Function to execute. |
