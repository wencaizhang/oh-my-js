---
title: search()
linktitle: search()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: String
---

## 描述

检测字符串中是否含有与 regexp 相匹配的文本。类似于 `Regexp.prototype.test` 方法。

## 参数

参数 | 描述
---|---
regexp | 必需。如果传入一个非正则表达式，则会使用 `new RegExp()` 将其隐式转换为正则表达式对象

## 返回值

如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引。否则，返回 `-1`

## 示例

```js
var reg = /java/i;

'javascript'.search(reg);  // 0

'learn java'.search(reg);  // 6

'ECMAScript'.search(reg);  // -1
```