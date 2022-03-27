var laticinios = []
var frutas = []
var congelados = []
var doces = []
var listaDeCompras = [laticinios, frutas, congelados, doces]

function adicionarAlimento() {
    var pergunta = prompt("Você deseja adicionar um alimento? Digite sim ou não: ")
    
    while(pergunta == "sim") {
        var alimentoAdicionado = prompt("Digite o alimento: ")
        var categoriaSelecionada = prompt("Qual categoria esse alimento pertence?\n 1. Laticínios\n 2. Frutas\n 3. Congelados\n 4. Doces\n Digite o número correspondente: ")
        
        if (categoriaSelecionada == 1) {
            laticinios.push(alimentoAdicionado)
        } else if (categoriaSelecionada == 2) {
            frutas.push(alimentoAdicionado)
        } else if (categoriaSelecionada == 3) {
            congelados.push(alimentoAdicionado)
        } else {
            doces.push(alimentoAdicionado)
        }
        pergunta = prompt("Você deseja adicionar mais alimentos? Digite sim ou não: ")
    }
}

function mostrarListaDeCompras() {
    var elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = "<h1>LISTA DE COMPRAS</h1>"
    
    if (laticinios.length > 0) {
        elementoResultado.innerHTML += ("<h2>Laticínios:</h2>")
        for (var i = 0; i < laticinios.length; i++) {
            elementoResultado.innerHTML += " - " + laticinios[i] + "<br>"
        }
    }
    
    if (frutas.length > 0) {
        elementoResultado.innerHTML += ("<h2>Frutas:</h2>")
        for (var i = 0; i < frutas.length; i++) {
            elementoResultado.innerHTML += " - " + frutas[i] + "<br>"
        }
    }
        
    if (congelados.length > 0) {
        elementoResultado.innerHTML += ("<h2>Congelados:</h2>")
        for (var i = 0; i < congelados.length; i++) {
            elementoResultado.innerHTML += " - " + congelados[i] + "<br>"
        }
    }

    if (doces.length > 0) {
        elementoResultado.innerHTML += ("<h2>Doces:</h2>")
        for (var i = 0; i < doces.length; i++) {
            elementoResultado.innerHTML += " - " + doces[i] + "<br>"
        }
    }
}

function main() {
    adicionarAlimento()
    mostrarListaDeCompras()
}

main()