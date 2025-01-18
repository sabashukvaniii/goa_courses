// const myArray = [1, 2, 3, 4, 5]; // რიცხვების მასივი
// const fruits = ['ვაშლი', 'ბანანი', 'ატამი']; // სტრიქონების მასივი
// const mixedArray = [42, 'ტექსტი', true, null]; // სხვადასხვა ტიპის ელემენტები




// const myArray = new Array(10, 20, 30, 40, 50); // რიცხვების მასივი
// const fruits = new Array('ვაშლი', 'ატამი', 'ბანანი'); // სტრიქონების მასივი
// const mixedArray = new Array('ტექსტი', 100, true, null); // სხვადასხვა ტიპის ელემენტები

// console.log(myArray); // [10, 20, 30, 40, 50]
// console.log(fruits); // ['ვაშლი', 'ატამი', 'ბანანი']
// console.log(mixedArray); // ['ტექსტი', 100, true, null]

// const emptyArray = new Array(5); // ქმნის 5-ელემენტიან ცარიელ მასივს
// console.log(emptyArray); // [ <5 empty items> ]




// const myArray = new Array(5); // ვქმნით 5 ელემენტიან ცარიელ მასივს

// // ინდექსების მიხედვით მნიშვნელობების მინიჭება
// myArray[0] = 10;
// myArray[1] = 20;
// myArray[2] = 30;
// myArray[3] = 40;
// myArray[4] = 50;

// console.log(myArray); // [10, 20, 30, 40, 50]




// 1. რიცხვების მასივი
// const numbers = new Array(5);
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers[3] = 40;
// numbers[4] = 50;

// console.log(numbers[0]); // 10
// console.log(numbers[4]); // 50

// // 2. სტრიქონების მასივი
// const fruits = new Array(3);
// fruits[0] = 'ვაშლი';
// fruits[1] = 'ატამი';
// fruits[2] = 'ბანანი';

// console.log(fruits[0]); // 'ვაშლი'
// console.log(fruits[2]); // 'ბანანი'

// // 3. შერეული ტიპის მასივი
// const mixedArray = new Array(4);
// mixedArray[0] = 'ტექსტი';
// mixedArray[1] = 100;
// mixedArray[2] = true;
// mixedArray[3] = null;

// console.log(mixedArray[0]); // 'ტექსტი'
// console.log(mixedArray[3]); // null




// 1. რიცხვების მასივი
// const numbers = new Array(5);
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers[3] = 40;
// numbers[4] = 50;

// // Slicing: ინდექსიდან 1-დან 4-მდე (4 არ შედის)
// const slicedNumbers = numbers.slice(1, 4);
// console.log(slicedNumbers); // [20, 30, 40]

// // 2. სტრიქონების მასივი
// const fruits = new Array(3);
// fruits[0] = 'ვაშლი';
// fruits[1] = 'ატამი';
// fruits[2] = 'ბანანი';

// // Slicing: ინდექსიდან 0-დან 2-მდე (2 არ შედის)
// const slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits); // ['ვაშლი', 'ატამი']

// // 3. შერეული ტიპის მასივი
// const mixedArray = new Array(4);
// mixedArray[0] = 'ტექსტი';
// mixedArray[1] = 100;
// mixedArray[2] = true;
// mixedArray[3] = null;

// // Slicing: ინდექსიდან 2-დან ბოლომდე
// const slicedMixedArray = mixedArray.slice(2);
// console.log(slicedMixedArray); // [true, null]




// function getRandomNumber(max) {
//     return Math.floor(Math.random() * max);
// }

// // გამოყენების მაგალითი
// const randomNum = getRandomNumber(10); // 0-დან 10-მდე შემთხვევითი რიცხვი
// console.log(randomNum);




// let counter = 0;

// const intervalId = setInterval(() => {
//     console.log(counter); // მიმდინარე რიცხვის ბეჭდვა
//     counter++; // რიცხვის გაზრდა
//     if (counter > 30) {
//         clearInterval(intervalId); // interval-ის გაჩერება
//         console.log('დასრულდა!');
//     }
// }, 1000); // 1000 მილიწამი = 1 წამი




// const today = new Date();

// const day = today.getDate(); // რიცხვი (დღე)
// const month = today.getMonth() + 1; // თვე (იანვარი არის 0, ამიტომ ვუმატებთ 1-ს)
// const year = today.getFullYear(); // წელი

// console.log(`${day}/${month}/${year}`); // დღევანდელი დღე / თვე / წელი