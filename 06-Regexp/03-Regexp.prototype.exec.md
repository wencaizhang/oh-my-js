# Regexp.prototype.exec()

## 描述

在一个指定字符串中执行一个搜索匹配。返回一个数组或 `null`。

## 参数

参数 | 描述
--- | ---
string | 必需。要匹配正则表达式的字符串。

## 返回值

如果匹配成功，`exec()` 方法返回一个数组，并更新正则表达式对象的属性。

返回的数组将完全匹配成功的文本作为第一项，将正则括号里匹配成功的作为数组元素填充到后面。

如果匹配失败，返回 `null`。

## 示例

### 返回值

```js
var str = 'leftTop';

var reg = /^([a-z]*)([A-Z]\w*)*/;

var result = reg.exec(str);

console.log( result );
// [
//   0: "leftTop"
//   1: "left"
//   2: "Top"
//   groups: undefined
//   index: 0
//   input: "leftTop"
//   length: 3
// ]
```

数组第一个元素：完全匹配成功的文本

数组第二个元素：匹配到正则第一个括号内表达式的文本

数组第三个元素：匹配到正则第二个括号内表达式的文本

（以此类推……）

数组的 `index` 属性：匹配成功的文本首个字符在原表达式中的索引

数组的 `input` 属性：用于匹配正则表达式的原始字符串

### 返回 null
```js
var reg = /abc/;
var str = 'javascript';
var result = reg.exec(str);
consle.log(result);  // null
```

### 更新正则表达式对象的属性

正则表达式在有 `g` 标志的情况下，每次执行 `exec()` 方法后，会更新正则表达式的 `lastIndex` 属性。

```js
var reg = /(hello \S+)/g;  // 有 g 标志
var str = 'This is a hello world! This is a hello regexp!'

console.log(reg.lastIndex);  
// 0

reg.exec(str);
// [
//   0: "hello world!"
//   1: "hello world!"
//   groups: undefined
//   index: 10
//   input: "This is a hello world! This is a hello regexp!"
//   length: 2
// ]

console.log(reg.lastIndex);  
// 22
// 即 world! 后面的那个空格的索引

reg.exec(str);  // 第二次执行 exec() 时，从 reg.lastIndex 开始向后索引
// [
//   0: "hello regexp!"
//   1: "hello regexp!"
//   groups: undefined
//   index: 33
//   input: "This is a hello world! This is a hello regexp!"
//   length: 2
// ]
```

