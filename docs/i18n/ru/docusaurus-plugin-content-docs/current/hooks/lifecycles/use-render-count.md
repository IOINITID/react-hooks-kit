---
sidebar_position: 1
---

# useRenderCount

## Для чего нужен

Использование данного хука может помочь при разработке новых компонентов, для отслеживание рендеров и оптимизации в процессе. Так и для улучшения того что уже написано.

## Преимущества

Он сделан для быстрого просмотра количества рендеров. Инструменты вроде [**Profiler**](https://ru.reactjs.org/docs/profiler.html) требуют чуть больше времени и навыков для работы с ним, но дают полную картину.

Если вам нужно быстро проверить производительность компонента, то это то что может вам помочь. В остальных случаях рекомендуется использовать более продвинутые средства для проверки производительности, такие как [**Profiler**](https://ru.reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) и другие.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

После этого можно использовать переменную **renderCount** для вывода в консоль.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // Код компонента...
};
```

По умолчанию **useRenderCount** возвращает число рендеров в переменной **renderCount**.

Есть варианты передачи параметров, для более детальной информации и легкости при разработке или отладки.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // Код компонента...
};
```

В этом случае **useRenderCount** вернет строку, с указанием компонента и количества его рендеров. Это более удобный вид для отладки проблем с производительностью.
