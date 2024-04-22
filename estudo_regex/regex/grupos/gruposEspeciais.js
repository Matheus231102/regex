const texto = "João é calmo, mas no trânsito fica nervoso."

const regex = /[\wÀ-ú]+(?=\.)/gi

// positive lookahead

// (?=\.) ou (?=o) indica que depois da achar a palavra com o conjunto [\wÀ-ú]+ verificará se possui o "." ou o "o"
// se possuir vai dar match na palavra sem precisar de capturar o ponto diferente de
const regexComPonto = /[\wÀ-ú]+\./gi

console.log(texto.match(regex))
console.log(texto.match(regexComPonto))

// negative lookahead

const regexNegativa = /[\wÀ-ú]+(?!\.)/gi

// indica que dará match na palavra que não possuir posteriormente o "."

console.log(texto.match(regexNegativa))




