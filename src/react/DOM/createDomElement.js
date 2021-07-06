import updataNodeElement from './updataNodeElement';

export default function createDomElement (virtualDOM) {
  // 渲染普通 virtualDOM 对象为真实DOM
  let newElement = null;
  if (virtualDOM.type == 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type);
    // 为元素添加属性
    updataNodeElement(newElement, virtualDOM);
  }

  return newElement;
}