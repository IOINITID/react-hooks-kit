---
sidebar_position: 3
---

# useSetState

## 무엇을 위해 필요합니까

이 후크는 React 클래스 구성 요소의 setState 메서드에 대한 기능적 대응을 제공합니다. 필드가 많은 객체를 상태로 사용하고 필요한 필드만 편리하게 변경하는데 도움이 됩니다.

## 장점

많은 상태를 포함하지만 후크를 사용하여 구현된 구성 요소의 상태로 작업하는 편리함. 많은 상용구 코드를 제거할 수 있습니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useSetState } from 'react-hooks-kit';

const Component = () => {
  const { state, setState } = useSetState({ type: 'text', data: 'some text' });

  // 변경 전 상태
  console.log(state); // { type: 'text', data: 'some text' }

  // 버튼 구성 요소
  <button onClick={() => setState({ data: 'some updated text' })}>데이터 업데이트</button>

  // 변경 후 상태
  console.log(state); // { type: 'text', data: 'some updated text' }
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| state | T, unknown | 구성 요소의 상태를 반환합니다. |
| setState | () => void | 새로운 상태를 설정하는 함수입니다. |
