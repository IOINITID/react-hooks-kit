---
sidebar_position: 1
---

# useInterval

## What is it needed for

If you need to repeat the execution of the code at a certain interval, or a certain number of times, then this hook may be useful to you.

## Advantages

The hook is very easy to use, you only need to pass a function to execute, and you can also specify additional parameters. It also implements methods for clearing the timer.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // The code will be executed 3 times, with an interval of 5 seconds
 
   // Component code...
};
```

The **stop** parameter is optional.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // The code will be executed with an interval of 5 seconds
 
   // Component code...
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| callback | () => void | Function to call. |
| interval | number | The interval to repeat the function call. |
| stop | number, undefined | The number of repetitions. |
