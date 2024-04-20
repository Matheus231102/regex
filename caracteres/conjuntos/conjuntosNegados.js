const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^\d]/g))
console.log(texto.match(/[\d]/g))

console.log(texto.match(/[^,]/g))

console.log(texto.match(/[^,.\s?!]/g))

