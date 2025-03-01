
// class Car {
//     constructor(brand, model, year, color) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     startEngine() {
//         console.log(`${this.brand} ${this.model}'s engine has started.`);
//     }

//     describeCar() {
//         console.log(`This car is a ${this.year} ${this.color} ${this.brand} ${this.model}.`);
//     }
// }

// // 3 ობიექტის შექმნა
// const car1 = new Car("Toyota", "Corolla", 2020, "White");
// const car2 = new Car("Honda", "Civic", 2019, "Black");
// const car3 = new Car("Ford", "Mustang", 2021, "Red");

// // ატრიბუტების გამოტანა და მეთოდების გამოძახება
// [car1, car2, car3].forEach(car => {
//     console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`);
//     car.startEngine();
//     car.describeCar();
//     console.log("-");
// });





// number 2

// class Person {
//     constructor(name, age) {
//         this._name = name; // დაცული ატრიბუტი
//         this._age = age;   // დაცული ატრიბუტი
//     }

//     // Getter მეთოდი სახელისთვის
//     getName() {
//         return this._name;
//     }

//     // Getter მეთოდი ასაკისთვის
//     getAge() {
//         return this._age;
//     }
// }

// // მაგალითი
// const person = new Person("გიორგი", 30);
// console.log(person.getName()); // გამოიტანს: გიორგი
// console.log(person.getAge());  // გამოიტანს: 30
