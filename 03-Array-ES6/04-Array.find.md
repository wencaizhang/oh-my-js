---
title: Array.prototype.find()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es6]
---

## 描述

`find` 方法用于找出第一个符合条件的数组元素。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找到第一个返回值为 `true` 的元素，然后返回该元素。如果没有符合条件的元素，则返回 `undefined`。


## 参数

参数 | 描述
--- | ---
callback | 数组元素依次执行的回调函数
thisValue | 指定 callback 执行的上下文环境，即 this 的值


## 返回值

第一个符合条件的数组元素

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


