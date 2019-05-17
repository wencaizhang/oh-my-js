# Array.isArray()

## 描述

`Array.isArray()` 方法用于确定一个值是否为 `Array` 类型。

注意：`Array.isArray()` 方法只能由构造函数 `Array` 调用，而数组实例无法调用。

ps：[严格判断 JavaScript 对象是否为数组](http://web.mit.edu/jwalden/www/isArray.html)

## 参数

| 参数  | 描述         |
| ----- | ------------ |
| value | 需要检测的值 |

## 返回值

如果被检测的值是 `Array` 类型，返回 true ，否则返回 false 。

## 示例

```js
Array.isArray([]); // true
Array.isArray([1]); // true
Array.isArray(new Array()); // true
Array.isArray(Array.prototype); // true

Array.isArray(); // false
Array.isArray({}); // false
Array.isArray(null); // false
Array.isArray(undefined); // false
Array.isArray(12); // false
Array.isArray(true); // false
```

## 模拟实现

```js
Array.isArray = function(value) {
  return Object.prototype.toString.call(value) === "[Object Array]";
};
```
