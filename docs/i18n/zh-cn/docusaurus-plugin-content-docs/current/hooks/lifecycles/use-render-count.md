---
sidebar_position: 1
---

# useRenderCount

## 需要什麼

使用此鉤子可以幫助您開發新組件、跟踪渲染並在此過程中進行優化。 所以也要改進已經寫的東西。

## 好處

它用於快速查看渲染數量。 像 [**Profiler**](https://ru.reactjs.org/docs/profiler.html) 這樣的工具需要更多的時間和技能來使用，但要提供完整的圖片。

如果您需要快速檢查組件的性能，那麼這可以幫助您。 否則，建議使用更高級的性能測試工具，例如[**Profiler**](https://reactjs.org/docs/profiler.html)、[**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) 等。

## 如何開始使用

為了開始使用這個鉤子，你需要將它導入到你的項目中：

之後，您可以使用 **renderCount** 變量輸出到控制台。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // 組件代碼...
};
```

默認情況下，**useRenderCount** 返回 **renderCount** 變量中的渲染次數。

有用於傳遞參數的選項，以獲取更詳細的信息以及易於開發或調試。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // 組件代碼...
};
```

在這種情況下，**useRenderCount** 將返回一個字符串，指示組件及其渲染次數。 這是調試性能問題的更好視圖。
