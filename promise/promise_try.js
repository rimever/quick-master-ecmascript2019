function promiseDivide(a,b) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (b == 0){
                reject('cannot divide 0');
            }
            resolve(a/b);
        },1000);
    });
}

promiseDivide(2,0)
    .then(response => {
        console.log(`result ${response}`);
    }).catch(error => {
        console.log(`error ${error}`);
    }).finally(() => {
        console.log("End");
});
promiseDivide(4,2)
    .then(response => {
        console.log(`result ${response}`);
    }).catch(error => {
    console.log(`error ${error}`);
}).finally(() => {
    console.log("End");
});
