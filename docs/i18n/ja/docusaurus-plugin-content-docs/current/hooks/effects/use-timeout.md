---
sidebar_position: 2
---

# useTimeout

## 何のために必要ですか

一定時間後にコードを実行する必要がある場合は、このフックが便利です。

## 利点

このフックは、特定の時間が経過した後に関数を呼び出すためのより便利な方法を使用するのに役立ちます。 また、タイマーをクリアするためのメソッドも実装しています。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useTimeout } from 'react-hooks-kit';

const Component = () => {
   useTimeout(() => console.log('Hello!'), 5000); // Hello!
   // コードは5秒で実行されます
 
   // コンポーネントコード...
};
```

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| callback | () => void | 呼び出す関数。 |
| timeout | number | 関数実行のタイムアウト。 |
