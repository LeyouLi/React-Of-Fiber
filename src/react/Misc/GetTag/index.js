import { Component } from "../../Component";

const getTag = virtualDOM => {
  // 校验是否是普通的节点
  if (typeof virtualDOM.type === 'string') {
    return 'host_component';
  } else if (Object.getPrototypeOf(virtualDOM.type) === Component) {  // 校验是否是类组件
    return 'class_component';
  } else {
    return 'function_component';
  }
}

export default getTag;