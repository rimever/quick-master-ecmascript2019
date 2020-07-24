function hoge() {
    let args = Array.from(arguments);
    console.log(args.includes(3));
}
hoge(1,2,3,4,5);