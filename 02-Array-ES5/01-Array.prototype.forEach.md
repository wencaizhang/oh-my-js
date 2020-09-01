---
title: forEach()
linktitle: forEach()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false
group: Array ES5
---

## 描述

`forEach()` 方法对数组每一项运行给定函数 fn，无返回值。另外，还可以指定函数 fn 的上下文环境（`this`）。

## 参数

| 参数    | 描述                                                |
| ------- | --------------------------------------------------- |
| fn      | `function` 类型，必需。数组中每个元素需要调用的函数 |
| context | 可选。执行回调时的上下文（this）                    |

fn 函数支持 3 个参数，依次是：

1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 返回值

无

## 示例

### 打印 fn 的参数

```js
var arr = ["a", "b", "c"];

arr.forEach(function(value, index, array) {
  console.log(value, index, array);
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

### 指定 fn 中 this 的值

```js
var database = {
  users: ["张含韵", "江一燕", "李小璐"],
  sendEmail: function(user) {
    if (this.isValidUser(user)) {
      console.log("你好，" + user);
    } else {
      console.log("抱歉，" + user + "，你不是本家人");
    }
  },
  isValidUser: function(user) {
    return /^张/.test(user);
  }
};

// 给每个人法邮件
database.users.forEach(
  // database.users 中人遍历
  database.sendEmail, // 发送邮件
  database // 使用 database 代替 sendEmail 的this
);

// 结果：
// 你好，张含韵
// 抱歉，江一燕，你不是本家人
// 抱歉，李小璐，你不是本家
```

### `forEach` 不会遍历被删除的元素

```js
var arr = ["a", "b", "c"];

delete arr[1];

console.log(arr); // [ "a", , "c" ]
console.log(arr.length); // 3

arr.forEach(function(value, index) {
  console.log(value, index);
});

// a 0
// c 2
```
