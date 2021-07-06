/** 
 * 核心Fiber算法
 * 2021-07-06 21:40
 */

import { createTaskQueue, arrified, createStateNode, getTag } from "../Misc";

const taskQueue = createTaskQueue();
let subTask = null; // 需要执行的任务
let pendingCommit  = null; // 等待被提交的Fiber[]

// 将fiber[] 转换成真实的 DOM 对象
const commitAllWork = fiber => {
  // 循环 effets 数组 构建 DOM 节点树
  fiber.effects.forEach(item => {
    if (item.effectsTag === 'placement') {
      item.parent.stateNode.appendChild(item.stateNode);
    }
  });
}

// 获取任务队列中第一个（小）任务
const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop();
  /** 
   * 返回最外层节点的 fiber 对象
   */
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  }
}

// 构建 fiber 对象
const reconcileChildren = (fiber, children) => {
  /**
   * children 可以能为对象也可能为数组
   * 当为对象时需要转成数组返回
  */
  const arrifiedChildren = arrified(children);
  
  let index = 0;
  let numberOfElements = arrifiedChildren.length;
  let element = null;
  let newFiber = null;
  let prevFiber = null;

  while (index < numberOfElements) {
    element = arrifiedChildren[index]; // 当前节点的 virtualDOM 对象
    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element),
      effects: [],
      effectsTag: 'placement',
      parent: fiber,
    }

    // 为fiber节点添加节点 DOM 对象或组件实例对象
    newFiber.stateNode = createStateNode(newFiber);

    if (index == 0) {
      // 设置根结点的第一个子节点
      fiber.child = newFiber;
    } else {
      // 设置子结点的其他兄弟节点
      prevFiber.sibling = newFiber;
    }
  
    // 保存第一个子节点
    prevFiber = newFiber;
    index++;
  }
}

// 执行任务（会返回新的任务）
const executeTask = fiber => {
  // 构建子级fiber对象
  reconcileChildren(fiber, fiber.props.children);

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