interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions <T> {
    sellCar(dealerID: T, model: T): void;
}

interface modelsSold<T>{
    [key: string]: T
}

class CarDealer<T> implements Dealership<T>, Actions<T>{
    public dealershipName: T;
    public soldCars: number;
    public modelsSold: {[key: string]: T} = {};

    constructor(dealershipName: T){
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID as string] = model;
        this.soldCars++
    }

    showDetails(): string { 
        let message:string = `${this.dealershipName}:\n`
        for(const dealerID in this.modelsSold){
            if(this.modelsSold.hasOwnProperty(dealerID)){
                const model = this.modelsSold[dealerID];
                message += `${dealerID} sold ${model}\n`
            }
        }
        return message;
    }


}

let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
