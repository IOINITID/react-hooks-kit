---
sidebar_position: 2
---

# useTimeout

## 무엇을 위해 필요합니까

특정 시간 후에 코드를 실행해야 하는 경우 이 후크가 유용할 것입니다.

## 장점

이 후크는 특정 시간 후에 함수를 호출하는 더 편리한 방법을 사용하는 데 도움이 됩니다. 또한 타이머를 지우는 메서드도 구현합니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // 코드는 5초 후에 실행됩니다.
 
   // 구성 요소 코드...
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| callback | () => void | 호출할 함수입니다. |
| timeout | number | 함수 실행을 위한 시간 초과입니다. |
