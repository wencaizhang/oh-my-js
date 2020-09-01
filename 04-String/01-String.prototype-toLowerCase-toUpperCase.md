---
title: 字符串大小写转换
linktitle: 字符串大小写转换
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: String
---

## String.prototype.toLowerCase

`toLowerCase` 将字符串转换为小写，会将调用该方法的字符串转为小写形式，并返回。

 不会影响字符串本身。


`toLowerCase` 返回一个新的字符串，转换为小写形式之后的字符串。

例如：

```js
var str = 'GitHub'
var newStr = str.toLowerCase();

console.log(str);    // GitHub
console.log(newStr); // github
```

## String.prototype.toUpperCase()


`toUpperCase` 会将调用该方法的字符串转为大写形式，并返回。

`toUpperCase` 不会影响字符串本身。


返回一个新的字符串，转换为大写形式之后的字符串。

例如：

```js
var str = 'GitHub'
var newStr = str.toUpperCase();

console.log(str);    // GitHub
console.log(newStr); // GITHUB
```
