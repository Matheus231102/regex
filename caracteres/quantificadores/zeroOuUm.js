const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!"
const texto2 = "The is big fog in NYC"

const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = "Os números: 0123456789."
console.log(texto3.match(/[0-9]?/g))