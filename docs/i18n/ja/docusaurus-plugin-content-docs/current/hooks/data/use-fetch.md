---
sidebar_position: 1
---

# useFetch

## 何のために必要ですか

このフックは、APIを介してリクエストを送信およびデータを受信するためのものです。 これにより、データの取得、読み込みステータス、および発生する可能性のあるエラーが改善されます。

## 利点

このフックは、[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)を使用して実装されました。これにより、[Axios](https//axios-http.com)およびその他のライブラリ。 また、リクエストの状態を処理するボイラープレートコードを取り除くのにも役立ちます。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

**options**パラメーターはオプションです。

```jsx
import React from 'react';
import { useFetch } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, data } = useFetch('https://api.com/todos/1');

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      {data.map((value) => {
        return <div key={value.id}>{value.todo}</div>;
      })}
    </div>
  );
};
```

以下の機能が操作に使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| loading | boolean | データの読み込み状態を返します。 |
| error | boolean | エラーステータスを返します。 |
| data | T, undefined | リクエストデータを返します。 |
