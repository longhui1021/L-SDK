// 存储localStorage
const localStorageSet = (key: string, value: any) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取localStorage
const localStorageGet = (key: string): string | null => {
  if (!key) return null
  return window.localStorage.getItem(key)
}

// 删除localStorage
const localStorageRemove = (key: string) => {
  if (!key) return
  window.localStorage.removeItem(key)
}

export { localStorageSet, localStorageGet, localStorageRemove }
