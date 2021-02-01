/*
    Javascript - Objeto Endereço

    1- Criar um Objeto Endereco que Contem:
    - rua, cidade, cep como atributos
    2 - exibirEndereco(endereco)
*/

let endereco = {
    rua: 'Rua Antonio',
    cidade: 'São Paulo',
    CEP: '04821140'
};

exibirEndereco(endereco);

function exibirEndereco(endereco){
    for (let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}