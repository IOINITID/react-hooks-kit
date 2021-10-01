---
sidebar_position: 2
---

# useToggle

## 何のために必要ですか

このフックを使用すると、要素を切り替えたり操作したりするための2つの状態を簡単に管理できます。

## 利点

このフックを使用すると、プロジェクトに不要なボイラープレートコードを作成することはありません。 また、コンポーネント内に追加の状態を作成しないでください。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnable, onToggle } = useToggle();

   // スイッチコンポーネント
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

スイッチの初期状態を設定することもできます。

```jsx
import React from 'react';
import { useToggle } from 'react-hooks-kit';

const Component = () => {
  const { isEnabled, onToggle } = useToggle({ initialIsEnabled: true });

   // スイッチコンポーネント
  <Switch isEnabled={isEnabled} onClick={onToggle}>
};
```

これにより、デフォルトでスイッチがオンになります。

次の機能は、スイッチの状態を操作するために使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| isEnabled | boolean | スイッチのオン状態を返します。 |
| onToggle | () => void | 状態を反対に切り替えます。 |
