---
sidebar_position: 5
---

# useUnmount

## What is it needed for

This hook allows you to execute code when the component is unmounted.

## Advantages

Allows you to easily use the unmounted state of the component and execute the code at that moment.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // A message will be displayed in the console when the component is unmounted
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| callback | () => void | Function to execute. |
