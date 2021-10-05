---
sidebar_position: 1
---

# useFetch

## Wofür wird es benötigt

Dieser Hook dient zum Senden von Anfragen und zum Empfangen von Daten über die API. Es bietet einen besseren Datenabruf, Ladestatus und mögliche Fehler.

## Vorteile

Dieser Hook wurde mit der [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) implementiert, wodurch wir keine Abhängigkeiten von Drittanbietern wie [Axios](https://axios-http.com) und andere Bibliotheken. Es hilft auch, Boilerplate-Code loszuwerden, der Anforderungszustände verarbeitet.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

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

Der Parameter **options** ist optional.

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

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| loading | boolean | Gibt den Status des Datenladens zurück. |
| error | boolean | Gibt den Fehlerstatus zurück. |
| data | T, undefined | Gibt die Anfragedaten zurück. |
