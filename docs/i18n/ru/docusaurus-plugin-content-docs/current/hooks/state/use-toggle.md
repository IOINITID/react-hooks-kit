---
sidebar_position: 2
---

# useToggle

## Для чего нужен

Данный хук позволяет с легкостью управлять двумя состояниями для переключения или взаимодействия с элементами.

## Преимущества

Используя данный хук, вы не будите создавать лишнего шаблонного кода в ваших проектах. Также не будите создавать дополнительное состояние внутри вашего компонента.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // Компонент переключателя
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Также можно установить начальное состояние для переключателя:

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // Компонент переключателя
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

Таким образом переключатель будет включен по умолчанию.

Доступны следующие функции для работы с состоянием переключателя:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| isEnabled | boolean | Возвращает состояние включения переключателя. |
| onToggle | () => void | Переключает состояние на противоположное. |
