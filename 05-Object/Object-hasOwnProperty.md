---
title: hasOwnProperty()
linktitle: hasOwnProperty()
toc: true
type: "docs"
date: "2019-05-05T00:00:00+01:00"
draft: false


group: Object
---

## 描述

JavaScript 对象既可以有自己的属性，也可以从原型继承。通过 `hasOwnProperty` 可以区分继承属性和非继承属性。

## 参数

参数 | 描述
--- | ---
prop | String 类型，必需。要检测的属性名


## 返回值

布尔值，对象自身是否拥有被检测的属性。

## 示例

### 判断自身属性 prop 是否存在

```js
var obj = new Object();
obj.prop = 'ok';

function changeObj () {
  obj.newProp = obj.prop;
  delete obj.prop;
}

obj.hasOwnProperty('prop');  // true

changeObj();
obj.hasOwnProperty('prop');  // false
```

### 区分自身属性和继承属性

```js
var obj = new Object();
obj.prop = 'ok';

obj.hasOwnProperty('prop');  // true
obj.hasOwnProperty('toString');  // false
obj.hasOwnProperty('hasOwnProperty');  // false
```

### 在遍历一个对象所有自身属性时使用

注意：`for...in` 循环只会遍历可枚举属性

```js
var obj = new Object();
obj.prop = 'ok';
Object.prototype.name = 'name';

for (var k in obj) {
  if (obj.hasOwnProperty(k)) {
    console.log('hasOwnProperty: ', k);
  } else {
    console.log('Not hasOwnProperty: ', k);
  }
}
```
### `hasOwnProperty` 被改写

```js
var obj = {
  hasOwnProperty: function () {
    return false;
  },
  prop: 'ok'
};

obj.hasOwnProperty('prop');  // 永远都返回 false

// 为避免这种情况，可以使用 Object 原型链上的 hasOwnProperty 属性来判断
Object.prototype.hasOwnProperty.call(obj, 'prop');
```
