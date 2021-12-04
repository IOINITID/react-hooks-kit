---
sidebar_position: 2
---

# useGeolocation

## 무엇을 위해 필요합니까

이 후크는 브라우저에서 Geolocation API와 함께 편안하게 작동하도록 설계되었습니다. 위치 데이터를 더 쉽게 얻을 수 있는 방법을 제공합니다.

## 장점

이 후크를 사용하면 많은 양의 상용구 코드를 제거하고 지리적 위치, 이 데이터의 로드 상태 및 발생한 오류에 대한 미리 만들어진 데이터를 얻을 수 있습니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>데이터:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

**options** 매개변수는 선택 사항입니다.

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>데이터:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| loading | boolean | 지리적 위치를 요청할 때 로드 상태를 반환합니다. |
| error | PositionError, undefined | 지리적 위치를 요청할 때 오류 상태를 반환합니다. |
| position | Position, undefined | 지리적 위치 데이터를 반환합니다. |
