---
sidebar_position: 1
---

# useInterval

## Для чего нужен

Если вам необходимо повторить исполнение кода через определенный интервал, или определенное количество раз, то этот хук может вам пригодиться.

## Преимущества

Хук очень просто использовать, вам нужно только передать функцию для выполнения, также можно указать дополнительные параметры. Также в нем реализованы методы очистки таймера.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // Код выполнится 3 раза, с интервалом в 5 секунд
 
   // Код компонента...
};
```

Параметр **stop** не обязательный.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // Код будет выполнятся с интервалом в 5 секунд
 
   // Код компонента...
};
```

Доступны следующие функции для работы:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| callback | () => void | Функция для вызова. |
| interval | number | Интервал для повторения вызова функции. |
| stop | number, undefined | Количество повторений. |
