# Array.of()

## 描述

`Array.of` 方法用于将一组值转换为数组。基本可以用来替代 `Array()` 或者 `new Array()`，并且不存在由于参数不同而导致的重载。

那么，使用构造函数来创建数组有什么问题呢？请看例子：

```js
const arr1 = new Array(3);
const arr2 = new Array(3, 4);
const arr3 = new Array('a');

console.log(arr1);  // [empty x 3]
console.log(arr2);  // [3, 4]
console.log(arr3);  // ["a"]
```

可以总结一下：

1. 如果只有一个参数，且参数为 Number 类型，则会得到一个所有元素都为“空”的数组，数组长度等于参数的值；
2. 除了第一种情况之外，都会返回一个把参数当做元素的数组。

ps：第一种情况下得到的元素为“空”，这个空不是 `null` 或者 `undefined`，而是 `empty`。另外如果使用 `forEach` 和 `map` 等方法进行遍历，会跳过这些“空”元素。

`Array.of` 方法相当于是第二种情况，永远都是将参数当做数组元素来处理。

## 参数

参数 | 描述
--- | ---
arguments | 任意值，不限个数。作为数组的元素。


## 返回值

返回由参数值组成的数组。如果没有参数，就返回一个空数组。


## 示例

```js
Array.of();  // []

Array.of(undefined); // [ undefined ]

Array.of(1);  // [ 1 ]

Array.of(1, 2);  // [ 1, 2 ]
```



## 模拟实现 

```js
if (!Array.of) {
    function Array.of () {
        return [].slice.call(arguments);
    }
}
```
