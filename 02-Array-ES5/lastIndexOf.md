---
title: lastIndexOf()
linktitle: lastIndexOf()
toc: true
type: docs
date: "2019-05-05T00:00:00+01:00"
draft: false
group: Array ES5
---

## 描述

`lastIndexOf()` 方法返回在指定元素在数组中的最后一个的索引，如果不存在则返回 -1 。

查找方式为从数组的后面向前查找，从 `fromIndex` 处开始（使用全等操作符）。

## 参数

| 参数 | 描述 |
| --- | --- |
| searchElement | 要查找的元素 |
| fromIndex     | 可选。开始查找的位置，在此位置开始从后向前查找。如果该值为负值且绝对值大于或等于数组长度，则返回 -1 。如果参数提供的是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找， -2 表示从倒数第二个元素开始查找，以此类推（查找顺序不变，仍然是从后向前查询数组）。默认值为数组长度减 1 ，即整个数组都被查找 。 |

## 返回值

首个被找到的元素在数组中的索引，若没有找到则返回 -1 。

## 示例

### 返回首个被查找到的元素的索引

```js
var arr = ["a", "b", "c", "b", "a"];

var indexB = arr.lastIndexOf("b");

var indexD = arr.lastIndexOf("d");

console.log(indexB); //  3
console.log(indexD); //  -1
```

### 严格相等

```js
var arr = [1, 2, 3];

var indexStr = arr.lastIndexOf("2");
var indexNum = arr.lastIndexOf(2);

console.log(indexStr); //  -1
console.log(indexNum); //  1
```

### 使用 `fromeIndex` 参数

```js
var arr = ["a", "b", "c", "b", "a"];

var indexB1 = arr.lastIndexOf("b");
var indexB2 = arr.lastIndexOf("b", 2);

console.log(indexB1); //  3
console.log(indexB2); //  1
```

### `fromIndex` 为负值

```js
var arr = ["a", "b", "c", "b", "a"];

var index1 = arr.lastIndexOf("a");

// -2 表示从倒数第二个元素开始查找
var index2 = arr.lastIndexOf("a", -2);

console.log(index1); //  4
console.log(index2); //  0
```

### `fromIndex` 为负值且绝对值大于或等于数组长度，返回 -1

```js
var arr = ["a", "b", "c"];

var indexA = arr.lastIndexOf("a", 5);
var indexB = arr.lastIndexOf("b", -5);

console.log(indexA); //  0
console.log(indexB); //  -1
```

## 模拟实现

```js
Array.prototype.lastIndexOf = function(searchElement, fromIndex) {
  var se = searchElement;
  var arr = this;
  var len = arr.length;
  var fi = parseInt(fromIndex) || len - 1;
  var i = fi;

  if (fi < 0 && -fi >= len) return -1;

  if (fi < 0) {
    i = len + fi;
  }

  for (; i >= 0; i--) {
    if (arr[i] === se) {
      return i;
    }
  }
  return -1;
};
```
