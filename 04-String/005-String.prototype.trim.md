# 去除字符串的头尾空格

## trim

`trim` 创建字符串的一个副本，并移除字符串**两端**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。

```js
var str = '  a b c  '
var newStr = str.trim()

console.log(str)  // "  a b c  "
console.log(newStr)  // "a b c"
```

## trimStart 和 trimLeft
`trimStart` 会创建字符串的一个副本，并移除字符串**左端（开头）**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。 `trimLeft` 是 `trimStart` 的别名。

```js
var str = '  a b c  '
var newStr1 = str.trimStart()
var newStr2 = str.trimLeft()

console.log(newStr1)  // "a b c  "
console.log(newStr2)  // "a b c  "
```

## trimEnd 和 trimRight

`trimRight` 创建字符串的一个副本，并移除字符串**右端（结尾）**的连续空白符，然后返回新字符串（并不会修改原字符串本身）。`trimRight` 是 `trimEnd` 的别名。

```js
var str = '  a b c  '
var newStr1 = str.trimEnd()
var newStr2 = str.trimRight()

console.log(newStr1)  // "  a b c"
console.log(newStr2)  // "  a b c"
```

[JavaScript trim函数大赏](https://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html)