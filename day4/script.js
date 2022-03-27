function sortearNumero () {
    var numeroSorteado = Math.floor(Math.random() * (10-0) + 0)
    console.log(numeroSorteado)
    return numeroSorteado
}

function jogar (numeroSorteado) {
    var chute;

    var tentativas = 0;
    while (tentativas < 3) {
        alert("Você tem " + (3 - tentativas) + " tentativas restantes.")
        chute = prompt("Digite o seu chute: ")

        if (chute == numeroSorteado) {
            tentativas = 3
            alert("Parabéns!!! Você acertou, o número secreto era " + numeroSorteado + ".")
            var elementoResultado = document.getElementById("resultado")
            elementoResultado.innerHTML = "Parabéns!!!"
        } else if (chute < numeroSorteado && tentativas < 2) {
            alert("Errou! Tente chutar mais alto da próxima vez.")
        } else if (chute > numeroSorteado && tentativas < 2) {
            alert("Errou! Tente chutar mais baixo da próxima vez.")
        }
        tentativas++
    }
    if (chute != numeroSorteado) {
        alert("Suas tentativas acabaram, o número secreto era " + numeroSorteado + ".")
        var elementoResultado = document.getElementById("resultado")
        elementoResultado.innerHTML = "Você falhou!!!"
    }
}

function main () {
    var numeroSorteado = sortearNumero()
    jogar(numeroSorteado)
}

main()


