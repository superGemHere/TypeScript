function calc(firstNum, operator, secondNum) {
    let sum = null;
    switch (operator) {
        case "+":
            sum = (firstNum + secondNum).toFixed(2);
            break;
        case "-":
            sum = (firstNum - secondNum).toFixed(2);
            break;
        case "/":
            sum = (firstNum / secondNum).toFixed(2);
            break;
        case "*":
            sum = (firstNum * secondNum).toFixed(2);
            break;
        default:
            sum = 'There is not provided operation with that operator.';
            break;
    }
    console.log(sum);
}
calc(5, "+", 10);
console.log('--------------');
calc(25.5, "-", 3);
console.log('--------------');
calc(9, "/", 2);
console.log('--------------');
calc(7, "*", 5);
console.log('--------------');
calc(7, "asd", 5);
