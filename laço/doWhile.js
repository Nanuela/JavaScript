let contador = 0
let contador1 = 0 
while(contador != 5) {
//verificação primeiro executa depois 
    console.log("While:", contador)
    contador++
}
do { //exucuta primeiro, verifica depois 
    console.log("do while:", contador1)
    contador1++
} while (contador1 != 5)

//SEGUNDO EXEMPLO 
let numero = 5 
do {
    console.log(numero)
    numero -= 2 
} while(contador >= 0)

//TERCEIRO EXEMPLO 
let idade = prompt("Qual sua idade?")
do {
    if (idade > 0) {
        console.log("Idade valida")

    } else {
        console.log("Idade invalida")
    }
    idade = prompt("Qual sua idade?")
} while (idade >= 0)