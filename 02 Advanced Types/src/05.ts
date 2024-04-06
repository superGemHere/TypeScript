type townPopulation = {
    [city: string]: number;
}


const createCittyArr = (arr: string[]): void => {
    let myObj: townPopulation = {};
    arr.forEach((item: string): void => {
        let [cityName, population] = item.split(" <-> ");
        myObj[cityName] ? myObj[cityName] += Number(population) : myObj[cityName] = Number(population);
    })

    for(const key in myObj){
        console.log(`${key} : ${myObj[key]}`);
    }
}

createCittyArr(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])
console.log('---------')
createCittyArr(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000'])