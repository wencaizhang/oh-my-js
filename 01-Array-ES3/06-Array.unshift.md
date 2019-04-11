---
title: Array.prototype.unshift()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es3]
---

## 描述

将一个或多个元素添加到数组的开头，并返回**新数组的长度**。（修改原数组）

## 参数

参数 | 描述
--- | ---
elementN | 必需，个数为至少一个。要添加到数组开头的元素

## 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）

## 示例

```js
[].unshift();  // undefined

var arr = [ 1, 2, 3 ];

var newLength1 = arr.unshift(4);      // 4 
console.log( arr );                   // [ 4, 1, 2, 3 ]

var newLength2 = arr.unshift(5, 6);   // 6 
console.log( arr );                   // [ 5, 6, 4, 1, 2, 3 ]

var newLength3 = arr.unshift([7, 8]); // 7
console.log( arr );                   // [ [7, 8], 5, 6, 4, 1, 2, 3 ]
```

