class CarDealer {
    dealershipName;
    soldCars;
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
        let message = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            if (this.modelsSold.hasOwnProperty(dealerID)) {
                const model = this.modelsSold[dealerID];
                message += `${dealerID} sold ${model}\n`;
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
//# sourceMappingURL=03.js.map