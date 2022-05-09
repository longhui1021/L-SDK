# 操作存储

## localStorage操作

### 1. localStorageSet(key, value)

> 存储localStorage

- 参数类型 `key:String,value:String`

```javascript
import { localStorageSet } from 'l-sdk'

localStorageSet('{key:value}')
```



### 2. localStorageGet(key)

> 获取localStorage

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { localStorageGet } from 'l-sdk'

console.log(localStorageGet('key')) // {key:value}
```



### 3. localStorageRemove(key)

> 删除localStorage

- 参数类型 `String`

```javascript
import { localStorageRemove } from 'l-sdk'

localStorageRemove('key')
```



## sessionStorage操作

### 1. sessionStorageSet(key, value)

> 存储sessionStorage

- 参数类型 `key:String,value:String`

```javascript
import { sessionStorageSet } from 'l-sdk'

sessionStorageSet('{key:value}')
```



### 2. sessionStorageGet(key)

> 获取sessionStorage

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { sessionStorageGet } from 'l-sdk'

console.log(sessionStorageGet('key')) // {key:value}
```



### 3.sessionStorageRemove(key)

> 删除sessionStorage

- 参数类型 `String`

```javascript
import { sessionStorageRemove } from 'l-sdk'

sessionStorageRemove('key')
```





## cookie操作

### 1. setCookie((key, value, expire)

> 设置cookie

- 参数类型 `key:String,value:String,expire:Number`

```javascript
import { setCookie } from 'l-sdk'

setCookie('key','value',1000*60*24)
```

### 2. getCookie(key)

> 读取cookie

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { getCookie } from 'l-sdk'

console.log('getCookie',getCookie('key')) // value
```

### 3. delCookie(key)

> 删除cookie

- 参数类型 `String`

```javascript
import { delCookie } from 'l-sdk'

delCookie('key')
```



