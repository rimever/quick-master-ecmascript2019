var myModule = require('./MyLib.js');

let c = new myModule(12345);
console.log(c.checkSecret(12345));
//console.log(c[SECRET]); // ERROR!!
console.log(Object.keys(c));
for (let k in c) {
    console.log(k);
}

console.log(JSON.stringify(c));