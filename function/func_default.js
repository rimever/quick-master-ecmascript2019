function show(name = 'noname') {
    console.log('My name is ' + name);
}
show();
show('Tom');

function add(a, b = a) {
    return a + b;
}

console.log(add(1,4));
console.log(add(1));

function dateFormat(date = new Date()) {
    return date.toLocaleString();
}

console.log(dateFormat(new Date(2019,11,4,0,0,0)));
console.log(dateFormat());