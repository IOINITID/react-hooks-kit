---
sidebar_position: 2
---

# useGeolocation

## 需要什么

此挂钩旨在与浏览器中的 Geolocation API 轻松配合使用。 它提供了一种更简单的方法来获取位置数据。

## 好处

使用这个钩子可以让你摆脱大量的样板代码，获得关于地理位置的现成数据，这些数据的加载状态，以及已经发生的错误。

## 如何开始使用

要开始使用这个钩子，你需要将它导入到你的项目中：

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
    <h2>数据:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

**options** 参数是可选的。

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
    <h2>数据:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| loading | boolean | 请求地理定位时返回加载状态。 |
| error | PositionError, undefined | 请求地理定位时返回错误状态。 |
| position | Position, undefined | 返回地理位置数据。 |
