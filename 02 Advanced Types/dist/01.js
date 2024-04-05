function createFoodObj(arr) {
    let newPair = {};
    arr.forEach((item, index) => {
        if (index % 2 == 0) {
            newPair[item] = Number(arr[++index]);
        }
    });
    console.log(newPair);
}
createFoodObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createFoodObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
//# sourceMappingURL=01.js.map