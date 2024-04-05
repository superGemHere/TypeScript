function sumNtoM(num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    let sum = 0;
    for (number1; number1 <= number2; number1++) {
        sum += number1;
    }
    console.log(sum);
}
sumNtoM('1', '5');
sumNtoM('-8', '20');
//# sourceMappingURL=03.js.map