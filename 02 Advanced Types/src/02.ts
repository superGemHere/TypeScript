interface PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
}

function createPerson(param1: string, param2: string, param3: string): PersonInfo {
    let person: PersonInfo = {
        firstName: param1,
        lastName: param2,
        age: Number(param3)
    };

    return person;
}

console.log(createPerson("Peter", "Pan", "20"))
console.log(createPerson("George", "Smith", "18"))