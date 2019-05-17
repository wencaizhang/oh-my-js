# Array.prototype.copyWithin()

## 描述

`copyWithin` 方法接收三个参数：target、start 和 end，这三个参数都是整数。

`copyWithin` 方法会浅复制数组的一部分（从起始索引 start 开始，到结束索引 end 之前结束，不包含结束索引），然后将这部分元素移动到同一数组中的索引是 target 的位置，并返回它。因此这个方法会修改当前数组，但是长度不变。

一句话总结：`copyWithin` 将数组的一部分元素移动到另一个位置。

## 示例

```js
var arr = [ 'a', 'b', 'c', 'd', 'e' ];
arr.copyWithin(0, 3, 4);
console.log(arr);
// ["d", "b", "c", "d", "e"]
// 被移动的元素，从索引 3 开始，到 4 之前结束（不包含）
// 将指定的元素移动到索引 0 的位置
```
