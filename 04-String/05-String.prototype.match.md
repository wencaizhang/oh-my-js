# String.prototype.match()

## 描述

检测字符串中是否含有与 regexp 相匹配的文本。

如果正则表达式不包含 `g` 标志，则 `match()` 方法返回值和 `RegExp.exec()` 返回值是相同的。

如果正则表达式包含 `g` 标志，则返回一个数组，包含所有匹配的字符串，而不是匹配对象（即不会返回 `input` 属性和 `index` 属性）。

## 参数

参数 | 描述
---|---
regexp | 必需。如果传入一个非正则表达式，则会使用 `new RegExp()` 将其隐式转换为正则表达式对象

## 返回值

见描述

## 示例

### 是否包含 `g` 的区别

```js
'This is a hello world!'.match(/(hello \S+)/g);  // ["hello world!"]

var matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches);
// [
//   0: "hello world!"
//   1: "hello world!"
//   groups: ined
//   index: 10
//   input: s is a hello world!"
//   length: 2
// ]
```