//Переменные обьявленные внутри модуля, являются локальными для модуля
var x = 10;

function test(){
    console.log(x);
};

exports.number = x;
exports.func = test;