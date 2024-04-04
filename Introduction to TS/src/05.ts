function calculator(num1: number, num2: number, operator: string): void{

    let sum: number = 0;
    let exception: string = '';

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
            exception = 'There is no such mathematical solution provided.'
            break;
    }

    if(exception){
        console.log(exception)
    }else{
        console.log(sum)
    }
}

calculator(5, 6, '+');
calculator(3, 5.5, '*');
calculator(3, 2, '**');
calculator(3, 2, '***');
calculator(3, 2, 'asd');


