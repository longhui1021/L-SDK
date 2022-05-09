// 存储sessionStorage
const sessionStorageSet = (key: string, value: any) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取sessionStorage
const sessionStorageGet = (key: string): string | null => {
  if (!key) return null
  return window.sessionStorage.getItem(key)
}

// 删除sessionStorage
const sessionStorageRemove = (key: string) => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

export { sessionStorageSet, sessionStorageGet, sessionStorageRemove }
