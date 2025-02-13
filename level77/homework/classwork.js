// const numbers = [10, 20, 30, 40, 50];

// for (const num of numbers) {
//     console.log(num); // 10, 20, 30, 40, 50
// }


// const text = "HELLO";

// for (const char of text) {
//     console.log(char); // H, E, L, L, O
// }



// const userMap = new Map([
//     ["name", "John"],
//     ["age", 30],
//     ["city", "New York"]
// ]);

// for (const [key, value] of userMap) {
//     console.log(`${key}: ${value}`);
// }



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }



// const fruits = ["Apple", "Banana", "Cherry"];

// for (const index in fruits) {
//     console.log(`Index ${index}: ${fruits[index]}`);
// }



// for (const prop in window) {
//     console.log(prop); // გამოიტანს window ობიექტის ყველა თვისებას
// }




// const sum = (a, b) => a + b;

// console.log(sum(5, 10)); // 15



// const toFahrenheit = celsius => (celsius * 9/5) + 32;

// console.log(toFahrenheit(25)); // 77



// const doubleArray = arr => arr.map(num => num * 2);

// console.log(doubleArray([1, 2, 3])); // [2, 4, 6]





// const key = "age";

// const person = {
//     name: "John",
//     [key]: 30
// };

// console.log(person); // { name: "John", age: 30 }




// const generateKey = (prefix, id) => `${prefix}_${id}`;

// const user = {
//     [generateKey("user", 101)]: "Alice",
//     [generateKey("user", 102)]: "Bob"
// };

// console.log(user); 
// // { user_101: "Alice", user_102: "Bob" }




// const fruits = ["Apple", "Banana", "Cherry"];

// const fruitObj = {
//     [fruits[0]]: "Red",
//     [fruits[1]]: "Yellow",
//     [fruits[2]]: "Dark Red"
// };

// console.log(fruitObj); 
// // { Apple: "Red", Banana: "Yellow", Cherry: "Dark Red" }


// const obj1 = { name: "Alice" };
// const obj2 = { age: 25 };

// const mergedObj = Object.assign({}, obj1, obj2);

// console.log(mergedObj); // { name: "Alice", age: 25 }




// const original = { name: "Bob", city: "London" };

// const copy = Object.assign({}, original);

// copy.city = "Paris"; // მხოლოდ copy-ს ვცვლით

// console.log(original); // { name: "Bob", city: "London" }
// console.log(copy);    // { name: "Bob", city: "Paris" }



// const defaults = { theme: "light", language: "en" };
// const userSettings = { language: "es" };

// const finalSettings = Object.assign({}, defaults, userSettings);

// console.log(finalSettings); // { theme: "light", language: "es" }
