// Primeira opção
let faixaPreco = [
    {
        tooltip: 'até R$ 700,00:', 
        minimo: 0,
        maximo: 700
    },
    {
        tooltip: 'de R$ 700,00 a R$ 1000,00',
        minimo: 700,
        maximo: 1000
    },
    {
        tooltip: 'de R$ 1000,00 ou mais',
        minimo: 1000,
        maximo: 9999999
    }
];

console.log(faixaPreco)

// Segunda Opção (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

const faixas2 = [
    new FaixaPreco('a - segunda opcao', 1, 100),
    new FaixaPreco('b - segunda opcao', 100, 1000),
    new FaixaPreco('c - segunda opcao', 1000, 10000),
];
console.log(faixas2);

// Terceira Opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas3 = [
    criaFaixaPreco('a', 1, 1000),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
]

console.log(faixas3)

