function catInfo(arr) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    arr.forEach(el => {
        let [name, age] = el.split(" ");
        let cat = new Cat(name, age);
        cat.meow();
    });
}
catInfo(['Mellow 2', 'Tom 5']);
catInfo(['Candy 1', 'Poppy 3', 'Nyx 2']);
//# sourceMappingURL=08.js.map