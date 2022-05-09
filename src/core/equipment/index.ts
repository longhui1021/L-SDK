// 判断是移动还是PC设备
const isMobile = (): string => {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)) {
    return 'mobile'
  }
  return 'desktop'
}

// 判断是否是苹果还是安卓移动设备
const isAppleMobileDevice = (): boolean => {
  const reg = /iphone|ipod|ipad|Macintosh/i
  return reg.test(navigator.userAgent.toLowerCase())
}

// 判断是否是安卓移动设备
const isAndroidMobileDevice = (): boolean => {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

// 判断是Windows还是Mac系统
const osType = (): string => {
  const agent = navigator.userAgent.toLowerCase()
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
  const isWindows =
    agent.indexOf('win64') >= 0 ||
    agent.indexOf('wow64') >= 0 ||
    agent.indexOf('win32') >= 0 ||
    agent.indexOf('wow32') >= 0
  if (isWindows) {
    return 'windows'
  }
  if (isMac) {
    return 'mac'
  }
  return 'other'
}

// 浏览器型号和版本
// const getExplorerInfo = () => {
//   const t = navigator.userAgent.toLowerCase()
//   return 0 <= t.indexOf('msie')
//     ? {
//         //ie < 11
//         type: 'IE',
//         version: Number(t.match(/msie ([\d]+)/)[1])
//       }
//     : !!t.match(/trident\/.+?rv:(([\d.]+))/)
//     ? {
//         // ie 11
//         type: 'IE',
//         version: 11
//       }
//     : 0 <= t.indexOf('edge')
//     ? {
//         type: 'Edge',
//         version: Number(t.match(/edge\/([\d]+)/)[1])
//       }
//     : 0 <= t.indexOf('firefox')
//     ? {
//         type: 'Firefox',
//         version: Number(t.match(/firefox\/([\d]+)/)[1])
//       }
//     : 0 <= t.indexOf('chrome')
//     ? {
//         type: 'Chrome',
//         version: Number(t.match(/chrome\/([\d]+)/)[1])
//       }
//     : 0 <= t.indexOf('opera')
//     ? {
//         type: 'Opera',
//         version: Number(t.match(/opera.([\d]+)/)[1])
//       }
//     : 0 <= t.indexOf('Safari')
//     ? {
//         type: 'Safari',
//         version: Number(t.match(/version\/([\d]+)/)[1])
//       }
//     : {
//         type: t,
//         version: -1
//       }
// }

export { isMobile, isAppleMobileDevice, isAndroidMobileDevice, osType }
