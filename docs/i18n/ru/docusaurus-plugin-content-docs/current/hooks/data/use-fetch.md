---
sidebar_position: 1
---

# useFetch

## Для чего нужен

Этот хук предназначен для отправки запросов и получения данных по API. Он предоставляет более удобное получение данных, состояние загрузки и возможные ошибки.

## Преимущества

Реализация этого хука выполнена при помощи [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), что позволило не использовать сторонние зависимости вроде [Axios](https://axios-http.com) и других библиотек. Также он помогает избавиться от шаблонного кода, а котором будут обрабатываться состояния запроса.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

Параметр **options** не обязательный.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

Доступны следующие функции для работы:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| loading | boolean | Возвращает состояние загрузки данных. |
| error | boolean | Возвращает состояние ошибки. |
| data | T, undefined | Возвращает данные запроса. |
