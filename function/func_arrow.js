let data = [1,2,3];
/* Before
let formatted = data.map(function (value,index) {
    return value * value;
});
*/
let formatted = data.map((value,index) => value*value);
console.log(formatted);