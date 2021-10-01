---
sidebar_position: 1
---

# useModalState

## 무엇을 위해 필요합니까

모달의 상태를 더 빠르고 유연하게 관리하는 데 유용할 수 있습니다. 자체 라이브러리와 기성 라이브러리 모두.

## 장점

모달을 작성할 때 많은 상용구 코드가 생성됩니다. 예를 들어 모달 창으로 작업하기 위한 상태를 생성하려면 다음과 같이 작성해야 합니다.

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // 버튼 구성 요소
  <Button onClick={onOpen}>모달 창 열기</Button>

  // 모달 창 구성 요소
  <Modal isOpen={isOpen} onClose={onClose}>
    // 구성 요소 코드...
  </Modal>
};
```

위의 예에서 단일 상태를 관리하기 위해 얼마나 많이 작성해야 하는지 알 수 있습니다. **useModalState**를 사용하면 추가 코드를 작성하거나 구성 요소 내부에 추가 상태를 만들 필요가 없습니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // 버튼 구성 요소
  <Button onClick={onOpen}>모달 창 열기</Button>

   // 모달 창 구성 요소
  <Modal isOpen={isOpen} onClose={onClose}>
   // 구성 요소 코드...
  </Modal>
};
```

모달 창의 초기 상태를 설정할 수도 있습니다.

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // 버튼 구성 요소
  <Button onClick={onOpen}>모달 창 열기</Button>

   // 모달 창 구성 요소
  <Modal isOpen={isOpen} onClose={onClose}>
   // 구성 요소 코드...
  </Modal>
};
```

기본적으로 열립니다.

모달 창의 상태 작업에 사용할 수 있는 함수는 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| isOpen | boolean | 모달 창의 열린 상태를 반환합니다. |
| onOpen | () => void | 모달 창을 여는 함수입니다. |
| onClose | () => void | 모달 창을 닫는 함수입니다. |
| onToggle | () => void | 모달 창의 상태를 반대로 전환합니다. |
