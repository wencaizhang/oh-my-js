---
title: includes
linktitle: includes
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: String
---

## 基本使用

判断字符串中是否包含另外一个字符串。

```js
"JavaScript".includes("Java"); // true
"JavaScript".includes("java"); // false

"Java".includes("JavaScript"); // false
```

## 深入研究

如果参数不是字符串呢？

```js
"123".includes(123); // true

"[object Object]".includes({}); // true

"".includes([]); // true

"true".includes(true); // true

"null".includes(null); // true

"NaN".includes(NaN); // true

"undefined".includes(); // true
```

相信你看了上面的几个例子，会和我一样做出一个大胆猜测： `includes` 方法内部会首先对参数进行字符串转化的操作，因为


将参数转化为字符串，实际上是调用了构造函数 `String()` 方法：

```js
String({});
// "[object Object]"

String([]);
// ""

String(true);
// "true"

String(333);
// "333"

String(null);
// "null"

String(NaN);
// "NaN"

String(undefined);
// "undefined"

```

## 题外话

其实一开始我第一反应不是 `String()` 方法，而是 `toString` 方法，每种变量类型都拥有 `toString` 方法，但是有两个例外：`undefined` 和 `null`

```js
null.toString()
// Uncaught TypeError: Cannot read property 'toString' of null

// undefined.toString()
// Uncaught TypeError: Cannot read property 'toString' of undefined
```