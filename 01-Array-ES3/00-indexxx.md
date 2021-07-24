---
title: ES3 数组方法总览
linktitle: ES3 数组方法总览
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: ES3 Array
---

| 名称                                      | 含义                                   | 影响和结果                           |
| ----------------------------------------- | -------------------------------------- | ---------------------------------------- |
| [concat](../01-array.prototype.concat/)   | 合并数组                               | **不修改原数组，返回新数组**             |
| [join](../02-array.prototype.join/)       | 指定一个分隔符，将数组元素拼接成字符串 | **不修改原数组，返回字符串**             |
| [push](../03-array.prototype.push/)       | 将一个元素**添加**到数组**末尾**       | 修改原数组，返回数组长度                 |
| [pop](../04-array.prototype.pop/)         | **删除**数组**最后一项**               | 修改原数组，返回被删除元素               |
| [shift](../05-array.prototype.shift/)     | **删除**数组**第一项**                 | 修改原数组，返回被删除元素               |
| [unshift](../06-array.prototype.unshift/) | 将一个元素**添加**到数组**开头**       | 修改原数组，返回数组长度                 |
| [slice](../07-array.prototype.slice/)     | 切割数组                               | **不修改原数组，返回一个浅拷贝的新数组** |
| [splice](../08-array.prototype.splice/)   | 在指定位置增加或删除一个或多个元素     | 修改原数组，返回由被删除元素组成的新数组 |
| [reverse](../09-array.prototype.reverse/) | 反转数组顺序                           | 修改原数组并返回                         |
| [sort](../10-array.prototype.sort/)       | 对数组排序，可以指定排序规则           | 修改原数组并返回                         |
