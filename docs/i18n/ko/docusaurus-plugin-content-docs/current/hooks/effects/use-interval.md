---
sidebar_position: 1
---

# useInterval

## 무엇을 위해 필요합니까

특정 간격 또는 특정 횟수로 코드 실행을 반복해야 하는 경우 이 후크가 유용할 수 있습니다.

## 장점

후크는 사용하기 매우 쉽고 실행할 함수를 전달하기만 하면 되며 추가 매개변수를 지정할 수도 있습니다. 또한 타이머를 지우는 메서드도 구현합니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // 코드는 5초 간격으로 3번 실행됩니다.
 
   // 구성 요소 코드...
};
```

**stop** 매개변수는 선택 사항입니다.

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // 코드는 5초 간격으로 실행됩니다.
 
   // 구성 요소 코드...
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| callback | () => void | 호출할 함수입니다. |
| interval | number | 함수 호출을 반복할 간격입니다. |
| stop | number, undefined | 반복 횟수입니다. |
