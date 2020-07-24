function* myGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
}

for (let t of myGenerator()) {
    console.log(t);
}