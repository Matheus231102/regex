const texto = "ABCa [abc] a-c 1234"

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))

// intervalos usam a ordem da tabela UNICODE
console.log(texto.match(/[A-z]/g))
console.log(texto.match(/[A-Z][a-z]/g))



