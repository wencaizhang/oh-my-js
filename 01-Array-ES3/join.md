---
title: join()
linktitle: join()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: ES3 Array
---

## 描述

所有的数组元素都被转化成字符串，再用一个分隔符将这些字符串连接起来。如果元素是 `undefined` 或者 `null`，则会被转换成空字符串。

## 参数

| 参数      | 描述                                                    |
| --------- | ------------------------------------------------------- |
| separator | 可选。 指定要选的分隔符，如果省略，则使用逗号为分隔符。 |

## 返回值

一个字符串

## 示例

### （1）数组元素为基本类型

```js
var names = ["李白", "杜甫", "苏轼"];

names.join(); // "李白,杜甫,苏轼"

names.join("、"); // "李白、杜甫、苏轼"
```

### （2）数组元素为数组对象

```js
var arr = [1, 2, [3, 4]];

arr.join(); // "1,2,3,4"

arr.join("+"); // "1+2+3,4"
```

### （3）数组元素为对象

```js
var arr = [1, 2, { name: "zwc" }];

arr.join(); // "1,2,[object Object]"
```

### （4）小结

实际上 `join()` 方法是对数组中每一项元素都进行了 `toString()` 操作转换成字符串之后进行的拼接。

`undefined` 和 `null` 执行 `toString()` 则会报错，因此将其转化为空字符串

```js
({ type: "object" }.toString()); // "[object Object]"

[3, 4].toString(); // "3,4"

true.toString(); // "true"

(function() {
  console.log("hello");
}.toString()); //  "function () { console.log('hello') }"
```

## 模拟实现

```js
/*
 *  模拟原生 Array.join()
 */
Array.prototype.join = function() {
  var sep = (arguments && arguments[0]) || ",";
  var str = "";

  for (var i = 0; i < this.length; i++) {
    var item = this[i];

    item === undefined || null ? "" : item;

    str += sep + item.toString();
  }
  return str.replace(sep, "");
};
```
