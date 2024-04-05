type TownInfo = {
    town: string;
    latitude: string;
    longitude: string;
}

function getInfoTown(arr: string[]): void{

    arr.forEach((item: string ): void=> {
        let [name, param1, param2] = item.split(' | ');
        param1 = param1;
        param2 = param2;
        let currentTown: TownInfo = {
            town: name,
            latitude: Number(param1).toFixed(2),
            longitude: Number(param2).toFixed(2),
        }

        console.log(currentTown)
    })
}

getInfoTown(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
getInfoTown(['Plovdiv | 136.45 | 812.575'])