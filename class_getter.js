class Person {
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    show() {
        return `${this.name} is ${this.sex}, ${this.age}.`;
    }
}
let person = new Person('Suzuki','female');
person.age = 10;
console.log(person.show());