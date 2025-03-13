// ფუნქცია, რომელიც იღებს ორ რიცხვს და ოპერაციას, შემდეგ აბრუნებს შედეგს
function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operation';
    }
}

// ფუნქციის ექსპორტი
module.exports = calculate;
