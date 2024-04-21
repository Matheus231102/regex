// . ? * + - ^ $ | [ ] { } ( ) \ :

// procurar ponto dentro da string, tomar cuidado
// com metacaracteres

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g

// metacaractere (escape) -> \

console.log(texto.match(regexPonto))

// retirar todos os estudo_regex excetos numeros e letras da string texto

const regexRetirarCaracteres = /,|\.| |\?|!/gi
console.log(texto.replace(regexRetirarCaracteres, ''))
console.log(texto.split(regexRetirarCaracteres))

// retirar "\" da string abaixo

let stringTeste = "Esta é uma string com todos os \\\ estudo_regex escapados.";
const regexRetiraEscape = /\\/g
const regexRetiraDoisEspacos = /  /g

stringTeste = stringTeste.replace(regexRetiraEscape, '')
stringTeste = stringTeste.replace(regexRetiraDoisEspacos, ' ')
console.log("String Resultante: " + stringTeste)


// . é um coringa, válido para uma posição
const texto2 = "1,2,3,4,5,6"
const regex2 = /1...3/g

console.log(texto.match(regex2))

// substituir "6.5,7.8,9.2,10.0" por "6,5-7,8-9,2-10,0"
const notas = "8.3,7.1,8.8,10.0"

const notasFormatadas = notas
    .replace(/,/g, "-")
    .replace(/\./g, ",");

console.log(notasFormatadas);
// saida: "8.3-7.1-8.8-10.0"


// pegar coisas que estão entre pontos

const regexEntrePontos = /.\../g
console.log(notas.match(regexEntrePontos))

// retirar notas e colocar num array

const retiraNotasFormatadas = /-/g
const notasArray = notasFormatadas.split(retiraNotasFormatadas)

console.log(notasArray)

