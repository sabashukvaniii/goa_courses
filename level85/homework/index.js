// calculator.js ფაილის იმპორტი
const calculate = require('./calculator');

// ფუნქციის გამოყენება
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Cannot divide by zero
console.log(calculate(10, 5, '%')); // Invalid operation
