---
title: indexOf()
linktitle: indexOf()
toc: true
type: docs
date: "2019-05-05T00:00:00+01:00"
draft: false
group: Array ES5
---


## 描述

`indexOf()` 方法返回在数组中可以找到一个给定元素的第一个索引（使用全等操作符），如果不存在，则返回 -1 。

## 参数

| 参数 | 描述 |
| --- | --- |
| searchElement | 要查找的元素 |
| fromIndex     | 可选。开始查找的位置，如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1 。如果参数提供的是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找， -2 表示从倒数第二个元素开始查找，以此类推（查找顺序不变，仍然是从前向后查询数组）。如果抵消后的索引值仍小于 0 ，则整个数组都会被查询。默认值为 0 。 |

## 返回值

首个被找到的元素在数组中的索引，若没有找到则返回 -1 。

## 示例

### 返回首个被查找到的元素的索引

```js
var arr = ["a", "b", "c", "a"];

var indexB = arr.indexOf("b");

var indexD = arr.indexOf("d");

console.log(indexB); //  1
console.log(indexD); //  -1
```

### 严格相等

```js
var arr = [1, 2, 3];

var indexStr = arr.indexOf("2");
var indexNum = arr.indexOf(2);

console.log(indexStr); //  -1
console.log(indexNum); //  1
```

### 使用 `fromeIndex` 参数

```js
var arr = ["a", "b", "c", "b", "a"];

var indexB1 = arr.indexOf("b");
var indexB2 = arr.indexOf("b", 2);

console.log(indexB1); //  1
console.log(indexB2); //  3
```

### `fromIndex` 大于或等于数组长度，返回 -1

```js
var arr = ["a", "b", "c"];

var index = arr.indexOf("a", 5);

console.log(index); // -1
```

### `fromIndex` 为负值

```js
var arr = ["a", "b", "c"];

// -1 表示从倒数第一个元素开始查找
var index = arr.indexOf("a", -1);

console.log(index); // -1
```

## 模拟实现

```js
Array.prototype.indexOf = function(searchElement, fromIndex) {
  var se = searchElement;
  var fi = parseInt(fromIndex) || 0;
  var arr = this;
  var len = arr.length;
  var i = 0;

  if (fi >= len) return -1;

  if (fi < 0) {
    i = len + fi;
  }

  for (; i < arr.length; i++) {
    if (arr[i] === se) {
      return i;
    }
  }
  return -1;
};
```

## 拓展

`indexOf` 只能得到查找元素在数组中首次出现位置的索引，那如果我想要得到该元素在数组中**所有出现位置的索引**呢？

下面是实现方法：

```js
/*
 *  返回查找元素在数组中所有的索引组成的数组，如果数组中不存在此元素，返回空数组。
 */
Array.prototype.allIndexOf = function(searchElement) {
  var arr = this;
  var se = searchElement;
  var arrIndex = [];
  var index = 0;

  for (var i = 0; i < arr.length; i++) {
    index = arr.indexOf(se, i);
    if (index === -1) {
      return [];
    }
    arrIndex.push(index);
    i = index;
  }
  return arrIndex;
};
```

- 测试

```js
var arr = [1, 2, 3, 2, 1];

console.log(arr.allIndexOf(1)); //  [0, 4]
console.log(arr.allIndexOf(9)); //  []
// 嗯，确认过眼神，是我想要的！
```
