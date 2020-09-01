---
title: 去除字符串的头尾空格
linktitle: 去除字符串的头尾空格
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: String
---

## trim

`trim` 创建字符串的一个副本，并移除字符串**两端**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。

```js
var str = '  a b c  '
var newStr = str.trim()

console.log(str)  // "  a b c  "
console.log(newStr)  // "a b c"
```

## trimStart 和 trimLeft
`trimStart` 会创建字符串的一个副本，并移除字符串**左端（开头）**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。 `trimLeft` 是 `trimStart` 的别名。

```js
var str = '  a b c  '
var newStr1 = str.trimStart()
var newStr2 = str.trimLeft()

console.log(newStr1)  // "a b c  "
console.log(newStr2)  // "a b c  "
```

## trimEnd 和 trimRight

`trimRight` 创建字符串的一个副本，并移除字符串**右端（结尾）**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。`trimRight` 是 `trimEnd` 的别名。

```js
var str = '  a b c  '
var newStr1 = str.trimEnd()
var newStr2 = str.trimRight()

console.log(newStr1)  // "  a b c"
console.log(newStr2)  // "  a b c"
```


## 通过正则简单实现：

```js
if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
if(!String.prototype.trimLeft) {
  String.prototype.trimLeft = function () {
    return this.replace(/^\s+/,'');
  };
}
if(!String.prototype.trimRight) {
  String.prototype.trimRight = function () {
    return this.replace(/\s+$/,'');
  };
}
```
用到的正则：
1. `\s` 匹配任何空白字符
2. `+` 匹配至少 1 个元字符
3. `^` 字符串必须以指定的字符开始
4. `$` 字符串必须以指定的字符结束
5. `|` 或者
6. `g` 全局匹配

## more：
+ 更多的实现方式参考：[JavaScript trim函数大赏 - 司徒正美](http://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html)
+ MDN 文档：[String.prototype.trim() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
