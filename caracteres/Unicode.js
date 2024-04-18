// capturando unicode com regex
const texto = "⋂⋖tƵesưte⋥"

console.log(texto.match(/\u10080/))

console.log("\u1008")
console.log("\u100A")
console.log("\u0BF5")
console.log('\u01A9')

console.log(texto.match(/\u01B0/))

const texto2 = "Testando regexƷcom unicode";
console.log(texto2.match(/\u01B7/))

