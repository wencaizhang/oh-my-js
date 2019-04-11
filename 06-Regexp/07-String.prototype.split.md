---
title: String.prototype.split()
date: 2017-02-20 00:28:21
toc: true
tags: [js, regexp]
---

## 描述

把一个字符串分割成一个数组。

它和 `Array.prototype.join()` 的操作是相反的。

## 参数

参数 | 描述
---|---
regexp | 必需。如果传入一个非正则表达式，则会使用 `new RegExp()` 将其隐式转换为正则表达式对象

## 返回值

见描述

## 示例

### 例子1

```js
var str = 'hello world';
var reg = /\s/;

str.split(reg);  // [ "hello", "world" ]
```

### 例子2

```js
var str = 'a:b:c:d';
var reg = /:/;

str.split(reg);  // ["a", "b", "c", "d"]
```