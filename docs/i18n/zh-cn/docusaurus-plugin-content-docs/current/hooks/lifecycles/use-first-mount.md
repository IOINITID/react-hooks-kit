---
sidebar_position: 3
---

# useFirstMount

## 需要什么

这个钩子允许你确定调用它的组件的渲染是第一个渲染，还是已经发生了新的渲染。 基本上，它对于在组件中执行一次代码很有用，而不管它的进一步渲染如何。

## 好处

这个钩子提供了一个简单的标志来确定组件是否首先被渲染。 无论新组件渲染如何，它都会保留其价值。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useFirstMount } from 'react-hooks-kit';

const Component = () => {
   const { isFirstMount } = useFirstMount();

  console.log(isFirstMount); // true

  // 组件代码...
};
```

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| isFirstMount | boolean | 返回或不返回组件的第一个渲染。 |
