// 生成指定范围随机数
const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

// 数字千分位分隔
const format = (n): string => {
  const num = n.toString()
  const len: number = num.length
  if (len <= 3) {
    return num
  } else {
    const temp = ''
    const remainder = len % 3
    if (remainder > 0) {
      // 不是3的整数倍
      return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
    } else {
      // 3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(',') + temp
    }
  }
}

export { randomNum, format }
