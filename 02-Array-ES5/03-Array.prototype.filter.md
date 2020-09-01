---
title: filter()
linktitle: filter()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: Array ES5
---

> filter: 过滤

## 描述

`filter()` 方法对数组中每一项运行给定函数 fn ,返回使该函数返回值为 true 的项组成的数组。

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

过滤后的新数组，即令给定函数 fn 返回值为 true 的数组元素组成的新数组。

## 示例

### 打印 fn 参数值

```js
var arr = ["a", "b", "c"];

arr.filter(function(value, index, array) {
  console.log(value, index, array);
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

### fn 返回值如果不是布尔值，则会默认被转换成布尔值

```js
var data = [0, 1, 2, 3];

var arrFilter = data.filter(function(item) {
  return item;
});

console.log(arrFilter); // [ 1, 2, 3 ]
```

## 模拟实现

```js
Array.prototype.filter = function(fn, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    var bool = fn.call(context, this[i], i, this);
    if (bool) arr.push(this[i]);
  }
  return arr;
};
```
