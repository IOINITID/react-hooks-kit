---
sidebar_position: 1
---

# useRenderCount

## 무엇을 위해 필요합니까

이 후크를 사용하면 새 구성 요소를 개발하고, 렌더링을 추적하고, 프로세스를 최적화하는 데 도움이 될 수 있습니다. 이미 작성된 내용을 개선하기 위해서도 마찬가지입니다.

## 장점

렌더링 수를 빠르게 볼 수 있도록 제작되었습니다. [**Profiler**](https://ru.reactjs.org/docs/profiler.html)와 같은 도구는 작업하는 데 시간과 기술이 조금 더 필요하지만 완전한 그림을 제공합니다.

구성 요소의 성능을 빠르게 확인해야 하는 경우 이것이 도움이 될 수 있습니다. 그렇지 않으면 [**Profiler**](https://reactjs.org/docs/profiler.html), [**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) 및 기타.

## 사용을 시작하는 방법

이 후크를 사용하려면 프로젝트로 가져와야 합니다.

그런 다음 **renderCount** 변수를 사용하여 콘솔에 출력할 수 있습니다.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // 구성 요소 코드...
};
```

기본적으로 **useRenderCount**는 **renderCount** 변수의 렌더링 수를 반환합니다.

보다 자세한 정보와 개발 또는 디버깅의 용이성을 위해 매개변수를 전달하는 옵션이 있습니다.

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // 구성 요소 코드...
};
```

이 경우 **useRenderCount**는 구성 요소와 해당 렌더링 수를 나타내는 문자열을 반환합니다. 이것은 성능 문제를 디버깅하기 위한 더 나은 보기입니다.
