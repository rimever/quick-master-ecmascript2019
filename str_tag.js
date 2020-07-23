function taggedStr(formats,...args) {
    console.log(formats);
    return formats[0] + '[' + args[0] + ']' + formats[1] + '[' + args[1] + ']' + formats[2];
}
let greeting = 'Hello', name = "Yamada";
console.log(taggedStr`${greeting}, ${name}!`);