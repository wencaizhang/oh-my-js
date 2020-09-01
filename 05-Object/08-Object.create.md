---
title: Object.create()
linktitle: Object.create()
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: Object
---

## 描述

`Object.create()` 方法用于创建一个新对象，并且将新对象的 `__proto__` 指向一个现有的对象。

`Object.create()` 接收两个参数，第一个参数就是新对象的原型对象，第二个参数（可选）是一个用于向新建对象自身添加属性的**对象**，**对象的格式对应 [Object.defineProperty()](./07-Object.defineProperty.md) 的第二个参数**。

`Object.create()` 返回值是新创建的已经指定了原型和属性的对象。

::: danger 注意
第二个参数可以不传，但不能为 `null` 或者**非原始包装对象**，否则会抛出 `TypeError` 异常。
:::

## 例子

### 利用 `Object.create()` 实现继承

关于原型，我们应该知道函数具有一个 `prototype` 属性，这个属性值是一个对象，它默认有一个 `constructor` 属性，指向这个函数本身，因此需要在子类继承父类之后，将子类 `prototype.constructor` 指向子类本身。

```js {10,15,18}
var Person = function () {
  this.sex = 'all'
}
Person.prototype = {
  eat: function () { console.log('eat!') }
};

var Man = function () {
  // 继承 Person 构造函数内部（非prototype）的属性
  Person.call(this)
  this.sex = 'man'
}

// 子类继承父类
Man.prototype = Object.create(Person.prototype)

// 修正 constructor 指向
Man.prototype.constructor = Man
```

可以通过打印来验证我们的想法：

```js
console.log(Man.prototype === Person.prototype)  // false
console.log(Man.prototype.__proto__ === Person.prototype)  // true

console.log(Man.prototype.constructor === Man)

var p1 = new Person()
var m1 = new Man()
console.log(m1.eat === p1.eat)  // true

Person.prototype.play = function () {
  console.log('play')
}

p1.play()  // play
m1.play()  // play
```

### 继承多个对象


## 参考链接

[包装对象](https://javascript.ruanyifeng.com/stdlib/wrapper.html)