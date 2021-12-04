---
sidebar_position: 2
---

# useGeolocation

## Для чего нужен

Этот хук предназначен для удобной работы с Geolocation API в браузере. Он предоставляет более простой способ для получения данных о геопозиции.

## Преимущества

Использование этого хука позволяет вам избавиться от большого количества шаблонного кода, получать готовые данные о геолокации, состоянии загрузки этих данных, а также возникших ошибках.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Данные:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Параметр **options** не обязательный.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>Данные:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

Доступны следующие функции для работы:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| loading | boolean | Возвращает состояние загрузки при запросе геолокации. |
| error | PositionError, undefined | Возвращает состояние ошибки при запросе геолокации. |
| position | Position, undefined | Возвращает данные геолокации. |
