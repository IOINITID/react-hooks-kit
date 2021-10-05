---
sidebar_position: 1
---

# useInterval

## 何のために必要ですか

特定の間隔または特定の回数でコードの実行を繰り返す必要がある場合は、このフックが役立つ場合があります。

## 利点

フックは非常に使いやすく、実行する関数を渡すだけでよく、追加のパラメーターを指定することもできます。 また、タイマーをクリアするためのメソッドも実装しています。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useInterval } from 'react-hooks-kit';

const Component = () => {
   useInterval(() => console.log('Hello!'), 5000, 3); // Hello!
   // コードは5秒間隔で3回実行されます
 
   // コンポーネントコード...
};
```

**stop**パラメーターはオプションです。

```jsx
const Component = () => {
  useInterval(() => console.log('Hello!'), 5000); // Hello!
   // コードは5秒間隔で実行されます
 
   // コンポーネントコード...
};
```

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| callback | () => void | 呼び出す関数。 |
| interval | number | 関数呼び出しを繰り返す間隔。 |
| stop | number, undefined | 繰り返しの数。 |
