import { createDomElement } from "../../DOM";
import { createReactInstance } from '../CreateReactInstance';

const createStateNode = fiber => {
  // 创建普通节点 Dom 对象
  if (fiber.tag === 'host_component') {
    return createDomElement(fiber);
  } else {
    return createReactInstance(fiber);
  }
}

export default createStateNode;