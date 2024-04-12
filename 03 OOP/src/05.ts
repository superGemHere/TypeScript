class Employee{
    name: string;
    salary: number;
    position: string;
    department: string;
    age: number;
    email: string;

    constructor(name: string, salary: number, position: string, department: string, age?: number, email?: string){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.age = undefined ? -1 : age;
        this.email = undefined ? 'n/a' : email;
    }

}

type DepartmentType = {
    name: string;
    salary: number; 
    position: string;
    age?:number; 
    email?: string
}

class Department {
    name: string;
    salary: number; 
    position: string;
    department: DepartmentType;
    age?:number; 
    email?: string

    constructor(name: string, salary: number, position: string, age?: number, email?: string){
        this.department = {
            name: name,
            salary,
            position,
            age,
            email,
        }
    }

    getPerson(): object{
        return this.department;
    }

}


type personObj = {
    [name: string] : {};
}


interface departmentObj {
    [name:string] : personObj[];
}



function highestPaidDepartment(arr: (string|number)[]): void{
    let itterations: number = Number(arr[0]);
    let companyList: departmentObj = {};
    
    for(let i = 1; i <= itterations; i++){
        let currentArr = arr[i].toString().split(' ');
        let name: string = currentArr[0];
        let salary: number = Number(currentArr[1]);
        let position: string = currentArr[2];
        let department: string = currentArr[3];
        let email = "n/a";
        let age = -1;
        if (currentArr.length == 6){
            email = currentArr[4]
            age = Number(currentArr[5])
        }else if (currentArr.length == 5){
            if(currentArr[4].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
                email = currentArr[4]
            }else{
                age = Number(currentArr[4]);
            }
        }
        // let currentPerson = new Employee(name, salary, position, department, age, email);
        let currentDepartment =  new Department(name, salary, position, age, email);
        if(companyList[department]){
            companyList[department].push({ [department] : currentDepartment.department});
        }else{
            companyList[department] = [{[department] : currentDepartment.department}]
        }
    }

    let companiesAvg: object[] = [];

    for(let obj in companyList){
        let companyName: string = obj;
        let totalSalary: number = 0;
        let count = 0;
        for(let currentPerson of companyList[obj]){
            let arr = Object.entries(currentPerson);
            arr.forEach(obj => { 
                totalSalary += obj[1]['salary'] 
                count++
            })
        }
        companiesAvg[companyName] = (totalSalary / count).toFixed(2);
    }

    let highestAverage: object = Object.entries(companiesAvg)[0];
    for(let company in companiesAvg){
        if(Number(companiesAvg[company]) > Number(highestAverage[1])){
            highestAverage = [company, companiesAvg[company]];
        }
    }
    let sortedArr = companyList[highestAverage[0]].sort((a, b) => {
        return b[highestAverage[0]]['salary'] - a[highestAverage[0]]['salary'] ;
    });
    console.log(`Highest Average Salary: ${highestAverage[0]}`);
    sortedArr.forEach(item => console.log(`${item[highestAverage[0]]['name']} ${item[highestAverage[0]]['salary']} ${item[highestAverage[0]]['email']} ${item[highestAverage[0]]['age']}`));
}

highestPaidDepartment([4,
    "Tina 333.33 Manager Marketing 33", 
    "Peter 120.00 Dev Development peter@abv.bg 28",
 "Sam 840.20 ProjectLeader Development sam@sam.com",
"George 0.20 Freeloader Nowhere 18"])
console.log('-----------------')
highestPaidDepartment([
6,
"Silver 496.37 Temp Coding silver@yahoo.com",
"Sam 610.13 Manager Sales",
"John 609.99 Manager Sales john@abv.bg 44",
"Venci 0.02 Director BeerDrinking beer@beer.br 23",
"Andre 700.00 Director Coding",
"Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
])

// class Department{
//     employeeList: object[];

//     constructor (employee: object){
    
//     }
// }