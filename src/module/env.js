/**
 * 判断环境
 * @cfg {Object} env
 * @cfg {Function} [env.isWeChat] 判断是否微信ua
 * @cfg {Function} [env.isCosmeapp] 判断是否App ua
 * @cfg {Function} [env.isIOS] 判断是否ios ua
 * @cfg {Function} [env.isAndroid] 判断是否安卓ua
 * @cfg {Function} [env.isUC] 判断是否uc浏览器ua
 * @cfg {Function} [env.isBroswer] 判断是否是浏览器环境
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
