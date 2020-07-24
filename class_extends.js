class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show() {
        return `${this.name} is ${this.sex}.`;
    }
}

class BusinessPerson extends Person {
    constructor(name,sex,clazz) {
        super(name,sex);
        this.clazz = clazz;
    }
    show() {
        return `${super.show()} Job is ${this.clazz}`;
    }
}

let businessPerson = new BusinessPerson('Suzuki','female','leader');
console.log(businessPerson.show());