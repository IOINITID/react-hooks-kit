---
sidebar_position: 2
---

# useRemount

## Wofür wird es benötigt

Wenn Sie Ihre Komponente manuell neu mounten müssen. Dies kann nützlich sein, wenn Sie die Daten einer Komponente unabhängig von ihrem Status aktualisieren müssen.

## Vorteile

Um diese Funktion zu implementieren, werden die grundlegenden Funktionen von React verwendet, die garantiert auf allen Versionen und in allen auf React erstellten Anwendungen funktionieren.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // Taste zum erneuten Montieren der Komponente
  <Button onClick={onRemount}>Komponente wieder montieren</Button>
  
  // Sie müssen zur Schlüsseleigenschaft hinzufügen
  <ComponentToRemount key={key} />
};
```

Wenn auf die Schaltfläche geklickt wird, wird **ComponentToRemount** neu gemountet.

Zur Bedienung stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| key | number | Gibt den Anfangszustand des Schlüssels zurück. |
| onRemount | () => void | Funktion zum Ändern des Schlüsselzustands. |
