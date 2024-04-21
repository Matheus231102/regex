const texto = "Você precisa responder sim, não ou não sei!"
console.log(texto.match(/não sei|não/g))
console.log(texto.match(/não|não sei/g))

// a ordem importa na questão

