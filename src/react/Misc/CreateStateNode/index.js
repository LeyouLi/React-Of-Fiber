import { createDomElement } from "../../DOM";

const createStateNode = fiber => {
  // 创建普通节点 Dom 对象
  if (fiber.tag === 'host_component') {
    return createDomElement(fiber);
  }
}

export default createStateNode;