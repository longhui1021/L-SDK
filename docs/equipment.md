# 设备判断

## 1. isMobile()

> 判断是移动还是PC设备

- 返回值 `mobile`：移动端，`desktop`：PC端

```javascript
import { isMobile } from 'l-sdk'

console.log(isMobile()); // desktop
```

## 2. isAppleMobileDevice()

> 判断是否是苹果还是安卓移动设备

- 返回值类型`Boolean`

```javascript
import { isAppleMobileDevice } from 'l-sdk'

console.log(isAppleMobileDevice()); // true
```

## 3. isAndroidMobileDevice()

> 判断是否是安卓移动设备

- 返回值类型`Boolean`

```javascript
import { isAndroidMobileDevice } from 'l-sdk'

console.log(isAndroidMobileDevice()); // false
```

## 4. osType()

> 判断是Windows还是Mac系统

- 返回值 `windows`：Windows系统，`mac`：Mac系统，`other`：其他系统

```javascript
import { osType } from 'l-sdk'

console.log(osType()); // mac
```

