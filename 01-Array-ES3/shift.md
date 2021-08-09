---
title: shift()
linktitle: shift()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false

group: ES3 Array

weight: 25
---

## 描述

从一个数组中**删除并返回第一个元素**。（修改原数组）

## 参数

无

## 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）

## 示例

```js
var arr = [1, 2, 3];

var delEle = arr.shift(); // 1

[].shift(); // undefined
```
