---
tags:
  - 数组
  - 数组乱序
  - 数组扁平化
  - 数组随机元素
---


# 数组操作

## 1. arrScrambling(arr)

> 数组乱序

- 参数类型 `Array<any>`
- 返回值类型 `Array<any>`

```javascript
import { arrScrambling } from 'l-sdk'

console.log(arrScrambling([1,2,3,4,5])); // [4, 1, 2, 5, 3]

```

## 2. flatten(arr)

> 数组扁平化处理

- 参数类型 `Array<any>`
- 返回值类型 `Array<any>`

```javascript
import { flatten } from 'l-sdk'

console.log(flatten([[1,2],[3,[4,5]]])); // [1, 2, 3, 4, 5]

```

## 3. sample(arr)

> 随机获取数组中的一个元素

- 参数类型 `Array<any>`
- 返回值类型 `Array<any>`

```javascript
import { sample } from 'l-sdk'

console.log(sample(['w','v','g','4',2,5])); // 4

```

