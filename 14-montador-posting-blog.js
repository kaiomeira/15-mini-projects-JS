/*
    Objeto postagem de blog 
    Crie um objeto de postagem de blog que vai conter as seguintes propriedades

    titulo
    mensagem
    autor
    visualizações
    comenetarios
        (autor, mensagem)
    estaAoVivo
*/ 

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacao: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);