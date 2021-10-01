---
sidebar_position: 1
---

# useLocalStorage

## 무엇을 위해 필요합니까

이 후크를 사용하면 브라우저 API를 통해 로컬 스토리지를 관리할 수 있습니다. 로컬 저장소에서 새 값을 읽고, 쓰고, 값을 삭제할 수 있습니다.

## 장점

이 후크를 사용하면 키로 데이터를 편리하게 읽고 새 값을 로컬 저장소에 쓸 수 있습니다. 모든 데이터는 로컬 저장소에 문자열로 저장되므로 이 후크에는 이미 문자열에서 이러한 값의 구문 분석이 포함되어 있습니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // 콘솔에 기본값을 인쇄합니다.
  console.log(value); // undefined

  // 버튼 구성 요소
  // localStorage에 가치를 더합니다.
  <button onClick={() => setValue({ mode: 'light' })}>주제 추가</button>

  // 새 값을 콘솔에 인쇄합니다.
  console.log(value); // { mode: 'light' }
}
```

로컬 저장소에 있는 키의 초기 상태를 설정할 수도 있습니다.
**initialValue** 매개변수는 선택 사항입니다.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 콘솔에 기본값을 인쇄합니다.
  console.log(value); // { mode: 'light' }

  // 버튼 구성 요소
  // localStorage에 가치를 더합니다.
  <button onClick={() => setValue({ mode: 'dark' })}>테마 변경</button>

  // 새 값을 콘솔에 인쇄합니다.
  console.log(value); // { mode: 'dark' }
}
```

로컬 저장소에서 값을 삭제할 수도 있습니다.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 콘솔에 기본값을 인쇄합니다.
  console.log(value); // { mode: 'light' }

  // 버튼 구성 요소
  // 키로 localStorage에서 값을 제거합니다.
  <button onClick={() => removeValue('theme')}>주제 삭제</button>

  // 새 값을 콘솔에 인쇄합니다.
  console.log(value); // undefined
}
```

브라우저 API에서와 같이 로컬 저장소를 완전히 지우는 기능이 추가되었습니다.

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 콘솔에 기본값을 인쇄합니다.
  console.log(value); // { mode: 'light' }

  // 버튼 구성 요소
  // localStorage에서 모든 값을 지웁니다.
  <button onClick={() => clearAllValues()}>로컬 저장소 지우기</button>

  // 새 값을 콘솔에 인쇄합니다.
  console.log(value); // undefined
}
```

로컬 저장소 작업에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| value | T, undefined | 키로 로컬 저장소의 값을 반환합니다. |
| setValue | T, unknown, undefined | 로컬 스토리지의 값을 설정합니다. |
| removeValue | string | 키로 로컬 저장소에서 값을 제거합니다. |
| clearAllValues | () => void | 모든 로컬 스토리지 값을 지웁니다. |
