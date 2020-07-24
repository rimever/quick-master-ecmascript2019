let book = {
    title:'AngularJS Application Programming',
    price:3700,
    toString() {
        console.log(`${this.title}:¥${this.price}`);
    }
};
book.toString();