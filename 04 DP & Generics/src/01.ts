class Box<T> {
   content: T;
    
   constructor(content: T){
    this.content = content;
   }
   toString(): string {
    return `${this.content} is of type ${typeof this.content}`
   }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());