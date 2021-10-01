---
sidebar_position: 2
---

# useToggle

## 需要什麼

這個鉤子允許你輕鬆管理兩個狀態以切換或與元素交互。

## 好處

使用這個鉤子，你不會在你的項目中創建不必要的樣板代碼。 另外，不要在組件內創建額外的狀態。

## 如何開始使用

為了開始使用這個鉤子，你需要將它導入到你的項目中：

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // 開關元件
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

您還可以設置開關的初始狀態：

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // 開關元件
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

這將默認打開開關。

以下函數可用於處理開關狀態：

## 選項

| 姓名 | 類型 | 描述 |
| :---: | :---: | :---: |
| isEnabled | boolean | 返回開關的開啟狀態。 |
| onToggle | () => void | 將狀態切換到相反的狀態。 |
