// // ცვლადები
// let a = 5;
// let b = 10;

// // Destructuring-ს გამოყენებით ცვლადების მნიშვნელობების გაცვლა
// [a, b] = [b, a];

// // შედეგი
// console.log(a); // 10
// console.log(b); // 5




// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum(5, 10)); // 15





// const arr = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = arr;

// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]





// const person = {
//     name: 'John',
//     age: 30,
//     job: 'Engineer',
//     country: 'USA'
// };

// const { name, age, ...otherInfo } = person;

// console.log(name); // John
// console.log(age); // 30
// console.log(otherInfo); // { job: 'Engineer', country: 'USA' }
