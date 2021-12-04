---
sidebar_position: 2
---

# useGeolocation

## Wofür wird es benötigt

Dieser Hook wurde entwickelt, um bequem mit der Geolocation-API im Browser zu arbeiten. Es bietet eine einfachere Möglichkeit, Standortdaten zu erhalten.

## Vorteile

Mit diesem Hook können Sie eine große Menge Boilerplate-Code entfernen, vorgefertigte Daten zur Geolokalisierung, zum Ladezustand dieser Daten sowie zu aufgetretenen Fehlern abrufen.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

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
    <h2>Daten:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Der Parameter **options** ist optional.

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
    <h2>Daten:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| loading | boolean | Gibt den Ladestatus zurück, wenn die Geolokalisierung angefordert wird. |
| error | PositionError, undefined | Gibt den Fehlerstatus beim Anfordern der Geolokalisierung zurück. |
| position | Position, undefined | Gibt Geolokalisierungsdaten zurück. |
