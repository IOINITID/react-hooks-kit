---
sidebar_position: 1
---

# useFetch

## 需要什么

该钩子用于通过 API 发送请求和接收数据。 它提供了更好的数据检索、加载状态和可能的错误。

## 好处

这个钩子是使用 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 实现的，这允许我们不使用像 [Axios](https://axios-http.com) 和其他库。 它还有助于摆脱处理请求状态的样板代码。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

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

**options** 参数是可选的。

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

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| loading | boolean | 返回数据加载的状态。 |
| error | boolean | 返回错误状态。 |
| data | T, undefined | 返回请求数据。 |
