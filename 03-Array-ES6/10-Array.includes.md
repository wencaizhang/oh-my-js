---
title: Array.prototype.includes()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es6]
---

判断数组中是否包含某个元素，我们通常这么做：

```js
var arr = [ 1, 2, 3 ]

if (arr.indexOf(4) == -1) {
  console.log('不包含')
} else {
  console.log('包含')
}
```

上面的做法是首先使用 `Array.prototype.indexOf()` 方法得到元素的索引，然后再通过判断索引和 -1 是否相等来得到一个结果 `true` 或 `false`，分别代表包含和不包含。。

这个方法的不便之处在于，我希望直接得到一个布尔值 `true` 或 `false`，并不关心元素的索引是多少，以及这个索引为什么要和 -1 进行比较。

现在有了一个更简单更直观的方法去判断是否包含某个元素：`Array.prototype.includes()`。

## 描述

方法 `includes` 返回一个布尔值，表示某个数组是否包含给定的值。

## 参数

参数 | 描述
--- | ---
`value` | 必需。被检测的值
`fromIndex` | Number 类型，可选。表示搜索的起始位置，默认为 `0`


## 返回值

布尔值，表示某个数组是否包含给定的值。

## 示例

### 不指定 `fromIndex`

```js
const arr = [ 1, 2, 4 ];

arr.includes(1); // true
arr.includes(3); // false
```

### 指定 `fromIndex`

```js
const arr = [ 1, 2, 4 ];

arr.includes(1, 1); // false
arr.includes(2, 2); // false
```


