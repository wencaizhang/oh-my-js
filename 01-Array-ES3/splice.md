---
title: splice()
linktitle: splice()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: "ES3 Array"
---

## 描述

在指定索引处删除数组元素或者增加数组元素。因此，`splice()` 方法要比 `push()`，`pop()`，`shift()`，`unshift()` 更为强大和灵活，当然，也更复杂。

## 参数

### `start`

指定修改的开始位置。如果超出了数组的长度，则从数组末尾开始添加内容，如果是负值，则表示从数组末位开始的第几位。

若只使用 `start` 参数而不使用 `deleteCount`、`item`，如：`array.splice(start)`，表示删除 `[start, end]` 的元素。

### `deleteCount` （可选）

表示要移除的数组的元素的个数。如果 `deleteCount` 是 0，则不移除元素。这种情况下，至少应该添加一个新元素。如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素豆浆被删除（含第 `start` 位）。

如果 `deleteCount` 被省略，则相当于 `arr.lengtrh-start`。

### `item1, item2, ...` （可选）

要添加进数组的元素，从 `start` 位置开始，如果不指定，则 `splice` 将只删除数组元素。

## 返回值

返回由被删除的元素组成的一个数组。

如果只删除了一个元素，则返回只包含了一个元素的数组，如果没有删除元素，则返回空数组。

## 示例

`splice` 功能很强大，可以在指定位置增加或删除元素

- 删除

```js
var arr = [1, 2, 3];
arr.splice(0, 2);
// 从索引 0 开始删除 2 个元素（包含索引为 0 的元素）

console.log(arr);
//  [3]
```

- 增加

```js
var arr = [1, 2, 3];
arr.splice(0, 0, 4, 5);
// 如果不需要删除元素，将第二个参数指定为 0
// 从索引 0 开始删除 0 个元素，将元素 4 和 5 从索引为 0 的位置依次插入

console.log(arr);
// [4, 5, 1, 2, 3]
```

- 同时删除和增加

```js
var arr = [1, 2, 3];

arr.splice(1, 2, 4, 5); // [ 2, 3 ]

console.log(arr);
// [ 1, 4, 5 ]
// 从索引为 1 的位置开始删除 2 个元素，然后将 4 和 5 在索引为 1 处插入
```

## 边界情况

- 只有 `start`

```js
var arr = [1, 2, 3];

arr.splice(2); // [ 3 ]

console.log(arr); // [ 1, 2 ]
```

- `deleteCount` 为 0

```js
var arr = [1, 2, 3];

arr.splice(1, 0); // []

console.log(arr); // [ 1, 2, 3 ]
```

- `deleteCount` 大于 `start` 之后元素的总和

```js
var arr = [1, 2, 3, 4];

arr.splice(1, 4); // [ 2, 3, 4 ]

console.log(arr); // [ 1 ]
```
