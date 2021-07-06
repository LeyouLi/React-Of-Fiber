// 创建任务队列
const createTaskQueue = () => {
  const taskQueue = []; // 任务队列
  return {
    /**
     * 向任务队列中添加任务
     */
    push: item => taskQueue.push(item),
    /**
     * 从任务队列中获取任务
     */
    pop: () => taskQueue.shift(),
    /**
     * 判断任务队列中是否还有任务
     */
    isEmpty: () => taskQueue.length === 0,
  }
}

export default createTaskQueue;