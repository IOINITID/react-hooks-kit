---
sidebar_position: 3
---

# useSetState

## 何のために必要ですか

このフックは、ReactクラスコンポーネントのsetStateメソッドに対応する機能を提供します。 多くのフィールドを持つオブジェクトを状態として使用し、必要なフィールドのみを便利な方法で変更すると便利です。

## 利点

多くの状態を含むが、フックを使用して実装されたコンポーネントの状態を操作する便利さ。 多くの定型コードを取り除くことができます。

## 使い始める方法

このフックの使用を開始するには、プロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useSetState } from 'react-hooks-kit';

const Component = () => {
  const { state, setState } = useSetState({ type: 'text', data: 'some text' });

  // 変更前の状態
  console.log(state); // { type: 'text', data: 'some text' }

  // ボタンコンポーネント
  <button onClick={() => setState({ data: 'some updated text' })}>データを更新する</button>

  // 変更後の状態
  console.log(state); // { type: 'text', data: 'some updated text' }
};
```

以下の機能を使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| state | T, unknown | コンポーネントの状態を返します。 |
| setState | () => void | 新しい状態を設定する関数。 |
