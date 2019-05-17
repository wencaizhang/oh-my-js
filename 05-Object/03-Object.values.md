# Object.values()

## 描述

ES6 引入 `Object.values` 方法，它返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值

## 参数

参数 | 描述
--- | ---
obj | Object 类型，必需。要处理的对象


## 返回值

数组类型

## 示例

### 1. 普通对象

```js
var obj = { foo: 'bar', boo: 123 };
console.log( Object.values(obj) ); // [ 'bar', 123 ]
```

### 2. 类数组对象

```js
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log( Object.values(obj) );  // [ 'a', 'b', 'c' ]
```

### 3. 随机索引的类数组对象

```js
var obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log( Object.values(obj) );  // [ 'b', 'c', 'a' ]
```

### 4. 

### 5. 异常

```js
Object.values( 'foo' );  // [ 'f', 'o', 'o' ] 
```
