---
sidebar_position: 1
---

# useRenderCount

## Wofür wird es benötigt

Mithilfe dieses Hooks können Sie neue Komponenten entwickeln, Renderings verfolgen und dabei optimieren. Also auch um das bereits Geschriebene zu verbessern.

## Vorteile

Es wurde entwickelt, um die Anzahl der Renderings schnell anzuzeigen. Tools wie [**Profiler**](https://ru.reactjs.org/docs/profiler.html) erfordern etwas mehr Zeit und Fähigkeiten, um damit zu arbeiten, geben aber ein vollständiges Bild.

Wenn Sie die Leistung einer Komponente schnell überprüfen müssen, kann Ihnen dies helfen. Andernfalls wird empfohlen, erweiterte Leistungstesttools wie [**Profiler**](https://reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) und andere.

## So starten Sie die Verwendung

Um diesen Hook zu verwenden, müssen Sie ihn in Ihr Projekt importieren:

Danach können Sie die Variable **renderCount** für die Ausgabe an die Konsole verwenden.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // Komponentencode...
};
```

**useRenderCount** gibt standardmäßig die Anzahl der Renderings in der Variable **renderCount** zurück.

Es gibt Optionen zum Übergeben von Parametern, für detailliertere Informationen und eine einfachere Entwicklung oder Fehlersuche.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // Komponentencode...
};
```

In diesem Fall gibt **useRenderCount** einen String zurück, der die Komponente und die Anzahl ihrer Renderings angibt. Dies ist eine bessere Ansicht zum Debuggen von Leistungsproblemen.
