// pegar letra a e b que dentro delas tenha 3 espaços
const texto = 'a   b, a    b, A   B';

const regexPegarAeB = /a   b/
const regexPegarAeB2 = /a\s\s\sb/
const regexPegarAeB3 = /a\s{3}b/
const regexPegarAeB4 = /a {3}b/

console.log(texto.match(regexPegarAeB))
console.log(texto.match(regexPegarAeB2))
console.log(texto.match(regexPegarAeB3))
console.log(texto.match(regexPegarAeB4))


