---
title: every()
linktitle: every()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: Array ES5
---

## 描述

`every()` 方法对数组每一项运行给定函数 fn ，如果该函数对每一项都返回 true ，则 `every()` 方法返回 true，否则返回 false。

## 参数

| 参数    | 描述                                                |
| ------- | --------------------------------------------------- |
| fn      | `function` 类型，必需。数组中每个元素需要调用的函数 |
| context | 可选。执行回调时的上下文（this）                    |

fn 函数有三个参数，依次是：

1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 返回值

如果数组中每一项都使得给定函数 fn 返回 true，则 `every()` 方法返回 true ，否则返回 false 。

## 示例

### 打印 fn 参数值

```js
var arr = ["a", "b", "c"];

arr.every(function(value, index, array) {
  console.log(value, index, array);
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

### 如果 fn 返回 false ，则 `every()` 立即返回 false。

```js
var arr = ["a", "b", "c"];

var isEvery = arr.every(function(value, index, array) {
  console.log(value, index, array);
  return value === "b";
});

//  a 0 ["a", "b", "c"]

console.log(isEvery); //  false
```

## 模拟实现

```js
Array.prototype.every = function(fn, context) {
  var arr = this;
  var fn = fn;
  var context = context;

  for (var i = 0; i < arr.length; i++) {
    var bool = fn.call(context, arr[i], i, arr);
    if (!bool) return false;
  }

  return true;
};
```
