---
sidebar_position: 1
---

# useRenderCount

## 需要什么

使用此钩子可以帮助您开发新组件、跟踪渲染并在此过程中进行优化。 所以也要改进已经写的东西。

## 好处

它用于快速查看渲染数量。 像 [**Profiler**](https://ru.reactjs.org/docs/profiler.html) 这样的工具需要更多的时间和技能来使用它，但要提供完整的图片。

如果您需要快速检查组件的性能，那么这可以帮助您。 否则，建议使用更高级的性能测试工具，例如[**Profiler**](https://reactjs.org/docs/profiler.html)、[**WDYR**](https://www.npmjs.com/package/@welldone-software/why-did-you-render) 等。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

之后，您可以使用 **renderCount** 变量输出到控制台。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount();

  console.log(renderCount); // 1
  
  // 组件代码...
};
```

默认情况下，**useRenderCount** 返回 **renderCount** 变量中的渲染次数。

有用于传递参数的选项，以获取更详细的信息以及易于开发或调试。

```jsx
import React from 'react';
import { useRenderCount } from 'react-hooks-kit';

const Component = () => {
  const { renderCount } = useRenderCount('Component');

  console.log(renderCount); // (Component) renders count: 1
  
  // 组件代码...
};
```

在这种情况下，**useRenderCount** 将返回一个字符串，指示组件及其渲染次数。 这是调试性能问题的更好视图。
