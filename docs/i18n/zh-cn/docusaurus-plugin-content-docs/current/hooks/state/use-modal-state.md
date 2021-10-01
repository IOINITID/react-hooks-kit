---
sidebar_position: 1
---

# useModalState

## 需要什麼

更快、更靈活地管理模態狀態對您很有用。 我們自己的和現成的庫。

## 好處

當我們編寫模態時，會生成很多樣板代碼，例如，要創建使用模態窗口的狀態，我們需要編寫如下內容：

```jsx
import React from 'react';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // 按鈕組件
  <Button onClick={onOpen}>打開模態窗口</Button>

  // 模態窗口組件
  <Modal isOpen={isOpen} onClose={onClose}>
    // 組件代碼...
  </Modal>
};
```

從上面的示例中，您可以看到管理單個狀態需要寫入多少。 通過使用 **useModalState**，您無需在組件內編寫額外的代碼或創建額外的狀態。

## 如何開始使用

為了開始使用這個鉤子，你需要將它導入到你的項目中：

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState();

   // 按鈕組件
  <Button onClick={onOpen}>打開模態窗口</Button>

   // 模態窗口組件
  <Modal isOpen={isOpen} onClose={onClose}>
   // 組件代碼...
  </Modal>
};
```

您還可以設置模態窗口的初始狀態：

```jsx
import React from 'react';
import { useModalState } from 'react-hooks-kit';

const Component = () => {
  const { isOpen, onOpen, onClose, onToggle } = useModalState({ initialIsOpen: true });

   // 按鈕組件
  <Button onClick={onOpen}>打開模態窗口</Button>

   // 模態窗口組件
  <Modal isOpen={isOpen} onClose={onClose}>
   // 組件代碼...
  </Modal>
};
```

這將默認打開它。

以下函數可用於處理模態窗口的狀態：

## 選項

| 姓名 | 類型 | 描述 |
| :---: | :---: | :---: |
| isOpen | boolean | 返回模態窗口的打開狀態。 |
| onOpen | () => void | 用於打開模態窗口的函數。 |
| onClose | () => void | 關閉模態窗口的函數。 |
| onToggle | () => void | 將模態窗口的狀態切換到相反的狀態。 |
