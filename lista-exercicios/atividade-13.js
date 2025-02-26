let paragrafo = document.getElementById("paragrafo");
let botao = document.getElementById("button");
botao.addEventListener("click", function() { 
    paragrafo.style.color = "blue";
});

console.log("----------------")
let botao2 = document.getElementById("botao");
botao2.addEventListener("click", function(){
    botao2.style.backgroundColor = "red";
});

console.log("----------------")
let dualText = document.getElementById("dualText");
dualText.addEventListener("dblclick", function(){
    dualText.style.fontSize = "24px";
});

console.log("----------------")
let paragrafo2 = document.getElementById("paragrafo2");
paragrafo2.addEventListener("mousemove", function(){
    paragrafo2.style.backgroundColor = "blue";
});
paragrafo2.addEventListener("mouseout", function(){
    paragrafo2.style.backgroundColor = "aqua";
});

console.log("----------------")
let gatinho1 = document.getElementById("gatinho1");
let botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function(){
    gatinho1.style.width = "200px";
    gatinho1.style.height = "200px";
    gatinho1.style.objectFit = "cover";
});

console.log("----------------")
let gatinho2 = document.getElementById("gatinho2");
let botaoArredondar = document.getElementById("botaoArredondar");
botaoArredondar.addEventListener("click", function(){
    gatinho2.style.borderRadius = "50%";
});

console.log("----------------")
let primeiroBotao = document.getElementById("primeiroBotao");
let primeiroParagrafo = document.getElementById("primeiroParagrafo");
let primeiroTexto = document.getElementById("primeiroTexto");
primeiroBotao.addEventListener("click", function(){
    primeiroParagrafo.style.color = "magenta";
    primeiroTexto.style.backgroundColor = "blue";
});

let segundoBotao = document.getElementById("segundoBotao");
let segundoParagrafo = document.getElementById("segundoParagrafo");
let segundoTexto = document.getElementById("segundoTexto");
segundoBotao.addEventListener("click", function(){
    segundoParagrafo.style.color = "purple";
    segundoTexto.style.backgroundColor = "green";
    segundoParagrafo.style.fontSize = "20px";
});

let terceiroBotao = document.getElementById("terceiroBotao");
let terceiroParagrafo = document.getElementById("terceiroParagrafo");
let terceiroTexto = document.getElementById("terceiroTexto");
terceiroBotao.addEventListener("click", function(){
    terceiroParagrafo.style.color = "orange";
    terceiroTexto.style.backgroundColor = "red";
    terceiroParagrafo.style.fontSize = "30px";
    terceiroTexto.style.borderRadius = "40px";
});
