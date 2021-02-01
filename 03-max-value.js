// Write a function that uses 2 numbers and returns the largest between them

// Declaring Variables for Comparison
let number1, number2;

// Assigning Values to Variables
number1 = 10;
number2 = 20;

console.log(max(number1,number2));

// Ternary Operator - validation
function max(value1, value2){
    return value1 > value2 ? value1: value2;
}

/* or if/else
function max(value1, value2){
    if (value1 > value2) {
        return value1;
    }else if (value2 > value1) {
        return value2;
    } else {
        return "value 1 and value they are the same"
    }  
} 
*/