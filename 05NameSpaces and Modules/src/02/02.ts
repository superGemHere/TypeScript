/// <reference path="FoodAndBeverages.ts" />

type customer = {
    customerName: string,
    visited: boolean
}

class Courier implements FoodAndBeverages.Delivery{
    protected placesToVisit: customer[];

    constructor(placesToVisit: customer[]){
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        if(this.placesToVisit.some(obj => obj.customerName == customerName)){
            throw new Error(`${customerName} is already a customer of yours!`)
        }else{
            this.placesToVisit.push({customerName: customerName, visited})
        }
        return `${customerName} just became your client.`
    }

    visitCustomer(customerName: string): string {
        let customerFound = this.placesToVisit.find(obj => obj.customerName == customerName);
        if (customerFound != undefined){
           this.placesToVisit.map(obj => {
            if(obj.customerName == customerName){
                obj.visited = true;
            }
           })
        }else{
            throw new Error(`${customerName} is not your customer`)
        }
        return `${customerName} just became your client.`;
    }
    showCustomers(): string {
        let output: string = ``;
        this.placesToVisit.forEach(obj => {
            output += `${obj.customerName} -> ${obj.visited}\n`;
        })
        
        return output.trim();
    }
}

let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());