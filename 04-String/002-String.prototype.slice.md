# String.prototype.slice

slice() 方法用于从字符串中切割出一部分，它接收两个参数：切割范围的起始索引和结束索引。

例如：

```js
var str = "github"

var newStr = str.slice(1, 2);
console.log(str);    // "github"
console.log(newStr); // "i"
```

通过结果可以看出两点：

1. 此方法不修改原始变量，需要定义新变量接收其返回值
2. 切割范围包含起始索引，不包含结束索引

再来看第二个列子，省略结束索引参数：

```js
var str = "github"

var newStr = str.slice(1);
console.log(newStr); // "ithub"
```

第三个例子

```js
var str = "github"

var newStr = str.slice(-3);
console.log(newStr); // "hub"
```

第四个例子

```js
var str = "github"

var newStr = str.slice(-3);
console.log(newStr); // "hub"
```




```js
var str = "github"

var newStr = str.slice();
console.log(newStr); // "github"
```
