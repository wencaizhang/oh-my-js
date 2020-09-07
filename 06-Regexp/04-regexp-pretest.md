---
title: 正则表达式预查
linktitle: 正则表达式预查
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: Regexp
---

## 预查格式

`(?=pattern)`

## 上代码

通俗点说，就是 **预查不消耗字符串**，仅仅是用来确认是否匹配成功。

```js
var str = "abc";
var reg1 = /a(?=b)bc/;
var reg2 = /a(b)bc/;

console.log(reg1.test(str));  // true
console.log(reg2.test(str));  // false
```

`reg1` 中的预查 `(?=b)` 并没有消耗掉匹配到的字符 `b`，而是确认 `a` 后面的字符是 `b`，因此 `a` 后面的字符 `bc` 和 预查后面的正则 `bc` 匹配成功，最后结果为 `true`。

而 `reg2` 中的 `(b)` 将 `str` 中的 `b` 消耗掉，`str` 中只剩一个字符 `c`，无法与 `reg2` 中 `(b)` 后面的 `bc` 相匹配，最后结果为 `false`。

## 示例

### 千分制表示一个数字

如何给一串数字用千分制表示？比如 `99999999999` 变成 `99, 999, 999, 999`。

> `$&` 表示与正则表达式相匹配的字符

```js
var reg = /\d{1,3}(?=(\d{3})+$)/g;
var f = '99999999999'.replace(reg, '$&, ');
console.log(f);  // 99, 999, 999, 999
```

正则表达式中的 `$` 很重要，它保证了每一个匹配到的字符串后面都是三个数字。如果没有 `$`，会怎样？

```js
var reg = /\d{1,3}(?=(\d{3})+)/g;
var f = '99999999999'.replace(reg, '$&, ');
console.log(f);  // 999, 999, 99, 999
```