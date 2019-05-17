# Array.prototype.reduce()

> reduce: 减少，缩小。但是 `reduce()` 方法并无此含义，而是“迭代，递归”。

## 描述

`reduce()` 方法从左向右迭代数组所有项，构建一个最终返回的值。

`reduce()` 方法接收两个参数：一个在每一项上调用的函数和（可选）作为迭代基础的初始值。

## 参数

| 参数         | 描述                                   |
| ------------ | -------------------------------------- |
| fn           | 迭代时执行的函数                       |
| initialValue | 可选。当做初次调用 fn 的第一个参数值。 |

fn 有 4 个参数：

1. 之前值，initialValue 。若缺省 initialValue ，则使用数组第一个元素作为初始值。
2. 当前值，若指定 initialValue ，当前值为数组第一个元素，否则使用数组第二个元素。
3. 索引值，当前值的索引
4. 调用 `reduce()` 的数组

## 返回值

数组迭代执行 fn 完毕，最后一次执行 fn 的返回值。

## 示例

### 不指定 initialValue

```js
var nums = [0, 1, 2, 3, 4];
var sum = nums.reduce(function(previous, current, index, array) {
  console.log(previous, current, index, array, previous + current);
  return previous + current;
});

console.log(sum); // 10
```

函数 fn 被执行 4 次， 每次的参数和返回值如下：

| previous | current | index | array | 返回值          |
| -------- | ------- | ----- | ----- | --------------- |
| 第一次   | 0       | 1     | 1     | [0, 1, 2, 3, 4] | 1 |
| 第二次   | 1       | 2     | 2     | [0, 1, 2, 3, 4] | 3 |
| 第三次   | 3       | 3     | 3     | [0, 1, 2, 3, 4] | 6 |
| 第四次   | 6       | 4     | 4     | [0, 1, 2, 3, 4] | 10 |

### 指定 initialValue

```js
var nums = [0, 1, 2, 3, 4];
var sum = nums.reduce(function(previous, current, index, array) {
  console.log(previous, current, index, array, previous + current);
  return previous + current;
}, 100);

console.log(sum); // 110
```

函数 fn 被执行 5 次， 每次的参数和返回值如下：

| previous | current | index | array | 返回值          |
| -------- | ------- | ----- | ----- | --------------- |
| 第一次   | 100     | 0     | 0     | [0, 1, 2, 3, 4] | 100 |
| 第二次   | 100     | 1     | 1     | [0, 1, 2, 3, 4] | 101 |
| 第三次   | 101     | 2     | 2     | [0, 1, 2, 3, 4] | 103 |
| 第四次   | 103     | 3     | 3     | [0, 1, 2, 3, 4] | 106 |
| 第五次   | 106     | 4     | 4     | [0, 1, 2, 3, 4] | 110 |

## 模拟实现

```js
// TODO
```
