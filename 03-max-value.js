//Write a function that uses 2 numbers and returns the largest between them

let valueMax = max(10,20);
console.log(valueMax)

function max(value1, value2){
    if (value1 > value2) {
        return value1;
    }else if (value2 > value1) {
        return value2;
    } else {
        return "value 1 and value they are the same"
    }  
} 

/* or ternary operator

function max(value1, value2){
    return value1 > value2 ? value1: value2;
}

*/