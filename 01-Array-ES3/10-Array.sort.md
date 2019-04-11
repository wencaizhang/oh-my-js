---
title: Array.prototype.sort()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es3]
---

## 描述

对数组的元素进行排序，并返回数组，默认排序顺序是根据字符串 Unicode 码点。（修改原数组）

为了实现排序，`sort()` 方法会调用每个数组项的 `toString()` 方法，然后比较得到的字符串，以确定如何排序。

另外，`sort()` 可以接受一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。

## 参数

参数 | 描述
--- | ---
compareFunction | function 类型，可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为字符串的各个字符的 Unicode 位点进行排序

## 返回值

返回排序后的数组，原数组已经被排序后的数组代替。

## 示例

### 一维数组排序
+ 不指定排序方法

```js
var scores = [1, 10, 21, 2];
scores.sort();
console.log(scores);  // [ 1, 10, 2, 21 ]
// 10 在 2 之前，这是因为在 Unicode 指针顺序中"10"在"2"之前
```

+ 升序

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);  // [ 1, 2, 3, 4, 5 ]

```

+ 降序

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);  // [ 1, 2, 3, 4, 5 ]

```

### 二维数组排序

数组元素为对象，按照对象某个属性对其排序

#### 按照 `sortNo` 属性从小到大排序：
```js
var arr= [ 
  { 'sortNo': 2},
  { 'sortNo': 1},
  { 'sortNo': 5},
  { 'sortNo': 6},
  { 'sortNo': 7},
  { 'sortNo': 3},
  { 'sortNo': 9},
  { 'sortNo': 4},
  { 'sortNo': 0}
];

arr.sort(function(a, b){
  return a.sortNo - b.sortNo;
});

console.log(arr);
//输出结果
//{ 'sortNo': 0}
//{ 'sortNo': 1}
//{ 'sortNo': 2}
//{ 'sortNo': 3}
//{ 'sortNo': 4}
//{ 'sortNo': 5}
//{ 'sortNo': 6}
//{ 'sortNo': 7}
//{ 'sortNo': 9}
```

#### 多条件排序

按照 `sortNo` 属性从小到大排序，如果 `sortNo` 相同，则按照 `sortNo2` 从大到小排序：

```js
var arr= [ 
  { 'sortNo': 2, 'sortNo2': 3},
  { 'sortNo': 1, 'sortNo2': 3},
  { 'sortNo': 5, 'sortNo2': 3},
  { 'sortNo': 6, 'sortNo2': 3},
  { 'sortNo': 7, 'sortNo2': 3},
  { 'sortNo': 3, 'sortNo2': 4},
  { 'sortNo': 3, 'sortNo2': 2},
  { 'sortNo': 3, 'sortNo2': 1},
  { 'sortNo': 3, 'sortNo2': 3},
  { 'sortNo': 8, 'sortNo2': 3},
  { 'sortNo': 4, 'sortNo2': 1},
  { 'sortNo': 4, 'sortNo2': 2}
];

arr.sort(function( a, b ) {
  if (a.sortNo == b.sortNo) {
    return b.sortNo2 - a.sortNo2;
  }
  return a.sortNo - b.sortNo
});

console.log(arr);
// [
//  {sortNo: 1, sortNo2: 3}
//  {sortNo: 2, sortNo2: 3}
//  {sortNo: 3, sortNo2: 4}
//  {sortNo: 3, sortNo2: 3}
//  {sortNo: 3, sortNo2: 2}
//  {sortNo: 3, sortNo2: 1}
//  {sortNo: 4, sortNo2: 2}
//  {sortNo: 4, sortNo2: 1}
//  {sortNo: 5, sortNo2: 3}
//  {sortNo: 6, sortNo2: 3}
//  {sortNo: 7, sortNo2: 3}
//  {sortNo: 8, sortNo2: 3}
// ]

```