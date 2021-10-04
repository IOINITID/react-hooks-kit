---
sidebar_position: 3
---

# useFirstMount

## What is it needed for

This hook allows you to determine if the render of the component in which it is called is the first one, or new renders have already occurred. Basically, it can be useful for executing code once in a component, regardless of its further renders.

## Advantages

This hook provides a simple flag to determine if the component is rendered first or not. It retains its value regardless of new component renders.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // Component code...
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| isFirstMount | boolean | Returns the first render of the component or not. |
