# Regexp.prototype.test()

## 描述

检测字符串中是否含有与 regexp 相匹配的文本。

## 参数

参数 | 描述
---|---
string | 必需。要检测的字符串

## 返回值

如果字符串 string 中含有与 regexp 匹配的文本，就返回 true，否则返回 false

## 示例

```js
var reg = /java/i;

reg.test('javascript');  // 返回 true

reg.test('ECMAScript');  // 返回 false
```

```js
var reg = /java$/i;

reg.test('javascript');  // false
```


