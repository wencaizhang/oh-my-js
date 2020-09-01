---
title: split
linktitle: split
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: String
---

## 描述

把一个字符串或者一个正则表达式当做分隔符，把一个字符串分割成一个数组，并返回这个数组。（不会改变原字符串）

它和 `Array.prototype.join()` 的操作是相反的。

## 参数

| 参数   | 描述                                                                                         |
| ------ | -------------------------------------------------------------------------------------------- |
| regexp | 分隔符，必需。如果传入一个非正则表达式，则会使用 `new RegExp()` 将其隐式转换为正则表达式对象 |

## 示例

### 例子 1

```js
var str = "a:b:c:d";
var reg = /:/;
// 以英文冒号: 为分隔符

str.split(reg); // ["a", "b", "c", "d"]
```

### 例子 2

```js
var str = "hello world";
var reg = /\s/;
// 以空格为分隔符

str.split(reg); // [ "hello", "world" ]
```

### 例子 3: 实例-转化查询字符串为 json 格式

示例网址：[https://www.baidu.com/s?ie=UTF-8&wd=JavaScript](https://www.baidu.com/s?ie=UTF-8&wd=JavaScript)，在这个页面指向下面代码会得到 url 中 JSON 格式的参数。

```js{6,8,12}
function getParams(url) {
  if (!url || typeof url !== "string") {
    return {};
  }
  // 得到 ? 后面的查询字符串
  var qs = url.split("?")[1];
  // 通过 & 分隔不同的参数
  var qsArr = qs.split("&");
  var json = {};
  qsArr.forEach(function(item) {
    // 通过 = 分隔参数的键名和键值
    var temp = item.split("=");
    json[temp[0]] = temp[1];
  });
  return json;
}

var url = "https://www.baidu.com/s?ie=UTF-8&wd=JavaScript";
getParams(url); // {ie: "UTF-8", wd: "JavaScript"}
```
