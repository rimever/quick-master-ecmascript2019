let re = /(?<area>0\d{1,4})-(?<city>\d{1,4})-(?<local>\d{3,4})/;
let msg = 'Tel is 012-345-6789';
let result = msg.match(re);
console.log(`area : ${result.groups.area}`);
console.log(`city : ${result.groups.city}`);
console.log(`local : ${result.groups.local}`);