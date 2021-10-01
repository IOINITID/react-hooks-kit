---
sidebar_position: 2
---

# useToggle

## 무엇을 위해 필요합니까

이 후크를 사용하면 요소를 전환하거나 상호 작용하기 위한 두 가지 상태를 쉽게 관리할 수 있습니다.

## 장점

이 후크를 사용하면 프로젝트에서 불필요한 상용구 코드를 생성하지 않습니다. 또한 구성 요소 내부에 추가 상태를 생성하지 마십시오.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // 스위치 구성 요소
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

스위치의 초기 상태를 설정할 수도 있습니다.

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // 스위치 구성 요소
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

이렇게 하면 기본적으로 스위치가 켜집니다.

스위치 상태 작업에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| isEnabled | boolean | 스위치의 켜짐 상태를 반환합니다. |
| onToggle | () => void | 상태를 반대로 전환합니다. |
