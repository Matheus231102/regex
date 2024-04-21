const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!"
const texto2 = "The is big fog in NYC"

const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = "Os números: 0123456789."
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))

console.log(texto1.match(/[a-zA-Z]+/g))

//Colocando traços dentro da palavras
console.log(texto1.match(/[a-zA-Z]+/g).join("-"))
const texto4 = "(21) 98314-6336"

// separando os números
console.log(texto4.match(/[0-9]+/g))

// representa ZERO OU UM do elemento a esquerda
console.log(texto4.match(/[0-9]?/g))







