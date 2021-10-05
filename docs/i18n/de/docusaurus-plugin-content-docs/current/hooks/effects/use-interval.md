---
sidebar_position: 1
---

# useInterval

## Wofür wird es benötigt

Wenn Sie die Ausführung des Codes in einem bestimmten Intervall oder einer bestimmten Anzahl von Malen wiederholen müssen, kann dieser Hook für Sie nützlich sein.

## Vorteile

Der Hook ist sehr einfach zu verwenden, Sie müssen nur eine Funktion übergeben, um sie auszuführen, und Sie können auch zusätzliche Parameter angeben. Es implementiert auch Methoden zum Löschen des Timers.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // Der Code wird dreimal im Abstand von 5 Sekunden ausgeführt
 
   // Komponentencode...
};
```

Der Parameter **stop** ist optional.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // Der Code wird im Abstand von 5 Sekunden ausgeführt
 
   // Komponentencode...
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| callback | () => void | Funktion zum Aufrufen. |
| interval | number | Das Intervall für die Wiederholung des Funktionsaufrufs. |
| stop | number, undefined | Die Anzahl der Wiederholungen. |
