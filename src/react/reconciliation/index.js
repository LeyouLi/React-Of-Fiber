/** 
 * 核心Fiber算法
 * 2021-07-06 21:40
 */
import { updataNodeElement } from '../DOM';
import { createTaskQueue, arrified, createStateNode, getTag, getRoot } from "../Misc";

const taskQueue = createTaskQueue();
let subTask = null; // 需要执行的任务
let pendingCommit  = null; // 等待被提交的Fiber[]

// 将fiber[] 转换成真实的 DOM 对象
const commitAllWork = fiber => {
  // 循环 effets 数组 构建 DOM 节点树
  fiber.effects.forEach(item => {
    if (item.tag === 'class_component') {
      item.stateNode.__fiber = item;
    }

    if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === 'update') {
      // 更新
      if (item.type === item.alternate.type) {
        // 节点相同
        updataNodeElement(item.stateNode, item, item.alternate);
      } else {
        // 节点不同
        item.parent.stateNode.replaceChild(
          item.stateNode, item.alternate.stateNode
        );
      }
    } else if (item.effectTag === 'placement') {
      // 当前要追加的子节点
      let fiber = item;
      // 当前要追加的子节点的父级
      let parentFiber = item.parent;
      // 找到普通节点父级，排除组件父级
      // 因为组件父级不能直接追加真实的DOM节点
      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent;
      }
      //如果子节点是普通节点，找到父级，将子节点追加到父级中
      if (fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode);
      }
    }
  });
  // 备份旧的 fiber 对象
  fiber.stateNode.__rootFiberContainer = fiber;
}

// 获取任务队列中第一个（小）任务
const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop();

  if(task.from === 'class_component') {
    const root = getRoot(task.instance);
    task.instance.__fiber.partialState = task.partialState;
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: 'host_root',
      effects: [],
      child: null,
      alternate: root,
    };
  }

  /** 
   * 返回最外层节点的 fiber 对象
   */
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer,
  }
}

// 构建 fiber 对象
const reconcileChildren = (fiber, children) => {
  /**
   * children 可以能为对象也可能为数组
   * 当为对象时需要转成数组返回
  */
  const arrifiedChildren = arrified(children);
  
  let index = 0; // 循环 children 使用的索引
  let numberOfElements = arrifiedChildren.length; // children 数组中元素的个数
  let element = null; // 循环过程中的循环项，即子节点的 virtualDOM 对象
  let newFiber = null; // 子级 fiber 对象
  let prevFiber = null; // 上一个兄弟对象
  let alternate = null;

  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child; // 备份 fiber 节点
  }

  while (index < numberOfElements || alternate) {
    element = arrifiedChildren[index]; // 当前节点的 virtualDOM 对象
    if(!element && alternate) {
      // 删除操作
      alternate.effectTag = 'delete';
      fiber.effects.push(alternate);
    }
    if(element && alternate) {
      // 执行更新操作
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: 'update',
        parent: fiber,
        alternate,
      }

      if (element.type === alternate.type) {
        // 类型相同的节点，旧节点直接赋值给新节点
        newFiber.stateNode = alternate.stateNode;
      } else {
        // 类型不相同的节点，创建新的节点，为fiber节点添加节点 DOM 对象或组件实例对象
        newFiber.stateNode = createStateNode(newFiber);
      }
      
    } else if (element && !alternate) {
      // 执行新增渲染操作
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: 'placement',
        parent: fiber,
      }
      // 为fiber节点添加节点 DOM 对象或组件实例对象
      newFiber.stateNode = createStateNode(newFiber);
    }

    if (index == 0) {
      // 设置根结点的第一个子节点
      fiber.child = newFiber;
    } else if (element) {
      // 设置子结点的其他兄弟节点
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling;
    } else {
      alternate = null;
    }
  
    // 保存第一个子节点
    prevFiber = newFiber;
    index++;
  }
}

// 执行任务（会返回新的任务）
const executeTask = fiber => {
  // 构建子级fiber对象
  if (fiber.tag === 'class_component') {
    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = {
        ...fiber.stateNode.state,
        ...fiber.stateNode.__fiber.partialState,
      }
    }
    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  }
  
  // 构建左子树中的子级fiber对象
  // 如果子级存在则返回子级，并将这个子级作为父级传入构建方法，构建这个父级（传入的子级）下的子级
  if (fiber.child) {
    return fiber.child;
  }

  // 如果存在同级 返回同级 构建同级的子级
  // 如果同级不存在 返回到父级 看父级是否有同级
  let currentExecutelyFiber = fiber;
  while (currentExecutelyFiber.parent) {
    // 合并所有的 effects
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(currentExecutelyFiber.effects.concat([currentExecutelyFiber]));
    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }
    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber;
} 

// 循环执行的任务
const workLoop = (deadline) => {
  // 任务不存在则获取任务队列中的任务
  if (!subTask) {
    subTask = getFirstTask();
  }

  // 任务存在，并且浏览器存在空闲时间
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}

// 浏览器空闲时执行的任务
const performTask = deadline => {
  // 执行任务
  workLoop(deadline);
  // 判断是否还有任务 || 任务队列中是否还有任务未执行完
  if (subTask || !taskQueue.isEmpty()) {
    // 浏览器空闲时继续执行任务
    requestIdleCallback(performTask);
  }
}

export const render = (element, dom) => {
  /**
   * 1. 向任务队列中添加任务  （任务：通过virtualDOM 构建 Fiber 对象）
   * 2. 指定浏览器空闲时执行任务
   */
   taskQueue.push({
     dom,
     props: { children: element }
   });
   requestIdleCallback(performTask);
}

export const scheduleUpdate = (instance, partialState) => {
  taskQueue.push({
    from: 'class_component',
    instance,
    partialState,
  });

  requestIdleCallback(performTask);
}