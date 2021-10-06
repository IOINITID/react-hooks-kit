---
sidebar_position: 5
---

# useUnmount

## Wofür wird es benötigt

Mit diesem Hook können Sie Code ausführen, wenn die Komponente ausgehängt ist.

## Vorteile

Ermöglicht es Ihnen, den unmounteten Zustand der Komponente einfach zu verwenden und den Code in diesem Moment auszuführen.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // Eine Meldung wird in der Konsole angezeigt, wenn die Komponente ausgehängt ist
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| callback | () => void | Funktion zum Ausführen. |
