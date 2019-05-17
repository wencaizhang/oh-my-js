# 正则表达式的 lastIndex 属性

## 描述

在每个实例化的正则对象中，都存在一个 `lastIndex` 属性，初始值为 `0` 。

`lastIndex` 属性是进行正则匹配操作的开始的位置

如果正则表达式不带 `g` 标志，则 `lastIndex` 始终为 `0`。

如果正则表达式带有 `g` 标志，匹配成功则将匹配内容最后一个字符串在原字符串中的索引加 1 设置为 `lastIndex` 的值，匹配失败则重置为 `0`。

## 示例

### 返回值

```js
var reg1 = /ab/;
var reg2 = /ab/g;
var str = 'abcabc';

console.log(reg1.lastIndex, reg1.test(str));  // 0 true
console.log(reg1.lastIndex, reg1.test(str));  // 0 true
console.log(reg1.lastIndex, reg1.test(str));  // 0 true

console.log(reg2.lastIndex, reg2.test(str));  // 0 true
console.log(reg2.lastIndex, reg2.test(str));  // 2 true
console.log(reg2.lastIndex, reg2.test(str));  // 5 false
// 当 lastIndex 为 5 时，正则匹配从 str[5] 的位置开始，结果为 false
```