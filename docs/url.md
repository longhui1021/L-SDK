# 操作 URL

## 1. getRequest(url)

> 获取 URL 参数列表

- 参数类型 `String`
- 返回值类型 `Object`

```javascript
import { getRequest } from 'l-sdk'

let url = 'http://localhost:8080?id=10011'
console.log(JSON.stringify(getRequest(url))) // {id:10011}
```

## 2. params2Url(obj)

> 键值对拼接成 URL 参数

- 参数类型 `Object`
- 返回值类型 `String`

```javascript
import { params2Url } from 'l-sdk'

let obj = {
  id: 10011,
  name:'name'
}
console.log(params2Url(obj)) // id=10011&name=name
```
