//case insensitive
const texto2 = "Casa bonita é casa amarela da esquina CASAR"
const regex = /casa/gi

console.log(texto2.match(regex))
console.log(texto2.match(/a b/))

// case sensitive
const regex2 = /casa/g
console.log(texto2.match(regex2))

const texto3 = "Testando frase regex";
const texto4 = `
    Testando frase regex novamente com template string
`

// verificar diferença entre tab e espaço
const texto5 = "    "
console.log(texto5.match(/\s/g))


// convertendo String em Array
const texto8 = "1,2,3,4,5,6"
const regexVirgula2 = /,/g

const arrayDeNumeros = texto8.split(regexVirgula2).map(numberStringValue => {
    return parseInt(numberStringValue);
})
console.log(arrayDeNumeros)

// quantas vírgulas tem no texto8 ?
let contador = 0;
texto8.match(regexVirgula2).length
console.log(texto8.match(regexVirgula2))
console.log("Contador: " + texto8.match(regexVirgula2).length)

// quantas vezes aparece "es" ou "ES" sem o "eS" ou "Es"
const texto10 = `Depois de aprender os conceitos básicos, 
reserve tempo eS para praticar EScrevendo suas próprias exprESsões regularES`

const regexEs = /es/gi
const invalidES = ["Es", "eS"]
console.log(texto10.match(regexEs))
console.log(texto10.match(regexEs).filter(stringValue => { return !invalidES.includes(stringValue) }))

let contagemCorreta = texto10.match(regexEs)
    .filter(stringValue => { return !invalidES.includes(stringValue)})
    .length
console.log(contagemCorreta)




