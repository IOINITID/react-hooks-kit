---
sidebar_position: 1
---

# useFetch

## What is it needed for

This hook is for sending requests and receiving data via the API. It provides better data retrieval, loading status and possible errors.

## Advantages

This hook was implemented using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), which allowed us not to use third-party dependencies like [Axios](https://axios-http.com) and other libraries. It also helps to get rid of boilerplate code that will handle request states.

## How to start using

In order to start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

The **options** parameter is optional.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| loading | boolean | Returns the state of data loading. |
| error | boolean | Returns the error status. |
| data | T, undefined | Returns the request data. |
