/* Criar função somar que retorna a soma de todos os múltiplos de 3 e 5 */

somar(10);

function somar(limite){
    // Declaring variable and Object
    let arrayCount = [];
    let conta = 0;

    for(let count = 0; limite >= count; count++){
        arrayCount[count] = count;
        if(arrayCount[count] % 3 === 0 || arrayCount[count] % 5 === 0){
            conta += arrayCount[count];
        }
    }
    console.log(conta);
}