# React-Of-Fiber
## 拉钩课程第四趴
### 手撸 React 之 Fiber

---
### Fiber 架构渲染 DOM 过程

DOM 初始渲染：  virtualDOM -> Fiber -> Fiber[] -> DOM
DOM 更新操作：  newFiber vs oldFiber -> Fiber[] -> DOM

---
## 单个 Fiber 对象包含的属性

-  type           节点类型（元素，文本，组件）（具体的类型）
-  props          节点属性
-  stateNode      节点 DOM 对象 ｜ 组件实例对象
-  tag            节点标记（对具体类型的分类 hostRoot || hostComponent || classComponent || functionComponent）
-  effects        数组，存储需要更改的 fiber 对象
-  effectsTag     当前 Fiber 要被执行的操作（新增，删除，修改）
-  parent         当前 Fiber 的父级 Fiber
-  child          当前 Fiber 的子级 Fiber
-  sibling        当前 Fiber 的下一个兄弟 Fiber
-  alternate      Fiber 备份 fiber 比对时使用
