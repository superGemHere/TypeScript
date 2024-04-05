function PrintDayOfTheWeek(weekDay: string): void{

    enum daysOfTheWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    if(!Object.values(daysOfTheWeek).includes(weekDay)){
        console.log('error')
    }else{
        console.log(daysOfTheWeek[weekDay]);
    }

}

PrintDayOfTheWeek('Monday');
PrintDayOfTheWeek('Friday');
PrintDayOfTheWeek('Sunday');
PrintDayOfTheWeek('Invalid');