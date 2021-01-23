/*
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by 3 and 5 => FizzBuzz
Not Divisible by 3 or 5 => Entrance
Not a number => "Not a Number"
*/

// Declaring a constant returnEntrace and assigning function fizzBuzz 
const returnEntrace = fizzBuzz(15)
console.log(returnEntrace);

// Declaring function fizzBuuzz
function fizzBuzz(entrance){
    if (typeof entrance !== 'number') {
        return "Not a Number"
    } else {
        if (entrance % 3 === 0 && entrance % 5 === 0) {
            return "FizzBuzz"
        } else if (entrance % 3 === 0) {
            return "Fizz"
        } else if (entrance % 5 === 0) {
            return "Buzz"
        } else {
            return entrance
        }
    }   
}