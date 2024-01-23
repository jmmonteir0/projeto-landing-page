var SetaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function rolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex "
}

function rolarParaEsquerda() {
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}