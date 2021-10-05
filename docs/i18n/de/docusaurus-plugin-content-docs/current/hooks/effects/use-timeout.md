---
sidebar_position: 2
---

# useTimeout

## Wofür wird es benötigt

Wenn Sie den Code nach einer bestimmten Zeit ausführen müssen, ist dieser Hook praktisch.

## Vorteile

Dieser Hook hilft, Funktionen nach einer bestimmten Zeit bequemer aufzurufen. Es implementiert auch Methoden zum Löschen des Timers.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // Der Code wird in 5 Sekunden ausgeführt
 
   // Komponentencode...
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| callback | () => void | Funktion zum Aufrufen. |
| timeout | number | Timeout für die Funktionsausführung. |
