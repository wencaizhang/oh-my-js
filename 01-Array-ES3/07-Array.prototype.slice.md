# Array.prototype.slice()

## 描述

对数组实例的部分元素进行**浅拷贝**，拷贝的范围由参数 `begin` 和 `end` 决定，不会修改原数组。

既然是浅拷贝，那么：

- 如果该元素是个对象引用（不是实际的对象）， `slice` 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。

- 对于字符串、数字和布尔值来说（不是 `String`、`Number` 和 `Boolean` 对象），`slice` 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或者数字或者布尔值，将不会影响另一个数组。

- 如果向两个数组中任一一个数组中添加了新元素，则另一个不会受到影响。

## 参数

### `begin`（可选）

从该索引处开始提取原数组中的元素。如果该参数为负数，则表示从原数组中的倒数第几个开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。如果省略 `begin` ，则 `slice` 从索引 0 开始。

### `end` （可选）

在该索引处结束提取原数组元素，`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）

`slice(1, 4)` 提取原数组中的第二个元素开始知道第四个元素的所有元素（索引为 1,2,3 的元素）

如果该参数为负数，则它表示在原数组中的倒数第几个元素结束抽取。`slice(-2, -1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。

如果 `end` 大于数组长度， `slice` 也会一直提取到原数组末尾。

## 返回值

返回数组类型的切割结果


## 示例

- 省略 `begin` 和 `end`

```js
var arr = [1, 2, 3];

var newArr = arr.slice(); // [ 1, 2, 3 ]

arr.push(4);

console.log(arr); // [ 1, 2, 3, 4 ]
console.log(newArr); // [ 1, 2, 3 ]
```

## 其他用法

- 数组浅拷贝

```js
var arr = [1, 2, 3];
var newArr = arr.slice();
console.log(newArr); // [1, 2, 3]

// 修改原数组和新数组，相互不影响
arr.push(4);
newArr.push(5);

console.log(arr); //  [1, 2, 3, 4]
console.log(newArr); //  [1, 2, 3, 5]
```

- 将类数组对象转化为数组

```js
// 转化元素
Array.prototype.slice.call(document.querySelectorAll("div"));

// 或者使用简单的写法
[].slice.call(document.querySelectorAll("div"));

// 转化函数的参数列表
function fn() {
  var args = arguments;
  var arr = Array.prototype.slice.call(args);
  console.log(args);
  console.log(arr);
}
fn(1, 2, 3);
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// [1, 2, 3]
```
