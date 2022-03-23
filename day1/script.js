var numeroUm = 1 //tipo número
var stringUm = "1" //tipo texto
var numeroTrinta = 30
var stringTrinta = "30"
var numeroDez = 10
var stringDez = "10"

//comparacao por valor (igual
if (numeroUm == stringUm) {
  document.write("<h1 class='primeira-frase'>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.</h1><br>")
} else {
  document.write("<h1>As variáveis numeroUm e stringUm não tem o mesmo valor.</h1><br>")
}

//comparacao por valor e tipo (exatamento igual)
if (numeroTrinta === stringTrinta)  {
  document.write("<h1>As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.</h1><br>")
} else {
  document.write("<h1>As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.</h1><br>")
}

if (numeroDez == stringDez) {
  document.write("<h1>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.</h1><br>")
} else {
  document.write("<h1>As variáveis numeroDez e stringDez não tem o mesmo valor.</h1><br>")
}