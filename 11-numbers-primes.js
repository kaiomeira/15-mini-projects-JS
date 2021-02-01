//Criar função para mostrar os números primos

/***** Form 1 *****/
exibirNumerosPrimos(15)
function exibirNumerosPrimos(limite){
    for (let count = 2; count < limite; count++) {
        let ehPrimo = true;
        
        for(let divisor = 2; divisor < count; divisor++){
            if (count % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(count);
    }
}

// Quebra de linha
console.log('');

/***** Form 2 *****/
exibirNumerosPrimos2(15);

function exibirNumerosPrimos2(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(numeroPrimo(numero)) console.log(numero);
    }
} 

function numeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    } 
    return true;
}