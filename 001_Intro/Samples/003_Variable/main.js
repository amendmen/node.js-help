var obj = require('./mod');
console.log(obj);
// переменной и функции в данном модуле не существует!
console.log(obj.number); // Error!
obj.func();         // Error!