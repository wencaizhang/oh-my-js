---
title: concat()
linktitle: concat()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: ES3 Array
---

## 描述

方法 `concat()` 将创建并返回一个新数组，然后将所有参数都添加到新数组中。它并不修改原数组 。如果要进行 `concat()` 操作的参数是一个数组，那么添加的是数组中的元素，而不是数组。

## 参数

| 参数   | 描述                                                     |
| ------ | -------------------------------------------------------- |
| valueX | 必需。可以使具体的值，也可以是数组对象，可以是任意多个。 |

## 返回值

一个新数组

## 示例

- 参数为具体的值

```js
var arr = [1, 2];

arr.concat(4, 5); // [ 1, 2, 4, 5 ]
```

- 参数为数组对象

```js
var arr = [1, 2];

arr.concat([4, 5]); // [ 1, 2, 4, 5 ]
```

- 多个参数

```js
var arr = [1, 2];

arr.concat([4, 5], [6, 7]); // [ 1, 2, 4, 5, 6, 7 ]
```

- 参数为数组对象，且元素也为数组对象

```js
var arr = [1, 2];

arr.concat(4, [5, [6, 7]]); // [ 1, 2, 4, 5, [ 6, 7 ] ]
```

## 模拟实现

```js
/*
 *  模拟原生 Array.concat()
 */

Array.prototype.concat = function() {
  var args = arguments;
  var arr = this;
  for (var i = 0; i < args.length; i++) {
    var item = args[i];
    if (item instanceof Array) {
      for (var j = 0; j < item.length; j++) {
        arr.push(item[j]);
      }
    } else {
      arr.push(item);
    }
  }
  return arr;
};
```
