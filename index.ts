enum Color {Red = 0, Green = 1, Blue = 2}
let backgroundColor = Color.Red;

// hello.ts
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Alice", new Date());
