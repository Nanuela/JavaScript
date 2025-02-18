
for (let i = 1; i <= 30; i++) {
    console.log(i)
}

console.log("----------------")
for (let i = 30; i >= 1; i--) {
    console.log(i)
}
   
console.log("----------------")
let num = prompt("Digite a nota:")
for (let num = 0; num < 5; num++) {
    let numero = prompt("digite a nota: ")
    if (numero >= 50) {
        console.log("ACIMA DA MÉDIA")
    } else {
        console.log("ABAIXO DA MÉDIA")
    }
}

console.log("----------------")
let numero = prompt("digite um número para a tabuada: ")
for(let mult = 1; mult <= 10; mult++) {
 let resultado = mult * numero
 console.log(numero, "x", mult, "=", resultado)
}

console.log("----------------")
let patinhos = prompt("digite o número inicial de patinhos: ")
for (let num1 = patinhos; num1 > 0; num1--) {
    console.log(num1 + " patinho(s) foram passear")
    console.log("Além das montanhas")
    console.log("Para brincar")
    console.log("A mamãe gritou: Quá, quá, quá, quá")
    console.log("Mas só ", (num1 - 1), " patinho(s) voltaram de lá.")
    console.log("A mamãe patinha foi procurar")
    console.log("Além das montanhas")
    console.log("Na beira do mar")
    console.log("A mamãe gritou: Quá, quá, quá, quá")
    console.log("E os patinhos voltaram de lá.")
}

console.log("----------------")
let i = prompt("digite sua idade: ")
for (let i = 0; i < 10; i++) {
    let idade = prompt("digite sua idade: ")
    if (idade >= 18) {
        console.log("MAIOR DE IDADE")
    } else {
        console.log("MENOR DE IDADE")
    }
}

console.log("----------------")
let voto = prompt("digite seu voto (1-6): ")
for (let voto = 0; voto < 5; voto++) {
    let voto = parseInt(prompt("digite seu voto (1-6): "))
    switch (voto) {
        case 1:
            console.log("voto para o candidato 1")
            break
        case 2:
            console.log("voto para o candidato 2")
            break
        case 3:
            console.log("voto para o candidato 3")
            break
        case 4:
            console.log("voto para o candidato 4")
            break
        case 5:
            console.log("voto nulo")
            break
        case 6:
            console.log("voto em branco")
            break
        default:
            console.log("voto inválido")
            break
    }
}