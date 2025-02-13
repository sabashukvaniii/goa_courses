//1
// for...of ციკლის გამოყენება
// for...of ციკლი გამოიყენება იტერირებადი (iterable) მონაცემების გასავლელად.

// მუშაობს მოსაწყობ მონაცემთა ტიპებზე, როგორიცაა:

// Array (მასივი)
// String (სტრიქონი)
// Set (სეტი)
// Map (რუკა)
// TypedArray (მაგ. Uint8Array)
// არ მუშაობს ობიექტებზე (Object), რადგან ობიექტი იტერირებადი არაა.


// let numbers = [10, 20, 30, 40];

// for (let num of numbers) {
//     console.log(num);
// }


// let word = "Hello";

// for (let char of word) {
//     console.log(char);
// }


// let uniqueNumbers = new Set([1, 2, 3, 4, 4, 2]);

// for (let value of uniqueNumbers) {
//     console.log(value);
// }

//2
// for...in ციკლის გამოყენება
// for...in ციკლი ობიექტებზე (Object) და ინდექსირებულ მონაცემებზე მუშაობს.

// მუშაობს შემდეგზე:

// Object (ობიექტი) - გადის key-ებზე (property names)
// Array (მასივი) - გადის ინდექსებზე
// String (სტრიქონი) - გადის სიმბოლოების ინდექსებზე
// არ გამოიყენო for...in მასივებზე ელემენტების მისაღებად, რადგან ის აბრუნებს ინდექსებს, არა ელემენტებს. for...of უფრო გამართლებულია მასივებისთვის.

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
// }


// let colors = ["Red", "Green", "Blue"];

// for (let index in colors) {
//     console.log(`${index}: ${colors[index]}`);
// }


// let word = "Hello";

// for (let index in word) {
//     console.log(`${index}: ${word[index]}`);
// }


//3
// const sum = (a, b) => a + b;

// console.log(sum(5, 10)); 



// const greet = name => `Hello, ${name}!`;

// console.log(greet("Alice"));





//4
// const sum = (a = 0, b = 0) => a + b;

// console.log(sum(5, 10)); 
// console.log(sum(7));     
// console.log(sum());      


// const greet = (name = "Guest") => `Hello, ${name}!`;

// console.log(greet("Alice"));
// console.log(greet());       


//5
// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
    
//     // მეთოდი, რომელიც ამოიძახებს this-ს
//     getCarInfo: function() {
//       return `The car is a ${this.year} ${this.make} ${this.model}.`;
//     }
//   };
  
//   // მეთოდის გამოძახება
//   console.log(car.getCarInfo());
  

//6
// const dynamicKey = 'model';
// const car = {
//   make: 'Toyota',
//   [dynamicKey]: 'Corolla', // Computed property name
//   year: 2020
// };

// console.log(car.model); // გამოტანილია "Corolla"


//7
// const car = {
//     make: 'Toyota',
//     model: 'Corolla'
//   };
  
//   const specs = {
//     year: 2020,
//     color: 'blue'
//   };
  
//   // Object.assign() გამოიყენება ობიექტების შერწყმისთვის
//   const fullCarInfo = Object.assign({}, car, specs);
  
//   console.log(fullCarInfo);
  