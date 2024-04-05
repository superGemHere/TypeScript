function aggregateElements(arr: number[]): void{

    let sum: number = arr.reduce((acc: number , currentValue: number) => acc + currentValue); 
    let inverseSum = arr.reduce((acc: number, currentValue: number) => {
        if(currentValue !== 0){
            acc += 1/currentValue
        }
        return acc;
    }, 0);
    let consequently = Number(arr.join(''));
    console.log(sum)
    console.log(inverseSum)
    console.log(consequently)
}

aggregateElements([1, 2, 3]);
console.log('----------------------');
aggregateElements([2, 4, 8, 16]);