---
title: values()
linktitle: values()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: Array ES6
---

## 描述

返回一个包含数组中每个索引对应的值的 Array Iterator 对象。

## 示例

```js
var arr = [ 'a', 'b', 'c' ];

var result = arr.values();

result.next();
// {value: "a", done: false}

result.next();
// {value: "b", done: false}

result.next();
// {value: "c", done: false}

result.next();
// {value: undefined, done: true}

result.next();
// {value: undefined, done: true}
```