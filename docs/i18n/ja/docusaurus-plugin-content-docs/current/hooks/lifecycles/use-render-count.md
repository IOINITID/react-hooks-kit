---
sidebar_position: 1
---

# useRenderCount

## 何のために必要ですか

このフックを使用すると、新しいコンポーネントの開発、レンダリングの追跡、およびプロセスの最適化に役立ちます。 だからまた、すでに書かれていることを改善するために。

## 利点

レンダリングの数をすばやく表示するために作成されています。 [**Profiler**](https://ru.reactjs.org/docs/profiler.html)のようなツールを使用するには、もう少し時間とスキルが必要ですが、全体像を把握できます。

コンポーネントのパフォーマンスをすばやく確認する必要がある場合は、これが役立ちます。 それ以外の場合は、[**Profiler**](https://ru.reactjs.org/docs/profiler.html)、[**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render)などのより高度なパフォーマンステストツールを使用することをお勧めします。

## 使い始める方法

このフックの使用を開始するには、フックをプロジェクトにインポートする必要があります。

その後、**renderCount**変数を使用してコンソールに出力できます。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // コンポーネントコード...
};
```

デフォルトでは、**useRenderCount**は**renderCount**変数のレンダリング数を返します。

より詳細な情報と開発またはデバッグの容易さのために、パラメータを渡すためのオプションがあります。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // コンポーネントコード...
};
```

この場合、**useRenderCount**は、コンポーネントとそのレンダリングの数を示す文字列を返します。 これは、パフォーマンスの問題をデバッグするためのより良いビューです。
