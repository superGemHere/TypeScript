class Car {
    brand;
    model;
    hoursepower;
    constructor(brand, model, hoursepower) {
        this.brand = brand;
        this.model = model;
        this.hoursepower = hoursepower;
    }
    get getBrand() {
        return this.brand;
    }
    set setBrand(newBrand) {
        this.brand = newBrand;
    }
    get getModel() {
        return this.model;
    }
    set setModel(newModel) {
        this.model = newModel;
    }
    get getHoursepower() {
        return this.hoursepower;
    }
    set setHoursepower(newPower) {
        this.hoursepower = newPower;
    }
    carInfo() {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.hoursepower} HP.`);
    }
}
function carInfo(line) {
    let [brand, model, hp] = line.split(" ");
    let myCar = new Car(brand, model, Number(hp));
    myCar.carInfo();
}
carInfo("Chevrolet Impala 390");
carInfo("Skoda Karoq 150");
//# sourceMappingURL=01.js.map