---
sidebar_position: 4
---

# useMount

## Wofür wird es benötigt

Mit diesem Hook können Sie Code ausführen, wenn die Komponente gemountet ist.

## Vorteile

Ermöglicht es Ihnen, den Mount-Status der Komponente einfach zu verwenden und den Code in diesem Moment auszuführen.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // Eine Meldung wird in der Konsole angezeigt, wenn die Komponente gemountet ist
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| callback | () => void | Funktion zum Ausführen. |
