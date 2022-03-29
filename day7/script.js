//sair = mostrar na tela todas as operações realizadas e o resultado
function iniciar() {
	var nome = prompt("Digite seu nome: ")
	alert("Olá " + nome + ", bem-vindo(a) a calculadora. Você pode somar, subtrair, multiplicar e/ou dividir qualquer número por aqui.")
}

function perguntar() {
	var operacao = parseInt(prompt("- OPÇÕES -\n\n 1 - Adição\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n 0 - Sair\n\nDigite o número referente a opção que deseja:"))
	if (operacao > 0 && operacao <= 4) {
		var primeiroNumero = parseInt(prompt("Digite o primeiro número: "))
		var segundoNumero = parseInt(prompt("Digite o segundo número: "))
		return [primeiroNumero, operacao, segundoNumero]
	} else if (operacao < 0 || operacao > 4) {
		alert("Você não digitou uma opção válida! Escolha um número de opção existente.")
		operacao = parseInt(prompt("- OPÇÕES -\n\n 1 - Adição\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n 0 - Sair\n\nDigite o número referente a opção que deseja:"))
		var primeiroNumero = parseInt(prompt("Digite o primeiro número: "))
		var segundoNumero = parseInt(prompt("Digite o segundo número: "))
		return [primeiroNumero, operacao, segundoNumero]
	} else {
		sair()
	}
}

var n1
var n2
var n3

function somar(n1, n2) {
	n3 = n1 + n2
	return n3
}

function subtrair(n1, n2) {
  	n3 = n1 - n2
  	return n3
}

function multiplicar(n1, n2) {
	n3 = n1 * n2
	return n3
}

function dividir(n1, n2) {
	n3 = n1 / n2
	return n3
}

var elementoResultado = document.getElementById("resultado")
elementoResultado.innerHTML = "<h1> Operações Realizadas </h1>"

function realizarOperacao(primeiroNumero, operacao, segundoNumero) {
	switch (operacao) {
		case 1:
			alert(primeiroNumero + " + " + segundoNumero + " = " + somar(primeiroNumero, segundoNumero))
			elementoResultado.innerHTML += "<h2>" + primeiroNumero + ' + ' + segundoNumero + ' = ' + somar(primeiroNumero, segundoNumero) + "</h2>"
			break

		case 2:
			alert(+ primeiroNumero + " - " + segundoNumero + " = " + subtrair(primeiroNumero, segundoNumero))
			elementoResultado.innerHTML += "<h2>" + primeiroNumero + ' - ' + segundoNumero + ' = ' + subtrair(primeiroNumero, segundoNumero) + "</h2>"
			break

		case 3:
			alert(primeiroNumero + " * " + segundoNumero + " = " + multiplicar(primeiroNumero, segundoNumero))
			elementoResultado.innerHTML += "<h2>" + primeiroNumero + ' * ' + segundoNumero + ' = ' + multiplicar(primeiroNumero, segundoNumero) + "</h2>"
			break

		case 4:
			alert(primeiroNumero + " / " + segundoNumero + " = " + dividir(primeiroNumero, segundoNumero))
			elementoResultado.innerHTML += "<h2>" + primeiroNumero + ' / ' + segundoNumero + ' = ' + dividir(primeiroNumero, segundoNumero) + "</h2>"
			break
	}
}

function sair() {
	alert("Até a próxima!")
}

function main() {
	iniciar()
	var [primeiroNumero, operacao, segundoNumero] = perguntar()
	realizarOperacao(primeiroNumero, operacao, segundoNumero)
	while(operacao !== 0) {
		[primeiroNumero, operacao, segundoNumero] = perguntar()
		realizarOperacao(primeiroNumero, operacao, segundoNumero)
	}
}

main()