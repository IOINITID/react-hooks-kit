---
sidebar_position: 1
---

# useLocalStorage

## Для чего нужен

Данный хук позволяет управлять локальным хранилищем через браузерное API. Есть возможность считывать, записывать новые и удалять значения из локального хранилища.

## Преимущества

Используя данный хук, вы сможете удобным способом считать данные по ключу и записать новые значения в локальное хранилище. Так как в локальном хранилище все данные хранятся в виде строк, данный хук уже содержит в себе парсинг этих значений из строки.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // Выводит в консоль значение по умолчанию
  console.log(value); // undefined

  // Компонент кнопки
  // Добавляет значение в localStorage
  <button onClick={() => setValue({ mode: 'light' })}>Добавить тему</button>

  // Выводит в консоль новое значение 
  console.log(value); // { mode: 'light' }
}
```

Также можно установить начальное состояние для ключа в локальном хранилище:
Параметр **initialValue** не обязательный.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Выводит в консоль значение по умолчанию
  console.log(value); // { mode: 'light' }

  // Компонент кнопки
  // Добавляет значение в localStorage
  <button onClick={() => setValue({ mode: 'dark' })}>Поменять тему</button>

  // Выводит в консоль новое значение
  console.log(value); // { mode: 'dark' }
}
```

Так же есть возможность удалять значения из локального хранилища:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Выводит в консоль значение по умолчанию
  console.log(value); // { mode: 'light' }

  // Компонент кнопки
  // Удаляет значение из localStorage по ключу
  <button onClick={() => removeValue('theme')}>Удалить тему</button>

  // Выводит в консоль новое значение
  console.log(value); // undefined
}
```

Как и в браузерном API, добавлена возможность полной очистки локального хранилища:

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // Выводит в консоль значение по умолчанию
  console.log(value); // { mode: 'light' }

  // Компонент кнопки
  // Очищает все значения из localStorage
  <button onClick={() => clearAllValues()}>Очистить локальное хранилище</button>

  // Выводит в консоль новое значение
  console.log(value); // undefined
}
```

Доступны следующие функции для работы с локальным хранилищем:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| value | T, undefined | Возвращает значение локального хранилища по ключу. |
| setValue | T, unknown, undefined | Устанавливает значение локального хранилища. |
| removeValue | string | Удаляет значение из локального хранилища по ключу. |
| clearAllValues | () => void | Очищает все значения локального хранилища. |
