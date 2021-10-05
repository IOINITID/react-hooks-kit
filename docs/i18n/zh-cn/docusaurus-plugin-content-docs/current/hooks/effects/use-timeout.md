---
sidebar_position: 2
---

# useTimeout

## 需要什么

如果你需要在一定时间后执行代码，那么这个钩子就派上用场了。

## 好处

这个钩子有助于使用更方便的方式在一定时间后调用函数。 它还实现了清除定时器的方法。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // 代码将在 5 秒内执行
 
   // 组件代码...
};
```

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| callback | () => void | 要调用的函数。 |
| timeout | number | 函数执行超时。 |
