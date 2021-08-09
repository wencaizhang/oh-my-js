---
title: includes()
linktitle: includes()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: Array ES6
---

## 描述

判断数组实例是否包含给定的值，返回一个布尔值。

## 参数

参数 | 描述
--- | ---
`value` | 必需。被检测的值
`fromIndex` | Number 类型，可选。表示搜索的起始位置，默认为 `0`



## 示例

### 基本使用

```js
const arr = [ 1, 2, 4 ];

arr.includes(1); // true
arr.includes(3); // false
```

### 指定 `fromIndex`

```js
const arr = [ 1, 2, 4 ];

arr.includes(2, 2);
// false
// 从索引 2 开始检测，因此是 false

arr.includes(2, 1);
// true
// 从索引 1 开始检测，结果是 true
```

## 边界值

### NaN 的判断

首先我们知道 `NaN` 不等于 `NaN`：

```js
NaN == NaN  // false
NaN === NaN  // false
```

而 `indexOf` 方法内部使用绝对相等（`===`）进行判断，因此无法判断 `NaN`，但是 `includes` 可以：

```js
const arr = [ 1, NaN, 4 ];

arr.indexOf(NaN);  // -1
arr.includes(NaN);  // true
```
