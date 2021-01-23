/*

between 06:00 to 12:00 : Good Morning!
between 12:00 to 18:00 : Good Afternoon!
between 18:00 to 05:00 : Good Evening!

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

*/

// Declaring variables
let date, hour;

// Assigning a function Date() for the variable date
date = new Date();

// Assinging hour for variable hour and transformation in Number
hour = Number(date.getHours());

console.log(`${hour}`);

// Verification for greeting
if (hour > 6 && hour < 12) {
    console.log('Good Morning!');
} else if (hour > 12 && hour < 18) {
    console.log('Good Afternoon!');
} else{
    console.log('Good Evening!');
}