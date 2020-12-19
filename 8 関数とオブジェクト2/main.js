//コンストラクター関数
//新しくオブジェクトを生成するためのひな型
//new演算子を使用する
//const obj = new A(); →インスタンス化

//prototype
//→オブジェクトに存在する特別なプロパティ
//ReactだとpropTypesがprototypeプロパティ

//頭文字は大文字
function Person(name, age) {
   this.name = name;
   this.age = age;
   this.hello = function() {
       console.log('hello ' + this.name);
   }
}

// Person.prototype.hello = function() {
//     console.log('hello ' + this.name);
// }

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 20);
const sun = new Person('Sun', 22);

bob.hello();
tom.hello();
sun.hello();

//new演算子
//→コンストラクター関数からインスタンスを生成するために使用する演算子

function F(a, b) {
    this.a = a;
    this.b = b;
    // return {};
}

F.prototype.c = function() {}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    console.log(result, _this);

    return _this;
}

const instance = newOpe(F, 1, 2);
console.log(instance);
