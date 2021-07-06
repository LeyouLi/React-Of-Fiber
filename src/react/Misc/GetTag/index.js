const getTag = virtualDOM => {
  // 校验是否是普通的节点
  if (typeof virtualDOM.type === 'string') {
    return 'host_component';
  }
}

export default getTag;