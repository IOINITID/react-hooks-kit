---
sidebar_position: 2
---

# useRemount

## 需要什么

如果您需要手动重新安装您的组件。 这在您需要更新组件的数据时非常有用，而不管其状态如何。

## 好处

为了实现这个特性，使用了 React 的基本特性，它保证在所有版本和在 React 上开发的任何应用程序中都能工作。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // 用于重新安装组件的按钮
  <Button onClick={onRemount}>重新安装组件</Button>
  
  // 您需要添加到 key 属性
  <ComponentToRemount key={key} />
};
```

当按钮被点击时，**ComponentToRemount** 组件将被重新挂载。

以下功能可用于操作：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| key | number | 返回键的初始状态。 |
| onRemount | () => void | 改变键状态的功能。 |
