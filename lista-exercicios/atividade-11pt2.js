let saudacao = function(nome) {
    console.log('Olá,' + nome + '! Como vai?')
}

let nome = prompt("Digite seu nome:")
saudacao(nome);

console.log("----------------")
let somar = function(a, b) {
    let resultado = a + b
    console.log('A soma é: ' + resultado)
}

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
somar(numero1, numero2);

console.log("----------------")
let calcularAreaRetangulo = function(base, altura) {
    return base * altura
}

let base = Number(prompt("Digite a base do retângulo:"))
let altura = Number(prompt("Digite a altura do retângulo:"))
console.log('A área do retângulo é: ' + calcularAreaRetangulo(base, altura));

console.log("----------------")
let dobro = (numero) => numero * 2

let numero = Number(prompt("Digite um número:"))
console.log('O dobro do número é: ' + dobro(numero));

console.log("----------------")
let quadrado = (numero) => numero * numero

let numeroQuadrado = Number(prompt("Digite um número para calcular o quadrado:"))
console.log('O quadrado do número é: ' + quadrado(numeroQuadrado));

console.log("----------------")
let verificarIdade = (idade) => {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

let idade = Number(prompt("Digite sua idade:"))
verificarIdade(idade);

console.log("----------------")
let calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
console.log('A média das notas é: ' + calcularMedia(nota1, nota2, nota3));