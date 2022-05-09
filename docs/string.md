# 字符串操作

## 1. randomString(len)

> 生成随机字符串,len为字想要生成的符串长度

- 参数类型 `Number`
- 返回值类型 `String`

```javascript
import { randomString } from 'l-sdk'

console.log(randomString(5)) // rCR4G

```

## 2. fistLetterUpper(str)

> 字符串首字母大写

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { fistLetterUpper } from 'l-sdk'

console.log(fistLetterUpper('abcdef')) // Abcdef

```

## 3. telFormat(tel)

> 手机号脱敏，手机号中间四位变成*

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { telFormat } from 'l-sdk'

console.log(telFormat('17865136221')) // 178****6221

```

## 4. getKebabCase(str)

> 驼峰命名转换成短横线命名

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { getKebabCase } from 'l-sdk'

console.log(getKebabCase('userName')) // user-name

```

## 5. getCamelCase(str)

> 短横线命名转换成驼峰命名

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { getCamelCase } from 'l-sdk'

console.log(getCamelCase('user-name')) // userName

```

## 6. toCDB(str)

> 全角转换为半角

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { toCDB } from 'l-sdk'

console.log(toCDB('ｈｅｌｌｏ　ｗｏｒｌｄ')) // hello world

```

## 7.toDBC(str)

> 半角转换为全角

- 参数类型 `String`
- 返回值类型 `String`

```javascript
import { toDBC } from 'l-sdk'

console.log(toDBC('hello world')) // ｈｅｌｌｏ　ｗｏｒｌｄ

```

