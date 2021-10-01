---
sidebar_position: 2
---

# useRemount

## 需要什麼

如果您需要手動重新安裝您的組件。 這在您需要更新組件的數據時非常有用，而不管其狀態如何。

## 好處

為了實現這個特性，使用了 React 的基本特性，它保證在所有版本和在 React 上開發的任何應用程序中都可以使用。

## 如何開始使用

為了開始使用這個鉤子，你需要將它導入到你的項目中：

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // 用於重新安裝組件的按鈕
  <Button onClick={onRemount}>重新安裝組件</Button>
  
  // 您需要添加到 key 屬性
  <ComponentToRemount key={key} />
};
```

當按鈕被點擊時，**ComponentToRemount** 將被重新掛載。

以下功能可用於操作：

## 選項

| 姓名 | 類型 | 描述 |
| :---: | :---: | :---: |
| key | number | 返回鍵的初始狀態。 |
| onRemount | () => void | 改變鍵狀態的功能。 |
