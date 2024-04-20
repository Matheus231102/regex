const texto = "1,2,3,4,5,6,a.b c!d?[f"
const regexPares = /[02468]/g

console.log(texto.match(regexPares))

const texto2 = "não vai na moto";

const regexComESemAssento = /n[ãa]/g
console.log(texto2.match(regexComESemAssento))

const texto3 = "na, no, ni, na"
const regex3 = /n[ãa]./g
console.log(texto3.match(regex3))

// pegar primeira palavra
const texto4 = "testando aplicação novamente"
const regex4 = /^.../

console.log(texto4.match(regex4))
