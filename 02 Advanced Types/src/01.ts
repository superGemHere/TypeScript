interface Food {
    [name: string]: number;
}

function createFoodObj(arr: string[]): void{
    let newPair: Food = {};
    arr.forEach((item: string, index: number) => {
        if(index % 2 == 0){
            newPair[item] = Number(arr[++index]);
        }
    })

    console.log(newPair)
}

createFoodObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createFoodObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);