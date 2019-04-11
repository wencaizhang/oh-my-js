---
title: Array.of()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es6]
---

## 描述
`Array.of` 方法用于将一组值转换为数组。基本可以用来替代 `Array()` 或者 `new Array()`，并且不存在由于参数不同而导致的重载。

## 参数

参数 | 描述
--- | ---
arguments | 任意值，不限个数。作为数组的元素。


## 返回值

返回由参数值组成的数组。如果没有参数，就返回一个空数组。


## 示例

```js
Array.of();  // []

Array.of(undefined); // [ undefined ]

Array.of(1);  // [ 1 ]

Array.of(1, 2);  // [ 1, 2 ]
```



## 模拟实现 

```js
function ArrayOf(){
    return [].slice.call(arguments);
}
```
