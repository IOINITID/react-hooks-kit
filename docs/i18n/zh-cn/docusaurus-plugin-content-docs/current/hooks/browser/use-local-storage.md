---
sidebar_position: 1
---

# useLocalStorage

## 需要什麼

這個鉤子允許你通過瀏覽器 API 管理本地存儲。 可以從本地存儲中讀取、寫入新值和刪除值。

## 好處

使用這個鉤子，你可以方便的按鍵讀取數據並將新值寫入本地存儲。 由於所有數據都以字符串的形式存儲在本地存儲中，所以這個鉤子已經包含了從字符串中解析出這些值的過程。

## 如何開始使用

為了開始使用這個鉤子，你需要將它導入到你的項目中：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // 將默認值打印到控制台
  console.log(value); // undefined

  // 按鈕組件
  // 為 localStorage 增加價值
  <button onClick={() => setValue({ mode: 'light' })}>添加主題</button>

  // 將新值打印到控制台
  console.log(value); // { mode: 'light' }
}
```

您還可以為本地存儲中的密鑰設置初始狀態：
**initialValue** 參數是可選的。

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 將默認值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按鈕組件
  // 為 localStorage 增加價值
  <button onClick={() => setValue({ mode: 'dark' })}>改變主題</button>

  // 將新值打印到控制台
  console.log(value); // { mode: 'dark' }
}
```

也可以從本地存儲中刪除值：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 將默認值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按鈕組件
  // 按鍵從 localStorage 中刪除值
  <button onClick={() => removeValue('theme')}>刪除主題</button>

  // 將新值打印到控制台
  console.log(value); // undefined
}
```

與瀏覽器 API 一樣，添加了完全清除本地存儲的功能：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // 將默認值打印到控制台
  console.log(value); // { mode: 'light' }

  // 按鈕組件
  // 清除localStorage中的所有值
  <button onClick={() => clearAllValues()}>清除本地存儲</button>

  // 將新值打印到控制台
  console.log(value); // undefined
}
```

以下函數可用於處理本地存儲：

## 選項

| 姓名 | 類型 | 描述 |
| :---: | :---: | :---: |
| value | T, undefined | 按鍵返回本地存儲的值。 |
| setValue | T, unknown, undefined | 設置本地存儲的值。 |
| removeValue | string | 通過鍵從本地存儲中刪除一個值。 |
| clearAllValues | () => void | 清除所有本地存儲值。 |
