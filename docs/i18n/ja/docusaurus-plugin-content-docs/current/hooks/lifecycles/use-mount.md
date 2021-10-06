---
sidebar_position: 4
---

# useMount

## 何のために必要ですか

このフックを使用すると、コンポーネントがマウントされたときにコードを実行できます。

## 利点

コンポーネントのマウント状態を簡単に使用して、その時点でコードを実行できます。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useMount } from 'react-hooks-kit';

const Component = () => {
  useMount(() => console.log('Hello!')); // Hello!

  // コンポーネントがマウントされると、コンソールにメッセージが表示されます
};
```

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| callback | () => void | 実行する関数。 |
