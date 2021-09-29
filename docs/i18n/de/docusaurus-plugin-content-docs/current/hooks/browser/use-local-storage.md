---
sidebar_position: 1
---

# useLocalStorage

## Wofür wird es benötigt

Mit diesem Hook können Sie den lokalen Speicher über die Browser-API verwalten. Es ist möglich, Werte aus dem lokalen Speicher zu lesen, neue zu schreiben und zu löschen.

## Vorteile

Mit diesem Hook können Sie Daten bequem per Schlüssel auslesen und neue Werte in den lokalen Speicher schreiben. Da alle Daten als Strings im lokalen Speicher abgelegt werden, beinhaltet dieser Hook bereits das Parsen dieser Werte aus dem String.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // Gibt den Standardwert an die Konsole aus
  console.log(value); // undefined

  // Mehrwert für localStorage
  <button onClick={() => setValue({ mode: 'light' })}>Thema hinzufügen</button>

  // Gibt den neuen Wert an die Konsole aus
  console.log(value); // { mode: 'light' }
}
```

Sie können den Anfangszustand des Schlüssels auch im lokalen Speicher festlegen:
Der Parameter **initialValue** ist optional.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Gibt den Standardwert an die Konsole aus
  console.log(value); // { mode: 'light' }

  // Schaltflächenkomponente
  // Mehrwert für localStorage
  <button onClick={() => setValue({ mode: 'dark' })}>Thema ändern</button>

  // Gibt den neuen Wert an die Konsole aus
  console.log(value); // { mode: 'dark' }
}
```

Es ist auch möglich, Werte aus dem lokalen Speicher zu löschen:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Gibt den Standardwert an die Konsole aus
  console.log(value); // { mode: 'light' }

  // Schaltflächenkomponente
  // Entfernt den Wert von localStorage per Schlüssel
  <button onClick={() => removeValue('theme')}>Thema löschen</button>

  // Gibt den neuen Wert an die Konsole aus
  console.log(value); // undefined
}
```

Wie in der Browser-API wurde die Möglichkeit hinzugefügt, den lokalen Speicher vollständig zu löschen:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Gibt den Standardwert an die Konsole aus
  console.log(value); // { mode: 'light' }

  // Schaltflächenkomponente
  // Löscht alle Werte aus localStorage
  <button onClick={() => clearAllValues()}>Lokalen Speicher löschen</button>

  // Gibt den neuen Wert an die Konsole aus
  console.log(value); // undefined
}
```

Für die Arbeit mit lokalem Speicher stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| value | T, undefined | Gibt den Wert des lokalen Speichers nach Schlüssel zurück. |
| setValue | T, unknown, undefined | Legt den Wert des lokalen Speichers fest. |
| removeValue | string | Entfernt einen Wert per Schlüssel aus dem lokalen Speicher. |
| clearAllValues | () => void | Löscht alle lokalen Speicherwerte. |
