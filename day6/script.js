var laticinios = []
var frutas = []
var congelados = []
var doces = []

var pergunta = prompt("LISTA DE COMPRAS:\n 1 - Adicionar alimento\n Digite o número referente a opção: ")
function adicionarAlimento() {
    while (pergunta == "1" || pergunta == "2") {  
    //adicionar
        if (pergunta == "1") {
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
        pergunta = prompt("LISTA DE COMPRAS:\n 1 - Adicionar alimento\n 2 - Remover alimento\n 3 - Finalizar e ver lista \n Digite o número referente a opção: ")
    }
       
        var listaDeCompras = [...laticinios, ...frutas, ...congelados, ...doces]
    //remover
        if (pergunta == "2") {
        var alimentoRemovido = prompt("Selecione um dos itens da lista para remover: \n - " + listaDeCompras.join("\n - "))
            if (listaDeCompras.indexOf(alimentoRemovido) >= 0) {
            listaDeCompras.splice(listaDeCompras.indexOf(alimentoRemovido), 1)

                if (laticinios.indexOf(alimentoRemovido) >= 0) {
                    laticinios.splice(laticinios.indexOf(alimentoRemovido), 1)
                } else if (frutas.indexOf(alimentoRemovido) >= 0) {
                    frutas.splice(frutas.indexOf(alimentoRemovido), 1)
                } else if (congelados.indexOf(alimentoRemovido) >= 0) {
                    congelados.splice(congelados.indexOf(alimentoRemovido), 1)
                } else {
                    doces.splice(doces.indexOf(alimentoRemovido), 1)
                }

            alert("Item removido com sucesso! Agora sua lista contém: \n - " + listaDeCompras.join("\n - "))
            pergunta = prompt("LISTA DE COMPRAS:\n 1 - Adicionar alimento\n 2 - Remover alimento\n 3 - Finalizar e ver lista \n Digite o número referente a opção: ")
            } else {
            alert("Não foi possível encontrar o item dentro da lista!")
            pergunta = prompt("LISTA DE COMPRAS:\n 1 - Adicionar alimento\n 2 - Remover alimento\n 3 - Finalizar e ver lista \n Digite o número referente a opção: ")
            }
        }   
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