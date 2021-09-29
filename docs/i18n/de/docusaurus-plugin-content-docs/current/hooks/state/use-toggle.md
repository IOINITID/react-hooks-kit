---
sidebar_position: 2
---

# useToggle

## Wofür wird es benötigt

Mit diesem Hook können Sie ganz einfach zwei Zustände zum Umschalten oder Interagieren mit Elementen verwalten.

## Vorteile

Mit diesem Hook erstellen Sie keinen unnötigen Boilerplate-Code in Ihren Projekten. Erstellen Sie auch keinen zusätzlichen Status in Ihrer Komponente.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // Schaltkomponente
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Sie können auch den Ausgangszustand für den Schalter einstellen:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // Schaltkomponente
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Dadurch wird der Schalter standardmäßig eingeschaltet.

Für die Arbeit mit dem Schaltzustand stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| isEnabled | boolean | Gibt den Ein-Zustand eines Schalters zurück. |
| onToggle | () => void | Schaltet den Zustand in das Gegenteil um. |
