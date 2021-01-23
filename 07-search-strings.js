/*
    Criar um método para ler propriedades de um objeto e  
    exibir somente as propriedades do tipo string que estão nesse objeto
*/

const movie = {
    title: 'Vingadores',
    year: 2018,
    director: 'Robin',
    personage: 'Homem de Ferro',
    income: 1000000 
}

readStringObject(movie);
function readStringObject(obj){
    // For para percorrer o objeto movie
    for (const key in obj) {
        // Validando se é string
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key])
        } 
    }
}
