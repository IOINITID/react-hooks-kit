---
sidebar_position: 2
---

# useGeolocation

## 何のために必要ですか

このフックは、ブラウザーのGeolocationAPIで快適に機能するように設計されています。 位置データを取得する簡単な方法を提供します。

## 利点

このフックを使用すると、大量のボイラープレートコードを取り除き、ジオロケーション、このデータの読み込み状態、および発生したエラーに関する既製のデータを取得できます。

## 使い始める方法

このフックの使用を開始するには、プロジェクトにインポートする必要があります。

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
   const { loading, error, position } = useGeolocation({
     enableHightAccuracy: true
   });

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>データ:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

**options**パラメーターはオプションです。

```jsx
import React from 'react';
import { useGeolocation } from 'react-hooks-kit';

const Component = () => {
  const { loading, error, position } = useGeolocation();

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />
  }

  return <div>
    <h2>データ:</h2>
    <p>{position.coords.latitude}</p>
    <p>{position.coords.longtitude}</p>
  </div>
};
```

以下の機能を使用できます。

## オプション

| 名前 | の種類 | 説明 |
| :---: | :---: | :---: |
| loading | boolean | ジオロケーションを要求するときにロードステータスを返します。 |
| error | PositionError, undefined | ジオロケーションを要求するときにエラーステータスを返します。 |
| position | Position, undefined | ジオロケーションデータを返します。 |
