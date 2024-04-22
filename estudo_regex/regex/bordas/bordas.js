const texto = "Romário era um\n	 excelente jogador"

console.log(texto.match(/(romário)|(jogador)/gi))
console.log(texto.match(/^R/gi)) // ^ circunflexo significa inicio da String
console.log(texto.match(/r$/gi)) // $ dólar significa final da String
console.log(texto.match(/^r.*r$/gi))

