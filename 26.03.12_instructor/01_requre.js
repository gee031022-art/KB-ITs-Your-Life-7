const { add, test } = require('./01_export');
console.log(add(4));
test(); //module내부에서 this는 undefined
