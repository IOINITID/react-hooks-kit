---
sidebar_position: 2
---

# useRemount

## 무엇을 위해 필요합니까

구성 요소를 수동으로 다시 탑재해야 하는 경우. 이는 상태에 관계없이 구성 요소의 데이터를 업데이트해야 할 때 유용할 수 있습니다.

## 장점

이 기능을 구현하기 위해 React의 기본 기능이 사용되며, 이는 모든 버전과 React로 만든 모든 애플리케이션에서 작동하도록 보장됩니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // 구성 요소를 다시 장착하기 위한 버튼
  <Button onClick={onRemount}>구성 요소 다시 마운트</Button>
  
  // 키 속성에 추가해야 합니다.
  <ComponentToRemount key={key} />
};
```

버튼을 클릭하면 **ComponentToRemount**가 다시 마운트됩니다.

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| key | number | 키의 초기 상태를 반환합니다. |
| onRemount | () => void | 키의 상태를 변경하는 기능입니다. |
