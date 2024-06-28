// hello.ts
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Alice", new Date());

// basicTypes.ts
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 10];
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let notSure: any = 4;
notSure = "maybe a string instead";

// interfaces.ts
interface User {
    name: string;
    age: number;
}

function getUser(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

let user: User = { name: "John", age: 25 };
getUser(user);

// classes.ts
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Rex');
dog.bark();
dog.move(10);

//Modules ==============================================================
// math.ts

// app.ts
import { add } from './math';

console.log(add(2, 3)); // Output: 5
