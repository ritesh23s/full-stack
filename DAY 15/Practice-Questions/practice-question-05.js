// Question - Usee switch statement to print the day of week using a number variable 'day' with values of 1 to 7.

let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday,fun day!");
        break;
    default:
        console.log("(Wrong Day)Bokachoda hai tum week me 7 din hi hote hain sirf !");
        break;
}