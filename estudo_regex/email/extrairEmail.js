const texto = `
	email dos convidados: 
	- teste@cod23.com.br
	- xico@gmail.com
	- joao@empresa.info.br 
	- teste@registro.br 
	- teste.teste@yahoo.com	
	- fulano+teste@ttt.com
	- fula$no+teste@ttt.com
`

const regexEmail2 = /\b[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+\b/g
const regexEmail = /\b[\w.-]+@\w+\.\w{2,6}(\.\w{2})?\b/g

console.log(texto.match(regexEmail))
console.log(texto.match(regexEmail))
