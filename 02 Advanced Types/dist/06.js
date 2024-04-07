const getCheapestProduct = (arr) => {
    let myObjArr = [];
    arr.forEach((item) => {
        let [town, product, price] = item.split(" | ");
        let currentTown;
        currentTown = {
            productName: product,
            productTown: town,
            productPrice: Number(price)
        };
    });
    console.log(myObjArr);
};
getCheapestProduct(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);
//# sourceMappingURL=06.js.map