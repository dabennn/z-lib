/**
 * 微信图片预览
 * @author   daben<dabennn07@gmail.com>
 * @param     {Object|String}            params
 * @param     {String} [params.current]  需要显示的图片的url
 * @param     {Array} [params.images]  所有图片的数组
 * @return   {Boolean}               成功为true, 失败为false
 *
 *    @example
 *    wxPreviewImage({
 *      current: 'http://xxxxxx.xxx.xxxx',
 *      images: ['http://xxxxx.xxxx.xxx', 'http://xxx.xxxx.xxxx']
 *    })
 */
export default function wxPreviewImage(params = {}) {
  let current;
  let images = [];

  if (typeof params === 'string') {
    current = params;
    images = [current];
  } else {
    current = params.current;
    images = params.images.map(val => val.image_url);
  }
  if (typeof WeixinJSBridge === 'undefined') {
    return false;
  }

  if (!current || !images) {
    return false;
  }
  wx.previewImage({
    current: current,
    urls: images,
  });

  return true;
}
