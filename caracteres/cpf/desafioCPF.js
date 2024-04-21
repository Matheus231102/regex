const textoAprovados =`CPF dos aprovados: 
	- 519.126.010-44
	- 887.725.560-99
	- 065.432.820-02
	- 717.461.940-14`

const textoAprovadosErro = `CPF dos aprovados: 
	- 519.126.01044 inválido
	- 887.725.560-99 válido
	- 8237.725.560-99 inválido
	- 8237.725.50-992 inválido
	- 88.725.560-99 inválido
	- 065,432,820-02 inválido
	- 311.901.390-06 válido
	- 717*461*94014 inválido`


// Extrair cpf com as pontuações
const regexCPF = /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g

console.log(textoAprovados.match(regexCPF))
console.log(textoAprovadosErro.match(regexCPF))

