/*
    Create a method to read an object's properties and display only the string properties that are on that object.
    (Criar um método para ler propriedades de um objeto e  exibir somente as propriedades do tipo string que estão nesse objeto).
*/

// Declaring Object Movie
const movie = {
    title: 'Vingadores',
    year: 2018,
    director: 'Robin',
    personage: 'Homem de Ferro',
    income: 1000000 
};

readStringObject(movie);

// Declaring Method for Reading the Objective
function readStringObject(obj){
    // Percorrendo Objeto 
    for (const key in obj) {
        // Validating if it is a string
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key]);
        } 
    }
}
