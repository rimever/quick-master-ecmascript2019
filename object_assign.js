class Person {
    constructor(firstName,lastName,sex) {
        Object.assign(this, {firstName,lastName,sex});
    }
    show() {
        return `${this.lastName}${this.firstName} is ${this.sex}`;
    }
}

let person = new Person('Rio','Sato','female');
console.log(person.show());