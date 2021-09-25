---
sidebar_position: 1
---

# useLocalStorage

## What is it needed for

This hook allows you to manage local storage through the browser API. It is possible to read, write new and delete values from local storage.

## Advantages

Using this hook, you can conveniently read data by key and write new values to local storage. Since all data is stored in the local storage as strings, this hook already contains the parsing of these values from the string.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // Prints the default value to the console
  console.log(value); // undefined

  // Button component
  // Adds value to localStorage
  <button onClick={() => setValue({ mode: 'light' })}>Add theme</button>

  // Prints the new value to the console
  console.log(value); // { mode: 'light' }
}
```

You can also set the initial state for the key in local storage:
The **initialValue** parameter is optional.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Prints the default value to the console
  console.log(value); // { mode: 'light' }

  // Button component
  // Adds value to localStorage
  <button onClick={() => setValue({ mode: 'dark' })}>Change theme</button>

  // Prints the new value to the console
  console.log(value); // { mode: 'dark' }
}
```

It is also possible to delete values from local storage:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Prints the default value to the console
  console.log(value); // { mode: 'light' }

  // Button component
  // Removes value from localStorage by key
  <button onClick={() => removeValue('theme')}>Delete theme</button>

  // Prints the new value to the console
  console.log(value); // undefined
}
```

As in the browser API, the ability to completely clear the local storage has been added:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Prints the default value to the console
  console.log(value); // { mode: 'light' }

  // Button component
  // Clears all values from localStorage
  <button onClick={() => clearAllValues()}>Clear local storage</button>

  // Prints the new value to the console
  console.log(value); // undefined
}
```

The following functions are available for working with local storage:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| value | T, undefined | Returns the value of the local storage by key. |
| setValue | T, unknown, undefined | Sets the value of local storage. |
| removeValue | string | Removes a value from local storage by key. |
| clearAllValues | () => void | Clears all local storage values. |
