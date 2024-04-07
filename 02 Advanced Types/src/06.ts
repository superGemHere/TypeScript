type ProductBestPrice = {
    productName: string,
    productTown: string,
    productPrice: number,
}

const getCheapestProduct = (arr: string[]): void => {
    let myObjArr: object = {};
    arr.forEach((item: string) => {
        let [town, product, price] = item.split(" | ");

        let currentTown: ProductBestPrice = {
            productName: product,
            productTown: town,
            productPrice: Number(price)
       };
       
    });
    console.log(myObjArr)
}

getCheapestProduct(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']) 