// estrutura condicional - if else

let idade = prompt("qual sua idade?")
console.log("sua idade é ", idade)

if (idade >= 18) {
    console.log("você é maior de idade")
} else {
    console.log("você é menor de idade")
}

console.log("----------------")
// verificando se um número é impar ou par 

let numero = prompt("escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0) {
    console.log("o número é par")
} else {
    console.log("o número é impar")
}

console.log("----------------")
//avaliação do aluno 

let nota1 = prompt("quala primeira nota:")
let nota2 = prompt("qual a segunda nota:")
let total = (nota1 + nota2) / 2 
if (total >= 7)  {
    console.log("você foi aprovado!")
} else {
    console.log("você foi reprovado")
}