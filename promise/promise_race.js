function hoge(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`x ${value} x`);
            }else {
                reject('input value is blank')
            }
        },1000);
    });
}
Promise.race([
    hoge('Sato'),
    hoge('Suzuki'),
    hoge('Yamada')
]).then(
    response => {
        console.log(response);
    }
).catch(
    error => {
        console.log(`Error. ${error.message}`);
    }
);