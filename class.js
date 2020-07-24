class Person {
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    show() {
        return `${this.name} is ${this.sex}.`;
    }
}
let person = new Person('Suzuki','female');
console.log(person.show());