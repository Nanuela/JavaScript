//JAVASCRIPT 
let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}

function mudarCor() {
    texto.style.color = "green"
    document.body.style.backgroundColor = "blue"
}

function trocarFundo() {
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "yellow"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.scr = "gatinho3.jpg"
}
function destroca(){
    imagem.scr = "gatinho4.jpg"
}

let mensagem = document.getElementById("mensagem")
function outroTexto(){
    mensagem.innerText = "Texto Alterado"
}

function voltaTexto(){
    mensagem.innerText = "Passe o mouse aqui"

}

function aparece(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

