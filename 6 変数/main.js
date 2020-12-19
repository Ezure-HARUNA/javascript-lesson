// //厳格な等価性・抽象的な等価性

// function printEquality(a, b) {
//     console.log(a === b);
//     console.log(a == b);
// }

// let a = '1';
// let b= 1;

// let c = true;

// // printEquality(b,c)

// //空文字と0は抽象的には同じ値だが、厳格には違う
// let e = "";
// let f = 0;

// printEquality(e, f)

// //nullとundefinedは抽象的には同じ
// let g = null
// let h;
// printEquality(g,h)

//!falsy・truthy
//

// let a = 0;
// console.log(Boolean(a));

//AND・OR
// &&
// ||

// const a = 1;
// const b = 2;
// //falsyなものがあった場合はその値を、ない場合は一番最後の値を返す
// console.log(a && b);
// //trusyなものがあった場合はその値を、ない場合は一番最後の値を返す
// console.log(a || b);

//AND・ORの応用

// function hello(name) {
//    name = name || 'Tom';
//    console.log('Hello ' + name)
// }

// hello('Bob');
// hello();

// let name = "Bob";

// name && hello(name);

//プリミティブ型とオブジェクト
//オブジェクト以外のデータ(number, null, string等)→プリミティブ型
//オブジェクト→オブジェクト

//参照とコピー

//問題

// "0 == false" true
// "0 === false" false
// 文字列, false
// 文字列 true
// // もじれつ　false
// // 文字列　false
// 文字列 false
// 文字列 true


//問題

// let a = 1;

// function fn(num) {
//     num = num || -1; //trueのもの
//     console.log(num)
// }
// fn(a);

//問題



