---
sidebar_position: 1
---

# useModalState

## 需要什么

您可以使用它更快、更灵活地管理模态的状态。 我们自己的和现成的库。

## 好处

当我们编写模态时，会创建很多样板代码，例如，要创建使用模态窗口的状态，我们需要编写如下内容：

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // 按钮组件
  <Button onClick={onOpen}>打开模态窗口</Button>

  // 模态窗口组件
  <Modal isOpen={isOpen} onClose={onClose}>
    // 组件代码...
  </Modal>
};
```

从上面的示例中，您可以看到管理单个状态需要编写多少。 通过使用 **useModalState**，您无需在组件内编写额外的代码或创建额外的状态。

## 如何开始使用

为了开始使用这个钩子，你需要将它导入到你的项目中：

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // 按钮组件
  <Button onClick={onOpen}>打开模态窗口</Button>

   // 模态窗口组件
  <Modal isOpen={isOpen} onClose={onClose}>
   // 组件代码...
  </Modal>
};
```

您还可以设置模态窗口的初始状态：

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // 按钮组件
  <Button onClick={onOpen}>打开模态窗口</Button>

   // 模态窗口组件
  <Modal isOpen={isOpen} onClose={onClose}>
   // 组件代码...
  </Modal>
};
```

这将默认打开它。

以下函数可用于处理模态窗口的状态：

## 选项

| 姓名 | 类型 | 描述 |
| :---: | :---: | :---: |
| isOpen | boolean | 返回模态窗口的打开状态。 |
| onOpen | () => void | 用于打开模态窗口的函数。 |
| onClose | () => void | 关闭模态窗口的函数。 |
| onToggle | () => void | 将模态窗口的状态切换到相反的状态。 |
