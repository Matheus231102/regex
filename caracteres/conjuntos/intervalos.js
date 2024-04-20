const texto = "1,2,3,4,5,6,a.b AWSDAWD c!d?[f"

console.log(texto.match(/[a-z]/gi))
console.log(texto.match(/[b-d]/gi))
console.log(texto.match(/[2-4]/g))
console.log(texto.match(/[1-9]/g))
// dois intervalos
console.log(texto.match(/[1-9A-Z]/g))
console.log(texto.match(/[1-9a-z]/gi))

console.log("Testando novamente".match(/./g))

const texto2 = ".$+*?-"

console.log(texto2.match(/[$-?]/g))
console.log(texto2.match(/[$\-?]/gi)) // não é intervalo por conta do caractere escape

console.log(texto2.match(/[-$?]/g)) // trazendo os mesmos caracteres sem o escape

