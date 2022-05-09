// 生成随机字符串
const randomString = (len: number): string => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
  const strLen = chars.length
  let randomStr = ''
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen))
  }
  return randomStr
}

// 字符串首字母大写
const fistLetterUpper = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// 手机号中间四位变成*
const telFormat = (tel: string): string => {
  tel = String(tel)
  return tel.substr(0, 3) + '****' + tel.substr(7)
}

// 驼峰命名转换成短横线命名
const getKebabCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())
}

// 短横线命名转换成驼峰命名
// 有问题
const getCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (item) => item.toUpperCase())
}

// 全角转换为半角
const toCDB = (str: string): string => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code >= 65281 && code <= 65374) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248)
    } else if (code == 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
}

// 半角转换为全角
const toDBC = (str: string): string => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code >= 33 && code <= 126) {
      result += String.fromCharCode(str.charCodeAt(i) + 65248)
    } else if (code == 32) {
      result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
}

export { randomString, fistLetterUpper, telFormat, getKebabCase, getCamelCase, toCDB, toDBC }
