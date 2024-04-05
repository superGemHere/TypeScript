function getEvenIndexed (arr: string[]): void{

    arr = arr.filter((el, index) => index % 2 == 0);
    console.log(arr)
}

getEvenIndexed(['20', '30', '40', '50', '60'])
getEvenIndexed(['5', '10'])