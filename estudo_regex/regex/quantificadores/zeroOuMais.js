const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!"
const texto2 = "The is big fog in NYC"

const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))


