const SECRET = Symbol();
module.exports = class MyClazz {
    constructor(secret) {
        this.data1 = 1;
        this.data2 = 2;
        this[SECRET] = secret;
    }
    checkSecret(secret) {
        return this[SECRET] == secret;
    }
}