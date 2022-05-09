// // 获取URL参数列表
const getRequest = (url: string) => {
  const queryString = url ? url.split('?')[1] : window.location.href
  const obj = {}
  //这个 去查找是否，传了参数过来
  if (queryString.indexOf('?') === -1) {
    return obj
  }
  let keyvalue: Array<string> = []
  let key = '',
    value = ''
  const paraString = queryString.substring(queryString.indexOf('?') + 1, queryString.length).split('&')
  for (const i in paraString) {
    keyvalue = paraString[i].split('=')
    key = keyvalue[0]
    value = keyvalue[1]
    obj[key] = value
  }
  return obj
}

// 键值对拼接成URL参数
const params2Url = (obj): string => {
  const params: Array<string> = []
  for (const key in obj) {
    params.push(`${key}=${obj[key]}`)
  }
  return encodeURIComponent(params.join('&'))
}

// 修改URL中的参数
const replaceParamVal = (paramName, replaceWith) => {
  const oUrl = location.href.toString()
  const re = eval('/(' + paramName + '=)([^&]*)/gi')
  location.href = oUrl.replace(re, paramName + '=' + replaceWith)
  return location.href
}

// 删除URL中指定参数
const funcUrlDel = (name: string): string => {
  const baseUrl: string = location.origin + location.pathname + '?'
  const query = location.search.substr(1)
  if (query.indexOf(name) > -1) {
    const obj = {}
    const arr: Array<any> = query.split('&')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=')
      obj[arr[i][0]] = arr[i][1]
    }
    delete obj[name]
    return (
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&')
    )
  } else {
    return baseUrl
  }
}
export { getRequest, params2Url, replaceParamVal, funcUrlDel }
