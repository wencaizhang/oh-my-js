---
title: ES5 新增数组方法总览
linktitle: ES5 新增数组方法总览
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: Array ES5
---

# ES5 新增数组方法总览

ES5 新增了一些数组方法，灵活运用这些方法可以让我们少些很多代码，而且可以在**一定程度上替代** underscore/lodash 等工具库。

+ [`forEach`](./01-Array.prototype.forEach.md): 遍历数组一个数组
+ [`map`](./02-Array.prototype.map.md): 将数组映射为一个新数组
+ [`filter`](./03-Array.prototype.filter.md): 过滤数组，找出符合某种条件的元素，将其组合成新数组
+ [`some`](./04-Array.prototype.some.md): 判断是否**一个或多个**的数组元素符合某种条件的
+ [`every`](./05-Array.prototype.every.md): 判断是否**所有**的数组元素都符合某种条件
+ [`indexOf`](./06-Array.prototype.indexOf.md): 得到一个值在数组中**首次**出现的索引
+ [`lastIndexOf`](./07-Array.prototype.lastIndexOf.md): 得到一个值在数组中**最后一次**出现的索引
+ [`reduce`](./08-Array.prototype.reduce.md): 对一个数组进行迭代递归操作
+ [`reduceRight`](./09-Array.prototype.reduceRight.md): 作用同 `reduce`，但是是从数组最后一项向第一项进行遍历

其中有一部分方法有一些相同之处：相同的参数。

第一个参数是一个函数，第二个参数是第一个参数函数执行时的上下文环境，即 `this` 指向，第二个参数非必需。

而且第一个参数函数有三个参数：数组元素、元素索引和数组本身。




## 注意

1. 这些方法遍历时会跳过值为空的元素。

这里的“值为空”不是指 `null` 或 `undefined`，而是使用构造函数创建且未指定元素值的数组元素。

```js
var arr = new Array(3);
console.log(arr);
```

![值为空](./imgs/array-empty.png)

2. 在遍历过程中删除元素，回导致遍历提前结束

第一段代码：分别打印：1，2，3，4，5
```js
var arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index) {
  console.log(item)
})
```

第二段代码：分别打印：1，2，4，5

```js
var arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index) {
  console.log(item)
  if (index === 1) {
    arr.splice(index, 1);
  }
})
```

第三段代码：也是分别打印：1，2，4，5

```js
var arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index) {
  console.log(item)
  if (index === 1) {
    arr.splice(0, 1);
  }
})
```
