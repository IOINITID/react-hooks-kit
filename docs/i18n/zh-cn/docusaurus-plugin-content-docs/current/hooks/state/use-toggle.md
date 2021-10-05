---
sidebar_position: 2
---

# useToggle

## 需要什么

这个钩子允许你轻松管理两个状态以切换或与元素交互。

## 好处

使用这个钩子，你不会在你的项目中创建不必要的样板代码。 另外，不要在组件内创建额外的状态。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // 开关组件
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

您还可以设置开关的初始状态：

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // 开关组件
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

这将默认打开开关。

以下函数可用于处理开关状态：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| isEnabled | boolean | 返回开关的开启状态。 |
| onToggle | () => void | 将状态切换到相反的状态。 |
