function employeeInfo(arr: string[]): void {

    arr.forEach((el: string) => console.log(`Name: ${el} -- Personal Number: ${el.length}`));

}

employeeInfo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
employeeInfo(['Samuel Jackson','Will Smith', 'Bruce Willis', 'Tom Holland' ])