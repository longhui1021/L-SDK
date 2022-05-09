# 数字操作

## 1. randomNum(min, max)

> 生成指定范围随机数

- 参数类型 `min:Number,max:Number`
- 返回值类型 `Number`

```javascript
import { randomNum } from 'l-sdk'

console.log(randomNum(0,10)); //9

```

## 2. format(num)

> 千位分割符

- 参数类型 `Number`
- 返回值类型 `String`

```javascript
import { format } from 'l-sdk'

console.log(format(123456789)); // 123,456,789

```

