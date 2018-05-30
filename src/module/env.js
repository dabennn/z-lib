/**
 * 判断环境
 */
export default {
  isWeChat() {
    return /MicroMessenger/i.test(navigator.userAgent);
  },
  isCosmeapp() {
    return /Cosmeapp/i.test(navigator.userAgent);
  },
  isIOS() {
    return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(navigator.userAgent);
  },
  isAndroid() {
    return /Android/.test(navigator.userAgent) || /Linux/.test(navigator.userAgent);
  },
  isUC() {
    return /UCBrowser/i.test(navigator.userAgent);
  },
  isBroswer() {
    return typeof window !== 'undefined';
  },
};
