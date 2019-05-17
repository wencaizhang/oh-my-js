# Array.prototype.values()

## 描述

返回一个包含数组中每个索引对应的值的 Array Iterator 对象。

## 示例

```js
var arr = [ 'a', 'b', 'c' ];

var result = arr.values();

result.next();
// {value: "a", done: false}

result.next();
// {value: "b", done: false}

result.next();
// {value: "c", done: false}

result.next();
// {value: undefined, done: true}

result.next();
// {value: undefined, done: true}
```