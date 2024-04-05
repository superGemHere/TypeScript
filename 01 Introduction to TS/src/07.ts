function getBiggestHalf(arr: number[]):void {
    arr = arr.sort((a, b) => a - b);
    let biggerHalf: number[] = arr.slice(Math.floor(arr.length / 2), arr.length);
    console.log(biggerHalf); 
}

getBiggestHalf([4, 7, 2, 5])
getBiggestHalf([3, 19, 14, 7, 2, 19, 6])