---
sidebar_position: 2
---

# useTimeout

## Для чего нужен

Если вам необходимо выполнить код через определенное время, то данный хук вам пригодится.

## Преимущества

Данный хук помогает использовать более удобный способ для вызова функций через определенное время. Также в нем реализованы методы очистки таймера.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // Код выполнится через 5 секунд
 
   // Код компонента...
};
```

Доступны следующие функции для работы:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| callback | () => void | Функция для вызова. |
| timeout | number | Таймаут для выполнения функции. |