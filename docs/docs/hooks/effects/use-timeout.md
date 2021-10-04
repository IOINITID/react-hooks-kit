---
sidebar_position: 2
---

# useTimeout

## What is it needed for

If you need to execute the code after a certain time, then this hook will come in handy.

## Advantages

This hook helps to use a more convenient way to call functions after a certain time. It also implements methods for clearing the timer.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // The code will be executed in 5 seconds
 
   // Component code...
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| callback | () => void | Function to call. |
| timeout | number | Timeout for function execution. |
