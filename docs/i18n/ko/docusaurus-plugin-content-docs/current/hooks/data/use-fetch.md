---
sidebar_position: 1
---

# useFetch

## 무엇을 위해 필요합니까

이 후크는 API를 통해 요청을 보내고 데이터를 수신하기 위한 것입니다. 더 나은 데이터 검색, 로드 상태 및 가능한 오류를 제공합니다.

## 장점

이 후크는 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)를 사용하여 구현되므로 [Axios](https://axios-http.com) 및 기타 라이브러리와 같은 타사 종속성이 필요하지 않습니다. 또한 요청 상태를 처리하는 상용구 코드를 제거하는 데 도움이 됩니다.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

**options** 매개변수는 선택 사항입니다.

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

작동에 사용할 수 있는 기능은 다음과 같습니다.

## 옵션

| 이름 | 유형 | 설명 |
| :---: | :---: | :---: |
| loading | boolean | 데이터 로드 상태를 반환합니다. |
| error | boolean | 오류 상태를 반환합니다. |
| data | T, undefined | 요청 데이터를 반환합니다. |
