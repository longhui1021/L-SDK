import { randomNum, format } from './core/number/index'
import { arrScrambling, flatten, sample } from './core/array/index'
import { randomString, fistLetterUpper, telFormat, getKebabCase, getCamelCase, toCDB, toDBC } from './core/string/index'
import { digitUppercase, intToChinese } from './core/format/index'
import {
  localStorageSet,
  localStorageGet,
  localStorageRemove,
  sessionStorageSet,
  sessionStorageGet,
  sessionStorageRemove,
  setCookie,
  getCookie,
  delCookie
} from './core/storage/index'

import { checkCardNo, haveCNChars, isPostCode, isTel, isIPv6, isEmail, isEmojiCharacter } from './core/check/index'
import { getRequest, params2Url, replaceParamVal, funcUrlDel } from './core/url/index'
import { isMobile, isAppleMobileDevice, isAndroidMobileDevice, osType } from './core/equipment/index'

import {
  scrollToTop,
  scrollToBottom,
  smoothScroll,
  getClientHeight,
  getPageViewWidth,
  toFullScreen,
  exitFullscreen
} from './core/browser/index'

import { stopPropagation, getType, deepClone } from './core/javaScript/index'

export {
  randomNum,
  format,
  arrScrambling,
  flatten,
  sample,
  randomString,
  fistLetterUpper,
  telFormat,
  getKebabCase,
  getCamelCase,
  toCDB,
  toDBC,
  digitUppercase,
  intToChinese,
  localStorageSet,
  localStorageGet,
  localStorageRemove,
  sessionStorageSet,
  sessionStorageGet,
  sessionStorageRemove,
  setCookie,
  getCookie,
  delCookie,
  checkCardNo,
  haveCNChars,
  isPostCode,
  isTel,
  isIPv6,
  isEmail,
  isEmojiCharacter,
  getRequest,
  params2Url,
  replaceParamVal,
  funcUrlDel,
  isMobile,
  isAppleMobileDevice,
  isAndroidMobileDevice,
  osType,
  scrollToTop,
  scrollToBottom,
  smoothScroll,
  getClientHeight,
  getPageViewWidth,
  toFullScreen,
  exitFullscreen,
  stopPropagation,
  getType,
  deepClone
}
