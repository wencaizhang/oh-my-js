# Array.prototype.entries()

## 描述

返回一个包含数组中每个索引的键值对的 Array Iterator 对象。

## 示例

```js
var arr = [ 'a', 'b', 'c' ];

var result = arr.entries();

result.next();
// {value: [0, "a"], done: false}

result.next();
// {value: [1, "b"], done: false}

result.next();
// {value: [2, "c"], done: false}

result.next();
// {value: undefined, done: true}

result.next();
// {value: undefined, done: true}
```