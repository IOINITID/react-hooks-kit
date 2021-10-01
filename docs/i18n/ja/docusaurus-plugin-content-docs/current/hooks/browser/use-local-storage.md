---
sidebar_position: 1
---

# useLocalStorage

## 何のために必要ですか

このフックを使用すると、ブラウザAPIを介してローカルストレージを管理できます。 ローカルストレージから値の読み取り、書き込み、削除が可能です。

## 利点

このフックを使用すると、キーでデータを簡単に読み取り、ローカルストレージに新しい値を書き込むことができます。 すべてのデータは文字列としてローカルストレージに保存されるため、このフックにはすでに文字列からのこれらの値の解析が含まれています。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme'});

  // デフォルト値をコンソールに出力します
  console.log(value); // undefined

  // ボタンコンポーネント
  // localStorageに価値を追加します
  <button onClick={() => setValue({ mode: 'light' })}>トピックを追加</button>

  // 新しい値をコンソールに出力します
  console.log(value); // { mode: 'light' }
}
```

ローカルストレージ内のキーの初期状態を設定することもできます。
**initialValue**パラメーターはオプションです。

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // デフォルト値をコンソールに出力します
  console.log(value); // { mode: 'light' }

  // ボタンコンポーネント
  // localStorageに価値を追加します
  <button onClick={() => setValue({ mode: 'dark' })}>テーマを変更する</button>

  // 新しい値をコンソールに出力します
  console.log(value); // { mode: 'dark' }
}
```

ローカルストレージから値を削除することも可能です：

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // デフォルト値をコンソールに出力します
  console.log(value); // { mode: 'light' }

  // ボタンコンポーネント
  // キーによってlocalStorageから値を削除します
  <button onClick={() => removeValue('theme')}>トピックを削除する</button>

  // 新しい値をコンソールに出力します
  console.log(value); // undefined
}
```

ブラウザAPIと同様に、ローカルストレージを完全にクリアする機能が追加されました。

```jsx
import React from 'react';
import { useLocalStorage } from 'react-hooks-kit';

const Component = () => {
  const { value, setValue, removeValue, clearAllValues } = useLocalStorage({key: 'theme', initialValue: { mode: 'light' }});

  // デフォルト値をコンソールに出力します
  console.log(value); // { mode: 'light' }

  // ボタンコンポーネント
  // localStorageからすべての値をクリアします
  <button onClick={() => clearAllValues()}>ローカルストレージをクリアする</button>

  // 新しい値をコンソールに出力します
  console.log(value); // undefined
}
```

ローカルストレージを操作するには、次の関数を使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| value | T, undefined | キーごとにローカルストレージの値を返します。 |
| setValue | T, unknown, undefined | ローカルストレージの値を設定します。 |
| removeValue | string | キーによってローカルストレージから値を削除します。 |
| clearAllValues | () => void | すべてのローカルストレージ値をクリアします。 |
