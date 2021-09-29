---
sidebar_position: 1
---

# useModalState

## Wofür wird es benötigt

Es kann für Sie nützlich sein, den Zustand Ihrer Modalitäten schneller und flexibler zu verwalten. Sowohl unsere eigenen als auch fertige Bibliotheken.

## Vorteile

Wenn wir Modalwerte schreiben, wird viel Boilerplate-Code generiert, um beispielsweise Zustände für die Arbeit mit einem modalen Fenster zu erstellen, müssen wir etwa Folgendes schreiben:

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Schaltflächenkomponente
  <Button onClick={onOpen}>Modales Fenster öffnen</Button>

  // Modale Fensterkomponente
  <Modal isOpen={isOpen} onClose={onClose}>
    // Komponentencode...
  </Modal>
};
```

Aus dem obigen Beispiel können Sie sehen, wie viel geschrieben werden muss, um einen einzelnen Zustand zu verwalten. Durch die Verwendung von **useModalState** müssen Sie keinen zusätzlichen Code schreiben oder zusätzliche Zustände in Ihrer Komponente erstellen.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // Schaltflächenkomponente
  <Button onClick={onOpen}>Modales Fenster öffnen</Button>

   // Modale Fensterkomponente
  <Modal isOpen={isOpen} onClose={onClose}>
   // Komponentencode...
  </Modal>
};
```

Sie können auch den Anfangszustand für das modale Fenster festlegen:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // Schaltflächenkomponente
  <Button onClick={onOpen}>Modales Fenster öffnen</Button>

   // Modale Fensterkomponente
  <Modal isOpen={isOpen} onClose={onClose}>
   // Komponentencode...
  </Modal>
};
```

Dadurch wird es standardmäßig geöffnet.

Für die Arbeit mit dem Zustand des modalen Fensters stehen folgende Funktionen zur Verfügung:

## Optionen

| Name | Art der | Beschreibung |
| :---: | :---: | :---: |
| isOpen | boolean | Gibt den geöffneten Zustand des modalen Fensters zurück. |
| onOpen | () => void | Funktion zum Öffnen eines modalen Fensters. |
| onClose | () => void | Funktion zum Schließen des modalen Fensters. |
| onToggle | () => void | Schaltet den Zustand des Modal in das Gegenteil um. |
