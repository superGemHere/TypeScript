/// <reference path="Greeting.ts" />
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(personName) {
        return `Dear ${personName}, it was a pleasure meeting you!`;
    }
}
let p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
//# sourceMappingURL=01-implementation.js.map