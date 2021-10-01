---
sidebar_position: 2
---

# useRemount

## 何のために必要ですか

コンポーネントを手動で再マウントする必要がある場合。 これは、コンポーネントの状態に関係なく、コンポーネントのデータを更新する必要がある場合に役立ちます。

## 利点

この機能を実装するために、Reactの基本機能が使用されます。これは、すべてのバージョンおよびReactで作成されたすべてのアプリケーションで動作することが保証されています。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useRemount } from 'react-hooks-kit';

const Component = () => {
  const {key, onRemount} = useRemount();

  // コンポーネントを再マウントするためのボタン
  <Button onClick={onRemount}>コンポーネントを再マウントします</Button>
  
  // キープロパティに追加する必要があります
  <ComponentToRemount key={key} />
};
```

ボタンをクリックすると、**ComponentToRemount**が再マウントされます。

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| key | number | キーの初期状態を返します。 |
| onRemount | () => void | キーの状態を変更する機能。 |
