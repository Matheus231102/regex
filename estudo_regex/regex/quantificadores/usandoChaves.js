const texto = "O joão recebeu 120 milhões apostando 6 9 21 23 45 46."

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{2}/g))
console.log(texto.match(/\d{1,}/g))
console.log(texto.match(/\d+/g))

console.log(texto.match(/\w{7}/g))
console.log(texto.match(/\w+/g))
console.log(texto.match(/[\wõ]+/g))
console.log(texto.match(/[\wõ]{7,}/g))

console.log(texto.match(/\b\d{1,2}\b/g))

// quantificadores gulosos (greedy)
const texto2 = "<div>Conteudo 01</div><div>Conteudo 02</div>>"

console.log(texto2.match(/<div>.+<\/div>/g))
console.log(texto2.match(/<div>.*<\/div>/g))
console.log(texto2.match(/<div>.{0,100}<\/div>/g))

// quantificadores não gulosos (lazy)

console.log(texto2.match(/<div>.+?<\/div>/g))
console.log(texto2.match(/<div>.*?<\/div>/g))


const texto3 = "<div></div></div></div></div>"

// captura a primeira e a última tag html
console.log(texto3.match(/<div>.{0,}<\/div>/g))

// captura a primeira e a segunda tag html
// pega o primeiro registro do regex que aparece
console.log(texto3.match(/<div>.{0,}?<\/div>/g))
console.log(texto3.match(/<div>.*?<\/div>/g))





