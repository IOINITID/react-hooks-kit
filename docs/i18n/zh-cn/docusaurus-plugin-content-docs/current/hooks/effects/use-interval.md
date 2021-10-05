---
sidebar_position: 1
---

# useInterval

## 需要什么

如果你需要以一定的间隔或一定的次数重复执行代码，那么这个钩子可能对你有用。

## 好处

这个钩子非常好用，只需要传入一个函数就可以执行，还可以指定额外的参数。 它还实现了清除定时器的方法。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // 代码会执行3次，间隔5秒
 
   // 组件代码...
};
```

**stop** 参数是可选的。

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // 代码将每隔 5 秒执行一次
 
   // 组件代码...
};
```

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| callback | () => void | 要调用的函数。 |
| interval | number | 重复函数调用的间隔。 |
| stop | number, undefined | 重复次数。 |
