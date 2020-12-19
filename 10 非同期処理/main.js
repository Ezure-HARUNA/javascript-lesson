//同期処理→メインスレッドでコードが順番に実行される
//非同期処理→1つの処理が完了するまで次の処理にはいかない
//非同期処理は一時的にメインスレッドから処理が切り離される

//非同期API
//UIイベントなどがある

// function sleep(ms) {
//     const startTime = new Date();
//     while (new Date() - startTime < ms);
//     console.log('sleep done')
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     console.log('button clicked');
// });

// setTimeout(function() {
//     sleep(3000)
// }, 2000);

//タスクキュー→実行待ちの非同期処理の行列。先入先出し（FIFO)


// const btn = document.querySelector('button');
// btn.addEventListener('click', function task2(){
//     console.log('task2 done');
// });

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done')
//     }, 4000);

//     const startTime = new Date();
//     while (new Date() - startTime < 5000);

//     console.log('fn a done')
// }

//コールバック関数と非同期処理

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done')
//     }, 4000);

//     console.log('fn a done')
// }

// function b() {
//     console.log('fn b done');
// }

// a();

// b();

//非同期処理のチェーン

// function sleep(callback, val) {
//     setTimeout(function() {
//         console.log(val++);
//         callback(val);
//     }, 1000);
// }

// sleep(function(val) {
//     sleep(function(val) {
//         sleep(function(val) {
//             sleep(function(val) {
//                 sleep(function(val) {
    
//                 }, val)
//             }, val)
//         }, val)
//     }, val)
    
// }, 0)

//Promiseの方が可読性がある

//Promise
//→非同期処理をより簡単に、可読性が上がるように書けるようにしたもの

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('then');
});

console.log('global end')

