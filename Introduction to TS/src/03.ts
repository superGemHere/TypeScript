function sumNtoM(num1:string, num2: string){

    let number1: number = Number(num1);
    let number2: number = Number(num2);

    let sum: number = 0;

   for(number1; number1 <= number2; number1++){
    sum+=number1;
   }

   console.log(sum)
}

sumNtoM('1', '5')
sumNtoM('-8', '20')