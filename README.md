# zcos
公共方法集合

### 安装
`npm i zcos -S`

### 使用
```javascript
const { env } = 'zcos';
console.log(env.isIOS());

const Z = 'zcos';
console.log(Z.env.isIOS());
```

### 文档

**方法**

##### isArray(any)
判断是否数组
- 参数:
  - {any} any
- 用法:
  ```javascript
  isArray([]) // true
  ```

##### isEmptyArray(any)
判断是否空数组
- 参数:
  - {any} any
- 用法:
  ```javascript
  isEmptyArray([]) // true
  ```

##### isString(any)
判断是否是字符串
- 参数:
  - {any} any
- 用法:
  ```javascript
  isString('abc') // true
  ```

##### isNumberString(any)
判断是否是数字字符串
- 参数:
  - {any} any
- 用法:
  ```javascript
  isNumberString('1234') // true
  ```

##### isFunction(any)
判断是否是函数
- 参数:
  - {any} any
- 用法:
  ```javascript
  isFunction(function(){}) // true
  ```

##### isBoolean(any)
判断是否是布尔类型
- 参数:
  - {any} any
- 用法:
  ```javascript
  isBoolean(true) // true
  ```

##### isNull(any)
判断是否是null
- 参数:
  - {any} any
- 用法:
  ```javascript
  isNull(null) // true
  ```

##### isUndefined(any)
判断是否是undefined
- 参数:
  - {any} any
- 用法:
  ```javascript
  isUndefined(undefined) // true
  ```

##### isNumber(any)
判断是否是数字
- 参数:
  - {any} any
- 用法:
  ```javascript
  isNumber(1) // true
  ```

##### isFloatNumber(any)
判断是否是浮点数
- 参数:
  - {any} any
- 用法:
  ```javascript
  isFloatNumber(1.2) // true
  ```

##### isEvenNumber(any)
判断是否是偶数
- 参数:
  - {any} any
- 用法:
  ```javascript
  isEvenNumber(2) // true
  ```

##### isObject(any)
判断是否是Object对象
- 参数:
  - {any} any
- 用法:
  ```javascript
  isObject({}) // true
  ```

##### isEmptyObject(any)
判断是否是空对象
- 参数:
  - {any} any
- 用法:
  ```javascript
  isEmptyObject({}) // true
  ```

##### isObjectLike(any)
判断是否是对象
- 参数:
  - {any} any
- 用法:
  ```javascript
  isObjectLike({}) // true
  isObjectLike([]) // true
  isObjectLike(function(){}) // true
  ```

##### isEmptyObjectLike(any)
判断是否是空对象或数组
- 参数:
  - {any} any
- 用法:
  ```javascript
  isEmptyObjectLike({}) // true
  isEmptyObjectLike([]) // true
  ```

##### list(length, fn)
快速生成指定长度和内容的数组
- 参数:
  - {Number} length 列表的长度
  - {Function} fn 控制每一项内容的函数，接受两个参数，分别为undefined和当前项的数组索引
- 用法:
  ```javascript
  list(4, (un, i) => i + 1) // [1, 2, 3, 4]
  ```

##### randomItem(arr)
返回数组中的随机一项。如果参数是空数组，则返回undefined
- 参数:
  - {Array} arr 数组
- 用法:
  ```javascript
  randomItem([1, 2, 3]) // 1 || 2 || 3
  ```

##### random(start, end, is_int)
生成指定范围的随机数
- 参数:
  - {Number} start 随机数的起始范围
  - {Number} [end] 随机数的结束范围 `可选`
  - {Number} [is_int] 控制返回值是浮点数还是整数 `可选`
- 用法:
  ```javascript
  random(7) // [0-7) 范围内的随机浮点数
  random(7, 10)  // [7-10) 范围内的随机浮点数
  random(7, 10, true) // [7-10] 范围内的随机整数
  ```

##### weightedRandom(weights)
生成加权随机数
- 参数:
  - {Array|Object} weights 包含权重信息的数组或对象
- 用法:
  ```javascript
  weightedRandom([3, 2, 2, 1]); // 参数是数组，每一项表示权重，返回对应数组下标
  weightedRandom({ A: 3, B: 4, c: 1 }); // 参数是对象，每一对键值对的值表示权重，返回对应的键
  ```

##### deepClone(value)
深拷贝指定的数组或对象
- 参数:
  - {Array|Object} value 数组或对象
- 用法:
  ```javascript
  deepClone({ a: 1, c: [1, 2] })
  ```

##### firstUpper(str)
首字母大写
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  firstUpper('hello') // 'Hello'
  ```

##### trim(str)
去除字符串首尾空格
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  trim('  hello  ') // 'hello'
  ```

##### trimStart(str)
去除字符串首部空格
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  trimStart('  hello  ') // 'hello  '
  ```

##### trimEnd(str)
去除字符串尾部空格
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  trimStart('  hello  ') // '  hello'
  ```

##### camelCase(str)
转换字符串为驼峰写法
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  camelCase('hello-world') // 'helloWorld'
  ```

##### capitalize(str)
转换字符串为首字母大写形式
- 参数:
  - {String} str 字符串
- 用法:
  ```javascript
  capitalize('hELLO World') // 'Hello world'
  ```

##### versionCompare(v1, symbol, v2)
比较版本号
- 参数:
  - {String} v1 版本号
  - {String} symbol 比较符号 '=' '>' '<' '>='  '<='
  - {String} v2 版本号
- 用法:
  ```javascript
  versionCompare('0.0.1', '>', '0.1') // false
  ```

##### qs.parse(str, sep, eq)
解析URL查询字符串
- 参数:
  - {String} str 要解析的url查询字符串
  - {String} sep 用于界定查询字符串中的键值对的子字符串。默认为 '&'
  - {String} eq 用于界定查询字符串中的键与值的子字符串。默认为 '='
- 用法:
  ```javascript
  import { qs } from 'zcos';
  qs.parse('a=1&a=2&b=3') // { a: [1, 2], b: 3 }
  ```

##### qs.stringify(obj, sep, eq)
序列化对象成为url查询字符串
- 参数:
  - {Object} obj 要序列化成 URL 查询字符串的对象
  - {String} sep 用于界定查询字符串中的键值对的子字符串。默认为 '&'
  - {String} eq 用于界定查询字符串中的键与值的子字符串。默认为 '='
- 用法:
  ```javascript
  qs.stringify({ a: [1, 2], b: 3 }) // 'a=1&a=2&b=3'
  ```

**类**

##### new Url(url)
url解析类
- 参数:
  - {String} url字符串
- 用法:
  ```javascript
  new Url('http://a.com?a=1').search // return '?a=1'
  ```

##### new Storager(key)
本地储存类
- 参数:
  - {String} localStorage储存的键
- 方法:
  - add(obj) 添加数据
  - set(key, value) 设置数据
  - get(key) 获取数据
  - remove(key) 删除键
  - clear() 清空数据
- 用法:
  ```javascript
  const store = new Storager('store_key');
  store.set('a', 2);
  store.get('a'); // 2
  ```

##### new Validate(value)
验证类
- 参数:
  - {any} value 需要验证的值
- 方法:
  - `static` register(name, rule) 注册验证函数
  - done() 获取验证结果
- 用法:
  ```javascript
  Validate.register('isOne', {
    validate: v => v == 1,
    successMsg: '成功',
    errorMsg: '失败'
  })
  new Validate('1').isOne().done() // { name: 'isOne', msg: '成功', status: 1 }
  ```

### LICENSE
MIT
