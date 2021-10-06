---
sidebar_position: 4
---

# useMount

## 무엇을 위해 필요합니까

이 후크를 사용하면 구성 요소가 마운트될 때 코드를 실행할 수 있습니다.

## 장점

컴포넌트의 마운트 상태를 쉽게 사용하고 그 순간에 코드를 실행할 수 있습니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // 구성 요소가 마운트되면 콘솔에 메시지가 표시됩니다.
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| callback | () => void | 실행할 함수입니다. |
