const texto = "ABCa [abc] a-c 1234"

console.log(texto.match(/\d/g)) // capturar numeros
console.log(texto.match(/\D/g)) // capturar não numeros

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_] = \w
console.log(texto.match(/\W/g)) // não caracteres [a-zA-Z0-9_]

const textoNumerico = "(21) 98312-2344"
const numero = textoNumerico.split(/\D/g).join("")
const numero2 = textoNumerico.match(/\d/g).join("")

console.log(numero)
console.log(numero2)

const texto2 = `testando espaço em brancos	

	`

// retirando espaços em branco
console.log(texto2.match(/\s/g))
console.log(texto2.split(/\s/g).join(""))


