# Object.assign()

## 描述

ES6 引入 `Object.assign` 方法，它用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。

## 参数

第一个参数是目标对象，后面的参数都是源对象。


## 返回值

合并之后的目标对象。

## 示例

### 0. 基本使用

```js
const target = { a: 1 };

const source1 = { a: 2, b: 2, c: 2 };
const source2 = { b: 3, c: 3, d: 3 };

Object.assign(target, source1, source2);

console.log(target);  // {a: 2, b: 3, c: 3, d: 3}
// 可以看到对于同名属性的处理是，后面的
```

### 1. 同名属性后面覆盖前面

```js
const target = { a: 1, b: 1 };

const source1 = { b: 2 , c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log(target);  // {a: 1, b: 2, c: 3}
```

### 2. 只有一个参数

只有一个参数，直接返回该参数

```js
const obj = { a: 1 };
Object.assign(obj) === obj;  // true
```

如果该参数不是对象，则会先转成对象，然后返回。

```js
typeof Object.assign(2);  // "object"
```

参数是 `undefined` 或 `null`，会报错。

```js
Object.assign(undefined);  // 报错
Object.assign(null);  // 报错
```

### 3. 源对象不是 Object 类型

如果源对象不是 Object 类型，会先将其转换为对象，如果无法转换，则跳过。

因此，`undefined` 和 `null` 不会报错，数字和布尔值也不会报错，会直接跳过，无任何效果。

而字符串会以数组形式拷贝到目标对象。

```js
Object.assign({}, undefined);  // {}
Object.assign({}, null);  // {}
Object.assign({}, 1);  // {}
Object.assign({}, true);  // {}
Object.assign({}, 'abcd');  // {0: "a", 1: "b", 2: "c", 3: "d"}
Object.assign({}, { a: 1 });  // { a: 1 }
```

### 4. assign() 是浅拷贝

如果源对象的某个属性值是对象，那么目标对象拷贝得到的是这个对象的引用。

此属性发生任何变化，都会反映到目标对象上。

```js
const obj = { 
    person: { name: 'jack' } 
};
const obj2 = Object.assign({}, obj);

obj.person.name = 'tom';
console.log(obj2.person.name);  // "tom"
```

### 5. 数组的处理

Object.assign 可以用来处理数组，但是会把数组视为对象。

```js
Object.assign([1, 2, 3], [4, 5]);  // [4, 5, 3]
```