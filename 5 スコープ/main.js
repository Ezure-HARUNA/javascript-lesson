// console.log("aaa");

// function a() {
//     let b = 0;
//     console.log(b);
// }
// //外で呼び出すとエラーになる


// //ブロックスコープ
// //{}で囲まれたスコープ

// {
//     let c = 0;
//     console.log(c);

//     function d() {
//         console.log('d is called')
//     }
//      d();
// }
//外で呼び出すとエラーになる。ブロック内のfunctionだと外でもエラーにならない

//レキシカルスコープ

// let a = 2;
// function fn1() {
//     let b = 1;
//     console.log(c);
//     function fn2() {
//         let c = 3;
        
//     }
//     fn2();
// }
// fn1();

//スコープチェーン
//スコープがスコープを含んでいる状況

// 一番内側の変数の値を取得する特性がある
//スクリプトスコープよりグローバルスコープが優先される

// let a = 2;
// window.a = 4;
// function fn1() {
//     // let a = 1;
//     function fn2() {
//         // let a = 3;
//         console.log(a);
//     }
//     fn2();
// }
// fn1();

//クロージャ―
//レキシカルスコープの関数を変数が使用している状態

//1 プライベート変数の関数生成
// 外部からはアクセスできないようにする



// incrementFactory内にnumを置くことで、外部からアクセスできないように
// function incrementFactory() {
//     let num = 0;
//     function increment() {
//         num = num + 1;
//         console.log(num);
//     }
//     return increment;
// }

// const increment = incrementFactory();

// increment();
// increment();
// increment();
// 2 動的な関数生成

// function addNumberFactory(num) {
//     function addNumber(value) {
//         return num + value;
//     } 
//     return addNumber;
// }

// const add5 = addNumberFactory(5);
// const result = add5(10);
// console.log(result);

//即時関数(IIFE)
//関数定義と同時に一度だけ実行される関数

// function a() {
//     console.log('called');
// }
// a();

// (function () {
//     console.log('called');
// })()

//修了確認

// function fn() {
//     if(true) {
//         let a = 'fn called';
//         //スコープの外でaは使えない
//         return a; //ReferenceError: a is not defined.
//     }
   
// }

// const result = fn();
// console.log(result)

//問題
//クロージャ―
//四則演算

// function calcFactory(val) {
//     return {
//         plus: function(target) {
//             const newVal = val + target;
//             console.log(val + " + " + target + " = " + newVal)
//             val = newVal;
//         },
//         minus: function(target) {
//             const newVal = val - target;
//             console.log(val + " - " + target + " = " + newVal)
//             val = newVal;
//         },
//         multiply: function(target) {
//             const newVal = val * target;
//             console.log(val + " * " + target + " = " + newVal)
//             val = newVal;
//         },
//         divide: function(target) {
//             const newVal = val / target;
//             console.log(val + " / " + target + " = " + newVal)
//         },
//     }
// }

// const calc = calcFactory(10);
// calc.plus(5);
// calc.minus(3);
// calc.multiply(3);
// calc.divide(2);

//問題
//即時関数

// (function () {
//     console.log('called');
// })()


const calc = (function (val) {
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
})(10);

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);