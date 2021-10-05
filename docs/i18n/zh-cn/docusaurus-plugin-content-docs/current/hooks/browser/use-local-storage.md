---
sidebar_position: 1
---

# useLocalStorage

## 需要什么

这个钩子允许你通过浏览器 API 管理本地存储。 可以从本地存储中读取、写入新值和删除值。

## 好处

使用这个钩子，你可以方便的按键读取数据并将新值写入本地存储。 由于所有数据都以字符串的形式存储在本地存储中，所以这个钩子已经包含了从字符串中解析出这些值的过程。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // 将默认值打印到控制台
  console.log(value); // undefined

  // 按钮组件
  // 为 localStorage 增加价值
  <button onClick={() => setValue({ mode: 'light' })}>添加主题</button>

  // 将新值打印到控制台
  console.log(value); // { mode: 'light' }
}
```

您还可以为本地存储中的密钥设置初始状态：
**initialValue** 参数是可选的。

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 将默认值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按钮组件
  // 为 localStorage 增加价值
  <button onClick={() => setValue({ mode: 'dark' })}>改变主题</button>

  // 将新值打印到控制台
  console.log(value); // { mode: 'dark' }
}
```

也可以从本地存储中删除值：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 将默认值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按钮组件
  // 按键从 localStorage 中删除值
  <button onClick={() => removeValue('theme')}>删除主题</button>

  // 将新值打印到控制台
  console.log(value); // undefined
}
```

与浏览器 API 一样，添加了完全清除本地存储的功能：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 将默认值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按钮组件
  // 清除localStorage中的所有值
  <button onClick={() => clearAllValues()}>清除本地存储</button>

  // 将新值打印到控制台
  console.log(value); // undefined
}
```

以下函数可用于处理本地存储：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| value | T, undefined | 按键返回本地存储的值。 |
| setValue | T, unknown, undefined | 设置本地存储的值。 |
| removeValue | string | 通过键从本地存储中删除一个值。 |
| clearAllValues | () => void | 清除所有本地存储值。 |
