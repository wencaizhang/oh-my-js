---
title: push()
linktitle: push()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: ES3 Array
---

## 描述

将一个或多个元素添加到数组的末尾，并返回新数组的长度（对原数组进行修改）

## 参数

| 参数     | 描述                                           |
| -------- | ---------------------------------------------- |
| elementN | 必需，个数为至少一个。被添加到数组末尾的元素。 |

## 返回值

新的 `length` 属性值。

## 示例

```js
var arr = [1, 2, 3];

var newLength1 = arr.push(4); // 4
var newLength2 = arr.push(5, 6); // 6
```
