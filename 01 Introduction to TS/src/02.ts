function getLargestNum (num1: number, num2:number, num3:number){
    let arr: number[] = [num1, num2, num3];
    // let largest: number = Math.max(arr)
    console.log(`The largest number is ${Math.max(...arr)}.`)
}

getLargestNum(5, -3, 16)
getLargestNum(-3, -5, -22.5);