// 阻止冒泡事件
const stopPropagation = (e) => {
  e = e || window.event
  if (e.stopPropagation) {
    // W3C阻止冒泡方法
    e.stopPropagation()
  } else {
    e.cancelBubble = true // IE阻止冒泡方法
  }
}

// 数据类判断
const getType = (value) => {
  if (value === null) {
    return value + ''
  }
  // 判断数据是引用类型的情况
  if (typeof value === 'object') {
    const valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(' ')[1].split('')
    type.pop()
    return type.join('').toLowerCase()
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value
  }
}

// 对象深拷贝
const deepClone = (obj, hash = new WeakMap()) => {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date) {
    return new Date(obj)
  }
  //正则对象直接返回一个新的正则对象
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  //如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  // 获取对象所有自身属性的描述
  const allDesc = Object.getOwnPropertyDescriptors(obj)
  // 遍历传入参数所有键的特性
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

  hash.set(obj, cloneObj)
  for (const key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      cloneObj[key] = deepClone(obj[key], hash)
    } else {
      cloneObj[key] = obj[key]
    }
  }
  return cloneObj
}

export { stopPropagation, getType, deepClone }
