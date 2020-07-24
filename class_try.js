class Person {
    constructor(name,job) {
        this.name = name;
        this.job = job;
    }
    show() {
        console.log(`${this.name} is ${this.job}.`);
    }
}

let person = new Person("John","Backend Engineer");
person.show();