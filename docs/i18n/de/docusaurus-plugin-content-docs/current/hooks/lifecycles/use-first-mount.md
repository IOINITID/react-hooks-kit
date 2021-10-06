---
sidebar_position: 3
---

# useFirstMount

## Wofür wird es benötigt

Mit diesem Hook können Sie feststellen, ob das Rendering der Komponente, in der es aufgerufen wird, das erste ist oder ob bereits neue Renderings aufgetreten sind. Grundsätzlich kann es nützlich sein, Code einmal in einer Komponente auszuführen, unabhängig von seinen weiteren Renderings.

## Vorteile

Dieser Hook bietet ein einfaches Flag, um zu bestimmen, ob die Komponente zuerst gerendert wird oder nicht. Es behält seinen Wert unabhängig von neuen Komponenten-Renderings.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // Komponentencode...
};
```

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| isFirstMount | boolean | Gibt das erste Rendering der Komponente zurück oder nicht. |
