// 设置cookie
const setCookie = (key: string, value: string, expire: number): boolean => {
  try {
    const d = new Date()
    d.setDate(d.getDate() + expire)
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

// 读取cookie
const getCookie = (key: string): string => {
  const cookieStr: string = unescape(document.cookie)
  const arr: Array<string> = cookieStr.split('; ')
  let cookieValue = ''
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}

// 删除cookie
const delCookie = (key: string) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

export { setCookie, getCookie, delCookie }
