let obj = {};
let m = new Map();
m.set('apple','りんご');
m.set('orange','みかん');
m.set('grape','ぶどう');
m.set(obj,'オブジェクト');
console.log(m.get('apple'));
console.log(m.get(obj));
console.log(m.get({}));
console.log(m.has('orange'));
for (let key of m.keys()) {
    console.log(key);
}
for (let value of m.values()) {
    console.log(value);
}

for (let [key,value] of m ) {
    console.log(`${key}:${value}`);
}

m.forEach((value, key) => console.log(`${key}=${value}`));

m.delete('grape');
m.clear();
