// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//PARTE 1


function darOlaPessoa(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

//darOlaPessoa('Henrique')
//darOlaPessoa('Vamos lá')


const darOlaPessoa2 = function(nome){

    const frase = `Olá, ${nome}!`
    console.log(frase)
}

//darOlaPessoa2('Horbilon')
//darOlaPessoa2('Aula function')

//PARTE 2


function exemplo1(numero){

    const par = (numero % 2) === 0

    const soma = numero + 10

    const multi = numero ** 2

    const frase = `O número ${numero} é par? ${par} e somado por 10 é ${soma} e multiplicado por ele mesmo é ${multi}`

    return frase

}

//console.log(exemplo1(5))



function verificarLogineSenha(login,senha){
    const valor1 = 'loginArmazenado'
    const valor2 = 'senhaArmazenada'
    
    const verificaLogin = valor1 === login
    const verificaSenha = valor2 === senha

    const ambas = verificaLogin && verificaSenha

    const frase = `As informações estão corretas? ${ambas}`

    return frase
}

//console.log(verificarLogineSenha('pedro', 'abc123'))

function pessoa(nome,anoNasc,anoAtual){
    const idade = anoAtual - anoNasc
    const maiorIdade = idade >= 18
    
    const frase = `${nome} é maior de idade? ${maiorIdade}`
    return frase
}

console.log(pessoa('Henrique',1991,2023))
console.log(pessoa('Pedro',2010,2023))

const nomePessoa = pessoa('Mamis',1964,2023)
console.log(nomePessoa)