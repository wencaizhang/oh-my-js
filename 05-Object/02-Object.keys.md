# Object.keys()

## 描述

ES6 引入 `Object.keys` 方法，它返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

## 参数

参数 | 描述
--- | ---
obj | Object 类型，必需。要处理的对象


## 返回值

一个表示给定对象的所有可枚举属性的字符串数组

## 示例

### 0. 基本使用

```js
var arr = {
    name: 'jack',
    age: 20,
    sex: 'man'
};

var keys = Object.keys(arr);  // ["name", "age", "sex"] 
```

### 1. 简单数组

```js
var arr = [ 'a', 'b', 'c' ];
console.log( Object.keys(arr) );  // [ '0', '1', '2' ]
```

### 2. 类数组对象

```js
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log( Object.keys(obj) );  // [ '0', '1', '2' ]
```

### 3. 随机索引的类数组对象

注意顺序，按照索引从小到大进行遍历。

```js
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log( Object.keys(anObj) );  // [ '2', '7', '100' ]
```

### 4. 包含不可枚举属性

```js
var obj = Object.create({}, {
    getFoo: {
        value: function () { return this.foo; }
    }
});

obj.foo = 1;

console.log( Object.keys(obj) );  // [ 'foo' ]
```

### 5. 异常处理

ES5 中，如果参数是原始值，会抛出异常。ES6 中则会强制转化为一个对象。

```js
Object.keys( 'foo' );  // TypeError: "foo" is not an object (ES5 code)

Object.keys( 'foo' );  // [ '0', '1', '2' ]
```
