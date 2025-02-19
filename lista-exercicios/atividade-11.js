function JavaScript() {
    console.log("Eu gosto de JavaScript")
}
JavaScript()

console.log("----------------")
function contarAteCinco() {
    for(let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
contarAteCinco()

console.log("----------------")
function Saudacao() {
    let nome = prompt("qual seu nome?")
    console.log("Olá,", nome, "! Seja bem-vindo!")
}
Saudacao()

console.log("----------------")
function VerificarIdade() {
    let idade = prompt("qual sua idade?") 
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
VerificarIdade()

console.log("----------------")
function MutiplicarDoisNumeros(a,b) {
    let resultado = a * b 
    return resultado 
}
console.log(MutiplicarDoisNumeros(5,3))

console.log("----------------")
function SomaDoisNumeros(a,b) {
    let resultado = a + b 
    return resultado 
}
console.log(SomaDoisNumeros(4,6))


console.log("----------------")
function CalcularAreaRetangulo(base, altura) {
    let area = base * altura
    return area
}
console.log(CalcularAreaRetangulo(4,8))

console.log("----------------")
function CompararIdade() {
    let idade2 = prompt("Qual a idade da primeira pessoa?")
    let idade3 = prompt("Qual a idade da segunda pessoa?")
    if (idade2 > idade3) {
        console.log("A primeira pessoa é mais velha!")
    } else {
        console.log("A segunda pessoa é a mais velha!")
    }
}
CompararIdade()
