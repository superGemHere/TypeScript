class Person {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    createPerson(line) {
        let [name, age] = line.split(" ");
        this.name = name;
        this.age = Number(age);
    }
    getInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
let myPerson = new Person;
// console.log(myPerson.age);
// console.log(myPerson.name); // it is undefined because we dont have assigned values at the persons initialization.
myPerson.createPerson("Peter 12");
myPerson.getInfo();
let myPerson2 = new Person;
// console.log(myPerson2.age);
// console.log(myPerson2.name);
myPerson2.createPerson("Sofia 33");
myPerson2.getInfo();
//# sourceMappingURL=02.js.map