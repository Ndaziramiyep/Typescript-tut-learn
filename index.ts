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
