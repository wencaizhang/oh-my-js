---
title: find()
linktitle: find()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: Array ES6
---

## 描述

`find` 方法用于找出第一个符合条件的数组元素并返回，如果不存在就返回 `undefined`。

类似 [forEach](../02-Array-ES5/01-Array.prototype.forEach) 和 [map](../02-Array-ES5/01-Array.prototype.map)，find 方法也接收两个参数：一个函数和函数参数执行时的上下文环境。

不同之处在于，当函数参数返回值为 true 时，`find` 方法立即结束执行，不再继续遍历，并将使得函数参数返回值为 true 的元素作为 find 的返回值，这个元素就是“找到”的符合条件的元素。

如果直到遍历结束时函数参数总也不返回 true，那么说明 find 的返回值为 undefined ，也就说明数组中不存在符合条件的元素。


## 参数

参数 | 描述
--- | ---
callback | 数组元素依次执行的回调函数
thisValue | 指定 callback 执行的上下文环境，即 this 的值


## 示例

### 打印 callback 的参数 

```js
var arr = [ 'a', 'b', 'c' ];

arr.find(function(value, index, array) {
    console.log(value, index, array);
});

// a 0 ["a", "b", "c"]
// b 1 ["a", "b", "c"]
// c 2 ["a", "b", "c"]
```

### `find()` 的返回值

有符合条件的，返回该数组元素，没有符合条件的，返回 `undefined`

```js
var arr = [ 'a', 'b', 'c' ];

var result1 = arr.find(function(value, index, array) {
    return value == 'c'; 
});
console.log(result1); // "c"

var result2 = arr.find(function(value, index, array) {
    return value == 'xyz'; 
});
console.log(result2); // undefined
```

### 找到第一个符合条件的，方法立即结束执行

```js
var arr = [ 'a', 'b', 'b', 'c' ];

var result1 = arr.find(function(value, index, array) {
    console.log(value);
    return value == 'b'; 
});

// "a"
// "b"
console.log(result1); // "b"
```

### 指定 callback 执行时的 `this` 指向

```js
var ages = [ 10, 12, 26, 15 ];
var person = {name: 'John', age: 20};
var age = ages.find(function (value) {
    return value > this.age;
}, person);

console.log(age);  // 26
```


