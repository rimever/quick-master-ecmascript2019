function hoge(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`x${value}x`);
            }else{
                reject(new Error("input value is blank"));
            }
        },2000);
    })
}
async function serial(value) {
    let result = await hoge(value);
    result = await hoge(result);
    result = await hoge(result);
    console.log('process end');
    return result;
}
serial('Sato')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(`Error. ${error.message}`);
    });
console.log('... other ...')