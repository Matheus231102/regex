// problema do \n não ser considerado pelo ponto

const texto = 'Bom\ndia'
const texto2 = 'Bom\tdia'

console.log(texto.match(/./gi))
console.log(texto2.match(/./gi))

console.log(texto2.match(/.../gi))
console.log(texto2.match(/..../gi))

console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi))

// desafio quantas palavras com 4 estudo_regex tem na frase ?
const textoDesafio = `O erro ocorre porque você não está passando a função de substituição como argumento para o método replace(). O método replace() espera que você forneça uma função ou uma string para substituir as correspondências encontradas.`
// reposta: 7

const arrayDePalavrasCom4 = textoDesafio.split(/ /g)
const quantidadeDePalavrasCom4 = arrayDePalavrasCom4.filter(value => {
        return value.length === 4;
    }).length

console.log(quantidadeDePalavrasCom4)

