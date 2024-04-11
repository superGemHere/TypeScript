class Car {
    brand: string;
    model: string;
    hoursepower: number;

    constructor(brand: string, model: string, hoursepower: number) {
        this.brand = brand;
        this.model = model;
        this.hoursepower = hoursepower;
    }

    get getBrand(): string {
        return this.brand;
    }

    set setBrand(newBrand: string) {
        this.brand = newBrand;
    }

    get getModel(): string {
        return this.model;
    }

    set setModel(newModel: string) {
        this.model = newModel;
    }

    get getHoursepower(): number {
        return this.hoursepower;
    }

    set setHoursepower(newPower: number) {
        this.hoursepower = newPower;
    }

}

function carInfo(line: string): void {
    let [brand, model, hp] = line.split(" ");

    let myCar = new Car(brand, model, Number(hp))
    console.log(`The car is: ${myCar.brand} ${myCar.model} - ${myCar.hoursepower} HP.`)
}
carInfo("Chevrolet Impala 390")
carInfo("Skoda Karoq 150")