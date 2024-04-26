function findLowestPriceCity(array: string[]): void { 
    type CityPricePair = { 
        city: string;
        price: number;
    }
    type ProductList = {
        [key: string]: CityPricePair 
    }
    let productList: ProductList = {};

    for(let currentLine of array){
        let [town, product, price] = currentLine.split(" | ");
        if(!productList[product]){
            productList[product] = {city: town, price: Number(price)};
        }else{
            if(productList[product][price] > Number(price)){
                productList[product] = {city: town, price: Number(price)};
            }
        }
    }
    for(let obj in productList){
        console.log(`${obj} -> ${productList[obj].price} (${productList[obj].city})`);
    }
}

findLowestPriceCity([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])