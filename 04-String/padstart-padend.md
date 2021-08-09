---
title: padStart 和 padEnd
linktitle: padStart 和 padEnd
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: String
---

# 字符串补全方法

## padStart

padStart 可以在字符串的开头进行补全。

语法如下：

```js
str.padStart(targetLength [, padString])
```

padStart 会判断 str 的长度是否达到 targetLength 的值，如果等于或者大于 targetLength，则返回原字符串。

如果 str 的长度小于 targetLength，则用 padString 来补全。

最常见的需求就是，如果一个月份如果不超过 10 就在月份之前补一个 0

```js
'7'.padStart(2, 0); // "07"
```

## padEnd


## 相关文章

[JS字符串补全方法padStart()和padEnd()简介](https://www.zhangxinxu.com/wordpress/2018/07/js-padstart-padend/)