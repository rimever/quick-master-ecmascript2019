let data = {hoge:'hoge',foo:{piyo:'piyo',goo:'goo'}};
let {hoge, foo, foo: {piyo,goo}} = data;
console.log(hoge);
console.log(foo);
console.log(piyo);
console.log(goo);