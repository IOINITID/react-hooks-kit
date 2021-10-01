---
sidebar_position: 1
---

# useModalState

## 何のために必要ですか

モーダルの状態をより速く、より柔軟に管理すると便利です。 独自のライブラリと既製のライブラリの両方。

## 利点

モーダルを作成すると、多くの定型コードが生成されます。たとえば、モーダルウィンドウを操作するための状態を作成するには、次のように作成する必要があります。

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // ボタンコンポーネント
  <Button onClick={onOpen}>モーダルウィンドウを開く</Button>

  // モーダルウィンドウコンポーネント
  <Modal isOpen={isOpen} onClose={onClose}>
    // コンポーネントコード...
  </Modal>
};
```

上記の例から、単一の状態を管理するためにどれだけの量を書き込む必要があるかがわかります。 **useModalState**を使用することで、コンポーネント内に追加のコードを記述したり、追加の状態を作成したりする必要はありません。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // ボタンコンポーネント
  <Button onClick={onOpen}>モーダルウィンドウを開く</Button>

   // モーダルウィンドウコンポーネント
  <Modal isOpen={isOpen} onClose={onClose}>
   // コンポーネントコード...
  </Modal>
};
```

モーダルウィンドウの初期状態を設定することもできます。

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // ボタンコンポーネント
  <Button onClick={onOpen}>モーダルウィンドウを開く</Button>

   // モーダルウィンドウコンポーネント
  <Modal isOpen={isOpen} onClose={onClose}>
   // コンポーネントコード...
  </Modal>
};
```

これにより、デフォルトで開きます。

モーダルウィンドウの状態を操作するには、次の関数を使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| isOpen | boolean | モーダルウィンドウの開いた状態を返します。 |
| onOpen | () => void | モーダルウィンドウを開くための関数。 |
| onClose | () => void | モーダルウィンドウを閉じる関数。 |
| onToggle | () => void | モーダルウィンドウの状態を反対に切り替えます。 |
