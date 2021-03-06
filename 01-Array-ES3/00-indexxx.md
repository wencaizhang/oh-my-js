---
title: ES3 数组方法总览
linktitle: ES3 数组方法总览
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: ES3 Array
---


| 名称                                       | 含义                                   | 是否修改原数组 | 返回值 |
| ------------------------------------------ | -------------------------------------- | -------------- | --- |
| [concat](../01-array.prototype.concat/)   | 合并数组                               | **不修改**           | 新数组 |
| [join](../02-array.prototype.join/)       | 指定一个分隔符，将数组元素拼接成字符串      | **不修改**         | 字符串 |
| [push](../03-array.prototype.push/)       | 将一个元素**添加**到数组**末尾**       | 修改           | 新数组的长度 |
| [pop](../04-array.prototype.pop/)         | **删除**数组**最后一项**               | 修改           | 被删除的元素 |
| [shift](../05-array.prototype.shift/)     | **删除**数组**第一项**                 | 修改           | 被删除的元素 |
| [unshift](../06-array.prototype.unshift/) | 将一个元素**添加**到数组**开头**       | 修改           | 新数组的长度
| [slice](../07-array.prototype.slice/)     | 切割数组                               | **不修改**   | 切割出来的新数组 |
| [splice](../08-array.prototype.splice/)   | 在指定位置增加或删除一个或多个元素     | 修改           | 情况复杂，一般不使用返回值 |
| [reverse](../09-array.prototype.reverse/) | 反转数组顺序                           | 修改           | 修改后的数组 |
| [sort](../10-array.prototype.sort/)       | 对数组排序，可以指定排序规则           | 修改           | 修改后的数组 |
