const texto1 = `pegar grupo hehehehehehe`

console.log(texto1.match(/(he){1,2}/g))

// conceito de retrovisores

const texto2 = `<div>TESTE</div><data>TESTE2</data><abbr>Testando</abbr>`
console.log(texto2.match(/<(\w+)>.*<\/\1>/g))

const texto3 = `(matheus)-(matheus)-(replace)-(replace)-(testando)-(tesn)`
console.log(texto3.match(/(\(\w+\))-\1+/g))

const texto4 = `Lentamente é mente muito lenta`
console.log(texto4.match(/(lenta)(mente).*/gi))
console.log(texto4.match(/(lenta)(mente).*\1/gi))
console.log(texto4.match(/(lenta)(mente).*\2/gi))
console.log(texto4.match(/(?:lenta)(mente).*\1/gi)) // ?: significa que valor não será guardado

console.log(texto4.match(/(lenta)(mente)?/gi)) // ? atributo opcional

const texto5 = `supermercado hipermercado minimercado mercado`


console.log(texto5.match(/(super|hiper|mini)mercado/g))
console.log(texto5.match(/(super|hiper|mini)?mercado/g))
console.log(texto5.match(/((su|hi)per|mini)?mercado/g))

const texto6 = `doutor (filho) é aluno no (ABC)`

console.log(texto6.match(/[(abc)]/gi)) // dentro do conjunto, o grupo não existe
console.log(texto6.match(/([abc])/gi))








