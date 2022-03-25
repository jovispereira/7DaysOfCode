// partes 1, 2 e 3
function escolherArea() {
	var areaEscolhida;

	for (var i = 0; i < 99; i++) {
		areaEscolhida = prompt("Você quer seguir sua carreira em qual área? Digite 1 para Front-End ou 2 para Back-End: ")
		if (areaEscolhida == 1 || areaEscolhida == 2) {
			break
		} else {
			alert("Resposta inválida! Digite 1 ou 2 para selecionar uma alternativa.")
		}
	}

	if (areaEscolhida == 1) {
		var tecnologiaEscolhida = prompt("Deseja aprender qual tecnologia desta área? Digite 1 para React ou 2 para Vue: ")
	} else {
		var tecnologiaEscolhida = prompt("Deseja aprender qual tecnologia desta área? Digite 1 para C# ou 2 para Java: ")
	}
	
	var futuroEscolhido = prompt("Qual seu objetivo para o futuro? Digite 1 se deseja se especializar na área ou 2 se deseja se desenvolver como fullstack: ")
	if (futuroEscolhido == 1) {
		alert("Se especializar é a melhor forma de alcançar resultados rápidos. Sem falar, é claro, que trabalhar com que gosta é ótimo!!!")
	} else {
		alert("Desenvolvedores fullstack são os profissionais mais completos do mercado. Sempre haverá uma vaga disponível para eles!")
	}	
}

// parte 4
function escolherNovasTecnologias() {
	var tecnologiasParaAprender = [];
	tecnologiasParaAprender.push(prompt("Agora, para finalizar, digite alguma tecnologia que deseje aprender ou se especializar: "))
	var iteracao = 0;
	var resposta = alert("Que legal, boa sorte com " + tecnologiasParaAprender[iteracao] + ".")
	var pergunta = prompt("Você deseja adicionar mais tecnologias? Digite 1 para Sim e 2 para Não: ")

	while (pergunta == 1) {
		tecnologiasParaAprender.push(prompt("Qual outra tecnologia que deseja aprender ou se especializar: "))
		iteracao++;
		resposta = alert("Que legal, boa sorte com " + tecnologiasParaAprender[iteracao] + ".")
		pergunta = prompt("Você deseja adicionar mais tecnologias? Digite 1 para Sim e 2 para Não: ")
	}

	document.write("<h1>Lista com Tecnologias para o Futuro:</h1><br>")
	
	for (var i = 0; i < tecnologiasParaAprender.length; i++)
	document.write("<h2>" + (i + 1) + ". " + tecnologiasParaAprender[i] + "</h2>")
}
	
escolherArea()
escolherNovasTecnologias()

