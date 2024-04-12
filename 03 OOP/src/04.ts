class Animal{
    eat(): void{
        console.log("eating...")
    }
}

class Dog extends Animal {
    bark(): void{
        console.log("Dog is barking...")
    }
}
class Cat extends Animal {
    meow(): void{
        console.log("Cat is meowing...")
    }
}

let myDog = new Dog();
myDog.eat()
myDog.bark()
let myCat = new Cat();
myCat.eat()
myCat.meow()