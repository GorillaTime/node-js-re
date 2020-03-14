'use strict'; 
//node app.js 100等
//1からコマンドラインの引数で与えられた数をすべて足すコード

const number = process.argv[2] || 0;
//node app.js 100等コマンドラインの引数がある時はそちら,
//node app.js等の引数が無い時は0をnumberに代入する
let sum = 0;
for (let i = 1;i<=number;i++) {
    sum+=i; //0,1,3,6,10,,,
    //1から引数の数までをすべて足していく
}
console.log(sum);
//node app.js (数字)で合計値をコンソールで計算できる
//尚、node app.jsのように引数が無い場合0が出力される
//引数がfalsy（null,undefined,NaN,"",0,false等）の場合、ループが回らない。