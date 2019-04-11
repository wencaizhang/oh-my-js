---
title: String.prototype.toLowerCase()
date: 2017-02-20 00:28:21
toc: true
tags: [js, string]
---

## 描述

`toLowerCase` 会将调用该方法的字符串转为小写形式，并返回。

`toLowerCase` 不会影响字符串本身。

## 参数

无

## 返回值

一个新的字符串，转换为小写形式之后的字符串。

## 示例

```js
var str = 'GitHub'
var newStr = str.toLowerCase();

console.log(str);    // GitHub
console.log(newStr); // github
```
