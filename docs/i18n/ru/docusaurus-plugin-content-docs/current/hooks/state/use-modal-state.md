---
sidebar_position: 1
---

# useModalState

## Для чего нужен

Он может пригодиться вам для более быстрого и гибкого управления состоянием ваших модальных окон. Как собственных так и готовых библиотек.

## Преимущества

Когда мы пишем модальные окна, создается много шаблонного кода, например чтобы создать состояния для работы с модальным окно нам нужно написать что то похожее на это:

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Компонент кнопки
  <Button onClick={onOpen}>Открыть модальное окно</Button>

  // Компонент модального окна
  <Modal isOpen={isOpen} onClose={onClose}>
    // Код компонента...
  </Modal>
};
```

Из примера выше видно, как много всего нужно написать для управления одним состоянием. Используя **useModalState**, вам не потребуется писать лишнего кода, а также создавать лишние состояния внутри вашего компонента.

## Как начать использовать

Для того чтобы начать использовать этот хук, вам нужно импортировать его в проект:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // Компонент кнопки
  <Button onClick={onOpen}>Открыть модальное окно</Button>

   // Компонент модального окна
  <Modal isOpen={isOpen} onClose={onClose}>
   // Код компонента...
  </Modal>
};
```

Также можно установить начальное состояние для модального окна:

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // Компонент кнопки
  <Button onClick={onOpen}>Открыть модальное окно</Button>

   // Компонент модального окна
  <Modal isOpen={isOpen} onClose={onClose}>
   // Код компонента...
  </Modal>
};
```

Таким образом оно будет открыто по умолчанию.

Доступны следующие функции для работы с состоянием модального окна:

## Параметры

| Название | Тип | Описание |
| :---: | :---: | :---: |
| isOpen | boolean | Возвращает состояние открытия модального окна. |
| onOpen | () => void | Функция для открытия модального окна. |
| onClose | () => void | Функция для закрытия модального окна. |
| onToggle | () => void | Переключает состояние модального окна на противоположное. |
