class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat is meowing...");
    }
}
let myDog = new Dog();
myDog.eat();
myDog.bark();
let myCat = new Cat();
myCat.eat();
myCat.meow();
//# sourceMappingURL=04.js.map