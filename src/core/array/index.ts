// 数组乱序
const arrScrambling = (arr: Array<any>): Array<any> => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex: number = Math.round(Math.random() * (arr.length - 1 - i)) + i
    ;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
}

// 数组扁平化
const flatten = (arr: Array<any>): any => {
  let result: Array<any> = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// 数组中获取随机数
const sample = (arr: Array<any>): any => arr[Math.floor(Math.random() * arr.length)]

export { arrScrambling, flatten, sample }
