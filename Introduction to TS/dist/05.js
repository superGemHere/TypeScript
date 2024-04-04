function calculator(num1, num2, operator) {
    let sum = 0;
    let exception = '';
    switch (operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '**':
            sum = num1 ** num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            exception = 'There is no such mathematical solution provided.';
            break;
    }
    if (exception) {
        console.log(exception);
    }
    else {
        console.log(sum);
    }
}
calculator(5, 6, '+');
calculator(3, 5.5, '*');
calculator(3, 2, '**');
calculator(3, 2, '***');
calculator(3, 2, 'asd');
