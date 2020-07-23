function required() {
    throw new Error('Argument is missing');
}

function hoge(value = required()) {
    return value;
}
hoge();