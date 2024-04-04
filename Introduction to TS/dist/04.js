function PrintDayOfTheWeek(weekDay) {
    let daysOfTheWeek;
    (function (daysOfTheWeek) {
        daysOfTheWeek[daysOfTheWeek["Monday"] = 1] = "Monday";
        daysOfTheWeek[daysOfTheWeek["Tuesday"] = 2] = "Tuesday";
        daysOfTheWeek[daysOfTheWeek["Wednesday"] = 3] = "Wednesday";
        daysOfTheWeek[daysOfTheWeek["Thursday"] = 4] = "Thursday";
        daysOfTheWeek[daysOfTheWeek["Friday"] = 5] = "Friday";
        daysOfTheWeek[daysOfTheWeek["Saturday"] = 6] = "Saturday";
        daysOfTheWeek[daysOfTheWeek["Sunday"] = 7] = "Sunday";
    })(daysOfTheWeek || (daysOfTheWeek = {}));
    if (!Object.values(daysOfTheWeek).includes(weekDay)) {
        console.log('error');
    }
    else {
        console.log(daysOfTheWeek[weekDay]);
    }
}
PrintDayOfTheWeek('Monday');
PrintDayOfTheWeek('Friday');
PrintDayOfTheWeek('Sunday');
PrintDayOfTheWeek('Invalid');
