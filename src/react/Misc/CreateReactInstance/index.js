export const createReactInstance = fiber => {
  let instance = null;
  if (fiber.tag === 'class_component') {
    return new fiber.type(fiber.props); // 返回类组件的实例对象
  } else {
    instance = fiber.type; // 返回函数组件的实例对象
  }

  return instance;
}