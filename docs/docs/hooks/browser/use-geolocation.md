---
sidebar_position: 2
---

# useGeolocation

## What is it needed for

This hook is designed to work comfortably with the Geolocation API in the browser. It provides an easier way to get location data.

## Advantages

Using this hook allows you to get rid of a large amount of boilerplate code, get ready-made data about geolocation, the state of loading of this data, as well as errors that have occurred.

## How to start using

To start using this hook, you need to import it into your project:

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Data:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

The **options** parameter is optional.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Data:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

The following functions are available for operation:

## Options

| Name | Type | Description |
| :---: | :---: | :---: |
| loading | boolean | Returns the loading status when requesting geolocation. |
| error | PositionError, undefined | Returns the error status when requesting geolocation. |
| position | Position, undefined | Returns geolocation data. |
