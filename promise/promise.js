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
hoge('Sato Hanako').then(
    response => {
        console.log(response);
    }
).catch(error => {
    console.log(`Error. ${error.message}`);
}).finally(
    () => {
        console.log('End');
    }
);
// Error
hoge().then(
    response => {
        console.log(response);
    }
).catch(error => {
    console.log(`Error. ${error.message}`);
}).finally(
    () => {
        console.log('End');
    }
);