---
sidebar_position: 3
---

# useFirstMount

## 무엇을 위해 필요합니까

이 후크를 사용하면 호출된 구성 요소의 렌더링이 첫 번째 렌더링인지 또는 새 렌더링이 이미 발생했는지 확인할 수 있습니다. 기본적으로 추가 렌더링에 관계없이 구성 요소에서 한 번 코드를 실행하는 데 유용할 수 있습니다.

## 장점

이 후크는 구성 요소가 먼저 렌더링되는지 여부를 결정하는 간단한 플래그를 제공합니다. 새 구성 요소 렌더링에 관계없이 값을 유지합니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // 구성 요소 코드...
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| isFirstMount | boolean | 구성 요소의 첫 번째 렌더링 여부를 반환합니다. |
