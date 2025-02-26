// Arquivo DOM.JS
let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover", function() {
    imagem.setAttribute("src", "gatinho2.jpg")
})
imagem.addEventListener("mouseout", function() {
    imagem.setAttribute("src", "gatinho1.jpg")
})
// -----------------------------------------------
let lista = document.getElementyById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicionar.addEventListener("click", function() {
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo item"
    lista.appendChild(novoItem)
})
