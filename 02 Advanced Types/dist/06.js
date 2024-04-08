function getCheapestProduct(arr) {
    let productsCollection = {};
    arr.forEach((item) => {
        let currentProduct;
        let [town, product, price] = item.split(" | ");
        currentProduct = {
            town,
            price: Number(price)
        };
        if (!productsCollection[product]) {
            productsCollection[product] = currentProduct;
        }
        else {
            if (productsCollection[product].price > Number(price)) {
                productsCollection[product] = currentProduct;
            }
        }
    });
    for (const key in productsCollection) {
        console.log(`${key} -> ${productsCollection[key].price} (${productsCollection[key].town})`);
    }
}
getCheapestProduct(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
//# sourceMappingURL=06.js.map