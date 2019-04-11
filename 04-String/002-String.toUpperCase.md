---
title: String.prototype.toUpperCase()
date: 2017-02-20 00:28:21
toc: true
tags: [js, string]
---

## 描述

`toUpperCase` 会将调用该方法的字符串转为大写形式，并返回。

`toUpperCase` 不会影响字符串本身。

## 参数

无

## 返回值

一个新的字符串，转换为大写形式之后的字符串。

## 示例

```js
var str = 'app'
var newStr = str.toUpperCase();

console.log(str);    // app
console.log(newStr); // APP 
```
