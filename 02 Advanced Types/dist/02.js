function createPerson(param1, param2, param3) {
    let person = {
        firstName: param1,
        lastName: param2,
        age: Number(param3)
    };
    return person;
}
console.log(createPerson("Peter", "Pan", "20"));
console.log(createPerson("George", "Smith", "18"));
//# sourceMappingURL=02.js.map