---
sidebar_position: 2
---

# useRemount

## What is it needed for

If you need to manually remount your component. This can be useful when you need to update the data of a component, regardless of its state.

## Advantages

To implement this feature, the basic features of React are used, which is guaranteed to work on all versions and in any applications made on React.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // Button for remounting the component
  <Button onClick={onRemount}>Remount component</Button>
  
  // You need to add to the key property
  <ComponentToRemount key={key} />
};
```

When the button is clicked, the **ComponentToRemount** will be remounted.

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| key | number | Returns the initial state of key. |
| onRemount | () => void | Function for changing the state of key. |
