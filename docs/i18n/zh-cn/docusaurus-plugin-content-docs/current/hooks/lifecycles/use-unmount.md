---
sidebar_position: 5
---

# useUnmount

## 需要什么

此挂钩允许您在卸载组件时执行代码。

## 好处

允许您轻松使用组件的卸载状态并执行当时的代码。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // 卸载组件时，控制台会显示一条消息
};
```

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| callback | () => void | 要执行的函数。 |
