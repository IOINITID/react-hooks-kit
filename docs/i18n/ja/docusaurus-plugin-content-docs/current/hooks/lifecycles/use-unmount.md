---
sidebar_position: 5
---

# useUnmount

## 何のために必要ですか

このフックを使用すると、コンポーネントがアンマウントされたときにコードを実行できます。

## 利点

コンポーネントのマウントされていない状態を簡単に使用して、その時点でコードを実行できます。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useUnmount } from 'react-hooks-kit';

const Component = () => {
  useUnmount(() => console.log('Hello!')); // Hello!

  // コンポーネントがマウント解除されると、コンソールにメッセージが表示されます
};
```

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| callback | () => void | 実行する関数。 |
