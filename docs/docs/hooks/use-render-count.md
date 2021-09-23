---
sidebar_position: 1
---

# useRenderCount

## What is it needed for

Using this hook can help you develop new components, track renders, and optimize in the process. So also to improve what has already been written.

## Advantages

It is made for a quick view of the number of renders. Tools like [**Profiler**](https://ru.reactjs.org/docs/profiler.html) take a little more time and skills to work with, but give a complete picture.

If you need to quickly check the performance of a component, then this is what can help you. Otherwise, it is recommended to use more advanced performance testing tools such as [**Profiler**](https://reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) and others.

## How to start using

In order to start using this hook, you need to import it into your project:

After that, you can use the **renderCount** variable for output to the console.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // Component code...
};
```

By default, **useRenderCount** returns the number of renders in the **renderCount** variable.

There are options for passing parameters for more detailed information and ease of development or debugging.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // Component code...
};
```

In this case, **useRenderCount** will return a string indicating the component and the number of its renders. This is a better view for debugging performance issues.
