/* Criar função somar que retorna a soma de todos os múltiplos de 3 e 5 */

console.log(sum(5));

function sum(limit){
    let arrayCount = [];
    let count = 0;

    for(let i = 0; limit >= i; i++){
        arrayCount[i] = i;
        if(arrayCount[i] % 3 === 0 || arrayCount[i] % 5 === 0){
            count += arrayCount[i];
        }
    }
    return count;
}