# Array.prototype.some()

## 描述

`some()` 方法对数组每一项运行给定函数 fn ，如果该函数对任意一项返回 true ，则 `some()` 方法返回 true，否则返回 false。

## 参数

| 参数    | 描述                                                |
| ------- | --------------------------------------------------- |
| fn      | `function` 类型，必需。数组中每个元素需要调用的函数 |
| context | 可选。执行回调时的上下文（this）                    |

fn 函数有三个参数，依次是：

1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 返回值

如果数组中存在使得给定函数 fn 返回 true 的元素，返回 true ，否则返回 false 。

## 示例

### 打印 fn 参数值

```js
var arr = ["a", "b", "c"];

arr.some(function(value, index, array) {
  console.log(value, index, array);
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

### 如果 fn 返回 true ，则 `some()` 立即返回 true。

```js
var arr = ["a", "b", "c"];

var some = arr.some(function(value, index, array) {
  console.log(value, index, array);
  return value === "b";
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]

console.log(some); //  true
```

### fn 返回值如果不是布尔值，则会默认被转换成布尔值

```js
var data = [0, 1, 2, 3];

var some = data.some(function(item) {
  console.log(item);
  return item;
});

//  0
//  1

console.log(some); //  true
```

## 模拟实现

```js
Array.prototype.some = function(fn, context) {
  var arr = this;
  var fn = fn;
  var context = context;

  for (var i = 0; i < arr.length; i++) {
    var bool = fn.call(context, arr[i], i, arr);
    if (!!bool) return true;
  }

  return false;
};
```
