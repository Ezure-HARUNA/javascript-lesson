//コールバック関数」

// function hello(name) {
//     console.log('hello ' +  name);
// }

// function bye() {
//     console.log('bye');
// }

// function fn(cb) {
//     cb('Tom');
// }

// fn(hello);
// fn(bye);
// fn(function(name) {
//     console.log('hello ' + name);
// })

// //例

// setTimeout(hello, 2000);

//this
//関数コンテキストではthisは関数内で使用
//this→呼び出し元のオブジェクトへの参照を保持するキーワード

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello();

//参照のコピーとthis
//オブジェクト→呼び出し元のオブジェクト
//関数→グローバルオブジェクトが参照される

// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//         a();
//     }
// }
// const ref = person.hello;
// ref();

// person.hello();

// function a() {
//     console.log('Hello ' + this.name);
// }

//コールバック関数とthis

// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello();
//オブジェクトなので呼び出し元のオブジェクトが参照される

// function fn(ref) {
//     ref();
// }

// fn(person.hello);
//関数なのでグローバルオブジェクトが参照される


//bindとthis
//bindを使うことで,thisの参照を変更できる

// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello();

// const helloTom = person.hello.bind(person);

// function fn(ref) {
//     ref();
// }

// fn(helloTom);
 
// function a(name) {
//     console.log('hello ' + name);
// }

// const b = a.bind(null, 'Tim');

// b();

//call, applyとthis
//bind→使用時点で実行はしない
//apply→使用時点で関数を実行する
//call→bindに使用時実行する仕様を付けたもの

// function a(name) {
//     console.log('hello ' + this.name);
// }

// const tim = {name: 'Tim'};

// const b = a.bind(tim);

// b();

// a.apply(tim, ['Tim', 'Bob']);
// a.call(tim, ['Tim', 'Bob']);

// const arry = [1, 2, 3, 4, 5];

// // const result = Math.max.apply(null, arry);
// const result = Math.max(...arry);
// console.log(result);

//問題

const person = {
    hello: function () {
        return 'hello Tom';
        
    }
}

const a = setTimeout(function () {
    const hello = person.hello();
    alert(hello);
}, 1000);
console.log(a);

//問題


//問題

const obj = {
    greeting: function() {
        console.log('hello');
    }
};

function after1s(callback) {
    setTimeout(callback, 1000);
}

after1s(obj.greeting);

obj.greeting = function() {
    console.log('hey');
}

//問題

function calcFactory(val) {
    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(val + " + " + target + " = " + newVal)
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(val + " - " + target + " = " + newVal)
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(val + " * " + target + " = " + newVal)
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(val + " / " + target + " = " + newVal)
        },
    }
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

//問題 bind

