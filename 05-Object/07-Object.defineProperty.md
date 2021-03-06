---
title: Object.defineProperty
linktitle: Object.defineProperty
toc: true
type: "docs"
date: 2019-05-05T00:00:00+01:00
draft: false
group: Object
---

::: tip
Vue.js@2.x 的响应式系统就是利用 Object.defineProperty 实现的，参考 [深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
:::

## 用法

这个方法在一个对象上定义一个新属性，或者修改一个已经存在的属性。并返回这个对象。

```js
Object.defineProperty(obj, prop, descriptor);
```

+ `obj`: 目标对象
+ `prop`: 要操作的属性
+ `descriptor`: 用于指定对象属性的特性，这些特性包括：
  - `value`: 属性的值，默认为 `undefined`
  - `writable`: 属性的值是否可以被重写，默认为 `true`
  - `get`: 获取属性值的时候触发的函数，默认为 undefined
  - `set`: 设置属性值的时候触发的函数，默认为 undefined
  - `configurable`: 是否可以删除目标属性或是否可以再次修改属性的特性，默认为 true
  - `enumerable`: 此属性是否可以被枚举（使用for...in或Object.keys()），默认为 true


## 示例

### 修改属性的 `value`

```js
var obj = { name: 'jack', age: 18 };

Object.defineProperty( obj, 'age', {
  value: 22
});

console.log( obj.age );  // 22
// age 属性已经被修改
```

如果对象不存在这个属性，就会创建这个属性

```js
var obj = { name: 'jack' };

Object.defineProperty( obj, 'age', {
  value: 22
});

console.log( obj );  // {name: "jack", age: 22}
```

### 修改属性的 `writable`

将 `writable` 设置为 `false` 之后，无法直接修改属性值，必须使用 `Object.defineProperty` 方法修改其值。

```js
var obj = { name: 'jack', age: 18 };

// 此时可以直接修改 age 属性
obj.age = 22;
console.log( obj.age );  // 22

// 现在将 writable 设置为 false
Object.defineProperty( obj, 'age', {
  writable: false
});

// 再次直接对属性赋值，不起作用，也不报错
obj.age = 18;
console.log( obj.age );  // 22

// 此时使用 Object.defineProperty 方法修改，修改成功
Object.defineProperty( obj, 'age', {
  value: 18
});
console.log( obj.age );  // 18

// 将 `writable` 恢复为 `true` 之后可以直接进行赋值
Object.defineProperty( obj, 'age', {
  writable: true
});

obj.age = 20;
console.log( obj.age );  // 20
```

## `enumerable`

`enumerable` 用来表示此属性是否可以被枚举，比如使用 `for in` 和 `Object.keys()` 时是否会被遍历。

```js
var obj = { name: 'jack', age: 18 };

for (k in obj) {
  console.log(k, obj[k]);
}
// name jack
// age 18

console.log( Object.keys(obj) );
// [ "name", "age" ]

console.log( Object.values(obj) );
// [ "jack", 18 ]

// 然后将 age 属性的 `enumerable` 设置为 `false`，就会发现 age 属性不会被遍历到

Object.defineProperty( obj, 'age', {
  enumerable: false
})

for (k in obj) {
  console.log(k, obj[k]);
}
// name jack

console.log( Object.keys(obj) );
// [ "name" ]

console.log( Object.values(obj) );
// [ "jack" ]
```

## set 和 get

先来看 get，`get` 方法会在获取 `age` 属性的时候执行，并将其返回值作为 `age` 属性的值。

```js
var obj = { name: 'jack', age: 18 };

Object.defineProperty( obj, 'age', {
  get: function () {
    return 'get age';
  }
})

console.log( obj.age );
// "get age"
```

再来看 set

```js
var obj = { name: 'jack', age: 18 };

Object.defineProperty( obj, 'age', {
  set: function ( newValue ) {
    console.log( 'newValue:', newValue )
  }
});

obj.age = 22;

console.log( 'age:', obj.age )

// newValue: 22
// age: undefined
```

set 方法接收一个参数，即将要给 `age` 设置的新值。

set 方法的返回值是最终 `age` 属性的值，如果 set 方法没有返回值，则为 undefined。

```js
var obj = { name: 'jack', age: 18 };

Object.defineProperty( obj, 'age', {
  set: function ( newValue ) {
    return newValue;
  }
});

obj.age = 22;

console.log( 'age:', obj.age )

// newValue: 22
// age: undefined
```

## 使一个对象只可读不可写

有 Vue.js 开发经验的都知道给 Vue 原型上挂载一个对象之后就可以直接在组件内部直接使用 `this` 访问到。

```js
// 挂载 axios
Vue.prototype.$http = axios

// 组件内通过 `this` 访问
this.$http.get('/api/something')
```

官方路由库 [`vue-router`](https://router.vuejs.org/zh/) 向 Vue 原型上挂载了 `$router` 和 `$route` 两个，但是不同之处是 `vue-router` 为了避免被人修改 `$router` 和 `$route` 的值，它使用了 `Object.defineProperty` 方法来限制对这个对象的写入。



[vue-router: install.js](https://github.com/vuejs/vue-router/blob/f597959b14887cf0535aa895b6325a2f9348c5cf/src/install.js#L38-L44)


```js
Object.defineProperty(Vue.prototype, '$router', {
  get () { return this._routerRoot._router }
})

Object.defineProperty(Vue.prototype, '$route', {
  get () { return this._routerRoot._route }
})
```

上面代码使用 `defineProperty` 的时候，只设置 `get` 参数，不设置 `set` 参数，这就导致无法直接对其进行修改。

我们来尝试一个例子：

```js
const obj = {
  name: 'zwc'
}

// 只有 get
Object.defineProperty(obj, 'age', {
  get () { return 18 }
})

// 修改 age 属性
obj.age = 22

console.log(obj.age)
// 结果仍然是 18
```