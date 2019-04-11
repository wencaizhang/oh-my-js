---
title: String.prototype.replace()
date: 2017-02-20 00:28:21
toc: true
tags: [js, regexp]
---

## 描述


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