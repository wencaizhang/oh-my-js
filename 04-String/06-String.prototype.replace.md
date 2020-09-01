---
title: replace()
linktitle: replace()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: String
---

## 描述

`replace` 方法接收两个参数，第一个参数在字符串中匹配到的内容会被第二个参数替换掉。

`replace` 方法不修改字符串本身，而只是返回一个新的替换后的字符串。

## 参数

| 参数   | 描述                                                                                 |
| ------ | ------------------------------------------------------------------------------------ |
| regexp | 必需。如果传入一个非正则表达式，则会使用 `new RegExp()` 将其隐式转换为正则表达式对象 |

## 示例

### 最简单的替换

```js
var str = 'aabb';
str.replace('a', 'x');
// 'xabb' 只有第一个字母 a 被替换为字母 x
```

### 第一个参数是正则

```js
const time = '2019-04-01 13:10:10';
const date = new Date(time.replace(/-/g, '/'));
```

### 两个参数都是正则

将手机号码中间四位数字替换为星号 `*`.
```js
var str = '18012345678';
str.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
// 180****5678
```

### 第二个参数是函数

当第二个参数是函数时，这个函数会当被当做迭代器使用，它接收的参数分别是：

1. 匹配到的字符串
1. `$1`: 正则表达式分组内容，没有分组则没有该参数
1. `$2`: 第二个分组
1. ...更多的分组，如果有的话
1. 匹配项在字符串中的 index
1. 原字符串

这个方法可以用于获取查询字符串中的参数

```js
// 假设 url 如下
// https://www.baidu.com/s?ie=UTF-8&wd=regexp
// 可以使用 window.location.search.slice(1) 来获取查询字符串
var querystring = 'ie=UTF-8&wd=regexp';
var params = parse(querystring);
console.log(params);
// {ie: "UTF-8", wd: "regexp"}

function parse (querystring) {
  var querystring = querystring || '';
  // 1. 参数的键名和键值都不包含=&这两个符号
  // 2. 键值可能为空
  var reg = /([^=&]+)=([^=&]*)/ig;
  var json = {};

  querystring.replace(reg, function (match, $1, $2) {
    var args = [].slice.call(arguments);
    console.log(args); // 打印参数
    json[$1] = $2
  })
  return json;
}
// ["ie=UTF-8", "ie", "UTF-8", 0, "ie=UTF-8&wd=regexp"]
// ["wd=regexp", "wd", "regexp", 9, "ie=UTF-8&wd=regexp"]
```
