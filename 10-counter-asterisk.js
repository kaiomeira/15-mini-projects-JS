let quantityAsterisk = 10
displayAsterisk(quantityAsterisk);

function displayAsterisk(qntAsterisk){
    for (let row = 1; row <= qntAsterisk; row++) {  
        let asterisk = '';
        for(let col = 0; col < row; col++){
            asterisk += '*'
        }
        console.log(asterisk);
    }  
}
