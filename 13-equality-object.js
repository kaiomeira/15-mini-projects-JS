// Comparar Objetos
// Construtor de Objeto - endereco
function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

// Comparar se as propriedades são iguais
function saoIguais(endereco1, endereco2){      
    return  endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2));

// Comparar se a referência do objeto aponta para o mesmo local na memória
function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));