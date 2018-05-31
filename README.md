## Constants

<dl>
<dt><a href="#isArray">isArray</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是数组</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#list">list(length, fn)</a> ⇒ <code>Array</code></dt>
<dd><p>列表快速生成</p>
</dd>
<dt><a href="#randomItem">randomItem(arr)</a> ⇒ <code>*</code></dt>
<dd><p>随机返回数组中的一项</p>
</dd>
<dt><a href="#random">random(start, end, int)</a> ⇒ <code>Number</code></dt>
<dd><p>生成一定范围内的随机数</p>
</dd>
<dt><a href="#firstUpper">firstUpper(str)</a> ⇒ <code>String</code></dt>
<dd><p>首字母大写</p>
</dd>
<dt><a href="#trim">trim(str)</a> ⇒ <code>String</code></dt>
<dd><p>去除字符串头尾空格</p>
</dd>
<dt><a href="#trimStart">trimStart(str)</a> ⇒ <code>String</code></dt>
<dd><p>去除字符串头部空格</p>
</dd>
<dt><a href="#trimEnd">trimEnd(str)</a> ⇒ <code>String</code></dt>
<dd><p>去除字符串尾部空格</p>
</dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>String</code></dt>
<dd><p>转换字符串为驼峰命名法</p>
</dd>
<dt><a href="#capitalize">capitalize(str)</a> ⇒ <code>String</code></dt>
<dd><p>转换字符串为首字母大写形式</p>
</dd>
<dt><a href="#isEmptyArray">isEmptyArray(arr)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是空数组</p>
</dd>
<dt><a href="#isNumber">isNumber(num)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是数字</p>
</dd>
<dt><a href="#isFloatNumber">isFloatNumber(num)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是浮点数</p>
</dd>
<dt><a href="#isEvenNumber">isEvenNumber(num)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是偶数</p>
</dd>
<dt><a href="#isEmptyObjectLike">isEmptyObjectLike(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是空对象或类对象</p>
</dd>
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是对象</p>
</dd>
<dt><a href="#isEmptyObject">isEmptyObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否是空对象</p>
</dd>
</dl>

<a name="isArray"></a>

## isArray ⇒ <code>Boolean</code>
是否是数组

**Kind**: global constant  
**Returns**: <code>Boolean</code> - 'true' if the value is Array, else 'false'.  
**Datetime**: 2018-05-29T16:43:03+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>\*</code> | The value to check. |

<a name="list"></a>

## list(length, fn) ⇒ <code>Array</code>
列表快速生成

**Kind**: global function  
**Returns**: <code>Array</code> - new array  
**Datetime**: 2018-05-30T15:52:51+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Number</code> | length of list |
| fn | <code>function</code> \| <code>Number</code> | a function to generate list item. if is Number, array will fill with it. |

<a name="randomItem"></a>

## randomItem(arr) ⇒ <code>\*</code>
随机返回数组中的一项

**Kind**: global function  
**Returns**: <code>\*</code> - random item of array  
**Datetime**: 2018-05-30T16:18:14+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | an array |

<a name="random"></a>

## random(start, end, int) ⇒ <code>Number</code>
生成一定范围内的随机数

**Kind**: global function  
**Datetime**: 2018-05-30T11:37:21+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Number</code> | start of range |
| end | <code>Number</code> | end of range |
| int | <code>Boolean</code> | result is int if true, else is float |

**Example**  
```js
random(7) // [0-7) float
random(7, 10)  // [7-10) float
random(7, 10, true) // [0-7) int
```
<a name="firstUpper"></a>

## firstUpper(str) ⇒ <code>String</code>
首字母大写

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-29T19:24:06+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to handle |

<a name="trim"></a>

## trim(str) ⇒ <code>String</code>
去除字符串头尾空格

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-29T19:24:06+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to transform |

<a name="trimStart"></a>

## trimStart(str) ⇒ <code>String</code>
去除字符串头部空格

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-29T19:24:06+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to transform |

<a name="trimEnd"></a>

## trimEnd(str) ⇒ <code>String</code>
去除字符串尾部空格

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-29T19:24:06+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to transform |

<a name="camelCase"></a>

## camelCase(str) ⇒ <code>String</code>
转换字符串为驼峰命名法

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-30T09:54:07+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to transform |

<a name="capitalize"></a>

## capitalize(str) ⇒ <code>String</code>
转换字符串为首字母大写形式

**Kind**: global function  
**Returns**: <code>String</code> - new string  
**Datetime**: 2018-05-30T10:00:00+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string to transform |

<a name="isEmptyArray"></a>

## isEmptyArray(arr) ⇒ <code>Boolean</code>
是否是空数组

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if the value is emptyArray, else 'false'.  
**Datetime**: 2018-05-29T16:45:33+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>\*</code> | The value to check. |

<a name="isNumber"></a>

## isNumber(num) ⇒ <code>Boolean</code>
是否是数字

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if the value is Number, else 'false'.  
**Datetime**: 2018-05-29T16:40:41+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>\*</code> | The value to check. |

<a name="isFloatNumber"></a>

## isFloatNumber(num) ⇒ <code>Boolean</code>
是否是浮点数

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if the value is floatNumber, else 'false'.  
**Datetime**: 2018-05-29T16:42:03+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>\*</code> | The value to check. |

<a name="isEvenNumber"></a>

## isEvenNumber(num) ⇒ <code>Boolean</code>
是否是偶数

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if the value is evenNumber, else 'false'.  
**Datetime**: 2018-05-29T16:42:03+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>\*</code> | The value to check. |

<a name="isEmptyObjectLike"></a>

## isEmptyObjectLike(obj) ⇒ <code>Boolean</code>
是否是空对象或类对象

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if value is emptyObjectLike, else 'false'.  
**Datetime**: 2018-05-29T16:49:15+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The value to check. |

<a name="isObject"></a>

## isObject(obj) ⇒ <code>Boolean</code>
是否是对象

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if value is Object, else 'false'.  
**Datetime**: 2018-05-29T16:56:13+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The value to check. |

<a name="isEmptyObject"></a>

## isEmptyObject(obj) ⇒ <code>Boolean</code>
是否是空对象

**Kind**: global function  
**Returns**: <code>Boolean</code> - 'true' if value is emptyObject, else 'false'.  
**Datetime**: 2018-05-29T16:56:17+0800  
**Author**: daben<dabennn07@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The value to check. |

