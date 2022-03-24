var nome;
var idade;
var linguagem;

function cadastrarUsuario() {
	nome = prompt("Digite o seu nome: ")
	idade = parseInt(prompt("Agora, digite a sua idade: "))
	linguagem = prompt("Por último, digite a linguagem de programação que está estudando: ")
	exibirInfoDoUsuario(nome, idade, linguagem)
	exibirMaisPerguntas(linguagem)
}

function exibirInfoDoUsuario(n, i, l) {
	document.write("<p class='bem-vindo'>Olá " + n + ", você tem " + i + " anos e já está aprendendo " + l + "!</p>")
}

var perguntas;
var resposta1;
var resposta2;

function exibirMaisPerguntas(l) {
	perguntas = 1;
	if (perguntas === 1) {
		resposta1 = prompt("Você deseja responder mais " + perguntas + " pergunta? Digite S para SIM ou N para NÃO: ")
	} else {
		resposta1 = prompt("Você deseja responder mais " + perguntas + " perguntas? Digite S para SIM ou N para NÃO: ")
	}

	if (resposta1 === "S" || resposta1 === "s") {
		resposta2 = prompt("Você gosta de estudar " + l + "? Digite S para SIM ou N para NÃO: ")
	} else if (resposta1 === "N" || resposta1 === "n") {
		document.write("<br><p>Obrigado pela atenção.</p>")
	} else {
		alert("Você não digitou um caractere válido!")
	}

	if (resposta2 === "S" || resposta2 === "s") {
		document.write("<br><p>Você gosta de estudar " + l + "? Siiim?!<br>Muito bom! Continue estudando "+ l + " e você terá muito sucesso.</p>")
	} else if (resposta2 === "N" || resposta2 === "n") {
		document.write("<br><p>Você gosta de estudar " + l + "? Nããão?!<br>Ahh que pena... Já tentou aprender outras linguagens além de " + l + "?</p>")
	} else {
		alert("Você não digitou um caractere válido!")
	}


}

cadastrarUsuario()
